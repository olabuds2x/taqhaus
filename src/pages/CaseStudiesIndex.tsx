import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

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
        title="Case Studies - TaqHaus"
        description="Explore our portfolio of successful marketing campaigns across fintech, e-commerce, SaaS, and political sectors. See how we drive measurable results."
        keywords="marketing case studies, fintech marketing, saas growth, ecommerce success stories, political campaigns"
      />

      <div className="min-h-screen bg-dark text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-accent">Success Stories</span>
            </h1>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Explore how we've helped businesses across industries achieve remarkable growth through strategic marketing.
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-neutral-light text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your business achieve similar results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent text-dark rounded-full font-semibold hover:bg-accent/90 transition-all shadow-[0_12px_30px_rgba(233,122,31,0.28)] hover:shadow-[0_16px_40px_rgba(233,122,31,0.35)]"
              >
                Request Your Strategic Audit
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
