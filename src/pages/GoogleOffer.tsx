import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  AlertCircle, Building2, CalendarClock, Check, ChevronDown, Clock, KeyRound, MessageSquareText, Minus,
  PencilLine, QrCode, Info, RotateCcw, UserCheck, X,
} from 'lucide-react'
import { SEO } from '@/components/SEO'
import { OfferCta, OfferFooter, OfferNav } from '@/components/google/OfferChrome'
import { captureUtm, track } from '@/lib/track'
import { BUSINESS, COMPLEX_MAILTO, OFFER, TERMS_PATH } from '@/lib/googleOffer'
import {
  bestFor, faqs, keyExclusions, notFitYet, notIncluded, scopeNote, seasonalNote, stack, steps,
  testimonialNote, testimonials, timeline,
} from '@/data/googleOffer'

const TITLE = 'Google Business Profile Optimization & Review Setup | $99 | TaqHaus'
const DESCRIPTION =
  'Google listing tune-up and review-request setup for small businesses. Done for you within two business days, with a 30-day check-up. $99 USD, one time. No call needed.'

/** Owner-approved line (11 Nov 2026). Arithmetic about the price, not a promise of jobs. */
const PAYOFF = 'One booked job more than covers $99.'

/* Illustrative listings (labelled as such on the page). Each "fix" restates a
   package item from src/data/googleOffer.ts; keep them in step with it. */
const issues = [
  {
    title: 'Unclear services',
    text: 'The listing says “general services.” A customer can’t tell what you actually do, so they choose someone whose listing says it clearly.',
    rows: [{ k: 'Services', v: 'General services', flag: true }, { k: 'Service area', v: 'Listed' }],
    fix: 'We rewrite your services and description from your notes, so people see what you do at a glance.',
  },
  {
    title: 'Missing or wrong details',
    text: 'No hours, an old phone number, or a website link that goes nowhere. People move on to the next business.',
    rows: [{ k: 'Hours', v: 'Not listed', flag: true }, { k: 'Website', v: 'Missing', flag: true }],
    fix: 'We check and fix your hours, phone number, website link and service area.',
  },
  {
    title: 'No easy way to ask for reviews',
    text: 'Happy customers would leave a review. Nobody asked them, and there’s no simple link to send.',
    rows: [{ k: 'Review link', v: 'None set up', flag: true }, { k: 'Phone', v: 'Listed' }],
    fix: 'We set up a review link, a QR code and ready-to-send messages, so asking every customer takes seconds.',
  },
]

const reportRows = [
  { s: 'done', t: 'Business hours checked and updated' },
  { s: 'done', t: 'Service descriptions rewritten from your notes' },
  { s: 'done', t: 'Service areas reviewed' },
  { s: 'done', t: 'Review link and QR code created' },
  { s: 'done', t: 'Replies drafted to 3 existing reviews, for your approval' },
  { s: 'pending', t: 'Category change: waiting on Google' },
  { s: 'na', t: 'Photos: none supplied' },
] as const

/** Facts only: each point is backed by the package terms (REFUND_TERMS in src/lib/googleOffer.ts). */
const assurances = [
  {
    icon: Building2,
    title: 'Real people, not Google',
    text: `${BUSINESS.legalName} is an independent marketing business. We’re not Google, and we never pretend to be.`,
  },
  {
    icon: KeyRound,
    title: 'We never need your password',
    text: 'You add us as a manager and can remove us at any time. Your profile stays yours.',
  },
  {
    icon: UserCheck,
    title: 'You approve every big change',
    text: 'We check details with you first, and list everything we changed.',
  },
  {
    icon: RotateCcw,
    title: 'Refund until we start. Free fixes after.',
    text: 'Cancel before we start for a full $99 refund. After we deliver, we fix anything in scope for 14 days, free.',
  },
] as const

const statusLabel = { done: 'Completed', pending: 'Pending', na: 'Not applicable' } as const

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Business Profile optimization & review-request setup',
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
          <div className="wrap go-hero-grid">
            <div className="go-hero-copy">
              <span className="eyebrow">For small businesses</span>
              <h1 id="go-hero-title">
                Make your Google listing <em>worth calling.</em>
              </h1>
              <p className="go-hero-sub">
                Most people check your Google listing before they call, book or visit. We fix what&rsquo;s holding it
                back and set you up to ask every customer for a review. Done for you within two business days.
              </p>
              {showSeasonal && (
                <p className="go-seasonal">
                  <CalendarClock size={18} strokeWidth={2.2} aria-hidden="true" /> {seasonalNote.text}
                </p>
              )}
            </div>

            <aside className="go-offer" aria-label="Price and order">
              <div className="go-price-panel">
                <p className="go-price">
                  <span className="cur">$</span><span className="amt">99</span>
                  <span className="unit">
                    <strong>USD · one-time</strong>
                    <span>No monthly commitment</span>
                  </span>
                </p>
              </div>
              <p className="go-payoff">{PAYOFF}</p>
              <OfferCta location="hero" block />
              <p className="go-micro">
                No call needed. We aim to finish within two business days of getting access and your details.
              </p>
              <a href="#included" className="go-secondary">{OFFER.secondaryLabel}</a>
              <ul className="go-offer-pillars" aria-label="What the $99 covers">
                <li><PencilLine size={18} strokeWidth={2.2} aria-hidden="true" /> Listing tune-up</li>
                <li><MessageSquareText size={18} strokeWidth={2.2} aria-hidden="true" /> Review link, QR code and ready-to-send requests</li>
                <li><CalendarClock size={18} strokeWidth={2.2} aria-hidden="true" /> 30-day check-up included</li>
              </ul>
            </aside>
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
                  <blockquote>
                    {t.quote.map(para => <p key={para}>{para}</p>)}
                  </blockquote>
                  <figcaption>{t.name}</figcaption>
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
            <div className="go-issues">
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
                  <p className="go-issue-fix">
                    <span className="go-issue-fix-label">What we do</span>
                    <span className="go-issue-fix-text">
                      <Check size={16} strokeWidth={3} aria-hidden="true" /> {issue.fix}
                    </span>
                  </p>
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
              <span className="eyebrow">What&rsquo;s included</span>
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

            <div className="go-stack-total">
              <div>
                <p className="go-stack-total-price">Everything above: <strong>$99, one time.</strong></p>
                <p className="go-stack-total-sub">{PAYOFF}</p>
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
            <p className="go-timeline"><Clock size={20} strokeWidth={2.2} aria-hidden="true" /> {timeline}</p>
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

        {/* F ── Trust: what you'll receive (illustrated) + who we are */}
        <section className="go-receive" aria-labelledby="go-receive-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">What you&rsquo;ll receive</span>
              <h2 id="go-receive-title" className="go-title">A clear record <em>of what we changed.</em></h2>
              <p className="go-lede">When we finish, you get a short summary of every change and the review-request materials to keep using.</p>
            </div>

            <p className="go-label">Illustration: a sample layout, not a real customer&rsquo;s report</p>
            <div className="go-receive-grid">
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

              <div className="go-receive-side">
                <figure className="go-qrcard">
                  <FauxQr />
                  <div>
                    <span className="go-report-kicker"><QrCode size={14} aria-hidden="true" /> Review QR card (digital)</span>
                    <strong>How did we do?</strong>
                    <p>Scan to leave an honest review on Google.</p>
                  </div>
                  <figcaption className="sr-only">Sample digital review-request card with a QR code.</figcaption>
                </figure>
                <figure className="go-template">
                  <span className="go-report-kicker"><MessageSquareText size={14} aria-hidden="true" /> Text message template</span>
                  <blockquote>
                    Hi [name], thanks for choosing [business]. If you have a minute, we&rsquo;d appreciate an honest review on Google: [link]
                  </blockquote>
                </figure>
              </div>
            </div>

            <div className="go-who">
              <div>
                <h3>Who&rsquo;s doing the work</h3>
                <p>
                  {BUSINESS.legalName} is the marketing company behind this package. Questions before you buy? Email{' '}
                  <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('who_section')}>{BUSINESS.email}</a>.
                </p>
              </div>
              <p className="go-who-note">
                <Link to="/about">About TaqHaus</Link>
              </p>
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
                <p>$99 one time, 30-day check-up included. No call needed.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <OfferFooter />
    </div>
  )
}
