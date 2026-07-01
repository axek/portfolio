import { contact } from "@/data/contact";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Contact
        </p>
        <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">{contact.name}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block text-sm text-zinc-600 underline-offset-4 hover:text-foreground hover:underline dark:text-zinc-400"
            >
              {contact.email}
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contact.links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 underline-offset-4 hover:text-foreground hover:underline dark:text-zinc-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} {contact.name}
        </p>
      </div>
    </footer>
  );
}
