import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'

// ORIGINAL CONTENT DATA - UNCHANGED
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
        href: '/case-studies/saas-startup',
        caseId: 'CASE-001'
    },
    {
        title: 'Fashion Brand',
        headline: '$57K in 90 Days from Email Automation',
        metrics: ['42% higher open rate', '18% higher CTR'],
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
        href: '/case-studies/fashion-brand',
        caseId: 'CASE-002'
    },
    {
        title: 'Public Official',
        headline: 'Repositioned Digital Image Before Campaign Season',
        metrics: ['Reputation rebuild', '5x engagement growth'],
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80',
        href: '/case-studies/public-official',
        caseId: 'CASE-003'
    },
    {
        title: 'TopTier Trader',
        headline: 'Stabilized Reputation and Grew Search Demand',
        metrics: ['+142% branded search', '+96% non-brand traffic'],
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
        href: '/case-studies/toptier-trader',
        caseId: 'CASE-004'
    },
    {
        title: 'The Funded Trader (TFT)',
        headline: 'Scaled Qualified Trader Signups while Reducing CAC',
        metrics: ['+188% organic signups', '−34% CAC'],
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=80',
        href: '/case-studies/the-funded-trader',
        caseId: 'CASE-005'
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
        description: 'Scaling organisations ready to convert demand into disciplined, repeatable revenue.',
        icon: 'rocket_launch'
    },
    {
        title: 'In-House Teams',
        description: 'Marketing and communications teams who need board-level direction and oversight.',
        icon: 'groups'
    },
    {
        title: 'Leaders & Public Figures',
        description: 'Executives and officials who must control narrative, perception, and influence at scale.',
        icon: 'shield'
    }
]

const pricingTiers = [
    {
        name: 'Starter',
        // short description for card layout compatibility
        description: 'Foundation Plan',
        price: '$2,500–$4,500/month',
        benefits: [
            'Strategic audit + 90-day command plan',
            'Organic foundation deployed inside 30 days',
            'Executive reporting cadence installed'
        ],
        version: 'V.1.0'
    },
    {
        name: 'Growth Accelerator',
        description: 'Full Scale',
        price: '$5,000–$8,500/month',
        benefits: [
            'Advanced SEO & automation across core funnels',
            'Paid, email, and social programs synced under one dashboard',
            'Bi-weekly executive briefings + optimisation sprints'
        ],
        version: 'V.2.0'
    },
    {
        name: 'Dominance Partnership',
        description: 'Enterprise',
        price: '$10,000+/month',
        benefits: [
            'Full consulting + execution command center',
            'Cross-channel growth and influence stewardship',
            'Dedicated strategist pod + automation suite'
        ],
        version: 'V.3.0'
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

export default function ThemePreviewHomeNoir() {
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
        const container = document.getElementById('case-study-carousel-noir')
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
        bg: 'bg-[#24140f]',
        bgLighter: 'bg-[#361e17]',
        bgDarker: 'bg-[#1a0f0b]',
        border: 'border-[#6b3c2e]',
        borderSubtle: 'border-[#4b2a20]',
        accent: 'bg-[#ff5724]',
        accentText: 'text-[#ff5724]',
        text: 'text-white',
        textMuted: 'text-[#ce9c8d]',
        card: 'rounded-lg',
        btn: 'rounded-lg'
    }

    return (
        <div className={`min-h-screen ${theme.bg} text-white font-['Inter',sans-serif]`}>
            <SEO
                title="Marketing Consulting & Execution That Scales"
                description="We engineer growth that scales and influence that sticks. A marketing and influence consultancy helping ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation."
                keywords="marketing consulting, digital marketing agency, SEO services, paid media, growth marketing, brand strategy, reputation management, marketing execution, performance marketing, marketing automation"
                canonical="/"
            />

            {/* HEADER */}
            <header className={`flex items-center justify-between border-b border-solid ${theme.borderSubtle} px-4 md:px-10 py-3 sticky top-0 z-50 ${theme.bg}/95 backdrop-blur`}>
                <div className="flex items-center gap-4 text-white">
                    <div className="size-5">
                        <span className="material-symbols-outlined !text-xl text-white">diamond</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] uppercase">TaqHaus</h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        <a className="text-white text-sm font-medium leading-normal hover:text-[#ff5724] transition-colors" href="#services">Services</a>
                        <a className="text-white text-sm font-medium leading-normal hover:text-[#ff5724] transition-colors" href="#case-studies">Case Studies</a>
                        <a className="text-white text-sm font-medium leading-normal hover:text-[#ff5724] transition-colors" href="#about">About</a>
                        <a className="text-white text-sm font-medium leading-normal hover:text-[#ff5724] transition-colors" href="#contact">Contact</a>
                    </nav>
                    <button className={`flex items-center justify-center overflow-hidden ${theme.btn} h-10 px-4 ${theme.accent} hover:bg-[#e0481d] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]`}>
                        <span className="truncate">Get Started</span>
                    </button>
                </div>
                <div className="lg:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">

                    <div className="p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10 shadow-2xl overflow-hidden relative group`}
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80")' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-700"></div>

                            <div className="z-10 flex flex-col gap-4 text-left max-w-2xl">
                                <span className={`${theme.accent} text-white text-xs font-bold px-2 py-1 rounded w-fit uppercase tracking-wider`}>Growth & Influence Office</span>
                                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                    We Engineer Growth That Scales.
                                </h1>
                                <h2 className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
                                    A marketing and influence consultancy helping ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation.
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <Link
                                        to="/contact"
                                        className={`flex items-center justify-center ${theme.btn} h-12 px-6 ${theme.accent} hover:bg-[#e0481d] transition-colors text-white text-base font-bold tracking-wide`}
                                    >
                                        Request Strategic Audit
                                    </Link>
                                    <a
                                        href={CALENDLY_URL}
                                        className={`flex items-center justify-center ${theme.btn} h-12 px-6 bg-[#4b2a20] hover:bg-[#5c3529] transition-colors text-white text-base font-bold tracking-wide`}
                                    >
                                        Talk to a Strategist
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                        {performanceStats.map((stat) => (
                            <div key={stat.label} className={`flex flex-1 flex-col gap-2 ${theme.card} p-6 border ${theme.border} bg-[#361e17]/50`}>
                                <p className="text-white text-base font-medium leading-normal">{stat.label}</p>
                                <div className="flex items-end gap-2">
                                    <p className="text-white tracking-light text-3xl font-bold leading-tight">{stat.value}</p>
                                    <p className="text-[#0bda12] text-sm font-medium leading-normal mb-1">↑</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SERVICES */}
                    <h2 className={`text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8`}>Our Services</h2>
                    <div className="grid grid-cols-1 gap-4 p-4">
                        {/* Strategy */}
                        <div className={`flex flex-col md:flex-row items-stretch justify-between gap-6 ${theme.card} overflow-hidden border ${theme.borderSubtle} p-1 hover:border-[#ff5724]/30 transition-colors`}>
                            <div className="flex flex-col justify-center gap-4 p-6 md:p-8 md:w-1/2">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-[#ff5724]">auto_awesome</span>
                                        <p className="text-white text-xl font-bold leading-tight">Strategic Consulting</p>
                                    </div>
                                    <p className={`${theme.textMuted} text-sm font-normal leading-relaxed mt-2`}>
                                        Crafting bespoke bespoke growth strategies tailored to your unique business objectives. We analyze market trends, identify opportunities, and develop actionable plans to maximize your impact.
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        {consultingPillars[0].items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="text-[#ff5724] mt-0.5">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to="/contact" className={`flex items-center justify-center ${theme.btn} h-10 px-6 bg-[#4b2a20] hover:bg-[#5c3529] text-white text-sm font-medium w-fit mt-2`}>
                                    Learn More
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2 bg-cover bg-center min-h-[250px] rounded-lg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80")' }}></div>
                        </div>

                        {/* Execution */}
                        <div className={`flex flex-col md:flex-row-reverse items-stretch justify-between gap-6 ${theme.card} overflow-hidden border ${theme.borderSubtle} p-1 hover:border-[#ff5724]/30 transition-colors`}>
                            <div className="flex flex-col justify-center gap-4 p-6 md:p-8 md:w-1/2">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-[#ff5724]">rocket_launch</span>
                                        <p className="text-white text-xl font-bold leading-tight">Performance Execution</p>
                                    </div>
                                    <p className={`${theme.textMuted} text-sm font-normal leading-relaxed mt-2`}>
                                        Elevating your brand's presence through targeted campaigns and precise implementation. We leverage SEO, paid media, and automation to amplify your message.
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        {executionPillars[0].items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="text-[#ff5724] mt-0.5">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to="/contact" className={`flex items-center justify-center ${theme.btn} h-10 px-6 bg-[#4b2a20] hover:bg-[#5c3529] text-white text-sm font-medium w-fit mt-2`}>
                                    Learn More
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2 bg-cover bg-center min-h-[250px] rounded-lg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80")' }}></div>
                        </div>
                    </div>

                    {/* CASE STUDIES */}
                    <div className="flex items-center justify-between px-4 pb-3 pt-8">
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Case Studies</h2>
                        <Link to="/case-studies" className="text-[#ff5724] text-sm font-bold hover:underline">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {caseStudies.slice(0, 3).map((study) => (
                            <div key={study.title} className="flex flex-col gap-3 group cursor-pointer">
                                <div className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden border border-[#4b2a20] group-hover:border-[#ff5724] transition-colors relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${study.image})` }}></div>
                                </div>
                                <div>
                                    <p className="text-white text-base font-bold leading-normal">{study.title}</p>
                                    <p className={`${theme.textMuted} text-sm font-normal leading-normal line-clamp-2`}>{study.headline}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* AUDIENCES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-4">
                        {audiences.map((audience) => (
                            <div key={audience.title} className={`flex flex-1 gap-3 ${theme.card} border ${theme.border} ${theme.bgLighter} p-6 flex-col`}>
                                <div className="text-white">
                                    <span className="material-symbols-outlined text-[#ff5724] !text-3xl">{audience.icon}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-white text-lg font-bold leading-tight">{audience.title}</h2>
                                    <p className={`${theme.textMuted} text-sm font-normal leading-relaxed`}>{audience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TESTIMONIALS - SIMPLE */}
                    <div className="px-4 py-8 mt-4">
                        <div className={`rounded-xl border ${theme.border} ${theme.bgLighter} p-8 md:p-12 text-center`}>
                            <span className="material-symbols-outlined text-[#ff5724] !text-4xl mb-4">format_quote</span>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-6">
                                        "{testimonials[activeTestimonial].quote}"
                                    </p>
                                    <p className="text-[#ff5724] font-bold text-sm tracking-wide uppercase">
                                        {testimonials[activeTestimonial].author}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`h-2 rounded-full transition-all ${activeTestimonial === idx ? 'w-6 bg-[#ff5724]' : 'w-2 bg-[#4b2a20]'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PRICING */}
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4 text-center">Partnership Frameworks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                        {pricingTiers.map((tier, idx) => (
                            <div key={tier.name} className={`flex flex-col p-6 rounded-xl border ${idx === 1 ? 'border-[#ff5724] bg-[#361e17]' : 'border-[#4b2a20] bg-[#2a1a15]'}`}>
                                <div className="mb-4">
                                    <h3 className="text-[#ff5724] text-xs font-bold uppercase tracking-wider mb-1">{tier.name}</h3>
                                    <div className="text-white text-2xl font-bold">{tier.price}</div>
                                    <div className="text-[#ce9c8d] text-xs mt-1">{tier.description}</div>
                                </div>
                                <div className="flex-1 mb-6">
                                    <ul className="space-y-3">
                                        {tier.benefits.map((benefit) => (
                                            <li key={benefit} className="flex items-start gap-3 text-sm text-gray-300">
                                                <span className="material-symbols-outlined text-[#ff5724] !text-base mt-0.5">check_circle</span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={CALENDLY_URL} className={`flex items-center justify-center ${theme.btn} h-10 w-full ${idx === 1 ? theme.accent : 'bg-[#4b2a20] hover:bg-[#5c3529]'} text-white text-sm font-bold transition-colors`}>
                                    Book Consultation
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* CONTACT / CTA */}
                    <div className="p-4 mt-8 mb-8" id="contact">
                        <div
                            className="rounded-xl overflow-hidden relative px-6 py-16 md:px-20 text-center"
                            style={{ backgroundImage: 'linear-gradient(rgba(36, 20, 15, 0.85), rgba(36, 20, 15, 0.95)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80")' }}
                        >
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Ready to Engineer Growth?</h2>
                            <p className="text-[#ce9c8d] text-lg max-w-2xl mx-auto mb-8">
                                Stop guessing. Start scaling with a system designed for performance and influence.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                                <Link
                                    to="/contact"
                                    className={`flex items-center justify-center ${theme.btn} h-12 px-8 ${theme.accent} hover:bg-[#e0481d] transition-colors text-white text-base font-bold w-full`}
                                >
                                    Start Your Audit
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto w-full p-4 mb-12">
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 text-center">Questions?</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, index) => {
                                const open = openFaq === index
                                return (
                                    <div key={faq.question} className={`rounded-lg border ${theme.borderSubtle} bg-[#2a1a15] overflow-hidden`}>
                                        <button
                                            className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#361e17] transition-colors"
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <span className="text-base font-medium text-white">{faq.question}</span>
                                            <span className="material-symbols-outlined text-[#ff5724]">{open ? 'remove' : 'add'}</span>
                                        </button>
                                        {open && (
                                            <div className="px-6 pb-6 text-[#ce9c8d] text-sm leading-relaxed border-t border-[#3a2c27] pt-4">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="flex justify-center border-t border-[#4b2a20] bg-[#1a0f0b]">
                <div className="flex max-w-[960px] flex-1 flex-col">
                    <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <a className="text-[#ce9c8d] text-base font-normal leading-normal hover:text-[#ff5724] transition-colors min-w-20" href="#services">Services</a>
                            <a className="text-[#ce9c8d] text-base font-normal leading-normal hover:text-[#ff5724] transition-colors min-w-20" href="#case-studies">Case Studies</a>
                            <a className="text-[#ce9c8d] text-base font-normal leading-normal hover:text-[#ff5724] transition-colors min-w-20" href="#about">About</a>
                            <a className="text-[#ce9c8d] text-base font-normal leading-normal hover:text-[#ff5724] transition-colors min-w-20" href="#contact">Contact</a>
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-[#ff5724] !text-lg">diamond</span>
                            <span className="text-white font-bold uppercase tracking-tight">TaqHaus</span>
                        </div>
                        <p className="text-[#6b3c2e] text-sm font-normal leading-normal">© 2026 TaqHaus. All rights reserved.</p>
                    </footer>
                </div>
            </footer>
        </div>
    )
}
