import { useEffect, useState } from 'react'
import { ChatCircleDots, X } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { streamChat } from '@/lib/chat'
import { cn } from '@/lib/utils'
import { ChatMessage, ChatPanel } from './ChatPanel'

type Phase = 'idle' | 'thinking' | 'streaming'

/** Floating chat bubble + panel for LucIA. History is React state only. */
export function ChatWidget() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [phase, setPhase] = useState<Phase>('idle')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = async (text: string) => {
    setMessages((prev) => [...prev, { role: 'user', text }])
    setPhase('thinking')
    setError(false)
    let replyStarted = false
    try {
      for await (const event of streamChat(text)) {
        if (event.type !== 'text_delta') continue
        if (!replyStarted) {
          replyStarted = true
          setPhase('streaming') // unmounts the orb at the first delta
          setMessages((prev) => [...prev, { role: 'assistant', text: event.text }])
        } else {
          setMessages((prev) => [
            ...prev.slice(0, -1),
            { role: 'assistant', text: prev[prev.length - 1].text + event.text },
          ])
        }
      }
    } catch {
      setError(true)
    } finally {
      setPhase('idle')
    }
  }

  return (
    <>
      {open && (
        <ChatPanel
          messages={messages}
          thinking={phase === 'thinking'}
          busy={phase !== 'idle'}
          error={error}
          onSend={send}
          onClose={() => setOpen(false)}
        />
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? t.chat.close : t.chat.open}
        aria-expanded={open}
        className={cn(
          'fixed bottom-6 right-6 z-50 rounded-full bg-accent-9 p-4 text-[oklch(0.14_0.02_40)] shadow-lg transition-colors duration-200 hover:bg-accent-10 focus:outline-none focus:ring-2 focus:ring-accent-9/40',
          // The panel goes full-screen below sm, so the bubble would overlap it.
          open && 'max-sm:hidden',
        )}
      >
        {open ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <ChatCircleDots size={24} weight="fill" aria-hidden="true" />
        )}
      </button>
    </>
  )
}
