/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact form POST target; when absent the form falls back to mailto. */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
