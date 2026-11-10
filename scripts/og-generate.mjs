/**
 * Generates the OG share-card set (1200x630) from the editorial design system.
 * Output is committed to public/images — run `node scripts/og-generate.mjs`
 * whenever copy or cards change.
 */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve(process.cwd(), 'public/images')

/* Studio palette: ivory + pine foundation, coral focal accent. */
const VARIANTS = {
  ink: {
    bg: '#133029',
    text: '#F6F1E7',
    sub: 'rgb(246 241 231 / 0.68)',
    accent: '#FF6A4D',
    grid: 'rgb(246 241 231 / 0.06)',
    hairline: 'rgb(246 241 231 / 0.2)',
  },
  terra: {
    bg: '#FF6A4D',
    text: '#12241F',
    sub: 'rgb(18 36 31 / 0.72)',
    accent: '#FFFDF8',
    grid: 'rgb(18 36 31 / 0.07)',
    hairline: 'rgb(18 36 31 / 0.25)',
  },
  paper: {
    bg: '#F6F1E7',
    text: '#12241F',
    sub: '#3E4F49',
    accent: '#C2412A',
    grid: 'rgb(18 36 31 / 0.05)',
    hairline: '#DDD5C4',
  },
}

const CARDS = [
  {
    file: 'og-default.png',
    variant: 'ink',
    eyebrow: 'Marketing, strategy, and visibility',
    meta: 'Free strategy call',
    headline: 'Marketing that helps the <em>right people</em> find&nbsp;you.',
    size: 104,
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
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600&family=Hanken+Grotesk:wght@600&display=swap" rel="stylesheet" />
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
    font-family: "Hanken Grotesk", sans-serif; font-weight: 600;
    font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase;
    color: ${v.sub};
  }
  .eyebrow::before { content: ""; width: 14px; height: 14px; border-radius: 4px; background: ${v.accent}; }
  .meta {
    font-family: "Hanken Grotesk", sans-serif; font-weight: 600;
    font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase;
    color: ${v.sub};
  }
  h1 {
    margin: auto 0;
    font-family: "Inter Tight", sans-serif;
    font-weight: 600;
    font-size: ${Math.round(size * 0.9)}px;
    line-height: 1;
    letter-spacing: -0.045em;
    max-width: 1020px;
    text-wrap: balance;
  }
  h1 em { font-style: normal; color: ${v.accent}; }
  .footrow {
    display: flex; justify-content: space-between; align-items: baseline;
    padding-top: 26px;
    border-top: 1px solid ${v.hairline};
  }
  .wordmark {
    font-family: "Inter Tight", sans-serif; font-weight: 600;
    font-size: 42px; letter-spacing: -0.045em;
  }
  .wordmark span { color: ${v.accent}; }
  .url {
    font-family: "Hanken Grotesk", sans-serif; font-weight: 600;
    font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase;
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
