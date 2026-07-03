"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/data/contact";
import { useTranslations } from "@/i18n/use-translations";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type FormStatus = "idle" | "submitting" | "success" | "error" | "not_configured";

export function ContactSection() {
  const t = useTranslations();
  const c = t.contact;
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("not_configured");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      form.reset();
      setStatus("success");
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const contactInfo = String(formData.get("contact") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio inquiry — ${name}`,
          from_name: "axek portfolio",
          name,
          email: contactInfo,
          message: `Reply to: ${contactInfo}\n\n${message}`,
        }),
      });

      const data = (await response.json()) as { success?: boolean };

      if (!response.ok || !data.success) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            {c.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {c.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {c.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl space-y-5"
          noValidate={status === "success"}
        >
          <div className="hidden" aria-hidden>
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              {c.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              disabled={status === "submitting"}
              placeholder={c.namePlaceholder}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-zinc-400 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:border-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="contact" className="text-sm font-medium text-foreground">
              {c.contactLabel}
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              autoComplete="email"
              disabled={status === "submitting"}
              placeholder={c.contactPlaceholder}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-zinc-400 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:border-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              {c.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={status === "submitting"}
              placeholder={c.messagePlaceholder}
              className="mt-2 w-full resize-y rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-zinc-400 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:border-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? c.sending : c.submit}
            </button>

            {status === "success" ? (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">{c.success}</p>
            ) : null}

            {status === "error" || status === "not_configured" ? (
              <p className="text-sm text-red-600 dark:text-red-400">
                {status === "not_configured" ? c.notConfigured : c.error}{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  {contact.email}
                </a>
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
