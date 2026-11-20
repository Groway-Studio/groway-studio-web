import { useId } from 'react'

/** Custom line illustrations shared by the three service sections. */
export function DepthIcon({ kind }: { kind: string }) {
  const gradientId = useId()
  const accent = `url(#${gradientId})`

  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" className="mb-5 h-20 w-20 sm:h-24 sm:w-24">
      <defs>
        <linearGradient id={gradientId} x1="24" y1="90" x2="99" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D94B09" />
          <stop offset="1" stopColor="#FF982D" />
        </linearGradient>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5">
        {kind === 'orchestrate' ? (
          <>
            <path d="m29 78-12 7c-5 3-5 8 0 11l38 22c5 3 11 3 16 0l38-22c5-3 5-8 0-11l-12-7" stroke="#59483D" />
            <path d="M55 31 17 53c-5 3-5 8 0 11l38 22c5 3 11 3 16 0l38-22c5-3 5-8 0-11L71 31c-5-3-11-3-16 0Z" fill="#FFF7EB" stroke={accent} />
            <path d="M99 9c1 9 4 12 12 13-8 1-11 4-12 13-1-9-4-12-12-13 8-1 11-4 12-13Z" fill={accent} stroke={accent} strokeWidth="2" />
          </>
        ) : kind === 'engineer' ? (
          <>
            <path d="m16 76 24-14 24 14v28l-24 14-24-14V76Z" fill="#F4EADF" stroke="#59483D" />
            <path d="m16 76 24 14 24-14M40 90v28" stroke="#59483D" />
            <path d="m64 76 24-14 24 14v28l-24 14-24-14" stroke="#59483D" />
            <path d="m64 76 24 14 24-14M88 90v28" stroke="#59483D" />
            <path d="m40 34 24-14 24 14v28L64 76 40 62V34Z" fill="#FFF7EB" stroke={accent} />
            <path d="m40 34 24 14 24-14M64 48v28" stroke={accent} />
          </>
        ) : (
          <>
            <ellipse cx="62" cy="70" rx="49" ry="20" transform="rotate(-32 62 70)" stroke="#59483D" />
            <ellipse cx="62" cy="70" rx="49" ry="20" transform="rotate(32 62 70)" stroke={accent} />
            <path d="M62 46c2 16 8 22 23 24-15 2-21 8-23 24-2-16-8-22-23-24 15-2 21-8 23-24Z" fill="#FFF7EB" stroke={accent} strokeWidth="4" />
            <circle cx="101" cy="40" r="6" fill={accent} stroke="#FFF7EB" strokeWidth="3" />
            <path d="M36 15v12M30 21h12" stroke={accent} strokeWidth="4" />
          </>
        )}
      </g>
    </svg>
  )
}
