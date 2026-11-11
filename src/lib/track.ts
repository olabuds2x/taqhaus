/**
 * Tiny analytics seam for the /google funnel.
 *
 * The site has no analytics tool installed yet, so this loads nothing.
 * Events go to `window.dataLayer` (picked up automatically if Google Tag
 * Manager or similar is added later, with consent handling) and to a
 * `taqhaus:analytics` DOM event. Never pass names, emails or other PII.
 */

export type FunnelEvent =
  | 'offer_page_view'
  | 'offer_primary_cta_click'
  | 'checkout_started'
  | 'purchase_completed'
  | 'onboarding_started'
  | 'onboarding_completed'
  | 'contact_support_clicked'

type Props = Record<string, string | number | boolean | undefined>

declare global {
  interface Window { dataLayer?: unknown[] }
}

/** The build-time prerender runs in a headless browser; keep it out of the data. */
const isAutomated = () => typeof navigator !== 'undefined' && navigator.webdriver === true

export function track(event: FunnelEvent, props: Props = {}) {
  if (typeof window === 'undefined' || isAutomated()) return
  const payload = { event, ...props }
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
    window.dispatchEvent(new CustomEvent('taqhaus:analytics', { detail: payload }))
  } catch {
    /* analytics must never break the page */
  }
  if (import.meta.env.DEV) console.debug('[track]', payload)
}

/** Fire an event once per key per browser (e.g. purchase_completed per order). */
export function trackOnce(key: string, event: FunnelEvent, props: Props = {}) {
  const storeKey = `tq_tracked_${key}`
  try {
    if (localStorage.getItem(storeKey)) return
    localStorage.setItem(storeKey, '1')
  } catch {
    /* storage blocked: fall through and track anyway */
  }
  track(event, props)
}

/* ── UTM persistence (page → checkout) ─────────────────────────────────── */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const UTM_STORE = 'tq_utm'

/** Remember UTM tags from the landing URL for this browser session. */
export function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search)
    const found: Record<string, string> = {}
    for (const k of UTM_KEYS) {
      const v = params.get(k)
      if (v) found[k] = v.slice(0, 100)
    }
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORE, JSON.stringify(found))
  } catch {
    /* ignore */
  }
}

export function getUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORE) || '{}')
  } catch {
    return {}
  }
}
