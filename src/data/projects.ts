export interface Project {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image?: string;
  previewType?: "dark" | "gradient" | "light" | "terminal";
  previewText?: string;
  previewStat?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "tvghc",
    title: "The Very Good Home Company",
    tag: "Platform · Next.js · Supabase · 1.8M Records",
    description:
      "Full insulation platform for DFW — instant estimator powered by 1.8M county property records across 4 counties, automated lead pipeline via Lead Truffle, rebate calculator, energy loss calculator. 5-star Google reviews. Built the tech, the brand, and the go-to-market.",
    image: "/projects/tvghc-hero.png",
    previewStat: "1.8M Properties · 4 Counties",
    link: "https://theverygoodhomecompany.com",
  },
  {
    slug: "tvgg",
    title: "The Very Good Consulting — 4 Gaps Framework",
    tag: "Consulting · Framework · Proprietary IP",
    description:
      "Operations consulting practice with a proprietary diagnostic framework. The 4 Gaps — psychological, cultural, systems, technical — born from a master's program, validated in the field. Helping home services founders escape the bottleneck trap.",
    image: "/projects/tvgg-hero.png",
    link: "https://theverygoodguys.com",
  },
  {
    slug: "searchfunddb",
    title: "SearchFundDB",
    tag: "Database · Next.js · Supabase · 4,849 Funds",
    description:
      "Search fund discovery platform with 4,849 funds and 75 enriched contacts. Full-text search, magic link auth, stage-colored cards, analytics dashboard. A real data product built from scratch.",
    previewType: "dark",
    previewText: "SearchFundDB\n4,849 Funds",
    previewStat: "4,849 Funds Loaded",
    link: "https://searchfunddb.vercel.app",
  },
  {
    slug: "nasher-prize",
    title: "Nasher Sculpture Center — Producer",
    tag: "Experience · Production · Art · NYT Coverage",
    description:
      "Produced two Nasher Prize experiences: Theaster Gates' Afro-Mingei (2022-2023) — a restaurant/DJ/community concept fusing Japanese and African American culture — and Otobong Nkanga's 2025 Prize. 5,000+ attendees. New York Times, Surface Magazine, ARTnews coverage.",
    previewType: "gradient",
    previewText: "Afro-Mingei\nNasher Prize",
    previewStat: "5,000+ Attendees · NYT",
  },
  {
    slug: "classic-chevrolet",
    title: "Classic Chevrolet — Digital Transformation",
    tag: "Social Media · Brand · #1 Dealer in the World",
    description:
      "Built the first story-driven social media strategy for the #1 volume Chevrolet dealership in the world (65,000 sq ft, 22-time Dealer of the Year). Managed the C8 mid-engine Corvette reveal (4,500+ attendees). ~1M impression growth. Celebrity liaising. Saturday Fair community events.",
    previewType: "dark",
    previewText: "Classic\nChevrolet",
    previewStat: "#1 Chevy Dealer · World",
  },
  {
    slug: "lpm-sop",
    title: "LPM SOP Platform",
    tag: "SaaS · FastAPI · Docker · 13 Services",
    description:
      "Full-production SOP management platform. 13-service Docker stack — Postgres, Redis, FastAPI, Celery, Nginx, Traefik, Prometheus, Grafana, ELK. The most architecturally complex build.",
    image: "/projects/lpm-hero.png",
  },
  {
    slug: "emma-project",
    title: "The Emma Project",
    tag: "Client · React · Three.js · 3D Web",
    description:
      "3D showcase website built with Three.js and React Three Fiber. Premium visual experience with interactive 3D elements, Framer Motion animations, and Lenis smooth scrolling.",
    image: "/projects/emma-project-hero.png",
    link: "https://emmaproject.vercel.app",
  },
  {
    slug: "haus-of-duas",
    title: "Haus of Duas",
    tag: "App · React · Gemini AI · Islamic Prayer",
    description:
      "Islamic prayer companion app with Google Gemini AI integration for prayer guidance and Q&A. Built with React 19, Vite, and Tailwind.",
    image: "/projects/haus-of-duas.png",
    link: "https://haus-of-duas.vercel.app",
  },
  {
    slug: "ai-confession-booth",
    title: "AI Confession Booth",
    tag: "Consumer · Next.js · OpenAI · Stripe",
    description:
      "Anonymous AI-powered confessional with real-time responses, payment integration via Stripe, and exportable confessions via HTML2Canvas. Supabase auth.",
    previewType: "dark",
    previewText: "AI Confession\nBooth",
  },
  {
    slug: "ac-christopher",
    title: "AC Christopher Accountancy",
    tag: "Client · React · Vite · Professional Services",
    description:
      "Professional CPA firm website. Clean, authoritative design with React 19, Framer Motion animations, and responsive layout.",
    image: "/projects/ac-christopher-hero.png",
    link: "https://c-akhidenor-cpa.vercel.app",
  },
];
