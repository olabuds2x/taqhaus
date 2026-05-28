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

const PRIVATE_CALL_URL = CALENDLY_URL

const services = [
  {
    title: 'Website Design & Management',
    desc: 'A professional website that represents who you are and what you stand for. Built, maintained, and updated by us. First impressions are made online — yours should be controlled by you.',
  },
  {
    title: 'Social Media Management',
    desc: 'Consistent, professional presence on the platforms your audience uses. We handle the posting, the engagement, and the tone — so your channels are always active, always on-message.',
  },
  {
    title: 'Google Reputation Management',
    desc: 'We make sure the right content shows up when people search your name. Negative results pushed down. Your story, told your way.',
  },
  {
    title: 'Online Reputation Monitoring',
    desc: 'We watch what\'s being said about you online and flag anything you need to know about before it becomes a problem. Proactive, not reactive.',
  },
  {
    title: 'Campaign Communications',
    desc: 'Email updates, constituent newsletters, and digital communications for election or campaign periods. Clear, consistent, and on-brand — whether you\'re 18 months out or 3 weeks from polling day.',
  },
  {
    title: 'Content & Thought Leadership',
    desc: 'Articles, statements, and social content that build your public profile and establish your position on the issues that matter. Written to your voice, approved by you.',
  },
]

export default function PublicFigures() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Politicians & Public Figures — TaqHaus"
        description="We build and manage the digital presence that protects your reputation. Website design, social media, Google reputation management, and campaign communications — handled with full discretion."
        canonical="/public-figures"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>All political &amp; public figure enquiries are confidential</span>
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
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={PRIVATE_CALL_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a private call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="page-head">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Politicians &amp; Public Figures</span>
              <h1>Your name is your most important <em>asset</em>.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                When people search your name, what do they find? When voters or stakeholders look you up before deciding whether to trust you — what&rsquo;s the first thing they see?
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                TaqHaus works with politicians, elected officials, executives, and public figures to build a digital presence that&rsquo;s accurate, professional, and controlled by you — not by whoever posted something first.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={PRIVATE_CALL_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a private 30-minute conversation <span className="arrow">↗</span>
                </a>
              </div>
              <p style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.08em', color: 'var(--ink-3)', textTransform: 'uppercase' as const }}>
                All enquiries are confidential · We&rsquo;ve worked with clients who prefer to keep our engagement private
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">What we do</span>
              <h2 className="display-md">Everything your digital presence <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>requires</em>.</h2>
            </div>
            <p className="lede">We handle the full picture — from the website people land on to the search results they see and the social channels they follow.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {services.map((svc, i) => (
              <motion.div key={svc.title} {...rv(i * 0.07)} style={{ border: '1px solid var(--hairline)', borderRadius: 16, padding: 'clamp(24px,3vw,32px)', display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,1.4vw,22px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.012em', color: 'var(--ink)' }}>{svc.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65, margin: 0, flex: 1 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Case study · Government &amp; public office</span>
              <h2 className="display-md">Reputation repositioned <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>before campaign season</em>.</h2>
            </div>
          </motion.div>

          <motion.div {...rv(0.1)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'start', marginTop: 48 }}>
            <div>
              <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7 }}>
                A public official facing a significant reputation challenge ahead of an important campaign. Negative search results were dominating page one. Social media was outdated and failing to connect with constituents. There was no cohesive digital narrative.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
                We conducted a full digital audit across search results, social profiles, news mentions, and online sentiment. We developed a six-month reputation repositioning roadmap, created a digital narrative connecting the official&rsquo;s personal background to their public service mission, and launched a proactive content programme.
              </p>
              <blockquote style={{ borderLeft: '2px solid var(--terracotta)', paddingLeft: 20, margin: '28px 0 0', fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5 }}>
                &ldquo;They understand both perception and performance — critical for public office.&rdquo;
                <cite style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', fontStyle: 'normal', marginTop: 10 }}>
                  Anonymous · Elected Official
                </cite>
              </blockquote>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginBottom: 20 }}>What we did</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {[
                  'Full digital audit — search results, social profiles, news mentions, online sentiment',
                  '6-month reputation repositioning roadmap',
                  'New digital narrative connecting personal background to public service mission',
                  'Proactive content programme — thought leadership and community updates',
                  'Optimised official website, LinkedIn, and social profiles',
                  'Community engagement initiative',
                ].map((item) => (
                  <li key={item} style={{ fontSize: 14, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--hairline)' }}>
                {[
                  { val: 'Page 1', lbl: 'Cleared of negatives' },
                  { val: '5×', lbl: 'Social engagement growth' },
                  { val: '72%', lbl: 'Digital following growth' },
                ].map((stat) => (
                  <div key={stat.lbl}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2vw,28px)', fontStyle: 'italic', color: 'var(--terracotta)', lineHeight: 1 }}>{stat.val}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginTop: 6 }}>{stat.lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/case-studies/public-official" className="btn-link" style={{ fontSize: 13.5 }}>
                  Read the full case study →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why TaqHaus for this */}
      <section className="section-dark">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Why TaqHaus</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>We understand <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>the stakes</em>.</h2>
            </div>
            <p className="lede">For most businesses, a bad week online is a setback. For public figures, it can define a career. We treat this work accordingly.</p>
          </motion.div>

          <ol className="numlist">
            {[
              { num: '01', title: 'Discretion as standard', desc: 'We never name clients without explicit permission. Engagements in this vertical are anonymised by default. We\'ve worked with elected officials and executives who prefer to keep our engagement entirely private — and we fully respect that.' },
              { num: '02', title: 'Long-term thinking', desc: 'Your digital presence is an asset that compounds. We don\'t build for a single campaign cycle — we build the foundation that protects and strengthens your reputation over years, not months.' },
              { num: '03', title: 'Control and clarity', desc: 'You always know what\'s being posted, what\'s being said about you, and what we\'re doing about it. Open reporting. No surprises. Nothing goes out without your approval.' },
              { num: '04', title: 'Timing matters', desc: 'Whether you\'re 18 months from an election or three weeks out, we adjust pace and priority accordingly. Proactive work is always better than reactive — but we can move fast when we need to.' },
            ].map((item) => (
              <motion.li key={item.num} {...rv()}>
                <span className="num">{item.num}</span>
                <div className="title-col">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Speak to us about your digital&nbsp;presence.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                All enquiries are confidential. We&rsquo;ve worked with elected officials, candidates, and executives who prefer to keep our engagement private — and we fully respect that.
              </p>
              <div className="row">
                <a href={PRIVATE_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
                  Book a private 30-minute conversation <span className="arrow">↗</span>
                </a>
              </div>
              <p style={{ color: 'color-mix(in oklch, var(--paper) 60%, transparent)', fontSize: 12.5, fontFamily: 'var(--mono)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: 8 }}>
                Or email directly: info@taqhaus.com
              </p>
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
              <a href={PRIVATE_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}>
                <span>Book a private call</span><span className="arrow">↗</span>
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
            <div><h4>Elsewhere</h4><ul><li><a href="https://linkedin.com/company/taqhaus" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="#" target="_blank" rel="noopener noreferrer">Substack</a></li><li><a href="https://twitter.com/taqhaus" target="_blank" rel="noopener noreferrer">X / Twitter</a></li></ul></div>
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
