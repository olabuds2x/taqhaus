import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SEO } from '@/components/SEO'
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  LineChart,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target
} from 'lucide-react'

const performanceStats = [
  { value: '+217%', label: 'Organic Traffic' },
  { value: '$2.4M+', label: 'Client Revenue Influenced' },
  { value: '94%', label: 'Retention Rate' }
]

const consultingPillars = [
  {
    title: 'Strategic Analysis',
    items: [
      'Marketing Audits & Growth Diagnostics',
      'Funnel & Conversion Strategy',
      'Market Positioning & Messaging Architecture'
    ]
  },
  {
    title: 'Leadership & Reputation',
    items: [
      'Leadership Branding & Thought Leadership Strategy',
      'Political & Executive Reputation Management'
    ]
  }
]

const consultingIdealFor = [
  '💼 Internal teams',
  '🎯 Executives managing public perception',
  '📈 High-growth brands needing clarity'
]

const executionPillars = [
  {
    title: 'Acquisition Systems',
    items: [
      'SEO & Authority Content Systems',
      'Paid Media (Google, Meta, LinkedIn)',
      'Social Media Strategy & Management'
    ]
  },
  {
    title: 'Retention & Optimization',
    items: [
      'Email Marketing & Lifecycle Automation',
      'Conversion Optimization',
      'AI-Powered Campaign Intelligence',
      'Brand Identity & Design'
    ]
  }
]

const executionIdealFor = [
  '🚀 Brands without in-house specialists',
  '📊 Teams wanting end-to-end performance',
  '🧠 Businesses seeking measurable ROI'
]

const caseStudies = [
  {
    title: 'SaaS Startup',
    headline: 'From Page 5 to Page 1 in 6 Months',
    metrics: ['320% traffic increase', '60% CAC reduction'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    href: '/case-studies/saas-startup'
  },
  {
    title: 'Fashion Brand',
    headline: '$57K in 90 Days from Email Automation',
    metrics: ['42% higher open rate', '18% higher CTR'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
    href: '/case-studies/fashion-brand'
  },
  {
    title: 'Public Official',
    headline: 'Repositioned Digital Image Before Campaign Season',
    metrics: ['Reputation rebuild', '5x engagement growth'],
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80',
    href: '/case-studies/public-official'
  },
  {
    title: 'TopTier Trader',
    headline: 'Stabilized Reputation and Grew Search Demand',
    metrics: ['+142% branded search', '+96% non-brand traffic'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    href: '/case-studies/toptier-trader'
  },
  {
    title: 'The Funded Trader (TFT)',
    headline: 'Scaled Qualified Trader Signups while Reducing CAC',
    metrics: ['+188% organic signups', '−34% CAC'],
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=80',
    href: '/case-studies/the-funded-trader'
  }
]

const testimonials = [
  {
    quote: 'Before TaqHaus, we were guessing. Now, our marketing and messaging are engineered for results.',
    author: 'Marcus Chen, CEO, Maverick SaaS'
  },
  {
    quote: 'They understand both perception and performance — critical for public office.',
    author: 'Anonymous, Elected Official'
  },
  {
    quote: 'TaqHaus didn’t just execute our campaigns — they reshaped our strategy.',
    author: 'Sarah Mitchell, Founder, Luxe Apparel Co.'
  }
]

const audiences = [
  {
    title: 'Growth-Stage Brands',
    description: 'Scaling organisations ready to convert demand into disciplined, repeatable revenue.'
  },
  {
    title: 'In-House Teams',
    description: 'Marketing and communications teams who need board-level direction and oversight.'
  },
  {
    title: 'Leaders & Public Figures',
    description: 'Executives and officials who must control narrative, perception, and influence at scale.'
  }
]

const pricingTiers = [
  {
    name: 'Starter (Foundation Plan)',
    price: '$2,500–$4,500/month',
    benefits: [
      'Strategic audit + 90-day command plan',
      'Organic foundation deployed inside 30 days',
      'Executive reporting cadence installed'
    ]
  },
  {
    name: 'Growth Accelerator Plan',
    price: '$5,000–$8,500/month',
    benefits: [
      'Advanced SEO & automation across core funnels',
      'Paid, email, and social programs synced under one dashboard',
      'Bi-weekly executive briefings + optimisation sprints'
    ]
  },
  {
    name: 'Dominance Partnership',
    price: '$10,000+/month',
    benefits: [
      'Full consulting + execution command center',
      'Cross-channel growth and influence stewardship',
      'Dedicated strategist pod + automation suite'
    ]
  }
]

const faqs = [
  {
    question: 'What makes TaqHaus different from a traditional agency?',
    answer:
      'We blend strategy and execution under one roof. You get consulting-level diagnostics paired with implementation teams that execute with precision and accountability.'
  },
  {
    question: 'Do you work with in-house teams or replace them?',
    answer:
      'Both. Many partners keep their internal teams and lean on us for audits, strategy, and oversight. Others engage our execution team to run critical initiatives end to end.'
  },
  {
    question: 'How do engagements begin?',
    answer:
      'Every partnership starts with a Strategic Audit. We evaluate growth levers, narrative, and infrastructure to build the roadmap and investment plan that fits your objectives.'
  }
]

const trustedLogos = [
  'TechFlow',
  'Maverick SaaS',
  'Luxe Apparel Co.',
  'Peak Performance',
  'GreenLeaf Organics',
  'Public Sector Partner'
]

const footerLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' }
]

const DEFAULT_EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1]

const inViewProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: DEFAULT_EASE },
  viewport: { once: true, amount: 0.25 }
})

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [isPaused])

  // Auto-scroll carousel
  useEffect(() => {
    if (isCarouselPaused) return

    const interval = window.setInterval(() => {
      setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length)
    }, 5000) // Change slide every 5 seconds

    return () => window.clearInterval(interval)
  }, [isCarouselPaused])

  // Scroll to active case study
  useEffect(() => {
    const container = document.getElementById('case-study-carousel')
    if (!container) return

    const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.85 : window.innerWidth < 768 ? 450 : 500
    const gap = window.innerWidth < 768 ? 24 : 32
    const scrollPosition = activeCaseStudy * (cardWidth + gap)

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }, [activeCaseStudy])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <SEO
        title="Marketing Consulting & Execution That Scales"
        description="We engineer growth that scales and influence that sticks. A marketing and influence consultancy helping ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation."
        keywords="marketing consulting, digital marketing agency, SEO services, paid media, growth marketing, brand strategy, reputation management, marketing execution, performance marketing, marketing automation"
        canonical="/"
      />
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-35"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
          >
            <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-black/80" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-accent/80">TaqHaus — Marketing. Consulting. Influence.</span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              We Engineer Growth That Scales and Influence That Sticks.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-light/80">
              A marketing and influence consultancy that helps ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="px-8 sm:px-10 py-5 rounded-full font-semibold text-sm sm:text-base shadow-[0_18px_45px_rgba(233,122,31,0.35)]"
              asChild
            >
              <Link to="/contact" aria-label="Request a Strategic Audit">
                <span className="hidden sm:inline">Request a Strategic Audit</span>
                <span className="sm:hidden">Request Audit</span>
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-5 rounded-full font-semibold text-base border-white/20 text-white hover:text-dark hover:bg-neutral-lighter/90"
              asChild
            >
              <a href={CALENDLY_URL} aria-label="Talk to a Strategist">
                Talk to a Strategist
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="absolute left-1/2 bottom-12 w-full max-w-5xl -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-black/70 p-6 backdrop-blur sm:grid-cols-3">
              {performanceStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-semibold text-accent">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-light/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-light/70">Trusted by brands and public figures across 6 industries</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {trustedLogos.map((logo) => (
              <div key={logo} className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-light/60 transition-all duration-300 hover:text-accent">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Most agencies chase clicks. Most consultants stop at slides.</span>
            <h2 className="mt-6 text-4xl font-semibold">We bridge both — clarity of consulting, power of execution.</h2>
            <p className="mt-6 text-neutral-light/80">
              TaqHaus operates as your Chief Growth & Influence Office. We interrogate the data, design the mandate, and command the execution so nothing gets lost between strategy and action.
            </p>
            <Button className="mt-8 px-8 py-4 rounded-full font-semibold shadow-[0_12px_32px_rgba(233,122,31,0.33)]" asChild>
              <a href="#services">
                See How Our Model Works
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6">
            <Card className="bg-dark-900/80 border-white/10 text-neutral-light">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <Layers className="h-6 w-6 text-accent" />
                  Integrated Command
                </CardTitle>
                <p className="text-neutral-light/70">Unified growth, media, and revenue operations under one accountable roadmap.</p>
              </CardHeader>
            </Card>
            <Card className="bg-dark-900/80 border-white/10 text-neutral-light">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  Reputation Safeguard
                </CardTitle>
                <p className="text-neutral-light/70">Proactive narrative steering to protect valuation, credibility, and stakeholder trust.</p>
              </CardHeader>
            </Card>
            <Card className="bg-dark-900/80 border-white/10 text-neutral-light">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <LineChart className="h-6 w-6 text-accent" />
                  Systems &gt; Campaigns
                </CardTitle>
                <p className="text-neutral-light/70">Repeatable, data-backed infrastructure replaces isolated sprints and vanity metrics.</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Model */}
      <section id="services" className="py-24 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">The TaqHaus Model™</span>
            <h2 className="mt-6 text-4xl font-semibold">Choose Your Growth Path</h2>
            <p className="mt-6 text-neutral-light/80">
              Whether you need strategy, execution, or both — TaqHaus gives you the clarity, systems, and performance to scale.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="bg-black/85 border border-white/10 text-neutral-light shadow-[0_25px_45px_rgba(13,13,13,0.45)]">
              <CardHeader className="space-y-5 text-left">
                <CardTitle className="flex flex-col gap-4 text-white text-2xl">
                  <span className="flex items-center gap-3 text-base uppercase tracking-[0.3em] text-accent/80">
                    01
                    <Sparkles className="h-5 w-5 text-accent" />
                    Strategic Consulting
                  </span>
                  Strategy, positioning, and clarity for in-house teams and leaders.
                </CardTitle>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">Clarity That Converts</p>
                  <p className="text-neutral-light/80 leading-relaxed">
                    Audits, strategy, and reputation management for leadership teams that need uncompromising direction.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-6 text-left">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">We Specialize In</p>
                  <div className="space-y-5">
                    {consultingPillars.map((pillar) => (
                      <div key={pillar.title}>
                        <p className="font-semibold text-neutral-lighter">{pillar.title}</p>
                        <ul className="mt-2 space-y-2 text-sm text-neutral-light/85">
                          {pillar.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">Ideal For</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-light/85">
                    {consultingIdealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/85 border border-white/10 text-neutral-light shadow-[0_25px_45px_rgba(13,13,13,0.45)]">
              <CardHeader className="space-y-5 text-left">
                <CardTitle className="flex flex-col gap-4 text-white text-2xl">
                  <span className="flex items-center gap-3 text-base uppercase tracking-[0.3em] text-accent/80">
                    02
                    <Rocket className="h-5 w-5 text-accent" />
                    Performance Execution
                  </span>
                  Full-funnel marketing implementation and optimization.
                </CardTitle>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">Precision in Every Channel</p>
                  <p className="text-neutral-light/80 leading-relaxed">
                    SEO, paid media, lifecycle, social, and AI optimization — all deployed with consulting-level oversight.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-6 text-left">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">We Deliver</p>
                  <div className="space-y-5">
                    {executionPillars.map((pillar) => (
                      <div key={pillar.title}>
                        <p className="font-semibold text-neutral-lighter">{pillar.title}</p>
                        <ul className="mt-2 space-y-2 text-sm text-neutral-light/85">
                          {pillar.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <ArrowRight className="mt-1 h-4 w-4 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">Ideal For</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-light/85">
                    {executionIdealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-dark-900/80 px-6 py-8 text-center text-neutral-light/85">
            <p className="text-lg">
              Not sure which path fits your brand? Start with a Strategic Audit — we’ll guide you.
            </p>
            <div className="mt-5">
              <Button className="rounded-full px-8 py-4 font-semibold shadow-[0_12px_32px_rgba(233,122,31,0.33)]" asChild>
                <Link to="/contact">Request a Strategic Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Proof That Strategy Outperforms Guesswork</span>
            <h2 className="mt-6 text-4xl font-semibold">Real Systems. Real Results.</h2>
            <p className="mt-4 text-neutral-light/70">Swipe to explore our case studies</p>
          </div>

          {/* Horizontal Scrolling Carousel - Mobile Optimized */}
          <div
            id="case-study-carousel"
            className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onTouchStart={() => setIsCarouselPaused(true)}
          >
            <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-900/70 w-[85vw] sm:w-[450px] md:w-[500px] flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-accent">{study.title}</p>
                      <p className="mt-2 text-xl sm:text-2xl font-semibold text-white line-clamp-2">{study.headline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-6 py-6">
                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-light/80"
                        >
                          <Target className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="whitespace-nowrap">{metric}</span>
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/15 text-white hover:text-dark hover:bg-neutral-lighter transition-all"
                      asChild
                    >
                      <Link to={study.href}>View Case Study</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeCaseStudy === index
                    ? 'w-8 bg-accent'
                    : 'w-2.5 bg-white/20 hover:bg-accent/40'
                  }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full border-white/15 text-white hover:text-dark hover:bg-neutral-lighter" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl font-semibold" {...inViewProps()}>
            Mandates We Steward
          </motion.h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeTestimonial].author}
              className="mt-16"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Card className="bg-black border-white/10 text-neutral-light px-8 py-10 shadow-[0_25px_45px_rgba(13,13,13,0.55)]">
                <CardHeader className="space-y-6">
                  <Quote className="mx-auto h-10 w-10 text-accent" />
                  <p className="text-xl md:text-2xl leading-relaxed text-neutral-light/85">
                    “{testimonials[activeTestimonial].quote}”
                  </p>
                </CardHeader>
                <CardContent className="text-sm uppercase tracking-[0.35em] text-accent/80">
                  {testimonials[activeTestimonial].author}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 w-8 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-accent' : 'bg-white/15 hover:bg-accent/40'}`}
                aria-label={`Show testimonial from ${testimonial.author}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold">Who We Work With</h2>
            <p className="mt-6 text-neutral-light/80">
              Whether you’re scaling revenue or reputation, we help you command both.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {audiences.map((audience) => (
              <Card key={audience.title} className="bg-dark-900/80 border-white/10 text-neutral-light">
                <CardHeader className="space-y-4">
                  <CardTitle className="text-xl text-white">{audience.title}</CardTitle>
                  <p className="text-neutral-light/70">{audience.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Partnership Frameworks</span>
            <h2 className="mt-6 text-4xl font-semibold">Clarity on Investment. Zero Ambiguity on Accountability.</h2>
            <p className="mt-6 text-neutral-light/80">
              Every engagement begins with a strategic audit defining growth levers, perception risks, and operational gaps. From there we activate the framework aligned to your mandate.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="bg-black border-white/10 text-neutral-light">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg uppercase tracking-[0.3em] text-accent/80">
                    {tier.name}
                  </CardTitle>
                  <p className="text-2xl font-semibold text-white">{tier.price}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 text-sm text-neutral-light/80">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                      {benefit}
                    </div>
                  ))}
                </CardContent>
                <div className="px-6 pb-6">
                  <Button className="w-full rounded-full px-6 py-3 font-semibold shadow-[0_10px_30px_rgba(233,122,31,0.32)]" asChild>
                    <a href={CALENDLY_URL}>Book a Consultation</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethos */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">The TaqHaus Ethos — Built for the Bold</span>
          <h2 className="mt-6 text-4xl font-semibold">We don’t chase trends. We build systems that outlast them.</h2>
          <p className="mt-6 text-neutral-light/80">
            TaqHaus was built for leaders who would rather define the market than follow it. Growth isn’t luck—it’s engineered through clarity, conviction, and disciplined execution.
          </p>
          <p className="mt-4 text-neutral-light/80">
            Every partnership is governed like a capital investment: transparent dashboards, accountable reporting, and measurable progress.
          </p>
          <p className="mt-4 text-neutral-light/80">
            If you’re bold enough to stop guessing and start scaling with intent—we’re ready.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-24 bg-gradient-to-b from-dark via-dark-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-white/10 bg-dark-900/80 backdrop-blur px-6 py-16 sm:px-8 lg:px-12 lg:py-20 text-center shadow-[0_25px_55px_rgba(13,13,13,0.45)]">
            <motion.div {...inViewProps()}>
              <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">
                Your Growth &amp; Influence, Engineered
              </span>
              <h2 id="final-cta-title" className="mt-6 text-4xl md:text-5xl font-semibold max-w-3xl mx-auto">
                Let's Build the System That Drives Your Next Stage of Growth.
              </h2>
              <p className="mt-6 text-lg text-neutral-light/80 max-w-2xl mx-auto">
                You've seen what reactive marketing gets you. Now it's time for something deliberate — a partnership designed for performance, influence, and long-term success.
              </p>
              <p className="mt-4 text-lg text-neutral-light/80 max-w-2xl mx-auto">
                Whether you're leading a brand, a team, or a movement, we'll give you the system that makes it unstoppable.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button
                  size="lg"
                  className="px-10 py-5 rounded-full font-semibold text-base shadow-[0_18px_45px_rgba(233,122,31,0.35)]"
                  asChild
                >
                  <Link to="/contact">
                    Request Your Strategic Audit
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-5 rounded-full font-semibold text-base border-white/20 text-white hover:text-dark hover:bg-neutral-lighter/90"
                  asChild
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Apply for Partnership
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-neutral-light/70 flex items-center justify-center gap-2 flex-wrap">
                <span aria-hidden="true">🔒</span> Free audit. No obligation.
                <a href="mailto:info@taqhaus.com" className="underline text-accent hover:text-accent/80 transition-colors ml-2">
                  Prefer email? info@taqhaus.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Questions, Answered</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const open = openFaq === index
              return (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-dark-900/80">
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <span className="ml-4 text-accent">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-neutral-light/80 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-neutral-light/70 text-sm">
            <div>
              © 2026 TaqHaus — Marketing. Consulting. Influence.
            </div>
            <nav className="flex flex-wrap gap-4 uppercase tracking-[0.2em]">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
