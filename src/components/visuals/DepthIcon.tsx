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
            <path d="M68 106H29c-9 0-15-6-15-15V34c0-9 6-15 15-15h66c9 0 15 6 15 15v40" stroke="#59483D" />
            <path d="M16 38h92" stroke="#59483D" />
            <g fill="#59483D" stroke="none">
              <circle cx="28" cy="28" r="2.5" />
              <circle cx="39" cy="28" r="2.5" />
              <circle cx="50" cy="28" r="2.5" />
            </g>
            <path d="m45 55-13 12 13 12m31-24 13 12-13 12M66 50 54 85" stroke={accent} />
            <path d="m83 86 17-10 17 10v22l-17 10-17-10V86Z" fill="#FFF7EB" stroke={accent} />
            <path d="m83 86 17 10 17-10m-17 10v22" stroke={accent} />
          </>
        ) : (
          <>
            <path d="M45 29v22c0 4-1 7-3 10L17 100c-5 9 1 18 11 18h62c10 0 16-9 11-18L76 61c-2-3-3-6-3-10V29M40 29h38" stroke="#59483D" />
            <path d="m29 99 9-14c8-3 13 6 24 2 13-5 19-9 24 0l8 14c2 4 0 7-5 7H33c-5 0-6-5-4-9Z" fill={accent} stroke="none" />
            <circle cx="53" cy="75" r="5" fill={accent} stroke="none" />
            <circle cx="64" cy="63" r="3.5" fill={accent} stroke="none" />
            <path d="M101 9c2 15 6 19 19 21-13 2-17 6-19 21-2-15-6-19-19-21 13-2 17-6 19-21Z" fill={accent} stroke={accent} strokeWidth="2" />
          </>
        )}
      </g>
    </svg>
  )
}
