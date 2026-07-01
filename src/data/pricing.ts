export type PricingTier = {
  title: string;
  price: string;
  description: string;
};

export const pricingTiers: PricingTier[] = [
  {
    title: "Per project",
    price: "from 50,000₽",
    description: "Scoped deliverable — design, prototype, or a defined build.",
  },
  {
    title: "Part-time",
    price: "from 150,000₽ / month",
    description: "Ongoing product work a few days a week, embedded with your team.",
  },
  {
    title: "Full-time",
    price: "from 250,000₽ / month",
    description: "Dedicated capacity — design and front-end development full-time.",
  },
];
