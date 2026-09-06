/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact form POST target; when absent the form falls back to mailto. */
  readonly VITE_CONTACT_ENDPOINT?: string
  /** LucIA chat SSE endpoint; defaults to same-origin `/chat`. */
  readonly VITE_CHAT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
