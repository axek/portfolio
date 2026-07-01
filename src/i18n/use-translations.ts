"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { getMessages } from "@/i18n/messages";

export function useTranslations() {
  const { locale } = useLanguage();
  return getMessages(locale);
}
