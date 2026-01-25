import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  BarChart3,
  Quote,
  Award,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

const keyMetrics = [
  { value: '+188%', label: 'Organic Signups YoY', icon: TrendingUp },
  { value: '−34%', label: 'Blended CAC', icon: DollarSign },
  { value: '+38%', label: 'Checkout Completion', icon: Target },
  { value: '−19%', label: 'Refund Rate', icon: Award }
]

const timeline = [
  {
    phase: 'Discovery & Research',
    duration: '2 Weeks',
    activities: [
      'Intent mapping across trader journey stages',
      'Competitor positioning analysis',
      'Review platform sentiment audit',
      'Funnel drop-off identification'
    ]
  },
  {
    phase: 'Content Authority Build',
    duration: 'Weeks 3-8',
    activities: [
      'Policy explainer content creation',
      'Transparent comparison pages',
      'Payout proof asset library',
      'Educational challenge guides'
    ]
  },
  {
    phase: 'Conversion Optimization',
    duration: 'Weeks 9-12',
    activities: [
      'Plan differentiation A/B testing',
      'Profit-split calculator implementation',
      'KYC friction reduction',
      'Dynamic tooltip deployment'
    ]
  },
  {
    phase: 'Lifecycle & Scale',
    duration: 'Ongoing',
    activities: [
      'Stage-based email/SMS campaigns',
      'Objection handling automation',
      'Review moat expansion',
      'Continuous cohort analysis'
    ]
  }
]

const challenges = [
  {
    title: 'Plateaued Organic Growth',
    description: 'Traffic growth had stalled despite strong brand awareness, limiting new trader acquisition'
  },
  {
    title: 'Rising Acquisition Costs',
    description: 'Cost-per-acquisition trending upward by 27% QoQ, threatening profitability'
  },
  {
    title: 'Reputation Volatility',
    description: 'Challenge rule changes and mixed reviews creating trust barriers in conversion funnel'
  },
  {
    title: 'Compliance Constraints',
    description: 'Highly regulated space requiring careful messaging and transparent communication'
  }
]

const solutions = [
  {
    category: 'Search & Content Strategy',
    tactics: [
      'Entity cleanup and brand SERP optimization',
      'Review coverage across 15+ platforms with response strategy',
      'Created comprehensive trader education guides and resources',
      'Built payout transparency hub with verified proof documentation'
    ]
  },
  {
    category: 'Conversion Rate Optimization',
    tactics: [
      'Plan differentiation testing to highlight value propositions',
      'Interactive profit-split calculator for transparency',
      'Streamlined KYC process reducing friction by 42%',
      'Dynamic policy tooltips addressing objections in real-time'
    ]
  },
  {
    category: 'Lifecycle Marketing',
    tactics: [
      'Stage-based messaging (pre-challenge, in-challenge, post-challenge)',
      'Data-backed FAQ system addressing common objections',
      'Reactivation campaigns for incomplete signups',
      'Verified trader review collection and syndication'
    ]
  }
]

const results = {
  early: [
    { metric: 'Non-Brand Clicks', change: '+74%', period: 'First 60 days' },
    { metric: 'Checkout Completion', change: '+38%', period: 'First 90 days' },
    { metric: 'Refund Rate', change: '−19%', period: 'Post-launch' },
    { metric: 'Rule Clarity Score', change: '+56%', period: 'User feedback' }
  ],
  longTerm: [
    { metric: 'Organic Signups', value: '+188% YoY', context: 'Diversified non-brand traffic sources' },
    { metric: 'Blended CAC', value: '−34%', context: 'Through conversion lifts + lifecycle revenue' },
    { metric: 'SERP Coverage', value: '92%', context: 'Page 1 rankings for target review/comparison queries' },
    { metric: 'Policy Volatility Impact', value: '−68%', context: 'Reduced sensitivity to rule changes' }
  ]
}

export default function CaseStudyTFT() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO
        title="The Funded Trader Case Study - Scaling Growth & Reducing CAC"
        description="How TaqHaus helped The Funded Trader achieve 188% organic signup growth and reduce customer acquisition costs by 34% through strategic SEO, conversion optimization, and lifecycle marketing."
        keywords="prop trading marketing, funded trader case study, CAC reduction, conversion optimization, trading platform growth, fintech marketing"
        canonical="/case-studies/the-funded-trader"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-navy/20 to-dark pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-neutral-light/70 mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-light">The Funded Trader</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider">
              Growth Marketing & Conversion Optimization
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              How The Funded Trader Scaled to 188% Organic Growth While Slashing CAC by 34%
            </h1>

            <p className="mt-6 text-xl text-neutral-light/80 max-w-3xl">
              From plateaued growth to explosive expansion: Building a sustainable acquisition engine through
              strategic content, conversion optimization, and lifecycle marketing in a reputation-sensitive market.
            </p>

            {/* Key Metrics Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <Card className="relative bg-dark-900/80 border-white/10 backdrop-blur">
                    <CardHeader className="text-center pb-3">
                      <metric.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-3xl md:text-4xl font-bold text-accent">{metric.value}</div>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-xs uppercase tracking-wider text-neutral-light/70">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-900/80 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-light/80">Proprietary Trading / Fintech</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/80 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Company Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-light/80">Scale-Up (Series B)</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/80 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Partnership Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-light/80">18+ Months (Ongoing)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">The Challenge</span>
            <h2 className="mt-4 text-4xl font-bold">
              Strong Brand. Stalled Growth. Rising Costs. Reputation Volatility.
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              The Funded Trader had built significant brand awareness but hit a growth ceiling. Organic traffic
              plateaued, acquisition costs climbed, and changing challenge rules created conversion uncertainty.
              In a reputation-sensitive, highly regulated space, they needed sustainable growth without sacrificing compliance or trust.
            </p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-black border-white/10 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-light/80">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quote from stakeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <CardContent className="p-8 text-center">
                <Quote className="h-10 w-10 text-accent mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl font-medium italic text-neutral-light/90">
                  "We'd maxed out our existing channels and every new rule change sent our conversion rate on a rollercoaster. We needed a system that could grow sustainably regardless of market noise."
                </blockquote>
                <p className="mt-4 text-sm uppercase tracking-wider text-accent/80">
                  — VP of Growth, The Funded Trader
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Our Approach</span>
            <h2 className="mt-4 text-4xl font-bold">
              Multi-Channel Growth Engine + Conversion Infrastructure
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              We built a three-pillar system: dominate organic search for trader intent, optimize every conversion
              touchpoint, and create lifecycle campaigns that maximize LTV. Every tactic was designed for
              measurability and compliance.
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="bg-dark-900/80 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Zap className="h-6 w-6 text-accent" />
                      {solution.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {solution.tactics.map((tactic, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-light/80">{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Execution Timeline</span>
            <h2 className="mt-4 text-4xl font-bold">
              12-Week Foundation, Continuous Optimization
            </h2>
          </motion.div>

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-accent rounded-full border-4 border-dark-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="bg-black border-white/10">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{phase.phase}</CardTitle>
                          <span className="text-sm text-accent font-semibold">{phase.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-light/80">
                              <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">The Results</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Explosive Growth. Lower Costs. Predictable Performance.
            </h2>
          </motion.div>

          {/* Early Results */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">First 90 Days</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {results.early.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-accent/10 to-dark-900/80 border-accent/20 text-center">
                    <CardHeader>
                      <BarChart3 className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-4xl font-bold text-accent">{result.change}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-neutral-light">{result.metric}</p>
                      <p className="text-xs text-neutral-light/60 mt-1">{result.period}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Long-Term Results */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Long-Term Impact (12-18 Months)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {results.longTerm.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-dark-900/80 border-white/10 hover:border-accent/30 transition-colors">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-neutral-light/70 uppercase tracking-wider mb-1">{result.metric}</p>
                        <p className="text-3xl font-bold text-accent">{result.value}</p>
                      </div>
                      <div className="text-right text-sm text-neutral-light/60 max-w-xs">
                        {result.context}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-dark-900 via-navy/10 to-dark-900 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What Made This Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Target className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Intent-First Strategy</h4>
                    <p className="text-sm text-neutral-light/70">
                      Mapped every stage of the trader journey and owned those search moments
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Conversion Science</h4>
                    <p className="text-sm text-neutral-light/70">
                      Data-driven optimization at every touchpoint from awareness to activation
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Lifecycle Value</h4>
                    <p className="text-sm text-neutral-light/70">
                      Stage-based campaigns that maximize LTV and reduce churn
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentSlug="/case-studies/the-funded-trader" count={2} />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-dark-900 via-navy/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Break Through Your Growth Plateau and Slash Acquisition Costs?
            </h2>
            <p className="mt-6 text-xl text-neutral-light/80">
              Let's build a multi-channel growth engine that scales profitably and performs predictably.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-10 py-6 rounded-full font-semibold text-lg shadow-[0_20px_50px_rgba(233,122,31,0.4)]"
                asChild
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Request Your Growth Audit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-6 rounded-full font-semibold text-lg border-white/20 text-white hover:text-dark hover:bg-neutral-lighter/90"
                asChild
              >
                <Link to="/#case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-neutral-light/60">
              Free consultation. No commitment required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
