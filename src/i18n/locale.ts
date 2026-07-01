export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const LOCALE_STORAGE_KEY = "axek-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ru";
}
