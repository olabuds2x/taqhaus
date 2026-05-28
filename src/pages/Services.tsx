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

const strategyServices = [
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy & Consulting',
    summary: 'We look at your business, find what\'s holding you back, and build a plan to fix it.',
    deliverables: [
      'Marketing audit — what\'s working, what\'s not',
      '90-day and 12-month action plan',
      'Channel-by-channel recommendations',
      'Ongoing advisory and senior oversight',
    ],
    note: 'Available as a one-off sprint or ongoing advisory.',
  },
  {
    id: 'fractional-cmo',
    title: 'Fractional CMO',
    summary: 'A senior marketing leader on your team — without the full-time salary.',
    deliverables: [
      'Embedded strategy lead (part-time)',
      'OKRs and performance tracking',
      'Team coaching and vendor management',
      'Board and investor reporting',
    ],
    note: 'Best for businesses that need senior marketing leadership but aren\'t ready to hire full-time.',
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning',
    summary: 'We define what your brand stands for and how to talk about it — so your message lands the same way every time.',
    deliverables: [
      'Competitive analysis and positioning',
      'Messaging framework',
      'Visual identity system',
      'Brand guidelines and launch kit',
    ],
    note: 'Right for re-launches, repositioning, or businesses that have outgrown their current identity.',
  },
]

const executionServices = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    summary: 'We run your social media — strategy, content, posting, and community. Your channels stay active and on-brand without you thinking about it.',
    deliverables: [
      'Instagram, LinkedIn, TikTok, Facebook, X',
      'Content calendar and creative direction',
      'Post creation, scheduling, and publishing',
      'Community management and engagement',
      'Monthly performance reporting',
    ],
    href: '/services/social-media',
    hasPage: true,
  },
  {
    id: 'content-writing',
    title: 'Content Writing & Copywriting',
    summary: 'Blog posts, website copy, ad copy, email copy. Written by humans, built to convert.',
    deliverables: [
      'Blog posts and articles (SEO-optimised)',
      'Website and landing page copy',
      'Ad copy (Meta, Google, LinkedIn)',
      'Email sequences and campaign copy',
      'Case studies and sales materials',
    ],
    href: '/services/content-writing',
    hasPage: true,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    summary: 'We set up and run your email — from welcome sequences to weekly newsletters to promotional campaigns. Your list, finally working.',
    deliverables: [
      'Email strategy and platform setup',
      'Welcome, nurture, and win-back sequences',
      'Weekly or monthly broadcast campaigns',
      'List segmentation and deliverability',
      'Open rate, click rate, and revenue reporting',
    ],
    href: '/services/email-marketing',
    hasPage: true,
  },
  {
    id: 'seo',
    title: 'SEO — Get Found on Google',
    summary: 'We get your website ranking so customers find you without paying for every click. Technical fixes, content, and the authority that makes it stick.',
    deliverables: [
      'Technical SEO audit and fixes',
      'Keyword research and content planning',
      'On-page optimisation',
      'Link building and digital PR',
      'Monthly rankings and traffic reporting',
    ],
    href: '/services/seo',
    hasPage: true,
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising',
    summary: 'We run your ads on Meta, Google, and LinkedIn and make sure they bring in customers — not just clicks.',
    deliverables: [
      'Campaign strategy and audience targeting',
      'Ad creative (copy and design)',
      'Meta (Facebook/Instagram) ads',
      'Google Search and Display ads',
      'LinkedIn ads',
      'Weekly performance reporting and optimisation',
    ],
    href: '/services/paid-ads',
    hasPage: true,
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    summary: 'We design and build websites that look the part and actually convert visitors into enquiries. Copy included. Analytics set up. Shipped.',
    deliverables: [
      'Custom design (Webflow, Framer, or Next.js)',
      'Mobile-first and fast-loading',
      'SEO foundation built in',
      'Copywriting included',
      'Analytics setup and 90-day post-launch support',
    ],
    href: '/services/websites',
    hasPage: true,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Creative',
    summary: 'Branded graphics, social visuals, ad creatives, pitch decks. Everything your brand needs to look the part.',
    deliverables: [
      'Social media graphics and templates',
      'Ad creative (static and animated)',
      'Presentation and pitch deck design',
      'Brand asset creation',
      'Print and digital collateral',
    ],
    href: '/services/graphic-design',
    hasPage: true,
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & Video Editing',
    summary: 'Reels, explainer videos, ad videos, animated graphics. Scroll-stopping content for every platform.',
    deliverables: [
      'Social media Reels and short-form video',
      'Explainer and product videos',
      'Video ad production',
      'Motion graphics and animated logos',
      'Video editing from existing footage',
    ],
    href: '/services/motion-graphics',
    hasPage: true,
  },
]

const models = [
  {
    num: '— Model 01',
    title: 'Sprint',
    desc: 'A focused diagnostic engagement. You\'ll come out with a strategy, a roadmap, and clarity on what to do first.',
    items: ['Marketing audit', '12-month roadmap', 'Quarterly priorities', 'Channel-by-channel plan', 'Executive readout'],
    cta: 'Discuss a sprint',
    featured: false,
  },
  {
    num: '— Model 02 · Most common',
    title: 'Retainer',
    desc: 'Embedded leadership and hands-on execution. The team is on the hook for the outcome, not the deliverable.',
    items: ['Senior marketing lead + execution team', 'Up to three disciplines included', 'Weekly standups, monthly business review', 'Quarterly resets and replanning', 'Shared workspace and reporting included'],
    cta: 'Open a retainer conversation',
    featured: true,
  },
  {
    num: '— Model 03',
    title: 'Equity Partner',
    desc: 'For pre-Series-A founders we deeply believe in. Cash + equity. Aligned incentives. Full skin in the game.',
    items: ['Reduced cash, meaningful equity', 'Full TaqHaus stack on tap', 'Co-author the narrative', 'Investor & PR introductions', 'Founder coaching included'],
    cta: 'Apply',
    featured: false,
  },
]

const faqs = [
  {
    q: 'How is this different from hiring an in-house team?',
    a: "You don't pay for ramp time. You get a senior operator from day one, plus a working team underneath them. For most businesses, this is faster and cheaper than building a comparable team in-house.",
  },
  {
    q: 'How is this different from hiring an agency?',
    a: "Agencies sell deliverables. We sell outcomes. We take fewer clients, we sit inside your team, and we measure ourselves on pipeline and revenue — not impressions and decks. If we're not moving the number, we'll tell you before you have to ask.",
  },
  {
    q: 'Can I hire TaqHaus for just one service?',
    a: "Yes. Many clients come to us to outsource a single channel — social media management, email marketing, SEO, or paid ads. You don't need to hand us everything. We run the service as if it were our own and report on results, not just activity.",
  },
  {
    q: 'Do you work with small businesses?',
    a: "Yes. Our free 20-minute audit is built for exactly this — a quick diagnostic where a senior strategist looks at your situation and tells you what to do first. No retainer required to start.",
  },
  {
    q: 'Do you work with politicians and public figures?',
    a: "Yes. We have a dedicated practice for this. Website design, social media management, reputation management, and campaign communications — all handled with full discretion. Enquiries are kept confidential.",
  },
  {
    q: 'What size company is the right fit?',
    a: "We work with businesses at all stages — from solo founders and small businesses to growth-stage brands and large organisations. If you have a real problem and want someone who will actually do the work, we'd like to hear from you.",
  },
  {
    q: 'How quickly can we start?',
    a: "Sprints are the fastest to kick off. Single-service retainers can usually start within two weeks. Full retainers take a little longer to ramp up properly. Book a call and we'll give you a realistic timeline.",
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="Services — TaqHaus"
        description="Strategy and execution under one roof. Social media management, email marketing, SEO, paid advertising, website design, graphic design, and more — handled by one team."
        canonical="/services"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking Q3 engagements · 2 retainer seats open · Serving clients globally</span>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services" className="active">Services</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/insights">Insights</Link>
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
              <span className="eyebrow" style={{ marginBottom: 36, display: 'inline-flex' }}>Services</span>
              <h1>Strategy <em>and</em> execution. Under one&nbsp;roof.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Most businesses work with five different agencies who&rsquo;ve never met each other. We handle everything — from figuring out the plan to doing the actual work. One team. One bill. No gaps.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute audit <span className="arrow">↗</span>
                </a>
                <a href="#engagements" className="btn-link">How we engage</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layer 1 — Strategy */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Layer 1 — Strategy</span>
              <h2 className="display-md">We figure out <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>the plan</em>.</h2>
            </div>
            <p className="lede">
              These services are for clients who need direction, a clear roadmap, or senior marketing thinking. We diagnose the constraint and tell you exactly what to do next.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {strategyServices.map((svc, i) => (
              <motion.div key={svc.id} {...rv(i * 0.08)} style={{ background: 'var(--paper)', border: '1px solid var(--hairline)', borderRadius: 16, padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px,1.6vw,24px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--ink)' }}>{svc.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{svc.summary}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                  {svc.deliverables.map((d) => (
                    <li key={d} style={{ fontSize: 13.5, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
                {svc.note && (
                  <p style={{ fontSize: 12.5, color: 'var(--ink-3)', fontFamily: 'var(--mono)', letterSpacing: '0.02em', marginTop: 4, paddingTop: 12, borderTop: '1px solid var(--hairline)' }}>{svc.note}</p>
                )}
                <Link to="/contact" className="btn-link" style={{ marginTop: 'auto', fontSize: 13.5 }}>Discuss an engagement →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Layer 2 — Execution */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Layer 2 — Execution</span>
              <h2 className="display-md">We do <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>the work</em>.</h2>
            </div>
            <p className="lede">
              These are the hands-on services. Each one named plainly. You can take one service, several, or the full stack. Each execution service can be run standalone — no full retainer required.
            </p>
          </motion.div>

          <div style={{ marginTop: 48 }}>
            {executionServices.map((svc) => (
              <motion.div key={svc.id} {...rv()} style={{ borderTop: '1px solid var(--hairline)', padding: 'clamp(28px,4vw,48px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,64px)', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,1.8vw,28px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.016em', color: 'var(--ink)', marginBottom: 12 }}>{svc.title}</h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{svc.summary}</p>
                  {svc.hasPage && (
                    <Link to={svc.href} className="btn-link" style={{ marginTop: 20, fontSize: 13.5, display: 'inline-flex' }}>
                      Full service details →
                    </Link>
                  )}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginBottom: 14 }}>What&rsquo;s included</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 9 }}>
                    {svc.deliverables.map((d) => (
                      <li key={d} style={{ fontSize: 14, color: 'var(--ink-2)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--mono)', fontSize: 11, marginTop: 3, flexShrink: 0 }}>✦</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 20 }}>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 13 }}>
                      Start a conversation <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-dark" id="engagements">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Engagement models</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>Three ways to <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>work</em> with us.</h2>
            </div>
            <p className="lede">Choose the shape that fits where you are. We&rsquo;ll often start with a sprint or a free audit to make sure we&rsquo;re right for each other.</p>
          </motion.div>

          <div className="models">
            {models.map((m) => (
              <div key={m.title} className={`model${m.featured ? ' featured' : ''}`}>
                <span className="lbl">{m.num}</span>
                <h3>{m.title}</h3>
                <p style={{ color: m.featured ? 'color-mix(in oklch, var(--paper) 75%, transparent)' : 'var(--ink-2)', margin: 0, fontSize: 14.5 }}>{m.desc}</p>
                <ul>
                  {m.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="cta">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${m.featured ? '' : 'btn-ghost'}`}
                    style={m.featured ? { background: 'var(--terracotta)', color: 'var(--paper)', width: '100%', justifyContent: 'space-between' } : { width: '100%', justifyContent: 'space-between' }}
                  >
                    {m.cta} <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience entry points */}
      <section>
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Not sure where to start?</span>
              <h2 className="display-md">Find your <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>entry point</em>.</h2>
            </div>
            <p className="lede">Different clients need different starting points. Here&rsquo;s where most people begin.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 40 }}>
            <motion.div {...rv(0)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For small businesses</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Start with a free 20-minute audit.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>We review your current marketing, identify the biggest gap, and tell you exactly what to do first. No retainer required.</p>
              <Link to="/for-small-businesses" className="btn-link" style={{ fontSize: 13.5 }}>Learn more →</Link>
            </motion.div>
            <motion.div {...rv(0.08)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For politicians &amp; public figures</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Book a private conversation.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>Reputation management, social media, website design, and campaign communications — handled with full discretion.</p>
              <Link to="/public-figures" className="btn-link" style={{ fontSize: 13.5 }}>See how we work →</Link>
            </motion.div>
            <motion.div {...rv(0.16)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For growing businesses</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Book a discovery call.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>30 minutes. No deck. We&rsquo;ll ask about the constraint, sketch out a plan, and decide together if there&rsquo;s a fit.</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-link" style={{ fontSize: 13.5 }}>Book a call →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-paper-2">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Common questions</span>
              <h2 className="display-md">Things people ask <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>before</em> they sign.</h2>
            </div>
            <p className="lede">If your question isn&rsquo;t here, book a call. Honest answers, no sales script.</p>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA terra */}
      <section className="section-terra" style={{ padding: 'clamp(72px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'end' }}>
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Tell us what you&rsquo;re trying to&nbsp;move.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                A 30-minute call. We&rsquo;ll ask about the constraint, not the brief. You&rsquo;ll leave with a point of view either way.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <Link to="/case-studies" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 35%, transparent)' }}>
                  See work
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
