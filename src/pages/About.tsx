import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

export default function About() {
  return (
    <div className="min-h-screen bg-dark pt-16">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We are not just another <span className="text-accent">marketing agency</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-3xl mx-auto">
              We are a team obsessed with one thing: turning your digital presence into a revenue-generating machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team working together"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg text-neutral-light/80">
                <p>
                  At TaqHaus, we do not chase vanity metrics. We do not care about likes, followers, or brand awareness that does not convert. We care about <strong>measurable growth</strong>: the kind that shows up in your revenue reports, not just your analytics dashboard.
                </p>
                <p>
                  We built this agency on a simple truth: your most valuable digital asset is not your social media following. It is your email list. It is your search rankings. It is the content that brings qualified buyers to your door, ready to invest. That is why we focus on SEO, email marketing, and content strategy: the three pillars that actually move the needle.
                </p>
                <p>
                  Our clients come to us when they are tired of agencies that overpromise and underdeliver. They stay because we build systems that generate <strong>consistent, predictable growth</strong>. Whether you are buried on page five or already ranking but ready to scale, we meet you where you are and take you where you need to be.
                </p>
              </div>

              <div className="bg-white/10 border-l-4 border-accent p-6">
                <p className="font-semibold text-white/90 text-lg">
                  Our mission is simple: help ambitious brands rank first, stay first, and turn their digital presence into a revenue-generating machine.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-accent">Stand For</span>
            </h2>
            <p className="text-xl text-neutral-light/80 max-w-2xl mx-auto">
              These principles guide everything we do, from strategy to execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Results Over Vanity',
                description: 'We care about revenue, leads, and conversions, not likes and followers.',
                color: 'purple' as const
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Transparency Always',
                description: 'No black-box tactics. We show you exactly what we are doing and why.',
                color: 'blue' as const
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Partnership Mindset',
                description: "We are on your team, invested in your success like it is our own.",
                color: 'cyan' as const
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Long-Term Growth',
                description: 'We build systems and strategies that compound over time, not quick fixes.',
                color: 'indigo' as const
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center text-white mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-neutral-light/80 max-w-3xl mx-auto">
              Our team combines data-driven strategists, SEO specialists, conversion copywriters, and growth marketers who have helped generate millions in revenue for clients across e-commerce, SaaS, and service-based businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Alex Rivera',
                role: 'Founder & SEO Strategist',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
                bio: '10+ years in SEO, helped 200+ brands rank #1'
              },
              {
                name: 'Sarah Chen',
                role: 'Email Marketing Director',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
                bio: 'Generated $15M+ in email revenue for clients'
              },
              {
                name: 'Marcus Johnson',
                role: 'Content Strategy Lead',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
                bio: 'Built content engines for 50+ high-growth companies'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-dark-900/80 border-white/10 text-neutral-light">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold mb-2">{member.role}</p>
                    <p className="text-neutral-light/80">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Track <span className="text-accent">Record</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers do not lie. Here is what we have achieved for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '$2.4M+', label: 'Revenue Generated' },
              { value: '217%', label: 'Avg Traffic Growth' },
              { value: '94%', label: 'Client Retention' },
              { value: '150+', label: 'Projects Completed' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us build a growth system that actually works for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href={CALENDLY_URL}>
                  Book Your Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/case-studies">View Case Studies</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
