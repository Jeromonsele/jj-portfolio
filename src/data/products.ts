export interface Product {
  slug: string;
  title: string;
  tags: string;
  description: string;
  metrics: string[];
  url: string;
  ctaLabel: string;
}

export const products: Product[] = [
  {
    slug: "searchfunddb",
    title: "SearchFundDB",
    tags: "Data Platform · Next.js · Supabase",
    description:
      "4,849 search funds tracked across 30+ countries. Full-text search, magic link auth, contact enrichment pipeline.",
    metrics: ["4,849 funds", "75+ contacts", "30+ countries"],
    url: "https://searchfunddb.vercel.app",
    ctaLabel: "Visit Live Site →",
  },
  {
    slug: "tvghc-estimator",
    title: "TVGHC Estimator",
    tags: "Platform · Next.js · 1.87M Records",
    description:
      "Instant insulation estimates for DFW homeowners. Address autocomplete, property lookup from county records, heuristic pricing engine.",
    metrics: ["1.87M properties", "4 counties", "$0/mo data cost"],
    url: "https://theverygoodhomecompany.com/get-estimate",
    ctaLabel: "Visit Live Site →",
  },
  {
    slug: "4-gaps-diagnostic",
    title: "4 Gaps Diagnostic",
    tags: "Interactive Tool · Consulting Framework",
    description:
      "8-question operational assessment based on master's research. Identifies which of 4 organizational gaps is the bottleneck.",
    metrics: ["8 questions", "2 minutes", "Proprietary IP"],
    url: "/diagnostic",
    ctaLabel: "Try It →",
  },
  {
    slug: "ai-confession-booth",
    title: "AI Confession Booth",
    tags: "Consumer · Next.js · OpenAI · Stripe",
    description:
      "Anonymous AI confessional with real-time responses, Stripe payments, Supabase auth, and exportable confessions.",
    metrics: ["OpenAI + Stripe", "Auth + Payments"],
    url: "https://ai-confession-booth.vercel.app",
    ctaLabel: "Visit Live Site →",
  },
];
