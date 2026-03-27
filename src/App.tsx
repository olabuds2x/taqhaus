import { ErrorBoundary } from '@/components/ErrorBoundary'
import ScrollToTop from '@/components/ScrollToTop'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NotFound from '@/pages/NotFound'
import LandingPageRedesign from '@/pages/LandingPageRedesign'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Insights from '@/pages/Insights'
import CaseStudiesIndex from '@/pages/CaseStudiesIndex'
import CaseStudyTFT from '@/pages/CaseStudyTFT'
import CaseStudyTopTier from '@/pages/CaseStudyTopTier'
import CaseStudySaaS from '@/pages/CaseStudySaaS'
import CaseStudyFashion from '@/pages/CaseStudyFashion'
import CaseStudyPublicOfficial from '@/pages/CaseStudyPublicOfficial'
import Portfolio from '@/pages/Portfolio'
import BlogPost from '@/pages/BlogPost'

/* ── Route renderer ── */
function AppRoutes() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <ScrollToTop />

      {/* Show shared nav on all pages EXCEPT homepage (homepage has its own) */}
      {!isHome && <Navigation />}

      <Routes>
        <Route path="/" element={<LandingPageRedesign />} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/insights" element={<><Insights /><Footer /></>} />
        <Route path="/portfolio" element={<><Portfolio /><Footer /></>} />
        <Route path="/insights/:slug" element={<><BlogPost /><Footer /></>} />
        <Route path="/case-studies" element={<><CaseStudiesIndex /><Footer /></>} />
        <Route path="/case-studies/the-funded-trader" element={<><CaseStudyTFT /><Footer /></>} />
        <Route path="/case-studies/toptier-trader" element={<><CaseStudyTopTier /><Footer /></>} />
        <Route path="/case-studies/saas-startup" element={<><CaseStudySaaS /><Footer /></>} />
        <Route path="/case-studies/fashion-brand" element={<><CaseStudyFashion /><Footer /></>} />
        <Route path="/case-studies/public-official" element={<><CaseStudyPublicOfficial /><Footer /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
