import { ErrorBoundary } from '@/components/ErrorBoundary'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NotFound from '@/pages/NotFound'
import CaseStudyTFT from '@/pages/CaseStudyTFT'
import CaseStudyTopTier from '@/pages/CaseStudyTopTier'
import CaseStudySaaS from '@/pages/CaseStudySaaS'
import CaseStudyFashion from '@/pages/CaseStudyFashion'
import CaseStudyPublicOfficial from '@/pages/CaseStudyPublicOfficial'
import Contact from '@/pages/Contact'
import CaseStudiesIndex from '@/pages/CaseStudiesIndex'
import LandingPageRedesign from '@/pages/LandingPageRedesign'

// Wrapper component that conditionally renders Navigation
function AppContent() {
  const location = useLocation();
  const isLandingNew = location.pathname === '/landing-new';

  return (
    <>
      <ScrollToTop />
      {!isLandingNew && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/the-funded-trader" element={<CaseStudyTFT />} />
        <Route path="/case-studies/toptier-trader" element={<CaseStudyTopTier />} />
        <Route path="/case-studies/saas-startup" element={<CaseStudySaaS />} />
        <Route path="/case-studies/fashion-brand" element={<CaseStudyFashion />} />
        <Route path="/case-studies/public-official" element={<CaseStudyPublicOfficial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing-new" element={<LandingPageRedesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
