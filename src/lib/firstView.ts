/**
 * First-view guard for entrance animations.
 *
 * Every marketing route is prerendered (scripts/prerender.mjs), so the visitor
 * sees finished HTML before any JavaScript runs. main.tsx then mounts React
 * with createRoot, which replaces that HTML. An element whose `initial` is
 * `{ opacity: 0 }` would vanish on that swap and fade back in, which looks
 * like a flicker and pushes back Largest Contentful Paint.
 *
 * `enter()` returns `false` (Motion's "start at the final state") while the
 * visitor is still on the page they landed on and that page arrived
 * prerendered. Once they navigate, entrances play as normal.
 */

const bootPath = typeof window !== 'undefined' ? window.location.pathname : ''

// Evaluated at import time, before main.tsx renders, while the prerendered
// markup is still inside #root.
const bootedFromPrerender =
  typeof document !== 'undefined' && !!document.getElementById('root')?.firstElementChild

let leftLandingPage = false

/** True while showing the page the visitor landed on, already rendered as HTML. */
export function isPrerenderedFirstView(): boolean {
  if (!bootedFromPrerender || leftLandingPage) return false
  if (window.location.pathname !== bootPath) {
    leftLandingPage = true
    return false
  }
  return true
}

/** Use as `initial={enter({ opacity: 0, y: 24 })}` on above-the-fold entrances. */
export function enter<T>(from: T): T | false {
  return isPrerenderedFirstView() ? false : from
}
