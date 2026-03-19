"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

const milestones = [
  { month: "Jul 2025", label: "Day Zero", detail: "Applied agentic workflows to ship first production app with zero prior code. Wrong Door Club + LPM v1.", num: "01" },
  { month: "Aug 2025", label: "First Iteration Cycle", detail: "Responsive polish. Figured out deployment workflows. Started shipping fast.", num: "02" },
  { month: "Oct 2025", label: "Multi-Project Ops", detail: "3 apps deployed in one month. 75 Hard Tracker, CC Planning, AIPromptDoc. Running projects in parallel now.", num: "03" },
  { month: "Nov 2025", label: "AI + 3D + Payments", detail: "4 products shipped. Gemini AI, Three.js 3D, OpenAI + Stripe. Any one of these is a sprint for a dev team.", num: "04" },
  { month: "Dec 2025", label: "Real Products", detail: "Custom domains. Multi-page apps. Periods (getperiods.app), Life After 50. These aren't demos anymore.", num: "05" },
  { month: "Jan 2026", label: "Revenue", detail: "First paid client site live at www.chrisacpa.com. Went from zero code to client revenue in 6 months.", num: "06" },
  { month: "Feb 2026", label: "Data Infrastructure", detail: "SearchFundDB: 4,849 funds loaded. PressureX lead engine. Company X-Ray. Real databases, real auth, real pipelines.", num: "07" },
  { month: "Mar 2026", label: "Platform Scale", detail: "TVGHC: 1.8M property records, 4 counties, automated lead pipeline, 5-star reviews. Nine months from first line of code.", num: "08" },
];

const techLearned = [
  "React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Three.js", "Supabase", "FastAPI", "Python", "Docker",
  "OpenAI SDK", "Google Gemini", "Stripe", "Twilio", "Lenis",
  "Prisma", "Redis", "Celery", "Vercel", "Git",
];

export function JourneySection() {
  const totalMilestones = milestones.length;

  return (
    <section id="journey" className="bg-black text-warm-white">
      <SectionLabel number="02.5" label="THE BUILD JOURNEY" dark />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-4">
            What Happens When<br />an Operator Gets AI.
          </h2>
          <p className="text-white/50 max-w-xl mb-12 text-lg leading-relaxed">
            I have a PMP, Six Sigma, and a master&apos;s in organizational change. In July 2025, I wrote my first line of code using agentic AI. Nine months later I had a production platform with 1.8M records and 20+ deployed products. A traditional dev team would need two years and a six-figure budget. AI doesn&apos;t replace operators. It reveals who actually knows how to operate.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {milestones.map((m, i) => {
            const progress = ((i + 1) / totalMilestones) * 100;
            return (
              <ScrollReveal key={m.month} delay={i * 0.06}>
                <div className="border border-white/10 p-6 relative overflow-hidden hover:border-orange/40 transition-colors duration-300 group">
                  {/* Big background number */}
                  <span
                    className="absolute -right-2 -top-4 text-[5rem] font-black leading-none text-white/[0.04] pointer-events-none select-none group-hover:text-orange/[0.08] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {m.num}
                  </span>

                  {/* Orange progress bar at top */}
                  <div className="absolute top-0 left-0 h-[3px] bg-orange transition-all duration-500" style={{ width: `${progress}%` }} />

                  <div className="relative z-10">
                    <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">{m.month}</p>
                    <h4 className="text-lg font-extrabold uppercase tracking-tight mb-2">{m.label}</h4>
                    <p className="text-[13px] text-white/50 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tech Stack */}
        <ScrollReveal>
          <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-4">Languages &amp; Tools Learned</p>
          <div className="flex flex-wrap gap-2">
            {techLearned.map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-white/40 border border-white/10 px-3 py-1.5 uppercase tracking-wider hover:border-orange/30 hover:text-orange transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
