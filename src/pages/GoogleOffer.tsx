import '../styles/taqhaus-editorial.css'
import '../styles/google-offer.css'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  AlertCircle, Building2, CalendarClock, Check, ChevronDown, Clock, KeyRound, Minus,
  QrCode, Quote, Info, RotateCcw, X,
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

const TITLE = 'The 2-Day Google Listing Tune-Up: Local SEO for Small Businesses | $99'
const DESCRIPTION =
  'The Google listing side of local SEO, done for you: your Google Business Profile fixed and a simple review-request setup, in two business days or your $99 back. Includes a 30-day check-up. One time, no call needed.'

/** Owner-approved line (11 Nov 2026). Arithmetic about the price, not a promise of jobs. */
const PAYOFF = 'One booked job more than covers $99.'

/* One illustrative listing (labelled as such on the page), shown before and after.
   `issue` ties a row to the problem it illustrates. No ratings or review counts. */
const issues = [
  {
    title: 'Unclear services',
    text: 'The listing says “general services.” A customer can’t tell what you actually do, so they choose someone whose listing says it clearly.',
  },
  {
    title: 'Missing or wrong details',
    text: 'No hours, an old phone number, or a website link that goes nowhere. People move on to the next business.',
  },
  {
    title: 'No easy way to ask for reviews',
    text: 'Happy customers would leave a review. Nobody asked them, and there’s no simple link to send.',
  },
]

type ListingRow = { k: string; before: string; after?: string; issue?: number }
const listingRows: ListingRow[] = [
  { k: 'Services', before: 'General services', after: 'Clearly listed', issue: 0 },
  { k: 'Service area', before: 'Listed' },
  { k: 'Hours', before: 'Not listed', after: 'Up to date', issue: 1 },
  { k: 'Phone', before: 'Listed' },
  { k: 'Website', before: 'Missing', after: 'Link added', issue: 1 },
  { k: 'Review link', before: 'None set up', after: 'Ready to share', issue: 2 },
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
  { s: 'done', t: '3 review replies written, ready for you to post' },
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
  const buyPrompt = useBuyPrompt()

  return (
    <div className="tq-editorial tq-offer">
      <SEO title={TITLE} description={DESCRIPTION} canonical="/google" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <OfferNav showCta={buyPrompt} />

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
                {/* Phones: this block sits over the photo (see the 640px rules in google-offer.css). */}
                <div className="go-hero-head">
                  <p className="go-hero-kicker" aria-hidden="true">{OFFER.name}</p>
                  <h1 id="go-hero-title">
                    <span className="ln">Make your Google</span>{' '}
                    <span className="ln">
                      listing{' '}
                      <span className="go-tile" aria-hidden="true"><HookArrow /></span>{' '}
                      <em>worth calling.</em>
                    </span>
                  </h1>
                </div>
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
              No call needed. {capacityNote} Questions before you buy? Email <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('trust_strip')}>{BUSINESS.email}</a>.{' '}
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
              {testimonials.map(t => <QuoteCard key={t.name} t={t} />)}
            </div>
            <p className="go-label go-proof-note">
              <Info size={15} strokeWidth={2.2} aria-hidden="true" /> {testimonialNote}
            </p>
          </div>
        </section>

        {/* B ── The customer problem: one listing, before and after */}
        <section className="go-problem" aria-labelledby="go-problem-title">
          <div className="wrap">
            <ListingDemo />
          </div>
        </section>

        {/* C ── What's included: a plain list beside one visual (the sample report). No cards. */}
        <section id="included" className="go-included" aria-labelledby="go-included-title">
          <div className="wrap">
            <div className="go-head">
              <span className="eyebrow">{OFFER.name}</span>
              <h2 id="go-included-title" className="go-title">Six parts. <em>One price: $99.</em></h2>
              {/* Same claim as the "Is this SEO?" FAQ: the listing side only, no ranking promise. */}
              <p className="go-lede">This is the Google listing side of local SEO, done for you.</p>
            </div>

            <div className="go-incl-grid">
              <ol className="go-list">
                {stack.map((s, i) => (
                  <li key={s.name}>
                    <span className="go-list-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{s.name}</h3>
                      <p>{s.short}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Show, don't just tell: what the customer holds at the end. */}
              <div className="go-sample">
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
                <p className="go-sample-label">Sample of what you get at the end, not a real customer&rsquo;s report.</p>
              </div>
            </div>

            <div id="order" className="go-stack-total">
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
                  <span className="go-step-n"><span className="sr-only">Step </span>{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* E ── Questions: who it's for, then the FAQs. One chapter, no cards. */}
        <section id="faqs" className="go-ask" aria-labelledby="go-faq-title">
          <div className="wrap">
            <div className="go-ask-grid">
              <div className="go-ask-side">
                <div className="go-head">
                  <span className="eyebrow">Questions</span>
                  <h2 id="go-faq-title" className="go-title">Straight <em>answers.</em></h2>
                </div>
                <p className="go-ask-contact">
                  Something we haven&rsquo;t covered? Email{' '}
                  <a href={`mailto:${BUSINESS.email}`} onClick={supportClick('faq_side')}>{BUSINESS.email}</a>.
                </p>
              </div>

              <div className="go-ask-main">
                <div className="go-fit" aria-label="Who this is for">
                  <div>
                    <h3><Check size={18} strokeWidth={3} aria-hidden="true" /> Best for</h3>
                    <p>{bestFor}</p>
                  </div>
                  <div>
                    <h3><Minus size={18} strokeWidth={3} aria-hidden="true" /> Not the right fit yet</h3>
                    <ul>{notFitYet.map(n => <li key={n}>{n}</li>)}</ul>
                    <a href={COMPLEX_MAILTO} className="go-text-link" onClick={supportClick('fit_section')}>
                      Have a more complex situation? Email us
                    </a>
                  </div>
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
      <MobileBuyBar show={buyPrompt} />
    </div>
  )
}

/**
 * One review. Phones open on the reviewer's highlighted line (their exact words) with the
 * full verbatim review behind "Read the full review"; wider screens always show it all (CSS).
 */
function QuoteCard({ t }: { t: (typeof testimonials)[number] }) {
  const [open, setOpen] = useState(false)
  const id = `review-${t.name.replace(/\W+/g, '').toLowerCase()}`
  const pull = `${/^[a-z]/.test(t.highlight) ? '…' : ''}${t.highlight}${/[.!?]$/.test(t.highlight) ? '' : '…'}`
  return (
    <figure className="go-quote" data-open={open || undefined}>
      <span className="go-quote-mark" aria-hidden="true"><Quote size={20} strokeWidth={2.4} /></span>
      <p className="go-quote-pull">&ldquo;{pull}&rdquo;</p>
      <blockquote id={id}>
        {t.quote.map(para => <p key={para}>{highlightIn(para, t.highlight)}</p>)}
      </blockquote>
      <button type="button" className="go-quote-more" aria-expanded={open} aria-controls={id} onClick={() => setOpen(o => !o)}>
        {open ? 'Show less' : 'Read the full review'}
      </button>
      <figcaption>
        <span className="go-quote-avatar" aria-hidden="true">{initials(t.name)}</span>
        <span>
          <span className="go-quote-name">{t.name}</span>
          <span className="go-quote-role">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * True once the hero's buy box has scrolled away and no other buy button (or the footer)
 * is on screen. Drives the phone buy bar and the order button in the desktop header.
 */
function useBuyPrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.go-hero .go-buy')
    const others = Array.from(document.querySelectorAll('.go-stack-total, .go-final, .go-foot'))
    if (!hero || typeof IntersectionObserver === 'undefined') return
    let heroPassed = false
    const visible = new Set<Element>()
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.target === hero) heroPassed = !e.isIntersecting && e.boundingClientRect.top < 0
        else if (e.isIntersecting) visible.add(e.target)
        else visible.delete(e.target)
      }
      setShow(heroPassed && visible.size === 0)
    })
    io.observe(hero)
    others.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return show
}

/** Phones only (CSS hides it above 640px). Slides up while `show` is true. */
function MobileBuyBar({ show }: { show: boolean }) {
  return (
    <div className="go-bar" data-show={show || undefined} role="region" aria-label="Order the tune-up">
      <div className="go-bar-info">
        <strong>$99 one-time</strong>
        <span>By ordering you agree to our <Link to={TERMS_PATH}>terms</Link>.</span>
      </div>
      <OfferCta location="mobile_bar" bare label="Improve my listing" />
    </div>
  )
}

/**
 * The problem, shown instead of described: one illustrative listing with a Before / After
 * switch. It flips to "After" by itself once, the first time it is properly on screen, and
 * the visitor can flip it back. Hovering a problem on the left points at its rows.
 */
function ListingDemo() {
  const [after, setAfter] = useState(false)
  const [focus, setFocus] = useState<number | null>(null)
  const touched = useRef(false)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer: number | undefined
    const io = new IntersectionObserver(([e]) => {
      window.clearTimeout(timer)
      if (!e.isIntersecting) return
      timer = window.setTimeout(() => {
        if (!touched.current) setAfter(true)
        io.disconnect()
      }, 1500)
    }, { threshold: 0.75 })
    io.observe(el)
    return () => { io.disconnect(); window.clearTimeout(timer) }
  }, [])

  const choose = (value: boolean) => () => { touched.current = true; setAfter(value) }
  const flagged = listingRows.filter(r => r.after).length

  return (
    <div className="go-problem-grid" data-state={after ? 'after' : 'before'}>
      <div className="go-head">
        <h2 id="go-problem-title" className="go-title">When someone finds you on Google, <em>what do they see?</em></h2>
        <p className="go-lede">
          People decide fast. Wrong hours, vague services or no recent reviews can send them to the next business.
          We fix the practical stuff.
        </p>
      </div>

      <figure className="go-listing" ref={cardRef}>
        <div className="go-listing-top">
          <div className="go-sketch-head">
            <span className="go-sketch-avatar"><Building2 size={20} strokeWidth={2.2} aria-hidden="true" /></span>
            <span>
              <span className="go-sketch-name">Your business</span>
              <span className="go-sketch-sub">Local business</span>
            </span>
          </div>
          <div className="go-switch" role="group" aria-label="Show the listing before or after the tune-up">
            <button type="button" aria-pressed={!after} onClick={choose(false)}>Before</button>
            <button type="button" aria-pressed={after} onClick={choose(true)}>After</button>
          </div>
        </div>
        <ul className="go-listing-rows">
          {listingRows.map((r, i) => (
            <li
              key={r.k}
              data-flag={r.after ? '' : undefined}
              data-dim={focus !== null && r.issue !== focus ? '' : undefined}
              style={{ '--i': i } as CSSProperties}
            >
              <span className="k">
                <span className="ico" aria-hidden="true">
                  {r.after && <AlertCircle className="ico-before" size={18} strokeWidth={2.4} />}
                  <Check className="ico-after" size={18} strokeWidth={2.8} />
                </span>
                {r.k}
              </span>
              <span className="v">
                {r.after ? (
                  <>
                    <span className="v-before" aria-hidden={after}>{r.before}</span>
                    <span className="v-after" aria-hidden={!after}>{r.after}</span>
                  </>
                ) : r.before}
              </span>
            </li>
          ))}
        </ul>
        <figcaption>
          <strong aria-live="polite">
            {after ? `All ${flagged} fixed` : `${flagged} things holding this listing back`}
          </strong>
          <span>Illustration, not a real business</span>
        </figcaption>
      </figure>

      <div className="go-issues">
        <ol>
          {issues.map((issue, i) => (
            <li
              key={issue.title}
              data-dim={focus !== null && focus !== i ? '' : undefined}
              onMouseEnter={() => setFocus(i)}
              onMouseLeave={() => setFocus(null)}
            >
              <span className="ico" aria-hidden="true">
                <AlertCircle className="ico-before" size={20} strokeWidth={2.2} />
                <Check className="ico-after" size={20} strokeWidth={2.6} />
              </span>
              <div>
                <h3>{issue.title}</h3>
                <p>{issue.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="go-issues-note">
          These are just a few examples. We go through your whole listing, fix what needs fixing, and give you an
          easy way to keep asking for reviews. <a href="#included">{OFFER.secondaryLabel}</a>
        </p>
      </div>
    </div>
  )
}
