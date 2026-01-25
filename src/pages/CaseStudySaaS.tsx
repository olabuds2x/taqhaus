import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { TrendingUp, DollarSign, Target, Users, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '+320%', label: 'Organic Traffic Growth', icon: TrendingUp },
  { value: '−60%', label: 'Customer Acquisition Cost', icon: DollarSign },
  { value: '+89%', label: 'Trial-to-Paid Conversion', icon: Target },
  { value: '247%', label: 'ROAS from Paid Campaigns', icon: Users }
]

const timeline = [
  {
    phase: 'Foundation Audit',
    duration: 'Weeks 1-2',
    activities: [
      'Technical SEO audit identifying 47 critical issues',
      'Competitor gap analysis revealing 12 untapped keyword clusters',
      'Conversion funnel analysis showing 63% drop-off at trial signup'
    ]
  },
  {
    phase: 'Quick Wins',
    duration: 'Weeks 3-6',
    activities: [
      'Fixed technical SEO issues (site speed, schema markup, mobile UX)',
      'Launched 8 high-intent comparison pages',
      'Simplified trial signup flow from 5 steps to 2'
    ]
  },
  {
    phase: 'Content Engine',
    duration: 'Weeks 7-16',
    activities: [
      'Published 24 product-led content pieces mapped to user intent',
      'Built topical authority clusters around 4 core use cases',
      'Implemented internal linking architecture'
    ]
  },
  {
    phase: 'Scale & Optimize',
    duration: 'Months 5-6',
    activities: [
      'Launched paid search campaigns targeting bottom-funnel keywords',
      'A/B tested pricing page elements (17% lift in conversions)',
      'Expanded content to 6 additional keyword clusters'
    ]
  }
]

const challenges = [
  {
    title: 'Invisible to High-Intent Buyers',
    description: 'Ranking on page 5 for money keywords while competitors dominated page 1. Zero branded search volume outside existing customers.'
  },
  {
    title: 'Expensive, Unsustainable Growth',
    description: 'Over-reliance on paid ads inflated CAC to $340. Every new customer felt like a battle, not a system.'
  },
  {
    title: 'Leaky Conversion Funnel',
    description: 'Complex trial signup process and unclear value proposition caused 63% of interested visitors to abandon before converting.'
  },
  {
    title: 'No Content-to-Revenue Pipeline',
    description: "Blog existed but wasn't mapped to buyer intent or product positioning. Traffic didn't convert."
  }
]

const solutions = [
  {
    category: 'Technical Foundation',
    tactics: [
      'Site speed optimization (1.8s → 0.6s load time)',
      'Schema markup for SaaS products and reviews',
      'Mobile UX improvements and Core Web Vitals fixes',
      'URL structure and canonicalization cleanup'
    ]
  },
  {
    category: 'Content & Authority',
    tactics: [
      'Comparison pages for all major competitors',
      'Use case content mapped to Jobs-to-be-Done framework',
      'Product-led tutorials and integration guides',
      'Topical clusters linking to product pages'
    ]
  },
  {
    category: 'Conversion Optimization',
    tactics: [
      'Streamlined trial signup (5 steps → 2 steps)',
      'Pricing page A/B tests with social proof elements',
      'Exit-intent offers for hesitant visitors',
      'Email nurture sequence for trial users'
    ]
  }
]

const results = {
  early: [
    { metric: '+87%', description: 'Organic sessions in first 75 days' },
    { metric: '14', description: 'Keywords moved to page 1' },
    { metric: '−18%', description: 'Trial signup drop-off rate' },
    { metric: '+34%', description: 'Trial-to-paid conversion rate' }
  ],
  longTerm: [
    { metric: '+320%', description: 'Total organic traffic growth' },
    { metric: '−60%', description: 'Blended customer acquisition cost' },
    { metric: '32', description: 'Page 1 rankings for high-intent keywords' },
    { metric: '$1.2M+', description: 'Revenue influenced by organic channel' }
  ]
}

export default function CaseStudySaaS() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="SaaS Startup Case Study - From Page 5 to Page 1"
        description="How we helped a B2B SaaS startup achieve 320% organic traffic growth and reduce CAC by 60% in 6 months through strategic SEO and conversion optimization."
        keywords="SaaS SEO case study, B2B SaaS marketing, reduce customer acquisition cost, organic traffic growth, conversion optimization"
        canonical="/case-studies/saas-startup"
      />

      {/* Hero Section */}
      <section className="py-16 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-light/70 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-neutral-light">SaaS Startup</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <span className="text-sm uppercase tracking-[0.35em] text-accent/80">Case Study</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              From Page 5 to Page 1 in 6 Months
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a B2B SaaS startup escaped paid-ad dependency and built a sustainable organic growth engine.
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
              <p className="mt-2 text-xl font-semibold">B2B SaaS</p>
              <p className="mt-1 text-neutral-light/70">Project management platform</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Stage</h3>
              <p className="mt-2 text-xl font-semibold">Growth Stage</p>
              <p className="mt-1 text-neutral-light/70">Series A, 50+ employees</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Duration</h3>
              <p className="mt-2 text-xl font-semibold">6 Months</p>
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
              "We were burning cash on ads with no clear path to profitability. TaqHaus helped us build a growth engine that actually compounds over time."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent/80">
              — Head of Growth, SaaS Startup
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">The Solution</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            A three-pillar approach combining technical excellence, content strategy, and conversion optimization.
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
            <h3 className="text-xl font-semibold text-accent/90 mb-6">First 75 Days</h3>
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
            <h3 className="text-xl font-semibold text-accent/90 mb-6">6-Month Impact</h3>
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
              <h3 className="text-xl font-semibold">Data-Driven Prioritization</h3>
              <p className="mt-3 text-neutral-light/80">
                We focused on high-intent keywords where competitors were vulnerable, not vanity metrics. Every content piece was mapped to revenue potential.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Technical Excellence First</h3>
              <p className="mt-3 text-neutral-light/80">
                Fixed foundational SEO issues before scaling content. A fast, well-structured site converted 2x better than the broken baseline.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Conversion-Aware Content</h3>
              <p className="mt-3 text-neutral-light/80">
                Every page had a clear CTA and path to trial. Content wasn't just for traffic—it was designed to convert readers into customers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Continuous Optimization</h3>
              <p className="mt-3 text-neutral-light/80">
                Monthly A/B tests on pricing pages, trial flows, and email sequences. Small wins compounded into major conversion improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentSlug="/case-studies/saas-startup" count={2} />

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Build Your Growth Engine?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Let's design a strategy that turns traffic into revenue—sustainably.
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
