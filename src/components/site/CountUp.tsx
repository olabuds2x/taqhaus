import { useLayoutEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { isPrerenderedFirstView } from '@/lib/firstView'

/**
 * Counts a result up to its real value when it scrolls into view.
 *
 * The final value is always what's in the markup (prerendered HTML, screen
 * readers, crawlers); only the visible copy is animated, and a hidden copy
 * reserves its width so nothing around it shifts while the digits change.
 *
 * Works on display strings as written in the case studies: "+188%", "−34%",
 * "$57K", "4.8★", "$1.2M+", "3.2K", "5x". The first number is animated and
 * everything around it is kept exactly. Strings without a number render as-is.
 */

const NUMBER = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s

function parse(value: string) {
  const m = NUMBER.exec(value)
  if (!m) return null
  const [, prefix, raw, suffix] = m
  const target = Number(raw.replace(/,/g, ''))
  if (!Number.isFinite(target) || target === 0) return null
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  const grouped = raw.includes(',')
  const format = (n: number) => {
    const fixed = n.toFixed(decimals)
    return prefix + (grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed) + suffix
  }
  return { target, format }
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const live = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    const el = live.current
    const parsed = parse(value)
    // scripts/prerender.mjs sets this so snapshots keep the real number.
    const isSnapshot = (window as { __TQ_PRERENDER__?: boolean }).__TQ_PRERENDER__
    if (!el || !parsed || reduce || isSnapshot) return

    // Already on screen in the prerendered page the visitor landed on: they
    // have seen the real number, so don't snap it to zero.
    const rect = el.getBoundingClientRect()
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0
    if (onScreen && isPrerenderedFirstView()) return

    // Runs before paint, so the final value never flashes first.
    el.textContent = parsed.format(0)

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          el.textContent = t < 1 ? parsed.format(parsed.target * easeOutQuart(t)) : value
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = value
    }
  }, [value, duration, reduce])

  return (
    <span className="count-up">
      <span className="count-up__sr">{value}</span>
      <span className="count-up__sizer" aria-hidden="true">{value}</span>
      <span className="count-up__live" aria-hidden="true" ref={live}>{value}</span>
    </span>
  )
}
