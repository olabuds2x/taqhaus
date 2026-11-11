import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useEffect } from 'react'
import { SEO } from '@/components/SEO'
import { OfferFooter, OfferNav } from '@/components/google/OfferChrome'
import { track } from '@/lib/track'
import { BUSINESS, COMPLEX_MAILTO, PRIVACY_POLICY_URL, REFUND_TERMS } from '@/lib/googleOffer'
import {
  accessFailure, bestFor, deliverySummary, independenceNote, notFitYet, notIncluded, pillars, scopeNote, timeline, trademarkNote,
} from '@/data/googleOffer'

const LAST_UPDATED = '10 November 2026'

export default function GoogleOfferTerms() {
  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView())
    }
  }, [])

  const mail = (location: string) => () => track('contact_support_clicked', { location })

  return (
    <div className="tq-editorial tq-offer">
      <SEO
        title="Package Terms & Eligibility: Google Listing & Review Setup | TaqHaus"
        description="Scope, eligibility, timing and refund terms for the TaqHaus $99 Google business listing and review-request setup."
        canonical="/google/terms"
      />
      <OfferNav mode="subpage" />

      <main id="main" className="go-doc">
        <div className="wrap go-doc-wrap">
          <header className="go-doc-head">
            <span className="eyebrow">Google presence package</span>
            <h1>Package terms <em>&amp; eligibility</em></h1>
            <p>These terms cover the one-time $99 USD Google business listing and review-request setup. Last updated {LAST_UPDATED}.</p>
          </header>

          <section aria-labelledby="t-who">
            <h2 id="t-who">Who provides this service</h2>
            <p>
              The service is provided by {BUSINESS.legalName} (&ldquo;TaqHaus&rdquo;). Contact:{' '}
              <a href={`mailto:${BUSINESS.email}`} onClick={mail('terms_who')}>{BUSINESS.email}</a>.
            </p>
            <p>{independenceNote}</p>
          </section>

          <section aria-labelledby="t-included">
            <h2 id="t-included">What&rsquo;s included</h2>
            {pillars.map(p => (
              <div key={p.n}>
                <h3>{p.n}. {p.title}</h3>
                <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
            <p><strong>Delivery summary:</strong> {deliverySummary}</p>
          </section>

          <section aria-labelledby="t-excluded">
            <h2 id="t-excluded">Not included</h2>
            <ul>{notIncluded.map(i => <li key={i}>{i}</li>)}</ul>
            <p>{scopeNote}</p>
          </section>

          <section id="eligibility" aria-labelledby="t-eligibility">
            <h2 id="t-eligibility">Eligibility</h2>
            <p><strong>Best for:</strong> {bestFor}</p>
            <p><strong>Not the right fit yet:</strong></p>
            <ul>{notFitYet.map(i => <li key={i}>{i}</li>)}</ul>
            <p>
              If your situation is more complex, <a href={COMPLEX_MAILTO} onClick={mail('terms_eligibility')}>email us before ordering</a> so
              we can assess it separately.
            </p>
          </section>

          <section aria-labelledby="t-access">
            <h2 id="t-access">Access, ownership and approval</h2>
            <ul>
              <li>We will never ask for your Google password.</li>
              <li>You keep ownership of your Google Business Profile. We ask you to invite TaqHaus as a Manager, and you can remove that access in your profile settings at any time.</li>
              <li>We check details with you and ask for your approval before making material changes.</li>
            </ul>
          </section>

          <section aria-labelledby="t-reviews">
            <h2 id="t-reviews">Reviews</h2>
            <p>
              We set up a way to ask real customers for honest feedback. We do not write, buy, incentivize, or
              selectively request positive reviews, and we do not post reviews on behalf of customers. We do not
              guarantee rankings, calls, customers, or review volume.
            </p>
          </section>

          <section aria-labelledby="t-timing">
            <h2 id="t-timing">Timing</h2>
            <p>{timeline}</p>
          </section>

          <section id="access-delays" aria-labelledby="t-access-delays">
            <h2 id="t-access-delays">If we can&rsquo;t get access</h2>
            <p>{accessFailure.join(' ')}</p>
          </section>

          <section aria-labelledby="t-price">
            <h2 id="t-price">Price and payment</h2>
            <p>
              The price is $99 in US dollars, paid once. It is not a subscription. Where our payment provider supports
              it, customers outside the US may see the price converted to their local currency at checkout, and the exact
              amount is shown before you pay. Payment is processed securely by Stripe; TaqHaus does not see or store your
              card details. No tax is currently added at checkout, so the total shown is the full amount you pay.
            </p>
          </section>

          <section id="refunds" aria-labelledby="t-refunds">
            <h2 id="t-refunds">Refunds and cancellations</h2>
            {REFUND_TERMS.length ? (
              <ul>{REFUND_TERMS.map(p => <li key={p}>{p}</li>)}</ul>
            ) : (
              <p className="go-doc-pending">
                Our refund terms for this package are being finalised. If refunds matter to your decision, please{' '}
                <a href={`mailto:${BUSINESS.email}`} onClick={mail('terms_refunds')}>email us</a> before ordering.
              </p>
            )}
          </section>

          <section aria-labelledby="t-data">
            <h2 id="t-data">Your information</h2>
            <p>
              After you pay, we ask for your business details, your Google profile link and a contact name and email. We
              use them only to deliver and support your order, and to contact you about it. They are stored with your
              payment record at our payment provider and sent to the TaqHaus team by email.
              {PRIVACY_POLICY_URL && <> See our <a href={PRIVACY_POLICY_URL}>privacy policy</a>.</>}
            </p>
          </section>

          <p className="go-doc-foot">{trademarkNote}</p>
        </div>
      </main>

      <OfferFooter />
    </div>
  )
}
