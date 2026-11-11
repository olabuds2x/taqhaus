/**
 * GET /api/google/order?session_id=cs_... → server-verified order state.
 * The confirmation page trusts only this, never the redirect itself.
 * Read-only: the webhook is the single writer of the "paid" record.
 */
import { json } from '../_lib/http.js'
import { stripeConfigured, StripeError } from '../_lib/stripe.js'
import { getSession, isSessionId, orderView } from '../_lib/order.js'

export async function GET(request: Request): Promise<Response> {
  if (!stripeConfigured()) return json({ error: 'checkout_unavailable' }, 503)

  const sessionId = new URL(request.url).searchParams.get('session_id')
  if (!isSessionId(sessionId)) return json({ error: 'not_found' }, 404)

  try {
    const session = await getSession(sessionId)
    if (!session) return json({ error: 'not_found' }, 404)
    return json(orderView(session))
  } catch (err) {
    if (err instanceof StripeError && err.status === 404) return json({ error: 'not_found' }, 404)
    console.error('[google/order]', err)
    return json({ error: 'lookup_failed' }, 502)
  }
}
