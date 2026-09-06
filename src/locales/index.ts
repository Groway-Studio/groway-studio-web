import { en } from './en'
import { es } from './es'
import { ko } from './ko'
import type { Language, Translations } from './types'

export const translations: Record<Language, Translations> = {
  en,
  es,
  ko,
}

export type { Language, Translations }
