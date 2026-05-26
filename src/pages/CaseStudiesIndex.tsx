import '../styles/taqhaus-editorial.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

const cases = [
  {
    num: 'Case 01',
    period: '2024 – 2025',
    industry: 'Professional services',
    title: <>Belford &amp; Co. — From law firm to <em>category brand</em>.</>,
    tags: ['Fractional CMO', 'Brand', 'Web', 'SEO', 'Content'],
    desc: "An 80-attorney commercial practice rebuilt as a recognised voice in mid-market M&A. New brand, new site, six-pillar editorial programme, and a defensible category of one in their region.",
    stats: [
      { val: <>+312%</>, lbl: 'Organic leads YoY' },
      { val: <>4.2×</>, lbl: 'Avg. deal size' },
      { val: <>18mo</>, lbl: 'Engagement' },
    ],
    media: 'terra',
    mediaLabel: 'case 01 · belford & co',
    reverse: false,
  },
  {
    num: 'Case 02',
    period: '2025',
    industry: 'SaaS · Series A',
    title: <>Klera — A Series&nbsp;A launch that <em>actually</em> landed.</>,
    tags: ['Positioning', 'Web', 'Paid', 'PR'],
    desc: "Positioning, narrative, launch site, paid programme and a coordinated press push that turned $9M of funding into 3,400 qualified signups in eight weeks — and a competitive moat their next round closed against.",
    stats: [
      { val: <>3,400</>, lbl: 'Qualified signups' },
      { val: <>8 wk</>, lbl: 'Launch → Series A close' },
      { val: <><em>22</em></>, lbl: 'Tier-1 press placements' },
    ],
    media: 'dark',
    mediaLabel: 'case 02 · klera ai',
    reverse: true,
  },
  {
    num: 'Case 03',
    period: '2023 – 2024',
    industry: 'Hospitality',
    title: <>Vesper Hotels — Direct bookings, <em>no</em> OTAs.</>,
    tags: ['Lifecycle', 'Paid', 'Loyalty'],
    desc: "A loyalty-first growth engine that pulled 38% of revenue off Booking.com and back onto the brand's own channels in eleven months. Higher margin, better data, and a guest list the property actually owns.",
    stats: [
      { val: <>38%</>, lbl: 'Revenue off OTAs' },
      { val: <>2.4×</>, lbl: 'Repeat booking rate' },
      { val: <>11mo</>, lbl: 'Engagement' },
    ],
    media: '',
    mediaLabel: 'case 03 · vesper hotels',
    reverse: false,
  },
  {
    num: 'Case 04',
    period: '2024',
    industry: 'Healthcare',
    title: <>Northwind — A health system, <em>repositioned</em>.</>,
    tags: ['Brand', 'Internal comms', 'Web'],
    desc: "Six hospitals, twenty-three clinics, one fragmented identity. We rebuilt the master brand, the architecture beneath it, and the communications system that finally let physicians and patients speak the same language.",
    stats: [
      { val: <>23</>, lbl: 'Sites unified' },
      { val: <><em>+</em>61%</>, lbl: 'NPS (patient)' },
      { val: <>9mo</>, lbl: 'Engagement' },
    ],
    media: '',
    mediaLabel: 'case 04 · northwind health',
    reverse: true,
  },
  {
    num: 'Case 05',
    period: '2025',
    industry: 'Capital',
    title: <>Mercato Capital — LP-facing <em>storytelling</em>.</>,
    tags: ['Brand', 'Web', 'Reporting design'],
    desc: "A $1.4B mid-market PE firm with a generational story buried inside a deck graveyard. We built the narrative, the LP portal, and the quarterly reporting template that now closes capital faster than any deck ever did.",
    stats: [
      { val: <>$280M</>, lbl: 'Fund III closed' },
      { val: <>14 wk</>, lbl: 'Brand to launch' },
      { val: <>100%</>, lbl: 'Re-up from existing LPs' },
    ],
    media: 'dark',
    mediaLabel: 'case 05 · mercato capital',
    reverse: false,
  },
  {
    num: 'Case 06',
    period: '2023 – Present',
    industry: 'Founder brand',
    title: <>The Halsey Group — Founder voice, <em>at scale</em>.</>,
    tags: ['Personal brand', 'Content', 'LinkedIn', 'Speaking'],
    desc: "Built a founder brand that opens doors. Editorial cadence, ghostwritten thought leadership, speaking circuit and a personal site that converts inbounds into invitations. Now opening rooms her cold email couldn't.",
    stats: [
      { val: <>76k</>, lbl: 'LinkedIn followers' },
      { val: <>14</>, lbl: 'Keynote invites / yr' },
      { val: <><em>3</em></>, lbl: 'Books in the pipeline' },
    ],
    media: 'terra',
    mediaLabel: 'case 06 · the halsey group',
    reverse: true,
  },
]

export default function CaseStudiesIndex() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Work — TaqHaus"
        description="Selected case studies. Real numbers, real timelines, real teams."
        canonical="/case-studies"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking Q3 engagements · 2 retainer seats open</span>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 110, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies" className="active">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Page head */}
      <section className="page-head">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Selected work · 2022 – 2026</span>
              <h1>Receipts. <em>Not</em> reels.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                A small selection of the partners we&rsquo;ve worked with. Every engagement is measured against revenue, pipeline, or category-specific outcomes — not vanity metrics.
              </p>
              <p style={{ marginTop: 18, color: 'var(--ink-2)', fontSize: 14.5 }}>Some clients prefer to stay quiet — full case studies on request under NDA.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Index bar */}
      <div className="index-bar">
        <div className="wrap">
          <div className="row">
            <span>Index 01–06</span>
            <span>14 active partners</span>
            <span>$48M pipeline influenced</span>
            <span style={{ color: 'var(--terracotta)' }}>2026</span>
          </div>
        </div>
      </div>

      {/* Cases */}
      <section>
        <div className="wrap">
          <div className="filter-bar">
            <span className="lbl">Filter</span>
            <button className="filter-chip active">All</button>
            <button className="filter-chip">SaaS</button>
            <button className="filter-chip">Professional services</button>
            <button className="filter-chip">Founder brand</button>
            <button className="filter-chip">Healthcare</button>
            <button className="filter-chip">Hospitality</button>
            <button className="filter-chip">Capital</button>
          </div>

          {cases.map((c) => (
            <motion.article key={c.num} className={`case-row${c.reverse ? ' reverse' : ''}`} {...rv()}>
              <div className={`media-col imgholder${c.media ? ` ${c.media}` : ''}`} data-label={c.mediaLabel} />
              <div className="copy-col">
                <div className="ticker">
                  <span>{c.num}</span>
                  <span className="dot" />
                  <span>{c.period}</span>
                  <span className="dot" />
                  <span>{c.industry}</span>
                </div>
                <h2>{c.title}</h2>
                <div className="tags">
                  {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="desc">{c.desc}</p>
                <div className="stats">
                  {c.stats.map((s, i) => (
                    <div key={i}>
                      <div className="stat">{s.val}</div>
                      <span className="lbl">{s.lbl}</span>
                    </div>
                  ))}
                </div>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Discuss a similar engagement →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="pullquote">
        <div className="wrap">
          <div className="grid">
            <p className="quote">&ldquo;They run the work as if their <em>own</em> equity is on the line. Frankly, with us it&nbsp;is.&rdquo;</p>
            <div>
              <span className="attr">
                <strong>Marcus Belford</strong>
                Managing Partner · Belford &amp; Co.
              </span>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                Become a partner <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="section-dark" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>
              Your case study could be <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>next</em>.
            </h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                We take on a small number of new partners each quarter. If you&rsquo;ve got a real problem and a real budget, let&rsquo;s talk.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)' }}>
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/services" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 30%, transparent)' }}>
                  See services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-head">
            <h2>Engineer growth that&nbsp;scales.<br />Influence that&nbsp;<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>sticks</em>.</h2>
            <div className="cta-stack">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}>
                <span>Book a discovery call</span><span className="arrow">↗</span>
              </a>
              <a href="mailto:info@taqhaus.com" className="btn-link" style={{ color: 'color-mix(in oklch, var(--paper) 80%, transparent)', borderColor: 'color-mix(in oklch, var(--paper) 24%, transparent)' }}>
                info@taqhaus.com
              </a>
            </div>
          </div>
          <div className="footer-cols">
            <div><h4>Office</h4><ul><li>71 Albion Road</li><li>Toronto, ON M5V 2H1</li><li>By appointment</li></ul></div>
            <div><h4>Practice</h4><ul><li><Link to="/services">Services</Link></li><li><Link to="/case-studies">Work</Link></li><li><Link to="/about">About</Link></li></ul></div>
            <div><h4>Read</h4><ul><li><Link to="/insights">Insights</Link></li><li><Link to="/insights">Field notes</Link></li><li><Link to="/insights">Newsletter</Link></li></ul></div>
            <div><h4>Elsewhere</h4><ul><li><a href="#">LinkedIn</a></li><li><a href="#">Substack</a></li><li><a href="#">X / Twitter</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TaqHaus Consultancy Inc.</span>
            <span>Made in&nbsp;Toronto · Serving everywhere</span>
          </div>
          <div className="footer-mark">TaqHaus<span style={{ color: 'var(--terracotta)' }}>.</span></div>
        </div>
      </footer>
    </div>
  )
}
