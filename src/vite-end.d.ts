/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact form POST target; when absent the form falls back to mailto. */
  readonly VITE_CONTACT_ENDPOINT?: string
  /** Cloudflare Turnstile sitekey; when absent, submissions skip the challenge. */
  readonly VITE_TURNSTILE_SITEKEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
