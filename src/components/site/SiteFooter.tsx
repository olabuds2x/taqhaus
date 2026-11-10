import { Link } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { HookArrow } from './HookArrow'

const pills = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/for-small-businesses', label: 'Small businesses' },
  { to: '/public-figures', label: 'Public figures' },
  { to: '/case-studies', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

/** "Get started today" marquee + pine footer, shared by every editorial page. */
export default function SiteFooter() {
  const run = Array.from({ length: 6 })

  return (
    <>
      <a
        href={CALENDLY_URL}
        className="sfoot-marquee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a free 20-minute call"
      >
        <div className="sfoot-marquee-track" aria-hidden="true">
          {run.map((_, i) => (
            <span key={i} className="sfoot-marquee-item">
              Get started today
              <span className="tile"><HookArrow /></span>
            </span>
          ))}
        </div>
      </a>

      <footer className="sfoot">
        <div className="wrap">
          <div className="sfoot-top">
            <div className="sfoot-brand">
              <img src="/taqhaus-logo-ivory.png" alt="TaqHaus" width={440} height={150} loading="lazy" />
              <p>We do your marketing for you, and show you the numbers every month.</p>
            </div>
            <div className="sfoot-cta">
              <p>Tell us what's not working. In 20 minutes we'll tell you how we'd fix it, whether or not you hire us.</p>
              <div className="sfoot-cta-row">
                <a href={CALENDLY_URL} className="pill-btn pill-btn--coral" target="_blank" rel="noopener noreferrer">
                  Book a free 20-minute call <HookArrow />
                </a>
                <a href="mailto:info@taqhaus.com" className="sfoot-mail">info@taqhaus.com</a>
              </div>
            </div>
          </div>

          <nav className="sfoot-pills" aria-label="Footer">
            {pills.map(p => (
              <Link key={p.to} to={p.to}>{p.label}</Link>
            ))}
          </nav>

          <div className="sfoot-bottom">
            <span>© {new Date().getFullYear()} TaqHaus Consultancy Inc. · Made in Toronto, serving everywhere</span>
            <div className="sfoot-social">
              <a href="https://linkedin.com/company/taqhaus" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/taqhaus" target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
