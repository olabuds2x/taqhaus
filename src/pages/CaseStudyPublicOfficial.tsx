import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { Shield, TrendingUp, Users, Eye, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '+127%', label: 'Positive Sentiment Coverage', icon: TrendingUp },
  { value: '5x', label: 'Social Media Engagement Growth', icon: Users },
  { value: '92%', label: 'Narrative Control on Page 1', icon: Shield },
  { value: '+210%', label: 'Owned Channel Reach', icon: Eye }
]

const timeline = [
  {
    phase: 'Perception Audit',
    duration: 'Week 1',
    activities: [
      'SERP analysis identifying negative narratives ranking on page 1',
      'Social listening to map sentiment and emerging themes',
      'Stakeholder interviews to understand policy priorities'
    ]
  },
  {
    phase: 'Narrative Foundation',
    duration: 'Weeks 2-4',
    activities: [
      'Developed message pillars aligned with platform',
      'Created authoritative content hub with policy positions',
      'Optimized knowledge panel and biographical information'
    ]
  },
  {
    phase: 'Reputation Build',
    duration: 'Weeks 5-8',
    activities: [
      'Published issue-focused content targeting constituent concerns',
      'Coordinated press releases with organic content',
      'Built endorsement and testimonial architecture'
    ]
  },
  {
    phase: 'Campaign Readiness',
    duration: 'Weeks 9-12',
    activities: [
      'Launched constituent engagement campaigns',
      'Established rapid response protocols',
      'Scaled social presence across platforms'
    ]
  }
]

const challenges = [
  {
    title: 'Fragmented Online Presence',
    description: 'Multiple outdated websites, inconsistent messaging, and no centralized source of truth for policy positions.'
  },
  {
    title: 'Negative Search Results',
    description: 'Opposition research and critical coverage dominated page 1 search results for branded queries.'
  },
  {
    title: 'Low Digital Engagement',
    description: 'Minimal social media presence and limited direct communication with constituents online.'
  },
  {
    title: 'No Rapid Response Capability',
    description: 'No system in place to address emerging narratives or respond to criticism in real-time.'
  }
]

const solutions = [
  {
    category: 'Digital Infrastructure',
    tactics: [
      'Consolidated web presence with authoritative policy hub',
      'Knowledge panel optimization and biographical accuracy',
      'Technical SEO foundation for all owned properties',
      'Social media account verification and optimization'
    ]
  },
  {
    category: 'Narrative Control',
    tactics: [
      'Issue pages targeting constituent search behavior',
      'Press release syndication strategy',
      'Endorsement and testimonial content',
      'Counter-narrative content addressing criticism'
    ]
  },
  {
    category: 'Engagement Systems',
    tactics: [
      'Multi-platform social media strategy',
      'Email list building and constituency communications',
      'Town hall and event promotion',
      'Rapid response monitoring and protocols'
    ]
  }
]

const results = {
  early: [
    { metric: '8', description: 'Page 1 positions for key queries in 60 days' },
    { metric: '+85%', description: 'Positive sentiment in search results' },
    { metric: '3.2K', description: 'New email subscribers' },
    { metric: '+140%', description: 'Average social engagement rate' }
  ],
  longTerm: [
    { metric: '+127%', description: 'Positive sentiment coverage' },
    { metric: '5x', description: 'Social media engagement growth' },
    { metric: '92%', description: 'Owned narrative control on page 1' },
    { metric: '18K+', description: 'Constituent email list size' }
  ]
}

export default function CaseStudyPublicOfficial() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="Public Official Case Study - Reputation Management & Digital Strategy"
        description="How we helped a public official rebuild their digital reputation, control search narratives, and engage constituents before campaign season."
        keywords="political reputation management, public official marketing, narrative control, political SEO, constituent engagement"
        canonical="/case-studies/public-official"
      />
      {/* Hero Section */}
      <section className="py-16 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-light/70 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-neutral-light">Public Official</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <span className="text-sm uppercase tracking-[0.35em] text-accent/80">Case Study</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Repositioned Digital Image Before Campaign Season
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a public official rebuilt their online reputation, controlled the narrative, and engaged constituents ahead of a competitive election.
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
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Role</h3>
              <p className="mt-2 text-xl font-semibold">Elected Official</p>
              <p className="mt-1 text-neutral-light/70">Seeking re-election</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Context</h3>
              <p className="mt-2 text-xl font-semibold">Competitive Race</p>
              <p className="mt-1 text-neutral-light/70">High-stakes election cycle</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Duration</h3>
              <p className="mt-2 text-xl font-semibold">12 Weeks</p>
              <p className="mt-1 text-neutral-light/70">Pre-campaign season</p>
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
              "They helped us take back control of our narrative. When voters searched for me, they finally saw the real story—not the opposition's spin."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent/80">
              — Anonymous, Elected Official
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">The Solution</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            A comprehensive reputation management strategy combining search optimization, narrative control, and constituent engagement.
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
            <h3 className="text-xl font-semibold text-accent/90 mb-6">First 60 Days</h3>
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
            <h3 className="text-xl font-semibold text-accent/90 mb-6">12-Week Impact</h3>
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
              <h3 className="text-xl font-semibold">Rapid SERP Control</h3>
              <p className="mt-3 text-neutral-light/80">
                We displaced negative content by publishing authoritative, optimized pages that ranked for branded and issue-based queries.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Coordinated Messaging</h3>
              <p className="mt-3 text-neutral-light/80">
                Synchronized press releases, social media, and website content to ensure consistent narrative across all touchpoints.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Constituent Engagement</h3>
              <p className="mt-3 text-neutral-light/80">
                Built direct channels to communicate with voters, reducing reliance on traditional media gatekeepers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Proactive Reputation Defense</h3>
              <p className="mt-3 text-neutral-light/80">
                Established monitoring and rapid response systems to address emerging narratives before they gained traction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentSlug="/case-studies/public-official" count={2} />

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Take Control of Your Narrative?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Let's build a reputation strategy that protects and amplifies your message.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-4 font-semibold shadow-[0_12px_32px_rgba(233,122,31,0.33)]" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Confidential Consultation
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
