import { matchRoutes } from 'react-router-dom'
import { lazyPage, type LazyPage } from '@/lib/lazyPage'

/* Each page is its own chunk; see lazyPage for how the first view avoids a blank frame. */
const NotFound = lazyPage(() => import('@/pages/NotFound'))
const LandingPageRedesign = lazyPage(() => import('@/pages/LandingPageRedesign'))
const Services = lazyPage(() => import('@/pages/Services'))
const About = lazyPage(() => import('@/pages/About'))
const Contact = lazyPage(() => import('@/pages/Contact'))
const Insights = lazyPage(() => import('@/pages/Insights'))
const CaseStudiesIndex = lazyPage(() => import('@/pages/CaseStudiesIndex'))
const CaseStudyTFT = lazyPage(() => import('@/pages/CaseStudyTFT'))
const CaseStudyTopTier = lazyPage(() => import('@/pages/CaseStudyTopTier'))
const CaseStudySaaS = lazyPage(() => import('@/pages/CaseStudySaaS'))
const CaseStudyFashion = lazyPage(() => import('@/pages/CaseStudyFashion'))
const CaseStudyPublicOfficial = lazyPage(() => import('@/pages/CaseStudyPublicOfficial'))
const Portfolio = lazyPage(() => import('@/pages/Portfolio'))
const BlogPost = lazyPage(() => import('@/pages/BlogPost'))
const PublicFigures = lazyPage(() => import('@/pages/PublicFigures'))
const ForSmallBusinesses = lazyPage(() => import('@/pages/ForSmallBusinesses'))
const ServiceSocialMedia = lazyPage(() => import('@/pages/ServiceSocialMedia'))
const ServiceSEO = lazyPage(() => import('@/pages/ServiceSEO'))
const ServiceEmailMarketing = lazyPage(() => import('@/pages/ServiceEmailMarketing'))
const ServicePaidAds = lazyPage(() => import('@/pages/ServicePaidAds'))
const ServiceWebsites = lazyPage(() => import('@/pages/ServiceWebsites'))
const ServiceGraphicDesign = lazyPage(() => import('@/pages/ServiceGraphicDesign'))
const ServiceMotionGraphics = lazyPage(() => import('@/pages/ServiceMotionGraphics'))
const ServiceContentWriting = lazyPage(() => import('@/pages/ServiceContentWriting'))
const GoogleOffer = lazyPage(() => import('@/pages/GoogleOffer'))
const GoogleOfferTerms = lazyPage(() => import('@/pages/GoogleOfferTerms'))
const GoogleOnboarding = lazyPage(() => import('@/pages/GoogleOnboarding'))
const Privacy = lazyPage(() => import('@/pages/Privacy'))

/* ── Route table ──
   `footer`: Tailwind-built pages that don't render the shared footer themselves. */
export const ROUTES: { path: string; page: LazyPage; footer?: boolean }[] = [
  { path: '/', page: LandingPageRedesign },
  { path: '/services', page: Services },
  { path: '/services/social-media', page: ServiceSocialMedia },
  { path: '/services/seo', page: ServiceSEO },
  { path: '/services/email-marketing', page: ServiceEmailMarketing },
  { path: '/services/paid-ads', page: ServicePaidAds },
  { path: '/services/websites', page: ServiceWebsites },
  { path: '/services/graphic-design', page: ServiceGraphicDesign },
  { path: '/services/motion-graphics', page: ServiceMotionGraphics },
  { path: '/services/content-writing', page: ServiceContentWriting },
  { path: '/public-figures', page: PublicFigures },
  { path: '/for-small-businesses', page: ForSmallBusinesses },
  { path: '/about', page: About },
  { path: '/contact', page: Contact },
  { path: '/insights', page: Insights },
  { path: '/case-studies', page: CaseStudiesIndex },
  { path: '/google', page: GoogleOffer },
  { path: '/google/terms', page: GoogleOfferTerms },
  { path: '/google/welcome', page: GoogleOnboarding },
  { path: '/privacy', page: Privacy },
  { path: '/portfolio', page: Portfolio, footer: true },
  { path: '/insights/:slug', page: BlogPost, footer: true },
  { path: '/case-studies/the-funded-trader', page: CaseStudyTFT, footer: true },
  { path: '/case-studies/toptier-trader', page: CaseStudyTopTier, footer: true },
  { path: '/case-studies/saas-startup', page: CaseStudySaaS, footer: true },
  { path: '/case-studies/fashion-brand', page: CaseStudyFashion, footer: true },
  { path: '/case-studies/public-official', page: CaseStudyPublicOfficial, footer: true },
  { path: '*', page: NotFound },
]

/** Load the chunk for `pathname` so the first render doesn't suspend. */
export function preloadRoute(pathname: string): Promise<unknown> {
  const match = matchRoutes(ROUTES, pathname)?.[0]?.route as (typeof ROUTES)[number] | undefined
  return (match ?? ROUTES[ROUTES.length - 1]).page.preload()
}

