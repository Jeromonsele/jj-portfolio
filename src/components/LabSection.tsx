import { labEntries } from "@/data/lab";
import { SectionLabel } from "./SectionLabel";
import { LabCard } from "./LabCard";
import { ScrollReveal } from "./ScrollReveal";

export function LabSection() {
  return (
    <section id="lab" className="bg-black text-warm-white">
      <SectionLabel number="04" label="THE LAB" dark />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-3">
            The Lab.
          </h2>
          <p className="text-sm text-white/50 mb-10 max-w-md">
            Experiments, tools, and things I think are cool. Updates as I build.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labEntries.map((entry, i) => (
            <ScrollReveal key={entry.number} delay={i * 0.08}>
              <LabCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
