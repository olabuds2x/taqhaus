/**
 * POST /api/google/webhook — Stripe events for the $99 Google package.
 * Subscribe the endpoint to:
 *   checkout.session.completed
 *   checkout.session.async_payment_succeeded
 *   checkout.session.async_payment_failed
 *   charge.refunded
 * Any non-2xx makes Stripe retry, which is safe: recording is idempotent.
 */
import { json, siteOrigin } from '../_lib/http.js'
import { stripeConfigured, verifyWebhookSignature, type Charge, type CheckoutSession } from '../_lib/stripe.js'
import { OFFER_ID, markRefunded, recordPaidOrder } from '../_lib/order.js'

type StripeEvent = { id: string; type: string; data: { object: unknown } }

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.STRIPE_WEBHOOK_SECRET || ''
  if (!secret || !stripeConfigured()) return json({ error: 'not_configured' }, 503)

  const payload = await request.text()
  if (!verifyWebhookSignature(payload, request.headers.get('stripe-signature'), secret)) {
    return json({ error: 'invalid_signature' }, 400)
  }

  let event: StripeEvent
  try {
    event = JSON.parse(payload)
  } catch {
    return json({ error: 'invalid_payload' }, 400)
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded': {
        const s = event.data.object as CheckoutSession
        if (s.metadata?.offer !== OFFER_ID) break
        // Delayed payment methods complete as "unpaid"; the async event follows.
        if (s.payment_status === 'paid') {
          const outcome = await recordPaidOrder(s.id, siteOrigin(request))
          console.log(`[google/webhook] ${event.type} ${s.metadata.order_ref}: ${outcome}`)
        }
        break
      }
      case 'checkout.session.async_payment_failed': {
        const s = event.data.object as CheckoutSession
        if (s.metadata?.offer === OFFER_ID) console.warn(`[google/webhook] payment failed for ${s.metadata.order_ref}`)
        break
      }
      case 'charge.refunded': {
        const c = event.data.object as Charge
        if (c.refunded && c.payment_intent) await markRefunded(c.payment_intent)
        break
      }
    }
  } catch (err) {
    console.error(`[google/webhook] ${event.type} ${event.id} failed`, err)
    return json({ error: 'handler_failed' }, 500)
  }

  return json({ received: true })
}
