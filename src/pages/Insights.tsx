import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
}

const pillars = [
  {
    title: 'Strategy & Consulting',
    tag: 'PRIORITY',
    articles: [
      '5 Signs You Need a Marketing Strategist, Not Another Agency',
      'The Marketing Audit Framework We Use to Find $50K in Wasted Spend',
      'Fractional CMO vs. Marketing Agency: Which Does Your Business Actually Need?',
    ],
  },
  {
    title: 'Website Performance',
    articles: [
      '5 Signs Your Website Is Costing You Customers',
      'What GEO Is and Why Your Business Needs It Before 2027',
      'SEO vs. GEO: The Search Landscape Has Changed. Has Your Website?',
    ],
  },
  {
    title: 'Marketing Execution',
    articles: [
      'The Real Reason Your Marketing Agency Isn\'t Delivering Results',
      'Email Marketing ROI: Why It\'s Still the Highest-Leverage Channel',
      'Social Media Management vs. Social Media Marketing: You Need Both',
    ],
  },
  {
    title: 'Politicians & Public Figures',
    tag: 'VERTICAL',
    articles: [
      'Why 70% of Local Politicians Are Invisible Online (And How to Fix It in 30 Days)',
      'The Digital Playbook for Elected Officials: Website, Social, and Constituent Engagement in 2026',
    ],
  },
]

export default function Insights() {
  return (
    <div className="min-h-screen bg-noir-void text-ink font-body">
      <SEO
        title="Insights — TaqHaus | Marketing Strategy & Growth Blog"
        description="Strategic marketing insights, growth frameworks, and tactical guides from the TaqHaus team."
        keywords="marketing blog, growth strategy, SEO insights, marketing consulting insights"
        canonical="/insights"
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
              Insights
            </p>
            <h1 className="font-headline font-bold text-white">
              Thinking That Drives
              <br />
              <span className="text-ink-secondary">Growth That Compounds.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              Strategic marketing insights, growth frameworks, and no-BS guides from the TaqHaus team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-20 sm:py-28 px-6 bg-noir-low">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {pillars.map((pillar, pIndex) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl bg-noir-surface p-8 sm:p-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-headline font-bold text-white">{pillar.title}</h2>
                  {pillar.tag && (
                    <span className="px-2 py-0.5 text-[10px] rounded-full bg-strike/10 text-strike font-label font-bold tracking-widest uppercase">
                      {pillar.tag}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  {pillar.articles.map((article) => (
                    <div
                      key={article}
                      className="flex items-center justify-between gap-4 py-4 border-b border-white/5 last:border-0 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-ink-muted group-hover:bg-strike/10 group-hover:text-strike transition-colors flex-shrink-0">
                          →
                        </span>
                        <p className="text-ink-secondary group-hover:text-white transition-colors text-sm sm:text-base">
                          {article}
                        </p>
                      </div>
                      <span className="text-xs text-ink-muted font-label whitespace-nowrap">Coming Soon</span>
                    </div>
                  ))}
                </div>
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
              Need Strategy, Not Just Content?
            </h2>
            <p className="mt-6 text-lg text-ink-secondary max-w-xl mx-auto">
              We publish insights here — but the real strategy happens in our 30-minute calls.
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
                Get a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
