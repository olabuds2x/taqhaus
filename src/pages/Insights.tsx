import '../styles/taqhaus-editorial.css'
import { useState } from 'react'
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

const articles = [
  {
    type: 'Teardown',
    time: '11 min',
    date: 'Apr 28 · 2026',
    title: 'What Notion got right about category creation.',
    body: "A category isn't a positioning statement. It's a vocabulary your customers use against your competition.",
    media: '',
    slug: 'marketing-audit-framework',
  },
  {
    type: 'Playbook',
    time: '14 min',
    date: 'Apr 14 · 2026',
    title: 'SEO after the AI overview.',
    body: 'Topical authority, structured data, and being the source — not the summary. A practical 2026 framework.',
    media: 'dark',
    slug: 'what-is-geo',
  },
  {
    type: 'Essay',
    time: '6 min',
    date: 'Apr 02 · 2026',
    title: "Don't hire a head of marketing yet.",
    body: 'The most expensive mistake we see Series-A founders make. What to build before the org chart.',
    media: '',
    slug: 'email-marketing-roi',
  },
  {
    type: 'Field notes',
    time: '5 min',
    date: 'Mar 21 · 2026',
    title: 'The newsletter is the channel again.',
    body: "What we're seeing across nine email programmes in 2026 — opens, deliverability, and the quiet death of Substack envy.",
    media: 'terra',
    slug: 'marketing-audit-framework',
  },
  {
    type: 'Interview',
    time: '22 min',
    date: 'Mar 09 · 2026',
    title: 'Sara Halsey on founder brand vs. company brand.',
    body: "What happens when the founder's LinkedIn outperforms the company's, and how to manage the seam.",
    media: '',
    slug: 'what-is-geo',
  },
  {
    type: 'Playbook',
    time: '17 min',
    date: 'Feb 24 · 2026',
    title: 'How to actually attribute paid media in 2026.',
    body: "MMM, incrementality tests, and the boring spreadsheet that beats every attribution platform you'll be sold this year.",
    media: 'dark',
    slug: 'email-marketing-roi',
  },
  {
    type: 'Essay',
    time: '9 min',
    date: 'Feb 10 · 2026',
    title: "Positioning is a posture, not a sentence.",
    body: "Why the 'for X, who Y, we Z' template produces marketing decks but not market position.",
    media: '',
    slug: 'marketing-audit-framework',
  },
  {
    type: 'Teardown',
    time: '13 min',
    date: 'Jan 27 · 2026',
    title: 'Five B2B homepages we redesigned in our heads.',
    body: 'Linear, Vercel, Stripe, Ramp, and Mercury — what works, what we\'d change, and why most B2B sites look identical now.',
    media: '',
    slug: 'what-is-geo',
  },
  {
    type: 'Field notes',
    time: '7 min',
    date: 'Jan 14 · 2026',
    title: 'The KPIs we stopped reporting on this year.',
    body: "Three vanity metrics we've walked back to our partners, and what we report on instead.",
    media: 'terra',
    slug: 'email-marketing-roi',
  },
]

export default function Insights() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)

  return (
    <div className="tq-editorial">
      <SEO
        title="Insights — TaqHaus"
        description="Essays, teardowns, and field notes from the people doing the work."
        canonical="/insights"
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
            <img src="/taqhaus-logo.svg" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/insights" className="active">Insights</Link>
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
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Field notes from inside the&nbsp;work</span>
              <h1>Insights, not <em>content</em>.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Essays, teardowns, and the occasional uncomfortable opinion — written by the operators doing the work, not the marketing team.
              </p>
              <p style={{ marginTop: 18, color: 'var(--ink-2)', fontSize: 14.5 }}>
                New piece roughly every two weeks. Subscribe below to get them in your inbox.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured essay */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <motion.div className="featured-essay" {...rv()}>
            <div className="media imgholder terra" data-label="essay 01 · death of the briefing" />
            <div className="body">
              <div className="meta">
                <span>Featured essay</span>
                <span className="dot" />
                <span>8 min read</span>
                <span className="dot" />
                <span>May 2026</span>
              </div>
              <h2>The death of the agency <em>briefing</em>.</h2>
              <p>
                If you&rsquo;re still writing 40-page briefs and sending them over the fence, you&rsquo;re paying for a slower version of yourself. An argument for embedded teams, shared Slack channels, and the end of the &ldquo;client-side&rdquo; / &ldquo;agency-side&rdquo; distinction.
              </p>
              <Link to="/insights/marketing-audit-framework" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Read the essay <span className="arrow">↗</span>
              </Link>
              <div className="author">
                <div className="avatar" />
                <div className="author-text">
                  <strong>Ola Raji</strong>
                  <span>Founder · TaqHaus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Library */}
      <section>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div className="sh-meta">
              <span className="eyebrow">The library</span>
              <h2 className="display-md">Recent writing.</h2>
            </div>
            <p className="lede">Filter by format. Essays are point-of-view. Teardowns deconstruct other people&rsquo;s work. Playbooks are practical guides we&rsquo;ve actually run.</p>
          </div>

          <div className="tabs">
            <span className="lbl">View</span>
            <button className="tab active">All</button>
            <button className="tab">Essays</button>
            <button className="tab">Teardowns</button>
            <button className="tab">Playbooks</button>
            <button className="tab">Interviews</button>
            <button className="tab">Field notes</button>
          </div>

          <div className="articles">
            {articles.map((a, i) => (
              <Link key={i} to={`/insights/${a.slug}`} className="article" style={{ textDecoration: 'none' }}>
                <div className={`thumb imgholder${a.media ? ` ${a.media}` : ''}`} data-label={a.title.toLowerCase().slice(0, 30)} />
                <div className="meta">
                  <span className="type">{a.type}</span>
                  <span>{a.time}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <div className="footer-row">
                  <span>{a.date}</span>
                  <span className="read">Read →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-ghost">Load more <span className="arrow">↓</span></button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="newsletter">
            <div>
              <h2>The Haus <em>Dispatch</em>.</h2>
              <p>One essay every other Thursday. 4,200 founders and operators read it. We&rsquo;ll never sell your address, and you can unsubscribe in one&nbsp;click.</p>
            </div>
            <div>
              {subscribeSuccess ? (
                <div style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                  ✓ Thanks. Confirm via email.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubscribeSuccess(true) }}>
                  <input type="email" placeholder="you@company.com" required />
                  <button type="submit">Subscribe <span className="arrow">→</span></button>
                </form>
              )}
              <div className="meta-row">
                <span>4,200 subscribers</span>
                <span>·</span>
                <span>Every other Thursday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA paper-2 */}
      <section className="section-paper-2" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg">
              Need help running this <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>in</em> your business?
            </h2>
            <div className="stack">
              <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                We don&rsquo;t just write about this stuff. If you want a Haus running your growth, let&rsquo;s talk.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/services" className="btn-link">See services</Link>
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
