import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { SEO } from '@/components/SEO'
import { ArrowRight, Target, ChevronDown, ChevronUp } from 'lucide-react'

// Minimal data - only what's needed
const caseStudies = [
    {
        title: 'SaaS Startup',
        result: '+320% Organic Traffic',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        href: '/case-studies/saas-startup'
    },
    {
        title: 'Fashion Brand',
        result: '$57K Revenue in 90 Days',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
        href: '/case-studies/fashion-brand'
    },
    {
        title: 'Public Official',
        result: '5x Engagement Growth',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
        href: '/case-studies/public-official'
    }
]

const faqs = [
    {
        q: 'What makes TaqHaus different?',
        a: 'We blend consulting-level strategy with hands-on execution. You get clarity and results under one roof.'
    },
    {
        q: 'How do engagements begin?',
        a: 'Every partnership starts with a Strategic Audit — we diagnose growth levers and build a custom roadmap.'
    },
    {
        q: 'Do you work with in-house teams?',
        a: 'Yes. Many clients keep their internal teams and engage us for strategy, audits, and oversight.'
    }
]

export default function LandingPageRedesign() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white font-['Inter',sans-serif] selection:bg-[#ff5724] selection:text-white">
            <SEO
                title="TaqHaus — Marketing That Scales"
                description="Strategic growth for ambitious brands and leaders. We engineer marketing systems that deliver measurable results."
                keywords="marketing consulting, growth marketing, brand strategy, performance marketing"
                canonical="/"
            />

            {/* ═══════════════════════════════════════════════════════════════
                HEADER — Minimal, sticky
            ═══════════════════════════════════════════════════════════════ */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img src="/taqhaus-logo.png" alt="TaqHaus" className="h-24 w-auto" />
                    </Link>
                    <Link
                        to="/contact"
                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#ff5724] hover:bg-[#e04d1f] text-white text-sm font-semibold rounded-full transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1: HERO — Single CTA, maximum clarity
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0b] via-[#0d0d0d] to-[#0d0d0d] opacity-60" />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#ff5724] text-sm uppercase tracking-[0.3em] font-medium mb-6">
                            Growth & Influence Consultancy
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                            Marketing That Scales.
                            <br />
                            <span className="text-white/60">Influence That Lasts.</span>
                        </h1>

                        <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
                            Strategic growth for ambitious brands and leaders who refuse to guess.
                        </p>

                        <div className="mt-12">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff5724] hover:bg-[#e04d1f] text-white text-base font-semibold rounded-full transition-all hover:gap-4 shadow-[0_20px_50px_rgba(255,87,36,0.3)]"
                            >
                                Request Strategic Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <p className="mt-6 text-sm text-white/40">
                            Free audit. No obligation.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-white/30" />
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2: TRUST BAR — Minimal credibility
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 border-y border-white/5 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-[#ff5724]">+217%</p>
                            <p className="mt-2 text-sm text-white/40 uppercase tracking-wider">Avg. Traffic Growth</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-white">$2.4M+</p>
                            <p className="mt-2 text-sm text-white/40 uppercase tracking-wider">Revenue Influenced</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-white">94%</p>
                            <p className="mt-2 text-sm text-white/40 uppercase tracking-wider">Client Retention</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2B: CLIENT LOGOS — Scrolling Trust Bar
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-12 bg-[#0a0a0a] overflow-hidden">
                <p className="text-center text-white/40 text-sm mb-8">
                    Trusted by startups and global brands, across 10+ industries.
                </p>
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                    <div className="flex gap-16 animate-scroll-logos items-center">
                        {[...Array(2)].map((_, setIdx) => (
                            <div key={setIdx} className="flex gap-16 items-center shrink-0">
                                <img src="/logos/gymshark.jpg" alt="Gymshark" className="h-6 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/sft.png" alt="SFT" className="h-8 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/gtbank.png" alt="GTBank" className="h-8 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/redtag.jpg" alt="redtag.ca" className="h-6 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/zerofilter.jpg" alt="Zero Filter Co." className="h-10 w-auto grayscale brightness-200 opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/shopify.svg" alt="Shopify" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/stripe.svg" alt="Stripe" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/hubspot.svg" alt="HubSpot" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/mailchimp.svg" alt="Mailchimp" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/slack.svg" alt="Slack" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/notion.svg" alt="Notion" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/zapier.svg" alt="Zapier" className="h-6 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/intercom.svg" alt="Intercom" className="h-7 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                                <img src="/logos/asana.svg" alt="Asana" className="h-6 w-auto grayscale brightness-[3] opacity-50 hover:opacity-80 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for scrolling animation */}
                <style>{`
                    @keyframes scroll-logos {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-logos {
                        animation: scroll-logos 45s linear infinite;
                    }
                `}</style>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3: SERVICES — Bento Grid Layout
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#ff5724] text-sm uppercase tracking-[0.3em] font-medium mb-4">
                            What We Do
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            Full-Stack Growth. One Partner.
                        </h2>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Featured: Strategic Consulting - spans 2 cols */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a0f0b] to-[#0d0d0d] border border-[#3a2520] p-8 md:p-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5724]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5724]/10 text-[#ff5724] text-xs font-medium mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5724]" />
                                    Core Offering
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Strategic Consulting</h3>
                                <p className="text-white/50 leading-relaxed mb-8 max-w-lg">
                                    Clarity before action. We diagnose growth levers, build roadmaps, and align your team around what actually moves the needle.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Growth Strategy', 'Market Positioning', 'Go-to-Market', 'Product Marketing'].map(tag => (
                                        <span key={tag} className="px-4 py-2 text-sm bg-white/5 text-white/70 rounded-lg border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance Marketing */}
                        <div className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/20 transition-all p-6 md:p-8">
                            <div className="w-10 h-10 rounded-lg bg-[#ff5724]/10 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-[#ff5724]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Performance Marketing</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-5">
                                Acquisition systems that compound across paid, organic, and lifecycle channels.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['SEO', 'Paid Media', 'Email', 'Analytics'].map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Influence & Reputation */}
                        <div className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/20 transition-all p-6 md:p-8">
                            <div className="w-10 h-10 rounded-lg bg-[#ff5724]/10 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-[#ff5724]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Influence & Reputation</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-5">
                                Position leaders and brands as the definitive voice in their space.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['PR', 'Thought Leadership'].map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Media Marketing */}
                        <div className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/20 transition-all p-6 md:p-8">
                            <div className="w-10 h-10 rounded-lg bg-[#ff5724]/10 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-[#ff5724]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Social Media Marketing</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-5">
                                Build engaged communities and drive brand visibility across platforms.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Content', 'Community', 'Ads'].map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Product Marketing */}
                        <div className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/20 transition-all p-6 md:p-8">
                            <div className="w-10 h-10 rounded-lg bg-[#ff5724]/10 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-[#ff5724]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Product Marketing</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-5">
                                Launch, position, and scale products with messaging that converts.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Launches', 'Messaging', 'GTM'].map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Creative & Brand - spans 3 cols (full width) */}
                        <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/20 transition-all p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff5724]/20 to-[#ff5724]/5 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#ff5724]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">Creative & Brand</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Premium creative that converts — from identity systems to campaign assets that command attention.
                                </p>
                            </div>
                            <div className="flex flex-wrap md:flex-col gap-2 md:gap-1 md:text-right">
                                {['Brand Identity', 'Web Design', 'Video & Motion'].map(tag => (
                                    <span key={tag} className="text-xs text-white/40">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4: PROOF — 3 Case Studies
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#ff5724] text-sm uppercase tracking-[0.3em] font-medium mb-4">
                            Proof, Not Promises
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            Real Results for Real Brands
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudies.map((study) => (
                            <Link
                                key={study.title}
                                to={study.href}
                                className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ff5724]/30 transition-colors"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-white/50 uppercase tracking-wider mb-2">{study.title}</p>
                                    <p className="text-xl font-semibold flex items-center gap-2">
                                        <Target className="w-5 h-5 text-[#ff5724]" />
                                        {study.result}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5: TESTIMONIALS — NinjaPromo-inspired
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
                            Our rating based on<br />verified client reviews
                        </h2>
                    </div>

                    {/* Testimonial Slider */}
                    {(() => {
                        const testimonials = [
                            {
                                quote: "TaqHaus transformed our digital presence completely. Our bookings increased by 340% in just 6 months. They understand our industry like no other agency we've worked with.",
                                name: "Michelle J.",
                                title: "CEO & Founder",
                                rating: "5.0",
                                industry: "Travel & Tourism",
                                location: "United States",
                                size: "11-50 Employees",
                                timeline: "Jan 2024 - Ongoing"
                            },
                            {
                                quote: "In a highly competitive prop firm space, TaqHaus helped us stand out. Their SEO and Paid Ads strategy brought us a lot of traffic and valuable customers. The ROI has been exceptional.",
                                name: "David K.",
                                title: "Founder",
                                rating: "5.0",
                                industry: "Proprietary Trading",
                                location: "United Kingdom",
                                size: "51-200 Employees",
                                timeline: "Mar 2023 - Ongoing"
                            },
                            {
                                quote: "TaqHaus completely transformed our e-commerce business. Their performance marketing and email automation drove massive growth in sales. Best investment we've made.",
                                name: "Sarah R.",
                                title: "Owner",
                                rating: "5.0",
                                industry: "E-commerce",
                                location: "Canada",
                                size: "1-10 Employees",
                                timeline: "Jun 2023 - Ongoing"
                            },
                            {
                                quote: "TaqHaus ran our digital campaign with precision and integrity. Our social reach grew 10x and we won by a historic margin. Professional and delivers results.",
                                name: "James T.",
                                title: "Campaign Manager",
                                rating: "5.0",
                                industry: "Political Campaign",
                                location: "United States",
                                size: "11-50 Employees",
                                timeline: "Sep 2024 - Dec 2024"
                            }
                        ];

                        const [currentIndex, setCurrentIndex] = useState(0);

                        return (
                            <div className="relative">
                                {/* Navigation Dots */}
                                <div className="flex justify-center gap-2 mb-8">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                                                ? 'bg-[#ff5724] w-8'
                                                : 'bg-white/20 hover:bg-white/40'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Card - Two Column Layout */}
                                <div className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#1f1510] rounded-3xl overflow-hidden border border-white/5">
                                    <div className="grid md:grid-cols-[280px_1fr]">
                                        {/* Left Column - Stats */}
                                        <div className="p-8 border-r border-white/5">
                                            <div className="flex items-center gap-3 mb-8">
                                                <span className="text-3xl font-bold text-white">{testimonials[currentIndex].rating}</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[#ff5724]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4 text-sm">
                                                <div className="flex items-center gap-3 text-white/70">
                                                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <span>{testimonials[currentIndex].industry}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white/70">
                                                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span>{testimonials[currentIndex].location}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white/70">
                                                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                    <span>{testimonials[currentIndex].size}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white/70">
                                                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{testimonials[currentIndex].timeline}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Quote */}
                                        <div className="p-8 md:p-12 flex flex-col justify-between">
                                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                                "{testimonials[currentIndex].quote}"
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</p>
                                                    <p className="text-sm text-white/50">{testimonials[currentIndex].title}</p>
                                                </div>

                                                {/* Navigation Arrows */}
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4: PRICING — Simplified
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#ff5724] text-sm uppercase tracking-[0.3em] font-medium mb-4">
                        Partnership Frameworks
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                        Flexible Engagement. Clear Investment.
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">
                        Every partnership begins with a strategic audit. From there, we design the framework that fits your growth mandate.
                    </p>

                    <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center p-8 rounded-2xl bg-[#141414] border border-white/10">
                        <div className="text-left">
                            <p className="text-white/50 text-sm uppercase tracking-wider">Starting From</p>
                            <p className="text-4xl font-bold mt-1">$2,500<span className="text-lg text-white/50">/month</span></p>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-white/10" />
                        <div className="text-left">
                            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                                Strategic audit, organic foundation, and executive reporting cadence included.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a
                            href={CALENDLY_URL}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff5724] hover:bg-[#e04d1f] text-white text-base font-semibold rounded-full transition-colors shadow-[0_20px_50px_rgba(255,87,36,0.25)]"
                        >
                            Book a Consultation
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5: FAQ — Collapsed by default
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
                        Questions?
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.q}
                                className="rounded-xl border border-white/10 bg-[#141414] overflow-hidden"
                            >
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="font-medium">{faq.q}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-[#ff5724]" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-white/40" />
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
                                            <div className="px-6 pb-5 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 6: FINAL CTA — Mirror Hero
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#0d0d0d] to-[#1a0f0b]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                        Ready to Stop Guessing?
                    </h2>
                    <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
                        Let's build the system that drives your next stage of growth.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff5724] hover:bg-[#e04d1f] text-white text-base font-semibold rounded-full transition-colors shadow-[0_20px_50px_rgba(255,87,36,0.3)]"
                        >
                            Request Strategic Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-white/40 flex items-center justify-center gap-2">
                        <span>🔒</span> Free audit. No obligation.
                        <a href="mailto:info@taqhaus.com" className="text-[#ff5724] hover:underline ml-2">
                            Prefer email?
                        </a>
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FOOTER — Minimal
            ═══════════════════════════════════════════════════════════════ */}
            <footer className="py-8 px-6 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <p>© 2026 TaqHaus — Marketing. Consulting. Influence.</p>
                    <nav className="flex gap-6">
                        <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
