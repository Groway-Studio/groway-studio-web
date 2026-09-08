import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { PaperPlaneRight, X } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { SiriOrb, type OrbMode } from '@/components/chat/SiriOrb'
import { streamChat } from '@/lib/chat'

/**
 * LucIA como orbe flotante: un SiriOrb en la esquina que, al abrirse, despliega
 * un panel de conversación donde el diálogo llega token a token por streaming.
 * El orbe es su presencia — reacciona al estado del turno (piensa / habla) vía
 * su prop `mode`.
 *
 * Sin formulario: LucIA toma los datos de contacto conversando (el lead lo
 * registra soul). El resto de CTAs abren este widget con el evento `openChat`.
 */

const OPEN_EVENT = 'groway:chat-open'

/**
 * Open the chat from anywhere (e.g. the contact section CTA).
 * Pass `prefill` to leave a drafted message in the input, unsent —
 * the visitor just hits enter (or edits it first).
 */
// eslint-disable-next-line react-refresh/only-export-components -- tiny event helper, belongs with the widget
export function openChat(prefill?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { prefill } }))
}

interface Msg {
  from: 'bot' | 'user'
  text: string
}

export function ChatWidget() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [orbMode, setOrbMode] = useState<OrbMode>('passive')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onOpen = (e: Event) => {
      const prefill = (e as CustomEvent<{ prefill?: string }>).detail?.prefill
      if (prefill) setInput(prefill)
      setOpen(true)
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  // Greet on first open; focus input every open.
  useEffect(() => {
    if (!open) return
    if (msgs.length === 0) {
      setOrbMode('speaking')
      setMsgs([{ from: 'bot', text: t.chat.greeting }])
      const id = setTimeout(() => setOrbMode('passive'), 1500)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => inputRef.current?.focus(), 350)
    return () => clearTimeout(id)
  }, [open, msgs.length, t.chat.greeting])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs, orbMode])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = useCallback(
    async (text: string) => {
      setMsgs((m) => [...m, { from: 'user', text }, { from: 'bot', text: '' }])
      setBusy(true)
      setOrbMode('thinking')

      try {
        let first = true
        for await (const event of streamChat(text)) {
          if (event.type !== 'text_delta') continue
          if (first) {
            setOrbMode('speaking')
            first = false
          }
          setMsgs((m) => {
            const next = m.slice()
            const last = next[next.length - 1]
            next[next.length - 1] = { from: 'bot', text: last.text + event.text }
            return next
          })
        }
      } catch {
        // Replace the empty placeholder reply with a plain error line.
        setMsgs((m) => {
          const last = m[m.length - 1]
          if (last?.from === 'bot' && last.text === '') {
            return [...m.slice(0, -1), { from: 'bot', text: t.chat.error }]
          }
          return [...m, { from: 'bot', text: t.chat.error }]
        })
      } finally {
        setBusy(false)
        setOrbMode('passive')
      }
    },
    [t.chat.error],
  )

  const submit = () => {
    const text = input.trim()
    if (!text || busy) return
    setInput('')
    void send(text)
  }

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!open && (
          <motion.div
            key="launcher"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="rounded-full border border-hairline bg-surface/90 px-4 py-2 text-sm font-medium text-fg backdrop-blur-md"
            >
              {t.chat.launcher}
            </motion.span>
            <motion.button
              onClick={() => setOpen(true)}
              aria-label={t.chat.launcher}
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="rounded-full"
            >
              <motion.div layoutId="groway-orb" className="rounded-full">
                <SiriOrb size={64} mode="passive" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label={t.chat.title}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 flex max-h-[min(70vh,600px)] w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg/70 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.85)] ring-1 ring-black/40 backdrop-blur-2xl backdrop-saturate-150"
          >
            {/* Header: the orb lands here as avatar */}
            <div className="relative flex flex-col items-center border-b border-hairline px-5 pb-4 pt-5">
              <button
                onClick={() => setOpen(false)}
                aria-label={t.chat.close}
                className="absolute right-3 top-3 rounded-md p-1.5 text-fg-subtle transition-colors duration-200 hover:text-fg"
              >
                <X size={18} weight="bold" />
              </button>
              <motion.div layoutId="groway-orb" className="rounded-full">
                <SiriOrb size={56} mode={orbMode} />
              </motion.div>
              <p className="mt-2 text-sm font-semibold text-fg">{t.chat.title}</p>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div key={i} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div
                    className={
                      m.from === 'user'
                        ? 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-accent-9/15 px-4 py-2.5 text-sm leading-relaxed text-fg'
                        : 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-hairline bg-surface/70 px-4 py-2.5 text-sm leading-relaxed text-fg'
                    }
                  >
                    {m.text || <TypingDots reduce={reduce} />}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submit()
              }}
              className="flex items-center gap-2 border-t border-hairline p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                aria-label={t.chat.placeholder}
                className="h-11 flex-1 rounded-xl border border-border bg-surface/50 px-4 text-sm text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-200 focus:border-accent-9 focus:outline-none focus:ring-2 focus:ring-accent-9/25"
              />
              <button
                type="submit"
                aria-label={t.chat.send}
                disabled={!input.trim() || busy}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-9 text-[oklch(0.14_0.02_40)] transition-all duration-200 hover:bg-accent-10 active:scale-95 disabled:opacity-50"
              >
                <PaperPlaneRight size={18} weight="fill" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function TypingDots({ reduce }: { reduce: boolean | null }) {
  return (
    <span className="inline-flex items-center gap-1.5 align-middle">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.2 }}
          className="h-1.5 w-1.5 rounded-full bg-accent-11"
        />
      ))}
    </span>
  )
}
