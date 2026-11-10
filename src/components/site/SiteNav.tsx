import '@/styles/taqhaus-editorial.css'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CALENDLY_URL } from '@/lib/constants'
import { HookArrow } from './HookArrow'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

/** Floating pine nav bar shared by every editorial page. */
export default function SiteNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`)

  return (
    <header className="snav" data-open={open || undefined}>
      <div className="snav-bar">
        <Link to="/" className="snav-logo" aria-label="TaqHaus home">
          <img src="/taqhaus-logo-ivory.png" alt="TaqHaus" width={132} height={45} />
        </Link>

        <nav className="snav-links" aria-label="Main">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={isActive(l.to) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <a href={CALENDLY_URL} className="snav-cta" target="_blank" rel="noopener noreferrer">
          Book a free call <HookArrow />
        </a>

        <button
          type="button"
          className="snav-toggle"
          aria-expanded={open}
          aria-controls="snav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span />
        </button>
      </div>

      <nav id="snav-menu" className="snav-menu" aria-label="Mobile" hidden={!open}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={isActive(l.to) ? 'active' : undefined}>
            {l.label}
          </Link>
        ))}
        <a href={CALENDLY_URL} className="snav-cta snav-cta--block" target="_blank" rel="noopener noreferrer">
          Book a free 20-minute call <HookArrow />
        </a>
      </nav>
    </header>
  )
}
