import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { Menu, X } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/#pricing' }
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      role="navigation"
      aria-label="Main navigation"
      animate={{
        backgroundColor: isScrolled ? 'rgba(13, 13, 13, 0.96)' : 'rgba(13, 13, 13, 0.86)',
        backdropFilter: isScrolled ? 'blur(14px)' : 'blur(8px)',
        borderColor: isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-semibold"
          >
            <Link to="/" className="inline-flex items-center px-1" aria-label="TaqHaus - Home">
              <img src="/taqhaus-logo-light.png" alt="TaqHaus" className="h-16 md:h-32 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-8 uppercase tracking-[0.3em]"
            role="menubar"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => {
              const MotionLink = motion(Link)
              return (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  variants={fadeInUp}
                  className="text-neutral-light hover:text-neutral-lighter transition-colors duration-200 font-medium text-xs relative after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
                  role="menuitem"
                >
                  {link.name}
                </MotionLink>
              )
            })}
          </motion.div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="px-5 py-2 rounded-lg transition-all duration-200 text-sm font-semibold shadow-[0_12px_30px_rgba(233,122,31,0.28)]"
              asChild
            >
              <Link to="/contact" aria-label="Request a strategic audit">Request Audit</Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="px-5 py-2 rounded-lg transition-all duration-200 text-sm font-semibold border-white/15 text-white hover:text-dark hover:bg-neutral-lighter"
              asChild
            >
              <a href={CALENDLY_URL} aria-label="Book a consultation">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-dark-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              <motion.div
                id="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm !bg-[#0D0D0D] z-50 md:hidden shadow-2xl"
                style={{ backgroundColor: '#0D0D0D' }}
                role="menu"
              >
                <div className="flex flex-col h-full bg-[#0D0D0D]">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0D0D0D]">
                    <span className="text-lg font-semibold text-white">Menu</span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-md hover:bg-white/10 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto py-8 px-6 bg-[#0D0D0D]">
                    <div className="space-y-2">
                      {navLinks.map((link, idx) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Link
                            to={link.href}
                            className="block text-lg text-neutral-light hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg font-medium uppercase tracking-wider"
                            onClick={() => setMobileMenuOpen(false)}
                            role="menuitem"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* CTA Buttons */}
                  <div className="p-6 space-y-3 border-t border-white/10 bg-[#0D0D0D]">
                    <Button
                      size="lg"
                      className="w-full rounded-lg shadow-[0_12px_30px_rgba(233,122,31,0.28)]"
                      asChild
                    >
                      <Link to="/contact" onClick={() => setMobileMenuOpen(false)} aria-label="Request a strategic audit">Request Audit</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-lg border-white/15 text-white hover:text-dark hover:bg-neutral-lighter"
                      asChild
                    >
                      <a href={CALENDLY_URL} onClick={() => setMobileMenuOpen(false)} aria-label="Book a consultation">Book Consultation</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
