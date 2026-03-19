export interface LabEntry {
  number: string;
  title: string;
  description: string;
  tag: string;
  link?: string;
}

export const labEntries: LabEntry[] = [
  {
    number: "001",
    title: "TEDx Talk: Revolution for Dummies",
    description:
      "How to revolutionize your world, your dreams, and why being a revolutionary might be the best thing for you.",
    tag: "Talk · TEDxUTA · 2018",
    link: "https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies",
  },
  {
    number: "002",
    title: "SearchFundDB",
    description:
      "Search fund discovery platform with 4,849 funds loaded. Full-text search, magic link auth, analytics dashboard.",
    tag: "Live · Data Product",
    link: "https://searchfunddb.vercel.app",
  },
  {
    number: "003",
    title: "AI Confession Booth",
    description:
      "Next.js + OpenAI + Stripe. Anonymous AI-powered confessions with real-time responses.",
    tag: "Interactive · Live",
    link: "https://ai-confession-booth.vercel.app",
  },
  {
    number: "004",
    title: "Agentic Coding Workflow",
    description:
      "How I run 5 AI coding tools simultaneously — Claude Code, Cursor, Codex, Gemini, Qodo.",
    tag: "Article · Process",
  },
  {
    number: "005",
    title: "Profit Leak Calculator",
    description:
      "Tells service businesses exactly how much money they're losing to operational waste.",
    tag: "Interactive · Tool",
    link: "https://theverygoodguys.com/health-check",
  },
  {
    number: "006",
    title: "AI Phone Receptionist",
    description:
      "FastAPI + Twilio + OpenAI voice bot. Picks up the phone and talks to people so you don't have to.",
    tag: "Experiment · AI",
  },
  {
    number: "007",
    title: "The Book",
    description:
      "PM and systems design for people who don't think in straight lines. In progress.",
    tag: "Writing · In Progress",
  },
  {
    number: "008",
    title: "CC Planning",
    description:
      "Content calendar planning tool. My first real React app. Learned how to stop crashing browsers.",
    tag: "Tool · React · Early Build",
    link: "https://cc-planning.vercel.app",
  },
  {
    number: "009",
    title: "75 Hard Couples Tracker",
    description:
      "PWA fitness tracker for couples doing the 75 Hard challenge together. My first Vercel deployment — Oct 2025.",
    tag: "PWA · First Deploy · Oct 2025",
    link: "https://75-hard-couples-tracker-5wcu.vercel.app",
  },
  {
    number: "010",
    title: "Vibe Receipt Generator",
    description:
      "Receipt generator built with v0. Messing around with AI-assisted code before I went all in on agentic workflows.",
    tag: "Experiment · v0 · AI-Assisted",
    link: "https://v0-vibe-receipt-generator.vercel.app",
  },
  {
    number: "011",
    title: "AIPromptDoc",
    description:
      "Prompt engineering documentation tool. Python 3.12. This is where I first got curious about AI tooling.",
    tag: "Tool · Python · Prompt Engineering",
    link: "https://aipromptdoc.vercel.app",
  },
];
