import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  AlertCircle, Building2, CalendarClock, Check, ChevronDown, Clock, KeyRound, MessageSquareText, Minus,
  PencilLine, QrCode, Quote, Info, RotateCcw, X,
} from 'lucide-react'
import { SEO } from '@/components/SEO'
import { OfferCta, OfferFooter, OfferNav } from '@/components/google/OfferChrome'
import { HookArrow } from '@/components/site/HookArrow'
import { captureUtm, track } from '@/lib/track'
import { BUSINESS, COMPLEX_MAILTO, OFFER, TERMS_PATH } from '@/lib/googleOffer'
import {
  bestFor, capacityNote, faqs, keyExclusions, notFitYet, notIncluded, promise, scopeNote, seasonalNote, stack, steps,
  testimonialNote, testimonials,
} from '@/data/googleOffer'

const TITLE = 'The 2-Day Google Listing Tune-Up for Small Businesses | $99 | TaqHaus'
const DESCRIPTION =
  'Your Google Business Profile fixed and a simple review-request setup, done for you in two business days or your $99 back. Includes a 30-day check-up. One time, no call needed.'

/** Owner-approved line (11 Nov 2026). Arithmetic about the price, not a promise of jobs. */
const PAYOFF = 'One booked job more than covers $99.'

/* Illustrative listings (labelled as such on the page). The stack below them
   (src/data/googleOffer.ts) is the answer, so the cards show only the problem. */
const issues = [
  {
    title: 'Unclear services',
    text: 'The listing says “general services.” A customer can’t tell what you actually do, so they choose someone whose listing says it clearly.',
    rows: [{ k: 'Services', v: 'General services', flag: true }, { k: 'Service area', v: 'Listed' }],
  },
  {
    title: 'Missing or wrong details',
    text: 'No hours, an old phone number, or a website link that goes nowhere. People move on to the next business.',
    rows: [{ k: 'Hours', v: 'Not listed', flag: true }, { k: 'Website', v: 'Missing', flag: true }],
  },
  {
    title: 'No easy way to ask for reviews',
    text: 'Happy customers would leave a review. Nobody asked them, and there’s no simple link to send.',
    rows: [{ k: 'Review link', v: 'None set up', flag: true }, { k: 'Phone', v: 'Listed' }],
  },
]

/** Facts only: each point is backed by the package terms (REFUND_TERMS in src/lib/googleOffer.ts). */
const assurances = [
  {
    icon: Building2,
    title: 'Real people, not Google',
    text: `${BUSINESS.legalName} is an independent marketing business. We’re not Google, and we never pretend to be.`,
  },
  {
    icon: KeyRound,
    title: 'Your profile stays yours',
    text: 'You add us as a manager, never your password. We ask before any big change, and you can remove us at any time.',
  },
  {
    icon: Clock,
    title: 'Done in 2 days, or your $99 back',
    text: 'If we take longer than two business days after getting access and your details, you get a full refund, and we still finish.',
  },
  {
    icon: RotateCcw,
    title: 'Refund until we start. Free fixes after.',
    text: 'Cancel before we start for a full $99 refund. After we deliver, we fix anything in scope for 14 days, free.',
  },
] as const

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: OFFER.name,
    description: DESCRIPTION,
    provider: { '@type': 'Organization', name: 'TaqHaus', url: 'https://www.taqhaus.com' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: { '@type': 'Offer', price: '99.00', priceCurrency: 'USD', url: 'https://www.taqhaus.com/google' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

/** Wraps the reviewer's own phrase in <mark>. If it isn't found verbatim, the text renders unchanged. */
function highlightIn(text: string, phrase: string) {
  const i = text.indexOf(phrase)
  if (i < 0) return text
  return <>{text.slice(0, i)}<mark>{phrase}</mark>{text.slice(i + phrase.length)}</>
}

/** "Dave C." → "DC" */
const initials = (name: string) => name.replace(/[^A-Z]/g, '').slice(0, 2)

/* Sample finished report (labelled as an illustration on the page). Rows restate
   stack items; keep one pending and one not-applicable row so it reads honestly. */
const reportRows = [
  { s: 'done', t: 'Business hours checked and updated' },
  { s: 'done', t: 'Service descriptions rewritten from your notes' },
  { s: 'done', t: 'Review link and QR code created' },
  { s: 'done', t: 'Replies drafted to 3 existing reviews, for your approval' },
  { s: 'pending', t: 'Category change: waiting on Google' },
  { s: 'na', t: 'Photos: none supplied' },
] as const

/* Hero illustration: the "after" state of the problem cards below. No ratings or review counts. */
const afterRows = [
  { k: 'Hours', v: 'Up to date' },
  { k: 'Services', v: 'Clearly listed' },
  { k: 'Review link', v: 'Ready to share' },
] as const

const statusLabel ={ done: 'Completed', pending: 'Pending', na: 'Not applicable' } as const

/** Decorative QR-style grid for the illustration only. It does not scan. */
function FauxQr() {
  const cells = Array.from({ length: 121 }, (_, i) => {
    const x = i % 11, y = Math.floor(i / 11)
    const finder = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7)
    return finder || ((x * 7 + y * 13 + x * y) % 5 < 2)
  })
  return (
    <div className="go-qr" aria-hidden="true">
      {cells.map((on, i) => <span key={i} data-on={on || undefined} />)}
    </div>
  )
}

export default function GoogleOffer() {
  const [params] = useSearchParams()
  const [cancelled, setCancelled] = useState(params.get('checkout') === 'cancelled')
  const showSeasonal = new Date() < new Date(seasonalNote.until)

  useEffect(() => {
    captureUtm()
    track('offer_page_view', { checkout_cancelled: params.get('checkout') === 'cancelled' || undefined })
    // Arriving from another page with #included etc.: the SPA renders after the browser's own jump.
    if (window.location.hash) {
      requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const supportClick = (location: string) => () => track('contact_support_clicked', { location })

  return (
    <div className="tq-editorial tq-offer">
      <SEO title={TITLE} description={DESCRIPTION} canonical="/google" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <OfferNav />

      <main id="main">
        {cancelled && (
          <div className="wrap">
            <div className="go-notice" role="status">
              <p>
                <strong>Checkout cancelled.</strong> You have not been charged. Order whenever you&rsquo;re ready, or{' '}
                <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('cancelled_notice')}>email us</a> with any questions.
              </p>
              <button type="button" onClick={() => setCancelled(false)} aria-label="Dismiss message"><X size={18} /></button>
            </div>
          </div>
        )}

        {/* A ── Hero */}
        <section className="go-hero" aria-labelledby="go-hero-title">
          <div className="wrap">
            <div className="go-hero-grid">
              <div className="go-hero-copy">
                <div className="go-hero-tags">
                  <span className="go-tag go-tag--name">{OFFER.name}</span>
                  {showSeasonal && (
                    <span className="go-tag" title={seasonalNote.text}>
                      <CalendarClock size={15} strokeWidth={2.4} aria-hidden="true" /> {seasonalNote.short}
                    </span>
                  )}
                </div>
                <h1 id="go-hero-title">
                  <span className="ln">Make your Google</span>{' '}
                  <span className="ln">
                    listing{' '}
                    <span className="go-tile" aria-hidden="true"><HookArrow /></span>{' '}
                    <em>worth calling.</em>
                  </span>
                </h1>
                <p className="go-hero-sub">
                  Most people check your Google listing before they call, book or visit. We fix what&rsquo;s holding it
                  back and set you up to ask every customer for a review.
                </p>

                <div className="go-buy" aria-label="Price and order">
                  <p className="go-price">
                    <span className="amt"><span className="cur">$</span>99</span>
                    <span className="unit">
                      <strong>One-time · USD · No monthly fees</strong>
                      <span>{PAYOFF}</span>
                    </span>
                  </p>
                  <OfferCta
                    location="hero"
                    compactNote
                    beside={
                      <p className="go-promise go-promise--beside">
                        <Clock size={20} strokeWidth={2.4} aria-hidden="true" />
                        <span><strong>{promise.compact[0]}</strong> {promise.compact[1]}</span>
                      </p>
                    }
                  />
                </div>
              </div>

              {/* Photo is an AI-generated environment shot; the card is a labelled illustration. */}
              <div className="go-hero-visual">
                <figure className="go-hero-photo">
                  <img src="/images/google/hero-storefront.jpg" alt="" width={1024} height={1280} fetchPriority="high" />
                </figure>
                <span className="go-badge" aria-hidden="true">
                  <strong>2</strong>
                  <span>business<br />days</span>
                </span>
                <figure className="go-after" aria-label="Illustration: a listing after the tune-up">
                  <div className="go-sketch-head">
                    <span className="go-sketch-avatar"><Building2 size={18} strokeWidth={2.2} /></span>
                    <span>
                      <span className="go-sketch-name">Your business</span>
                      <span className="go-sketch-sub">Illustration: after the tune-up</span>
                    </span>
                  </div>
                  {afterRows.map(r => (
                    <span key={r.k} className="row">
                      <span className="k"><Check size={15} strokeWidth={2.8} />{r.k}</span>
                      <span className="v">{r.v}</span>
                    </span>
                  ))}
                </figure>
              </div>
            </div>

            <div className="go-hero-foot">
              <ul className="go-hero-incl" aria-label="What the $99 covers">
                <li><PencilLine size={18} strokeWidth={2.2} aria-hidden="true" /> Listing tune-up</li>
                <li><MessageSquareText size={18} strokeWidth={2.2} aria-hidden="true" /> Review link, QR code and ready-to-send requests</li>
                <li><CalendarClock size={18} strokeWidth={2.2} aria-hidden="true" /> 30-day check-up</li>
              </ul>
              <p className="go-hero-meta">
                No call needed. {capacityNote} <a href="#included">{OFFER.secondaryLabel}</a>
              </p>
            </div>
          </div>
        </section>

        {/* A2 ── Reassurance before payment */}
        <section className="go-trust" aria-label="Before you pay">
          <div className="wrap">
            <ul className="go-trust-list">
              {assurances.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="go-trust-more">
              Questions before you buy? Email <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('trust_strip')}>{BUSINESS.email}</a>.{' '}
              <Link to={TERMS_PATH}>Read the package terms</Link>.
            </p>
          </div>
        </section>

        {/* A3 ── Proof: real reviews, verbatim (see testimonials in src/data/googleOffer.ts) */}
        <section className="go-proof" aria-labelledby="go-proof-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">What owners say</span>
              <h2 id="go-proof-title" className="go-title">
                &ldquo;They knew what they were doing <em>and got the job done.&rdquo;</em>
              </h2>
            </div>
            <div className="go-quotes">
              {testimonials.map(t => (
                <figure key={t.name} className="go-quote">
                  <span className="go-quote-mark" aria-hidden="true"><Quote size={20} strokeWidth={2.4} /></span>
                  <blockquote>
                    {t.quote.map(para => <p key={para}>{highlightIn(para, t.highlight)}</p>)}
                  </blockquote>
                  <figcaption>
                    <span className="go-quote-avatar" aria-hidden="true">{initials(t.name)}</span>
                    <span>
                      <span className="go-quote-name">{t.name}</span>
                      <span className="go-quote-role">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="go-label go-proof-note">
              <Info size={15} strokeWidth={2.2} aria-hidden="true" /> {testimonialNote}
            </p>
          </div>
        </section>

        {/* B ── The customer problem */}
        <section className="go-problem" aria-labelledby="go-problem-title">
          <div className="wrap">
            <div className="go-head">
              <h2 id="go-problem-title" className="go-title">When someone finds you on Google, <em>what do they see?</em></h2>
              <p className="go-lede">
                People decide fast. Wrong hours, vague services or no recent reviews can send them to the next business.
                We fix the practical stuff.
              </p>
            </div>
            <p className="go-label">
              <Info size={15} strokeWidth={2.2} aria-hidden="true" /> Illustrative examples, not real businesses
            </p>
            <div className="go-issues" role="region" aria-label="Examples of common listing problems" tabIndex={0}>
              {issues.map(issue => (
                <figure key={issue.title} className="go-issue">
                  <div className="go-sketch" aria-hidden="true">
                    <div className="go-sketch-head">
                      <span className="go-sketch-avatar"><Building2 size={18} strokeWidth={2.2} /></span>
                      <span>
                        <span className="go-sketch-name">Your business</span>
                        <span className="go-sketch-sub">Local business</span>
                      </span>
                    </div>
                    {issue.rows.map(r => {
                      const flag = 'flag' in r && r.flag
                      return (
                        <span key={r.k} className={`row${flag ? ' row--flag' : ''}`}>
                          <span className="k">
                            {flag ? <AlertCircle size={15} strokeWidth={2.4} /> : <Check size={15} strokeWidth={2.6} />}
                            {r.k}
                          </span>
                          <span className="v">{r.v}</span>
                        </span>
                      )
                    })}
                  </div>
                  <figcaption>
                    <h3>{issue.title}</h3>
                    <p>{issue.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="go-issues-note">
              These are just a few examples. We go through your whole listing, fix what needs fixing, and give you an
              easy way to keep asking for reviews. <a href="#included">{OFFER.secondaryLabel}</a>
            </p>
          </div>
        </section>

        {/* C ── What's included */}
        <section id="included" className="go-included" aria-labelledby="go-included-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">{OFFER.name}</span>
              <h2 id="go-included-title" className="go-title">Six parts. <em>One price: $99.</em></h2>
            </div>

            <ol className="go-stack">
              {stack.map((s, i) => (
                <li key={s.name} className="go-stack-item">
                  <span className="go-stack-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>
                    {s.name}
                    {'isNew' in s && s.isNew && <span className="go-stack-tag">Included</span>}
                  </h3>
                  <p>{s.what}</p>
                  <p className="go-stack-why"><Check size={16} strokeWidth={3} aria-hidden="true" /> {s.why}</p>
                </li>
              ))}
            </ol>

            {/* Show, don't just tell: what the customer holds at the end. */}
            <div className="go-sample">
              <p className="go-sample-label">
                <strong>What you get at the end</strong>
                <span>Sample layout, not a real customer&rsquo;s report</span>
              </p>
              <div className="go-sample-grid">
                <figure className="go-report">
                  <div className="go-report-head">
                    <span className="go-report-kicker">Completion summary</span>
                    <strong>Your business name</strong>
                  </div>
                  <ul>
                    {reportRows.map(r => (
                      <li key={r.t} data-s={r.s}>
                        <span className="go-chip">{statusLabel[r.s]}</span>
                        <span>{r.t}</span>
                      </li>
                    ))}
                  </ul>
                  <figcaption className="sr-only">Sample completion summary showing completed, pending and not-applicable changes.</figcaption>
                </figure>
                <figure className="go-qrcard">
                  <FauxQr />
                  <div>
                    <span className="go-report-kicker"><QrCode size={14} aria-hidden="true" /> Your review QR code</span>
                    <strong>How did we do?</strong>
                    <p>Scan to leave an honest review on Google.</p>
                  </div>
                  <figcaption className="sr-only">Sample digital review-request card with a QR code.</figcaption>
                </figure>
              </div>
            </div>

            <div className="go-stack-total">
              <div>
                <p className="go-stack-total-price">Everything above: <strong>$99, one time.</strong></p>
                <p className="go-stack-total-sub">{PAYOFF}</p>
                <p className="go-stack-total-note"><Clock size={16} strokeWidth={2.4} aria-hidden="true" /> {promise.name}: done in 2 business days, or your $99 back.</p>
              </div>
              <OfferCta location="included" />
            </div>

            <details className="go-excluded">
              <summary>
                <span className="go-excluded-sum">
                  <span className="go-excluded-q">What&rsquo;s outside this package?</span>
                  <span className="go-excluded-key">{keyExclusions}</span>
                </span>
                <ChevronDown size={20} strokeWidth={2.4} className="go-excluded-chev" aria-hidden="true" />
              </summary>
              <ul aria-label="Not included at $99">
                {notIncluded.map(item => (
                  <li key={item}><X size={16} strokeWidth={2.6} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className="go-excluded-note">
                {scopeNote} <Link to={TERMS_PATH}>Read the full scope and eligibility terms</Link>.
              </p>
            </details>
          </div>
        </section>

        {/* D ── How it works */}
        <section id="how-it-works" className="go-how" aria-labelledby="go-how-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">How it works</span>
              <h2 id="go-how-title" className="go-title">Four steps. <em>No sales call.</em></h2>
            </div>
            <ol className="go-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="go-step-n">Step {i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* E ── Who this is for */}
        <section className="go-fit" aria-labelledby="go-fit-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">Who this is for</span>
              <h2 id="go-fit-title" className="go-title">Is this <em>the right fit?</em></h2>
            </div>
            <div className="go-fit-grid">
              <div className="go-fit-card go-fit-card--yes">
                <h3><Check size={20} strokeWidth={3} aria-hidden="true" /> Best for</h3>
                <p>{bestFor}</p>
              </div>
              <div className="go-fit-card">
                <h3><Minus size={20} strokeWidth={3} aria-hidden="true" /> Not the right fit yet</h3>
                <ul>{notFitYet.map(n => <li key={n}>{n}</li>)}</ul>
                <a href={COMPLEX_MAILTO} className="go-text-link" onClick={supportClick('fit_section')}>
                  Have a more complex situation? Email us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* G ── FAQs */}
        <section id="faqs" className="go-faq" aria-labelledby="go-faq-title">
          <div className="wrap">
            <div className="go-head go-head--center">
              <span className="eyebrow">FAQs</span>
              <h2 id="go-faq-title" className="go-title">Straight answers.</h2>
            </div>
            <div className="go-faq-list">
              {faqs.map(f => (
                <details key={f.q} className="go-faq-item">
                  <summary>
                    <span>{f.q}</span>
                    <span className="go-faq-icon" aria-hidden="true" />
                  </summary>
                  <p>
                    {f.a}
                    {f.link && <> <Link to={f.link.to}>{f.link.label}</Link>.</>}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* H ── Final CTA */}
        <section className="go-final" aria-labelledby="go-final-title">
          <div className="wrap">
            <div className="go-final-card">
              <h2 id="go-final-title">Make your Google listing <em>worth calling.</em></h2>
              <div className="go-final-cta">
                <OfferCta location="final" />
                <p>$99 one time. Done in 2 business days or your money back. 30-day check-up included.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <OfferFooter />
    </div>
  )
}
