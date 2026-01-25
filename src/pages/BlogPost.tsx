import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug)

  // If post not found, show 404-like message
  if (!post) {
    return (
      <div className="min-h-screen bg-dark pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-dark pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {post.content.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === 'heading' && (
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{section.text}</h2>
              )}
              {section.type === 'paragraph' && (
                <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
              )}
              {section.type === 'list' && (
                <ul className="space-y-2 mb-4">
                  {section.items?.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-start gap-2">
                      <span className="text-accent mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-accent pl-6 py-4 my-6 bg-accent/10 rounded-r-lg">
                  <p className="text-lg italic text-gray-800">{section.text}</p>
                </blockquote>
              )}
            </div>
          ))}
        </motion.div>

        {/* Social Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm font-semibold text-gray-900 mb-4">Share this article</p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{post.author}</h3>
                  <p className="text-accent font-semibold mb-2">{post.authorRole}</p>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-white">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 bg-dark-700 border-dark-600">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2 text-white">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-neutral line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-neutral mt-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Scale with TaqHaus?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your free growth audit and start dominating search results.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-dark hover:bg-gray-100" asChild>
              <a href={CALENDLY_URL}>Book Your Free Audit</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
