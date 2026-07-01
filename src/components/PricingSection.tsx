import { pricingTiers } from "@/data/pricing";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Pricing
        </p>
        <h2
          id="pricing-heading"
          className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Flexible ways to work together
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Final scope and rate depend on the project. Reach out — we can figure
          out what fits.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <li
              key={tier.title}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {tier.title}
              </h3>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {tier.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
