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
  Shield,
  BarChart3,
  Quote,
  Star
} from 'lucide-react'
import { Link } from 'react-router-dom'

const keyMetrics = [
  { value: '+142%', label: 'People searching the brand by name', icon: TrendingUp },
  { value: '+96%', label: 'Visits from searches not using the brand name', icon: Users },
  { value: '−27%', label: 'Support requests per new signup', icon: Shield },
  { value: '4.8★', label: 'Average review rating', icon: Star }
]

const timeline = [
  {
    phase: 'Research',
    duration: '2 Weeks',
    activities: [
      'Read what people were saying across 12 review sites and forums',
      'Studied the story competitors were telling about themselves and the brand',
      'Went through support tickets to find the most common complaints',
      'Found searches the brand should show up for but did not'
    ]
  },
  {
    phase: 'Groundwork',
    duration: 'Weeks 3-6',
    activities: [
      'Launched a page that explains the policies in plain terms',
      'Set up a system for publishing proof of payouts',
      'Wrote FAQs and content that set honest expectations',
      'Added the code that lets Google show star ratings in search results'
    ]
  },
  {
    phase: 'Getting the Word Out',
    duration: 'Weeks 7-12',
    activities: [
      'Articles and posts from the founder, in their own voice',
      'Launched a series of educational videos',
      'Told the stories of traders who had done well',
      'Got good reviews seen in more places'
    ]
  },
  {
    phase: 'Improving and Growing',
    duration: 'Ongoing',
    activities: [
      'Made every email and message tell the same story',
      'Built a small site for tracking payouts',
      'Kept testing ways to turn more visitors into customers',
      'Kept watching reviews and forums for problems'
    ]
  }
]

const challenges = [
  {
    title: 'People Saw the Brand Differently Everywhere',
    description: 'Negative comments on forums and review sites made people doubt the company right when they were about to buy'
  },
  {
    title: 'Too Many Support Requests',
    description: 'Expectations were unclear, so 40% of new signups needed support within their first 7 days'
  },
  {
    title: 'People Quit Before Paying',
    description: 'Plenty of people knew the brand, but 62% abandoned their cart because they were not sure they could trust it'
  },
  {
    title: 'Others Were Telling Their Story',
    description: 'Competitors and critics were defining what the brand stood for instead of the company itself'
  }
]

const solutions = [
  {
    category: 'Fixing What Shows Up on Google',
    tactics: [
      'Added the code that lets Google show star ratings next to the brand in search results',
      'Built pages comparing the brand to competitors, which ranked for searches people make right before buying',
      'Wrote a ready-to-use FAQ playbook for when bad news hits',
      'Made sure searches like "is TopTier Trader legit" led to honest, clear answers'
    ]
  },
  {
    category: 'Content People Could Trust',
    tactics: [
      'Launched a video series where the founder talks about trading psychology',
      'Wrote a step-by-step walkthrough showing exactly how payouts work',
      'Told the stories of real traders, with proof they were genuine',
      'Published monthly reports on how the platform was performing'
    ]
  },
  {
    category: 'Helping More Visitors Become Customers',
    tactics: [
      'Added notes at checkout explaining what happens if things go wrong',
      'Showed the live status of the platform on the site',
      'Set honest expectations during signup so there were no surprises',
      'Added trust badges backed by proof anyone could check'
    ]
  }
]

const results = {
  early: [
    { metric: 'Visits from unpaid search', change: '+96%', period: 'First 45 days' },
    { metric: 'Searches for the brand by name', change: '+142%', period: 'First 60 days' },
    { metric: 'Support requests', change: '−27%', period: 'Per new signup' },
    { metric: 'People finishing checkout', change: '+34%', period: 'First 75 days' }
  ],
  longTerm: [
    { metric: 'Review rating', value: '4.8/5.0', context: 'Across 8 major review sites' },
    { metric: 'Search results for the brand name', value: '100%', context: 'Every page 1 result for the brand name is now one they control' },
    { metric: 'What each customer spends over time', value: '+28%', context: 'From teaching customers well and following up at the right times' },
    { metric: 'Customers leaving', value: '−19%', context: 'More customers stayed past their first 90 days' }
  ]
}

export default function CaseStudyTopTier() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO
        title="TopTier Trader: Reputation Repaired, Growth Built"
        description="How TaqHaus helped TopTier Trader repair its reputation, grow searches for the brand by name by 142%, and turn that trust into steady growth."
        keywords="reputation management case study, brand perception, review management, trading platform marketing, fintech case study"
        canonical="/case-studies/toptier-trader"
        ogImage="/images/og/case-toptier-trader.png"
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
            <span className="text-neutral-light">TopTier Trader</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold uppercase tracking-wider">
              Reputation and Growth
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              How TopTier Trader Repaired Its Reputation and Built Steady Growth
            </h1>

            <p className="mt-6 text-xl text-neutral-light/80 max-w-3xl">
              People did not trust the brand enough to buy. We helped them tell their own story,
              back it up with proof, and turn that trust into customers.
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
                <p className="text-neutral-light/80">Growth-Stage (Series A)</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/80 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Time Working Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-light/80">12+ Months (Ongoing)</p>
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
              People Knew the Brand. They Just Did Not Trust It.
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              TopTier Trader came to us well known but with a serious problem: other people were telling
              their story for them. Forums, review sites, and social media painted a confusing picture
              that put buyers off and buried their support team in questions.
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
                  "People knew who we were, but they didn't trust us enough to sign up. We needed to take back the story being told about us."
                </blockquote>
                <p className="mt-4 text-sm uppercase tracking-wider text-accent/80">
                  — Head of Marketing, TopTier Trader
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
              Take Back the Story, Then Turn Trust into Customers
            </h2>
            <p className="mt-6 text-lg text-neutral-light/80 max-w-3xl">
              We worked on three things: making sure searches about the brand led to honest answers,
              publishing content that proves the company does what it says, and building trust into
              every step of buying. We only tracked things that lead to actual sales.
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
                      <Target className="h-6 w-6 text-accent" />
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
              90 Days to Build, Then Keep It Going
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
              Trust Came Back, and Growth Followed
            </h2>
          </motion.div>

          {/* Early Results */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">First 75 Days</h3>
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
            <h3 className="text-2xl font-semibold text-center mb-8">Longer Term, Over 6 to 12 Months</h3>
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
                    <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Tell Your Own Story</h4>
                    <p className="text-sm text-neutral-light/70">
                      The company took back its own story, backed by proof anyone could check
                    </p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Teach, Do Not Pitch</h4>
                    <p className="text-sm text-neutral-light/70">
                      Content that explains how things work earned trust and answered doubts before they became objections
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Proof at Every Step</h4>
                    <p className="text-sm text-neutral-light/70">
                      Reasons to trust the company were built into every step, from first search to checkout
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentSlug="/case-studies/toptier-trader" count={2} />

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
              Is Someone Else Telling Your Story?
            </h2>
            <p className="mt-6 text-xl text-neutral-light/80">
              We will look at what people find when they search your name and tell you plainly what we would fix.
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
