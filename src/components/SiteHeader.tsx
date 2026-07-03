"use client";

import Link from "next/link";
import { AxekLogo } from "@/components/AxekLogo";
import { HashLink } from "@/components/HashLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "@/i18n/use-translations";

const navLinkClass =
  "shrink-0 whitespace-nowrap transition hover:text-foreground";

export function SiteHeader() {
  const t = useTranslations();

  const links = [
    { href: "/#work", label: t.nav.work },
    { href: "/#background", label: t.nav.background },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header className="border-b border-zinc-200 bg-background/80 backdrop-blur-md dark:border-zinc-800">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex h-full shrink-0 items-stretch rounded-sm transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label={t.nav.homeAria}
          >
            <AxekLogo className="h-full w-auto" />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden items-center gap-4 text-sm text-zinc-600 sm:flex sm:gap-6 dark:text-zinc-400">
              {links.map((link) => (
                <HashLink key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </HashLink>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <nav
        className="border-b border-zinc-200 bg-background sm:hidden dark:border-zinc-800"
        aria-label={t.nav.mobileAria}
      >
        <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-4 py-3 text-sm text-zinc-600 [-ms-overflow-style:none] [scrollbar-width:none] dark:text-zinc-400 [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <HashLink key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </HashLink>
          ))}
        </div>
      </nav>
    </>
  );
}
