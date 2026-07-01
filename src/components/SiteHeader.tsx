"use client";

import Link from "next/link";
import { AxekLogo } from "@/components/AxekLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "@/i18n/use-translations";

export function SiteHeader() {
  const t = useTranslations();

  return (
    <header className="bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex h-full shrink-0 items-stretch rounded-sm transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label={t.nav.homeAria}
        >
          <AxekLogo className="h-full w-auto" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-4 text-sm text-zinc-600 sm:gap-6 dark:text-zinc-400">
            <Link href="/#work" className="hover:text-foreground">
              {t.nav.work}
            </Link>
            <Link href="/#pricing" className="hover:text-foreground">
              {t.nav.pricing}
            </Link>
            <Link href="/#contact" className="hover:text-foreground">
              {t.nav.contact}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
