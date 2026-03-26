import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { CALENDLY_URL } from '@/lib/constants'

export default function CaseStudiesIndex() {
  const caseStudies = [
    {
      title: 'TopTier Trader',
      industry: 'Fintech',
      description: 'Scaled a proprietary trading firm from startup to industry leader through strategic digital marketing.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      link: '/case-studies/toptier-trader',
      metrics: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '425%' },
        { icon: Users, label: 'New Traders', value: '12K+' },
        { icon: Target, label: 'ROI', value: '8.5x' }
      ],
      tags: ['Fintech', 'B2B', 'Lead Generation']
    },
    {
      title: 'The Funded Trader',
      industry: 'Finance',
      description: 'Transformed a forex education platform into a thriving trading community with strategic content marketing.',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
      link: '/case-studies/the-funded-trader',
      metrics: [
        { icon: TrendingUp, label: 'Student Growth', value: '340%' },
        { icon: Users, label: 'Active Community', value: '25K+' },
        { icon: Target, label: 'Engagement', value: '12x' }
      ],
      tags: ['Education', 'Finance', 'Community']
    },
    {
      title: 'SaaS Startup',
      industry: 'Technology',
      description: 'Helped a B2B SaaS startup achieve product-market fit and scale to $2M ARR in 18 months.',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
      link: '/case-studies/saas-startup',
      metrics: [
        { icon: TrendingUp, label: 'ARR Growth', value: '$2M' },
        { icon: Users, label: 'Enterprise Clients', value: '50+' },
        { icon: Target, label: 'Conversion Rate', value: '18%' }
      ],
      tags: ['SaaS', 'B2B', 'Growth']
    },
    {
      title: 'Fashion Brand',
      industry: 'E-commerce',
      description: 'Elevated a sustainable fashion brand through influencer marketing and authentic storytelling.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
      link: '/case-studies/fashion-brand',
      metrics: [
        { icon: TrendingUp, label: 'Sales Increase', value: '280%' },
        { icon: Users, label: 'Social Following', value: '150K+' },
        { icon: Target, label: 'Engagement Rate', value: '8.2%' }
      ],
      tags: ['E-commerce', 'B2C', 'Social Media']
    },
    {
      title: 'Public Official Campaign',
      industry: 'Political',
      description: 'Orchestrated a digital-first campaign that secured victory in a competitive electoral race.',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop',
      link: '/case-studies/public-official',
      metrics: [
        { icon: TrendingUp, label: 'Vote Share', value: '+15%' },
        { icon: Users, label: 'Volunteer Base', value: '5K+' },
        { icon: Target, label: 'Voter Reach', value: '500K+' }
      ],
      tags: ['Political', 'Grassroots', 'Digital Strategy']
    }
  ]

  return (
    <>
      <SEO
        title="Results — TaqHaus | Selected Case Studies"
        description="A look at selected results across fintech, e-commerce, SaaS, and political sectors. See how TaqHaus drives measurable growth."
        keywords="marketing case studies, fintech marketing, saas growth, ecommerce success stories, political campaigns"
        canonical="/case-studies"
      />

      <div className="min-h-screen bg-noir-void text-ink font-body pt-32 sm:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-6">
              Selected Results
            </p>
            <h1 className="font-headline font-bold text-white">
              A Few of the Brands
              <br />
              <span className="text-ink-secondary">We've Helped Grow.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              We've worked across industries and sectors — from fintech to fashion, SaaS to politics. Here are some of the results we can share.
            </p>
          </motion.div>

          {/* Vertical Cards - Alternating Layout */}
          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-900/70 hover:border-accent/30 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                {/* Image */}
                <div className="relative h-80 md:h-96 md:w-1/2 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-900/40 via-transparent to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-dark-900/90 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <div className="mb-3 text-accent text-sm font-bold tracking-[0.2em] uppercase">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-neutral-light mb-8 leading-relaxed text-base md:text-lg">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/10">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center md:text-left">
                        <metric.icon className="w-6 h-6 mx-auto md:mx-0 mb-2 text-accent" />
                        <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-neutral-light">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={study.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors group/link text-base"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="rounded-2xl bg-gradient-to-b from-maroon-deep/20 to-noir-void border border-white/5 p-12 sm:p-16">
              <p className="text-strike text-sm uppercase tracking-[0.3em] font-label font-medium mb-4">
                More Where That Came From
              </p>
              <h2 className="font-headline font-bold text-white">
                Want Results Like These?
              </h2>
              <p className="mt-6 text-lg text-ink-secondary max-w-xl mx-auto">
                These are just a few of the brands we work with. Book a call to discuss how we'd approach your growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  className="btn-strike inline-flex items-center justify-center gap-3 text-base"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="btn-ghost inline-flex items-center justify-center gap-3 text-base"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
