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

export default function ServiceMotionGraphics() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Motion Graphics and Video | TaqHaus"
        description="Short videos, animated graphics, and video ads for every platform. We plan them, make them, and deliver them, so you don't have to."
        canonical="/services/motion-graphics"
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
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Motion Graphics &amp; Video Editing</span>
              <h1>Content that stops the <em>scroll.</em></h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Still posts get scrolled past. Video gets watched, shared, and remembered. If you never show up in video, a growing share of your audience never sees you.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                We make Reels, explainer videos, video ads, and animated graphics for every platform. Start to finish, so you don&rsquo;t have to.
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
                {['Short videos for Instagram, TikTok, and YouTube Shorts', 'Videos that explain what you sell and how it works', 'Video ads for Facebook, Instagram, YouTube, and LinkedIn', 'Animated graphics and logos', 'Text that moves on screen', 'We edit the footage you already have', 'Captions, subtitles, and sound'].map(item => (
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
                  { who: 'Businesses that need Reels and short-form content', desc: 'You know video does better but you don\'t have the time or tools to make it every week. We handle the idea, the making, and the delivery.' },
                  { who: 'Brands running video ads', desc: 'Still-image ads are costing more and doing less. Video tends to do better. We make the videos your ads need.' },
                  { who: 'Businesses with existing footage', desc: 'You have footage from events, interviews, or product shoots sitting unused. We cut it into videos that work.' },
                  { who: 'Brands that need explainer content', desc: 'What you sell is hard to explain in writing. A short video can do it in 60 to 90 seconds.' },
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

      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Start showing up in video.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0 }}>Tell us what you need and we&rsquo;ll map out the right plan: one video, ongoing videos each month, or support for one campaign.</p>
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
