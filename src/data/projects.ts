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
  tier: "flagship" | "builder" | "lab";
}

export const projects: Project[] = [
  {
    slug: "tvghc",
    title: "The Very Good Home Company",
    tag: "Platform · Next.js · Supabase · 1.8M Records",
    description:
      "Insulation platform for DFW homeowners. 1.8M property records across 4 counties, instant estimator, automated lead pipeline through Lead Truffle, rebate calculator, energy loss calculator. 5-star Google reviews. I built all of it.",
    image: "/projects/tvghc-hero.png",
    previewStat: "1.8M Properties · 4 Counties",
    link: "https://theverygoodhomecompany.com",
    tier: "flagship",
  },
  {
    slug: "tvgg",
    title: "The Very Good Consulting — 4 Gaps Framework",
    tag: "Consulting · Framework · Proprietary IP",
    description:
      "Operations consulting with a diagnostic framework I built. The 4 Gaps (psychological, cultural, systems, technical) came out of my master's program and got tested on real businesses. Helps home services founders stop being the bottleneck.",
    image: "/projects/tvgg-hero.png",
    link: "https://theverygoodguys.com",
    tier: "flagship",
  },
  {
    slug: "searchfunddb",
    title: "SearchFundDB",
    tag: "Database · Next.js · Supabase · 4,849 Funds",
    description:
      "Search fund discovery platform. 4,849 funds, 75 enriched contacts. Full-text search, magic link auth, stage-colored cards, analytics dashboard. Built from scratch.",
    previewType: "dark",
    previewText: "SearchFundDB\n4,849 Funds",
    previewStat: "4,849 Funds Loaded",
    link: "https://searchfunddb.vercel.app",
    tier: "flagship",
  },
  {
    slug: "nasher-prize",
    title: "Nasher Sculpture Center — Producer",
    tag: "Experience · Production · Art · NYT Coverage",
    description:
      "Produced two Nasher Prize experiences. Theaster Gates' Afro-Mingei (2022-2023), a restaurant/DJ/community concept fusing Japanese and African American culture. Then Otobong Nkanga's 2025 Prize. 5,000+ attendees. Covered by the New York Times, Surface Magazine, and ARTnews.",
    previewType: "gradient",
    previewText: "Afro-Mingei\nNasher Prize",
    previewStat: "5,000+ Attendees · NYT",
    link: "https://www.nashersculpturecenter.org/programs-events/programs-list/program/id/307",
    tier: "flagship",
  },
  {
    slug: "classic-chevrolet",
    title: "Classic Chevrolet — Digital Transformation",
    tag: "Social Media · Brand · #1 Dealer in the World",
    description:
      "Built the first story-driven social media strategy for the #1 volume Chevy dealer in the world. 65,000 sq ft, 22-time Dealer of the Year. Ran the C8 mid-engine Corvette reveal (4,500+ attendees). ~1M impression growth. Celebrity coordination. Created the Saturday Fair community events.",
    previewType: "dark",
    previewText: "Classic\nChevrolet",
    previewStat: "#1 Chevy Dealer · World",
    link: "https://www.classicchevrolet.com",
    tier: "flagship",
  },
  {
    slug: "lpm-sop",
    title: "LPM SOP Platform",
    tag: "SaaS · FastAPI · Docker · 13 Services",
    description:
      "SOP management platform running 13 Docker services: Postgres, Redis, FastAPI, Celery, Nginx, Traefik, Prometheus, Grafana, ELK. The biggest thing I've built architecturally.",
    image: "/projects/lpm-hero.png",
    link: "https://lpm-2.vercel.app",
    tier: "flagship",
  },
  {
    slug: "emma-project",
    title: "The Emma Project",
    tag: "Client · React · Three.js · 3D Web",
    description:
      "3D website built with Three.js and React Three Fiber. Interactive 3D elements, Framer Motion animations, Lenis smooth scrolling. Client project.",
    image: "/projects/emma-project-hero.png",
    link: "https://emmaproject.vercel.app",
    tier: "builder",
  },
  {
    slug: "haus-of-duas",
    title: "Haus of Duas",
    tag: "Design Studio · React · Art Curation · Brand Strategy",
    description:
      "Art curation and spatial design studio. Transforms corporate environments into curated narratives. Bespoke art, moodboard editions, white-glove installation. \"A space without a story is just a room.\"",
    image: "/projects/haus-of-duas.png",
    link: "https://haus-of-duas.vercel.app",
    tier: "builder",
  },
  {
    slug: "ai-confession-booth",
    title: "AI Confession Booth",
    tag: "Consumer · Next.js · OpenAI · Stripe",
    description:
      "Anonymous AI confessional. Real-time responses, Stripe payments, exportable confessions via HTML2Canvas. Supabase auth.",
    previewType: "dark",
    previewText: "AI Confession\nBooth",
    link: "https://ai-confession-booth.vercel.app",
    tier: "builder",
  },
  {
    slug: "ac-christopher",
    title: "AC Christopher Accountancy",
    tag: "Client · React · Vite · Professional Services",
    description:
      "CPA firm website. Clean design, React 19, Framer Motion, fully responsive. Paid client work.",
    image: "/projects/ac-christopher-hero.png",
    link: "https://c-akhidenor-cpa.vercel.app",
    tier: "builder",
  },
  {
    slug: "pressurex",
    title: "PressureX — Lead Engine",
    tag: "Lead Gen · Next.js · Supabase · High-Converting UI",
    description:
      "Lead generation engine for the insulation business. The estimate UI that feeds TVGHC's pipeline.",
    previewType: "dark",
    previewText: "PressureX\nLead Engine",
    link: "https://pressure-x-6ehl.vercel.app",
    tier: "builder",
  },
  {
    slug: "company-xray",
    title: "Company X-Ray",
    tag: "Tool · Business Intelligence",
    description:
      "Business intelligence tool I built during consulting to diagnose operational issues faster.",
    previewType: "terminal",
    previewText: "$ company-xray\n→ analyzing...\n✓ report ready",
    link: "https://company-xray.vercel.app",
    tier: "builder",
  },
  {
    slug: "periods",
    title: "Periods.",
    tag: "Product · Next.js · Cross-Platform · Custom Domain",
    description:
      "Period tracking app. Web + iOS, custom domain (getperiods.app). Built it because I needed it to exist.",
    previewType: "dark",
    previewText: "Periods.",
    link: "https://getperiods.app",
    tier: "lab",
  },
  {
    slug: "life-after-50",
    title: "Life After 50",
    tag: "Web App · React · Smooth Scroll",
    description:
      "Multi-page web app with smooth scroll navigation. Built for people thinking about what comes after 50.",
    previewType: "gradient",
    previewText: "Life\nAfter 50",
    link: "https://life-after50.vercel.app",
    tier: "lab",
  },
  {
    slug: "wrong-door-club",
    title: "Wrong Door Club",
    tag: "Web · React · Responsive Design · Jul 2025",
    description:
      "One of my earliest builds. Responsive web app, polished and deployed. This is where I started coding, before agentic tools changed everything.",
    previewType: "gradient",
    previewText: "Wrong\nDoor Club",
    link: "https://wrongdoorclub.vercel.app",
    tier: "lab",
  },
  {
    slug: "aipromptdoc",
    title: "AIPromptDoc",
    tag: "Tool · Python 3.12 · Prompt Engineering",
    description:
      "Prompt engineering documentation tool. Python 3.12 backend. This is where my interest in AI tooling started.",
    previewType: "terminal",
    previewText: "$ aipromptdoc\n→ deploy ready\n✓ Python 3.12",
    link: "https://aipromptdoc.vercel.app",
    tier: "lab",
  },
  {
    slug: "cc-planning",
    title: "CC Planning",
    tag: "Tool · React · Content Calendar",
    description:
      "Content calendar planning tool. Refactored for error handling and memory leak prevention. One of my first real React apps.",
    previewType: "light",
    previewText: "CC\nPlanning",
    link: "https://cc-planning.vercel.app",
    tier: "lab",
  },
  {
    slug: "75-hard",
    title: "75 Hard Couples Tracker",
    tag: "PWA · HTML · First Deploy · Oct 2025",
    description:
      "PWA fitness tracker for couples doing 75 Hard together. My very first Vercel deployment, October 2025. Where it all started.",
    previewType: "dark",
    previewText: "75 HARD\nDay 1",
    link: "https://75-hard-couples-tracker-5wcu.vercel.app",
    tier: "lab",
  },
  {
    slug: "vibe-receipt",
    title: "Vibe Receipt Generator",
    tag: "Experiment · v0 · AI-Assisted Code",
    description:
      "Receipt generator built with v0. I was playing with AI-assisted code generation before going deep on agentic workflows.",
    previewType: "dark",
    previewText: "Vibe\nReceipt",
    link: "https://v0-vibe-receipt-generator.vercel.app",
    tier: "lab",
  },
];
