import { nowRoles } from "@/data/now";
import { SectionLabel } from "./SectionLabel";
import { NowCard } from "./NowCard";
import { ScrollReveal } from "./ScrollReveal";

export function NowSection() {
  return (
    <section id="now">
      <SectionLabel number="01" label="NOW" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nowRoles.map((role, i) => (
            <ScrollReveal key={role.company} delay={i * 0.1}>
              <NowCard role={role} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
