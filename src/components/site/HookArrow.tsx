/** The studio's signature glyph: a hooked arrow (a smile that points forward). */
export function HookArrow({ className = 'hook' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M4 9.5c2 5.2 8.6 7 13.4 3.2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M13.2 11.6l4.6 1.1-1 4.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
