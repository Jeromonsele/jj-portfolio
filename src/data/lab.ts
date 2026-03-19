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
    title: "AI Confession Booth",
    description:
      "Next.js + OpenAI + Stripe. Anonymous AI-powered confessions with real-time responses.",
    tag: "Interactive · Live",
  },
  {
    number: "002",
    title: "Agentic Coding Workflow",
    description:
      "How I run 5 AI coding tools simultaneously — Claude Code, Cursor, Codex, Gemini, Qodo.",
    tag: "Article · Process",
  },
  {
    number: "003",
    title: "Profit Leak Calculator",
    description:
      "Interactive diagnostic tool that quantifies operational waste for service businesses.",
    tag: "Interactive · Tool",
  },
  {
    number: "004",
    title: "AI Phone Receptionist",
    description:
      "FastAPI + Twilio + OpenAI voice bot. Automated phone reception with natural conversation.",
    tag: "Experiment · AI",
  },
  {
    number: "005",
    title: "The Book",
    description:
      "PM and systems design through the lens of non-linear thinking. How to build and build well.",
    tag: "Writing · In Progress",
  },
];
