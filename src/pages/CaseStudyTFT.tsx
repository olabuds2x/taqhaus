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
  { value: '+188%', label: 'Signups from unpaid search, year on year', icon: TrendingUp },
  { value: '−34%', label: 'Average cost to win each customer', icon: DollarSign },
  { value: '+38%', label: 'People finishing checkout', icon: Target },
  { value: '−19%', label: 'Refund rate', icon: Award }
]

const timeline = [
  {
    phase: 'Research',
    duration: '2 Weeks',
    activities: [
      'Mapped what traders search for at each stage of deciding',
      'Studied how competitors present themselves',
      'Read through reviews to see what people praised and complained about',
      'Found where people drop off before buying'
    ]
  },
  {
    phase: 'Writing and Publishing',
    duration: 'Weeks 3-8',
    activities: [
      'Plain explanations of the rules and policies',
      'Honest comparison pages',
      'A library of payout proof',
      'Guides that teach traders how the challenges work'
    ]
  },
  {
    phase: 'Improving the Buying Flow',
    duration: 'Weeks 9-12',
    activities: [
      'Tested different versions of the plan pages to see which sold better',
      'Built the profit-split calculator',
      'Made the identity check easier',
      'Added the pop-up help notes'
    ]
  },
  {
    phase: 'Follow-up and Growth',
    duration: 'Ongoing',
    activities: [
      'Emails and texts matched to each customer stage',
      'Automatic answers to common doubts',
      'Kept growing the base of reviews',
      'Kept checking how each group of customers behaved'
    ]
  }
]

const challenges = [
  {
    title: 'Traffic Had Stopped Growing',
    description: 'Plenty of people knew the brand, but visits to the site had flattened, so fewer new traders were coming in'
  },
  {
    title: 'Each Customer Cost More to Win',
    description: 'The cost of winning each new customer was rising 27% quarter on quarter, which threatened profit'
  },
  {
    title: 'A Shaky Reputation',
    description: 'Changes to challenge rules and mixed reviews made people hesitate before paying'
  },
  {
    title: 'Strict Rules on What They Could Say',
    description: 'The industry is heavily regulated, so every message had to be careful and honest'
  }
]

const solutions = [
  {
    category: 'Getting Found on Google',
    tactics: [
      'Cleaned up what shows on Google when you search the brand name',
      'Made sure the brand showed up on 15+ review sites, with a plan for responding to reviews',
      'Wrote detailed guides that teach traders how things work',
      'Built a page showing verified proof of payouts'
    ]
  },
  {
    category: 'Helping More Visitors Become Customers',
    tactics: [
      'Tested different ways of presenting the plans so the differences were clear',
      'Added a calculator that shows traders exactly how the profit split works',
      'Simplified the identity check step (called KYC), reducing friction by 42%',
      'Added small pop-up notes that answer common doubts right on the page'
    ]
  },
  {
    category: 'Following Up at the Right Time',
    tactics: [
      'Different emails for traders before, during, and after their challenge',
      'An FAQ built from the questions customers actually ask',
      'Emails that bring back people who started signing up but stopped',
      'Collected reviews from verified traders and shared them widely'
    ]
  }
]

const results = {
  early: [
    { metric: 'Clicks from searches not using the brand name', change: '+74%', period: 'First 60 days' },
    { metric: 'People finishing checkout', change: '+38%', period: 'First 90 days' },
    { metric: 'Refund rate', change: '−19%', period: 'Post-launch' },
    { metric: 'How clear users said the rules were', change: '+56%', period: 'From user feedback' }
  ],
  longTerm: [
    { metric: 'Signups from unpaid search', value: '+188% YoY', context: 'Traffic now comes from many searches, not just the brand name' },
    { metric: 'Average cost per new customer', value: '−34%', context: 'From more visitors buying, plus revenue from follow-up emails' },
    { metric: 'Google page 1 coverage', value: '92%', context: 'Ranked on page 1 for the review and comparison searches we targeted' },
    { metric: 'Impact of rule changes', value: '−68%', context: 'The business was far less affected when challenge rules changed' }
  ]
}

export default function CaseStudyTFT() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO
        title="The Funded Trader: 188% More Signups, Costs Down 34%"
        description="How TaqHaus helped The Funded Trader get 188% more signups from unpaid search and cut the average cost of winning each customer by 34%."
        keywords="prop trading marketing, funded trader case study, CAC reduction, conversion optimization, trading platform growth, fintech marketing"
        canonical="/case-studies/the-funded-trader"
        ogImage="/images/og/case-the-funded-trader.png"
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
              Growth and Conversion
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              How The Funded Trader Grew Signups from Unpaid Search by 188% and Cut Customer Costs by 34%
            </h1>

            <p className="mt-6 text-xl text-neutral-light/80 max-w-3xl">
              Their growth had stalled. We helped them get found in search, turn more visitors into buyers,
              and follow up with customers at the right moments, all in a market where reputation is fragile and the rules are strict.
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
                <CardTitle className="text-lg text-accent">Time Working Together</CardTitle>
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
              A Known Brand, Stalled Growth, Rising Costs, a Shaky Reputation
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              The Funded Trader was well known, but growth had hit a ceiling. Visits from search had flattened,
              the cost of winning each customer kept climbing, and changes to challenge rules made buyers hesitate.
              In a heavily regulated market where reputation matters, they needed growth without cutting corners on compliance or trust.
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
                  "We'd squeezed all we could from the channels we had, and every rule change threw our numbers around. We needed growth that didn't depend on any of that."
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
              Get Found, Convert More Visitors, Follow Up Well
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              We worked on three things: showing up in search when traders are looking, improving every step
              between landing on the site and paying, and sending follow-up emails that increase what each
              customer spends over time. Everything was measurable and kept within the rules.
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
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">What We Did, and When</span>
            <h2 className="mt-4 text-4xl font-bold">
              12 Weeks to Build, Then Ongoing Improvement
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
              More Signups, Lower Costs, Steadier Results
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
            <h3 className="text-2xl font-semibold text-center mb-8">Longer Term, Over 12 to 18 Months</h3>
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
                    <h4 className="font-semibold mb-2">Start with What People Search</h4>
                    <p className="text-sm text-neutral-light/70">
                      We mapped what traders search for at each stage of deciding and made sure the brand showed up there
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Test Everything</h4>
                    <p className="text-sm text-neutral-light/70">
                      We measured and tested each step, from first visit to first purchase
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Follow Up at the Right Time</h4>
                    <p className="text-sm text-neutral-light/70">
                      Emails matched to each customer stage, so customers spend more and fewer leave
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
              Has Your Growth Stalled Too?
            </h2>
            <p className="mt-6 text-xl text-neutral-light/80">
              Tell us what is going on. We will look at it and tell you plainly what we would do.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-10 py-6 rounded-full font-semibold text-lg shadow-[0_20px_50px_rgba(233,122,31,0.4)]"
                asChild
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute call
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
              The call is free and there is no obligation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
