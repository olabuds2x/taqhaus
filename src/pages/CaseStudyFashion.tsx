import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { TrendingUp, Mail, ShoppingCart, Users, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '$57K', label: 'Revenue from email in 90 days', icon: Mail },
  { value: '+42%', label: 'More people opening the emails', icon: TrendingUp },
  { value: '+18%', label: 'More people clicking through to the shop', icon: Users },
  { value: '34%', label: 'Customers who came back to buy again', icon: ShoppingCart }
]

const timeline = [
  {
    phase: 'Looking at the List',
    duration: 'Week 1',
    activities: [
      'Went through the existing email list (12K subscribers, fewer than 15% opening or clicking)',
      'Found ways to group subscribers by what they had bought and browsed',
      'Mapped the path a customer takes from first hearing of the brand to buying again'
    ]
  },
  {
    phase: 'Cleaning Up',
    duration: 'Weeks 2-3',
    activities: [
      'Cleaned the list and stopped emailing people who never opened anything',
      'Set up groups based on what each subscriber actually does',
      'Designed email templates that match the brand and sell well'
    ]
  },
  {
    phase: 'Setting Up Automatic Emails',
    duration: 'Weeks 4-6',
    activities: [
      'A welcome series (3 emails) that 51% of people opened',
      'Emails to people who browsed but left, recovering 12% of lost carts',
      'Follow-up emails after a purchase that bring people back to buy again',
      'A campaign that wins back customers who had gone quiet'
    ]
  },
  {
    phase: 'Sending More',
    duration: 'Weeks 7-12',
    activities: [
      'Weekly emails with seasonal offers',
      'A VIP group with early access to new collections',
      'Text messages at the moments people are most likely to buy',
      'Tested subject lines, buttons, and send times against each other'
    ]
  }
]

const challenges = [
  {
    title: 'Email Made Almost No Money',
    description: 'Email was an afterthought: the same generic message to everyone, and few people opened it. Nothing automatic, no grouping of subscribers.'
  },
  {
    title: 'People Left Full Carts Behind',
    description: '68% of visitors added items to cart but never checked out, and there was no follow-up to recover those lost sales.'
  },
  {
    title: 'Customers Bought Once and Vanished',
    description: 'Paid ads brought in plenty of new customers, but they bought once and disappeared.'
  },
  {
    title: 'Everyone Got the Same Emails',
    description: "A brand new customer got the same emails as a loyal big spender. Nothing changed based on where someone was in their relationship with the brand."
  }
]

const solutions = [
  {
    category: 'Setting Up the System',
    tactics: [
      'Moved them to Klaviyo, an email platform, and connected it to their Shopify shop',
      'Grouped subscribers by how often they buy, how much they spend per order, and what they buy',
      'Emails that show each person products picked for them',
      'Technical settings that keep the emails out of spam folders'
    ]
  },
  {
    category: 'Emails That Send Themselves',
    tactics: [
      'A welcome series introducing the brand and its bestsellers',
      'Emails to people who left a cart or browsed without buying, showing the exact items they looked at',
      'Thank-you emails after a purchase that also suggest matching items',
      'Emails to win back customers who had not bought in 60 to 90 days'
    ]
  },
  {
    category: 'Regular Campaigns',
    tactics: [
      'Seasonal offers with clear end dates and limited stock',
      'Early access to new collections for VIP customers only',
      'Helpful emails on styling and fabric care',
      'Customer photos and reviews inside the emails'
    ]
  }
]

const results = {
  early: [
    { metric: '$18K', description: 'Revenue from email in the first 30 days' },
    { metric: '51%', description: 'Of people opened the welcome emails' },
    { metric: '12%', description: 'Of abandoned carts were recovered' },
    { metric: '+28%', description: 'Growth in the subscriber list' }
  ],
  longTerm: [
    { metric: '$57K', description: 'Total revenue from email in 90 days' },
    { metric: '+42%', description: 'More people opening the emails on average' },
    { metric: '34%', description: 'Of customers came back to buy again' },
    { metric: '27%', description: 'Of all revenue now comes from email' }
  ]
}

export default function CaseStudyFashion() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="Fashion Brand Case Study: $57K in 90 Days from Email"
        description="How we helped a fashion brand make $57K in 90 days from email, using automatic emails sent at the right moments and a properly organised list."
        keywords="email marketing case study, Klaviyo automation, e-commerce email strategy, cart abandonment recovery, customer retention"
        canonical="/case-studies/fashion-brand"
        ogImage="/images/og/case-fashion-brand.png"
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
              $57K in 90 Days from Email
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a fashion brand turned email from an afterthought into the channel that earns them the most for what they spend on it.
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
          <h2 className="text-3xl font-semibold text-center">What We Did</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            We rebuilt their email from scratch: automatic emails sent at the right moments, to the right groups of subscribers.
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
              <h3 className="text-xl font-semibold">Different Emails for Different People</h3>
              <p className="mt-3 text-neutral-light/80">
                We stopped treating all subscribers the same. Loyal customers got early access, new subscribers learnt about the brand, quiet customers got offers to come back.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Emails That Run Themselves</h3>
              <p className="mt-3 text-neutral-light/80">
                The welcome, abandoned cart, and after-purchase emails ran automatically around the clock while we worked on the bigger campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Emails That Looked Like the Brand</h3>
              <p className="mt-3 text-neutral-light/80">
                Every email matched the brand: clean design, clear writing, and photography that fit the premium feel.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Testing for Revenue, Not Vanity</h3>
              <p className="mt-3 text-neutral-light/80">
                We kept testing subject lines, send times, and buttons. Every test aimed to increase revenue per email, not just how many people opened them.
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
          <h2 className="text-3xl md:text-4xl font-semibold">Is Your Email List Just Sitting There?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Tell us about your list and your shop. We will tell you plainly what it could be earning.
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
