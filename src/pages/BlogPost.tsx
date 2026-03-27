import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CALENDLY_URL } from '@/lib/constants'
import { Calendar, Clock, ArrowLeft, Linkedin, Twitter } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { SEO } from '@/components/SEO'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug)

  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-noir-void text-ink font-body pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-4 text-white">Post Not Found</h1>
          <p className="text-ink-secondary mb-8">The strategy insight you're looking for doesn't exist.</p>
          <Link to="/insights" className="inline-flex items-center text-strike hover:text-strike/80 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts


  return (
    <div className="min-h-screen bg-noir-void text-ink font-body">
      <SEO
        title={`${post.title} — TaqHaus Insights`}
        description={post.excerpt}
        canonical={`/insights/${post.slug}`}
      />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 px-6 bg-gradient-to-b from-maroon-deep/20 to-noir-void">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-12">
            <Link 
              to="/insights"
              className="inline-flex items-center text-ink-muted hover:text-white transition-colors text-sm font-label uppercase tracking-widest"
            >
              <ArrowLeft className="mr-3 w-4 h-4" />
              Back to Insights
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-label tracking-[0.2em] uppercase rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-ink-muted font-label uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-[1.1] mb-12">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-noir-surface border border-white/10 flex items-center justify-center text-white font-headline font-bold text-lg hidden sm:flex">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-white font-headline tracking-wide">{post.author}</p>
                  <p className="text-xs text-ink-muted uppercase tracking-widest">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-ink-muted font-label uppercase tracking-widest mr-2">Share</span>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ink-muted hover:text-white hover:bg-white/10 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ink-muted hover:text-white hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-16 -mt-6"
        >
          <div className="aspect-[2/1] w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
            <div className="absolute inset-0 bg-noir-void/30 mix-blend-overlay z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover grayscale opacity-80"
            />
            {/* Noir overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-noir-void via-transparent to-transparent z-20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <p className="text-2xl md:text-3xl text-white max-w-2xl font-headline italic mb-16 leading-relaxed border-l-2 border-strike pl-8 py-2">
            {post.excerpt}
          </p>

          <div className="space-y-8">
            {post.content.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' && (
                  <h2 className="text-3xl font-headline font-bold text-white mt-16 mb-6">{section.text}</h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-lg text-ink-secondary leading-[1.8]">{section.text}</p>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-4 my-8 p-8 rounded-2xl bg-noir-surface border border-white/5">
                    {section.items?.map((item, i) => (
                      <li key={i} className="text-lg text-ink-secondary flex items-start gap-4">
                        <span className="text-strike font-bold select-none mt-1">→</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.type === 'quote' && (
                  <blockquote className="my-12 relative px-8 py-8 rounded-r-2xl border-l-4 border-strike bg-gradient-to-r from-strike/10 to-transparent">
                    <p className="text-xl md:text-2xl italic text-white font-headline leading-relaxed">
                      "{section.text}"
                    </p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Author Bio Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 sm:p-10 rounded-2xl bg-noir-surface border border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-headline font-bold text-3xl flex-shrink-0">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-xs text-strike font-label font-bold tracking-widest uppercase mb-2">Written By</p>
              <h3 className="text-3xl font-headline font-bold text-white mb-2">{post.author}</h3>
              <p className="text-ink-muted text-sm uppercase tracking-widest font-label mb-4">{post.authorRole}</p>
              <p className="text-ink-secondary leading-relaxed max-w-xl text-lg">{post.authorBio}</p>
            </div>
          </div>
        </motion.div>
      </article>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-noir-void to-maroon-deep/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-strike text-xs sm:text-sm uppercase tracking-[0.3em] font-label font-bold mb-6">
              Next Steps
            </p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 leading-tight">
              Ready to Scale with TaqHaus?
            </h2>
            <p className="text-xl mb-12 text-ink-secondary max-w-xl mx-auto leading-relaxed">
              Get your free growth audit and start diagnosing the operational friction holding you back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={CALENDLY_URL}
                className="btn-strike w-full sm:w-auto text-base"
              >
                Book Your Strategy Call
              </a>
              <Link
                to="/services"
                className="btn-ghost w-full sm:w-auto text-base"
              >
                View Consulting Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
