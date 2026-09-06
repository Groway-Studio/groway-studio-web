import { Warning, ArrowClockwise } from '@phosphor-icons/react'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // In dev, rethrow so the overlay shows the full stack instead of this boundary.
  if (import.meta.env.DEV) throw error

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-4 text-fg">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface/50 p-8 text-center">
        <Warning size={32} className="mx-auto text-accent-9" aria-hidden="true" />
        <h1 className="mt-4 text-xl font-semibold">Something went wrong</h1>
        <pre className="mt-4 max-h-32 overflow-auto rounded-lg border border-hairline bg-bg-inset p-3 text-left text-xs text-fg-muted">
          {error.message}
        </pre>
        <button
          onClick={resetErrorBoundary}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-9 px-6 py-3 text-sm font-semibold text-[oklch(0.14_0.02_40)] transition-colors duration-200 hover:bg-accent-10"
        >
          <ArrowClockwise weight="bold" aria-hidden="true" />
          Try again
        </button>
      </div>
    </div>
  )
}
