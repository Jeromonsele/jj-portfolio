export interface Project {
  slug: string;
  title: string;
  tag: string;
  description: string;
  previewType: "dark" | "gradient" | "light" | "terminal";
  previewText: string;
  previewStat?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "tvghc",
    title: "The Very Good Home Company",
    tag: "Platform · Next.js · Supabase",
    description:
      "Full insulation platform for DFW — instant estimator powered by 1.8M county property records, automated lead pipeline, rebate calculator, energy loss calculator. Built the tech, the brand, and the go-to-market.",
    previewType: "dark",
    previewText: "DFW Insulation\nDone Right.",
    previewStat: "1.8M Properties",
    link: "https://theverygoodhomecompany.com",
  },
  {
    slug: "nasher-prize",
    title: "Nasher Prize — Afro-Mingei Production",
    tag: "Experience · Production · Art",
    description:
      "Produced the Otobong Nkanga Nasher Prize experience. Restaurant concept in a museum. DJ nights. Fireside chats. Full theatrical performance with costume design. NYT and international art press coverage.",
    previewType: "gradient",
    previewText: "Afro-Mingei\nNasher Prize",
  },
  {
    slug: "4gaps",
    title: "The 4 Gaps Framework",
    tag: "Framework · Consulting · IP",
    description:
      "Proprietary diagnostic framework — psychological, cultural, systems, and technical gaps. Born from a master's thesis, validated across consulting engagements.",
    previewType: "light",
    previewText: "THE\n4 GAPS",
  },
  {
    slug: "lpm-sop",
    title: "LPM SOP Platform",
    tag: "SaaS · FastAPI · Docker · 13 Services",
    description:
      "Full-production SOP management platform. 13-service Docker stack — Postgres, Redis, FastAPI, Celery, Nginx, Traefik, Prometheus, Grafana, ELK.",
    previewType: "terminal",
    previewText: "$ docker compose up\n✓ 13 services running\n→ lpm-sop.com",
  },
  {
    slug: "client-sites",
    title: "Client Websites",
    tag: "Client Work · React · Vite",
    description:
      "Production websites — CPA firm, 3D art showcase (Three.js), Islamic prayer app with Gemini AI. All on React 19 + Vite + TypeScript + Framer Motion + Tailwind.",
    previewType: "dark",
    previewText: "AC Christopher\nEmma Project\nHaus of Duas",
  },
  {
    slug: "classic-chevrolet",
    title: "Classic Chevrolet — Digital Transformation",
    tag: "Social Media · Brand · Strategy",
    description:
      "Built the first story-driven social media strategy for a major DFW dealership. ~1M impression growth. Corvette launch. Celebrity liaising. Saturday Fair community event.",
    previewType: "gradient",
    previewText: "Story-Driven\nGrowth",
  },
];
