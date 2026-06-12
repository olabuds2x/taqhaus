/**
 * Generates the OG share-card set (1200x630) from the editorial design system.
 * Output is committed to public/images — run `node scripts/og-generate.mjs`
 * whenever copy or cards change.
 */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve(process.cwd(), 'public/images')

const VARIANTS = {
  ink: {
    bg: 'oklch(0.17 0.012 60)',
    text: 'oklch(0.967 0.012 78)',
    sub: 'oklch(0.967 0.012 78 / 0.65)',
    accent: 'oklch(0.62 0.135 38)',
    grid: 'oklch(0.967 0.012 78 / 0.07)',
    hairline: 'oklch(0.967 0.012 78 / 0.22)',
  },
  terra: {
    bg: 'oklch(0.62 0.135 38)',
    text: 'oklch(0.967 0.012 78)',
    sub: 'oklch(0.967 0.012 78 / 0.78)',
    accent: 'oklch(0.17 0.012 60)',
    grid: 'oklch(0.967 0.012 78 / 0.14)',
    hairline: 'oklch(0.967 0.012 78 / 0.35)',
  },
  paper: {
    bg: 'oklch(0.967 0.012 78)',
    text: 'oklch(0.17 0.012 60)',
    sub: 'oklch(0.32 0.012 60)',
    accent: 'oklch(0.62 0.135 38)',
    grid: 'oklch(0.17 0.012 60 / 0.05)',
    hairline: 'oklch(0.85 0.015 70)',
  },
}

const CARDS = [
  {
    file: 'og-default.png',
    variant: 'ink',
    eyebrow: 'Marketing, done for you',
    meta: 'Free 20-minute call',
    headline: 'You run the business. <em>We handle the&nbsp;marketing.</em>',
    size: 110,
    foot: 'taqhaus.com',
  },
  {
    file: 'og/services.png',
    variant: 'paper',
    eyebrow: 'Services',
    meta: '09 disciplines · One team',
    headline: 'Strategy and execution. <em>Under one&nbsp;roof.</em>',
    size: 112,
    foot: 'taqhaus.com/services',
  },
  {
    file: 'og/insights.png',
    variant: 'paper',
    eyebrow: 'Insights',
    meta: 'Essays · Playbooks · Field notes',
    headline: 'Field notes from <em>inside the&nbsp;work.</em>',
    size: 112,
    foot: 'taqhaus.com/insights',
  },
  {
    file: 'og/case-the-funded-trader.png',
    variant: 'terra',
    eyebrow: 'Case study — The Funded Trader',
    meta: 'Prop trading · Fintech',
    headline: '<em>+188%</em> organic signups. <em>−34%</em>&nbsp;CAC.',
    size: 108,
    foot: 'taqhaus.com/case-studies',
  },
  {
    file: 'og/case-toptier-trader.png',
    variant: 'ink',
    eyebrow: 'Case study — TopTier Trader',
    meta: 'Prop trading · Reputation',
    headline: '<em>+142%</em> branded search after the narrative was&nbsp;rebuilt.',
    size: 96,
    foot: 'taqhaus.com/case-studies',
  },
  {
    file: 'og/case-saas-startup.png',
    variant: 'paper',
    eyebrow: 'Case study — SaaS startup',
    meta: 'SaaS · B2B',
    headline: 'Page 5 <em>→ 1</em> in six months. <em>+320%</em> organic&nbsp;traffic.',
    size: 96,
    foot: 'taqhaus.com/case-studies',
  },
  {
    file: 'og/case-fashion-brand.png',
    variant: 'terra',
    eyebrow: 'Case study — Fashion brand',
    meta: 'Fashion · Ecommerce',
    headline: '<em>$57K</em> in 90 days from email&nbsp;automation.',
    size: 104,
    foot: 'taqhaus.com/case-studies',
  },
  {
    file: 'og/case-public-official.png',
    variant: 'ink',
    eyebrow: 'Case study — Elected official',
    meta: 'Public figure · Politics',
    headline: '<em>5×</em> engagement. Repositioned before campaign&nbsp;season.',
    size: 96,
    foot: 'taqhaus.com/case-studies',
  },
]

function cardHtml({ variant, eyebrow, meta, headline, size, foot }) {
  const v = VARIANTS[variant]
  return `<!doctype html>
<html><head><meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; }
  .card {
    position: relative;
    width: 1200px; height: 630px;
    background: ${v.bg};
    color: ${v.text};
    padding: 60px 64px 52px;
    display: flex; flex-direction: column;
    isolation: isolate;
  }
  .card::before {
    content: ""; position: absolute; inset: 0; z-index: 0;
    background-image:
      linear-gradient(90deg, ${v.grid} 1px, transparent 1px),
      linear-gradient(0deg, ${v.grid} 1px, transparent 1px);
    background-size: 48px 48px;
    background-position: -1px -1px;
  }
  .card > * { position: relative; z-index: 1; }
  .top {
    display: flex; justify-content: space-between; align-items: baseline;
  }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 12px;
    font-family: "JetBrains Mono", monospace;
    font-size: 15px; letter-spacing: 0.15em; text-transform: uppercase;
    color: ${v.sub};
  }
  .eyebrow::before { content: ""; width: 32px; height: 1.5px; background: ${v.accent}; }
  .meta {
    font-family: "JetBrains Mono", monospace;
    font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase;
    color: ${v.sub};
  }
  h1 {
    margin: auto 0;
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: ${size}px;
    line-height: 0.98;
    letter-spacing: -0.025em;
    max-width: 1020px;
    text-wrap: balance;
  }
  h1 em { font-style: italic; color: ${v.accent}; }
  .footrow {
    display: flex; justify-content: space-between; align-items: baseline;
    padding-top: 26px;
    border-top: 1px solid ${v.hairline};
  }
  .wordmark {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: 42px; letter-spacing: -0.03em;
  }
  .wordmark span { color: ${v.accent}; }
  .url {
    font-family: "JetBrains Mono", monospace;
    font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase;
    color: ${v.sub};
  }
</style></head>
<body>
  <div class="card">
    <div class="top">
      <span class="eyebrow">${eyebrow}</span>
      <span class="meta">${meta}</span>
    </div>
    <h1>${headline}</h1>
    <div class="footrow">
      <div class="wordmark">TaqHaus<span>.</span></div>
      <div class="url">${foot}</div>
    </div>
  </div>
</body></html>`
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await mkdir(path.join(OUT, 'og'), { recursive: true })

for (const card of CARDS) {
  await page.setContent(cardHtml(card), { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)
  await page.screenshot({ path: path.join(OUT, card.file) })
  console.log(`✓ ${card.file}`)
}

await browser.close()
