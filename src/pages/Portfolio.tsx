import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Target, Compass, Code, PenTool, CheckCircle2, TrendingUp, X } from 'lucide-react'
import SEO from '@/components/SEO'
import { CALENDLY_URL } from '@/lib/constants'

// --- Data ---

const taqhausStack = [
  {
    icon: Compass,
    title: 'Strategy & Consulting',
    desc: 'Marketing audits, GTM strategy, competitive intelligence, and ongoing advisory. Think fractional CMO.',
  },
  {
    icon: Target,
    title: 'Digital Marketing Execution',
    desc: 'Email retention, SEO content, omnipresent paid media (Meta, Google, TikTok), and CRO. The full funnel, executed.',
  },
  {
    icon: Code,
    title: 'Websites & Digital Assets',
    desc: 'SEO-engineered web applications (React/Next.js) and landing pages. Built to rank, convert, and scale.',
  },
  {
    icon: PenTool,
    title: 'Brand & Content',
    desc: 'Narrative design, reputation management, and high-velocity community building.',
  },
]

const caseStudies = [
  {
    title: 'Red Bull | Engineering High-Velocity Engagement',
    shortTitle: 'Red Bull',
    image: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?w=800&q=80',
    industry: 'Media / FMCG',
    situation: 'Red Bull needed to push beyond traditional brand awareness into highly measurable, interactive digital experiences that captured first-party data without feeling like corporate marketing.',
    strategy: [
      { label: 'Digital Infrastructure', text: 'Developed ultra-fast, gamified micro-sites specifically engineered for mobile performance and instantaneous engagement.' },
      { label: 'Narrative Architecture', text: 'Designed content that aligned entirely with their extreme sports positioning, ensuring that every interactive element reinforced their adrenaline-driven ethos.' }
    ],
    roi: ['Millions of organic and paid impressions', '+50% Lift in Interactive Session Duration', 'Massive 1st-party data acquisition']
  },
  {
    title: 'RedTag.ca | Maximizing Direct Response in Travel',
    shortTitle: 'RedTag.ca',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    industry: 'Travel / E-Commerce',
    situation: 'RedTag.ca needed to dominate a highly saturated travel booking market. They required a massive influx of direct bookings for specific vacation routes while maintaining an efficient Cost Per Acquisition (CPA).',
    strategy: [
      { label: 'Demand Generation', text: 'Deployed a surgical, high-budget paid media ecosystem targeting distinct buyer personas (from luxury travelers to budget seekers).' },
      { label: 'Conversion Optimization', text: 'Streamlined the entire booking journey from the initial ad click to final checkout, reducing friction and maximizing average order value (AOV).' }
    ],
    roi: ['+40% Increase in Direct Flight/Package Bookings', '2x Reduction in Cart Abandonment Rate', 'Multi-Million Dollar incremental revenue']
  },
  {
    title: 'TopTier Trader | Scaling a Prop-Firm to Market Dominance',
    shortTitle: 'TopTier Trader',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    industry: 'Fintech / B2B SaaS',
    situation: 'TopTier Trader possessed a strong product but was fighting in an ultra-competitive, high-noise market. They needed to rapidly acquire active traders while driving down CAC.',
    strategy: [
      { label: 'Positioning', text: 'We shifted the narrative away from generic trading to a premium, trust-first platform designed for serious, funded execution.' },
      { label: 'Demand Generation', text: 'We engineered an omnipresent paid media architecture across Meta and Google, segmenting audiences by their exact stage in the buyer journey.' },
      { label: 'Conversion Infrastructure', text: 'Upgraded the landing pages to remove friction via deep conversion copywriting highlighting payout proof and immediate onboarding.' }
    ],
    roi: ['425% Increase in Top-Line Revenue', '8.5x Blended Return on Ad Spend (ROAS)', '12,000+ New Funded Traders']
  },
  {
    title: 'The Funded Trader | Building Community as a Moat',
    shortTitle: 'The Funded Trader',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    industry: 'Finance / Education',
    situation: 'The Funded Trader had an educational foundation but suffered from volatile churn. They needed to transition from a transactional course-seller to a sticky, high-LTV community.',
    strategy: [
      { label: 'Retention Architecture', text: 'Deployed a sophisticated Email Nurture Sequence (Klaviyo) that rewarded milestones and offered deeply educational trading insights.' },
      { label: 'Content Flywheel', text: 'Scaled an organic social presence that transformed customers into brand evangelists. Every piece of content was designed to pull users back into the Discord.' }
    ],
    roi: ['340% YoY Growth in Student Base', '12x Increase in Daily Engagement', '25,000+ Monthly Active Members']
  },
  {
    title: '[Confidential Public Official] | Digital-First Electoral Victory',
    shortTitle: 'Public Official',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    industry: 'Political / Public Office',
    situation: 'A highly competitive electoral race required rapidly organizing a decentralized volunteer base while swaying contested voting districts within a compressed, immovable deadline.',
    strategy: [
      { label: 'Voter Targeting Architecture', text: 'Bypassed inefficient mass print media by orchestrating a hyper-targeted digital media campaign focused entirely on swing zones.' },
      { label: 'Conversion Infrastructure', text: 'Centralized volunteer onboarding, donation processing, and voter engagement into a single, high-conversion web platform built to withstand extreme traffic spikes.' }
    ],
    roi: ['+15% Net Increase in Vote Share', '5,000+ Volunteers Digitally Onboarded', '500,000+ Voters Reached via targeting']
  },
  {
    title: '[B2B SaaS Startup] | Reaching Product-Market Fit',
    shortTitle: 'B2B SaaS Startup',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    industry: 'B2B SaaS',
    situation: 'A promising SaaS platform was struggling to break the $1M ARR ceiling. Their website was essentially a brochure, failing to qualify or convert enterprise decision-makers.',
    strategy: [
      { label: 'UX & Web Engineering', text: 'Tore down the brochure site and rebuilt a high-performance Next.js web application. Every module served a psychological purpose.' },
      { label: 'Messaging Hierarchy', text: 'Rewrote the entire site to speak directly to the C-Suite, focusing purely on velocity and cost-reduction rather than software features.' }
    ],
    roi: ['$2M ARR Milestone Shattered in 18 Months', '18% Increase in Lead Conversion Rate', '50+ Enterprise/B2B Contracts Secured']
  },
  {
    title: 'Heels & Tech | Scaling Global Tech Education',
    shortTitle: 'Heels & Tech',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    industry: 'EdTech / B2C Community',
    situation: 'Dedicated to empowering women to transition into tech, they needed to aggressively scale course enrollments and build global authority.',
    strategy: [
      { label: 'Product Marketing', text: 'Repositioned their offerings from standard courses to transformational career paths, emphasizing post-graduation salaries and success stories.' },
      { label: 'Email Retention & Conversion', text: 'Constructed highly segmented retargeting and email nurture sequences that guided hesitant prospects over the finish line.' }
    ],
    roi: ['Thousands of global course enrollments', '3x Growth in Active Community', '+60% Webinar-to-Purchase Conv Rate']
  },
  {
    title: "Galito's Restaurant | Scaling Foot Traffic & Digital Orders",
    shortTitle: "Galito's",
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    industry: 'Food & Beverage / Retail',
    situation: "Galito's needed to bridge the gap between their physical footprint and their digital presence, capturing local foot traffic while driving high-margin online delivery orders.",
    strategy: [
      { label: 'Local SEO & Listings', text: 'Engineered a hyper-local search strategy so they dominated the "near me" map pack during peak lunch and dinner hours.' },
      { label: 'Conversion-Optimized Web Experience', text: 'Restructured their digital ordering flow to remove friction, making mobile checkout instantaneous to prevent drop-off.' }
    ],
    roi: ['+45% YoY Increase in Online Orders', 'Dominant #1 Local Search Ranking', 'Record-breaking geo-targeted foot traffic']
  },
  {
    title: 'Flori Oakville | Capturing High-Intent Local E-Commerce',
    shortTitle: 'Flori Oakville',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
    industry: 'Local E-Commerce',
    situation: 'Losing high-ticket event and holiday sales to national conglomerates, they needed to capture high-intent buyers exactly when they were ready to purchase.',
    strategy: [
      { label: 'Search Intent Architecture', text: 'Built a Demand Generation engine on Google Ads explicitly targeting high-value transactional keywords.' },
      { label: 'Product Marketing', text: 'Enhanced the visual storytelling of the website to reflect a luxury, artisanal brand, matching the price point to the online experience.' }
    ],
    roi: ['3x Return on Ad Spend (ROAS)', '+35% Average Order Value (AOV)', 'Sold Out holiday inventory weeks early']
  },
  {
    title: 'Texas Quality Plumbing | Predictable Lead Flow',
    shortTitle: 'Texas Plumbing',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    industry: 'Home Services / Trade',
    situation: 'Paying high costs for weak leads, they needed an automated system that generated predictable, exclusive, high-value service appointments.',
    strategy: [
      { label: 'Lead Generation Infrastructure', text: 'Built brutal, high-converting landing pages focused purely on immediate trust, guarantees, and one-click phone calls.' },
      { label: 'Local Service Ads (LSA)', text: 'Saturated the local ad market, driving the CPL down while strictly capturing users facing urgent plumbing crises.' }
    ],
    roi: ['+120% Increase in Inbound Calls', '50% Reduction in Cost Per Lead (CPL)', 'Predictable pipeline generated for fleet scale']
  }
]

// --- Components ---

function StudyModal({ study, onClose }: { study: any, onClose: () => void }) {
  // Lock body scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-3xl bg-noir-void border border-white/10 rounded-2xl overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 right-0 p-4 flex justify-end bg-noir-void/80 backdrop-blur-sm z-20 border-b border-white/5">
          <button 
            onClick={onClose}
            className="p-2 bg-white/5 hover:bg-white/10 hover:text-accent rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Header */}
        <div className="w-full h-48 md:h-64 relative -mt-[73px]">
          <img src={study.image} alt={study.shortTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-void via-noir-void/80 to-transparent" />
        </div>

        <div className="px-6 md:px-10 pb-10 pt-4 relative z-10 -mt-16">
          <div className="mb-8">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">
              {study.industry}
            </span>
            <h3 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6">
              {study.title}
            </h3>
            <p className="text-neutral-light text-lg leading-relaxed">
              {study.situation}
            </p>
          </div>

          <div className="mb-10">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-b border-white/10 pb-2">The Full-Stack Strategy</h4>
            <div className="space-y-6">
              {study.strategy.map((strat: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-light leading-relaxed">
                    <strong className="text-white font-medium">{strat.label}:</strong> {strat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Defensible ROI</h4>
            </div>
            <ul className="space-y-4">
              {study.roi.map((roiText: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="text-white font-medium text-lg">{roiText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [selectedStudy, setSelectedStudy] = useState<any | null>(null)

  return (
    <>
      <SEO
        title="Portfolio — TaqHaus | Full-Stack Growth Architecture"
        description="We don't just advise. We build growth engines. Explore our full-stack capabilities and verifiable case studies across SaaS, Fintech, and Enterprise brands."
        keywords="marketing portfolio, growth marketing case studies, b2b marketing agency, nextjs web engineering"
        canonical="/portfolio"
      />

      <div className="min-h-screen bg-noir-void text-ink font-body pt-32 md:pt-48 pb-20 selection:bg-accent/20 selection:text-white">
        
        {/* --- Hero Section Refactored --- */}
        <div className="max-w-6xl mx-auto px-6 mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-label font-bold mb-6">
              Capabilities & Case Studies
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-headline font-bold text-white leading-[1.05] tracking-tight mb-10">
              We Don't Just Advise.<br />
              <span className="text-white/40 block mt-2">We Build Growth Engines.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-12 max-w-2xl">
              <div className="w-12 h-[2px] bg-accent mt-3.5 hidden md:block flex-shrink-0" />
              <p className="text-lg md:text-xl text-neutral-light leading-relaxed">
                Forget vanity metrics. We deploy elite growth architectures designed for one singular, uncompromising outcome: <strong className="text-white">Defensible Pipeline Revenue.</strong>
              </p>
            </div>

            <a href={CALENDLY_URL} className="group inline-flex items-center gap-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              <span className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </span>
              Book Your Strategy Call
            </a>
          </motion.div>
        </div>

        {/* --- The Stack --- */}
        <div className="border-y border-white/5 bg-white/[0.01] py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">The TaqHaus Stack</h2>
              <p className="text-neutral-light">Full-Stack Marketing Strategy & Execution under one roof.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {taqhausStack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-900/40 border border-white/5 hover:border-accent/40 transition-colors rounded-2xl p-8 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/5 border border-accent/10 group-hover:border-accent/30 flex items-center justify-center mb-6 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Notion-Style Gallery View (Case Studies) --- */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-2">Featured Architectures</h2>
              <p className="text-neutral-light text-lg">Click any card to view the full-stack strategy deployed.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-[#111111] border border-white/5 hover:border-accent/40 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-lg"
                onClick={() => setSelectedStudy(study)}
              >
                {/* Image Cover Area */}
                <div className="h-56 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10" />
                  <img 
                    src={study.image} 
                    alt={study.shortTitle} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20 -mt-20">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3 block">
                    {study.industry}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                    {study.shortTitle}
                  </h3>
                  
                  <p className="text-sm text-neutral-light leading-relaxed line-clamp-3 mb-6 flex-1">
                    {study.situation}
                  </p>
                  
                  <div className="border-t border-white/5 pt-5 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" />
                      <span className="font-bold text-white text-sm line-clamp-1">{study.roi[0]}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Modal Container --- */}
        <AnimatePresence>
          {selectedStudy && (
            <StudyModal 
              study={selectedStudy} 
              onClose={() => setSelectedStudy(null)} 
            />
          )}
        </AnimatePresence>

        {/* --- Engagement Process --- */}
        <div className="max-w-4xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-headline font-bold text-white mb-10 text-center">How We Engage</h2>
          <div className="space-y-4">
            {[
              { title: 'Strategic Audit', desc: 'We analyze your business, identifying the exact gaps in your funnel and your highest-leverage growth opportunities.' },
              { title: 'The Custom Roadmap', desc: 'We deliver a precise, step-by-step strategic plan. You approve the architecture before we touch any of your infrastructure.' },
              { title: 'Full-Stack Execution', desc: 'Our team deploys the strategy—whether that means rewriting your website, launching a Meta ads ecosystem, or scaling SEO content.' },
              { title: 'Measure & Optimize', desc: 'We operate on continuous iteration. We track revenue, reduce CAC, and scale what works.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-4xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-headline font-bold text-white mb-10 md:mb-12 text-center tracking-wide">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { 
                q: "What if we already have an in-house marketing team?", 
                a: "We augment, we don't replace. We plug the specific gaps in your growth engine—whether that means acting as your fractional CMO, executing omnipresent paid media, or engineering high-performance web assets. We work alongside your talent to scale revenue faster." 
              },
              { 
                q: "How fast do you execute?", 
                a: "We operate in high-velocity sprints. Most custom growth architectures, including native web rebuilds and conversion tracking setups, are designed and launched within 30 days. Paid media demand-gen engines can go live in 14 days following the strategic audit." 
              },
              { 
                q: "Do you work on rigid retainers or sprints?", 
                a: "Both, depending on the architecture required. We offer fixed-scope, fixed-price sprints for capital asset creation (like a landing page or website rebuild) and performance-tied retainers for ongoing demand generation, paid media, and SEO." 
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Final Dual CTA --- */}
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary CTA (Tier 3) */}
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-16 text-center flex flex-col items-center justify-center">
              <div className="inline-block p-1 rounded-full bg-accent/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mx-auto animate-pulse"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">Diagnose Your Growth Engine.</h2>
              <p className="text-neutral-light mb-10 max-w-sm text-lg">
                If your marketing is generating reports instead of revenue, we need to have a conversation. No pitch. No pressure.
              </p>
              <a href={CALENDLY_URL} className="inline-flex items-center justify-center gap-3 text-sm py-5 px-8 bg-accent text-black hover:bg-white hover:text-black transition-colors rounded-full font-bold uppercase tracking-wider w-full sm:w-auto">
                Lock In Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Soft CTA (Tier 1 Lead Magnet) */}
            <div className="bg-transparent border border-white/10 hover:border-accent/40 transition-all rounded-3xl p-10 md:p-16 text-center flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <h2 className="text-2xl lg:text-3xl font-headline font-bold text-white mb-4 relative z-10 flex items-center justify-center gap-3 text-center">
                 <Target className="w-8 h-8 text-accent shrink-0 hidden md:block" />
                 Free 5-Minute Video Teardown
              </h2>
              <p className="text-neutral-light mb-10 max-w-sm text-lg relative z-10">
                Not ready for a strategy call? Send us your URL and we'll record a brutal, honest teardown of why your current landing page isn't converting.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center gap-3 text-sm py-5 px-8 bg-black/50 backdrop-blur-md border border-accent/40 text-white hover:bg-accent hover:text-black hover:border-accent transition-all rounded-full font-bold uppercase tracking-wider w-full sm:w-auto relative z-10">
                Request Teardown
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
