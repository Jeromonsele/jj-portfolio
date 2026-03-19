"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

const milestones = [
  { month: "Jul 2025", label: "Day Zero", detail: "Applied agentic workflows to ship first production app with zero prior code. Wrong Door Club + LPM v1." },
  { month: "Aug 2025", label: "First Iteration Cycle", detail: "Responsive polish, deployment workflows mastered. Shipping velocity established." },
  { month: "Oct 2025", label: "Multi-Project Ops", detail: "3 apps deployed in one month. 75 Hard Tracker, CC Planning, AIPromptDoc. Parallel execution unlocked." },
  { month: "Nov 2025", label: "AI + 3D + Payments", detail: "4 products shipped. Gemini AI, Three.js 3D, OpenAI + Stripe payments. Each one would be a sprint for a dev team." },
  { month: "Dec 2025", label: "Product Thinking", detail: "Custom domains. Multi-page architecture. Periods (getperiods.app), Life After 50. Building products, not projects." },
  { month: "Jan 2026", label: "Revenue", detail: "First paid client site live at www.chrisacpa.com. Zero to client revenue in 6 months." },
  { month: "Feb 2026", label: "Data Infrastructure", detail: "SearchFundDB: 4,849 funds loaded. PressureX lead engine. Company X-Ray. Supabase, auth, data pipelines at scale." },
  { month: "Mar 2026", label: "Platform Scale", detail: "TVGHC: 1.8M property records, 4 counties, automated lead pipeline, 5-star reviews. Nine months from first line of code." },
];

const techLearned = [
  "React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Three.js", "Supabase", "FastAPI", "Python", "Docker",
  "OpenAI SDK", "Google Gemini", "Stripe", "Twilio", "Lenis",
  "Prisma", "Redis", "Celery", "Vercel", "Git",
];

export function JourneySection() {
  return (
    <section id="journey">
      <SectionLabel number="02.5" label="THE BUILD JOURNEY" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-4">
            What Happens When<br />an Operator Gets AI.
          </h2>
          <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
            I&apos;m a PMP, Six Sigma, MS-level systems thinker. In July 2025, I applied agentic AI workflows to software for the first time. Nine months later: a production platform with 1.8M records, 20+ deployed products, and a pace that would take a traditional engineering team two years with a six-figure budget. AI doesn&apos;t replace operators. It reveals who actually knows how to operate.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.month} delay={i * 0.06}>
              <div className="border border-brand-gray-300 p-6">
                <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">{m.month}</p>
                <h4 className="text-lg font-extrabold uppercase tracking-tight mb-2">{m.label}</h4>
                <p className="text-[13px] text-brand-gray-600 leading-relaxed">{m.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Stack */}
        <ScrollReveal>
          <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-4">Languages & Tools Learned</p>
          <div className="flex flex-wrap gap-2">
            {techLearned.map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-brand-gray-600 border border-brand-gray-300 px-3 py-1.5 uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
