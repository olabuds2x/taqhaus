import { useEffect } from 'react'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

const SITE_URL = 'https://www.taqhaus.com'
const DEFAULT_OG_IMAGE = '/images/og-default.png'

function upsertMeta(attr: string, value: string, content: string) {
  let meta = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr === 'property' ? 'property' : 'name', value)
    document.head.appendChild(meta)
  }
  meta.content = content
}

export default function SEO({ title, description, keywords, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
      upsertMeta('name', 'twitter:title', title)
    }

    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }

    if (keywords) {
      upsertMeta('name', 'keywords', keywords)
    }

    // OG type
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'TaqHaus')

    // OG image
    const img = ogImage || DEFAULT_OG_IMAGE
    upsertMeta('property', 'og:image', img.startsWith('http') ? img : `${SITE_URL}${img}`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:image', img.startsWith('http') ? img : `${SITE_URL}${img}`)

    // Canonical + OG URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`
      upsertMeta('property', 'og:url', canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`)
    }
  }, [title, description, keywords, canonical, ogImage])

  return null
}

// Also export a named version for flexibility
export { SEO }
