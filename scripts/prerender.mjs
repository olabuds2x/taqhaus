/**
 * Post-build prerender for the TaqHaus SPA.
 *
 * Serves the freshly built `dist/`, drives each marketing route in headless
 * Chromium, and writes the fully rendered HTML back to `dist/<route>/index.html`.
 * Vercel checks the filesystem before applying the SPA rewrite, so crawlers
 * receive real content while the client app hydrates over it as usual.
 *
 * Fail-soft by design: if the browser cannot launch (e.g. a CI image without
 * Playwright browsers), the script logs a warning and exits 0 so the deploy
 * still ships the plain SPA.
 */
import { createServer } from 'node:http'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'

const DIST = path.resolve(process.cwd(), 'dist')
const PORT = 4179

const STATIC_ROUTES = [
  '/',
  '/services',
  '/services/social-media',
  '/services/seo',
  '/services/email-marketing',
  '/services/paid-ads',
  '/services/websites',
  '/services/graphic-design',
  '/services/motion-graphics',
  '/services/content-writing',
  '/for-small-businesses',
  '/public-figures',
  '/about',
  '/contact',
  '/portfolio',
  '/insights',
  '/case-studies',
  '/case-studies/the-funded-trader',
  '/case-studies/toptier-trader',
  '/case-studies/saas-startup',
  '/case-studies/fashion-brand',
  '/case-studies/public-official',
]

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
}

async function blogSlugs() {
  // Slugs live in src/data/blogPosts.ts as `slug: '...'`
  try {
    const src = await readFile(path.resolve(process.cwd(), 'src/data/blogPosts.ts'), 'utf8')
    return [...src.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(m => `/insights/${m[1]}`)
  } catch {
    return []
  }
}

function serveDist() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${PORT}`)
      let filePath = path.join(DIST, decodeURIComponent(url.pathname))
      if (!existsSync(filePath) || url.pathname === '/' || !path.extname(filePath)) {
        filePath = path.join(DIST, 'index.html') // SPA fallback
      }
      const body = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] ?? 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(404)
      res.end('not found')
    }
  })
  return new Promise(resolve => server.listen(PORT, () => resolve(server)))
}

async function launchBrowser() {
  const { chromium } = await import('playwright')
  try {
    return await chromium.launch()
  } catch (err) {
    if (String(err).includes("Executable doesn't exist")) {
      console.log('[prerender] Playwright browser missing — installing chromium…')
      execSync('npx playwright install chromium', { stdio: 'inherit' })
      return await chromium.launch()
    }
    throw err
  }
}

async function prerenderRoute(page, route) {
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'load', timeout: 30000 })
  await page.waitForTimeout(900)
  // Scroll through the page so whileInView reveals fire, then return to top.
  await page.evaluate(async () => {
    const height = document.body.scrollHeight
    for (let y = 0; y < height; y += 700) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 60))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(400)
  const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)

  const outDir = route === '/' ? DIST : path.join(DIST, route)
  await mkdir(outDir, { recursive: true })
  await writeFile(path.join(outDir, 'index.html'), html)
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found — run vite build first.')
    process.exit(1)
  }

  const routes = [...STATIC_ROUTES, ...(await blogSlugs())]
  const server = await serveDist()

  let browser
  try {
    browser = await launchBrowser()
  } catch (err) {
    console.warn('[prerender] Could not launch a browser — skipping prerender. The SPA will still deploy.')
    console.warn(`[prerender] ${err}`)
    server.close()
    process.exit(0)
  }

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  let ok = 0
  const failed = []
  for (const route of routes) {
    try {
      await prerenderRoute(page, route)
      ok++
      console.log(`[prerender] ✓ ${route}`)
    } catch (err) {
      failed.push(route)
      console.warn(`[prerender] ✗ ${route}: ${String(err).split('\n')[0]}`)
    }
  }

  await browser.close()
  server.close()
  console.log(`[prerender] Done — ${ok}/${routes.length} routes prerendered${failed.length ? `, failed: ${failed.join(', ')}` : ''}.`)
}

main()
