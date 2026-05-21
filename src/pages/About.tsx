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

const principles = [
  {
    num: '— 01',
    title: <>We won&rsquo;t sell you a <em>deliverable</em>.</>,
    body: "We sell outcomes. The deck, the campaign, the site — those are byproducts. If the number doesn't move, we haven't worked.",
  },
  {
    num: '— 02',
    title: <>We won&rsquo;t hide behind <em>vanity</em> metrics.</>,
    body: 'Reach, impressions, GA sessions — these are inputs, not results. We report on pipeline, revenue, and the metrics your board actually cares about.',
  },
  {
    num: '— 03',
    title: <>We won&rsquo;t pretend to <em>know</em> everything.</>,
    body: "Marketing is a wide field and changing faster than ever. When we don't know, we'll say so — and either learn it on our dime or bring in the right specialist.",
  },
  {
    num: '— 04',
    title: <>We won&rsquo;t outsource the <em>work</em>.</>,
    body: "Our partners get senior operators. We don't flip you to juniors in month three. If your senior contact leaves, we eat the cost of transition.",
  },
  {
    num: '— 05',
    title: <>We won&rsquo;t take on clients we can&rsquo;t make <em>famous</em>.</>,
    body: "We turn down more work than we accept. If we can't see how to move your business, we'll tell you in the first conversation.",
  },
  {
    num: '— 06',
    title: <>We won&rsquo;t lock you in with a bad <em>contract</em>.</>,
    body: "30 days out at any time. The only reason to stay is because we're moving the number. The day we're not, you should leave.",
  },
]

const team = [
  {
    name: 'Ola Raji',
    role: 'Founder · Managing Partner',
    bio: 'Two-time CMO and one-time co-founder. Leads strategy and the toughest engagements.',
    prior: 'Prior · Northwind, Atelier, McKinsey Digital',
    label: 'ola raji',
  },
  {
    name: 'Amara Okafor',
    role: 'Partner · Brand & Narrative',
    bio: 'Designer and writer. Twelve years building category-defining identities. Probably read more books than you.',
    prior: 'Prior · Pentagram, Wieden+Kennedy, MetaLab',
    label: 'amara okafor',
  },
  {
    name: 'Diego Marín',
    role: 'Partner · Growth & Paid',
    bio: "Built and exited a $40M D2C brand. Now spends our partners' budgets like he spent his own — carefully.",
    prior: 'Prior · Allbirds, Lululemon, Carro',
    label: 'diego marin',
  },
  {
    name: 'Rohan Iyer',
    role: 'Partner · SEO & Editorial',
    bio: 'Ten years of organic growth, two of them obsessed with AI overviews. Has opinions on schema.',
    prior: 'Prior · HubSpot, Ahrefs, Mind the Product',
    label: 'rohan iyer',
  },
  {
    name: 'Claire Dubois',
    role: 'Director · Lifecycle',
    bio: "Built lifecycle programmes for the kinds of brands you've probably emailed today.",
    prior: 'Prior · Glossier, Klaviyo, Smile Direct',
    label: 'claire dubois',
  },
  {
    name: 'Omar Farooq',
    role: 'Director · Web & Engineering',
    bio: 'Designer who codes. Has shipped more conversion-optimised hero sections than is socially acceptable.',
    prior: 'Prior · Vercel, Linear, Webflow',
    label: 'omar farooq',
  },
]

export default function About() {
  return (
    <div className="tq-editorial">
      <SEO
        title="About — TaqHaus"
        description="A marketing consultancy built on operator instincts, not agency habits. Meet the team and the philosophy."
        canonical="/about"
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
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/about" className="active">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="wrap">
          <div className="manifesto-grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>A note from the&nbsp;Haus</span>
              <h1>We took the parts of an agency that worked, and threw away <em>the rest</em>.</h1>
            </div>
            <motion.div className="right-rail" {...rv(0.15)}>
              <p className="lede">
                TaqHaus is a marketing &amp; influence consultancy run by operators, not account managers. We sit inside the businesses we work with, treat the P&amp;L like our own, and stay on the hook for the&nbsp;outcome.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <a href="#team" className="btn-link">Meet the team</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 'clamp(48px,5vw,80px)' }}>
            <div className="sh-meta">
              <span className="eyebrow">Origin</span>
              <h2 className="display-md">How TaqHaus started.</h2>
            </div>
            <p className="lede">The short version: too many great clients were being failed by good agencies. The long version is below.</p>
          </div>

          <div className="origin">
            <div className="media-col imgholder" data-label="portrait · ola raji" />
            <div className="copy">
              <p>
                I&rsquo;d been an in-house CMO twice and a consultant once before I started TaqHaus. Each time, I watched the same thing happen: a brand would hire a strategy firm, get a beautiful deck, and then hand it to three different execution agencies who&rsquo;d never met each other. By month four, the plan would be dead and the founder would be back to writing their own LinkedIn posts at midnight.
              </p>
              <p>
                The problem wasn&rsquo;t a lack of talent. The talent was everywhere. The problem was the seam — the moment strategy got thrown over the fence to execution, and execution got thrown back to strategy when it didn&rsquo;t work. Every agency I&rsquo;d worked with had built their business model around that seam. We built ours to eliminate it.
              </p>
              <p>
                TaqHaus is what happens when a senior team owns the diagnosis, the plan, and the build — and stays accountable to the number for as long as you&rsquo;ll have us. No handoffs, no middlemen, no &ldquo;that&rsquo;s a different team&rsquo;s scope.&rdquo; If we can&rsquo;t move it, we&rsquo;ll tell you. And if we believe we can, we&rsquo;ll treat your business like our&nbsp;own.
              </p>
              <p>
                We&rsquo;re a small Haus by design. Fourteen partners at any one time, capped. We&rsquo;d rather do a few engagements well than scale into the mediocrity we left behind.
              </p>
              <div className="signature">
                — Ola<br />
                <span className="signature-meta">Ola Raji · Founder &amp; Managing Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-paper-2">
        <div className="wrap">
          <div className="section-head">
            <div className="sh-meta">
              <span className="eyebrow">Principles</span>
              <h2 className="display-md">What we&rsquo;ll <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>never</em> ask you to do.</h2>
            </div>
            <p className="lede">Most agencies tell you what they stand for. Easier to tell you what we won&rsquo;t do. Six commitments we&rsquo;ve never broken.</p>
          </div>

          <div className="principles">
            {principles.map((p) => (
              <motion.div key={p.num} className="principle" {...rv()}>
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section style={{ paddingTop: 'clamp(64px,7vw,112px)', paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 'clamp(32px,4vw,64px)' }}>
            <div className="sh-meta">
              <span className="eyebrow">By the numbers</span>
              <h2 className="display-md">A small Haus that&rsquo;s done <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>a lot</em>.</h2>
            </div>
            <p className="lede">Capped at fourteen partners. Eleven years compounding. Numbers as of Q2 2026.</p>
          </div>

          <div className="facts">
            <div className="fact"><span className="num">14</span><span className="lbl">Active partners</span></div>
            <div className="fact"><span className="num">$48<em>M</em></span><span className="lbl">Pipeline influenced '23–'25</span></div>
            <div className="fact"><span className="num">96<em>%</em></span><span className="lbl">Retainer renewal</span></div>
            <div className="fact"><span className="num">11<em>y</em></span><span className="lbl">Years compounding</span></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className="wrap">
          <div className="section-head">
            <div className="sh-meta">
              <span className="eyebrow">The team</span>
              <h2 className="display-md">The Haus.</h2>
            </div>
            <p className="lede">Senior operators, in-house veterans, and a handful of category-specialist freelancers we&rsquo;ve known for years. The same people you meet on day one are the ones doing the work in month twelve.</p>
          </div>

          <div className="team">
            {team.map((m) => (
              <motion.div key={m.name} className="member" {...rv()}>
                <div className="portrait imgholder" data-label={m.label} />
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
                <p className="bio">{m.bio}</p>
                <div className="prior">{m.prior}</div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
            <p className="cap" style={{ margin: 0 }}>Plus a network of 30+ specialists we trust with our partners&rsquo; names.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-link">We&rsquo;re hiring →</a>
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="section-dark" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>
              Come work <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>with</em> us.
            </h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                Whether you&rsquo;re a founder looking for a partner, or an operator looking for a Haus — we&rsquo;d love to&nbsp;hear from you.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)' }}>
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/contact" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 30%, transparent)' }}>
                  See open roles
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
