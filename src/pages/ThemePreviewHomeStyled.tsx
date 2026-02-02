import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button' // Keeping original Button component usage if compatible, or replacing with styled links? I'll use styled links/buttons to match Noir.
import { CALENDLY_URL } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card' // I'll likely inline styles or use these with special classes
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

// --- DATA CONSTANTS FROM HOME.TSX ---
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
        quote: "TaqHaus didn't just execute our campaigns — they reshaped our strategy.",
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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '/contact' }
]

const DEFAULT_EASE = [0.22, 0.61, 0.36, 1]

const inViewProps = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: DEFAULT_EASE },
    viewport: { once: true, amount: 0.25 }
})

export default function ThemePreviewHomeStyled() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [activeCaseStudy, setActiveCaseStudy] = useState(0)
    const [isCarouselPaused, setIsCarouselPaused] = useState(false)

    useEffect(() => {
        document.documentElement.classList.add('dark')
        return () => {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        if (isPaused) return
        const interval = window.setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => window.clearInterval(interval)
    }, [isPaused])

    useEffect(() => {
        if (isCarouselPaused) return
        const interval = window.setInterval(() => {
            setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length)
        }, 5000)
        return () => window.clearInterval(interval)
    }, [isCarouselPaused])

    useEffect(() => {
        const container = document.getElementById('case-study-carousel-styled')
        if (!container) return
        const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.85 : window.innerWidth < 768 ? 450 : 500
        const gap = window.innerWidth < 768 ? 24 : 32
        const scrollPosition = activeCaseStudy * (cardWidth + gap)
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
    }, [activeCaseStudy])

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // Theme Constants based on "Modern Noir"
    const theme = {
        bg: 'bg-[#24140f] text-white',
        bgLighter: 'bg-[#361e17]',
        bgDarker: 'bg-[#1a0f0b]',
        border: 'border-[#6b3c2e]',
        borderSubtle: 'border-[#4b2a20]',
        accent: 'bg-[#ff5724]',
        accentText: 'text-[#ff5724]',
        text: 'text-white',
        textMuted: 'text-[#ce9c8d]',
        card: 'rounded-lg bg-[#1c1514] border border-[#3a2c27]',
        btnPrimary: 'bg-[#ff5724] hover:bg-orange-600 text-white font-bold rounded shadow-[0_10px_30px_rgba(255,87,36,0.3)]',
        btnSecondary: 'bg-[#271e1b] hover:bg-[#322825] border border-[#3a2c27] text-white font-medium rounded'
    }

    return (
        <div className={`min-h-screen ${theme.bg} font-['Inter',sans-serif] selection:bg-[#ff5724] selection:text-white`}>
            <SEO
                title="Marketing Consulting & Execution That Scales"
                description="We engineer growth that scales and influence that sticks. A marketing and influence consultancy helping ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation."
                keywords="marketing consulting, digital marketing agency, SEO services, paid media, growth marketing, brand strategy, reputation management, marketing execution, performance marketing, marketing automation"
                canonical="/"
            />

            {/* HEADER - from NOIR layout but matching Home functionality */}
            <header className={`sticky top-0 z-50 w-full border-b ${theme.borderSubtle} bg-[#24140f]/95 backdrop-blur`}>
                <div className="flex items-center justify-between px-4 py-3 md:px-10 lg:px-40">
                    <div className="flex items-center gap-4">
                        <div className="size-5">
                            <span className="material-symbols-outlined !text-xl text-[#ff5724]">diamond</span>
                        </div>
                        <span className="text-lg font-bold leading-tight uppercase tracking-wide text-white">TaqHaus</span>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-8 text-sm font-medium">
                            <a href="#services" className="text-white hover:text-[#ff5724] transition-colors">Services</a>
                            <a href="#case-studies" className="text-white hover:text-[#ff5724] transition-colors">Case Studies</a>
                            <a href="#about" className="text-white hover:text-[#ff5724] transition-colors">About</a>
                            <a href="#contact" className="text-white hover:text-[#ff5724] transition-colors">Contact</a>
                        </nav>
                        <Link to="/contact" className={`flex h-10 items-center justify-center px-4 md:px-6 text-sm ${theme.btnPrimary}`}>
                            Get Started
                        </Link>
                    </div>
                    <div className="lg:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                </div>
            </header>

            {/* HERO - Home.tsx Content + Noir Styling */}
            <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        className="h-full w-full object-cover opacity-20"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                    >
                        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#24140f] via-[#24140f]/90 to-[#24140f]/80" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">TaqHaus — Marketing. Consulting. Influence.</span>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
                            We Engineer Growth That Scales and Influence That Sticks.
                        </h1>
                        <p className={`mt-6 text-lg md:text-xl ${theme.textMuted}`}>
                            A marketing and influence consultancy that helps ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Link to="/contact" className={`flex h-14 items-center justify-center px-8 text-base shadow-lg ${theme.btnPrimary}`}>
                            Request a Strategic Audit
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                        <a href={CALENDLY_URL} className={`flex h-14 items-center justify-center px-8 text-base ${theme.btnSecondary}`}>
                            Talk to a Strategist
                        </a>
                    </motion.div>

                    <motion.div
                        className="mt-16 w-full max-w-5xl"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                    >
                        <div className={`grid grid-cols-1 gap-4 rounded-2xl border ${theme.borderSubtle} bg-[#1a0f0b]/80 p-8 backdrop-blur sm:grid-cols-3`}>
                            {performanceStats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl font-semibold text-[#ff5724] md:text-4xl">{stat.value}</div>
                                    <div className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TRUST BANNER - NEW THEME */}
            <section className={`w-full border-y ${theme.borderSubtle} bg-[#130e0d]`}>
                <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Trusted by brands and public figures across 6 industries</p>
                    <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
                        {trustedLogos.map((logo) => (
                            <div key={logo} className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-600 transition-all duration-300 hover:text-[#ff5724]">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIFFERENCE / ABOUT */}
            <section id="about" className="bg-[#1a0f0b] py-24">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                    <div>
                        <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">Most agencies chase clicks. Most consultants stop at slides.</span>
                        <h2 className="mt-6 text-4xl font-semibold text-white">We bridge both — clarity of consulting, power of execution.</h2>
                        <p className={`mt-6 ${theme.textMuted}`}>
                            TaqHaus operates as your Chief Growth & Influence Office. We interrogate the data, design the mandate, and command the execution so nothing gets lost between strategy and action.
                        </p>
                        <a href="#services" className={`mt-8 inline-flex h-14 items-center justify-center px-8 text-base transition-transform hover:translate-x-1 ${theme.btnPrimary}`}>
                            See How Our Model Works
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </a>
                    </div>
                    <div className="grid gap-6">
                        {[
                            { icon: Layers, title: 'Integrated Command', desc: 'Unified growth, media, and revenue operations under one accountable roadmap.' },
                            { icon: ShieldCheck, title: 'Reputation Safeguard', desc: 'Proactive narrative steering to protect valuation, credibility, and stakeholder trust.' },
                            { icon: LineChart, title: 'Systems > Campaigns', desc: 'Repeatable, data-backed infrastructure replaces isolated sprints and vanity metrics.' }
                        ].map((item) => (
                            <div key={item.title} className={`${theme.card} p-6 hover:border-[#ff5724]/30 transition-colors`}>
                                <div className="mb-2 flex items-center gap-3">
                                    <item.icon className="h-6 w-6 text-[#ff5724]" />
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODEL / SERVICES */}
            <section id="services" className={`py-24 ${theme.bgLighter} border-y ${theme.borderSubtle}`}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">The TaqHaus Model™</span>
                        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl text-white">Choose Your Growth Path</h2>
                        <p className={`mt-6 ${theme.textMuted}`}>
                            Whether you need strategy, execution, or both — TaqHaus gives you the clarity, systems, and performance to scale.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-2">
                        {/* Consulting Card */}
                        <div className={`${theme.card} overflow-hidden shadow-2xl`}>
                            <div className="border-b border-[#3a2c27] p-8">
                                <div className="mb-4 flex flex-col gap-4">
                                    <span className="flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[#ff5724]/80">
                                        01 <Sparkles className="h-5 w-5 text-[#ff5724]" /> Strategic Consulting
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">Strategy, positioning, and clarity for in-house teams and leaders.</h3>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">Clarity That Converts</p>
                                    <p className="text-gray-400 leading-relaxed">
                                        Audits, strategy, and reputation management for leadership teams that need uncompromising direction.
                                    </p>
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">We Specialize In</p>
                                    <div className="space-y-5">
                                        {consultingPillars.map((pillar) => (
                                            <div key={pillar.title}>
                                                <p className="font-semibold text-white">{pillar.title}</p>
                                                <ul className="mt-2 space-y-2 text-sm text-gray-400">
                                                    {pillar.items.map((item) => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <CheckCircle2 className="mt-1 h-4 w-4 text-[#ff5724]" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl border border-[#3a2c27] bg-[#271e1b] p-5">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">Ideal For</p>
                                    <ul className="mt-3 space-y-2 text-sm text-gray-400">
                                        {consultingIdealFor.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Execution Card */}
                        <div className={`${theme.card} overflow-hidden shadow-2xl`}>
                            <div className="border-b border-[#3a2c27] p-8">
                                <div className="mb-4 flex flex-col gap-4">
                                    <span className="flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[#ff5724]/80">
                                        02 <Rocket className="h-5 w-5 text-[#ff5724]" /> Performance Execution
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">Full-funnel marketing implementation and optimization.</h3>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">Precision in Every Channel</p>
                                    <p className="text-gray-400 leading-relaxed">
                                        SEO, paid media, lifecycle, social, and AI optimization — all deployed with consulting-level oversight.
                                    </p>
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">We Deliver</p>
                                    <div className="space-y-5">
                                        {executionPillars.map((pillar) => (
                                            <div key={pillar.title}>
                                                <p className="font-semibold text-white">{pillar.title}</p>
                                                <ul className="mt-2 space-y-2 text-sm text-gray-400">
                                                    {pillar.items.map((item) => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <ArrowRight className="mt-1 h-4 w-4 text-[#ff5724]" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl border border-[#3a2c27] bg-[#271e1b] p-5">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#ff5724]">Ideal For</p>
                                    <ul className="mt-3 space-y-2 text-sm text-gray-400">
                                        {executionIdealFor.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className={`inline-block rounded-2xl border ${theme.borderSubtle} bg-[#1c1514] px-8 py-8`}>
                            <p className="text-lg text-gray-300">
                                Not sure which path fits your brand? Start with a Strategic Audit — we’ll guide you.
                            </p>
                            <Link to="/contact" className={`mt-6 inline-flex h-12 items-center justify-center px-8 text-base ${theme.btnPrimary}`}>
                                Request a Strategic Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section id="case-studies" className="bg-[#1a0f0b] py-24 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">Proof That Strategy Outperforms Guesswork</span>
                        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl text-white">Real Systems. Real Results.</h2>
                        <p className="mt-4 text-gray-500">Swipe to explore our case studies</p>
                    </div>

                    <div
                        id="case-study-carousel-styled"
                        className="scrollbar-hide -mx-4 flex overflow-x-auto px-4 pb-8"
                        onMouseEnter={() => setIsCarouselPaused(true)}
                        onMouseLeave={() => setIsCarouselPaused(false)}
                        onTouchStart={() => setIsCarouselPaused(true)}
                    >
                        <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={study.title}
                                    className={`group relative w-[85vw] flex-shrink-0 overflow-hidden rounded-3xl border border-[#3a2c27] bg-[#1c1514] sm:w-[450px] md:w-[500px] hover:border-[#ff5724]/60 transition-colors`}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="relative h-72 w-full overflow-hidden sm:h-80">
                                        <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-transparent z-10"></div>
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0f0b] via-[#1a0f0b]/50 to-transparent z-20" />
                                        <div className="absolute bottom-6 left-6 right-6 z-30">
                                            <p className="text-xs uppercase tracking-[0.3em] text-[#ff5724]">{study.title}</p>
                                            <p className="mt-2 text-xl font-semibold text-white line-clamp-2 sm:text-2xl">{study.headline}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 px-6 py-6">
                                        <div className="flex flex-wrap gap-3">
                                            {study.metrics.map((metric) => (
                                                <span key={metric} className="inline-flex items-center gap-2 rounded-full border border-[#3a2c27] bg-[#271e1b] px-4 py-2 text-sm text-gray-300">
                                                    <Target className="h-4 w-4 flex-shrink-0 text-[#ff5724]" />
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={study.href} className={`flex h-10 items-center justify-center w-full ${theme.btnSecondary} hover:bg-[#361e17] transition-colors`}>
                                            View Case Study
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-3">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCaseStudy(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeCaseStudy === index ? 'w-8 bg-[#ff5724]' : 'w-2.5 bg-white/20 hover:bg-[#ff5724]/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className={`py-24 ${theme.bgLighter}`}>
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-semibold text-white" {...inViewProps()}>
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
                            <div className={`${theme.card} relative px-8 py-10 shadow-2xl`}>
                                <Quote className="mx-auto h-10 w-10 text-[#ff5724] mb-6" />
                                <p className="text-xl italic leading-relaxed text-gray-300 md:text-2xl">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>
                                <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#ff5724]/90">
                                    {testimonials[activeTestimonial].author}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="mt-8 flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`h-2.5 w-8 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-[#ff5724]' : 'bg-white/10 hover:bg-[#ff5724]/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* AUDIENCES */}
            <section className="bg-[#1a0f0b] py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Who We Work With</h2>
                        <p className={`mt-6 ${theme.textMuted}`}>
                            Whether you’re scaling revenue or reputation, we help you command both.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {audiences.map((audience) => (
                            <div key={audience.title} className={`${theme.card} p-6 border ${theme.borderSubtle} bg-[#1c1514]`}>
                                <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className={`${theme.bgLighter} py-24 border-y ${theme.borderSubtle}`}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">Partnership Frameworks</span>
                        <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Clarity on Investment. Zero Ambiguity on Accountability.</h2>
                        <p className={`mt-6 ${theme.textMuted}`}>
                            Every engagement begins with a strategic audit defining growth levers, perception risks, and operational gaps. From there we activate the framework aligned to your mandate.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {pricingTiers.map((tier) => (
                            <div key={tier.name} className={`${theme.card} flex flex-col p-6`}>
                                <div className="mb-4">
                                    <h3 className="text-sm uppercase tracking-[0.3em] text-[#ff5724]/80 mb-2">{tier.name}</h3>
                                    <p className="text-2xl font-bold text-white">{tier.price}</p>
                                </div>
                                <div className="flex-1 space-y-3 mb-8">
                                    {tier.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-start gap-3 text-sm text-gray-400">
                                            <CheckCircle2 className="mt-1 h-4 w-4 text-[#ff5724]" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                                <a href={CALENDLY_URL} className={`flex h-12 w-full items-center justify-center ${theme.btnPrimary}`}>
                                    Book a Consultation
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ETHOS */}
            <section className="bg-[#1a0f0b] py-24">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">The TaqHaus Ethos — Built for the Bold</span>
                    <h2 className="mt-6 text-4xl font-semibold text-white">We don’t chase trends. We build systems that outlast them.</h2>
                    <p className={`mt-6 ${theme.textMuted}`}>
                        TaqHaus was built for leaders who would rather define the market than follow it. Growth isn’t luck—it’s engineered through clarity, conviction, and disciplined execution.
                    </p>
                    <p className={`mt-4 ${theme.textMuted}`}>
                        Every partnership is governed like a capital investment: transparent dashboards, accountable reporting, and measurable progress.
                    </p>
                    <p className={`mt-4 ${theme.textMuted}`}>
                        If you’re bold enough to stop guessing and start scaling with intent—we’re ready.
                    </p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="final-cta" className={`relative overflow-hidden py-24 ${theme.bg}`}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className={`relative rounded-3xl border ${theme.borderSubtle} bg-[#1c1514]/80 px-6 py-16 text-center shadow-2xl backdrop-blur sm:px-8 lg:px-12 lg:py-20`}>
                        <motion.div {...inViewProps()}>
                            <span className="text-sm uppercase tracking-[0.4em] text-[#ff5724] font-semibold">
                                Your Growth &amp; Influence, Engineered
                            </span>
                            <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl md:text-5xl max-w-3xl mx-auto">
                                Let's Build the System That Drives Your Next Stage of Growth.
                            </h2>
                            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                                You've seen what reactive marketing gets you. Now it's time for something deliberate — a partnership designed for performance, influence, and long-term success.
                            </p>
                            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                                <Link to="/contact" className={`flex h-14 items-center justify-center px-10 text-lg ${theme.btnPrimary}`}>
                                    Request Your Strategic Audit
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Link>
                                <a href={CALENDLY_URL} className={`flex h-14 items-center justify-center px-10 text-lg ${theme.btnSecondary}`}>
                                    Apply for Partnership
                                </a>
                            </div>
                            <p className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
                                <span aria-hidden="true">🔒</span> Free audit. No obligation.
                                <a href="mailto:info@taqhaus.com" className="underline text-[#ff5724] hover:text-[#ff5724]/80 transition-colors ml-2">
                                    Prefer email? info@taqhaus.com
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-[#1a0f0b] py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center text-white md:text-4xl">Questions, Answered</h2>
                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => {
                            const open = openFaq === index
                            return (
                                <div key={faq.question} className={`overflow-hidden rounded-2xl border ${theme.borderSubtle} bg-[#1c1514]`}>
                                    <button
                                        className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-[#24140f] transition-colors"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="text-lg font-medium text-white">{faq.question}</span>
                                        <span className="ml-4 text-2xl text-[#ff5724]">{open ? '−' : '+'}</span>
                                    </button>
                                    {open && (
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[#3a2c27] pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={`border-t ${theme.borderSubtle} bg-[#130e0d]`}>
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-gray-500">
                        <div>© 2026 TaqHaus — Marketing. Consulting. Influence.</div>
                        <nav className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-[0.2em]">
                            {footerLinks.map((link) => (
                                <a key={link.label} href={link.href} className="hover:text-[#ff5724] transition-colors">
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
