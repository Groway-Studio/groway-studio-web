import { useEffect, useRef, useState, FormEvent } from 'react'
import { PaperPlaneRight, X } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { ThinkingOrb } from './ThinkingOrb'

export interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
}

interface ChatPanelProps {
  messages: ChatMessage[]
  /** True from submit until the reply's first text_delta — shows the orb. */
  thinking: boolean
  /** True while a turn is in flight (thinking or streaming) — locks the input. */
  busy: boolean
  error: boolean
  onSend: (text: string) => void
  onClose: () => void
}

export function ChatPanel({ messages, thinking, busy, error, onSend, onClose }: ChatPanelProps) {
  const { t } = useLanguage()
  const [draft, setDraft] = useState('')
  const logRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, thinking, error])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text || busy) return
    setDraft('')
    onSend(text)
  }

  return (
    <div
      role="dialog"
      aria-label={t.chat.title}
      className="fixed inset-0 z-50 flex flex-col border-border bg-bg sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(560px,calc(100dvh-8rem))] sm:w-[380px] sm:rounded-2xl sm:border sm:bg-surface/95 sm:shadow-2xl sm:backdrop-blur"
    >
      <header className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">{t.chat.title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.chat.close}
          className="rounded-lg p-1.5 text-fg-muted transition-colors duration-200 hover:bg-surface hover:text-fg focus:outline-none focus:ring-2 focus:ring-accent-9/40"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </header>

      <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
              msg.role === 'user'
                ? 'ml-auto bg-accent-9 text-[oklch(0.14_0.02_40)]'
                : 'mr-auto border border-hairline bg-surface/70 text-fg',
            )}
          >
            {msg.text}
          </div>
        ))}
        {thinking && <ThinkingOrb label={t.chat.thinking} />}
        {error && <p className="text-sm text-destructive">{t.chat.error}</p>}
      </div>

      <form onSubmit={submit} className="flex items-center gap-2 border-t border-hairline px-4 py-3">
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t.chat.placeholder}
          disabled={busy}
          className="w-full rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-200 focus:border-accent-9 focus:outline-none focus:ring-2 focus:ring-accent-9/25 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !draft.trim()}
          aria-label={t.chat.send}
          className="shrink-0 rounded-lg bg-accent-9 p-2.5 text-[oklch(0.14_0.02_40)] transition-colors duration-200 hover:bg-accent-10 focus:outline-none focus:ring-2 focus:ring-accent-9/40 disabled:opacity-50"
        >
          <PaperPlaneRight size={18} weight="fill" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
