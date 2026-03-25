import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir-void flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 */}
          <motion.p
            className="text-8xl sm:text-[140px] font-headline font-bold text-strike/20 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404
          </motion.p>

          <h1 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            This page isn't ranking.
          </h1>

          <p className="text-lg text-ink-secondary mb-10 max-w-lg mx-auto font-body">
            Even the best pages end up off-index sometimes. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-strike inline-flex items-center justify-center gap-3 text-base"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={CALENDLY_URL}
              className="btn-ghost inline-flex items-center justify-center gap-3 text-base"
            >
              Book a Strategy Call
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-xs text-ink-muted font-label uppercase tracking-wider mb-4">You might be looking for</p>
            <div className="flex flex-wrap gap-6 justify-center text-sm font-body">
              <Link to="/services" className="text-blush hover:text-white transition-colors">Services</Link>
              <Link to="/case-studies" className="text-blush hover:text-white transition-colors">Case Studies</Link>
              <Link to="/about" className="text-blush hover:text-white transition-colors">About</Link>
              <Link to="/insights" className="text-blush hover:text-white transition-colors">Insights</Link>
              <Link to="/contact" className="text-blush hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
