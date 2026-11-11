/**
 * POST /api/google/onboarding  { sessionId, ...fields }
 * Accepts the onboarding form only for a server-verified paid order, once.
 */
import { json, readJson } from '../_lib/http.js'
import { stripeConfigured, StripeError } from '../_lib/stripe.js'
import { getSession, isPaid, isSessionId, saveOnboarding, validateOnboarding } from '../_lib/order.js'

export async function POST(request: Request): Promise<Response> {
  if (!stripeConfigured()) return json({ error: 'checkout_unavailable' }, 503)

  const body = await readJson<Record<string, unknown>>(request)
  if (!isSessionId(body.sessionId)) return json({ error: 'not_found' }, 404)

  const result = validateOnboarding(body)
  // `in` check narrows even under Vercel's non-strict compile settings.
  if ('errors' in result) return json({ error: 'invalid', fields: result.errors }, 422)

  try {
    const session = await getSession(body.sessionId)
    if (!session) return json({ error: 'not_found' }, 404)
    if (!isPaid(session)) return json({ error: 'not_paid' }, 402)

    const outcome = await saveOnboarding(session, result.data)
    if (outcome === 'already_submitted') return json({ error: 'already_submitted' }, 409)
    return json({ ok: true })
  } catch (err) {
    if (err instanceof StripeError && err.status === 404) return json({ error: 'not_found' }, 404)
    console.error('[google/onboarding]', err)
    return json({ error: 'save_failed' }, 502)
  }
}
