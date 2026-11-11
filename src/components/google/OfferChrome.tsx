import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HookArrow } from '@/components/site/HookArrow'
import { track, getUtm } from '@/lib/track'
import {
  BUSINESS, CHECKOUT_ENABLED, OFFER, ORDER_MAILTO, PRIVACY_POLICY_URL, TERMS_PATH,
} from '@/lib/googleOffer'
import { independenceNote, trademarkNote } from '@/data/googleOffer'

/* ── Minimal funnel header: logo + three anchors, no sales-call CTA ───── */

const anchors = [
  { id: 'included', label: "What's included" },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'faqs', label: 'FAQs' },
]

export function OfferNav({ mode = 'landing' }: { mode?: 'landing' | 'subpage' | 'order' }) {
  const base = mode === 'landing' ? '' : '/google'
  return (
    <header className="go-nav">
      <div className="go-nav-bar">
        <Link to="/google" className="go-nav-logo" aria-label="TaqHaus: Google presence package">
          <img src="/taqhaus-logo-ivory.png" alt="TaqHaus" width={132} height={45} />
        </Link>
        {mode === 'order' ? (
          <a
            className="go-nav-help"
            href={`mailto:${BUSINESS.email}`}
            onClick={() => track('contact_support_clicked', { location: 'order_nav' })}
          >
            Help: {BUSINESS.email}
          </a>
        ) : (
          <nav className="go-nav-links" aria-label="Package">
            {anchors.map(a => (
              <a key={a.id} href={`${base}#${a.id}`}>{a.label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

/* ── Footer: identity, disclosure, legal links ────────────────────────── */

export function OfferFooter() {
  return (
    <footer className="go-foot">
      <div className="wrap">
        <div className="go-foot-top">
          <img src="/taqhaus-logo-ivory.png" alt="TaqHaus" width={176} height={60} loading="lazy" />
          <nav className="go-foot-links" aria-label="Package information">
            <Link to={TERMS_PATH}>Package terms &amp; eligibility</Link>
            <Link to={`${TERMS_PATH}#refunds`}>Refunds</Link>
            {PRIVACY_POLICY_URL && <Link to={PRIVACY_POLICY_URL}>Privacy policy</Link>}
            <a
              href={`mailto:${BUSINESS.email}`}
              onClick={() => track('contact_support_clicked', { location: 'footer' })}
            >
              {BUSINESS.email}
            </a>
            <Link to="/">TaqHaus home</Link>
          </nav>
        </div>
        <p className="go-foot-note">{independenceNote} {trademarkNote}</p>
        <p className="go-foot-legal">
          © {new Date().getFullYear()} {BUSINESS.legalName}
        </p>
      </div>
    </footer>
  )
}

/* ── Primary CTA ──────────────────────────────────────────────────────── */

type CtaProps = { location: string; block?: boolean; tone?: 'coral' | 'pine' }

/**
 * With checkout enabled: asks the server for a Stripe Checkout URL and
 * redirects. Without it: an honest email link, never a pretend purchase.
 */
export function OfferCta({ location, block, tone = 'coral' }: CtaProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle')
  const cls = `pill-btn pill-btn--${tone} go-cta-btn${block ? ' pill-btn--block' : ''}`

  // Coming back from Stripe with the Back button restores a frozen page.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => { if (e.persisted) setState('idle') }
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  if (!CHECKOUT_ENABLED) {
    return (
      <div className="go-cta">
        <a
          href={ORDER_MAILTO}
          className={cls}
          onClick={() => track('offer_primary_cta_click', { location, mode: 'email' })}
        >
          {OFFER.ctaLabelOffline} <HookArrow />
        </a>
        <p className="go-cta-note">Online checkout isn&rsquo;t open yet. Email us and we&rsquo;ll take it from there.</p>
      </div>
    )
  }

  async function startCheckout() {
    if (state === 'loading') return
    track('offer_primary_cta_click', { location, mode: 'checkout' })
    setState('loading')
    try {
      const res = await fetch('/api/google/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ utm: getUtm() }),
      })
      const data = (await res.json().catch(() => ({}))) as { url?: string }
      if (!res.ok || !data.url) throw new Error('checkout unavailable')
      track('checkout_started', { location, value: OFFER.priceUsd, currency: 'USD' })
      window.location.assign(data.url)
    } catch {
      setState('error')
    }
  }

  return (
    <div className="go-cta">
      <button type="button" className={cls} onClick={startCheckout} disabled={state === 'loading'} aria-busy={state === 'loading'}>
        {state === 'loading' ? 'Opening secure checkout…' : OFFER.ctaLabel} {state !== 'loading' && <HookArrow />}
      </button>
      <p className="go-cta-note">
        Secure checkout by Stripe. By ordering you agree to the <Link to={TERMS_PATH}>package terms</Link>, including{' '}
        <Link to={`${TERMS_PATH}#refunds`}>refunds</Link>, and our <Link to={PRIVACY_POLICY_URL}>privacy policy</Link>.
      </p>
      {state === 'error' && (
        <p className="go-cta-error" role="alert">
          Checkout didn&rsquo;t open. You have not been charged. Please try again, or{' '}
          <a href={ORDER_MAILTO} onClick={() => track('contact_support_clicked', { location: `${location}_error` })}>
            email us
          </a>.
        </p>
      )}
    </div>
  )
}
