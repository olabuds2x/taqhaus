/**
 * Order record for the $99 Google package.
 *
 * There is no database on this site, so the Stripe PaymentIntent IS the
 * order record: status and onboarding answers live in its metadata, which
 * the team can see and edit in the Stripe dashboard (Payments → payment →
 * Metadata). One paid Checkout Session = one PaymentIntent = one order, so
 * duplicate fulfilment records cannot exist.
 */
import { randomBytes } from 'node:crypto'
import { stripe, type CheckoutSession, type PaymentIntent, type Metadata } from './stripe.js'
import { sendEmail, teamInbox } from './email.js'

export const OFFER_ID = 'google-99'
export const PRICE_CENTS = 9900
export const CURRENCY = 'usd'

export const ORDER_STATUSES = [
  'paid',
  'awaiting_details',
  'awaiting_access',
  'in_review',
  'changes_approved',
  'working',
  'delivered',
  'not_eligible',
  'refunded',
  'blocked',
] as const
export type OrderStatus = (typeof ORDER_STATUSES)[number]

/** Human-friendly order reference, e.g. TQG-7K4M9P (no 0/O/1/I). */
export function newOrderRef(): string {
  const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  const bytes = randomBytes(6)
  return 'TQG-' + Array.from(bytes, b => alphabet[b % alphabet.length]).join('')
}

export const isSessionId = (id: unknown): id is string =>
  typeof id === 'string' && /^cs_(test|live)_[A-Za-z0-9]{10,200}$/.test(id)

export async function getSession(sessionId: string): Promise<CheckoutSession | null> {
  const s = await stripe<CheckoutSession>('GET', `/checkout/sessions/${sessionId}`, {
    expand: ['payment_intent'],
  })
  return s.metadata?.offer === OFFER_ID ? s : null
}

const intentOf = (s: CheckoutSession): PaymentIntent | null =>
  s.payment_intent && typeof s.payment_intent === 'object' ? s.payment_intent : null

export const isPaid = (s: CheckoutSession) => s.status === 'complete' && s.payment_status === 'paid'

/** What the browser is allowed to know about an order. No payment details. */
export function orderView(s: CheckoutSession) {
  const pi = intentOf(s)
  const meta: Metadata = pi?.metadata || {}
  const state = isPaid(s) ? 'paid' : s.status === 'complete' ? 'processing' : s.status === 'expired' ? 'expired' : 'open'
  return {
    state,
    orderRef: s.metadata.order_ref || s.client_reference_id || '',
    // What the customer actually paid, in their currency…
    amount: s.amount_total != null ? s.amount_total / 100 : null,
    currency: (s.currency || CURRENCY).toUpperCase(),
    // …and the USD price it came from (for reporting).
    amountUsd: (s.currency_conversion?.amount_total ?? s.amount_total ?? PRICE_CENTS) / 100,
    orderStatus: meta.order_status || (state === 'paid' ? 'awaiting_details' : ''),
    detailsReceived: Boolean(meta.ob_submitted_at),
    email: s.customer_details?.email || '',
  }
}

export async function updateIntentMetadata(piId: string, metadata: Metadata) {
  return stripe<PaymentIntent>('POST', `/payment_intents/${piId}`, { metadata })
}

export function dashboardLink(piId: string) {
  const test = (process.env.STRIPE_SECRET_KEY || '').startsWith('sk_test')
  return `https://dashboard.stripe.com/${test ? 'test/' : ''}payments/${piId}`
}

/**
 * Record a verified payment exactly once. Called from the webhook only.
 * `paid_notified` makes Stripe's retries and duplicate deliveries no-ops.
 */
export async function recordPaidOrder(sessionId: string, origin: string): Promise<'recorded' | 'duplicate' | 'skipped'> {
  const s = await getSession(sessionId)
  if (!s || !isPaid(s)) return 'skipped'
  const pi = intentOf(s)
  if (!pi) return 'skipped'
  if (pi.metadata.paid_notified === 'yes') return 'duplicate'

  // Write the record first: if email fails, the order still exists in Stripe.
  await updateIntentMetadata(pi.id, {
    paid_notified: 'yes',
    paid_at: new Date().toISOString(),
    order_status: pi.metadata.order_status || 'awaiting_details',
  })

  const ref = s.metadata.order_ref
  const resumeUrl = `${origin}/google/welcome?session_id=${s.id}`
  const view = orderView(s)

  await sendEmail({
    to: teamInbox(),
    subject: `New $99 Google order ${ref} — awaiting details`,
    text: [
      `Order: ${ref}`,
      `Status: ${pi.metadata.order_status || 'awaiting_details'}`,
      `Amount: ${view.amount} ${view.currency}`,
      `Stripe: ${dashboardLink(pi.id)}`,
      '',
      'The customer has been sent to the onboarding form. You will get a second email when they submit it.',
    ].join('\n'),
  })

  if (view.email) {
    await sendEmail({
      to: view.email,
      replyTo: teamInbox() || undefined,
      subject: `Your TaqHaus order ${ref}: next step`,
      text: [
        'Thanks for your order. Your payment went through.',
        '',
        'Next, tell us about your business so we can start. It takes about five minutes:',
        resumeUrl,
        '',
        'We will never ask for your Google password.',
        '',
        `Order reference: ${ref}`,
        'Questions? Just reply to this email.',
        '',
        'TaqHaus',
      ].join('\n'),
    })
  }
  return 'recorded'
}

export async function markRefunded(piId: string) {
  const pi = await stripe<PaymentIntent>('GET', `/payment_intents/${piId}`)
  if (pi.metadata.offer !== OFFER_ID || pi.metadata.order_status === 'refunded') return
  await updateIntentMetadata(pi.id, { order_status: 'refunded' })
  await sendEmail({
    to: teamInbox(),
    subject: `Google order ${pi.metadata.order_ref || pi.id} refunded`,
    text: `Order ${pi.metadata.order_ref || pi.id} is now marked refunded.\nStripe: ${dashboardLink(pi.id)}`,
  })
}

/* ── Onboarding ─────────────────────────────────────────────────────────── */

export type OnboardingInput = {
  businessName: string
  profileUrl: string
  websiteUrl: string
  contactName: string
  contactEmail: string
  serviceArea: string
  services: string
  hours: string
  reviewProcess: string
  authorized: boolean
  contactOk: boolean
}

// Stripe metadata values max out at 500 characters.
const LIMITS: Record<keyof OnboardingInput, number> = {
  businessName: 120,
  profileUrl: 500,
  websiteUrl: 300,
  contactName: 120,
  contactEmail: 200,
  serviceArea: 500,
  services: 500,
  hours: 300,
  reviewProcess: 500,
  authorized: 0,
  contactOk: 0,
}
const REQUIRED: (keyof OnboardingInput)[] = ['businessName', 'profileUrl', 'contactName', 'contactEmail', 'serviceArea', 'services', 'hours']

const isHttpUrl = (v: string) => {
  try {
    const u = new URL(v)
    return u.protocol === 'https:' || u.protocol === 'http:'
  } catch {
    return false
  }
}

/** Returns cleaned input or a map of field → error message. */
export function validateOnboarding(raw: Partial<Record<keyof OnboardingInput, unknown>>):
  | { ok: true; data: OnboardingInput }
  | { ok: false; errors: Partial<Record<keyof OnboardingInput, string>> } {
  const errors: Partial<Record<keyof OnboardingInput, string>> = {}
  const text = (k: keyof OnboardingInput) => (typeof raw[k] === 'string' ? (raw[k] as string).trim() : '')
  const data = {} as OnboardingInput

  for (const k of Object.keys(LIMITS) as (keyof OnboardingInput)[]) {
    if (k === 'authorized' || k === 'contactOk') continue
    const v = text(k)
    if (REQUIRED.includes(k) && !v) errors[k] = 'Required'
    else if (v.length > LIMITS[k]) errors[k] = `Keep this under ${LIMITS[k]} characters`
    ;(data as Record<string, unknown>)[k] = v
  }
  if (data.profileUrl && !isHttpUrl(data.profileUrl)) errors.profileUrl = 'Paste the full link, starting with https://'
  if (data.websiteUrl && !isHttpUrl(data.websiteUrl)) errors.websiteUrl = 'Paste the full link, starting with https://'
  if (data.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) errors.contactEmail = 'Enter a valid email'
  data.authorized = raw.authorized === true
  data.contactOk = raw.contactOk === true
  if (!data.authorized) errors.authorized = 'Please confirm'
  if (!data.contactOk) errors.contactOk = 'Please confirm'

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data }
}

export async function saveOnboarding(s: CheckoutSession, data: OnboardingInput): Promise<'saved' | 'already_submitted'> {
  const pi = intentOf(s)
  if (!pi) throw new Error('Paid session has no payment intent')
  if (pi.metadata.ob_submitted_at) return 'already_submitted'

  const current = pi.metadata.order_status || ''
  const next = !current || current === 'paid' || current === 'awaiting_details' ? 'awaiting_access' : current

  await updateIntentMetadata(pi.id, {
    order_status: next,
    ob_submitted_at: new Date().toISOString(),
    ob_business: data.businessName,
    ob_profile_url: data.profileUrl,
    ob_website: data.websiteUrl,
    ob_contact_name: data.contactName,
    ob_contact_email: data.contactEmail,
    ob_service_area: data.serviceArea,
    ob_services: data.services,
    ob_hours: data.hours,
    ob_review_process: data.reviewProcess,
    ob_authorized: 'yes',
    ob_contact_ok: 'yes',
  })

  const ref = s.metadata.order_ref
  await sendEmail({
    to: teamInbox(),
    replyTo: data.contactEmail,
    subject: `Google order ${ref}: details received — ${next}`,
    text: [
      `Order: ${ref}`,
      `Status: ${next}`,
      `Business: ${data.businessName}`,
      `Google profile: ${data.profileUrl}`,
      `Contact: ${data.contactName} <${data.contactEmail}>`,
      '',
      `All answers are on the payment in Stripe (Metadata): ${dashboardLink(pi.id)}`,
      'Next: confirm eligibility and check the Manager invite has arrived.',
    ].join('\n'),
  })

  await sendEmail({
    to: data.contactEmail,
    replyTo: teamInbox() || undefined,
    subject: `We have your details — order ${ref}`,
    text: [
      `Hi ${data.contactName},`,
      '',
      `Thanks. We have the details for ${data.businessName}.`,
      '',
      'If you have not yet invited TaqHaus as a Manager on your Google Business Profile, please do that next. We will never ask for your Google password.',
      '',
      "We aim to complete our work within two business days after receiving required access and information. Google's review and publication timing may take longer. We will ask for your approval before making material changes.",
      '',
      `Order reference: ${ref}`,
      'Questions? Just reply to this email.',
      '',
      'TaqHaus',
    ].join('\n'),
  })

  return 'saved'
}
