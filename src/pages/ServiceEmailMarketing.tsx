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

export default function ServiceEmailMarketing() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Email Marketing | TaqHaus"
        description="We write and send the emails that bring customers back to buy again. Welcome emails, newsletters, and offers, all set up and run for you."
        canonical="/services/email-marketing"
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
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Email Marketing</span>
              <h1>Email that makes money. <em>Not email that gets ignored.</em></h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Most businesses either never email their customers, or send bland newsletters that get deleted. Done right, email still pays back more than any other channel. It&rsquo;s just rarely done right.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                We set up the automatic emails, write every word, and run the sends so your list actually works for you.
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
                {['Full setup on Klaviyo, Mailchimp, or HubSpot, done for you', 'Welcome emails that go out automatically to new subscribers', 'Automatic emails that warm up new contacts and win back old ones', 'A weekly or monthly email sent to your whole list', 'The right emails to the right people, landing in inboxes, not spam', 'We test subject lines, send times, and content to find what works', 'A simple report: who opened, who clicked, and what it earned'].map(item => (
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
                  { who: 'E-commerce businesses', desc: 'You have a list of customers but you\'re barely emailing them. Reminders for abandoned carts, thank-you emails after a purchase, and come-back offers are all sitting unused.' },
                  { who: 'Service businesses', desc: 'You want past clients to remember you, book again, and send their friends your way.' },
                  { who: 'Businesses with newsletters', desc: 'You started a newsletter but it keeps slipping. We take it over, write it, and send it for you.' },
                  { who: 'SaaS and subscriptions', desc: 'You need emails that help new users get started, suggest upgrades, and keep people paying.' },
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
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>Case study · Fashion e-commerce</span>
            <h2 className="display-md">$57K in 90 days. 51% open rate. Email became their top revenue channel.</h2>
            <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>
              A fashion brand had 12,000 subscribers, but fewer than 15% were opening or clicking. Email was an afterthought: the same message to everyone, nothing automatic. We moved them to Klaviyo, set up the automatic emails, and started a weekly send. Within 90 days, email brought in 27% of total revenue.
            </p>
            <blockquote style={{ borderLeft: '2px solid var(--terracotta)', paddingLeft: 20, margin: '24px 0 0', fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5 }}>
              &ldquo;We were leaving so much money on the table. TaqHaus turned our email list into our most profitable channel in less than 3 months.&rdquo;
              <cite style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', fontStyle: 'normal', marginTop: 10 }}>Sarah Mitchell · Founder, Luxe Apparel Co.</cite>
            </blockquote>
            <div style={{ display: 'flex', gap: 40, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap' as const }}>
              {[{ val: '$57K', lbl: 'Revenue in 90 days' }, { val: '51%', lbl: 'Welcome emails opened' }, { val: '27%', lbl: 'Of revenue from email' }].map(stat => (
                <div key={stat.lbl}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'italic', color: 'var(--terracotta)', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginTop: 6 }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
            <Link to="/case-studies/fashion-brand" className="btn-link" style={{ marginTop: 24, display: 'inline-flex', fontSize: 13.5 }}>Read the full case study →</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Your list is worth money. Start using it.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0 }}>We start with a free 20-minute call about your current email setup. You&rsquo;ll leave knowing exactly what&rsquo;s being left on the table.</p>
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
