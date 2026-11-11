/**
 * POST /api/google/checkout → { url } for a Stripe Checkout Session.
 * Returns 503 `checkout_unavailable` until STRIPE_SECRET_KEY is set, so the
 * page can fall back to the email route instead of pretending to sell.
 */
import { json, readJson, siteOrigin } from '../_lib/http.js'
import { stripe, stripeConfigured, type CheckoutSession, type Params } from '../_lib/stripe.js'
import { CURRENCY, OFFER_ID, PRICE_CENTS, newOrderRef } from '../_lib/order.js'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

export async function POST(request: Request): Promise<Response> {
  if (!stripeConfigured()) return json({ error: 'checkout_unavailable' }, 503)

  const body = await readJson<{ utm: Record<string, unknown> }>(request)
  const utm: Record<string, string> = {}
  for (const k of UTM_KEYS) {
    const v = body.utm?.[k]
    if (typeof v === 'string' && v) utm[k] = v.slice(0, 100)
  }

  const origin = siteOrigin(request)
  const orderRef = newOrderRef()
  const priceId = process.env.STRIPE_PRICE_ID

  const lineItem: Params = priceId
    ? { price: priceId, quantity: 1 }
    : {
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          unit_amount: PRICE_CENTS,
          product_data: {
            name: 'Google presence + review-request setup',
            description: 'One-time service. A clearer Google business listing and a simple, genuine review-request setup.',
          },
        },
      }

  const params: Params = {
    mode: 'payment',
    line_items: [lineItem],
    client_reference_id: orderRef,
    success_url: `${origin}/google/welcome?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/google?checkout=cancelled`,
    metadata: { offer: OFFER_ID, order_ref: orderRef, ...utm },
    payment_intent_data: {
      description: `TaqHaus Google package ${orderRef}`,
      metadata: { offer: OFFER_ID, order_ref: orderRef },
    },
    custom_text: {
      submit: { message: 'One-time payment. No subscription. We will never ask for your Google password.' },
    },
    // Show customers their local currency where Stripe supports it (Adaptive Pricing);
    // otherwise everyone pays in USD. TaqHaus still receives the USD-equivalent amount.
    adaptive_pricing: { enabled: true },
  }
  if (process.env.STRIPE_AUTOMATIC_TAX === 'true') params.automatic_tax = { enabled: true }

  try {
    const session = await stripe<CheckoutSession>('POST', '/checkout/sessions', params)
    if (!session.url) throw new Error('Stripe returned no checkout URL')
    return json({ url: session.url })
  } catch (err) {
    console.error('[google/checkout]', err)
    return json({ error: 'checkout_failed' }, 502)
  }
}
