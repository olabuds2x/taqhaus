import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { TrendingUp, DollarSign, Target, Users, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '+320%', label: 'Growth in visits from unpaid search', icon: TrendingUp },
  { value: '−60%', label: 'Average cost to win each customer', icon: DollarSign },
  { value: '+89%', label: 'Trial users who became paying customers', icon: Target },
  { value: '247%', label: 'Return on what they spent on ads', icon: Users }
]

const timeline = [
  {
    phase: 'Checking the Site',
    duration: 'Weeks 1-2',
    activities: [
      'Checked the site for problems that hold it back on Google and found 47 serious ones',
      'Compared them to competitors and found 12 groups of search terms nobody was covering',
      'Traced where buyers gave up and found 63% quit at the trial signup'
    ]
  },
  {
    phase: 'Quick Fixes',
    duration: 'Weeks 3-6',
    activities: [
      'Fixed the technical problems (slow pages, missing code Google reads, poor mobile experience)',
      'Launched 8 pages comparing the product to competitors, aimed at people ready to buy',
      'Cut the trial signup from 5 steps to 2'
    ]
  },
  {
    phase: 'Publishing Steadily',
    duration: 'Weeks 7-16',
    activities: [
      'Published 24 articles that show the product solving the problems people search for',
      'Built groups of related articles around 4 main uses of the product, so Google sees them as the expert',
      'Linked the articles together so readers and Google can find everything'
    ]
  },
  {
    phase: 'Growing and Improving',
    duration: 'Months 5-6',
    activities: [
      'Started paid search ads aimed at people ready to buy',
      'Tested different versions of the pricing page (17% more people converted)',
      'Expanded the writing to 6 more groups of search terms'
    ]
  }
]

const challenges = [
  {
    title: 'Buyers Could Not Find Them',
    description: 'For the searches that bring in paying customers, they sat on page 5 of Google while competitors filled page 1. Nobody searched for them by name except existing customers.'
  },
  {
    title: 'Growth That Cost Too Much',
    description: 'They depended on paid ads, which pushed the cost of winning each customer to $340. Every new customer felt like a battle, not a system.'
  },
  {
    title: 'People Quit Before Signing Up',
    description: 'The trial signup was complicated and the product was not explained clearly, so 63% of interested visitors left before converting.'
  },
  {
    title: 'A Blog That Did Not Sell',
    description: "They had a blog, but it was not written around what buyers search for or what the product does. The traffic it brought did not turn into customers."
  }
]

const solutions = [
  {
    category: 'Fixing the Site Itself',
    tactics: [
      'Made pages load faster (from 1.8s down to 0.6s)',
      'Added the code that helps Google understand and display the product and its reviews',
      'Improved the mobile experience and fixed the speed measures Google ranks by',
      'Cleaned up page addresses so Google does not see duplicate pages'
    ]
  },
  {
    category: 'Writing Content That Sells',
    tactics: [
      'Pages comparing the product to every major competitor',
      'Articles written around the specific jobs customers use the product for',
      'Step-by-step tutorials and guides for connecting the product to other tools',
      'Groups of related articles, all linking to the product pages'
    ]
  },
  {
    category: 'Turning Visitors into Customers',
    tactics: [
      'Cut the trial signup from 5 steps to 2',
      'Tested pricing page versions with customer reviews and logos added',
      'Showed an offer to visitors about to leave the page',
      'A series of emails for trial users to help them get value and upgrade'
    ]
  }
]

const results = {
  early: [
    { metric: '+87%', description: 'More visits from unpaid search in the first 75 days' },
    { metric: '14', description: 'Search terms moved to page 1 of Google' },
    { metric: '−18%', description: 'Fewer people quitting the trial signup' },
    { metric: '+34%', description: 'More trial users becoming paying customers' }
  ],
  longTerm: [
    { metric: '+320%', description: 'Total growth in visits from unpaid search' },
    { metric: '−60%', description: 'Lower average cost to win each customer' },
    { metric: '32', description: 'Page 1 rankings for searches people make when ready to buy' },
    { metric: '$1.2M+', description: 'Revenue that unpaid search played a part in' }
  ]
}

export default function CaseStudySaaS() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="SaaS Case Study: From Page 5 of Google to Page 1"
        description="How we helped a B2B software company grow visits from unpaid search by 320% and cut the cost of winning each customer by 60% in 6 months."
        keywords="SaaS SEO case study, B2B SaaS marketing, reduce customer acquisition cost, organic traffic growth, conversion optimization"
        canonical="/case-studies/saas-startup"
        ogImage="/images/og/case-saas-startup.png"
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
              From Page 5 of Google to Page 1 in 6 Months
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a B2B software company stopped depending on paid ads and started winning customers from search instead.
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
          <h2 className="text-3xl font-semibold text-center">What We Did</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            Three things: fix the site itself, write content that buyers actually search for, and make signing up easier.
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
          <h2 className="text-3xl font-semibold text-center">What We Did, and When</h2>
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
              <h3 className="text-xl font-semibold">We Picked Battles Worth Winning</h3>
              <p className="mt-3 text-neutral-light/80">
                We went after the searches buyers make when ready to spend, in spots where competitors were weak. Every article was chosen for its chance of bringing in revenue.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">We Fixed the Site Before Writing</h3>
              <p className="mt-3 text-neutral-light/80">
                We repaired the underlying problems first. A fast, well-built site converted 2x better than the broken one it replaced.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Every Page Had a Job</h3>
              <p className="mt-3 text-neutral-light/80">
                Every page had a clear next step and a path to the trial. The writing was not just there to bring visitors. It was built to turn readers into customers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">We Kept Testing</h3>
              <p className="mt-3 text-neutral-light/80">
                Monthly tests on the pricing pages, trial signup, and emails. Small wins added up to big improvements in how many visitors became customers.
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
          <h2 className="text-3xl md:text-4xl font-semibold">Spending Too Much on Ads?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Tell us where your customers come from now. We will tell you plainly what we would change.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-4 font-semibold shadow-[0_12px_32px_rgba(233,122,31,0.33)]" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a free 20-minute call
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
