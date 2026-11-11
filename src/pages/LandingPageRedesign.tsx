import '../styles/taqhaus-editorial.css'
import { useRef, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Check, ClipboardList, Layers, LineChart, Mail, Megaphone,
  MonitorSmartphone, Palette, PhoneCall, Search, Sprout, Target,
} from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'
import { HookArrow } from '@/components/site/HookArrow'
import { blogPosts } from '@/data/blogPosts'
import { enter } from '@/lib/firstView'

const MotionLink = m.create(Link)

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

/* ── Content ─────────────────────────────────────────────────────────────── */

const heroStats = [
  { num: '+188', unit: '%', label: 'More signups from Google', chip: 'The Funded Trader' },
  { num: '$57', unit: 'K', label: 'Sales from email in 90 days', chip: 'Fashion brand' },
]

const marqueeLogos = [
  { src: '/logos/logo-1.png', alt: 'Client logo' },
  { src: '/logos/logo-2.jpg', alt: 'Spirit Airlines' },
  { src: '/logos/logo-4.jpeg', alt: 'Client logo' },
  { src: '/logos/logo-5.png', alt: 'Client logo' },
  { src: '/logos/logo-6.jpg', alt: 'Client logo' },
  { src: '/logos/logo-7.webp', alt: 'Client logo' },
  { src: '/logos/logo-8.png', alt: 'MOTF' },
  { src: '/logos/logo-9.png', alt: 'YR' },
  { src: '/logos/logo-10.jpg', alt: 'Client logo' },
]

const pains = [
  { quote: 'I know I should post more. I just never have the time.', img: '/images/biz/biz-1.jpg', alt: 'Barbershop interior' },
  { quote: "We're good at what we do. People just can't find us.", img: '/images/biz/biz-2.jpg', alt: 'Florist shop counter' },
  { quote: "I put money into ads once. I still don't know where it went.", img: '/images/biz/biz-3.jpg', alt: 'Cafe espresso counter' },
  { quote: "I can't pay a full-time marketer. But I need one.", img: '/images/biz/biz-4.jpg', alt: 'Bakery window display' },
]

const services = [
  { num: '01', type: 'Monthly', icon: Megaphone, title: 'Social media', desc: 'We plan it, make it, post it, and reply to comments. Your pages stay alive without you touching them.' },
  { num: '02', type: 'Monthly', icon: Search, title: 'Google (SEO)', desc: 'When someone searches for what you sell, you show up. We make that happen.' },
  { num: '03', type: 'Project', icon: MonitorSmartphone, title: 'Your website', desc: 'We build or fix your site so visitors actually call, book, or buy.' },
  { num: '04', type: 'Monthly', icon: Mail, title: 'Email', desc: 'We write and send the emails that bring customers back to buy again.' },
  { num: '05', type: 'Monthly', icon: Target, title: 'Ads', desc: 'We run your ads on Facebook, Instagram, and Google, and make sure they pay for themselves.' },
  { num: '06', type: 'As needed', icon: Palette, title: 'Design & video', desc: 'Posts, flyers, menus, videos. Whatever you need, looking good and ready to use.' },
]

type Case = {
  to: string
  size: 'wide' | 'narrow'
  tone: 'pine' | 'coral' | 'sand' | 'moss' | 'ink'
  label: string
  stat: string
  unit: string
  statLabel: string
  title: string
  meta: string
}

/* The five verifiable case studies only. */
const cases: Case[] = [
  { to: '/case-studies/the-funded-trader', size: 'wide', tone: 'pine', label: 'The Funded Trader', stat: '+188', unit: '%', statLabel: 'Signups from Google', title: 'The Funded Trader: more signups, for less', meta: 'Google · Content · Email · cost per customer down 34%' },
  { to: '/case-studies/saas-startup', size: 'narrow', tone: 'coral', label: 'Software company', stat: '+320', unit: '%', statLabel: 'Website visitors', title: 'Software startup: page 5 to page 1', meta: 'Google · Content · six months' },
  { to: '/case-studies/fashion-brand', size: 'narrow', tone: 'sand', label: 'Fashion brand', stat: '$57', unit: 'K', statLabel: 'Sales from email in 90 days', title: 'Fashion brand: a quiet list that started selling', meta: 'Email · 90 days' },
  { to: '/case-studies/toptier-trader', size: 'wide', tone: 'moss', label: 'TopTier Trader', stat: '+142', unit: '%', statLabel: 'Searches for their name', title: 'TopTier Trader: a reputation, fixed', meta: 'Reputation · Content' },
  { to: '/case-studies/public-official', size: 'wide', tone: 'ink', label: 'Public figure', stat: '5', unit: '×', statLabel: 'More engagement', title: "A public figure's image, rebuilt before election season", meta: 'Reputation · Social' },
]

const steps = [
  { icon: PhoneCall, title: 'We talk', desc: "Free, 20 minutes, phone or video. You tell us about your business and what's not working." },
  { icon: ClipboardList, title: 'You get a plan', desc: "What we'd do, what it costs, what to expect. In plain English. It's yours to keep, even if you don't hire us." },
  { icon: LineChart, title: 'We get to work', desc: 'Every month you see what we did and what it brought in. No jargon, no mystery.' },
]

const plans = [
  {
    icon: Sprout,
    name: 'One thing handled',
    pre: '',
    price: 'Per channel',
    post: '',
    desc: 'Pick a channel: social media, email, ads, or Google. We run it for you.',
    cta: 'Get started',
    featured: false,
    features: [
      ['One channel, your choice', 'Social, email, ads, or Google'],
      ['Month to month', 'No long contract'],
      ['A report every month', 'What we did and what it brought in'],
      ['Add more any time', 'Only if it earns it'],
    ],
  },
  {
    icon: Layers,
    name: 'Everything handled',
    pre: 'From',
    price: '$9k',
    post: '/month',
    desc: 'We become your whole marketing team. One plan, one monthly bill, every channel covered.',
    cta: 'Start growing',
    featured: true,
    features: [
      ['Every channel covered', 'Social, Google, email, ads, website'],
      ['One team, one bill', 'No juggling five different agencies'],
      ['Six-month plan', 'Real results take time'],
      ['Progress every month', 'You see the numbers along the way'],
    ],
  },
  {
    icon: ClipboardList,
    name: 'The deep-dive plan',
    pre: 'From',
    price: '$14k',
    post: 'one-time',
    desc: 'For bigger brands: a full look at your marketing and a 12-month plan your team can run.',
    cta: 'Talk to us',
    featured: false,
    features: [
      ['A full marketing review', 'Every channel, start to finish'],
      ['A 12-month plan', 'Written for your team to run'],
      ['Done in 4–6 weeks', 'One-time project'],
    ],
  },
]

/* Quotes from the five published case studies, verbatim. */
const quotes = [
  { q: "We'd squeezed all we could from the channels we had, and every rule change threw our numbers around. We needed growth that didn't depend on any of that.", who: 'VP of Growth', org: 'The Funded Trader', to: '/case-studies/the-funded-trader' },
  { q: 'We were leaving so much money on the table. TaqHaus turned our email list into our most profitable channel in less than 3 months.', who: 'Sarah Mitchell', org: 'Founder, Luxe Apparel Co.', to: '/case-studies/fashion-brand' },
  { q: 'We were burning cash on ads with no sign it would ever pay for itself. TaqHaus built us growth that keeps building on itself.', who: 'Head of Growth', org: 'SaaS startup', to: '/case-studies/saas-startup' },
  { q: "People knew who we were, but they didn't trust us enough to sign up. We needed to take back the story being told about us.", who: 'Head of Marketing', org: 'TopTier Trader', to: '/case-studies/toptier-trader' },
  { q: "They helped us take back control of our narrative. When voters searched for me, they finally saw the real story, not the opposition's spin.", who: 'Elected official', org: 'Name withheld', to: '/case-studies/public-official' },
]

const faqs = [
  { q: 'How much does it cost?', a: "It depends on what you need. One channel costs less than a part-time hire. The full team starts at $9k a month. You'll get an exact number on the free call, and the call costs nothing." },
  { q: 'Do I have to sign a long contract?', a: "No. Single-channel work runs month to month. Bigger plans run six months because real results take time, but you'll see progress every month along the way." },
  { q: 'I only need help with one thing. Is that okay?', a: 'Yes. Plenty of clients hand us just their social media or just their email. Start small. Add more only if it earns it.' },
  { q: 'How fast will I see results?', a: "Honestly: it depends on the channel. Ads and email can move in weeks. Google takes months, but it keeps paying off after. On the call we'll tell you what's realistic for your business." },
  { q: 'What happens on the free call?', a: "You talk about your business for 20 minutes. We tell you what we'd fix first and roughly what it would cost. No pressure, no obligation. If we're not the right fit, we'll say so and point you somewhere better." },
]

/* Owner-facing posts only; the public-figures essays live on /public-figures. */
const latestPosts = blogPosts
  .filter(p => p.category !== 'Politicians & Public Figures')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function LandingPageRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const railRef = useRef<HTMLDivElement>(null)

  const scrollRail = (dir: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector<HTMLElement>('.h-svc')
    rail.scrollBy({ left: dir * ((card?.offsetWidth ?? 360) + 16), behavior: 'smooth' })
  }

  return (
    <div className="tq-editorial tq-home">
      <SEO
        title="TaqHaus — Your Marketing, Done For You"
        description="We run your social media, Google, email, ads, and website so you don't have to. One team, one bill. Book a free 20-minute call."
        keywords="marketing agency for small business, social media management, get found on google, email marketing, paid ads, website design, done for you marketing"
        canonical="/"
      />

      <SiteNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="h-hero">
        <div className="wrap">
          <m.span className="eyebrow" initial={enter({ opacity: 0 })} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Marketing, strategy, and visibility
          </m.span>
          <m.h1
            className="h-hero-title"
            initial={enter({ opacity: 0, y: 24 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="ln">Marketing that helps</span>{' '}
            <span className="ln">
              the{' '}
              <span className="h-tile" aria-hidden="true"><HookArrow /></span>{' '}
              <em>right people</em>
            </span>{' '}
            <span className="ln"><em>find you.</em></span>
          </m.h1>
          <m.p
            className="h-hero-sub"
            initial={enter({ opacity: 0, y: 14 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          >
            From businesses to public-facing leaders, we build digital campaigns that grow awareness, trust, leads, and engagement across the channels that matter.
          </m.p>
          <m.div
            className="h-hero-ctas"
            initial={enter({ opacity: 0, y: 12 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <a href={CALENDLY_URL} className="pill-btn pill-btn--coral" target="_blank" rel="noopener noreferrer">
              Book a free strategy call <HookArrow />
            </a>
            <Link to="/services" className="pill-btn pill-btn--line">Explore services</Link>
          </m.div>
          <m.span className="h-note" initial={enter({ opacity: 0 })} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.4 }}>
            Free · 20 minutes · No long contracts
          </m.span>
        </div>
      </section>

      {/* ── Split: who we are + proof photo ─────────────────────────────── */}
      <section className="h-split-section">
        <div className="wrap h-split">
          <m.div className="h-split-dark" {...rv()}>
            <span className="eyebrow">How we work</span>
            <h2 className="h-title h-title--light">
              You run the business.<br /><em>We handle the marketing.</em>
            </h2>
            <p className="h-split-copy">
              Social media, Google, email, ads, and your website. One team does all of it, and every month you see what we did and what it brought in.
            </p>
            <div className="h-split-ctas">
              <Link to="/about" className="pill-btn pill-btn--coral">More about us <HookArrow /></Link>
              <Link to="/services" className="pill-btn pill-btn--ivory">See services <HookArrow /></Link>
            </div>

            <Link to="/case-studies/the-funded-trader" className="h-mini-case">
              <img src="/images/growth-still.jpg" alt="" loading="lazy" />
              <div>
                <span className="h-mini-label">Latest result</span>
                <strong>The Funded Trader: 188% more signups</strong>
                <span className="h-mini-link">Read the story <HookArrow /></span>
              </div>
            </Link>
          </m.div>

          <m.div className="h-split-photo" {...rv(0.1)}>
            <img src="/images/hero-strategy.jpg" alt="Campaign planning boards and analytics on a strategy desk" fetchPriority="high" />
            <div className="h-stat-row">
              {heroStats.map(s => (
                <div key={s.label} className="h-stat">
                  <span className="h-stat-num">{s.num}<em>{s.unit}</em></span>
                  <span className="h-stat-label">{s.label}</span>
                  <span className="h-stat-chip"><HookArrow /> {s.chip}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        <div className="h-logos" aria-label="Clients and partners">
          <div className="h-logos-track">
            {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
              <img key={i} src={logo.src} alt={i < marqueeLogos.length ? logo.alt : ''} aria-hidden={i >= marqueeLogos.length || undefined} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sound familiar? ─────────────────────────────────────────────── */}
      <section className="h-pains-section">
        <div className="wrap">
          <m.div className="h-head h-head--center" {...rv()}>
            <span className="eyebrow">Sound familiar?</span>
            <h2 className="h-title">Good at what you do.<br /><em>Too busy to market it.</em></h2>
            <p className="h-lede">We hear these every week from owners like you.</p>
          </m.div>

          <div className="h-pains">
            {pains.map((p, i) => (
              <m.figure key={p.quote} className="h-pain" {...rv(i * 0.07)}>
                <img src={p.img} alt={p.alt} loading="lazy" />
                <figcaption>“{p.quote}”</figcaption>
              </m.figure>
            ))}
          </div>

          <m.p className="h-bridge" {...rv(0.15)}>
            That's where we come in. You hand it over. We do the work. <em>You see the numbers.</em>
          </m.p>
        </div>
      </section>

      {/* ── What we do ──────────────────────────────────────────────────── */}
      <section className="h-services">
        <div className="wrap">
          <m.div className="h-head h-head--split" {...rv()}>
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="h-title">Pick what you want<br /><em>off your plate.</em></h2>
            </div>
            <div className="h-head-side">
              <p className="h-lede">Take one. Take a few. Take all of it. Every service is run for you, start to finish.</p>
              <div className="h-rail-ctrl">
                <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous services"><ArrowLeft size={18} /></button>
                <button type="button" onClick={() => scrollRail(1)} aria-label="Next services"><ArrowRight size={18} /></button>
              </div>
            </div>
          </m.div>
        </div>

        <div className="h-rail" ref={railRef}>
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <m.article key={svc.num} className="h-svc" {...rv(i * 0.05)}>
                <div className="h-svc-top">
                  <span className="h-svc-num">{svc.num} — {svc.type}</span>
                  <span className="h-svc-icon"><Icon size={22} strokeWidth={2.2} /></span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                {svc.num === '02' && (
                  <Link to="/google" className="h-svc-offer">
                    <span>Google presence + review-request setup. $99 one-time.</span>
                    <strong>See the package <HookArrow /></strong>
                  </Link>
                )}
              </m.article>
            )
          })}
          <Link to="/services" className="h-svc h-svc--more">
            <span className="h-svc-num">All services</span>
            <h3>See all 9 services</h3>
            <span className="h-tile h-tile--sm" aria-hidden="true"><HookArrow /></span>
          </Link>
        </div>
      </section>

      {/* ── Results ─────────────────────────────────────────────────────── */}
      <section className="h-work">
        <div className="wrap">
          <m.div className="h-head h-head--split" {...rv()}>
            <div>
              <span className="eyebrow">Results</span>
              <h2 className="h-title">Real businesses.<br /><em>Real numbers.</em></h2>
            </div>
            <p className="h-lede">Click any of these to read exactly what we did and what happened.</p>
          </m.div>

          <div className="h-work-grid">
            {cases.map((c, i) => (
              <MotionLink key={c.to} to={c.to} className={`h-case h-case--${c.size}`} {...rv((i % 2) * 0.08)}>
                <div className={`h-case-art tone-${c.tone}`}>
                  <span className="h-case-label">Case 0{i + 1} · {c.label}</span>
                  <span className="h-case-hook" aria-hidden="true"><HookArrow /></span>
                  <div className="h-case-stat">
                    <span className="num">{c.stat}<em>{c.unit}</em></span>
                    <span className="lbl">{c.statLabel}</span>
                  </div>
                </div>
                <h3>{c.title}</h3>
                <span className="h-case-meta">{c.meta}</span>
              </MotionLink>
            ))}
            <m.a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="h-case h-case--narrow h-case--cta" {...rv(0.08)}>
              <div className="h-case-art tone-open">
                <span className="h-case-label">Case 06 · Not written yet</span>
                <div className="h-case-stat">
                  <span className="num">Yours<em>?</em></span>
                  <span className="lbl">It starts with a free call</span>
                </div>
              </div>
              <h3>Your business could be next</h3>
              <span className="h-case-meta">Book a free 20-minute call</span>
            </m.a>
          </div>

          <div className="h-center-cta">
            <Link to="/case-studies" className="pill-btn pill-btn--pine">See all results <HookArrow /></Link>
          </div>
        </div>
      </section>

      {/* ── How it works — card over full-bleed photo ───────────────────── */}
      <section className="h-how">
        <img className="h-how-bg" src="/images/hero-quiet.jpg" alt="" loading="lazy" />
        <div className="wrap">
          <m.div className="h-how-card" {...rv()}>
            <div className="h-how-intro">
              <span className="eyebrow">How it works</span>
              <h2 className="h-title">Three steps.<br /><em>No surprises.</em></h2>
              <p>No black boxes. No jargon. Every month you see what we did and what it brought in.</p>
            </div>
            <div className="h-how-photo">
              <img src="/images/growth-still.jpg" alt="Paper bar chart rising in coral and ivory" loading="lazy" />
            </div>
            <ol className="h-how-steps">
              {steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <li key={s.title}>
                    <span className="h-how-icon"><Icon size={18} strokeWidth={2.2} /></span>
                    <div>
                      <h3><span className="step-n">Step {i + 1}</span>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </m.div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section className="h-pricing" id="pricing">
        <div className="wrap">
          <m.div className="h-head h-head--center" {...rv()}>
            <span className="eyebrow">Pricing</span>
            <h2 className="h-title">Start small, or <em>hand it all over.</em></h2>
            <p className="h-lede">Every option starts with the same free call. We'll tell you which one fits, and we'll tell you if none of them do.</p>
          </m.div>

          <div className="h-plans">
            {plans.map((plan, i) => {
              const Icon = plan.icon
              return (
                <m.div key={plan.name} className={`h-plan${plan.featured ? ' h-plan--featured' : ''}`} {...rv(i * 0.07)}>
                  <div className="h-plan-head">
                    <span className="h-plan-name"><Icon size={16} strokeWidth={2.2} /> {plan.name}</span>
                    {plan.featured && <span className="h-plan-badge">Full team</span>}
                  </div>
                  <div className="h-plan-price">
                    {plan.pre && <span className="pre">{plan.pre}</span>}
                    <span className="amt">{plan.price}</span>
                    {plan.post && <span className="post">{plan.post}</span>}
                  </div>
                  <p className="h-plan-desc">{plan.desc}</p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pill-btn pill-btn--block ${plan.featured ? 'pill-btn--coral' : 'pill-btn--pine'}`}
                  >
                    {plan.cta} <HookArrow />
                  </a>
                  <ul className="h-plan-list">
                    {plan.features.map(([t, s]) => (
                      <li key={t}>
                        <Check size={18} strokeWidth={3} className="tick" />
                        <div><strong>{t}</strong><span>{s}</span></div>
                      </li>
                    ))}
                  </ul>
                </m.div>
              )
            })}
          </div>

          <m.div className="h-route" {...rv(0.1)}>
            <p>Run a bigger brand, or managing a public profile? We do that too.</p>
            <div>
              <Link to="/services" className="pill-btn pill-btn--line">Growing brands</Link>
              <Link to="/public-figures" className="pill-btn pill-btn--line">Public figures</Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* ── Kind words ──────────────────────────────────────────────────── */}
      <section className="h-quotes">
        <div className="h-bigline" aria-hidden="true">
          <div className="h-bigline-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>Kind words from clients <span className="dash">—</span> </span>
            ))}
          </div>
        </div>
        <h2 className="sr-only">Kind words from clients</h2>
        <div className="wrap">
          <div className="h-quote-grid">
            {[0, 1, 2].map(col => (
              <div key={col} className="h-quote-col">
                {quotes.filter((_, i) => i % 3 === col).map(t => (
                  <m.figure key={t.org} className="h-quote" {...rv(col * 0.08)}>
                    <blockquote>“{t.q}”</blockquote>
                    <figcaption>
                      <span className="h-tile h-tile--xs" aria-hidden="true"><HookArrow /></span>
                      <span className="who">
                        <strong>{t.who}</strong>
                        <span>{t.org}</span>
                      </span>
                      <Link to={t.to} className="h-quote-link" aria-label={`Read the ${t.org} story`}>
                        <ArrowRight size={16} />
                      </Link>
                    </figcaption>
                  </m.figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="h-faq">
        <div className="wrap">
          <m.div className="h-head h-head--center" {...rv()}>
            <span className="eyebrow">Questions</span>
            <h2 className="h-title">Your questions,<br /><em>answered.</em></h2>
            <p className="h-lede">Straight answers. If yours isn't here, just email us.</p>
          </m.div>

          <div className="h-faq-list">
            {faqs.map((faq, i) => {
              const open = openFaq === i
              return (
                <div key={faq.q} className={`h-faq-item${open ? ' open' : ''}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="h-faq-icon" aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <m.div
                        id={`faq-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p>{faq.a}</p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          <div className="h-center-cta">
            <a href="mailto:info@taqhaus.com" className="pill-btn pill-btn--coral">Email us a question <HookArrow /></a>
          </div>
        </div>
      </section>

      {/* ── From the blog ───────────────────────────────────────────────── */}
      <section className="h-blog">
        <div className="wrap">
          <m.div className="h-head h-head--center" {...rv()}>
            <span className="eyebrow">From the blog</span>
            <h2 className="h-title">Plain advice<br /><em>for busy owners.</em></h2>
          </m.div>

          <div className="h-posts">
            {latestPosts.map((post, i) => (
              <m.article key={post.slug} className="h-post" {...rv(i * 0.07)}>
                <span className="h-post-n">0{i + 1}</span>
                <Link to={`/insights/${post.slug}`} className="h-post-card">
                  <img src={post.image} alt="" loading="lazy" />
                  <div className="h-post-panel">
                    <div className="h-post-meta">
                      <span className="h-post-tag">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="h-post-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <span className="pill-btn pill-btn--coral pill-btn--sm">Read more <HookArrow /></span>
                  </div>
                </Link>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
