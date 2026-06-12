import '../styles/taqhaus-editorial.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'

const MotionLink = motion(Link)

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

const pains = [
  { quote: 'I know I should post more. I just never have the time.', img: '/images/biz/biz-1.jpg', alt: 'Barbershop interior' },
  { quote: "We're good at what we do. People just can't find us.", img: '/images/biz/biz-2.jpg', alt: 'Florist shop counter' },
  { quote: "I put money into ads once. I still don't know where it went.", img: '/images/biz/biz-3.jpg', alt: 'Cafe espresso counter' },
  { quote: "I can't pay a full-time marketer. But I need one.", img: '/images/biz/biz-4.jpg', alt: 'Bakery window display' },
]

const services = [
  { num: '01', title: 'Social media', desc: 'We plan it, make it, post it, and reply to comments. Your pages stay alive without you touching them.', type: 'Monthly' },
  { num: '02', title: 'Google (SEO)', desc: 'When someone searches for what you sell, you show up. We make that happen.', type: 'Monthly' },
  { num: '03', title: 'Your website', desc: 'We build or fix your site so visitors actually call, book, or buy.', type: 'Project' },
  { num: '04', title: 'Email', desc: 'We write and send the emails that bring customers back to buy again.', type: 'Monthly' },
  { num: '05', title: 'Ads', desc: 'We run your ads on Facebook, Instagram, and Google, and make sure they pay for themselves.', type: 'Monthly' },
  { num: '06', title: 'Design & video', desc: 'Posts, flyers, menus, videos. Whatever you need, looking good and ready to use.', type: 'As needed' },
]

const steps = [
  { num: 'step 01', title: 'We talk', desc: "Free, 20 minutes, phone or video. You tell us about your business and what's not working." },
  { num: 'step 02', title: 'You get a plan', desc: "What we'd do, what it costs, what to expect. In plain English. It's yours to keep, even if you don't hire us." },
  { num: 'step 03', title: 'We get to work', desc: 'Every month you see what we did and what it brought in. No jargon, no mystery.' },
]

const plans = [
  {
    num: '— 01',
    title: 'One thing handled',
    desc: 'Pick a channel: social media, email, ads, or Google. We run it for you.',
    price: 'Priced per channel',
    terms: 'Month to month',
  },
  {
    num: '— 02',
    title: 'Everything handled',
    desc: 'We become your whole marketing team. One plan, one monthly bill, every channel covered.',
    price: 'From $9k / month',
    terms: '6 months',
  },
  {
    num: '— 03',
    title: 'The deep-dive plan',
    desc: 'For bigger brands: a full look at your marketing and a 12-month plan your team can run.',
    price: 'From $14k',
    terms: 'One-time · 4–6 wk',
  },
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

const faqs = [
  { q: 'How much does it cost?', a: "It depends on what you need. One channel costs less than a part-time hire. The full team starts at $9k a month. You'll get an exact number on the free call, and the call costs nothing." },
  { q: 'Do I have to sign a long contract?', a: "No. Single-channel work runs month to month. Bigger plans run six months because real results take time, but you'll see progress every month along the way." },
  { q: 'I only need help with one thing. Is that okay?', a: 'Yes. Plenty of clients hand us just their social media or just their email. Start small. Add more only if it earns it.' },
  { q: 'How fast will I see results?', a: "Honestly: it depends on the channel. Ads and email can move in weeks. Google takes months, but it keeps paying off after. On the call we'll tell you what's realistic for your business." },
  { q: 'What happens on the free call?', a: "You talk about your business for 20 minutes. We tell you what we'd fix first and roughly what it would cost. No pressure, no obligation. If we're not the right fit, we'll say so and point you somewhere better." },
]

export default function LandingPageRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="TaqHaus — Your Marketing, Done For You"
        description="We run your social media, Google, email, ads, and website so you don't have to. One team, one bill. Book a free 20-minute call."
        keywords="marketing agency for small business, social media management, get found on google, email marketing, paid ads, website design, done for you marketing"
        canonical="/"
      />

      {/* ── Topbar ───────────────────────────────────────────────────────────── */}
      <div className="topbar">
        <span className="pulse" />
        <span>Taking on new clients · Working with businesses worldwide</span>
      </div>

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" width={120} height={44} style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Results</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a free call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero hero--quiet">
        <span className="edge-note edge-note--left">info@taqhaus.com</span>
        <span className="edge-note edge-note--right">Toronto · Serving everywhere</span>
        <div className="wrap">
          <div className="hero-split">
            <div className="hero-copy">
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Marketing, done for you
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              >
                You run the business. We handle the <em>marketing</em>.
              </motion.h1>
              <motion.p
                className="sub"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
              >
                Social media, Google, email, ads, and your website. All of it, handled by one team, so you don't have to learn marketing or hire anyone.
              </motion.p>
              <motion.div
                className="cta-row"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <a href={CALENDLY_URL} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute call <span className="arrow">↗</span>
                </a>
                <a href="#pricing" className="btn btn-ghost">See pricing</a>
              </motion.div>
              <motion.span
                className="quiet-note"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                Free · 20 minutes · No long contracts
              </motion.span>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="frame">
                <img src="/images/hero-quiet.jpg" alt="A sunlit small business storefront" fetchPriority="high" />
              </div>
              <div className="stat-chip">
                <span className="num">+188%</span>
                <span className="lbl">Signups from Google · real client</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Proof strip — figures from published case studies ───────────────── */}
      <section className="strip-band">
        <div className="wrap">
          <motion.div {...rv(0.1)}>
            <div className="hero-strip" style={{ marginTop: 0 }}>
              <div className="cell">
                <span className="stat"><em>+</em>188<em>%</em></span>
                <span className="label">More signups from Google</span>
              </div>
              <div className="cell">
                <span className="stat">−34<em>%</em></span>
                <span className="label">Cost to win each customer</span>
              </div>
              <div className="cell">
                <span className="stat"><em>+</em>320<em>%</em></span>
                <span className="label">More website visitors</span>
              </div>
              <div className="cell">
                <span className="stat">$57<em>K</em></span>
                <span className="label">Sales from email in 90 days</span>
              </div>
            </div>
            <div className="strip-note">
              <span>Numbers from real client work</span>
              <Link to="/case-studies">Read the stories →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee — logo trust strip ───────────────────────────────────────── */}
      <div className="marquee marquee--ink" aria-label="Clients & partners">
        <div className="marquee-track">
          {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
            <span key={i} className="marquee-item">
              <img src={logo.src} alt={logo.alt} className="marquee-logo" loading="lazy" />
              <span className={`star s${(i % 4) + 1}`} aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Sound familiar? ──────────────────────────────────────────────────── */}
      <section id="problem">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">The problem</span>
              <h2 className="display-md">Sound familiar?</h2>
            </div>
          </motion.div>

          <div className="pains-grid">
            {pains.map((pain, i) => (
              <motion.div key={pain.quote} className="pain-card" {...rv(i * 0.08)}>
                <img src={pain.img} alt={pain.alt} className="pain-snap" loading="lazy" />
                <p className="q">{pain.quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="bridge" {...rv(0.2)}>
            That's where we come in. You hand it over. We do the work. <em>You see the numbers.</em>
          </motion.p>
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">What we do</span>
              <h2 className="display-md">Pick what you want <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>off your plate</em>.</h2>
            </div>
            <p className="lede">Take one. Take a few. Take all of it.</p>
          </motion.div>

          <ol className="numlist">
            {services.map((svc, i) => (
              <motion.li key={svc.num} {...rv(i * 0.06)}>
                <span className="num"><span className={`num-chip c${i + 1}`}>{svc.num}</span></span>
                <div className="title-col">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
                <span className="meta-col">{svc.type}</span>
              </motion.li>
            ))}
          </ol>

          <div style={{ marginTop: 48 }}>
            <Link to="/services" className="btn btn-ghost">
              See all 9 services <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <section className="section-gold-tint">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">How it works</span>
              <h2 className="display-md">Three steps. <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>No surprises.</em></h2>
            </div>
          </motion.div>

          <ol className="numlist">
            {steps.map((step, i) => (
              <motion.li key={step.num} {...rv(i * 0.07)}>
                <span className="num">{step.num}</span>
                <div className="title-col">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Proof — the one dark moment ──────────────────────────────────────── */}
      <section className="section-dark">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Proof</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>Real businesses. <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Real numbers.</em></h2>
            </div>
            <p className="lede">Click any of these to read exactly what we did and what happened.</p>
          </motion.div>

          <div className="work-grid">
            <MotionLink to="/case-studies/the-funded-trader" className="case feature" {...rv()}>
              <div className="media">
                <div className="case-art case-art--terra">
                  <div className="ca-meta"><span>Case 01</span><span>The Funded Trader</span></div>
                  <div className="ca-mark">188% more<br /><em>signups.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big">−34<em>%</em></div>
                    <div className="ca-stat-label">Cost per customer</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags">
                  <span className="tag dot">Google</span>
                  <span className="tag">Content</span>
                  <span className="tag">Email</span>
                </div>
                <h3>188% more signups from Google search.</h3>
                <p className="desc">
                  They were paying for every single customer. We made Google bring them in free, and the cost of winning a customer dropped by a third.
                </p>
                <div className="stats">
                  <div><div className="stat">+188%</div><span className="lbl">Signups</span></div>
                  <div><div className="stat">−34%</div><span className="lbl">Cost per customer</span></div>
                  <div><div className="stat">90d</div><span className="lbl">First results</span></div>
                </div>
              </div>
            </MotionLink>

            <div className="stack" style={{ gap: 24 }}>
              <MotionLink to="/case-studies/saas-startup" className="case" {...rv(0.1)}>
                <div className="media">
                  <div className="case-art case-art--cobalt compact">
                    <div className="ca-meta"><span>Case 02</span><span>Software company</span></div>
                    <div className="ca-mark">Page 5 <em>→ 1.</em></div>
                    <div className="ca-foot">
                      <div className="ca-stat-big"><em>+</em>320<em>%</em></div>
                      <div className="ca-stat-label">Website visitors</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">Google</span>
                    <span className="tag">Content</span>
                  </div>
                  <h3>From invisible on Google to page 1 in six months.</h3>
                  <p className="desc">
                    Nobody could find them. We fixed that: three times the visitors, and winning a customer now costs 60% less.
                  </p>
                </div>
              </MotionLink>
              <MotionLink to="/case-studies/fashion-brand" className="case" {...rv(0.18)}>
                <div className="media">
                  <div className="case-art case-art--gold compact">
                    <div className="ca-meta"><span>Case 03</span><span>Fashion brand</span></div>
                    <div className="ca-mark"><em>$57K</em> from email.</div>
                    <div className="ca-foot">
                      <div className="ca-stat-big">90<em>d</em></div>
                      <div className="ca-stat-label">Sales in 90 days</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">Email</span>
                  </div>
                  <h3>$57K in sales from emails in 90 days.</h3>
                  <p className="desc">
                    Their customer list was just sitting there. We started writing to it, and it started selling.
                  </p>
                </div>
              </MotionLink>
            </div>
          </div>

          <div className="work-grid-secondary">
            <MotionLink to="/case-studies/toptier-trader" className="case" {...rv()}>
              <div className="media">
                <div className="case-art case-art--teal thumb">
                  <div className="ca-meta"><span>Case 04</span><span>TopTier Trader</span></div>
                  <div className="ca-mark">Searches <em>up 142%.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>+</em>142<em>%</em></div>
                    <div className="ca-stat-label">Brand searches</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Reputation</span></div>
                <h3>Searches for their name up 142% after we fixed their reputation.</h3>
              </div>
            </MotionLink>
            <MotionLink to="/case-studies/public-official" className="case" {...rv(0.08)}>
              <div className="media">
                <div className="case-art case-art--ink thumb">
                  <div className="ca-meta"><span>Case 05</span><span>Public figure</span></div>
                  <div className="ca-mark">Image<br /><em>rebuilt.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big">5<em>×</em></div>
                    <div className="ca-stat-label">More engagement</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Reputation</span><span className="tag">Social</span></div>
                <h3>A public figure's online image, rebuilt before election season.</h3>
              </div>
            </MotionLink>
            <motion.a href={CALENDLY_URL} className="case cta-tile" target="_blank" rel="noopener noreferrer" {...rv(0.16)}>
              <div className="media">
                <div className="case-art thumb">
                  <div className="ca-meta"><span>Case 06</span><span>Not written yet</span></div>
                  <div className="ca-mark">Your business<br /><em>here.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>?</em></div>
                    <div className="ca-stat-label">Let's find out</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Free call</span></div>
                <h3>Your business could be next. It starts with a free call.</h3>
              </div>
            </motion.a>
          </div>

          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p className="cap" style={{ margin: 0 }}>Every story includes what we did and what it cost</p>
            <Link to="/case-studies" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 24%, transparent)' }}>
              See all results <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────────── */}
      <section id="pricing">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Pricing</span>
              <h2 className="display-md">Start small, or hand it <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>all over</em>.</h2>
            </div>
            <p className="lede">Every option starts with the same free call. We'll tell you which one fits, and we'll tell you if none of them do.</p>
          </motion.div>

          <div className="engagements" style={{ marginTop: 0 }}>
            {plans.map(plan => (
              <motion.div key={plan.num} className="engagement" {...rv(0.08)}>
                <span className="num">{plan.num}</span>
                <h4>{plan.title}</h4>
                <p>{plan.desc}</p>
                <div className="footer-row">
                  <span className="price">{plan.price}</span>
                  <span>{plan.terms}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="route-band" style={{ marginTop: 56 }} {...rv(0.15)}>
            <p>Run a bigger brand, or managing a public profile? We do that too.</p>
            <div className="links">
              <Link to="/services" className="btn-link">Growing brands →</Link>
              <Link to="/public-figures" className="btn-link">Public figures →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div {...rv()} style={{ maxWidth: 800 }}>
            <span className="eyebrow">Questions</span>
            <h2 className="display-md" style={{ marginTop: 20 }}>Asked all the time.</h2>
          </motion.div>
          <div style={{ marginTop: 48, maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} {...rv(i * 0.06)} className="faq-item">
                <button
                  className="faq-trigger"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.p
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────────────── */}
      <motion.div className="cta-band cta-band--gold" {...rv()}>
        <h2>Ready to hand <em>it</em> off?</h2>
        <div className="stack">
          <p style={{ color: 'color-mix(in oklch, var(--ink) 78%, transparent)', fontSize: 16, lineHeight: 1.55, maxWidth: '42ch', margin: 0 }}>
            20 minutes, free. Tell us what's not working. We'll tell you how we'd fix it, whether or not you hire us.
          </p>
          <div className="row">
            <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a free 20-minute call <span className="arrow">↗</span>
            </a>
            <a href="mailto:info@taqhaus.com" className="btn btn-ghost">Or just email us</a>
          </div>
        </div>
      </motion.div>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-head">
            <h2>
              Less marketing stress.<br />
              More&nbsp;<em className="italic" style={{ color: 'var(--terracotta)' }}>customers</em>.
            </h2>
            <div className="cta-stack">
              <a
                href={CALENDLY_URL}
                className="btn"
                style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book a free 20-minute call</span>
                <span className="arrow">↗</span>
              </a>
              <a
                href="mailto:info@taqhaus.com"
                className="btn-link"
                style={{ color: 'color-mix(in oklch, var(--paper) 80%, transparent)', borderColor: 'color-mix(in oklch, var(--paper) 24%, transparent)' }}
              >
                info@taqhaus.com
              </a>
            </div>
          </div>

          <div className="footer-cols">
            <div>
              <img
                src="/taqhaus-logo.png"
                alt="TaqHaus"
                style={{ height: 40, width: 'auto', marginBottom: 16, filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ color: 'color-mix(in oklch, var(--paper) 65%, transparent)', fontSize: 14, lineHeight: 1.55, maxWidth: '30ch', margin: 0 }}>
                We do your marketing for you, and show you the numbers every month.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/case-studies">Results</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div>
              <h4>Read</h4>
              <ul>
                <li><Link to="/insights">Insights</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                <li><a href="https://linkedin.com/company/taqhaus" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/taqhaus" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 TaqHaus Consultancy Inc.</span>
            <span>Made in Toronto · Serving everywhere</span>
          </div>

          <div className="footer-mark">
            TaqHaus<span style={{ color: 'var(--terracotta)' }}>.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
