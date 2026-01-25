import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blogPosts'
import { blurFade, fadeInUp, scaleIn, staggerContainer } from '@/lib/animations'

export default function Blog() {
  const displayPosts = blogPosts.slice(0, 9)
  const categories = ['All', 'SEO', 'Email Marketing', 'Content Strategy', 'Social Media']

  return (
    <div className="min-h-screen bg-dark pt-16">
      {/* Hero Section */}
      <motion.section
        className="py-24 bg-accent text-white"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The TaqHaus Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Actionable insights on SEO, email marketing, and content strategy to help you rank first and stay first.
            </p>

            {/* Search Bar */}
            <motion.div className="max-w-2xl mx-auto" variants={scaleIn}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-12 bg-white/90 border-white/30 h-12"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filters */}
      <motion.section
        className="py-8 bg-dark-800 border-b border-dark-600"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex flex-wrap gap-3 justify-center" variants={staggerContainer(0.05)}>
            {categories.map((category, index) => (
              <motion.div key={category} variants={scaleIn} whileHover={{ y: -4 }}>
                <Button
                  variant={index === 0 ? 'default' : 'outline'}
                  size="sm"
                  className="uppercase tracking-[0.2em]"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Post */}
      <motion.section
        className="py-16 bg-dark"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp}>
            <Link to={`/blog/${displayPosts[0].slug}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-dark-800 border-dark-600">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={displayPosts[0].image}
                      alt={displayPosts[0].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-neutral mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {displayPosts[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {displayPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {displayPosts[0].readTime}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 hover:text-accent transition-colors cursor-pointer text-white">
                      {displayPosts[0].title}
                    </h2>
                    <p className="text-neutral mb-6 text-lg">
                      {displayPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral">By {displayPosts[0].author}</span>
                      <Button>
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        className="py-16 bg-dark-800"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer(0.1)}>
            {displayPosts.slice(1).map((post) => (
              <motion.div key={post.slug} variants={blurFade} whileHover={{ y: -8 }}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 bg-dark-700 border-dark-600">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 text-xs text-neutral mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors cursor-pointer line-clamp-2 text-white">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral">By {post.author}</span>
                        <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                          Read →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section
        className="py-20 bg-accent text-white"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Growth Insights Delivered to Your Inbox
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 5,000+ marketers and founders who get our weekly email with actionable SEO, email marketing, and content strategy tips.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" variants={scaleIn}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/90 border-white/30 h-12 flex-1"
              />
              <Button size="lg" variant="secondary" className="bg-white text-dark hover:bg-gray-100">
                Subscribe Now
              </Button>
            </motion.div>
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
