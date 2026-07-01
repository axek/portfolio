import type { en } from "@/i18n/messages/en";
import { en as enMessages } from "@/i18n/messages/en";
import { ru } from "@/i18n/messages/ru";

const messages = { en: enMessages, ru } as const;

export type Messages = typeof en;

export function getMessages(locale: "en" | "ru"): Messages {
  return messages[locale];
}
