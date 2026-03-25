import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { CALENDLY_URL } from '@/lib/constants'
import { ArrowRight, Mail, Clock, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
}

const trustPoints = [
  { icon: <Clock className="w-5 h-5" />, text: 'We respond within 24 hours' },
  { icon: <Shield className="w-5 h-5" />, text: 'Free strategic audit included' },
  { icon: <Mail className="w-5 h-5" />, text: 'No obligation. No pitch.' },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-noir-void text-ink font-body">
      <SEO
        title="Contact — TaqHaus | Book a Strategy Call"
        description="Book a 30-minute strategy call or get a free marketing audit. We respond within 24 hours."
        keywords="contact TaqHaus, book strategy call, marketing audit"
        canonical="/contact"
      />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 px-6 bg-gradient-to-b from-maroon-deep/30 to-noir-void">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-6">
              Start the Conversation
            </p>
            <h1 className="font-headline font-bold text-white">
              Book a 30-Minute
              <br />
              <span className="text-ink-secondary">Strategy Call.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-secondary max-w-xl mx-auto leading-relaxed">
              No pitch. No pressure. We learn your business, audit your marketing, and identify your highest-leverage growth opportunities.
            </p>

            {/* Trust points */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {trustPoints.map(point => (
                <div key={point.text} className="flex items-center gap-3 text-sm text-ink-secondary">
                  <span className="text-strike">{point.icon}</span>
                  {point.text}
                </div>
              ))}
            </div>

            <div className="mt-12">
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

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 px-6 bg-noir-low">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            {/* Left — Info */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-headline font-bold text-white mb-4">
                Prefer Email?
              </h2>
              <p className="text-ink-secondary leading-relaxed mb-8">
                Fill out the form and we'll respond within 24 hours with an initial assessment and next steps.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-2">Email</p>
                  <a href="mailto:info@taqhaus.com" className="text-ink-secondary hover:text-white transition-colors">
                    info@taqhaus.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-strike font-label font-medium mb-2">LinkedIn</p>
                  <a href="https://linkedin.com/company/taqhaus" className="text-ink-secondary hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    linkedin.com/company/taqhaus
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="rounded-2xl bg-noir-surface p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet — Domain Audit */}
      <section className="py-20 px-6 bg-noir-void">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">
              Get a Free Website Audit
            </h2>
            <p className="text-ink-secondary mb-8">
              Enter your domain and our team will send you a complimentary audit covering SEO, performance, and conversion opportunities.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="url"
                placeholder="yourdomain.com"
                className="flex-1 bg-transparent border-b border-white/10 focus:border-strike text-ink px-4 py-3 outline-none font-body placeholder:text-ink-muted transition-colors"
              />
              <button
                type="submit"
                className="btn-strike text-sm px-6 py-3 whitespace-nowrap"
              >
                Request Audit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
