import { ErrorBoundary } from '@/components/ErrorBoundary'
import ScrollToTop from '@/components/ScrollToTop'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { ROUTES } from '@/routes'
import { isPrerenderedFirstView } from '@/lib/firstView'
/* Pages using the editorial design system — they include their own nav + footer */
const EDITORIAL_ROUTES = [
  '/', '/services', '/about', '/contact', '/insights', '/case-studies',
  '/public-figures', '/for-small-businesses',
  '/services/social-media', '/services/seo', '/services/email-marketing',
  '/services/paid-ads', '/services/websites', '/services/graphic-design',
  '/services/motion-graphics', '/services/content-writing',
  /* $99 Google package funnel: own minimal header, no site nav */
  '/google', '/google/terms', '/google/welcome',
  '/privacy',
]

/* Wraps shared chrome so its scoped styles apply on Tailwind-built pages. */
function Chrome({ children }: { children: React.ReactNode }) {
  return <div className="tq-editorial tq-chrome">{children}</div>
}

/* ── Route renderer ── */
function AppRoutes() {
  const location = useLocation()
  const isEditorial = EDITORIAL_ROUTES.includes(location.pathname)
  // Marks the landing page as left as soon as the URL changes, so entrances
  // play on every later page, including a return to the first one.
  isPrerenderedFirstView()

  return (
    <>
      <ScrollToTop />

      {/* Pages outside the editorial system get the same nav as everyone else.
          `display: contents` keeps the sticky nav relative to the page. */}
      {!isEditorial && <div className="tq-editorial tq-chrome"><SiteNav /></div>}

      {/* Navigations run in a transition (React Router v7), so the current page
          stays on screen while the next chunk loads; this fallback only shows
          if a chunk is requested outside a transition. */}
      <Suspense fallback={null}>
        <Routes>
          {ROUTES.map(({ path, page: Page, footer }) => (
            <Route
              key={path}
              path={path}
              element={footer ? <><Page /><Chrome><SiteFooter /></Chrome></> : <Page />}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      {/* domAnimation covers everything the site uses (animate, exit, whileInView,
          hover/tap) at roughly half the size of the full `motion` component.
          reducedMotion="user" honours the OS "reduce motion" setting for
          JS-driven animations, which the CSS media queries can't reach. */}
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </ErrorBoundary>
  )
}

export default App
