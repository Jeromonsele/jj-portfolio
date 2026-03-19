"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

const milestones = [
  { month: "Oct 2025", label: "First Deploy", detail: "75 Hard Tracker — renamed an HTML file and pushed to Vercel. The beginning." },
  { month: "Nov 2025", label: "React + Framer Motion", detail: "Haus of Duas, Emma Project (Three.js), AI Confession Booth. Learning component architecture and animation." },
  { month: "Dec 2025", label: "Multi-Page Apps", detail: "Life After 50, Periods (custom domain). Understanding routing, smooth scroll, real product thinking." },
  { month: "Jan 2026", label: "Client Revenue", detail: "AC Christopher CPA (www.chrisacpa.com). First paid client site. Professional services design." },
  { month: "Feb 2026", label: "Full-Stack + AI", detail: "PressureX Lead Engine, SearchFundDB (4,849 funds), Company X-Ray. Supabase, auth, data pipelines." },
  { month: "Mar 2026", label: "Platform Scale", detail: "TVGHC — 1.8M property records, 4 counties, automated lead pipeline. From HTML rename to production platform in 6 months." },
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
            6 Months.<br />20+ Deploys.<br />Zero to Platform.
          </h2>
          <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
            In October 2025, I renamed an HTML file and pushed it to Vercel. By March 2026, I was shipping a platform with 1.8 million property records. This is what happens when a project manager learns to build.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
