import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CaseStudy {
  title: string
  slug: string
  headline: string
  category: string
  image: string
  metrics: string[]
}

const allCaseStudies: CaseStudy[] = [
  {
    title: 'TopTier Trader',
    slug: '/case-studies/toptier-trader',
    headline: 'Stabilized Reputation and Grew Search Demand',
    category: 'Prop Trading Firm',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    metrics: ['+142% branded search', '+96% non-brand traffic']
  },
  {
    title: 'The Funded Trader',
    slug: '/case-studies/the-funded-trader',
    headline: 'Scaled Qualified Trader Signups while Reducing CAC',
    category: 'Prop Trading Platform',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=80',
    metrics: ['+188% organic signups', '−34% CAC']
  },
  {
    title: 'SaaS Startup',
    slug: '/case-studies/saas-startup',
    headline: 'From Page 5 to Page 1 in 6 Months',
    category: 'B2B SaaS',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    metrics: ['+320% traffic', '−60% CAC']
  },
  {
    title: 'Fashion Brand',
    slug: '/case-studies/fashion-brand',
    headline: '$57K in 90 Days from Email Automation',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
    metrics: ['+42% open rate', '$57K revenue']
  },
  {
    title: 'Public Official',
    slug: '/case-studies/public-official',
    headline: 'Repositioned Digital Image Before Campaign Season',
    category: 'Political Campaign',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80',
    metrics: ['+127% positive sentiment', '5x engagement']
  }
]

interface RelatedCaseStudiesProps {
  currentSlug: string
  count?: number
}

export default function RelatedCaseStudies({ currentSlug, count = 2 }: RelatedCaseStudiesProps) {
  // Filter out current case study and get random related ones
  const related = allCaseStudies
    .filter(cs => cs.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count)

  if (related.length === 0) return null

  return (
    <section className="py-16 bg-dark-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">Related Case Studies</h2>
          <p className="mt-4 text-neutral-light/80">Explore more success stories from our clients</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {related.map((caseStudy, idx) => (
            <m.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-900/70 hover:border-accent/30 transition-all duration-300"
            >
              <Link to={caseStudy.slug} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent/90 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm text-neutral-light/80">{caseStudy.title}</p>
                    <p className="mt-1 text-lg font-semibold text-white leading-tight">{caseStudy.headline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-light/80"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                      Read Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-accent transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full border-white/15 text-white hover:text-dark hover:bg-neutral-lighter"
            asChild
          >
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
