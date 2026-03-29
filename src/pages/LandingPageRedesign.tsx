import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */

const painPoints = [
  {
    title: 'No Strategy, Just Tactics',
    body: "You're running ads, posting content, and sending emails — but nothing connects. There's no system. No funnel. No compounding.",
    icon: '🔀',
  },
  {
    title: 'Invisible Online',
    body: "Your competitors show up on Google and AI search results. You don't. Your website looks fine but generates zero inbound leads.",
    icon: '👻',
  },
  {
    title: 'Agency Fatigue',
    body: "You've hired agencies before. You got reports full of impressions and vanity metrics. What you didn't get was revenue.",
    icon: '📊',
  },
]

const servicePillars = [
  {
    title: 'Strategy & Consulting',
    description: 'Marketing audits, GTM strategy, competitive intelligence, and ongoing advisory. Think fractional CMO — senior-level thinking without the full-time salary.',
    tags: ['Growth Strategy', 'Market Positioning', 'Go-to-Market', 'Fractional CMO'],
    featured: true,
  },
  {
    title: 'Digital Marketing Execution',
    description: 'Email, SEO content, paid media (Meta, Google, LinkedIn, TikTok), and CRO. The full funnel, executed and measured.',
    tags: ['SEO', 'Paid Media', 'Email', 'CRO'],
  },
  {
    title: 'Social Media & Brand',
    description: 'Social media management, brand identity, content creation, reputation management, and audience growth. We build the presence and manage the conversation.',
    tags: ['Social Media', 'Brand Identity', 'Content', 'Reputation'],
  },
  {
    title: 'Websites & Digital Assets',
    description: "SEO-engineered websites, landing pages, and ongoing site management. Built to rank, convert, and scale — not just look pretty.",
    tags: ['Web Design', 'Landing Pages', 'SEO', 'Performance'],
  },
]

const metrics = [
  { value: '200%+', label: 'Referral Rate Increase', accent: false },
  { value: '70%', label: 'Churn Reduction', accent: false },
  { value: '22%', label: 'Avg. Conversion Rate Increase', accent: true },
]

const processSteps = [
  {
    number: '01',
    title: 'Strategy Call',
    description: 'We learn your business, audit your current marketing, and identify the highest-leverage opportunities. No pitch. No pressure.',
  },
  {
    number: '02',
    title: 'Custom Roadmap',
    description: 'We deliver a strategic plan with clear priorities, timelines, and expected outcomes. You approve the direction before we touch anything.',
  },
  {
    number: '03',
    title: 'Build & Execute',
    description: "We execute the strategy — whether that's a website, a campaign, a social media system, or the entire marketing stack.",
  },
  {
    number: '04',
    title: 'Measure & Optimize',
    description: "Monthly reporting, performance reviews, and continuous optimization. We don't set and forget.",
  },
]

const icpCards = [
  {
    title: 'Founders & CEOs',
    description: "You need a strategic marketing partner, not another freelancer. We think at the business level and execute at the channel level.",
  },
  {
    title: 'Professional Services',
    description: 'Law firms, financial advisors, consultants. Your expertise is your product. We make sure the right people find it, trust it, and buy it.',
  },
  {
    title: 'Politicians & Public Figures',
    description: "No website. No social presence. No way for constituents to engage. We build your digital presence from scratch and manage it year-round.",
  },
  {
    title: 'E-Commerce & DTC Brands',
    description: 'We build storefronts that rank and convert, then drive traffic through email, social, and paid.',
  },
  {
    title: 'In-House Teams',
    description: "Your team handles the day-to-day. You need a specialist to own one channel — SEO, email, social, paid — really well. That's us.",
  },
  {
    title: 'Growth-Stage SMBs',
    description: "You don't need enterprise budgets to get enterprise-grade marketing. You need the right partner.",
  },
]

const testimonials = [
  {
    quote: "TaqHaus transformed our digital presence completely. Our bookings increased by 340% in just 6 months. They understand our industry like no other agency we've worked with.",
    name: 'Michelle J.',
    title: 'CEO & Founder',
    industry: 'Travel & Tourism',
    location: 'United States',
    size: '11-50 Employees',
    timeline: 'Jan 2024 - Ongoing',
  },
  {
    quote: "In a highly competitive prop firm space, TaqHaus helped us stand out. Their SEO and Paid Ads strategy brought us a lot of traffic and valuable customers. The ROI has been exceptional.",
    name: 'David K.',
    title: 'Founder',
    industry: 'Proprietary Trading',
    location: 'United Kingdom',
    size: '51-200 Employees',
    timeline: 'Mar 2023 - Ongoing',
  },
  {
    quote: "TaqHaus completely transformed our e-commerce business. Their performance marketing and email automation drove massive growth in sales. Best investment we've made.",
    name: 'Sarah R.',
    title: 'Owner',
    industry: 'E-commerce',
    location: 'Canada',
    size: '1-10 Employees',
    timeline: 'Jun 2023 - Ongoing',
  },
  {
    quote: "TaqHaus ran our digital campaign with precision and integrity. Our social reach grew 10x and we won by a historic margin. Professional and delivers results.",
    name: 'James T.',
    title: 'Campaign Manager',
    industry: 'Political Campaign',
    location: 'United States',
    size: '11-50 Employees',
    timeline: 'Sep 2024 - Dec 2024',
  },
]

const faqs = [
  {
    q: 'What makes TaqHaus different from other marketing agencies?',
    a: "We combine consultancy-level strategic thinking with hands-on execution — so you get clarity AND results under one roof. Most agencies skip the strategy. Most consultants skip the execution. We do both.",
  },
  {
    q: 'Do you work with businesses that already have a website?',
    a: "Absolutely. Many of our best clients already have a website — they need someone to drive growth through it via SEO, email, content, and paid media. We build the marketing engine, whether you need a new site or not.",
  },
  {
    q: 'What industries do you specialize in?',
    a: "We work with founders and CEOs, professional services firms, e-commerce brands, politicians and public figures, and growth-stage SMBs. Our approach adapts to the industry; our strategic rigor stays the same.",
  },
  {
    q: 'How does pricing work?',
    a: "Every engagement is custom-scoped based on your goals, channels, and growth stage. We start with a strategic audit to understand your needs, then design a framework that delivers maximum ROI.",
  },
  {
    q: 'What does the strategy call involve?',
    a: "It's a 30-minute conversation where we learn your business, review your current marketing, and identify the highest-leverage growth opportunities. No pitch. No pressure. Just a real conversation about your business.",
  },
]

const caseStudies = [
  {
    title: 'SaaS Startup',
    result: '+320% Organic Traffic',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    href: '/case-studies/saas-startup',
  },
  {
    title: 'Fashion Brand',
    result: '$57K Revenue in 90 Days',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    href: '/case-studies/fashion-brand',
  },
  {
    title: 'Public Official',
    result: '5x Engagement Growth',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    href: '/case-studies/public-official',
  },
]

/* ═══════════════════════════════════════════════════════════════
   ANIMATION HELPERS
═══════════════════════════════════════════════════════════════ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
}

const stagger = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
})

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */

export default function LandingPageRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-noir-void text-ink font-body selection:bg-strike selection:text-white">
      <SEO
        title="TaqHaus — The Growth & Strategy Partner Behind Brands That Scale"
        description="TaqHaus is a marketing and business consultancy that develops the strategy and executes it end-to-end. Websites. SEO. Email. Paid campaigns. Brand. All under one roof."
        keywords="marketing consultancy, growth strategy, fractional CMO, SEO, digital marketing"
        canonical="/"
      />

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HEADER — Glassmorphic, minimal
      ═══════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/taqhaus-logo.png" alt="TaqHaus" className="h-14 sm:h-20 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-body font-medium">
            <Link to="/services" className="text-ink-secondary hover:text-white transition-colors">Services</Link>
            <Link to="/case-studies" className="text-ink-secondary hover:text-white transition-colors">Results</Link>
            <Link to="/portfolio" className="text-ink-secondary hover:text-white transition-colors">Portfolio</Link>
            <Link to="/about" className="text-ink-secondary hover:text-white transition-colors">About</Link>
            <Link to="/insights" className="text-ink-secondary hover:text-white transition-colors">Insights</Link>
          </nav>

          <a
            href={CALENDLY_URL}
            className="btn-strike text-sm px-6 py-2.5 hidden sm:inline-flex items-center gap-2"
          >
            Book a Strategy Call
          </a>
        </div>
      </header>

      <main>
        {/* ═══════════════════════════════════════════════════════
            SECTION 1: HERO
        ═══════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
          {/* Layered depth background */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-deep/40 via-noir-void to-noir-void" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(128,15,53,0.3),transparent)]" />

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-headline font-bold tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.08]">
                The Growth &<br />Strategy Partner.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-ink-secondary leading-relaxed font-body font-light max-w-lg">
                Behind brands that scale. TaqHaus is a marketing consultancy that develops the strategy and executes it end-to-end.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={CALENDLY_URL}
                  className="btn-strike inline-flex items-center gap-3 text-base"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/case-studies"
                  className="btn-ghost inline-flex items-center gap-3 text-base"
                >
                  See Our Results
                </Link>
              </div>
            </motion.div>

            {/* Right — Dashboard visual */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] as const }}
            >
              <div className="relative">
                {/* Ambient glow behind image */}
                <div className="absolute -inset-8 bg-gradient-to-tr from-maroon-deep/30 to-strike/10 rounded-3xl blur-3xl opacity-50" />
                <img
                  src="/images/hero-dashboard.png"
                  alt="Marketing analytics dashboard"
                  className="relative rounded-2xl w-full max-w-xl ml-auto shadow-2xl shadow-black/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2: LOGO BAR — Properly labeled
        ═══════════════════════════════════════════════════════ */}
        <section className="py-16 bg-noir-surface overflow-hidden">
          <p className="text-center text-ink-muted text-sm font-label mb-8">
            Tools & Platforms We Work With
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-noir-surface to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-noir-surface to-transparent z-10" />

            <div className="flex gap-16 animate-scroll-logos items-center">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-12 sm:gap-16 items-center shrink-0">
                  <img src="/logos/gymshark.jpg" alt="Gymshark" className="h-8 sm:h-10 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/sft.png" alt="SFT" className="h-10 sm:h-12 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/gtbank.png" alt="GTBank" className="h-10 sm:h-12 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/redtag.jpg" alt="redtag.ca" className="h-8 sm:h-10 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/zerofilter.jpg" alt="Zero Filter Co." className="h-12 sm:h-14 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/shopify.svg" alt="Shopify" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/stripe.svg" alt="Stripe" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/hubspot.svg" alt="HubSpot" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/mailchimp.svg" alt="Mailchimp" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/slack.svg" alt="Slack" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/notion.svg" alt="Notion" className="h-9 sm:h-11 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                  <img src="/logos/zapier.svg" alt="Zapier" className="h-8 sm:h-10 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3: PROBLEM AGITATION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-low">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                Sound Familiar?
              </p>
              <h2 className="font-headline font-bold text-white">
                You Don't Have a Marketing Problem.
                <br />
                <span className="text-ink-secondary">You Have a Systems Problem.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={pain.title}
                  className="rounded-2xl bg-noir-surface p-8 sm:p-10 group hover:bg-noir-high transition-colors duration-300"
                  {...stagger(index * 0.1)}
                >
                  <span className="text-3xl mb-6 block">{pain.icon}</span>
                  <h3 className="text-xl font-headline font-bold text-white mb-4">{pain.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed font-body">{pain.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4: SERVICE PILLARS — 2×2 Bento Grid
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-void">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                What We Do
              </p>
              <h2 className="font-headline font-bold text-white">
                Strategy First. Execution Included.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicePillars.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...stagger(index * 0.1)}
                >
                  <Link
                    to={`/services#${service.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                    className={`block rounded-2xl p-8 sm:p-10 group transition-colors duration-300 h-full ${
                      service.featured
                        ? 'bg-gradient-to-br from-maroon-deep/60 to-noir-low border border-maroon/20'
                        : 'bg-noir-low hover:bg-noir-high border-ghost'
                    }`}
                  >
                    {service.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-strike/10 text-strike text-xs font-label font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-strike" />
                        Core Offering
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-white mb-4 group-hover:text-blush transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ink-secondary text-sm leading-relaxed font-body mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-xs bg-white/5 text-ink-secondary rounded-lg border border-white/5 font-label">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 text-center" {...fadeUp}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-blush hover:text-white text-sm font-body font-medium transition-colors"
              >
                Explore all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 5: RESULTS / SOCIAL PROOF
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-low">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                The Numbers Speak
              </p>
              <h2 className="font-headline font-bold text-white">
                Real Systems. Real Results.
              </h2>
            </motion.div>

            {/* Metrics bar */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20"
              {...fadeUp}
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className={`text-4xl sm:text-5xl font-headline font-bold tracking-tighter ${metric.accent ? 'text-strike' : 'text-white'}`}>
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm text-ink-muted uppercase tracking-wider font-label">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Case studies grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {caseStudies.map((study, index) => (
                <motion.div key={study.title} {...stagger(index * 0.1)}>
                  <Link
                    to={study.href}
                    className="group block rounded-2xl overflow-hidden bg-noir-surface hover:bg-noir-high transition-colors duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-ink-muted uppercase tracking-wider font-label mb-2">{study.title}</p>
                      <p className="text-lg font-headline font-bold text-white">{study.result}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Testimonial slider */}
            <motion.div {...fadeUp}>
              <div className="bg-gradient-to-br from-noir-surface to-maroon-deep/20 rounded-3xl overflow-hidden border border-white/5">
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Left — Stats */}
                  <div className="p-8 border-b md:border-b-0 md:border-r border-white/5">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-3xl font-headline font-bold text-white">5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-strike" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4 text-sm font-label">
                      <div className="flex items-center gap-3 text-ink-secondary">
                        <span className="text-ink-muted">Industry:</span>
                        <span>{testimonials[currentTestimonial].industry}</span>
                      </div>
                      <div className="flex items-center gap-3 text-ink-secondary">
                        <span className="text-ink-muted">Location:</span>
                        <span>{testimonials[currentTestimonial].location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-ink-secondary">
                        <span className="text-ink-muted">Size:</span>
                        <span>{testimonials[currentTestimonial].size}</span>
                      </div>
                      <div className="flex items-center gap-3 text-ink-secondary">
                        <span className="text-ink-muted">Timeline:</span>
                        <span>{testimonials[currentTestimonial].timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right — Quote */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentTestimonial}
                        className="text-ink/80 text-lg leading-relaxed font-body mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        "{testimonials[currentTestimonial].quote}"
                      </motion.p>
                    </AnimatePresence>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-headline font-bold text-white text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-ink-muted font-label">{testimonials[currentTestimonial].title}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ink-muted hover:text-white hover:border-white/30 transition-colors"
                          aria-label="Previous testimonial"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                          onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ink-muted hover:text-white hover:border-white/30 transition-colors"
                          aria-label="Next testimonial"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial ? 'bg-strike w-8' : 'bg-white/15 hover:bg-white/30 w-2.5'
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 6: HOW WE WORK — 4-step process
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-void">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                How We Work
              </p>
              <h2 className="font-headline font-bold text-white">
                Simple Process. Serious Outcomes.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="rounded-2xl bg-noir-low p-8 group hover:bg-noir-high transition-colors duration-300"
                  {...stagger(index * 0.1)}
                >
                  <span className="text-strike text-sm font-label font-bold tracking-wider">{step.number}</span>
                  <h3 className="text-lg font-headline font-bold text-white mt-4 mb-3">{step.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed font-body">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 7: WHO WE WORK WITH — 6 ICP Cards
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-low">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                Who We Work With
              </p>
              <h2 className="font-headline font-bold text-white">
                Built for Leaders Who Take Growth Seriously.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {icpCards.map((icp, index) => (
                <motion.div
                  key={icp.title}
                  className="rounded-2xl bg-noir-surface p-8 group hover:bg-noir-high transition-colors duration-300"
                  {...stagger(index * 0.08)}
                >
                  <h3 className="text-lg font-headline font-bold text-white mb-3">{icp.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed font-body">{icp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 7B: ENGAGEMENT — Custom scoping
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-void">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                Partnership Frameworks
              </p>
              <h2 className="font-headline font-bold text-white mb-6">
                Every Engagement Is Scoped to Your Goals.
              </h2>
              <p className="text-ink-secondary text-lg max-w-2xl mx-auto mb-12 font-body">
                We don't do cookie-cutter packages. Every partnership starts with a strategy call where we diagnose your biggest opportunities and build a custom plan. You'll know exactly what you're getting and what it costs before committing to anything.
              </p>

              <div className="mt-10">
                <a
                  href={CALENDLY_URL}
                  className="btn-strike inline-flex items-center gap-3 text-base"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 8: FAQ
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-noir-low">
          <div className="max-w-2xl mx-auto">
            <motion.h2 className="text-2xl sm:text-3xl font-headline font-bold text-center text-white mb-12" {...fadeUp}>
              Questions?
            </motion.h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  className="rounded-xl bg-noir-surface overflow-hidden"
                  {...stagger(index * 0.05)}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors font-body"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-strike flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-ink-muted flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-ink-secondary leading-relaxed border-t border-white/5 pt-4 text-sm font-body">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 9: FINAL CTA
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-noir-void to-maroon-deep/30">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="font-headline font-bold text-white leading-tight">
                Ready to Stop Guessing
                <br />
                and Start Growing?
              </h2>
              <p className="mt-6 text-lg text-ink-secondary max-w-xl mx-auto font-body">
                Let's build the system that drives your next stage of growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  className="btn-strike inline-flex items-center justify-center gap-3 text-base"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="btn-ghost inline-flex items-center justify-center gap-3 text-base"
                >
                  Get a Free Audit
                </Link>
              </div>
              <p className="mt-8 text-sm text-ink-muted flex items-center justify-center gap-2 font-label">
                <span>🔒</span> Free audit. No obligation.
                <a href="mailto:info@taqhaus.com" className="text-blush hover:underline ml-2">
                  Prefer email?
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer className="bg-noir-lowest pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2 space-y-4">
              <img src="/taqhaus-logo.png" alt="TaqHaus" className="h-16 w-auto" />
              <p className="text-ink-secondary text-sm max-w-xs font-body">
                A marketing and business consultancy — strategy first, execution included.
              </p>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white text-sm font-headline font-bold mb-5">Services</h5>
              <ul className="space-y-3 text-sm text-ink-secondary font-body">
                <li><Link to="/services" className="hover:text-white transition-colors">Strategy & Consulting</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Social & Brand</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Web Design</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-white text-sm font-headline font-bold mb-5">Company</h5>
              <ul className="space-y-3 text-sm text-ink-secondary font-body">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="hidden lg:block">
              <h5 className="text-white text-sm font-headline font-bold mb-5">Connect</h5>
              <ul className="space-y-3 text-sm text-ink-secondary font-body">
                <li><a href="https://linkedin.com/company/taqhaus" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/taqhaus" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:info@taqhaus.com" className="hover:text-white transition-colors">info@taqhaus.com</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-muted tracking-wider uppercase font-label">
            <p>© 2026 TaqHaus. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
