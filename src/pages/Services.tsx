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
      'A review of your marketing: what\'s working, what\'s not',
      '90-day and 12-month action plan',
      'Channel-by-channel recommendations',
      'Ongoing advice from a senior marketer',
    ],
    note: 'Do it once, or keep us on for ongoing advice.',
  },
  {
    id: 'fractional-cmo',
    title: 'Fractional CMO',
    summary: 'A senior marketing leader on your team, without the full-time salary.',
    deliverables: [
      'A part-time marketing lead inside your team',
      'Clear goals and progress tracking',
      'Coaching for your team, managing your suppliers',
      'Board and investor reporting',
    ],
    note: 'Best if you need senior marketing leadership but aren\'t ready to hire full-time.',
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning',
    summary: 'We work out what your brand stands for and how to talk about it, so your message lands the same way every time.',
    deliverables: [
      'A look at your competitors and where you fit',
      'The words to use, written down',
      'Your visual look and feel',
      'A brand guide and launch kit',
    ],
    note: 'Right if you\'re relaunching, changing direction, or have outgrown your current look.',
  },
]

const executionServices = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    summary: 'We run your social media: the plan, the posts, the publishing, and the replies. Your channels stay active and sound like you, without you thinking about it.',
    deliverables: [
      'Instagram, LinkedIn, TikTok, Facebook, X',
      'A content calendar and the look of your posts',
      'Posts created, scheduled, and published',
      'Replying to comments and messages',
      'A monthly report on what\'s working',
    ],
    href: '/services/social-media',
    hasPage: true,
  },
  {
    id: 'content-writing',
    title: 'Content Writing & Copywriting',
    summary: 'Blog posts, website copy, ad copy, email copy. Written by people, written to win you customers.',
    deliverables: [
      'Blog posts and articles, written to get found on Google',
      'Website and landing page copy',
      'Ad copy for Meta, Google, and LinkedIn',
      'Email series and campaign copy',
      'Case studies and sales materials',
    ],
    href: '/services/content-writing',
    hasPage: true,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    summary: 'We set up and run your email: welcome emails, weekly newsletters, and promotions. Your list, finally working.',
    deliverables: [
      'An email plan and your sending tool set up',
      'Emails that welcome new people and bring old customers back',
      'Weekly or monthly campaigns',
      'Sorting your list and keeping emails out of spam',
      'Reports on opens, clicks, and sales',
    ],
    href: '/services/email-marketing',
    hasPage: true,
  },
  {
    id: 'seo',
    title: 'SEO: Get Found on Google',
    summary: 'We get your website showing up on Google so customers find you without you paying for every click. We fix the technical bits, write the content, and make it stick.',
    deliverables: [
      'A check of your site\'s technical health, then fixes',
      'Finding the searches your customers type, then planning content',
      'Tuning your pages so Google understands them',
      'Getting other sites to link to yours',
      'A monthly report on rankings and visitors',
    ],
    href: '/services/seo',
    hasPage: true,
  },
  {
    id: 'paid-ads',
    title: 'Ads',
    summary: 'We run your ads on Meta, Google, and LinkedIn and make sure they bring in customers, not just clicks.',
    deliverables: [
      'A plan and the right people to show your ads to',
      'The ads themselves: words and design',
      'Meta (Facebook/Instagram) ads',
      'Google Search and Display ads',
      'LinkedIn ads',
      'Weekly reports and ongoing tuning',
    ],
    href: '/services/paid-ads',
    hasPage: true,
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    summary: 'We design and build websites that look the part and turn visitors into enquiries. Words included. Tracking set up. Done.',
    deliverables: [
      'Custom design (Webflow, Framer, or Next.js)',
      'Works on phones and loads fast',
      'Built to get found on Google',
      'The words written for you',
      'Tracking set up, plus 90 days of support after launch',
    ],
    href: '/services/websites',
    hasPage: true,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Creative',
    summary: 'Branded graphics, social visuals, ad images, pitch decks. Everything your brand needs to look the part.',
    deliverables: [
      'Social media graphics and templates',
      'Ad images, still and animated',
      'Presentation and pitch deck design',
      'Files and templates for your brand',
      'Print and digital materials',
    ],
    href: '/services/graphic-design',
    hasPage: true,
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & Video Editing',
    summary: 'Reels, explainer videos, video ads, animated graphics. Videos that make people stop scrolling.',
    deliverables: [
      'Social media Reels and short videos',
      'Explainer and product videos',
      'Video ads',
      'Motion graphics and animated logos',
      'Editing the footage you already have',
    ],
    href: '/services/motion-graphics',
    hasPage: true,
  },
]

const models = [
  {
    num: '— Model 01',
    title: 'Sprint',
    desc: 'A short, focused project. You come out with a plan, a roadmap, and a clear first step.',
    items: ['A review of your marketing', 'A 12-month plan', 'What to focus on each quarter', 'A channel-by-channel plan', 'A plain-English summary at the end'],
    cta: 'Ask about a sprint',
    featured: false,
  },
  {
    num: '— Model 02 · Most common',
    title: 'Retainer',
    desc: 'A senior lead plus a team doing the work, month after month. We\'re on the hook for results, not busywork.',
    items: ['A senior marketing lead plus a working team', 'Up to three services included', 'Weekly check-ins, a monthly review', 'A fresh plan every quarter', 'Shared workspace and reporting included'],
    cta: 'Ask about a retainer',
    featured: true,
  },
  {
    num: '— Model 03',
    title: 'Equity Partner',
    desc: 'For early-stage founders we believe in. We take less cash and a share of the business, so we win when you win.',
    items: ['Lower fees, a share of the business', 'Every TaqHaus service available', 'We help shape your story', 'Introductions to investors and press', 'Founder coaching included'],
    cta: 'Apply',
    featured: false,
  },
]

const faqs = [
  {
    q: 'How is this different from hiring an in-house team?',
    a: "You don't pay for ramp-up time. You get a senior marketer from day one, plus a working team underneath them. For most businesses, this is faster and cheaper than building the same team in-house.",
  },
  {
    q: 'How is this different from hiring an agency?',
    a: "Agencies sell tasks. We sell results. We take fewer clients, we sit inside your team, and we measure ourselves on customers and revenue, not impressions and decks. If we're not moving the number, we'll tell you before you have to ask.",
  },
  {
    q: 'Can I hire TaqHaus for just one service?',
    a: "Yes. Many clients hand us a single channel: social media, email, getting found on Google, or ads. You don't need to hand us everything. We run it as if it were our own and report on results, not just activity.",
  },
  {
    q: 'Do you work with small businesses?',
    a: "Yes. Our free 20-minute call is built for exactly this. A senior strategist looks at your situation and tells you what to do first. No retainer required to start.",
  },
  {
    q: 'Do you work with politicians and public figures?',
    a: "Yes. We have a dedicated team for this. Website design, social media, reputation management, and campaign communications, all handled with full discretion. Enquiries are kept confidential.",
  },
  {
    q: 'What size company is the right fit?',
    a: "We work with businesses at every stage, from solo founders and small businesses to growing brands and large organisations. If you have a real problem and want someone who will actually do the work, we'd like to hear from you.",
  },
  {
    q: 'How quickly can we start?',
    a: "Sprints are the fastest to kick off. Single-service plans can usually start within two weeks. Full retainers take a little longer to set up properly. Book a call and we'll give you a realistic timeline.",
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="Services | TaqHaus"
        description="One team for your marketing. Social media, email, ads, getting found on Google, websites, design, and video. Take one service or hand us the lot."
        canonical="/services"
        ogImage="/images/og/services.png"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking for Q3 · 2 retainer spots open · Working with clients worldwide</span>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
          </Link>
          <nav className="nav-links">
            <Link to="/services" className="active">Services</Link>
            <Link to="/case-studies">Results</Link>
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
              <h1>The plan <em>and</em> the work. Under one&nbsp;roof.</h1>
            </div>
            <motion.div {...rv(0.15)}>
              <p className="lede" style={{ fontSize: 'clamp(18px,1.4vw,22px)' }}>
                Most businesses juggle five different agencies who&rsquo;ve never met each other. We handle everything, from making the plan to doing the work. One team. One bill. No gaps.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute call <span className="arrow">↗</span>
                </a>
                <a href="#engagements" className="btn-link">How we work</a>
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
              <span className="eyebrow">Layer 1: Strategy</span>
              <h2 className="display-md">We figure out <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>the plan</em>.</h2>
            </div>
            <p className="lede">
              Start here if you need direction. We find what&rsquo;s holding your business back and tell you exactly what to do next, in plain English.
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
                <Link to="/contact" className="btn-link" style={{ marginTop: 'auto', fontSize: 13.5 }}>Ask us about this →</Link>
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
              <span className="eyebrow">Layer 2: Execution</span>
              <h2 className="display-md">We do <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>the work</em>.</h2>
            </div>
            <p className="lede">
              This is the hands-on work. Pick what you want off your plate: one service, a few, or all of them. Every one of these can run on its own. No full retainer required.
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
                      See the full details →
                    </Link>
                  )}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--ink-3)', marginBottom: 14 }}>What you get</p>
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
                      Talk to us about this <span className="arrow">→</span>
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
              <span className="eyebrow">Ways to work with us</span>
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>Three ways to <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>work</em> with us.</h2>
            </div>
            <p className="lede">Pick the one that fits where you are. Most people start with a sprint or a free call, so we can both make sure it&rsquo;s a fit.</p>
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
            <p className="lede">Different businesses start in different places. Here&rsquo;s where most people begin.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 40 }}>
            <motion.div {...rv(0)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For small businesses</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Start with a free 20-minute call.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>We look at your marketing, find the biggest gap, and tell you exactly what to do first. No retainer required.</p>
              <Link to="/for-small-businesses" className="btn-link" style={{ fontSize: 13.5 }}>Learn more →</Link>
            </motion.div>
            <motion.div {...rv(0.08)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For politicians &amp; public figures</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Book a private conversation.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>Reputation management, social media, website design, and campaign communications, all handled with full discretion.</p>
              <Link to="/public-figures" className="btn-link" style={{ fontSize: 13.5 }}>See how we work →</Link>
            </motion.div>
            <motion.div {...rv(0.16)} style={{ border: '1px solid var(--hairline)', borderRadius: 14, padding: 28 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terracotta)', marginBottom: 12 }}>For growing businesses</p>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Book a call with us.</h4>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>30 minutes. No slideshow. We&rsquo;ll ask what&rsquo;s getting in the way, sketch out a plan, and decide together if there&rsquo;s a fit.</p>
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
            <p className="lede">If your question isn&rsquo;t here, book a call. Straight answers, no sales script.</p>
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
            <h2 className="display-lg" style={{ color: 'var(--paper)' }}>Tell us what you want off your&nbsp;plate.</h2>
            <div className="stack">
              <p style={{ color: 'color-mix(in oklch, var(--paper) 88%, transparent)', fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: '44ch' }}>
                One call. We&rsquo;ll ask what&rsquo;s getting in the way of your business, not for a brief. You&rsquo;ll leave with clear advice either way.
              </p>
              <div className="row">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
                  Book a free 20-minute call <span className="arrow">↗</span>
                </a>
                <Link to="/case-studies" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'color-mix(in oklch, var(--paper) 35%, transparent)' }}>
                  See results
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
            <div><h4>Explore</h4><ul><li><Link to="/services">Services</Link></li><li><Link to="/case-studies">Results</Link></li><li><Link to="/about">About</Link></li></ul></div>
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
