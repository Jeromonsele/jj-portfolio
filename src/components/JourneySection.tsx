"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

const milestones = [
  { month: "Jul 2025", label: "Day Zero", detail: "Applied agentic workflows to ship first production app with zero prior code. Wrong Door Club + LPM v1. Figured out deployment workflows. Started shipping fast.", num: "01" },
  { month: "Oct 2025", label: "Building Momentum", detail: "Four apps shipped. Fitness tracker, content calendar, prompt engineering tool. Deployment workflows clicking into place.", num: "02" },
  { month: "Nov 2025", label: "AI Integration", detail: "Gemini AI, Three.js, OpenAI + Stripe. Four products in one month. Art and tech finally converging the way I'd always imagined.", num: "03" },
  { month: "Jan 2026", label: "First Paid Client", detail: "AC Christopher CPA. Professional services site generating real revenue. First time someone paid me to build.", num: "04" },
  { month: "Feb 2026", label: "Data Products", detail: "SearchFundDB (4,849 funds), PressureX lead engine, Company X-Ray. Real databases, real auth, real pipelines.", num: "05" },
  { month: "Mar 2026", label: "Platform Scale", detail: "The Very Good Home Company. 1.8M property records, 4 counties, automated lead pipeline. The thesis proved out.", num: "06" },
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
    <section id="journey" className="bg-obsidian text-cream">
      <SectionLabel number="04" label="THE BUILD JOURNEY" dark />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-4">
            9 Months.<br />Zero to Production.
          </h2>
          <p className="text-white/50 max-w-xl mb-12 text-lg leading-relaxed">
            I started coding as a kid. Khan Academy, building things in browsers, trying to make art through code. I was never a traditional coder, but I understood the frameworks. For most of my career, the gap between what I could envision and what I could ship was other people&apos;s engineering time. AI closed that gap. In July 2025, I deployed my first real web application. By March 2026, I was running a platform with 1.8 million property records.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {milestones.map((m, i) => {
            const progress = ((i + 1) / totalMilestones) * 100;
            return (
              <ScrollReveal key={m.month} delay={i * 0.06}>
                <div className="border border-white/10 p-6 relative overflow-hidden hover:border-tvgg-rust/40 transition-colors duration-300 group">
                  {/* Big background number */}
                  <span
                    className="absolute -right-2 -top-4 text-[5rem] font-black leading-none text-white/[0.04] pointer-events-none select-none group-hover:text-tvgg-rust/[0.08] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {m.num}
                  </span>

                  {/* Orange progress bar at top */}
                  <div className="absolute top-0 left-0 h-[3px] bg-tvgg-rust transition-all duration-500" style={{ width: `${progress}%` }} />

                  <div className="relative z-10">
                    <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-2">{m.month}</p>
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
          <p className="font-mono text-[11px] text-tvgg-rust uppercase tracking-[2px] mb-4">Languages &amp; Tools Learned</p>
          <div className="flex flex-wrap gap-2">
            {techLearned.map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-white/40 border border-white/10 px-3 py-1.5 uppercase tracking-wider hover:border-tvgg-rust/30 hover:text-tvgg-rust transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
