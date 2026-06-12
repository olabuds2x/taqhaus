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

const services = [
  { num: '01', title: 'Marketing strategy & consulting', desc: 'We find what is holding you back and build the plan to fix it.', type: 'Sprint · Retainer' },
  { num: '02', title: 'Brand & positioning', desc: 'What your brand stands for, and how to say it everywhere.', type: 'Project · 6–10 wk' },
  { num: '03', title: 'Website design & development', desc: 'Designed, written, built, shipped. Visitors become enquiries.', type: 'Project · 8–14 wk' },
  { num: '04', title: 'SEO — get found on Google', desc: 'Rank for the searches that matter. Results that compound.', type: 'Retainer · Ongoing' },
  { num: '05', title: 'Paid advertising', desc: 'Meta, Google, LinkedIn. Customers, not clicks.', type: 'Retainer · Ongoing' },
  { num: '06', title: 'Email marketing', desc: 'Welcome flows to weekly sends. Your list, finally working.', type: 'Retainer · Ongoing' },
  { num: '07', title: 'Social media management', desc: 'Strategy, content, posting, replies. Always on, always on-brand.', type: 'Retainer · Ongoing' },
  { num: '08', title: 'Graphic design & creative', desc: 'Social visuals, ad creative, decks. Built to your identity.', type: 'Project · Ongoing' },
  { num: '09', title: 'Motion graphics & video', desc: 'Reels, explainers, ad video. Produced end to end.', type: 'Project · Ongoing' },
]

const phases = [
  { num: 'phase 01', title: 'Diagnose', desc: 'Two weeks inside your funnel, numbers, and competition. We come back with a thesis, or tell you we are not the fit.' },
  { num: 'phase 02', title: 'Design the plan', desc: 'A 12-month growth blueprint. Specific enough to ship from on Monday.' },
  { num: 'phase 03', title: 'Build & ship', desc: 'Brand, site, content, paid, lifecycle. We ship the work ourselves.' },
  { num: 'phase 04', title: 'Compound', desc: 'Monthly reviews, quarterly resets. Most partners stay 18+ months.' },
]

const engagements = [
  { num: '— 01', title: 'Sprint', desc: 'A focused diagnosis. Strategy, plan, and a 12-month roadmap you own.', from: 'From $14k', duration: '4–6 wk' },
  { num: '— 02', title: 'Retainer', desc: 'Embedded leadership and execution across the channels that matter most.', from: 'From $9k / mo', duration: '6 mo min' },
  { num: '— 03', title: 'Equity partner', desc: 'For pre-Series A founders. Cash + equity. Full skin in the game.', from: 'Selective', duration: 'By invite' },
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

const insightsPreview = [
  {
    type: 'Essay',
    time: '8 min',
    title: 'The Marketing Audit Framework We Use to Find $50K in Wasted Spend',
    body: 'The exact diagnostic we run before every engagement.',
    slug: 'marketing-audit-framework',
  },
  {
    type: 'Playbook',
    time: '5 min',
    title: 'What GEO Is and Why Your Business Needs It Before 2027',
    body: 'AI search is reshaping how buyers find vendors. The new baseline for visibility.',
    slug: 'what-is-geo',
  },
  {
    type: 'Field Notes',
    time: '7 min',
    title: "Email Marketing ROI: Why It's Still the Highest-Leverage Channel",
    body: 'Every quarter someone declares email dead. The data keeps disagreeing.',
    slug: 'email-marketing-roi',
  },
]

const audiences = [
  {
    kicker: 'For owners',
    title: 'Small & growing businesses',
    desc: 'No marketing team? We become it. Social, search, email, ads, and your website, handled.',
    cta: 'Start with a free 20-minute audit',
    href: '/for-small-businesses',
  },
  {
    kicker: 'For founders & CMOs',
    title: 'Growth-stage brands',
    desc: 'Traction, but no system. We embed as your senior marketing partner and make growth repeatable.',
    cta: 'See how an engagement works',
    href: '/services',
  },
  {
    kicker: 'Private & discreet',
    title: 'Politicians & public figures',
    desc: 'Your name is the asset. We shape how it reads online, before campaign season decides for you.',
    cta: 'See how we have done it',
    href: '/public-figures',
  },
]

const faqs = [
  { q: 'What makes TaqHaus different from a traditional agency?', a: 'Strategy and execution under one roof. The people who build your plan are the people who do the work, so nothing falls through the gap between the two.' },
  { q: 'Do you work with small businesses?', a: 'Yes. Many clients have no marketing team at all. We start with a free 20-minute audit to find what would move the needle first.' },
  { q: 'Can I outsource just one channel, like social media or email?', a: 'Yes. Social, email, paid ads, SEO, or design as a standalone service. No minimum retainer for single-channel engagements.' },
  { q: 'Do you work with politicians and public figures?', a: 'Yes, with full discretion. Reputation management, social media, websites, and campaign communications. All enquiries are confidential.' },
  { q: 'How do engagements begin?', a: 'With a free 20-minute audit. We look at what you have, identify the biggest constraint, and give you an honest read before we talk scope or budget.' },
]

export default function LandingPageRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="TaqHaus — Marketing & Business Consultancy"
        description="We handle the strategy and do the work — so you don't have to manage five different agencies. For businesses that want more customers and leaders who need to own their story online."
        keywords="marketing consultancy, marketing agency, social media management, email marketing, SEO, paid advertising, website design, graphic design, reputation management, fractional CMO"
        canonical="/"
      />

      {/* ── Topbar ───────────────────────────────────────────────────────────── */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking Q3 engagements · Serving clients globally</span>
      </div>

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" width={120} height={44} style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Get a free audit <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 'clamp(28px,5vw,56px)', display: 'inline-flex' }}>
                Marketing &amp; Business Consultancy
              </span>
              <h1>
                Grow faster.<br />
                <em>We handle everything it takes.</em>
              </h1>
            </div>

            <motion.div className="hero-right" {...rv(0.15)}>
              <p className="lede">
                Strategy, content, ads, SEO, social, email. One senior team, one plan, one bill.
              </p>
              <div className="row" style={{ marginTop: 8 }}>
                <a href={CALENDLY_URL} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute audit <span className="arrow">↗</span>
                </a>
                <Link to="/case-studies" className="btn-link">See the work</Link>
              </div>
              <div className="hero-meta">
                <div className="item">
                  <span className="label">How we work</span>
                  <p>Single service · Retainer · Sprint · Fractional CMO</p>
                </div>
                <div className="item">
                  <span className="label">Who we work with</span>
                  <p>Small businesses · Growth brands · Public figures</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Proof strip — figures from published case studies */}
          <motion.div {...rv(0.25)}>
            <div className="hero-strip" style={{ marginTop: 'clamp(56px,7vw,96px)' }}>
              <div className="cell">
                <span className="stat"><em>+</em>188<em>%</em></span>
                <span className="label">Organic signups · The Funded Trader</span>
              </div>
              <div className="cell">
                <span className="stat"><em>+</em>142<em>%</em></span>
                <span className="label">Branded search · TopTier Trader</span>
              </div>
              <div className="cell">
                <span className="stat"><em>+</em>320<em>%</em></span>
                <span className="label">Organic traffic · SaaS startup</span>
              </div>
              <div className="cell">
                <span className="stat">$57<em>K</em></span>
                <span className="label">Email revenue in 90 days · Fashion brand</span>
              </div>
            </div>
            <div className="strip-note">
              <span>Results from individual engagements, not averages</span>
              <Link to="/case-studies">Read the case studies →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee — logo trust strip ───────────────────────────────────────── */}
      <div className="marquee" aria-label="Clients & partners">
        <div className="marquee-track">
          {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
            <span key={i} className="marquee-item">
              <img src={logo.src} alt={logo.alt} className="marquee-logo" loading="lazy" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured work — proof before pitch ───────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Selected work</span>
              <h2 className="display-md">Receipts, <em className="italic" style={{ color: 'var(--terracotta)' }}>not reels</em>.</h2>
            </div>
            <p className="lede">
              Real engagements, real timelines. Every card links to the full story.
            </p>
          </motion.div>

          <div className="work-grid">
            <MotionLink to="/case-studies/the-funded-trader" className="case feature" {...rv()}>
              <div className="media">
                <div className="case-art case-art--terra">
                  <div className="ca-meta"><span>Case 01</span><span>Prop trading · Fintech</span></div>
                  <div className="ca-mark">The Funded<br /><em>Trader.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>+</em>188<em>%</em></div>
                    <div className="ca-stat-label">Organic signups</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags">
                  <span className="tag dot">SEO</span>
                  <span className="tag">Content</span>
                  <span className="tag">Lifecycle</span>
                </div>
                <h3>Scaled qualified trader signups while cutting CAC.</h3>
                <p className="desc">
                  Organic built into the primary acquisition channel, so growth stopped depending on ad spend.
                </p>
                <div className="stats">
                  <div><div className="stat">+188%</div><span className="lbl">Organic signups</span></div>
                  <div><div className="stat">−34%</div><span className="lbl">CAC</span></div>
                  <div><div className="stat">90d</div><span className="lbl">First results</span></div>
                </div>
              </div>
            </MotionLink>

            <div className="stack" style={{ gap: 24 }}>
              <MotionLink to="/case-studies/toptier-trader" className="case" {...rv(0.1)}>
                <div className="media">
                  <div className="case-art case-art--ink compact">
                    <div className="ca-meta"><span>Case 02</span><span>Prop trading · Reputation</span></div>
                    <div className="ca-mark">TopTier<br /><em>Trader.</em></div>
                    <div className="ca-foot">
                      <div className="ca-stat-big"><em>+</em>142<em>%</em></div>
                      <div className="ca-stat-label">Branded search</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">Reputation</span>
                    <span className="tag">SEO</span>
                  </div>
                  <h3>Stabilised reputation, then grew search demand.</h3>
                  <p className="desc">
                    +142% branded search and +96% non-brand traffic after the narrative was rebuilt.
                  </p>
                </div>
              </MotionLink>
              <MotionLink to="/case-studies/saas-startup" className="case" {...rv(0.18)}>
                <div className="media">
                  <div className="case-art case-art--paper compact">
                    <div className="ca-meta"><span>Case 03</span><span>SaaS · B2B</span></div>
                    <div className="ca-mark">Page 5 <em>→ 1.</em></div>
                    <div className="ca-foot">
                      <div className="ca-stat-big"><em>+</em>320<em>%</em></div>
                      <div className="ca-stat-label">Organic traffic</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">SEO</span>
                    <span className="tag">Content</span>
                  </div>
                  <h3>From page 5 to page 1 in six months.</h3>
                  <p className="desc">
                    +320% organic traffic and a 60% lower CAC for a SaaS up against funded incumbents.
                  </p>
                </div>
              </MotionLink>
            </div>
          </div>

          <div className="work-grid-secondary">
            <MotionLink to="/case-studies/fashion-brand" className="case" {...rv()}>
              <div className="media">
                <div className="case-art case-art--terra thumb">
                  <div className="ca-meta"><span>Case 04</span><span>Fashion · Ecommerce</span></div>
                  <div className="ca-mark"><em>$57K.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big">90<em>d</em></div>
                    <div className="ca-stat-label">From email automation</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Email</span><span className="tag">Lifecycle</span></div>
                <h3>$57K in 90 days from email automation.</h3>
              </div>
            </MotionLink>
            <MotionLink to="/case-studies/public-official" className="case" {...rv(0.08)}>
              <div className="media">
                <div className="case-art case-art--ink thumb">
                  <div className="ca-meta"><span>Case 05</span><span>Public figure · Politics</span></div>
                  <div className="ca-mark">Elected<br /><em>Official.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big">5<em>×</em></div>
                    <div className="ca-stat-label">Engagement growth</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Reputation</span><span className="tag">Social</span></div>
                <h3>Digital image repositioned before campaign season.</h3>
              </div>
            </MotionLink>
            <motion.a href={CALENDLY_URL} className="case cta-tile" target="_blank" rel="noopener noreferrer" {...rv(0.16)}>
              <div className="media">
                <div className="case-art thumb">
                  <div className="ca-meta"><span>Case 06</span><span>Unwritten</span></div>
                  <div className="ca-mark">Your name<br /><em>here.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>?</em></div>
                    <div className="ca-stat-label">Let's find your number</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Free audit</span></div>
                <h3>The next case study starts with a 20-minute call.</h3>
              </div>
            </motion.a>
          </div>

          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p className="cap" style={{ margin: 0 }}>Full engagement details in every case study</p>
            <Link to="/case-studies" className="btn btn-ghost">All case studies <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">What we do</span>
              <h2 className="display-md">
                Strategy and execution. <em className="italic" style={{ color: 'var(--terracotta)' }}>Under one roof.</em>
              </h2>
            </div>
            <p className="lede">
              One team that builds the plan and does the work. One bill. No gaps.
            </p>
          </motion.div>

          <ol className="numlist">
            {services.map((svc, i) => (
              <motion.li key={svc.num} {...rv(i * 0.06)}>
                <span className="num">{svc.num}</span>
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
              See all services in detail <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who we work with ─────────────────────────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Who we work with</span>
              <h2 className="display-md">The right fit for <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>where you are</em>.</h2>
            </div>
          </motion.div>

          <div className="audiences-row-3">
            {audiences.map((aud, i) => (
              <motion.div key={aud.title} className="aud-card" {...rv(i * 0.08)}>
                <span className="kicker">{aud.kicker}</span>
                <h3>{aud.title}</h3>
                <p>{aud.desc}</p>
                <Link to={aud.href} className="btn-link">{aud.cta} →</Link>
              </motion.div>
            ))}
          </div>

          <motion.div className="aud-band" {...rv(0.2)}>
            <div>
              <h3>Just need <em>one channel</em> run properly?</h3>
              <p>Social, email, paid ads, SEO, or design as a standalone service. No retainer required.</p>
            </div>
            <Link to="/services" className="btn btn-accent">Browse standalone services <span className="arrow">→</span></Link>
          </motion.div>
        </div>
      </section>

      {/* ── How we work — dark editorial ─────────────────────────────────────── */}
      <section className="section-dark">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">How we work</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>
                No handoffs. No middlemen. <em className="italic" style={{ color: 'var(--terracotta)' }}>One</em> room.
              </h2>
            </div>
            <p className="lede">
              A senior team in your Slack and your standups, on the hook for the outcomes.
            </p>
          </motion.div>

          <ol className="numlist">
            {phases.map((ph, i) => (
              <motion.li key={ph.num} {...rv(i * 0.07)}>
                <span className="num">{ph.num}</span>
                <div className="title-col">
                  <h3>{ph.title}</h3>
                  <p>{ph.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Founder note + engagement models ─────────────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="about-teaser">
            <div className="media" style={{ position: 'relative' }}>
              <div className="case-art case-art--ink" style={{ height: '100%', minHeight: 480 }}>
                <div className="ca-meta"><span>— Manifesto</span><span>2026</span></div>
                <div className="ca-mark" style={{ fontSize: 'clamp(56px, 9vw, 156px)' }}>Move<br />the<br /><em>number.</em></div>
                <div className="ca-foot">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' as const, opacity: 0.7 }}>A note from the&nbsp;Haus</div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 32, color: 'var(--terracotta)', lineHeight: 1 }}>Ola.</div>
                </div>
              </div>
            </div>
            <motion.div className="copy" {...rv(0.1)}>
              <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>Why TaqHaus</span>
              <p className="quote">
                The job isn&rsquo;t to <em>deliver decks</em>. The job is to&nbsp;move the number. We treat every client&rsquo;s P&amp;L like our own.
              </p>
              <div className="quote-attr">
                <div>
                  <div className="name">Ola Raji</div>
                  <div>Founder &amp; Managing Partner · TaqHaus</div>
                </div>
              </div>

              <div className="engagements">
                {engagements.map(eng => (
                  <div key={eng.num} className="engagement">
                    <span className="num">{eng.num}</span>
                    <h4>{eng.title}</h4>
                    <p>{eng.desc}</p>
                    <div className="footer-row">
                      <span className="price">{eng.from}</span>
                      <span>{eng.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 36 }}>
                <Link to="/about" className="btn-link">Read our story</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Insights preview ─────────────────────────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Insights</span>
              <h2 className="display-md">Field notes from inside the work.</h2>
            </div>
          </motion.div>

          <div className="insights-grid">
            {insightsPreview.map((ins, i) => (
              <MotionLink key={ins.slug} to={`/insights/${ins.slug}`} className="insight" {...rv(i * 0.08)}>
                <div className="meta">
                  <span>{ins.type}</span>
                  <span>{ins.time}</span>
                </div>
                <h3>{ins.title}</h3>
                <p>{ins.body}</p>
                <span className="read">Read →</span>
              </MotionLink>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <Link to="/insights" className="btn-link">All insights →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <motion.div {...rv()} style={{ maxWidth: 800 }}>
            <span className="eyebrow">Questions</span>
            <h2 className="display-md" style={{ marginTop: 20 }}>Answered honestly.</h2>
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
      <motion.div className="cta-band" {...rv()}>
        <h2>Ready to get more <em>from</em> your marketing?</h2>
        <div className="stack">
          <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, transparent)', fontSize: 16, lineHeight: 1.55, maxWidth: '42ch', margin: 0 }}>
            20 minutes. No deck. We&rsquo;ll tell you what&rsquo;s holding you back, whether or not we end up working together.
          </p>
          <div className="row">
            <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a free 20-minute audit <span className="arrow">↗</span>
            </a>
            <Link to="/services" className="btn btn-ghost">See services</Link>
          </div>
        </div>
      </motion.div>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-head">
            <h2>
              Engineer growth that&nbsp;scales.<br />
              Influence that&nbsp;<em className="italic" style={{ color: 'var(--terracotta)' }}>sticks</em>.
            </h2>
            <div className="cta-stack">
              <a
                href={CALENDLY_URL}
                className="btn"
                style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book a free 20-minute audit</span>
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
                A marketing &amp; influence consultancy — strategy first, execution included.
              </p>
            </div>
            <div>
              <h4>Practice</h4>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/case-studies">Work</Link></li>
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
