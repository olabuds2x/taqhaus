/**
 * Config for the $99 Google presence + review-request package (/google).
 *
 * Owner-controlled values live here or in env vars. Anything the owner has
 * not supplied yet is left EMPTY on purpose, and the UI shows an honest
 * "pending" state instead of an invented value.
 */

const env = import.meta.env

/**
 * Flip VITE_GOOGLE_CHECKOUT_ENABLED to 'true' once the LIVE Stripe key is set.
 * Until then the owner can still try the real flow (Stripe test mode) by
 * opening /google?checkout=test, which enables checkout for that browser tab.
 */
function testCheckoutOverride(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (new URLSearchParams(window.location.search).get('checkout') === 'test') sessionStorage.setItem('tq_checkout_test', '1')
    return sessionStorage.getItem('tq_checkout_test') === '1'
  } catch {
    return false
  }
}
export const CHECKOUT_ENABLED = env.VITE_GOOGLE_CHECKOUT_ENABLED === 'true' || testCheckoutOverride()

/** The Google account clients invite as Manager. Owner to supply. */
export const GOOGLE_MANAGER_EMAIL: string = env.VITE_GOOGLE_MANAGER_EMAIL || ''

export const OFFER = {
  id: 'google-99',
  /** Owner-approved package name (11 Nov 2026). */
  name: 'The 2-Day Google Listing Tune-Up',
  priceUsd: 99,
  priceLabel: '$99 USD · one-time',
  ctaLabel: 'Improve my Google listing for $99',
  ctaLabelOffline: 'Email us to order — $99',
  secondaryLabel: "See what's included",
} as const

/** Business identity, confirmed by the owner on 11 Nov 2026. */
export const BUSINESS = {
  legalName: 'TaqHaus Inc.',
  // No city/country on purpose: the owner found it put off US prospects (11 Nov 2026).
  email: 'info@taqhaus.com',
} as const

/** Refund and cancellation terms, chosen by the owner on 11 Nov 2026. */
export const REFUND_TERMS: string[] = [
  'If we find your profile isn’t eligible for this package, we cancel the order and refund the full $99.',
  'If you cancel before we start working on your profile, we refund the full $99.',
  'If we can’t complete the work for reasons on our side, we refund the full $99.',
  'If we can’t start because manager access or required information isn’t provided, the “If we can’t get access” section above applies, including the option of a full refund after seven days.',
  'The 2-Day Promise (added 11 November 2026): if we don’t complete the agreed work within two business days (Monday to Friday, excluding public holidays) after we receive manager access and the information we need, we refund the full $99 on request and still finish the work. Time Google takes to review or publish changes doesn’t count. Ask within 14 days of your completion summary.',
  'Apart from the 2-Day Promise, once we’ve delivered your completion summary the fee isn’t refundable. If something in scope isn’t right, tell us within 14 days and we’ll fix it at no charge.',
  'Google’s own decisions (such as declining an edit or delaying a review) aren’t grounds for a refund, because they’re outside our control.',
  'Refunds go back to your original payment method. To ask for one, email info@taqhaus.com with your order reference.',
]

export const PRIVACY_POLICY_URL = '/privacy'

/** Google's own help article on adding people to a Business Profile. */
export const MANAGER_HELP_URL = 'https://support.google.com/business/answer/3403100'

export const TERMS_PATH = '/google/terms'

export function mailto(subject: string, body?: string) {
  const q = new URLSearchParams({ subject })
  if (body) q.set('body', body)
  // URLSearchParams encodes spaces as '+', which some mail clients show literally.
  return `mailto:${BUSINESS.email}?${q.toString().replace(/\+/g, '%20')}`
}

export const ORDER_MAILTO = mailto(
  'Google presence package ($99)',
  "Hi TaqHaus,\n\nI'd like to order the $99 Google presence + review-request package.\n\nBusiness name:\nGoogle profile link:\n",
)
export const COMPLEX_MAILTO = mailto('Google profile: more complex situation')
