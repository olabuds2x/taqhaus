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

const disciplines = [
  {
    id: 's01',
    num: '— Discipline 01',
    title: <>Growth strategy &amp; fractional <em>CMO</em></>,
    summary: 'A senior operator embedded in your leadership team. We diagnose the constraint, build the plan, and stay accountable to the number — month after month.',
    what: [
      { label: 'Best for', text: 'Founders without a marketing leader, or in-house teams that need senior pattern recognition.' },
      { label: 'Team', text: 'One operator + strategy associate + access to the full TaqHaus stack.' },
      { label: 'Reporting', text: 'Regular standups, business reviews, and performance readouts — cadence agreed with you.' },
    ],
    deliverables: [
      { num: '01', text: 'Growth diagnosis & constraint identification' },
      { num: '02', text: '12-month growth blueprint & budget' },
      { num: '03', text: 'OKRs & channel-level KPIs' },
      { num: '04', text: 'Team coaching, hire calibration, vendor management' },
      { num: '05', text: 'Business & investor narrative updates' },
    ],
    cta: 'Discuss an engagement →',
  },
  {
    id: 's02',
    num: '— Discipline 02',
    title: <>Brand &amp; <em>positioning</em></>,
    summary: 'Identity that survives contact with the real world — your sales team, your investors, your hiring page. Not a mood board. A working system.',
    what: [
      { label: 'Best for', text: 'Re-launches, repositioning after PMF, or category-defining bets.' },
      { label: 'Team', text: 'Strategy lead, designer, copywriter, founder principal.' },
      { label: 'Output', text: 'Brand book, narrative, identity system, launch toolkit.' },
    ],
    deliverables: [
      { num: '01', text: 'Audience & competitive immersion' },
      { num: '02', text: 'Positioning, narrative & messaging system' },
      { num: '03', text: 'Visual identity & type system' },
      { num: '04', text: 'Brand book + launch toolkit' },
    ],
    cta: 'Start a project →',
  },
  {
    id: 's03',
    num: '— Discipline 03',
    title: <>Websites &amp; product <em>marketing</em></>,
    summary: 'Sites that convert and editorial surfaces that compound. Designed, written, engineered, and shipped — not delivered as a Figma file.',
    what: [
      { label: 'Best for', text: "Re-launches, funded-stage refreshes, or sites that haven't kept up with the company." },
      { label: 'Stack', text: 'Webflow, Framer, or custom Next.js — we choose for fit, not preference.' },
      { label: 'Includes', text: 'Copy, design, engineering, SEO baseline, CMS training.' },
    ],
    deliverables: [
      { num: '01', text: 'Information architecture & messaging' },
      { num: '02', text: 'Design system & key pages' },
      { num: '03', text: 'Build, QA, & SEO foundation' },
      { num: '04', text: 'Launch, analytics, ongoing care plan' },
    ],
    cta: 'Scope a build →',
  },
  {
    id: 's04',
    num: '— Discipline 04',
    title: <>SEO &amp; organic <em>growth</em></>,
    summary: 'Technical, editorial, and topical authority. Built for AI search engines and human readers in equal measure. Strategies designed to compound.',
    what: [
      { label: 'Best for', text: 'Sites with a real audience opportunity and the patience to play the long game.' },
      { label: 'Output', text: 'Editorial cadence, technical sprints, performance reporting.' },
      { label: 'Specialty', text: 'B2B SaaS, professional services, founder & personal brands.' },
    ],
    deliverables: [
      { num: '01', text: 'Technical audit & site health programme' },
      { num: '02', text: 'Topical authority map & content roadmap' },
      { num: '03', text: 'Editorial production & publishing' },
      { num: '04', text: 'Internal linking, schema, & AI-overview optimisation' },
      { num: '05', text: 'Digital PR & link acquisition' },
    ],
    cta: 'Start a retainer →',
  },
  {
    id: 's05',
    num: '— Discipline 05',
    title: <>Paid <em>acquisition</em></>,
    summary: "Performance media that respects the brand. Testing rigour, narrative-first creative, full-funnel measurement. We don't buy clicks — we buy customers.",
    what: [
      { label: 'Best for', text: 'Brands ready to invest in paid channels. We manage budgets from $3k/month upward — the full testing programme kicks in around $20k+/month.' },
      { label: 'Channels', text: 'Meta, Google, LinkedIn, programmatic, YouTube, sponsorships.' },
      { label: 'Output', text: 'Creative production, testing roadmap, regular performance reviews.' },
      { label: 'Measurement', text: 'MMM, incrementality tests, attribution layer setup.' },
    ],
    deliverables: [
      { num: '01', text: 'Account & creative audit' },
      { num: '02', text: 'Testing & learning roadmap' },
      { num: '03', text: 'Creative concepting & production' },
      { num: '04', text: 'Performance reporting & iteration' },
    ],
    cta: 'Start a retainer →',
  },
  {
    id: 's06',
    num: '— Discipline 06',
    title: <>Lifecycle &amp; <em>email</em></>,
    summary: "The unglamorous channel that quietly outperforms everything else. Flows, broadcasts, a deliverability program, and a sender voice that doesn't embarrass you.",
    what: [
      { label: 'Best for', text: 'SaaS, e-commerce, professional services with an addressable list.' },
      { label: 'Stack', text: 'Klaviyo, Customer.io, HubSpot, Iterable.' },
      { label: 'Output', text: 'Strategy, copy, design, build, QA, optimisation.' },
      { label: 'Includes', text: 'Deliverability monitoring & warmup if needed.' },
    ],
    deliverables: [
      { num: '01', text: 'Audit & flow architecture' },
      { num: '02', text: 'Core automation builds' },
      { num: '03', text: 'Editorial calendar & broadcast cadence' },
      { num: '04', text: 'A/B testing & revenue reporting' },
    ],
    cta: 'Start a retainer →',
  },
  {
    id: 's07',
    num: '— Discipline 07',
    title: <>Social media &amp; <em>community</em></>,
    summary: "Strategy, content, and management across the channels your audience actually uses. Built to grow an audience, convert attention, and keep your brand voice consistent at scale.",
    what: [
      { label: 'Best for', text: "Brands that need a consistent, active social presence but don't have the in-house bandwidth to do it well — from small businesses to growing teams." },
      { label: 'Channels', text: 'Instagram, LinkedIn, TikTok, X, Facebook — we prioritise based on where your audience actually is.' },
      { label: 'Output', text: 'Content calendar, copy, creative direction, scheduling, and performance reporting.' },
      { label: 'Includes', text: 'Community management, influencer identification, and paid-social coordination.' },
    ],
    deliverables: [
      { num: '01', text: 'Channel audit & positioning strategy' },
      { num: '02', text: 'Content calendar & creative direction' },
      { num: '03', text: 'Copy, creative briefing & scheduling' },
      { num: '04', text: 'Community management & engagement' },
      { num: '05', text: 'Performance reporting & content optimisation' },
    ],
    cta: 'Start a retainer →',
  },
]

const models = [
  {
    num: '— Model 01',
    title: 'Sprint',
    desc: "A focused diagnostic engagement. You'll come out with a strategy, a roadmap, and clarity on what to build next.",
    items: ['Growth diagnosis', '12-month roadmap', 'Quarterly OKRs', 'Channel-by-channel plan', 'Executive readout'],
    cta: 'Discuss a sprint',
    featured: false,
  },
  {
    num: '— Model 02 · Most common',
    title: 'Retainer',
    desc: 'Embedded leadership and full-stack execution. The team is on the hook for the outcome, not the deliverable.',
    items: ['Fractional CMO + execution pod', 'Up to three disciplines included', 'Weekly standups, monthly MBR', 'Quarterly resets & replanning', 'Slack, Notion, & board-deck support'],
    cta: 'Open a retainer conversation',
    featured: true,
  },
  {
    num: '— Model 03',
    title: 'Equity partner',
    desc: 'For pre-Series-A founders we deeply believe in. Cash + equity. Aligned incentives. Full skin in the game.',
    items: ['Reduced cash, meaningful equity', 'Full TaqHaus stack on tap', 'Co-author the narrative', 'Investor & PR introductions', 'Founder coaching included'],
    cta: 'Apply',
    featured: false,
  },
]

const faqs = [
  {
    q: 'How is this different from hiring an in-house team?',
    a: "You don't pay for ramp. You get a senior operator from day one, plus a working pod underneath them. For most companies under $20M ARR, this is faster and cheaper than building a comparable team in-house — and the pod gets better at your business every month.",
  },
  {
    q: 'How is this different from hiring an agency?',
    a: "Agencies sell deliverables. We sell outcomes. We take fewer clients, we sit inside your team, and we measure ourselves on pipeline and revenue — not impressions and decks. If we're not moving the number, we'll tell you before you have to ask.",
  },
  {
    q: 'What industries do you work with?',
    a: "B2B SaaS, professional services (legal, finance, healthcare), founder & personal brands, and a small number of consumer brands with a clear story. We pass on anything we don't believe we can make famous.",
  },
  {
    q: 'What size company is the right fit?',
    a: "We work with businesses at all stages. Our Sprint and Clarity Audit are built for early-stage founders and smaller businesses — fixed scope, clear output, no ongoing commitment. Retainers suit companies with more traction that want an embedded team for the long run. Not sure where you fit? Book a call and we'll give you an honest answer.",
  },
  {
    q: 'Do you work with our existing agencies?',
    a: "Often, yes. If you have a great PR firm, performance shop, or design studio, we'll plug into them and act as the strategic glue. We'd rather elevate good partners than replace them.",
  },
  {
    q: 'How quickly can we start?',
    a: "Sprints are the fastest to kick off. Retainers take a little longer to ramp up properly, and equity partnerships require more due diligence on both sides. Book a call and we'll give you a realistic timeline based on what you need.",
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="tq-editorial">
      <SEO
        title="Services — TaqHaus"
        description="Strategy, brand, web, SEO, paid, lifecycle, and social media — all under one roof. Sprint, retainer, or equity partner engagements."
        canonical="/services"
      />

      {/* Topbar */}
      <div className="topbar">
        <span className="pulse" />
        <span>Now booking Q3 engagements · 2 retainer seats open</span>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.svg" alt="TaqHaus" style={{ height: 44, width: 'auto' }} />
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
                You don&rsquo;t need another agency to brief. You need a senior team that diagnoses the constraint, designs the plan, and ships the work — on the same line item, with the same incentive.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                <a href={CALENDLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book a discovery call <span className="arrow">↗</span>
                </a>
                <a href="#engagements" className="btn-link">How we engage</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          {disciplines.map((d) => (
            <motion.div key={d.id} className="service" id={d.id} {...rv()}>
              <div className="label-col">
                <span className="num">{d.num}</span>
                <h2>{d.title}</h2>
                <p className="summary">{d.summary}</p>
                <Link to="/contact" className="btn-link">{d.cta}</Link>
              </div>
              <div>
                <div className="what">
                  {d.what.map((w) => (
                    <div key={w.label}>
                      <h4>{w.label}</h4>
                      <p>{w.text}</p>
                    </div>
                  ))}
                </div>
                <ul className="deliverables">
                  {d.deliverables.map((del) => (
                    <li key={del.num}>
                      <span className="marker">{del.num}</span>
                      <span>{del.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-paper-2" id="engagements">
        <div className="wrap">
          <motion.div className="section-head" {...rv()}>
            <div className="sh-meta">
              <span className="eyebrow">Engagement models</span>
              <h2 className="display-md">Three ways to <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>work</em> with us.</h2>
            </div>
            <p className="lede">Choose the shape that fits the stage you&rsquo;re at. We&rsquo;ll often start with a sprint to make sure we&rsquo;re right for each other before locking into a longer engagement.</p>
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

      {/* FAQ */}
      <section>
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
