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
  { num: '01', title: 'Growth strategy & fractional CMO', desc: 'A senior operator embedded in your leadership team. We diagnose the constraint, build the plan, and stay accountable to the number.', type: 'Retainer · Sprint' },
  { num: '02', title: 'Brand & positioning', desc: "The story, the system, and the language. Identity work that survives contact with your sales team, your investors, and your hiring page.", type: 'Project · 6–10 wk' },
  { num: '03', title: 'Websites & product marketing', desc: "Sites that convert and editorial surfaces that compound. Designed, copywritten, and shipped — not delivered as a Figma file.", type: 'Project · 8–14 wk' },
  { num: '04', title: 'SEO & organic growth', desc: 'Technical, editorial, and topical authority. Strategies built for AI search and human readers in equal measure.', type: 'Retainer · Ongoing' },
  { num: '05', title: 'Paid acquisition', desc: 'Performance media that respects the brand. Meta, Google, LinkedIn, programmatic — testing rigour, narrative-first creative.', type: 'Retainer · Ongoing' },
  { num: '06', title: 'Lifecycle & email', desc: "The unglamorous channel that quietly outperforms everything else. Flows, broadcasts, and a sender voice that doesn't embarrass you.", type: 'Retainer · Ongoing' },
]

const phases = [
  { num: 'phase 01', title: 'Diagnose', desc: "A two-week deep dive into your funnel, your numbers, your customers, and your competition. We come back with a thesis — or we tell you we're not the right fit.", period: 'Weeks 01–02' },
  { num: 'phase 02', title: 'Design the plan', desc: 'A 12-month growth blueprint. Positioning, channels, content, measurement. Specific enough to ship from on Monday.', period: 'Weeks 03–04' },
  { num: 'phase 03', title: 'Build & ship', desc: "Brand, site, content engine, paid programme, lifecycle. Whatever the plan calls for — we ship the work, we don't outsource it.", period: 'Weeks 05–14' },
  { num: 'phase 04', title: 'Compound', desc: 'Monthly business reviews, quarterly resets, and a team that gets better at your category every month. Most partners stay 18+ months.', period: 'Month 04+' },
]

const engagements = [
  { num: '— 01', title: 'Sprint', desc: 'A 4–6 week diagnosis. Strategy, plan, and a 12-month roadmap you actually own.', from: 'From $14k', duration: '4–6 wk' },
  { num: '— 02', title: 'Retainer', desc: 'Embedded leadership and execution across the channels that matter most to you.', from: 'From $9k / mo', duration: '6 mo min' },
  { num: '— 03', title: 'Equity partner', desc: 'For pre-Series A founders. Cash + equity. Aligned incentives, full skin in the game.', from: 'Selective', duration: 'By invite' },
]

const marqueeLogos = [
  { src: '/logos/logo-1.png', alt: 'Client logo' },
  { src: '/logos/logo-2.jpg', alt: 'Spirit Airlines' },
  { src: '/logos/logo-3.png', alt: 'Texas Tech Athletics' },
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
    body: "Most businesses are leaking budget in predictable places. Here's the exact diagnostic we run before every engagement.",
    slug: 'marketing-audit-framework',
  },
  {
    type: 'Playbook',
    time: '5 min',
    title: 'What GEO Is and Why Your Business Needs It Before 2027',
    body: 'AI search results are reshaping how buyers find vendors. Generative Engine Optimisation is the new baseline for organic visibility.',
    slug: 'what-is-geo',
  },
  {
    type: 'Field Notes',
    time: '7 min',
    title: "Email Marketing ROI: Why It's Still the Highest-Leverage Channel",
    body: 'Every quarter someone declares email dead. Every quarter the data proves the opposite. A case for staying boring and profitable.',
    slug: 'email-marketing-roi',
  },
]

const faqs = [
  { q: "What makes TaqHaus different from a traditional agency?", a: "We blend strategy and execution under one roof. You get consulting-level diagnostics paired with implementation teams that execute with precision and accountability." },
  { q: "Do you work with in-house teams or replace them?", a: "Both. Many partners keep their internal teams and lean on us for audits, strategy, and oversight. Others engage our execution team to run critical initiatives end to end." },
  { q: "How do engagements begin?", a: "Every partnership starts with a discovery call. We evaluate growth levers, narrative, and infrastructure to build the roadmap and investment plan that fits your objectives." },
]

export default function LandingPageRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="TaqHaus — Marketing & Influence Consultancy"
        description="A full-stack marketing partner for founders, CMOs, and public figures. Strategy and execution under one roof — brand, web, SEO, paid, email."
        keywords="marketing consultancy, growth strategy, fractional CMO, SEO, digital marketing, brand strategy"
        canonical="/"
      />

      {/* ── Topbar ───────────────────────────────────────────────────────────── */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking Q3 engagements · 2 retainer seats open</span>
      </div>

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.svg" alt="TaqHaus" style={{ height: 440, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 'clamp(28px,5vw,56px)', display: 'inline-flex' }}>
                Marketing &amp; Influence Consultancy
              </span>
              <h1>
                We run your growth<br />
                <em>like it&rsquo;s ours.</em>
              </h1>
            </div>

            <motion.div className="hero-right" {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(19px,1.5vw,24px)' }}>
                A full-stack marketing partner for founders, CMOs, and public figures.
                Strategy <em style={{ color: 'var(--terracotta)' }}>and</em> execution under one roof — brand, web, SEO, paid, email, and the messy bits in between.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/case-studies" className="btn-link">See the work</Link>
              </div>
              <div className="hero-meta">
                <div className="item">
                  <span className="label">Engagements</span>
                  <p>Fractional CMO · Retainers · Sprints</p>
                </div>
                <div className="item">
                  <span className="label">Currently with</span>
                  <p>14 active partners across SaaS, professional services &amp; founder brands</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div className="hero-strip" {...rv(0.25)}>
            <div className="cell">
              <span className="stat">11<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>+</em></span>
              <span className="label">Years compounding growth</span>
            </div>
            <div className="cell">
              <span className="stat">$48M</span>
              <span className="label">Pipeline influenced &rsquo;23–&rsquo;25</span>
            </div>
            <div className="cell">
              <span className="stat">96%</span>
              <span className="label">Retainer renewal</span>
            </div>
            <div className="cell">
              <span className="stat">1<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>.</em>Haus</span>
              <span className="label">Strategy &amp; execution, no handoffs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee — logo trust strip ───────────────────────────────────────── */}
      <div className="marquee" aria-label="Clients & partners">
        <div className="marquee-track">
          {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
            <span key={i} className="marquee-item">
              <img src={logo.src} alt={logo.alt} className="marquee-logo" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Services preview ─────────────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">What we do</span>
              <h2 className="display-md">
                Six disciplines, <em className="italic" style={{ color: 'var(--terracotta)' }}>one</em> team.
              </h2>
            </div>
            <p className="lede">
              You shouldn&rsquo;t need to brief six different agencies who&rsquo;ve never met each other. We sit inside your business and run the whole stack — strategy through to the shipped artefact.
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
              Explore services in detail <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured work ────────────────────────────────────────────────────── */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Selected work</span>
              <h2 className="display-md">Receipts, not reels.</h2>
            </div>
            <p className="lede">
              A small sample of the partners we work with. Real numbers, real timelines. Full case studies on request.
            </p>
          </motion.div>

          <div className="work-grid">
            <MotionLink to="/case-studies" className="case feature" {...rv()}>
              <div className="media" style={{ display: 'block' }}>
                <div className="case-art case-art--terra" style={{ height: '100%', minHeight: '100%' }}>
                  <div className="ca-meta"><span>Case 01</span><span>Professional services</span></div>
                  <div className="ca-mark">Belford<br /><em>&amp; Co.</em></div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>+</em>312<em>%</em></div>
                    <div className="ca-stat-label">Organic leads YoY</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags">
                  <span className="tag dot">Fractional CMO</span>
                  <span className="tag">Brand</span>
                  <span className="tag">SEO</span>
                </div>
                <h3>Belford &amp; Co. — From law firm to category brand.</h3>
                <p className="desc">
                  An 80-attorney commercial practice rebuilt as a recognised voice in M&amp;A. New brand, new site, six pillar content programme, and a category of one.
                </p>
                <div className="stats">
                  <div><div className="stat">+312%</div><span className="lbl">Organic leads</span></div>
                  <div><div className="stat">4.2×</div><span className="lbl">Avg. deal size</span></div>
                  <div><div className="stat">18mo</div><span className="lbl">Engagement</span></div>
                </div>
              </div>
            </MotionLink>

            <div className="stack" style={{ gap: 24 }}>
              <MotionLink to="/case-studies" className="case" {...rv(0.1)}>
                <div className="media" style={{ display: 'block' }}>
                  <div className="case-art case-art--ink compact" style={{ height: '100%' }}>
                    <div className="ca-meta"><span>Case 02</span><span>SaaS · Series A</span></div>
                    <div className="ca-mark">Kler<em>a.</em></div>
                    <div className="ca-foot">
                      <div className="ca-stat-big">3,400</div>
                      <div className="ca-stat-label">Signups in 8 wks</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">Launch</span>
                    <span className="tag">Web</span>
                  </div>
                  <h3>Klera — A Series A launch that actually launched.</h3>
                  <p className="desc">
                    Positioning, narrative, site, paid, and a press programme that turned $9M of funding into 3,400 qualified signups in eight weeks.
                  </p>
                </div>
              </MotionLink>
              <MotionLink to="/case-studies" className="case" {...rv(0.18)}>
                <div className="media" style={{ display: 'block' }}>
                  <div className="case-art case-art--paper compact" style={{ height: '100%' }}>
                    <div className="ca-meta"><span>Case 03</span><span>Hospitality</span></div>
                    <div className="ca-mark"><em>Vesper</em></div>
                    <div className="ca-foot">
                      <div className="ca-stat-big">38<em>%</em></div>
                      <div className="ca-stat-label">Revenue off OTAs</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="tags">
                    <span className="tag dot">Lifecycle</span>
                    <span className="tag">Paid</span>
                  </div>
                  <h3>Vesper Hotels — Direct bookings, no OTAs.</h3>
                  <p className="desc">
                    A loyalty-first growth engine that pulled 38% of revenue off Booking.com and back onto the brand&rsquo;s own channels in 11 months.
                  </p>
                </div>
              </MotionLink>
            </div>
          </div>

          <div className="work-grid-secondary">
            <MotionLink to="/case-studies" className="case" {...rv()}>
              <div className="media" style={{ display: 'block' }}>
                <div className="case-art case-art--paper thumb" style={{ height: '100%' }}>
                  <div className="ca-meta"><span>Case 04</span><span>Healthcare</span></div>
                  <div className="ca-mark">Northwind</div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>+</em>61</div>
                    <div className="ca-stat-label">Patient NPS lift</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Brand</span></div>
                <h3>Northwind — A health system, repositioned.</h3>
              </div>
            </MotionLink>
            <MotionLink to="/case-studies" className="case" {...rv(0.08)}>
              <div className="media" style={{ display: 'block' }}>
                <div className="case-art case-art--ink thumb" style={{ height: '100%' }}>
                  <div className="ca-meta"><span>Case 05</span><span>Capital</span></div>
                  <div className="ca-mark">Mercato</div>
                  <div className="ca-foot">
                    <div className="ca-stat-big"><em>$</em>280<em>M</em></div>
                    <div className="ca-stat-label">Fund III closed</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Web</span></div>
                <h3>Mercato Capital — LP-facing storytelling.</h3>
              </div>
            </MotionLink>
            <MotionLink to="/case-studies" className="case" {...rv(0.16)}>
              <div className="media" style={{ display: 'block' }}>
                <div className="case-art case-art--terra thumb" style={{ height: '100%' }}>
                  <div className="ca-meta"><span>Case 06</span><span>Founder brand</span></div>
                  <div className="ca-mark">Halsey</div>
                  <div className="ca-foot">
                    <div className="ca-stat-big">76<em>k</em></div>
                    <div className="ca-stat-label">LinkedIn followers</div>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="tags"><span className="tag dot">Personal brand</span></div>
                <h3>The Halsey Group — Founder voice at scale.</h3>
              </div>
            </MotionLink>
          </div>

          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p className="cap" style={{ margin: 0 }}>14 partners · 6 industries · 3 continents</p>
            <Link to="/case-studies" className="btn btn-ghost">All case studies <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── About / philosophy teaser ────────────────────────────────────────── */}
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
                The job isn&rsquo;t to <em>deliver decks</em>. The job is to&nbsp;move the number. We treat every client&rsquo;s P&amp;L like our own — and we don&rsquo;t take on clients we can&rsquo;t make&nbsp;famous.
              </p>
              <div className="quote-attr">
                <div>
                  <div style={{ color: 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 14, letterSpacing: '-0.005em', marginBottom: 2, fontWeight: 500 }}>Ola Raji</div>
                  <div>Founder &amp; Managing Partner · TaqHaus</div>
                </div>
              </div>

              <div className="engagements">
                {engagements.map(eng => (
                  <div key={eng.num} className="engagement">
                    <span className="num">{eng.num}</span>
                    <h4>{eng.title}</h4>
                    <p>{eng.desc}</p>
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
              A senior team that owns the work end-to-end. We&rsquo;re in your Slack, your standups, your quarterly board reviews — and on the hook for the outcomes.
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

      {/* ── Insights preview ─────────────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Insights</span>
              <h2 className="display-md">Field notes from inside the work.</h2>
            </div>
            <p className="lede">
              Essays, teardowns and the occasional uncomfortable opinion. Written by the people doing the work — not the marketing team.
            </p>
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
      <section className="section-paper-2">
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
        <h2>Let&rsquo;s see if we&rsquo;re a <em>fit</em>.</h2>
        <div className="stack">
          <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, transparent)', fontSize: 16, lineHeight: 1.55, maxWidth: '42ch', margin: 0 }}>
            30 minutes. No deck. We&rsquo;ll ask about the constraint, not the brief. You&rsquo;ll leave with a point of view — whether or not we work together.
          </p>
          <div className="row">
            <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a discovery call <span className="arrow">↗</span>
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
                <span>Book a discovery call</span>
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
                src="/taqhaus-logo.svg"
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
                <li><Link to="/insights">Field notes</Link></li>
                <li><Link to="/contact">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                <li><a href="https://linkedin.com/company/taqhaus" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Substack</a></li>
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
