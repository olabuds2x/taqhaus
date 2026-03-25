import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
}

const beliefs = [
  'Strategy without execution is a PowerPoint. Execution without strategy is a waste of money.',
  'Your website is your best salesperson — it should work 24/7.',
  'Marketing should be measured in revenue, not impressions.',
  'Great marketing doesn\'t look like marketing. It looks like exactly what the customer needed to see.',
]

const platforms = [
  'Klaviyo', 'Brevo', 'Omnisend', 'HubSpot', 'Google Ads',
  'Meta Business Suite', 'GA4', 'Looker Studio', 'Shopify',
  'WordPress', 'Webflow',
]

const disciplines = [
  'Email Marketing', 'SEO', 'GEO/AI Optimization', 'CRO',
  'Paid Media', 'Social Media Strategy', 'Brand Positioning',
  'Content Strategy', 'Web Development',
]

export default function About() {
  return (
    <div className="min-h-screen bg-noir-void text-ink font-body">
      <SEO
        title="About — TaqHaus | Marketing Consultants Who Actually Build Things"
        description="TaqHaus is a marketing and business consultancy built for leaders who take growth seriously. Consultancy-level thinking with agency-level execution."
        keywords="about TaqHaus, marketing consultancy, growth partner, fractional CMO"
        canonical="/about"
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
              About TaqHaus
            </p>
            <h1 className="font-headline font-bold text-white">
              Marketing Consultants
              <br />
              <span className="text-ink-secondary">Who Actually Build Things.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The TaqHaus Story */}
      <section className="py-20 sm:py-28 px-6 bg-noir-low">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-8">
              The TaqHaus Story
            </h2>

            <div className="space-y-6 text-ink-secondary leading-relaxed">
              <p>
                We've worked inside businesses as operators — not as outsiders giving advice. We've owned marketing budgets, built funnels, managed email platforms, run paid campaigns, optimized conversion rates, and been directly accountable for revenue outcomes.
              </p>

              <p>
                TaqHaus was started because too many businesses are stuck between two bad options: expensive agencies that over-promise and under-deliver, or freelancers who execute but can't think strategically. TaqHaus is neither. It's consultancy-level thinking with agency-level execution.
              </p>

              <p>
                TaqHaus isn't trying to be the biggest agency. It's trying to be the most effective partner for businesses that are serious about growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 sm:py-28 px-6 bg-noir-void">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-12 text-center">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-noir-low p-8 group hover:bg-noir-high transition-colors duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-lg font-headline italic text-blush leading-relaxed">
                  "{belief}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator Credentials */}
      <section className="py-20 sm:py-28 px-6 bg-noir-low">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-12 text-center">
              Operator Credentials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platforms */}
            <motion.div
              className="rounded-2xl bg-noir-surface p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-5">
                Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {platforms.map(platform => (
                  <span key={platform} className="px-3 py-1.5 text-xs bg-white/5 text-ink-secondary rounded-lg border border-white/5 font-label">
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Disciplines */}
            <motion.div
              className="rounded-2xl bg-noir-surface p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-5">
                Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {disciplines.map(discipline => (
                  <span key={discipline} className="px-3 py-1.5 text-xs bg-white/5 text-ink-secondary rounded-lg border border-white/5 font-label">
                    {discipline}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-noir-void to-maroon-deep/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-headline font-bold text-white">
              Ready to Work With Us?
            </h2>
            <p className="mt-6 text-lg text-ink-secondary max-w-xl mx-auto">
              Let's start with a conversation about your growth goals.
            </p>
            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                className="btn-strike inline-flex items-center gap-3 text-base"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
