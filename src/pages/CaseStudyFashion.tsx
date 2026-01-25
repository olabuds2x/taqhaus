import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { TrendingUp, Mail, ShoppingCart, Users, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '$57K', label: 'Revenue from Email in 90 Days', icon: Mail },
  { value: '+42%', label: 'Email Open Rate', icon: TrendingUp },
  { value: '+18%', label: 'Click-Through Rate', icon: Users },
  { value: '34%', label: 'Repeat Purchase Rate', icon: ShoppingCart }
]

const timeline = [
  {
    phase: 'Email Audit & Strategy',
    duration: 'Week 1',
    activities: [
      'Analyzed existing email database (12K subscribers, <15% engagement)',
      'Identified segmentation opportunities by purchase history and browse behavior',
      'Mapped customer journey from awareness to repeat purchase'
    ]
  },
  {
    phase: 'List Hygiene & Foundation',
    duration: 'Weeks 2-3',
    activities: [
      'Cleaned list and sunset unengaged subscribers',
      'Set up behavioral segmentation and dynamic tags',
      'Created high-converting email templates aligned with brand'
    ]
  },
  {
    phase: 'Automation Build',
    duration: 'Weeks 4-6',
    activities: [
      'Welcome series (3 emails) with 51% open rate',
      'Browse abandonment flow recovering 12% of lost carts',
      'Post-purchase nurture driving repeat orders',
      'Win-back campaign re-engaging dormant customers'
    ]
  },
  {
    phase: 'Campaign Expansion',
    duration: 'Weeks 7-12',
    activities: [
      'Weekly broadcast campaigns with seasonal promotions',
      'VIP segment creation and exclusive early-access offers',
      'SMS integration for high-intent moments',
      'A/B testing subject lines, CTAs, and send times'
    ]
  }
]

const challenges = [
  {
    title: 'Stagnant Email Revenue',
    description: 'Email was an afterthought—generic broadcasts with low engagement. No automation, no segmentation, just batch-and-blast.'
  },
  {
    title: 'High Cart Abandonment',
    description: '68% of visitors added items to cart but never checked out. No follow-up system to recover those lost sales.'
  },
  {
    title: 'One-Time Buyers',
    description: 'Strong acquisition from paid ads, but weak retention. Customers bought once and disappeared.'
  },
  {
    title: 'No Lifecycle Strategy',
    description: "Treating all subscribers the same—new customers got the same emails as VIPs. Didn't optimize for where people were in their journey."
  }
]

const solutions = [
  {
    category: 'Email Infrastructure',
    tactics: [
      'Klaviyo migration and integration with Shopify',
      'Advanced segmentation by purchase frequency, AOV, and product category',
      'Dynamic content blocks for personalized product recommendations',
      'Deliverability optimization (SPF, DKIM, domain warming)'
    ]
  },
  {
    category: 'Lifecycle Automation',
    tactics: [
      'Welcome series introducing brand story and bestsellers',
      'Cart and browse abandonment flows with dynamic product inserts',
      'Post-purchase thank you and cross-sell sequences',
      'Win-back campaigns targeting 60-90 day inactive customers'
    ]
  },
  {
    category: 'Campaign Strategy',
    tactics: [
      'Seasonal promotional campaigns with urgency and scarcity',
      'VIP-only early access to new collections',
      'Educational content on styling and fabric care',
      'User-generated content and social proof in emails'
    ]
  }
]

const results = {
  early: [
    { metric: '$18K', description: 'Email revenue in first 30 days' },
    { metric: '51%', description: 'Welcome series open rate' },
    { metric: '12%', description: 'Cart recovery rate' },
    { metric: '+28%', description: 'Subscriber list growth' }
  ],
  longTerm: [
    { metric: '$57K', description: 'Total email revenue in 90 days' },
    { metric: '+42%', description: 'Average email open rate' },
    { metric: '34%', description: 'Repeat purchase rate' },
    { metric: '27%', description: 'Email contribution to total revenue' }
  ]
}

export default function CaseStudyFashion() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="Fashion Brand Case Study - $57K from Email Automation"
        description="How we helped a fashion e-commerce brand generate $57K in 90 days through strategic email marketing automation and lifecycle campaigns."
        keywords="email marketing case study, Klaviyo automation, e-commerce email strategy, cart abandonment recovery, customer retention"
        canonical="/case-studies/fashion-brand"
      />

      {/* Hero Section */}
      <section className="py-16 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-light/70 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-neutral-light">Fashion Brand</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <span className="text-sm uppercase tracking-[0.35em] text-accent/80">Case Study</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              $57K in 90 Days from Email Automation
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a fashion e-commerce brand transformed their email channel from an afterthought into their highest-ROI revenue driver.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl border border-white/10 bg-dark-900/50 p-6 text-center"
              >
                <item.icon className="mx-auto h-8 w-8 text-accent mb-3" />
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-neutral-light/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Industry</h3>
              <p className="mt-2 text-xl font-semibold">Fashion E-Commerce</p>
              <p className="mt-1 text-neutral-light/70">Women's contemporary apparel</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Stage</h3>
              <p className="mt-2 text-xl font-semibold">Scaling Brand</p>
              <p className="mt-1 text-neutral-light/70">$2M+ annual revenue</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Duration</h3>
              <p className="mt-2 text-xl font-semibold">90 Days</p>
              <p className="mt-1 text-neutral-light/70">Ongoing partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">The Challenge</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-dark-900/80 p-6"
              >
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <p className="mt-3 text-neutral-light/80">{challenge.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Client Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent p-8"
          >
            <Quote className="h-10 w-10 text-accent/60 mb-4" />
            <p className="text-xl italic text-neutral-light/90">
              "We were leaving so much money on the table. TaqHaus turned our email list into our most profitable channel in less than 3 months."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent/80">
              — Sarah Mitchell, Founder, Luxe Apparel Co.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">The Solution</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            A comprehensive email marketing overhaul focused on automation, segmentation, and lifecycle optimization.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <h3 className="text-lg font-semibold text-accent">{solution.category}</h3>
                <ul className="mt-4 space-y-3">
                  {solution.tactics.map((tactic) => (
                    <li key={tactic} className="flex items-start gap-2 text-sm text-neutral-light/80">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">Execution Timeline</h2>
          <div className="mt-12 space-y-8">
            {timeline.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/3">
                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                    <h3 className="text-xl font-semibold">{phase.phase}</h3>
                    <p className="mt-2 text-sm text-accent">{phase.duration}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="rounded-xl border border-white/10 bg-dark-900/80 p-6">
                    <ul className="space-y-3">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-neutral-light/80">
                          <span className="text-accent mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">The Results</h2>

          {/* Early Results */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-accent/90 mb-6">First 30 Days</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {results.early.map((item, idx) => (
                <motion.div
                  key={item.description}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl border border-white/10 bg-black/40 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-accent">{item.metric}</p>
                  <p className="mt-2 text-sm text-neutral-light/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Long-term Impact */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-accent/90 mb-6">90-Day Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {results.longTerm.map((item, idx) => (
                <motion.div
                  key={item.description}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-6 text-center"
                >
                  <p className="text-3xl font-bold text-white">{item.metric}</p>
                  <p className="mt-2 text-sm text-neutral-light/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Made This Work */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">What Made This Work</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Behavioral Segmentation</h3>
              <p className="mt-3 text-neutral-light/80">
                We stopped treating all subscribers the same. VIPs got exclusive access, new subscribers got education, dormant customers got win-back offers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Automation-First Approach</h3>
              <p className="mt-3 text-neutral-light/80">
                Built evergreen flows that worked 24/7. Welcome, abandonment, and post-purchase sequences ran on autopilot while we scaled campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Brand-Aligned Creative</h3>
              <p className="mt-3 text-neutral-light/80">
                Every email felt on-brand—clean design, compelling copy, and lifestyle imagery that matched the premium positioning.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Revenue-Focused Testing</h3>
              <p className="mt-3 text-neutral-light/80">
                Continuous A/B testing on subject lines, send times, and CTAs. Every test was designed to increase revenue per email, not just open rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentSlug="/case-studies/fashion-brand" count={2} />

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Turn Your Email List Into Revenue?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Let's build an email system that works while you sleep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-4 font-semibold shadow-[0_12px_32px_rgba(233,122,31,0.33)]" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-white/15 text-white hover:text-dark hover:bg-neutral-lighter" asChild>
              <Link to="/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
