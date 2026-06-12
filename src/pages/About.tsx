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
    title: <>We won&rsquo;t sell you a <em>document</em>.</>,
    body: "We sell results. The plan, the campaign, the website: those are just tools. If your numbers don't move, we haven't done our job.",
  },
  {
    num: '— 02',
    title: <>We won&rsquo;t show you numbers that don&rsquo;t <em>matter</em>.</>,
    body: 'Reach, impressions, page views: none of those pay your bills. We report on enquiries, revenue, and the numbers your business actually runs on.',
  },
  {
    num: '— 03',
    title: <>We won&rsquo;t pretend to <em>know</em> everything.</>,
    body: "Marketing is a big field and it changes fast. When we don't know something, we'll say so. Then we'll learn it at our own cost, or bring in someone who already knows it.",
  },
  {
    num: '— 04',
    title: <>We won&rsquo;t outsource the <em>work</em>.</>,
    body: "You get senior people, and you keep them. We don't switch you to juniors in month three. If your main contact leaves, we cover the cost of the handover.",
  },
  {
    num: '— 05',
    title: <>We won&rsquo;t take on clients we can&rsquo;t make <em>famous</em>.</>,
    body: "We turn down more work than we take on. If we can't see a way to help your business, we'll tell you in the first call.",
  },
  {
    num: '— 06',
    title: <>We won&rsquo;t lock you in with a bad <em>contract</em>.</>,
    body: "You can leave with 30 days' notice, any time. The only reason to stay is that we're moving your numbers. The day we're not, you should go.",
  },
]

const team = [
  {
    name: 'Ola Raji',
    role: 'Founder · Managing Partner',
    bio: 'Has led marketing as a CMO twice and co-founded a company once. Handles the plans and the hardest jobs. Will give you a straight answer on the first call.',
    prior: 'Prior · Northwind, Atelier, McKinsey Digital',
    label: 'ola raji',
  },
  {
    name: 'Amara Okafor',
    role: 'Partner · Brand & Story',
    bio: 'Designer and writer. Twelve years building brands people remember. Probably read more books than you.',
    prior: 'Prior · Pentagram, Wieden+Kennedy, MetaLab',
    label: 'amara okafor',
  },
  {
    name: 'Diego Marín',
    role: 'Partner · Growth & Ads',
    bio: "Built a $40M online brand and sold it. Now spends our clients' money the way he spent his own: carefully.",
    prior: 'Prior · Allbirds, Lululemon, Carro',
    label: 'diego marin',
  },
  {
    name: 'Rohan Iyer',
    role: 'Partner · SEO & Content',
    bio: 'Ten years helping businesses get found on Google, the last two focused on AI search. Has strong opinions about the technical details.',
    prior: 'Prior · HubSpot, Ahrefs, Mind the Product',
    label: 'rohan iyer',
  },
  {
    name: 'Claire Dubois',
    role: 'Director · Email',
    bio: "Built email programmes for the kinds of brands you've probably bought from today.",
    prior: 'Prior · Glossier, Klaviyo, Smile Direct',
    label: 'claire dubois',
  },
  {
    name: 'Omar Farooq',
    role: 'Director · Web & Engineering',
    bio: 'Designer who codes. Has built more websites that turn visitors into customers than is socially acceptable.',
    prior: 'Prior · Vercel, Linear, Webflow',
    label: 'omar farooq',
  },
]

export default function About() {
  return (
    <div className="tq-editorial">
      <SEO
        title="About TaqHaus | The Team Behind Your Marketing"
        description="Meet the small senior team that runs your marketing. Capped at 14 partners, no hand-offs, and a straight answer on the first call."
        canonical="/about"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking for Q3 · 2 retainer spots open</span>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Results</Link>
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
                TaqHaus is a marketing team run by people who have built and run businesses themselves. We work inside your business, treat your money like our own, and stay on the hook for the&nbsp;results.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute call <span className="arrow">↗</span>
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
            <p className="lede">The short version: too many good businesses were being let down by good agencies. The long version is below.</p>
          </div>

          <div className="origin">
            <div className="media-col">
              <div className="case-art case-art--terra" style={{ height: '100%', minHeight: 560 }}>
                <div className="ca-meta"><span>— Origin</span><span>Est. 2015</span></div>
                <div className="ca-mark" style={{ fontSize: 'clamp(64px, 9vw, 144px)' }}>A<br />small<br /><em>Haus.</em></div>
                <div className="ca-foot">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' as const, opacity: 0.7 }}>Capped at 14&nbsp;partners</div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 32, color: 'var(--ink)', lineHeight: 1 }}>Ola.</div>
                </div>
              </div>
            </div>
            <div className="copy">
              <p>
                Before I started TaqHaus, I&rsquo;d run marketing as a CMO twice and worked as a consultant once. Each time I watched the same thing happen. A business would pay one firm for a beautiful plan. Then the plan went to three other agencies who had never met each other. By month four the plan was dead, and the owner was back to writing their own LinkedIn posts at midnight.
              </p>
              <p>
                The problem wasn&rsquo;t a lack of talent. The talent was everywhere. The problem was the gap between the people who made the plan and the people who did the work. The plan got thrown over the fence, then thrown back when it didn&rsquo;t work. Every agency I&rsquo;d worked with was built around that gap. We built TaqHaus to remove it.
              </p>
              <p>
                At TaqHaus, one senior team works out what&rsquo;s wrong, makes the plan, and does the work. The same team stays answerable for your numbers for as long as you&rsquo;ll have us. No hand-offs, no middlemen, no &ldquo;that&rsquo;s a different team&rsquo;s job.&rdquo; If we can&rsquo;t help, we&rsquo;ll tell you. And if we believe we can, we&rsquo;ll treat your business like our&nbsp;own.
              </p>
              <p>
                We&rsquo;re a small Haus on purpose. Fourteen partners at any one time, never more. We&rsquo;d rather do a few jobs well than grow into the kind of agency we left behind.
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
            <p className="lede">Most agencies tell you what they stand for. It&rsquo;s easier to tell you what we won&rsquo;t do. Six promises we&rsquo;ve never broken.</p>
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
            <p className="lede">Capped at fourteen partners. Eleven years in business. Numbers as of Q2 2026.</p>
          </div>

          <div className="facts">
            <div className="fact"><span className="num">14</span><span className="lbl">Partners max, capped on purpose</span></div>
            <div className="fact"><span className="num">11<em>+</em></span><span className="lbl">Years in business</span></div>
            <div className="fact"><span className="num">96<em>%</em></span><span className="lbl">Client renewal rate</span></div>
            <div className="fact"><span className="num">avg. 3<em>×</em></span><span className="lbl">More qualified leads within 90 days</span></div>
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
            <p className="lede">Senior people who have done this work inside real businesses, plus a few specialist freelancers we&rsquo;ve known for years. The people you meet on day one are the same people doing the work in month twelve.</p>
          </div>

          <div className="team">
            {team.map((m) => (
              <motion.div key={m.name} className="member" {...rv()}>
                <div className="portrait">
                  {m.name === 'Ola Raji' ? (
                    <div className="case-art case-art--terra" style={{ height: '100%', padding: 20 }}>
                      <div className="ca-meta"><span>Founder</span><span>— 01</span></div>
                      <div className="ca-mark" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 0.92 }}>Ola<br /><em>Raji.</em></div>
                      <div className="ca-foot" style={{ marginTop: 12, paddingTop: 12 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, opacity: 0.75 }}>Toronto · Lagos</div>
                        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)' }}>est. &lsquo;15</div>
                      </div>
                    </div>
                  ) : (
                    <div className="imgholder" data-label={m.label} style={{ height: '100%' }} />
                  )}
                </div>
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
                <p className="bio">{m.bio}</p>
                <div className="prior">{m.prior}</div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
            <p className="cap" style={{ margin: 0 }}>Plus a network of 30+ specialists we trust enough to bring in on your work.</p>
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
                Whether you run a business and want help with your marketing, or you do this work and want to join us, we&rsquo;d love to&nbsp;hear from you.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)' }}>
                  Book a free 20-minute call <span className="arrow">↗</span>
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
            <h2>You run the&nbsp;business.<br />We handle the&nbsp;<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>marketing</em>.</h2>
            <div className="cta-stack">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}>
                <span>Book a free 20-minute call</span><span className="arrow">↗</span>
              </a>
              <a href="mailto:info@taqhaus.com" className="btn-link" style={{ color: 'color-mix(in oklch, var(--paper) 80%, transparent)', borderColor: 'color-mix(in oklch, var(--paper) 24%, transparent)' }}>
                info@taqhaus.com
              </a>
            </div>
          </div>
          <div className="footer-cols">
            <div><h4>Office</h4><ul><li>71 Albion Road</li><li>Toronto, ON M5V 2H1</li><li>By appointment</li></ul></div>
            <div><h4>Practice</h4><ul><li><Link to="/services">Services</Link></li><li><Link to="/case-studies">Results</Link></li><li><Link to="/about">About</Link></li></ul></div>
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
