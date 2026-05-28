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
  { num: '01', title: 'Marketing strategy & consulting', desc: 'We look at your business, find what\'s holding you back, and build a plan to fix it. Senior thinking, practical output.', type: 'Sprint · Retainer' },
  { num: '02', title: 'Brand & positioning', desc: 'We define what your brand stands for and how to talk about it. Identity that works in the real world — not just a mood board.', type: 'Project · 6–10 wk' },
  { num: '03', title: 'Website design & development', desc: 'We design and build websites that look the part and turn visitors into enquiries. Copy included. Analytics set up. Shipped.', type: 'Project · 8–14 wk' },
  { num: '04', title: 'SEO — get found on Google', desc: 'We fix the technical problems, write the content, and build the authority that keeps you ranking. Unlike ads, the results keep working.', type: 'Retainer · Ongoing' },
  { num: '05', title: 'Paid advertising', desc: 'We run your ads on Meta, Google, and LinkedIn and make sure they bring in customers — not just clicks. Strategy, creative, and reporting.', type: 'Retainer · Ongoing' },
  { num: '06', title: 'Email marketing', desc: 'We set up and run your email — from welcome sequences to weekly newsletters to promotional campaigns. Your list, finally working.', type: 'Retainer · Ongoing' },
  { num: '07', title: 'Social media management', desc: 'We run your social media — strategy, content, posting, and replies. Your channels stay active and on-brand without you thinking about it.', type: 'Retainer · Ongoing' },
  { num: '08', title: 'Graphic design & creative', desc: 'Branded graphics, social visuals, ad creatives, pitch decks. Everything your brand needs to look the part, built to your identity.', type: 'Project · Ongoing' },
  { num: '09', title: 'Motion graphics & video', desc: 'Reels, explainer videos, animated graphics, ad videos. Scroll-stopping content for every platform — produced end to end.', type: 'Project · Ongoing' },
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

const audiences = [
  {
    title: 'Small & Growing Businesses',
    desc: "You don't have a marketing team. You're running the business yourself, or with a small crew. We step in as your marketing department — handling your social media, Google presence, email, ads, and website so you can focus on what you actually do.",
    cta: 'Start with a free 20-minute audit',
    href: '/for-small-businesses',
  },
  {
    title: 'Politicians & Public Figures',
    desc: "Your Google results are your reputation. Your social presence is how people decide if they trust you. We build your digital profile, manage your social channels, and make sure your name shows up the right way online — before, during, and after campaign season.",
    cta: 'See how we\'ve done it',
    href: '/public-figures',
  },
  {
    title: 'Growth-Stage Brands',
    desc: "Businesses with traction that are ready to grow in a more structured, repeatable way. We embed as your senior marketing partner and run the channels that matter most.",
    cta: 'Book a discovery call',
    href: '/contact',
  },
  {
    title: 'In-House Teams',
    desc: "Internal teams who need senior direction, a clear plan, or specialist execution on channels they don't have covered. We work alongside your team — not instead of it.",
    cta: 'Talk to a strategist',
    href: '/contact',
  },
  {
    title: 'Outsourcing One Channel',
    desc: "You don't need a full agency relationship — just someone to take one thing off your plate and run it properly. Social media, email, paid ads, SEO, graphic design. No full retainer required. We treat every channel we manage as if it were our own.",
    cta: 'Browse standalone services',
    href: '/services',
  },
]

const faqs = [
  { q: "What makes TaqHaus different from a traditional agency?", a: "We blend strategy and execution under one roof. You get consulting-level thinking paired with a team that does the actual work — so nothing falls through the gap between the plan and the result." },
  { q: "Do you work with small businesses?", a: "Yes. Many of our clients are business owners who don't have a marketing team and need someone to step in and handle it. We start with a free 20-minute audit to understand where you are and what would move the needle first." },
  { q: "Can I outsource just one part of my marketing — like social media or email?", a: "Absolutely. You don't need to hand us everything. Many clients come to us for one service — social media management, email marketing, paid ads, or SEO — and we run it as if it were our own channel. No minimum retainer required for single-service engagements." },
  { q: "Do you work with politicians and public figures?", a: "Yes, and we treat those engagements with full discretion. We've worked with elected officials, candidates, and executives on reputation management, social media, website design, and campaign communications. All enquiries are kept confidential." },
  { q: "How do engagements begin?", a: "Every partnership starts with a discovery call — or a free 20-minute audit for smaller businesses. We look at what you've got, identify the biggest constraint, and give you an honest read before we talk about scope or budget." },
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
        <span>Now booking Q3 engagements · 2 retainer seats open · Serving clients globally</span>
      </div>

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
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
                Marketing &amp; Business Consultancy
              </span>
              <h1>
                Grow faster.<br />
                <em>We handle everything it takes.</em>
              </h1>
            </div>

            <motion.div className="hero-right" {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(19px,1.5vw,24px)' }}>
                TaqHaus is a marketing consultancy that handles everything — strategy, content, ads, SEO, social media, email — so you can stop juggling agencies and start seeing results.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.6 }}>
                For businesses that want more customers without the agency headache. For leaders and public figures who need to control their story online.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/case-studies" className="btn-link">See the work</Link>
              </div>
              <div className="hero-meta">
                <div className="item">
                  <span className="label">How we work</span>
                  <p>Single service · Retainer · Fractional CMO · Sprint</p>
                </div>
                <div className="item">
                  <span className="label">Who we work with</span>
                  <p>Small businesses · Growing brands · Politicians &amp; public figures — globally</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats strip — PLACEHOLDER: replace figures with verified data before launch */}
          <motion.div className="hero-strip" {...rv(0.25)}>
            <div className="cell">
              <span className="stat">11<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>+</em></span>
              <span className="label">Years in business</span>
            </div>
            <div className="cell">
              <span className="stat">avg. 3<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>×</em></span>
              <span className="label">More qualified leads within 90 days</span>
            </div>
            <div className="cell">
              <span className="stat">96%</span>
              <span className="label">Of clients renew year after year</span>
            </div>
            <div className="cell">
              <span className="stat">8 <em style={{ color: 'var(--terracotta)', fontStyle: 'italic', fontSize: '0.65em' }}>wks</em></span>
              <span className="label">Typical time to first results</span>
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
                Strategy and execution. <em className="italic" style={{ color: 'var(--terracotta)' }}>Under one roof.</em>
              </h2>
            </div>
            <p className="lede">
              Most businesses work with five different agencies who&rsquo;ve never met each other. We handle everything — from figuring out the plan to doing the actual work. One team. One bill. No gaps.
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
            <p className="lede">Whether you&rsquo;re a business owner who needs their marketing handled, or a public figure who needs to own their presence online — we have the right service and the experience to deliver it.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 48 }}>
            {audiences.map((aud, i) => (
              <motion.div key={aud.title} {...rv(i * 0.08)} style={{ background: 'var(--paper)', border: '1px solid var(--hairline)', borderRadius: 16, padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px,1.6vw,24px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--ink)' }}>{aud.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.65, margin: 0, flex: 1 }}>{aud.desc}</p>
                <Link to={aud.href} className="btn-link" style={{ marginTop: 8, fontSize: 13.5 }}>{aud.cta} →</Link>
              </motion.div>
            ))}
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
            <p className="cap" style={{ margin: 0 }}>14 partners · 6 industries · serving globally</p>
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
        <h2>Ready to get more <em>from</em> your marketing?</h2>
        <div className="stack">
          <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, transparent)', fontSize: 16, lineHeight: 1.55, maxWidth: '42ch', margin: 0 }}>
            30 minutes. No deck. We&rsquo;ll look at what you have, tell you what&rsquo;s holding you back, and give you a clear point of view — whether or not we work together.
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
