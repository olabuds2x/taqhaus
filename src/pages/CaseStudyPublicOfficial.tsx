import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { Shield, TrendingUp, Users, Eye, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import RelatedCaseStudies from '@/components/RelatedCaseStudies'

const keyMetrics = [
  { value: '+127%', label: 'More positive coverage in search results', icon: TrendingUp },
  { value: '5x', label: 'Growth in likes, comments, and shares on social media', icon: Users },
  { value: '92%', label: 'Of page 1 search results now tell their story', icon: Shield },
  { value: '+210%', label: 'Reach on their own site, email, and social accounts', icon: Eye }
]

const timeline = [
  {
    phase: 'Seeing What Voters See',
    duration: 'Week 1',
    activities: [
      'Searched their name and listed every negative story sitting on page 1 of Google',
      'Watched social media to see what people were saying and what topics were building',
      'Talked with their team to understand which policies mattered most to them'
    ]
  },
  {
    phase: 'Building the Story',
    duration: 'Weeks 2-4',
    activities: [
      'Agreed the handful of core messages everything would be built around',
      'Built a single official site laying out their positions on each issue',
      'Fixed the information box Google shows about them, and their biography details across the web'
    ]
  },
  {
    phase: 'Earning Back Trust',
    duration: 'Weeks 5-8',
    activities: [
      'Published pages on the issues voters in their area actually care about',
      'Timed press releases and website content to back each other up',
      'Set up a place for endorsements and supporter statements'
    ]
  },
  {
    phase: 'Getting Ready for the Race',
    duration: 'Weeks 9-12',
    activities: [
      'Launched campaigns to talk directly with voters',
      'Set up a system for responding fast when stories break',
      'Grew their presence across social media platforms'
    ]
  }
]

const challenges = [
  {
    title: 'A Scattered Online Presence',
    description: 'Several outdated websites saying different things, and no single official place stating where they stood on the issues.'
  },
  {
    title: 'Bad News at the Top of Google',
    description: 'When people searched their name, page 1 was filled with opposition material and critical coverage.'
  },
  {
    title: 'Little Contact with Voters Online',
    description: 'Barely any social media presence and almost no direct line to the people they represent.'
  },
  {
    title: 'No Way to Respond Fast',
    description: 'When a damaging story started spreading, there was no system for answering it quickly.'
  }
]

const solutions = [
  {
    category: 'One Official Home Online',
    tactics: [
      'Replaced the scattered sites with one official site stating their positions',
      'Corrected the information box Google shows about them and their biography details',
      'Fixed the technical problems holding their sites back on Google',
      'Got their social media accounts verified and properly set up'
    ]
  },
  {
    category: 'Telling Their Own Story',
    tactics: [
      'Pages on each issue, written around what local voters actually search for',
      'A plan for getting press releases picked up and republished',
      'Endorsements and statements from supporters',
      'Content that answers the criticism directly, with their side of the story'
    ]
  },
  {
    category: 'Talking with Voters',
    tactics: [
      'A plan for each social media platform',
      'Building an email list and writing regularly to constituents',
      'Promoting town halls and local events',
      'Watching for new stories and a set process for responding fast'
    ]
  }
]

const results = {
  early: [
    { metric: '8', description: 'Page 1 spots on Google for the searches that mattered, within 60 days' },
    { metric: '+85%', description: 'More positive results when people searched their name' },
    { metric: '3.2K', description: 'New email subscribers' },
    { metric: '+140%', description: 'More likes, comments, and shares on average' }
  ],
  longTerm: [
    { metric: '+127%', description: 'More positive coverage in search results' },
    { metric: '5x', description: 'Growth in social media likes, comments, and shares' },
    { metric: '92%', description: 'Of page 1 search results now tell their story' },
    { metric: '18K+', description: 'Voters on the email list' }
  ]
}

export default function CaseStudyPublicOfficial() {
  return (
    <div className="min-h-screen bg-dark pt-16 text-white">
      <SEO
        title="Public Official: Reputation Rebuilt Before a Campaign"
        description="How we helped a public official fix what voters found when searching their name, tell their own story, and reach voters directly before campaign season."
        keywords="political reputation management, public official marketing, narrative control, political SEO, constituent engagement"
        canonical="/case-studies/public-official"
        ogImage="/images/og/case-public-official.png"
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
              A Reputation Rebuilt Before Campaign Season
            </h1>
            <p className="mt-4 text-lg text-neutral-light/80 max-w-3xl">
              How a public official fixed what voters found when searching their name, got their own story heard, and built direct lines to voters ahead of a close election.
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
              "They helped us take back control of our narrative. When voters searched for me, they finally saw the real story, not the opposition's spin."
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
          <h2 className="text-3xl font-semibold text-center">What We Did</h2>
          <p className="mt-4 text-center text-neutral-light/80 max-w-2xl mx-auto">
            Three things: fix what shows up when people search their name, tell their story in their own words, and open direct lines to voters.
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
              <h3 className="text-xl font-semibold">We Pushed the Bad News Down</h3>
              <p className="mt-3 text-neutral-light/80">
                We published well-built official pages that ranked for searches of their name and the local issues, pushing the negative results down the page.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">One Story, Everywhere</h3>
              <p className="mt-3 text-neutral-light/80">
                Press releases, social media, and the website all said the same thing at the same time, so the story stayed consistent wherever voters found it.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">A Direct Line to Voters</h3>
              <p className="mt-3 text-neutral-light/80">
                We built channels that reach voters directly, so the message no longer depended on whether the press chose to carry it.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-6">
              <h3 className="text-xl font-semibold">Answering Before Stories Spread</h3>
              <p className="mt-3 text-neutral-light/80">
                We set up monitoring and a fast response process, so new stories were answered before they took hold.
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
          <h2 className="text-3xl md:text-4xl font-semibold">Worried About What People Find When They Search Your Name?</h2>
          <p className="mt-4 text-lg text-neutral-light/80">
            Tell us what is out there. We will tell you plainly what can be done about it. Everything stays confidential.
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
