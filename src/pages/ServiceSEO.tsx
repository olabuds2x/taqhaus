import '../styles/taqhaus-editorial.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

export default function ServiceSEO() {
  return (
    <div className="tq-editorial">
      <SEO
        title="SEO Services | TaqHaus"
        description="When someone searches for what you sell, you show up. We fix your site, write the content, and get trusted sites to link to you."
        canonical="/services/seo"
      />

      <SiteNav />

      <section className="page-head">
        <div className="wrap">
          <div className="grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>SEO</span>
              <h1>Get found on Google, <em>without paying for every click.</em></h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                When someone searches for what you do, they should find you. If they&rsquo;re finding your competitors instead, you&rsquo;re losing business every single day to people who haven&rsquo;t even heard of you.
              </p>
              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65 }}>
                SEO fixes that. And unlike ads, the results keep working long after you&rsquo;ve paid for them.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a free 20-minute call <span className="arrow">↗</span></a>
                <Link to="/services" className="btn-link">All services</Link>
              </div>
              <p style={{ marginTop: 20, color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.6 }}>
                Just need your Google listing in shape? Google presence + review-request setup. $99 one-time.{' '}
                <Link to="/google" style={{ color: 'var(--ink)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'var(--coral)', textUnderlineOffset: 3 }}>See the package</Link>
              </p>
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
                {['We find and fix the problems holding your site back', 'We find the searches your customers actually type', 'We tune your pages so Google understands them', 'Blog posts written for you, made to show up in search', 'We get trusted sites to link to you', 'Behind-the-scenes code that helps Google read your site', 'Show up when people ask AI tools instead of Google', 'A simple monthly report on rankings and visitors'].map(item => (
                  <li key={item} style={{ fontSize: 15, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--accent-text)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...rv(0.1)}>
              <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>Who it&rsquo;s for</span>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                {[
                  { who: 'Local businesses', desc: 'You want to show up when people nearby search for what you do.' },
                  { who: 'Businesses spending on ads', desc: 'You want each customer to cost less by letting free search traffic do more of the work.' },
                  { who: 'Competitive industries', desc: 'Your industry is crowded, and showing up on page one decides who gets the customer.' },
                  { who: 'New websites', desc: 'You\'ve just launched and want to get the search basics right from the start.' },
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
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>Case study · SaaS</span>
            <h2 className="display-md">Page 5 to page 1 in 6 months. 320% more traffic. Customers cost 60% less.</h2>
            <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>
              A software startup was stuck on page 5 for the searches that mattered most, behind bigger rivals with years of head start. They had no plan for content, and every new customer came from paid ads. We fixed 47 technical problems, mapped out the topics their customers search for, wrote the content, and got 23 trusted sites to link to them in six months.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap' as const }}>
              {[{ val: '320%', lbl: 'More visitors' }, { val: 'Position 3', lbl: 'Main search term (was page 5)' }, { val: '60%', lbl: 'Lower cost per customer' }].map(stat => (
                <div key={stat.lbl}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'normal', color: 'var(--accent-text)', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginTop: 6 }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
            <Link to="/case-studies/saas-startup" className="btn-link" style={{ marginTop: 24, display: 'inline-flex', fontSize: 13.5 }}>Read the full case study →</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Start ranking. Stop paying for every visitor.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0 }}>We start with a free 20-minute call. You&rsquo;ll leave knowing exactly what&rsquo;s holding your site back.</p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>Book a free 20-minute call <span className="arrow">↗</span></a>
                <Link to="/services" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 35%, transparent)' }}>All services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
