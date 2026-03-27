import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Results', href: '/case-studies' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-noir-void/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="TaqHaus — Home">
            <img src="/taqhaus-logo.png" alt="TaqHaus" className="h-14 sm:h-20 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-body font-medium">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors ${
                  location.pathname === link.href
                    ? 'text-white'
                    : 'text-ink-secondary hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={CALENDLY_URL}
              className="btn-strike text-sm px-6 py-2.5 hidden sm:inline-flex items-center gap-2"
            >
              Book a Strategy Call
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-noir-void z-[70] md:hidden shadow-2xl shadow-black/50 flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-lg font-headline font-bold text-white">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-8 px-6">
                <div className="space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <Link
                        to={link.href}
                        className={`block text-lg py-3 px-4 rounded-xl transition-colors font-body font-medium ${
                          location.pathname === link.href
                            ? 'text-white bg-white/5'
                            : 'text-ink-secondary hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-white/5 space-y-3">
                <a
                  href={CALENDLY_URL}
                  className="btn-strike w-full inline-flex items-center justify-center gap-3 text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="btn-ghost w-full inline-flex items-center justify-center gap-3 text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Audit
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
