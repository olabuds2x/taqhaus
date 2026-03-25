import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
}

const stagger = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
})

const serviceCategories = [
  {
    id: 'strategy',
    number: '01',
    title: 'Strategy & Consulting',
    headline: 'Clarity before action.',
    description: 'Marketing audits, GTM strategy, competitive intelligence, and ongoing advisory. Think fractional CMO — senior-level thinking without the full-time salary.',
    deliverables: [
      'Marketing Audits & Growth Diagnostics',
      'Funnel & Conversion Strategy',
      'Market Positioning & Messaging Architecture',
      'Go-to-Market Strategy',
      'Competitive Intelligence',
      'Leadership Branding & Thought Leadership Strategy',
      'Political & Executive Reputation Management',
    ],
    idealFor: [
      'Founders & CEOs needing strategic direction',
      'Internal teams needing board-level oversight',
      'Executives managing public perception',
    ],
    featured: true,
  },
  {
    id: 'execution',
    number: '02',
    title: 'Digital Marketing Execution',
    headline: 'The full funnel, executed and measured.',
    description: 'Email, SEO content, paid media (Meta, Google, LinkedIn, TikTok), and CRO. Acquisition systems that compound across every channel.',
    deliverables: [
      'SEO & Authority Content Systems',
      'Paid Media (Google, Meta, LinkedIn, TikTok)',
      'Email Marketing & Lifecycle Automation (Klaviyo, Brevo, Omnisend)',
      'Conversion Rate Optimization',
      'AI-Powered Campaign Intelligence',
      'Analytics & Reporting (GA4, Looker Studio)',
    ],
    idealFor: [
      'Brands without in-house specialists',
      'Teams wanting end-to-end performance',
      'Businesses seeking measurable ROI',
    ],
  },
  {
    id: 'brand',
    number: '03',
    title: 'Social Media & Brand',
    headline: 'Build the presence. Manage the conversation.',
    description: 'Social media management, brand identity, content creation, reputation management, and audience growth.',
    deliverables: [
      'Social Media Strategy & Management',
      'Brand Identity & Design Systems',
      'Content Creation & Distribution',
      'Reputation Management',
      'Audience Growth & Engagement',
      'Community Building',
    ],
    idealFor: [
      'Brands building thought leadership',
      'Companies entering new markets',
      'Public figures and politicians',
    ],
  },
  {
    id: 'web',
    number: '04',
    title: 'Websites & Digital Assets',
    headline: 'Built to rank, convert, and scale.',
    description: "SEO-engineered websites, landing pages, and ongoing site management — not just look pretty.",
    deliverables: [
      'SEO-Engineered Website Design & Development',
      'Landing Page Design & Optimization',
      'GEO / AI Search Optimization',
      'Website Performance & Core Web Vitals',
      'Ongoing Site Management & Updates',
      'E-commerce Storefronts (Shopify, WooCommerce)',
    ],
    idealFor: [
      'Businesses needing a website that generates leads',
      'E-commerce brands needing conversion-optimized storefronts',
      'Companies preparing for AI search (GEO)',
    ],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-noir-void text-ink font-body">
      <SEO
        title="Services — TaqHaus | Strategy & Execution"
        description="From strategic consulting to full-stack marketing execution. Strategy & Consulting, Digital Marketing, Social Media & Brand, and Website Design."
        keywords="marketing strategy, fractional CMO, SEO services, paid media, brand identity, web design"
        canonical="/services"
      />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-20 px-6 bg-gradient-to-b from-maroon-deep/30 to-noir-void">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-6">
              Our Services
            </p>
            <h1 className="font-headline font-bold text-white">
              Strategy First.
              <br />
              <span className="text-ink-secondary">Execution Included.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              Whether you need consulting-level strategy, full-funnel marketing execution, or both — we deliver clarity, systems, and measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 sm:py-28 px-6 ${index % 2 === 0 ? 'bg-noir-low' : 'bg-noir-void'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left — Info */}
              <motion.div {...fadeUp}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-strike text-sm font-label font-bold tracking-wider">{service.number}</span>
                  {service.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-strike/10 text-strike text-xs font-label font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-strike" />
                      Core Offering
                    </span>
                  )}
                </div>
                <h2 className="font-headline font-bold text-white mb-4">{service.title}</h2>
                <p className="text-xl text-blush font-headline italic mb-6">{service.headline}</p>
                <p className="text-ink-secondary leading-relaxed mb-8">{service.description}</p>
                <a
                  href={CALENDLY_URL}
                  className="btn-strike inline-flex items-center gap-3 text-sm"
                >
                  Discuss {service.title.split(' ')[0]} Strategy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Right — Deliverables + Ideal For */}
              <div className="space-y-8">
                <motion.div
                  className="rounded-2xl bg-noir-surface p-8"
                  {...stagger(0.1)}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-5">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary">
                        <CheckCircle2 className="w-4 h-4 text-strike mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="rounded-2xl bg-noir-surface p-8"
                  {...stagger(0.2)}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-5">
                    Ideal For
                  </p>
                  <ul className="space-y-3">
                    {service.idealFor.map(item => (
                      <li key={item} className="text-sm text-ink-secondary">
                        → {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why TaqHaus */}
      <section className="py-20 sm:py-28 px-6 bg-noir-void">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
              Why Us
            </p>
            <h2 className="font-headline font-bold text-white">
              Why TaqHaus Over Another Agency?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Consultancy Brain, Agency Hands',
                desc: 'We think like McKinsey and build like a performance agency. You get the strategy AND the execution — not a 60-page deck with no follow-through.',
              },
              {
                title: 'One Partner. Zero Gaps.',
                desc: 'SEO, email, paid media, websites, brand — under one roof. No coordinating 4 vendors. No finger-pointing when results stall.',
              },
              {
                title: 'Operator Mindset',
                desc: 'We\'ve been in-house. We\'ve owned P&Ls, managed budgets, and reported to boards. We understand the pressure you\'re under because we\'ve sat in your seat.',
              },
              {
                title: 'Revenue, Not Reports',
                desc: 'We measure success in pipeline and revenue, not impressions and vanity metrics. If it doesn\'t move the needle, we don\'t do it.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-noir-low p-8 group hover:bg-noir-high transition-colors duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 0.61, 0.36, 1] as const }}
              >
                <h3 className="text-lg font-headline font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-noir-void to-maroon-deep/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-headline font-bold text-white">
              Not Sure Which Path Fits?
            </h2>
            <p className="mt-6 text-lg text-ink-secondary max-w-xl mx-auto">
              Start with a Strategic Audit — we'll evaluate your growth levers and map the right approach.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_URL}
                className="btn-strike inline-flex items-center justify-center gap-3 text-base"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="btn-ghost inline-flex items-center justify-center gap-3 text-base"
              >
                Request a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
