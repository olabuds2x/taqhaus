import { lazy, type ComponentType } from 'react'

type Loader = () => Promise<{ default: ComponentType }>

const RELOAD_FLAG = 'tq-chunk-reload'

/**
 * Retry a failed chunk once by reloading the page. After a deploy the old
 * hashed chunk names are gone, so a tab left open on the previous build would
 * otherwise hit the error boundary on its next navigation.
 */
function withReload(load: Loader): Loader {
  return () =>
    load().then(
      mod => {
        try { sessionStorage.removeItem(RELOAD_FLAG) } catch { /* storage blocked */ }
        return mod
      },
      err => {
        let alreadyTried = true
        try {
          alreadyTried = sessionStorage.getItem(RELOAD_FLAG) === '1'
          if (!alreadyTried) sessionStorage.setItem(RELOAD_FLAG, '1')
        } catch { /* storage blocked: fall through to the error boundary */ }
        if (!alreadyTried) {
          window.location.reload()
          return new Promise<never>(() => {}) // hold until the reload happens
        }
        throw err
      },
    )
}

export type LazyPage = ComponentType & { preload: () => Promise<unknown> }

/**
 * A route component loaded on demand. Once `preload()` has resolved, the page
 * renders synchronously instead of suspending. main.tsx relies on that: it
 * preloads the landing route before mounting, so React swaps the prerendered
 * HTML straight for the real page with no blank Suspense frame in between.
 */
export function lazyPage(load: Loader): LazyPage {
  const safeLoad = withReload(load)
  let Loaded: ComponentType | null = null
  let pending: Promise<unknown> | null = null

  const preload = () =>
    (pending ??= safeLoad().then(mod => { Loaded = mod.default }))

  const Lazy = lazy(() => preload().then(() => ({ default: Loaded! })))

  const Page = () => (Loaded ? <Loaded /> : <Lazy />)
  return Object.assign(Page, { preload })
}
