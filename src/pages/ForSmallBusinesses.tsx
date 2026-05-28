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

const services = [
  { title: 'Social media management', desc: 'We handle your Instagram, Facebook, LinkedIn, and TikTok — content, posting, and replies. Your channels stay active without you thinking about it.', href: '/services/social-media' },
  { title: 'Email marketing', desc: 'We set up your welcome emails, newsletters, and promotional campaigns. Your customer list starts working for you instead of sitting idle.', href: '/services/email-marketing' },
  { title: 'SEO — get found on Google', desc: 'When someone searches for what you do, they should find you. We fix your website\'s visibility so customers come to you without you paying for every click.', href: '/services/seo' },
  { title: 'Paid advertising', desc: 'We run ads on Meta, Google, or LinkedIn that bring in real customers — not just clicks. You tell us the budget; we make it work as hard as possible.', href: '/services/paid-ads' },
  { title: 'Website design', desc: 'A professional website that\'s clear, fast, and built to turn visitors into enquiries. Copy included. No Wix, no DIY — done properly.', href: '/services/websites' },
  { title: 'Graphic design', desc: 'Social graphics, ad creatives, business cards, brochures, presentation decks. Everything you need to look like you mean business.', href: '/services/graphic-design' },
]

const commonProblems = [
  { num: '01', problem: '"I know I need marketing but I don\'t have time to do it."', solution: 'We take it off your plate entirely. You tell us what you do; we handle how people find out about it.' },
  { num: '02', problem: '"I\'ve tried ads before and wasted money."', solution: 'Wasted ad spend almost always comes from a targeting or strategy problem, not the platform. We fix the foundation before we spend a pound or dollar.' },
  { num: '03', problem: '"My social media is inconsistent — I post for two weeks then go quiet."', solution: 'We build and run your content calendar for you. Your channels stay active whether you\'re busy or not.' },
  { num: '04', problem: '"My website doesn\'t rank on Google and I don\'t know why."', solution: 'Nine times out of ten, it\'s a technical issue and a content gap. We fix both — and report back on what changed.' },
  { num: '05', problem: '"I\'m not sure what marketing I actually need."', solution: 'Start with our free 20-minute audit. We\'ll tell you exactly what to do first, and what can wait.' },
]

export default function ForSmallBusinesses() {
  return (
    <div className="tq-editorial">
      <SEO
        title="Marketing for Small Businesses — TaqHaus"
        description="You don't have a marketing team. We step in as one. Social media, email, SEO, paid ads, website design, and graphic design — handled for you. Start with a free 20-minute audit."
        canonical="/for-small-businesses"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Free 20-minute marketing audit · No commitment · Start this week</span>
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
          <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Free audit <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="page-head">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>For Small &amp; Growing Businesses</span>
              <h1>Your marketing department, <em>without the overhead</em>.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                You don&rsquo;t have a marketing team. You&rsquo;re running the business yourself, or with a small crew. Marketing keeps falling to the bottom of the list — because you&rsquo;re too busy actually running the business.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                We step in as your marketing department. Social media, Google presence, email, ads, and website — handled by us so you can focus on what you actually do.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Start with a free 20-minute audit <span className="arrow">↗</span>
                </a>
                <Link to="/services" className="btn-link">See all services</Link>
              </div>
              <p style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.08em', color: 'var(--ink-3)', textTransform: 'uppercase' as const }}>
                Free audit · No commitment · We&rsquo;ll tell you exactly what to do first
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
              <span className="eyebrow">What we handle for you</span>
              <h2 className="display-md">Pick one service. <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Or all of them.</em></h2>
            </div>
            <p className="lede">
              You don&rsquo;t need to hand us everything at once. Most small business clients start with one or two services and expand from there as they see the results.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {services.map((svc, i) => (
              <motion.div key={svc.title} {...rv(i * 0.07)} style={{ border: '1px solid var(--hairline)', borderRadius: 16, padding: 'clamp(24px,3vw,32px)', display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,1.4vw,22px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.012em', color: 'var(--ink)' }}>{svc.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65, margin: 0, flex: 1 }}>{svc.desc}</p>
                <Link to={svc.href} className="btn-link" style={{ fontSize: 13.5, marginTop: 8 }}>Learn more →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Sound familiar?</span>
              <h2 className="display-md">We&rsquo;ve heard this <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>before</em>.</h2>
            </div>
            <p className="lede">Most small business marketing problems are the same five problems. Here&rsquo;s how we approach each one.</p>
          </motion.div>

          <ol className="numlist" style={{ marginTop: 48 }}>
            {commonProblems.map((item, i) => (
              <motion.li key={item.num} {...rv(i * 0.07)}>
                <span className="num">{item.num}</span>
                <div className="title-col">
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px,1.3vw,20px)', fontStyle: 'italic', fontWeight: 400 }}>{item.problem}</h3>
                  <p>{item.solution}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* How we start */}
      <section className="section-dark">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">How it starts</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>No commitment. <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Just clarity.</em></h2>
            </div>
            <p className="lede">We don&rsquo;t ask you to sign anything before we&rsquo;ve proven we understand your business. Here&rsquo;s how most small business clients start.</p>
          </motion.div>

          <ol className="numlist">
            {[
              { num: 'Step 01', title: 'Free 20-minute audit', desc: 'A senior member of our team reviews your current marketing — your website, your social media, your Google presence. We tell you what\'s working, what isn\'t, and what to do first. No charge, no commitment.' },
              { num: 'Step 02', title: 'We scope the right starting point', desc: 'Based on the audit, we recommend one or two services that will have the biggest impact for your business right now. Not everything — just the right thing first.' },
              { num: 'Step 03', title: 'We get to work', desc: 'Once we agree on scope, we start. Most services are up and running within two weeks. You stay focused on running your business; we stay focused on marketing it.' },
              { num: 'Step 04', title: 'You see the results', desc: 'We report on what actually matters for your business — enquiries, traffic, followers, bookings. Not impressions. Not reach. Not graphs that go up without telling you why.' },
            ].map((step) => (
              <motion.li key={step.num} {...rv()}>
                <span className="num">{step.num}</span>
                <div className="title-col">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Start with a free 20-minute audit.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                A senior strategist reviews your marketing and tells you exactly what to do first. No retainer required. Keep the plan and run it yourself, or bring us in to do it for you.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
                  Book the free audit <span className="arrow">↗</span>
                </a>
              </div>
              <p style={{ color: 'color-mix(in oklch, var(--paper) 60%, transparent)', fontSize: 12.5, fontFamily: 'var(--mono)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: 8 }}>
                Free · No commitment · Results in 20 minutes
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
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--terracotta)', color: 'var(--paper)', justifyContent: 'space-between' }}>
                <span>Book a free audit</span><span className="arrow">↗</span>
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
