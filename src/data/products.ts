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
    slug: "periods",
    title: "Periods.",
    tags: "Product · Next.js · Cross-Platform",
    description:
      "Period tracking app. Web + iOS, custom domain (getperiods.app). Built it because I needed it to exist.",
    metrics: ["Web + iOS", "Custom Domain", "Next.js"],
    url: "https://getperiods.app",
    ctaLabel: "Visit Live App →",
  },
];
