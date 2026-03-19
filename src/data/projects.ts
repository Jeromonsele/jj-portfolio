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
    link: "https://www.nashersculpturecenter.org/programs-events/programs-list/program/id/307",
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
    link: "https://www.classicchevrolet.com",
  },
  {
    slug: "lpm-sop",
    title: "LPM SOP Platform",
    tag: "SaaS · FastAPI · Docker · 13 Services",
    description:
      "Full-production SOP management platform. 13-service Docker stack — Postgres, Redis, FastAPI, Celery, Nginx, Traefik, Prometheus, Grafana, ELK. The most architecturally complex build.",
    image: "/projects/lpm-hero.png",
    link: "https://lpm-2.vercel.app",
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
    link: "https://ai-confession-booth.vercel.app",
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
  {
    slug: "periods",
    title: "Periods.",
    tag: "Product · Next.js · Cross-Platform · Custom Domain",
    description:
      "Period tracking app with a custom domain (getperiods.app). Web + iOS. A personal product built to solve a real need.",
    previewType: "dark",
    previewText: "Periods.",
    link: "https://getperiods.app",
  },
  {
    slug: "life-after-50",
    title: "Life After 50",
    tag: "Web App · React · Smooth Scroll",
    description:
      "Multi-page web application with smooth scroll navigation. Built for an audience thinking about what comes next.",
    previewType: "gradient",
    previewText: "Life\nAfter 50",
    link: "https://life-after50.vercel.app",
  },
  {
    slug: "pressurex",
    title: "PressureX — Lead Engine",
    tag: "Lead Gen · Next.js · Supabase · High-Converting UI",
    description:
      "Lead generation engine built specifically for the insulation business. High-converting estimate UI. The tech layer behind TVGHC's customer acquisition.",
    previewType: "dark",
    previewText: "PressureX\nLead Engine",
    link: "https://pressure-x-6ehl.vercel.app",
  },
  {
    slug: "company-xray",
    title: "Company X-Ray",
    tag: "Tool · Business Intelligence",
    description:
      "Business intelligence tool for analyzing company data. Built during the consulting practice to diagnose operational issues faster.",
    previewType: "terminal",
    previewText: "$ company-xray\n→ analyzing...\n✓ report ready",
    link: "https://company-xray.vercel.app",
  },
  {
    slug: "wrong-door-club",
    title: "Wrong Door Club",
    tag: "Web · React · Responsive Design · Jul 2025",
    description:
      "One of the earliest builds — responsive web app with final polish before deploy. Where the coding journey began, before agentic tools changed everything.",
    previewType: "gradient",
    previewText: "Wrong\nDoor Club",
    link: "https://wrongdoorclub.vercel.app",
  },
  {
    slug: "aipromptdoc",
    title: "AIPromptDoc",
    tag: "Tool · Python 3.12 · Prompt Engineering",
    description:
      "Prompt engineering documentation tool. Python backend with all imports fixed for production. Where the interest in AI tooling and prompt design began.",
    previewType: "terminal",
    previewText: "$ aipromptdoc\n→ deploy ready\n✓ Python 3.12",
    link: "https://aipromptdoc.vercel.app",
  },
  {
    slug: "cc-planning",
    title: "CC Planning",
    tag: "Tool · React · Content Calendar",
    description:
      "Content calendar planning tool. Refactored for error handling, initialization flow, and memory leak prevention. Early React architecture learning.",
    previewType: "light",
    previewText: "CC\nPlanning",
    link: "https://cc-planning.vercel.app",
  },
  {
    slug: "75-hard",
    title: "75 Hard Couples Tracker",
    tag: "PWA · HTML · First Deploy · Oct 2025",
    description:
      "PWA fitness tracker for couples doing the 75 Hard challenge. The very first Vercel deployment — October 2025. Where it all started.",
    previewType: "dark",
    previewText: "75 HARD\nDay 1",
    link: "https://75-hard-couples-tracker-5wcu.vercel.app",
  },
  {
    slug: "vibe-receipt",
    title: "Vibe Receipt Generator",
    tag: "Experiment · v0 · AI-Assisted Code",
    description:
      "Fun receipt generator built with v0. Playing with AI-assisted code generation before going deep on agentic workflows.",
    previewType: "dark",
    previewText: "Vibe\nReceipt",
    link: "https://v0-vibe-receipt-generator.vercel.app",
  },
];
