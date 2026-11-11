import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CircleCheck, ExternalLink, KeyRound, ShieldCheck } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { OfferFooter, OfferNav } from '@/components/google/OfferChrome'
import { HookArrow } from '@/components/site/HookArrow'
import { track, trackOnce } from '@/lib/track'
import { BUSINESS, GOOGLE_MANAGER_EMAIL, MANAGER_HELP_URL, TERMS_PATH } from '@/lib/googleOffer'
import { timeline } from '@/data/googleOffer'

type Order = {
  state: 'paid' | 'processing' | 'open' | 'expired'
  orderRef: string
  amount: number | null
  currency: string
  amountUsd: number
  orderStatus: string
  detailsReceived: boolean
  email: string
}

type Fields = {
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
type Errors = Partial<Record<keyof Fields, string>>

type View =
  | { kind: 'checking' }
  | { kind: 'missing' }
  | { kind: 'error' }
  | { kind: 'unpaid'; order: Order }
  | { kind: 'form'; order: Order }
  | { kind: 'done'; order: Order; already?: boolean }

const SESSION_STORE = 'tq_google_session'
const EMPTY: Fields = {
  businessName: '', profileUrl: '', websiteUrl: '', contactName: '', contactEmail: '',
  serviceArea: '', services: '', hours: '', reviewProcess: '', authorized: false, contactOk: false,
}
const REQUIRED: (keyof Fields)[] = ['businessName', 'profileUrl', 'contactName', 'contactEmail', 'serviceArea', 'services', 'hours']

const store = {
  get: (k: string) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v) } catch { /* blocked */ } },
  del: (k: string) => { try { localStorage.removeItem(k) } catch { /* blocked */ } },
}

const isUrl = (v: string) => { try { return /^https?:$/.test(new URL(v).protocol) } catch { return false } }

function validate(f: Fields): Errors {
  const e: Errors = {}
  for (const k of REQUIRED) if (!String(f[k]).trim()) e[k] = 'Please fill this in.'
  if (f.profileUrl.trim() && !isUrl(f.profileUrl.trim())) e.profileUrl = 'Paste the full link, starting with https://'
  if (f.websiteUrl.trim() && !isUrl(f.websiteUrl.trim())) e.websiteUrl = 'Paste the full link, starting with https://'
  if (f.contactEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.contactEmail.trim())) e.contactEmail = 'Enter a valid email address.'
  if (!f.authorized) e.authorized = 'Please confirm you can authorize this.'
  if (!f.contactOk) e.contactOk = 'Please confirm we can contact you about this order.'
  return e
}

export default function GoogleOnboarding() {
  const [params, setParams] = useSearchParams()
  const [view, setView] = useState<View>({ kind: 'checking' })
  const sessionId = params.get('session_id') || store.get(SESSION_STORE) || ''

  const load = useCallback(async () => {
    // The build-time prerender has no order; keep the neutral "checking" shell.
    if (navigator.webdriver) return
    if (!sessionId) return setView({ kind: 'missing' })
    setView({ kind: 'checking' })
    try {
      const res = await fetch(`/api/google/order?session_id=${encodeURIComponent(sessionId)}`)
      if (res.status === 404) return setView({ kind: 'missing' })
      if (!res.ok) throw new Error(String(res.status))
      const order = (await res.json()) as Order
      if (order.state !== 'paid') return setView({ kind: 'unpaid', order })

      trackOnce(`purchase_${order.orderRef}`, 'purchase_completed', {
        order_id: order.orderRef,
        value: order.amountUsd,
        currency: 'USD',
      })
      setView(order.detailsReceived ? { kind: 'done', order, already: true } : { kind: 'form', order })
    } catch {
      setView({ kind: 'error' })
    }
  }, [sessionId])

  useEffect(() => {
    if (!sessionId) { load(); return }
    store.set(SESSION_STORE, sessionId)
    // Keep the resume link in the address bar so it can be bookmarked.
    if (!params.get('session_id')) setParams({ session_id: sessionId }, { replace: true })
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId])

  return (
    <div className="tq-editorial tq-offer">
      <SEO title="Your order | TaqHaus" description="Order confirmation and onboarding for the TaqHaus Google presence package." canonical="/google/welcome" robots="noindex, nofollow" />
      <OfferNav mode="order" />

      <main id="main" className="go-order">
        <div className="wrap go-order-wrap">
          {view.kind === 'checking' && (
            <div className="go-state" role="status" aria-live="polite">
              <h1>Checking your order&hellip;</h1>
              <p>This takes a second. We confirm every payment with our payment provider before showing it here.</p>
            </div>
          )}

          {view.kind === 'missing' && (
            <div className="go-state">
              <h1>We couldn&rsquo;t find an order on this page.</h1>
              <p>
                If you&rsquo;ve paid, use the link in your order email, or email{' '}
                <a href={`mailto:${BUSINESS.email}`} onClick={() => track('contact_support_clicked', { location: 'order_missing' })}>{BUSINESS.email}</a>{' '}
                with your order reference and we&rsquo;ll help.
              </p>
              <Link to="/google" className="pill-btn pill-btn--pine">Back to the package <HookArrow /></Link>
            </div>
          )}

          {view.kind === 'error' && (
            <div className="go-state" role="alert">
              <h1>We couldn&rsquo;t check your order just now.</h1>
              <p>
                Your payment is not affected. Please try again in a moment. If it keeps happening, email{' '}
                <a href={`mailto:${BUSINESS.email}`} onClick={() => track('contact_support_clicked', { location: 'order_error' })}>{BUSINESS.email}</a>.
              </p>
              <button type="button" className="pill-btn pill-btn--pine" onClick={load}>Try again</button>
            </div>
          )}

          {view.kind === 'unpaid' && (
            <div className="go-state">
              {view.order.state === 'processing' ? (
                <>
                  <h1>Your payment is still processing.</h1>
                  <p>Some payment methods take a little longer. You don&rsquo;t need to pay again. Check back shortly, or watch for your receipt by email.</p>
                  <button type="button" className="pill-btn pill-btn--pine" onClick={load}>Check again</button>
                </>
              ) : (
                <>
                  <h1>Checkout wasn&rsquo;t completed.</h1>
                  <p>You have not been charged for this order. You can start again whenever you&rsquo;re ready.</p>
                  <Link to="/google" className="pill-btn pill-btn--pine">Back to the package <HookArrow /></Link>
                </>
              )}
            </div>
          )}

          {view.kind === 'form' && (
            <OnboardingForm
              order={view.order}
              sessionId={sessionId}
              onDone={(already) => setView({ kind: 'done', order: view.order, already })}
            />
          )}

          {view.kind === 'done' && <Done order={view.order} already={view.already} />}
        </div>
      </main>

      <OfferFooter />
    </div>
  )
}

/* ── Manager access instructions ──────────────────────────────────────── */

function ManagerAccess() {
  return (
    <aside className="go-access" aria-labelledby="go-access-title">
      <h2 id="go-access-title"><KeyRound size={20} strokeWidth={2.2} aria-hidden="true" /> Giving us access</h2>
      <p><strong>We will never ask for your Google password.</strong> Instead, you invite TaqHaus as a <em>Manager</em> on your Business Profile. You stay the owner and can remove us at any time.</p>
      <ol>
        <li>Sign in to the Google account that manages your Business Profile.</li>
        <li>Open your profile&rsquo;s settings and find the section for managing people and access.</li>
        <li>
          Invite{' '}
          {GOOGLE_MANAGER_EMAIL ? <strong>{GOOGLE_MANAGER_EMAIL}</strong> : 'the TaqHaus address we email you'}{' '}
          and choose the <strong>Manager</strong> role.
        </li>
      </ol>
      {!GOOGLE_MANAGER_EMAIL && <p>We&rsquo;ll send you the exact address to invite once we&rsquo;ve checked your details.</p>}
      <a href={MANAGER_HELP_URL} target="_blank" rel="noopener noreferrer" className="go-text-link">
        Google&rsquo;s help page: adding people to your profile <ExternalLink size={14} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </aside>
  )
}

/* ── Onboarding form ──────────────────────────────────────────────────── */

function OnboardingForm({ order, sessionId, onDone }: { order: Order; sessionId: string; onDone: (already: boolean) => void }) {
  const draftKey = `tq_google_draft_${order.orderRef}`
  const [f, setF] = useState<Fields>(() => {
    const saved = store.get(draftKey)
    if (saved) { try { return { ...EMPTY, ...JSON.parse(saved) } } catch { /* corrupt draft */ } }
    return { ...EMPTY, contactEmail: order.email }
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'failed'>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => { store.set(draftKey, JSON.stringify(f)) }, [draftKey, f])

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF(prev => ({ ...prev, [k]: v }))
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: undefined }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(f)
    setErrors(found)
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/google/onboarding', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sessionId, ...f }),
      })
      if (res.status === 409) { store.del(draftKey); return onDone(true) }
      if (res.status === 422) {
        const data = (await res.json().catch(() => ({}))) as { fields?: Errors }
        setErrors(data.fields || {})
        setStatus('idle')
        requestAnimationFrame(() => summaryRef.current?.focus())
        return
      }
      if (!res.ok) throw new Error(String(res.status))
      store.del(draftKey)
      trackOnce(`onboarding_done_${order.orderRef}`, 'onboarding_completed', { order_id: order.orderRef })
      onDone(false)
    } catch {
      setStatus('failed')
    }
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  const text = (k: keyof Fields, label: string, opts: { hint?: string; optional?: boolean; type?: string; multiline?: boolean; autoComplete?: string; placeholder?: string } = {}) => {
    const id = `ob-${k}`
    const describedBy = [opts.hint && `${id}-hint`, errors[k] && `${id}-err`].filter(Boolean).join(' ') || undefined
    const common = {
      id,
      name: k,
      value: f[k] as string,
      onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(k, ev.target.value as Fields[typeof k]),
      'aria-invalid': errors[k] ? true : undefined,
      'aria-describedby': describedBy,
      required: !opts.optional,
      autoComplete: opts.autoComplete,
      placeholder: opts.placeholder,
    }
    return (
      <div className="go-field" data-invalid={errors[k] ? '' : undefined}>
        <label htmlFor={id}>{label}{opts.optional && <span className="opt"> (optional)</span>}</label>
        {opts.hint && <p id={`${id}-hint`} className="go-hint">{opts.hint}</p>}
        {opts.multiline ? <textarea rows={3} {...common} /> : <input type={opts.type || 'text'} {...common} />}
        {errors[k] && <p id={`${id}-err`} className="go-err">{errors[k]}</p>}
      </div>
    )
  }

  const check = (k: 'authorized' | 'contactOk', label: React.ReactNode) => (
    <div className="go-check" data-invalid={errors[k] ? '' : undefined}>
      <input
        id={`ob-${k}`}
        type="checkbox"
        checked={f[k]}
        onChange={e => set(k, e.target.checked)}
        aria-invalid={errors[k] ? true : undefined}
        aria-describedby={errors[k] ? `ob-${k}-err` : undefined}
        required
      />
      <label htmlFor={`ob-${k}`}>{label}</label>
      {errors[k] && <p id={`ob-${k}-err`} className="go-err">{errors[k]}</p>}
    </div>
  )

  return (
    <>
      <header className="go-order-head">
        <span className="go-paid"><CircleCheck size={18} strokeWidth={2.4} aria-hidden="true" /> Payment confirmed</span>
        <h1>Thanks. <em>Now tell us about your business.</em></h1>
        <p>
          Order <strong>{order.orderRef}</strong>
          {order.amount != null && <> · {order.amount.toFixed(2)} {order.currency}, one-time</>}. This form takes about five minutes.
        </p>
        <p className="go-resume">
          Need to stop? Your answers are saved on this device, and you can come back using the link in this page&rsquo;s
          address bar or your order email. Lost it? Email {BUSINESS.email} with your order reference.
        </p>
      </header>

      <div className="go-order-grid">
        <form
          className="go-form"
          noValidate
          onSubmit={submit}
          onFocusCapture={() => trackOnce(`onboarding_start_${order.orderRef}`, 'onboarding_started', { order_id: order.orderRef })}
        >
          {errorCount > 0 && (
            <div className="go-form-errors" role="alert" tabIndex={-1} ref={summaryRef}>
              Please check {errorCount === 1 ? 'one field' : `${errorCount} fields`} below.
            </div>
          )}

          <fieldset>
            <legend>Your business</legend>
            {text('businessName', 'Business name', { autoComplete: 'organization' })}
            {text('profileUrl', 'Google Business Profile link', {
              type: 'url',
              hint: 'Search your business on Google Maps, tap Share, and paste the link here.',
              placeholder: 'https://',
            })}
            {text('websiteUrl', 'Website', { type: 'url', optional: true, autoComplete: 'url', placeholder: 'https://' })}
            {text('serviceArea', 'Service area', { hint: 'Towns, cities or ZIP codes you cover.', multiline: true })}
            {text('services', 'Your top services', { hint: 'For example: furnace repair, AC installation, water heaters.', multiline: true })}
            {text('hours', 'Business hours', { hint: 'Include emergency or after-hours service if you offer it.', multiline: true })}
            {text('reviewProcess', 'How do you ask for reviews today?', { optional: true, multiline: true, hint: 'It’s fine if the answer is “we don’t.”' })}
          </fieldset>

          <fieldset>
            <legend>Who we should contact</legend>
            {text('contactName', 'Your name', { autoComplete: 'name' })}
            {text('contactEmail', 'Email', { type: 'email', autoComplete: 'email' })}
          </fieldset>

          <fieldset>
            <legend>Permission</legend>
            {check('authorized', <>I own this Google Business Profile or am authorized to manage it, and I&rsquo;ll invite TaqHaus as a Manager. I understand TaqHaus will never ask for my Google password.</>)}
            {check('contactOk', 'TaqHaus may contact me by email about this order.')}
          </fieldset>

          {status === 'failed' && (
            <p className="go-cta-error" role="alert">
              We couldn&rsquo;t save your details. Your answers are still here. Please try again, or email {BUSINESS.email}.
            </p>
          )}

          <button type="submit" className="pill-btn pill-btn--coral pill-btn--block" disabled={status === 'sending'} aria-busy={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : <>Send my details <HookArrow /></>}
          </button>
          <p className="go-form-foot">
            <ShieldCheck size={16} aria-hidden="true" /> We use these details only for this order. <Link to={TERMS_PATH}>Package terms</Link>
          </p>
        </form>

        <ManagerAccess />
      </div>
    </>
  )
}

/* ── Done ─────────────────────────────────────────────────────────────── */

function Done({ order, already }: { order: Order; already?: boolean }) {
  return (
    <>
      <header className="go-order-head">
        <span className="go-paid"><CircleCheck size={18} strokeWidth={2.4} aria-hidden="true" /> {already ? 'Details already received' : 'Details received'}</span>
        <h1>You&rsquo;re all set. <em>Here&rsquo;s what happens next.</em></h1>
        <p>Order <strong>{order.orderRef}</strong>. We&rsquo;ll be in touch at the email you gave us.</p>
      </header>

      <div className="go-order-grid">
        <ol className="go-next">
          <li><span><strong>Invite TaqHaus as a Manager</strong> on your Google Business Profile, if you haven&rsquo;t yet.</span></li>
          <li><span><strong>We check your details</strong> and confirm the package fits your profile.</span></li>
          <li><span><strong>We ask for your approval</strong> before making material changes.</span></li>
          <li><span><strong>You get a completion summary</strong> and your review-request materials.</span></li>
          <li className="go-next-note">{timeline}</li>
        </ol>
        <ManagerAccess />
      </div>
    </>
  )
}
