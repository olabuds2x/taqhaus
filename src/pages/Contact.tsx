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

export default function Contact() {
  const [inquiryDone, setInquiryDone] = useState(false)

  return (
    <div className="tq-editorial">
      <SEO
        title="Book a Free 20-Minute Call | TaqHaus"
        description="Free, 20 minutes, phone or video. Tell us what you want to grow. If we're not the right fit, we'll say so."
        canonical="/contact"
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
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact" className="active">Contact</Link>
          </nav>
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Contact hero */}
      <section className="contact-hero">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Book a free 20-minute call</span>
              <h1>Tell us what you&rsquo;re trying to&nbsp;<em>grow</em>.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Free, 20 minutes, phone or video. No pressure. We&rsquo;ll ask what you want to grow and what&rsquo;s in the way. If we&rsquo;re not the right fit, we&rsquo;ll say so.
              </p>
              <div className="row" style={{ marginTop: 24 }}>
                <span className="tag dot">No sales pitch</span>
                <span className="tag dot">20 minutes</span>
                <span className="tag dot">Nothing to prepare</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking shell */}
      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="booking-shell">
            {/* Aside */}
            <aside className="booking-aside">
              <div>
                <span className="lbl">— Your free call</span>
                <h3>20 minutes with <em>Ola</em>.</h3>
              </div>
              <p>A direct conversation with our founder. You tell us what you want to grow and what&rsquo;s in the way. We&rsquo;ll tell you what we&rsquo;d do first, and whether we&rsquo;re the right fit.</p>

              <div className="meta-grid">
                <div className="row-item"><span className="k">Length</span><span className="v">20 minutes</span></div>
                <div className="row-item"><span className="k">Format</span><span className="v">Phone or video</span></div>
                <div className="row-item"><span className="k">Who</span><span className="v">Ola Raji, Founder</span></div>
                <div className="row-item"><span className="k">Bring</span><span className="v">A real problem</span></div>
                <div className="row-item"><span className="k">Time zone</span><span className="v">Eastern (ET)</span></div>
              </div>

              <div className="testimonial">
                <q>Our first call was worth more than the last six months with our previous agency.</q>
                <div className="attr">
                  <strong>Sara Halsey</strong>
                  CEO · The Halsey Group
                </div>
              </div>
            </aside>

            {/* Main — Calendly CTA */}
            <div className="booking-main">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32, height: '100%' }}>
                <div>
                  <div className="booking-step" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--ink-2)', marginBottom: 24 }}>
                    <span className="dot" style={{ width: 6, height: 6, background: 'var(--terracotta)', borderRadius: '50%', flexShrink: 0 }} />
                    <span>Book directly via Calendly</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.6vw,36px)', lineHeight: 1.06, letterSpacing: '-0.018em', fontWeight: 400, marginBottom: 16, color: 'var(--ink)' }}>
                    Pick a time that works for you.
                  </h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, marginBottom: 32, maxWidth: '50ch' }}>
                    Pick a slot on Calendly. You&rsquo;ll get a calendar invite, and a short note from Ola before the call so you know what to expect.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                    style={{ display: 'inline-flex', gap: 12, fontSize: 16, padding: '16px 28px' }}
                  >
                    Book a free 20-minute call <span className="arrow">↗</span>
                  </a>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 32, borderTop: '1px solid var(--hairline)' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--ink-2)', marginBottom: 14 }}>
                    What to expect
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                    {['We ask what you want to grow and what\'s in the way', 'You get honest advice, even if we\'re not the right fit', 'No sales script and no hard sell', 'We confirm by email within 15 minutes'].map((item) => (
                      <li key={item} style={{ fontSize: 14, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry fallback */}
      <section style={{ paddingTop: 'clamp(72px,8vw,120px)' }}>
        <div className="inquiry">
          <div className="wrap">
            <div className="inquiry-grid">
              <div>
                <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>Not ready to book?</span>
                <h3>Send us a <em>note</em> instead.</h3>
                <p style={{ marginTop: 18 }}>If you&rsquo;d rather start in writing, that works too. We read everything, and we reply to everyone within two business days.</p>
              </div>
              <div>
                {inquiryDone ? (
                  <div className="form-success show">
                    <div className="check">✓</div>
                    <div>
                      <strong style={{ display: 'block', fontWeight: 500, marginBottom: 2 }}>Thanks, we&rsquo;ve got it.</strong>
                      <span style={{ color: 'var(--ink-2)', fontSize: 14 }}>We&rsquo;ll reply within two business days, usually faster.</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setInquiryDone(true) }}>
                    <div className="form-grid">
                      <label className="field">Name
                        <input className="input" type="text" required placeholder="Your name" />
                      </label>
                      <label className="field">Work email
                        <input className="input" type="email" required placeholder="you@company.com" />
                      </label>
                      <label className="field">Company
                        <input className="input" type="text" placeholder="Company name" />
                      </label>
                      <label className="field">Website
                        <input className="input" type="url" placeholder="https://" />
                      </label>
                      <label className="field full">I&rsquo;m interested in
                        <select className="input">
                          <option>A one-off project</option>
                          <option>Monthly retainer</option>
                          <option>Fractional CMO</option>
                          <option>Political / Election campaign</option>
                          <option>Just exploring</option>
                          <option>Speaking / partnership / press</option>
                        </select>
                      </label>
                      <label className="field full">Tell us what you&rsquo;re trying to grow
                        <textarea className="input" rows={4} placeholder="What are you trying to grow, and what's in the way?" />
                      </label>
                      <button type="submit" className="btn btn-primary full" style={{ justifyContent: 'space-between' }}>
                        <span>Send your note</span>
                        <span className="arrow">↗</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="sh-meta">
              <span className="eyebrow">Other ways to reach us</span>
              <h2 className="display-md">Pick the door that <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>fits</em>.</h2>
            </div>
            <p className="lede">If a call isn&rsquo;t the easiest way for you, that&rsquo;s fine. Whichever way works best for you works for us.</p>
          </div>

          <div className="methods">
            <motion.div className="method" {...rv()}>
              <span className="num">— 01</span>
              <h4>Email us directly</h4>
              <p>A direct line for new work, private questions, or anything you&rsquo;d rather not put through a form.</p>
              <a href="mailto:info@taqhaus.com">info@taqhaus.com →</a>
            </motion.div>
            <motion.div className="method" {...rv(0.1)}>
              <span className="num">— 02</span>
              <h4>Press &amp; partnerships</h4>
              <p>Speaking, panels, podcasts, partnerships, or you&rsquo;re a journalist on deadline. We try to reply within 24 hours.</p>
              <a href="mailto:info@taqhaus.com">info@taqhaus.com →</a>
            </motion.div>
            <motion.div className="method" {...rv(0.2)}>
              <span className="num">— 03</span>
              <h4>Working with us</h4>
              <p>Freelancers and specialists: we&rsquo;re always interested in meeting good ones, even when we&rsquo;re not actively hiring.</p>
              <a href="mailto:info@taqhaus.com">info@taqhaus.com →</a>
            </motion.div>
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
