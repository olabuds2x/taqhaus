import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Check, ClipboardCheck, Clock, MessageSquareText, Minus, PencilLine, QrCode, X } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { OfferCta, OfferFooter, OfferNav } from '@/components/google/OfferChrome'
import { captureUtm, track } from '@/lib/track'
import { BUSINESS, COMPLEX_MAILTO, OFFER, TERMS_PATH } from '@/lib/googleOffer'
import {
  bestFor, deliverySummary, faqs, notFitYet, notIncluded, pillars, scopeNote, steps, timeline,
} from '@/data/googleOffer'

const TITLE = 'Google Business Profile Optimization & Review Setup | $99 | TaqHaus'
const DESCRIPTION =
  'Google Business Profile optimization and review-request setup for local businesses. $99 USD, one-time. No discovery call required.'

const issues = [
  {
    title: 'Unclear services',
    text: 'The listing says “general services.” A customer can’t tell if you repair furnaces, install AC, or clear drains.',
    rows: [{ k: 'Services', v: 'General services', flag: true }, { k: 'Area', v: '' }],
  },
  {
    title: 'Incomplete contact details',
    text: 'No hours, an old phone number, or a website link that goes nowhere. People move on to the next company.',
    rows: [{ k: 'Hours', v: 'Not listed', flag: true }, { k: 'Website', v: 'Missing', flag: true }],
  },
  {
    title: 'No way to ask for reviews',
    text: 'Happy customers would leave a review. Nobody asked them, and there’s no simple link to send.',
    rows: [{ k: 'Review link', v: 'None set up', flag: true }, { k: 'Phone', v: '' }],
  },
]

const reportRows = [
  { s: 'done', t: 'Business hours checked and updated' },
  { s: 'done', t: 'Service descriptions rewritten from your notes' },
  { s: 'done', t: 'Service areas reviewed' },
  { s: 'done', t: 'Review link and QR code created' },
  { s: 'done', t: 'Replies drafted to 5 existing reviews, for your approval' },
  { s: 'pending', t: 'Category change: waiting on Google' },
  { s: 'na', t: 'Photos: none supplied' },
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
              <span className="eyebrow">For local service businesses</span>
              <h1 id="go-hero-title">
                Make a stronger impression on Google. <em>Give customers more reasons to choose you.</em>
              </h1>
              <p className="go-hero-sub">
                We improve how your business appears on Google and set up a simple way to request genuine customer
                reviews. One-time service. No monthly contract.
              </p>
            </div>

            <aside className="go-offer" aria-label="Price and order">
              <p className="go-price">
                <span className="amt">$99</span>
                <span className="unit">USD · one-time</span>
              </p>
              <OfferCta location="hero" block />
              <p className="go-micro">No discovery call required. You approve the changes. Your Google profile stays yours.</p>
              <a href="#included" className="go-secondary">{OFFER.secondaryLabel}</a>
              <ul className="go-offer-pillars" aria-label="The two parts of the package">
                <li><PencilLine size={18} strokeWidth={2.2} aria-hidden="true" /> A clearer Google business listing</li>
                <li><MessageSquareText size={18} strokeWidth={2.2} aria-hidden="true" /> A simple, genuine review-request setup</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* B ── The customer problem */}
        <section className="go-problem" aria-labelledby="go-problem-title">
          <div className="wrap">
            <div className="go-head">
              <h2 id="go-problem-title" className="go-title">When someone finds you on Google, <em>what do they see?</em></h2>
              <p className="go-lede">
                Outdated business details, unclear services, and no easy way to ask customers for reviews can make it
                harder for people to understand and choose your business. We handle the practical fixes.
              </p>
            </div>
            <p className="go-label">Illustrative examples, not real businesses</p>
            <div className="go-issues">
              {issues.map(issue => (
                <figure key={issue.title} className="go-issue">
                  <div className="go-sketch" aria-hidden="true">
                    <span className="bar bar--name" />
                    <span className="bar bar--sub" />
                    {issue.rows.map(r => (
                      <span key={r.k} className={`row${'flag' in r && r.flag ? ' row--flag' : ''}`}>
                        <span className="k">{r.k}</span>
                        {r.v ? <span className="v">{r.v}</span> : <span className="bar bar--val" />}
                      </span>
                    ))}
                  </div>
                  <figcaption>
                    <h3>{issue.title}</h3>
                    <p>{issue.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* C ── What's included */}
        <section id="included" className="go-included" aria-labelledby="go-included-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">What&rsquo;s included</span>
              <h2 id="go-included-title" className="go-title">Two parts. <em>One price: $99.</em></h2>
            </div>

            <div className="go-pillars">
              {pillars.map(p => (
                <article key={p.n} className="go-pillar">
                  <span className="go-pillar-n" aria-hidden="true">{p.n}</span>
                  <h3>{p.title}</h3>
                  <ul>
                    {p.items.map(item => (
                      <li key={item}><Check size={18} strokeWidth={3} aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="go-delivery">
              <ClipboardCheck size={22} strokeWidth={2.2} aria-hidden="true" />
              <p><strong>Delivery summary:</strong> {deliverySummary}</p>
            </div>

            <div className="go-excluded">
              <h3>Not included at $99</h3>
              <ul>
                {notIncluded.map(item => (
                  <li key={item}><X size={16} strokeWidth={2.6} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className="go-excluded-note">
                {scopeNote} <Link to={TERMS_PATH}>Read the full scope and eligibility terms</Link>.
              </p>
            </div>
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
                  {BUSINESS.legalName} is the marketing consultancy behind this package. Questions before you buy? Email{' '}
                  <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('who_section')}>{BUSINESS.email}</a>.
                </p>
              </div>
              <p className="go-who-note">
                We also run other marketing work for brands in trading, software and fashion. That is different work, so
                we don&rsquo;t present it as proof of what this package does. <Link to="/case-studies">See that work</Link>{' '}
                or <Link to="/about">read about TaqHaus</Link>.
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
              <h2 id="go-final-title">Let customers see your business <em>at its best.</em></h2>
              <div className="go-final-cta">
                <OfferCta location="final" />
                <p>One-time. Clear scope. No required call.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <OfferFooter />
    </div>
  )
}
