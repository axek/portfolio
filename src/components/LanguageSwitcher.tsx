"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslations } from "@/i18n/use-translations";
import type { Locale } from "@/i18n/locale";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const t = useTranslations();

  const options: { value: Locale; label: string }[] = [
    { value: "ru", label: t.lang.ru },
    { value: "en", label: t.lang.en },
  ];

  return (
    <div
      className="flex items-center rounded-full border border-zinc-200 bg-white p-0.5 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900"
      role="group"
      aria-label={t.lang.switchAria}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          className={[
            "rounded-full px-2.5 py-1 transition",
            locale === option.value
              ? "bg-foreground text-background"
              : "text-zinc-500 hover:text-foreground",
          ].join(" ")}
          aria-pressed={locale === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
