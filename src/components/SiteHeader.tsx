import Link from "next/link";
import { AxekLogo } from "@/components/AxekLogo";

export function SiteHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex h-full shrink-0 items-stretch rounded-sm transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label="axek designs — home"
        >
          <AxekLogo className="h-full w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/#work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
