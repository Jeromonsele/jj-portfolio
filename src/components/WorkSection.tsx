import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

export function WorkSection() {
  return (
    <section id="work" className="relative">
      {/* Architectural numeral */}
      <div
        className="absolute top-0 right-10 text-[clamp(15rem,30vw,25rem)] font-black leading-none text-black opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        01
      </div>

      <SectionLabel number="03" label="SELECTED WORK" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-[clamp(4rem,7vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Things<br />I&apos;ve Built.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
