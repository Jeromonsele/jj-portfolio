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
      "A step-by-step guide on how to revolutionize your world, your dreams, and why being a revolutionary might be the best thing for you.",
    tag: "Talk · TEDx · 2019",
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
      "Interactive diagnostic tool that quantifies operational waste for service businesses.",
    tag: "Interactive · Tool",
  },
  {
    number: "006",
    title: "AI Phone Receptionist",
    description:
      "FastAPI + Twilio + OpenAI voice bot. Automated phone reception with natural conversation.",
    tag: "Experiment · AI",
  },
  {
    number: "007",
    title: "The Book",
    description:
      "PM and systems design through the lens of non-linear thinking. How to build and build well.",
    tag: "Writing · In Progress",
  },
];
