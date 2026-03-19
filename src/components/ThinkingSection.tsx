import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

const pieces = [
  {
    title: "The Very Good Guys — Newsletter",
    description: "Operations, AI, and building companies. Published on LinkedIn. I write about what I'm learning, what I'm getting wrong, and what I think is coming next.",
    tag: "Newsletter · LinkedIn",
    link: "https://linkedin.com/in/jordaneromonsele",
  },
  {
    title: "How I Built an AI Governance Framework from Scratch",
    description: "At ASG, 52% of teams were using AI tools with no oversight. I built a six-pillar governance framework, got it to 80% adoption, and learned a lot about how organizations actually change. This is that story.",
    tag: "Article · Coming Soon",
  },
  {
    title: "The Agentic Coding Workflow",
    description: "I run 5 AI coding tools simultaneously. Claude Code, Cursor, Codex, Gemini, Qodo. Here's how they fit together and why the future of building belongs to operators who can see what needs to exist.",
    tag: "Article · Process",
  },
  {
    title: "TEDx: Revolution for Dummies",
    description: "TEDxUTA, 2018. I was 22. The talk was about creating change without waiting for permission. I'd say it differently now, but I still believe every word.",
    tag: "Talk · 2018",
    link: "https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies",
  },
  {
    title: "The Book (In Progress)",
    description: "PM and systems design for people who don't think in straight lines. Who see connections instead of categories, and build frameworks instead of following them. Still writing it. Taking longer than I thought it would.",
    tag: "Writing · In Progress",
  },
];

export function ThinkingSection() {
  return (
    <section id="thinking">
      <SectionLabel number="06" label="THINKING" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-4">
            What I&apos;m<br />Working Through.
          </h2>
          <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
            Building a writing practice around operations, AI, and what it takes to build things that actually work. Some polished. Some thinking out loud.
          </p>
        </ScrollReveal>
        <div className="space-y-6 max-w-3xl">
          {pieces.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="block border border-brand-gray-300 p-6 hover:border-black transition-colors group">
                  <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">{p.tag}</p>
                  <h3 className="text-lg font-extrabold mb-2 group-hover:text-orange transition-colors">{p.title}</h3>
                  <p className="text-[13px] text-brand-gray-600 leading-relaxed">{p.description}</p>
                </a>
              ) : (
                <div className="border border-brand-gray-300 p-6">
                  <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">{p.tag}</p>
                  <h3 className="text-lg font-extrabold mb-2">{p.title}</h3>
                  <p className="text-[13px] text-brand-gray-600 leading-relaxed">{p.description}</p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
