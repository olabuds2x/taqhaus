/**
 * Minimal Stripe REST client + webhook signature check, using fetch and
 * node:crypto so the site needs no extra dependency. Files under api/_lib
 * are not deployed as endpoints (Vercel skips paths starting with "_").
 */
import { createHmac, timingSafeEqual } from 'node:crypto'

const API = 'https://api.stripe.com/v1'
const API_VERSION = '2024-06-20'

export class StripeError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export const stripeConfigured = () => Boolean(process.env.STRIPE_SECRET_KEY)

type Value = string | number | boolean | null | undefined
export type Params = { [key: string]: Value | Params | Array<Value | Params> }

/** Flatten nested params into Stripe's bracket form: a[b][0][c]=v */
export function encodeParams(params: Params, prefix = ''): [string, string][] {
  const out: [string, string][] = []
  for (const [k, v] of Object.entries(params)) {
    const key = prefix ? `${prefix}[${k}]` : k
    if (v === undefined || v === null) continue
    if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (item !== null && typeof item === 'object') out.push(...encodeParams(item, `${key}[${i}]`))
        else if (item !== undefined && item !== null) out.push([`${key}[${i}]`, String(item)])
      })
    } else if (typeof v === 'object') {
      out.push(...encodeParams(v, key))
    } else {
      out.push([key, String(v)])
    }
  }
  return out
}

export async function stripe<T>(method: 'GET' | 'POST', path: string, params?: Params): Promise<T> {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new StripeError('Stripe is not configured', 503)

  const qs = params ? new URLSearchParams(encodeParams(params)).toString() : ''
  const url = method === 'GET' && qs ? `${API}${path}?${qs}` : `${API}${path}`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Stripe-Version': API_VERSION,
    },
    body: method === 'POST' ? qs : undefined,
  })
  const json = (await res.json().catch(() => ({}))) as { error?: { message?: string } }
  if (!res.ok) throw new StripeError(json.error?.message || `Stripe request failed (${res.status})`, res.status)
  return json as T
}

/**
 * Verify a `Stripe-Signature` header against the raw request body.
 * Same scheme as Stripe's SDKs: HMAC-SHA256 of `${t}.${body}`, 5 min tolerance.
 */
export function verifyWebhookSignature(
  payload: string,
  header: string | null,
  secret: string,
  toleranceSec = 300,
  nowSec = Math.floor(Date.now() / 1000),
): boolean {
  if (!header || !secret) return false
  let t = ''
  const sigs: string[] = []
  for (const part of header.split(',')) {
    const i = part.indexOf('=')
    if (i < 0) continue
    const k = part.slice(0, i).trim()
    const v = part.slice(i + 1).trim()
    if (k === 't') t = v
    else if (k === 'v1') sigs.push(v)
  }
  const ts = Number(t)
  if (!t || !Number.isFinite(ts) || !sigs.length) return false
  if (Math.abs(nowSec - ts) > toleranceSec) return false

  const expected = createHmac('sha256', secret).update(`${t}.${payload}`, 'utf8').digest()
  return sigs.some(sig => {
    if (!/^[0-9a-f]+$/i.test(sig)) return false
    const given = Buffer.from(sig, 'hex')
    return given.length === expected.length && timingSafeEqual(given, expected)
  })
}

/* ── The few Stripe object shapes we read ──────────────────────────────── */

export type Metadata = Record<string, string>

export type PaymentIntent = {
  id: string
  status: string
  amount_received: number
  currency: string
  metadata: Metadata
}

export type CheckoutSession = {
  id: string
  url: string | null
  status: 'open' | 'complete' | 'expired'
  payment_status: 'paid' | 'unpaid' | 'no_payment_required'
  amount_total: number | null
  currency: string | null
  client_reference_id: string | null
  customer_details: { email: string | null; name: string | null } | null
  metadata: Metadata
  payment_intent: string | PaymentIntent | null
  /** Present when the customer paid in their local currency (Adaptive Pricing). */
  currency_conversion?: { amount_total: number; source_currency: string } | null
}

export type Charge = {
  id: string
  refunded: boolean
  payment_intent: string | null
}
