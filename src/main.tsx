import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadRoute } from './routes'

const mount = () =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

// Fetch the landing page's chunk before mounting. Until then the prerendered
// HTML stays on screen, and React replaces it with the finished page in one
// step rather than flashing an empty Suspense fallback. If the chunk fails,
// mount anyway and let the route's own error handling take over.
preloadRoute(window.location.pathname).then(mount, mount)
