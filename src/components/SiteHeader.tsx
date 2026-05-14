import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-background/80 backdrop-blur-md dark:border-zinc-800/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:opacity-80"
        >
          Portfolio
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/#work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
