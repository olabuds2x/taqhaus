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

export default function ServiceSocialMedia() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Social Media Management | TaqHaus"
        description="We plan it, make it, post it, and reply to comments. Your pages stay alive without you touching them."
        canonical="/services/social-media"
      />

      <div className="topbar"><span className="pulse" /><span>Taking new clients for Q3 · Working with clients worldwide</span></div>

      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home"><img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} /></Link>
          <nav className="nav-links">
            <Link to="/services" className="active">Services</Link>
            <Link to="/case-studies">Results</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">Book a call <span className="arrow">→</span></a>
        </div>
      </header>

      <section className="page-head">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Social Media Management</span>
              <h1>We run your social media. <em>You run your business.</em></h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Posting every week is harder than it looks. Most owners post for a while, go quiet for weeks, or spend hours on posts that get little response. We take the whole job off your plate: the plan, the posts, the publishing, and the replies.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                Your pages stay alive without you touching them.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a free 20-minute call <span className="arrow">↗</span></a>
                <Link to="/services" className="btn-link">All services</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
            <motion.div {...rv()}>
              <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>What&rsquo;s included</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {['Instagram, LinkedIn, TikTok, Facebook, and X', 'A monthly plan of what to post and when', 'We make the posts and publish them for you', 'We reply to comments and messages', 'A simple monthly report on what worked', 'We find the hashtags and trends worth using', 'Help with paid posts if you want it'].map(item => (
                  <li key={item} style={{ fontSize: 15, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...rv(0.1)}>
              <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>Who it&rsquo;s for</span>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                {[
                  { who: 'Small business owners', desc: 'You know your pages matter but you have no time or energy to keep them going.' },
                  { who: 'Politicians & public figures', desc: 'You need pages that look steady and professional, reflect your values, and stay on message.' },
                  { who: 'Brands that have gone quiet', desc: 'Your pages went quiet and you want them active again, with followers who actually care.' },
                  { who: 'Growing businesses', desc: 'Doing it yourself worked for a while. Now you need a team running your pages properly.' },
                ].map(item => (
                  <div key={item.who} style={{ borderLeft: '2px solid var(--hairline)', paddingLeft: 16 }}>
                    <p style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 14, color: 'var(--ink)', marginBottom: 4 }}>{item.who}</p>
                    <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-paper-2">
        <div className="wrap">
          <motion.div {...rv()} style={{ maxWidth: 760 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>Case study · Government &amp; public office</span>
            <h2 className="display-md">5× engagement growth. 72% more followers. Campaign won.</h2>
            <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>
              A public official went into an important campaign with out-of-date social media and no clear story online. We took over the pages, posted steadily, and handled comments and messages all through the campaign. Bad search results cleared from page one. Good ones filled the top 10. The win was credited in part to the online work.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap' as const }}>
              {[{ val: '5×', lbl: 'Engagement growth' }, { val: '72%', lbl: 'Follower growth' }, { val: 'Page 1', lbl: 'Bad results cleared' }].map(stat => (
                <div key={stat.lbl}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'italic', color: 'var(--terracotta)', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginTop: 6 }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
            <Link to="/case-studies/public-official" className="btn-link" style={{ marginTop: 24, display: 'inline-flex', fontSize: 13.5 }}>Read the full case study →</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Ready to hand it over?</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0 }}>Start with a free 20-minute call. We&rsquo;ll look at your pages and tell you exactly what to fix first.</p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>Book a free 20-minute call <span className="arrow">↗</span></a>
                <Link to="/services" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 35%, transparent)' }}>All services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-head">
            <h2>We handle the&nbsp;marketing.<br />You run the&nbsp;<em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>business</em>.</h2>
            <div className="cta-stack">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}><span>Book a free 20-minute call</span><span className="arrow">↗</span></a>
              <a href="mailto:info@taqhaus.com" className="btn-link" style={{ color: 'color-mix(in oklch, var(--paper) 80%, transparent)', borderColor: 'color-mix(in oklch, var(--paper) 24%, transparent)' }}>info@taqhaus.com</a>
            </div>
          </div>
          <div className="footer-cols">
            <div><h4>Office</h4><ul><li>71 Albion Road</li><li>Toronto, ON M5V 2H1</li><li>By appointment</li></ul></div>
            <div><h4>Company</h4><ul><li><Link to="/services">Services</Link></li><li><Link to="/case-studies">Results</Link></li><li><Link to="/about">About</Link></li></ul></div>
            <div><h4>Read</h4><ul><li><Link to="/insights">Insights</Link></li><li><Link to="/insights">Field notes</Link></li><li><Link to="/insights">Newsletter</Link></li></ul></div>
            <div><h4>Elsewhere</h4><ul><li><a href="https://linkedin.com/company/taqhaus" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="#" target="_blank" rel="noopener noreferrer">Substack</a></li><li><a href="https://twitter.com/taqhaus" target="_blank" rel="noopener noreferrer">X / Twitter</a></li></ul></div>
          </div>
          <div className="footer-bottom"><span>© 2026 TaqHaus Consultancy Inc.</span><span>Made in&nbsp;Toronto · Serving everywhere</span></div>
          <div className="footer-mark">TaqHaus<span style={{ color: 'var(--terracotta)' }}>.</span></div>
        </div>
      </footer>
    </div>
  )
}
