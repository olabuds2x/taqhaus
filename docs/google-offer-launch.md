# $99 Google package: launch and operations notes

Pages: `/google` (landing), `/google/terms` (scope, eligibility, refunds), `/google/welcome` (order confirmation and onboarding; `noindex`, not in the sitemap).
Homepage bridge: a link inside the "Google (SEO)" service card. A second link sits under the hero CTAs on `/services/seo`.

## Current state (11 Nov 2026): LIVE

Taking real payments. Vercel Production holds a live **restricted** Stripe key (`rk_live_…`, "full access except sensitive operations") and the live webhook secret (`we_1UaTxVEBto62pJQMv9258j2Y` → `https://www.taqhaus.com/api/google/webhook`), and `VITE_GOOGLE_CHECKOUT_ENABLED=true`. The test-mode webhook `we_1UaTd3Cp1NbI4rjKe7sHjaZF` is disabled. To test in the sandbox again, use a Preview deployment with test keys rather than production.

Local currency: checkout requests Stripe Adaptive Pricing. In test mode, Stripe still showed USD for simulated Canadian, UK and US customers, so the account may need it switched on in the dashboard, or it may not be offered for this account. Either way, customers are charged correctly.

## Original launch checklist (for reference)

Checkout is **off** by default. Until `VITE_GOOGLE_CHECKOUT_ENABLED=true`, every primary CTA reads "Email us to order — $99", opens an email to info@taqhaus.com, and says online checkout isn't open yet. This means the landing page can go live before payments are ready.

### Owner decisions and inputs (none of these were filled in with invented values)

| Item | Where it goes | Blocks checkout? |
|---|---|---|
| Confirm launch price ($99 vs $129) | `PRICE_CENTS` in `api/_lib/order.ts` plus copy in `src/lib/googleOffer.ts` / `src/data/googleOffer.ts` | Yes |
| Refund and cancellation terms | `REFUND_TERMS` in `src/lib/googleOffer.ts` | Yes |
| Privacy policy (the site has none) | Publish a page, then set `PRIVACY_POLICY_URL` in `src/lib/googleOffer.ts` | Yes |
| Confirm legal name/location ("TaqHaus Consultancy Inc., Toronto, Canada", taken from the current site footer) and public email | `BUSINESS` in `src/lib/googleOffer.ts` | Yes |
| Stripe account (owned by the business) | env vars below | Yes |
| Google account clients invite as Manager | `VITE_GOOGLE_MANAGER_EMAIL` | No. Without it, the page says "we'll email you the address" |
| Response-draft allowance (5) and turnaround (2 business days) | `src/data/googleOffer.ts` | No |
| Order email sender (domain verified in Resend) | env vars below | No, but strongly recommended |

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Name | Required | Notes |
|---|---|---|
| `VITE_GOOGLE_CHECKOUT_ENABLED` | to sell | `true` switches CTAs to Stripe Checkout. Build-time, so redeploy after changing it. |
| `VITE_GOOGLE_MANAGER_EMAIL` | optional | Shown in the "Giving us access" instructions. |
| `STRIPE_SECRET_KEY` | to sell | `sk_test_…` on Preview, `sk_live_…` on Production. |
| `STRIPE_WEBHOOK_SECRET` | to sell | `whsec_…` from the webhook endpoint below. |
| `STRIPE_PRICE_ID` | optional | Use a dashboard Price instead of the inline $99 USD price. |
| `STRIPE_AUTOMATIC_TAX` | optional | `true` only after Stripe Tax is configured. |
| `PUBLIC_SITE_URL` | optional | Pins redirect URLs (default: the request's own origin). |
| `RESEND_API_KEY`, `ORDER_FROM_EMAIL`, `ORDER_NOTIFY_EMAIL` | recommended | Team notifications and the customer "finish your details" email. Without them, orders are still recorded in Stripe; only the emails are skipped. |

## Stripe setup

1. Developers → Webhooks → add endpoint `https://www.taqhaus.com/api/google/webhook` with events `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`, `charge.refunded`. Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
2. Settings → Customer emails → turn on **successful payments** so customers get Stripe receipts.
3. Test in test mode with card `4242 4242 4242 4242`. Also test cancel (Back on the Checkout page) and a declined card (`4000 0000 0000 0002`).

## Test-mode results (11 Nov 2026, TaqHaus Stripe sandbox)

End-to-end through Stripe's real hosted Checkout: cancel → `/google?checkout=cancelled` banner; declined card (`4000…0002`) → stays on Stripe with the decline message; `4242…` → `/google/welcome` confirmed as paid by Stripe; real `checkout.session.completed` event → order recorded, repeat delivery ignored; onboarding saved to payment metadata (`awaiting_access`); refund → `refunded`. UTM tags reached the session. Not yet tested: Stripe delivering to a deployed URL, and the Resend emails (not configured).

Account notes: the account is Canadian with default currency CAD. Checkout charges **USD 99**, and Stripe converts the payout to CAD (conversion fee applies). Stripe Tax is not set up (missing head-office address), so leave `STRIPE_AUTOMATIC_TAX` off unless an accountant says otherwise. Checkout shows the Stripe business name ("TaqHaus Inc." in the sandbox) and no logo yet: set both in Settings → Business details / Branding. Invoicing isn't used by this funnel.

## How orders work

- **System of record = the Stripe payment.** There is no database. Each paid order is one PaymentIntent, and its **Metadata** holds `order_ref` (e.g. `TQG-7K4M9P`), `order_status` and the onboarding answers (`ob_*`). This means duplicate fulfilment records can't exist.
- The confirmation page shows "paid" only after the server checks the Checkout Session with Stripe. A redirect alone proves nothing.
- The webhook records the payment once (`paid_notified=yes`), so retries and duplicate deliveries do nothing.
- The customer can leave the form and resume later: the draft is saved in their browser, the resume link is in the address bar and in the email, and the page offers an email fallback with their order reference.

### Statuses (team updates them in Stripe: Payments → open payment → Metadata → edit `order_status`)

`paid` → `awaiting_details` (set automatically on payment) → `awaiting_access` (set automatically when onboarding is submitted) → `in_review` → `changes_approved` → `working` → `delivered`. Exceptions: `not_eligible`, `refunded` (set automatically on a full refund), `blocked`.

## Analytics

No analytics tool is installed on the site, and this work adds none. Events are pushed to `window.dataLayer` and also fired as a `taqhaus:analytics` DOM event. They flow automatically once an approved tool (e.g. GTM with consent handling) is added. Events: `offer_page_view`, `offer_primary_cta_click`, `checkout_started`, `purchase_completed` (only after server verification, once per order, with order ref and amount, no PII), `onboarding_started`, `onboarding_completed`, `contact_support_clicked`. UTM tags on `/google` are carried into the Stripe session metadata.

## Known issues outside this work

- **Sticky headers don't stick anywhere on the site.** `html` and `body` both have `overflow-x: hidden`, which makes `body` the scroll container. Switching to `overflow-x: clip` fixes it but changes every page, so it was left alone.
- `/google` has no dedicated OG share image yet; it uses the default card (`scripts/og-generate.mjs` can make one).
