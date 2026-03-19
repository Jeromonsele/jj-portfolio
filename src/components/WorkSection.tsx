import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

export function WorkSection() {
  const flagship = projects.filter((p) => p.tier === "flagship");
  const builder = projects.filter((p) => p.tier === "builder");

  return (
    <section id="work" className="relative">
      <div
        className="absolute top-0 right-10 text-[clamp(15rem,30vw,25rem)] font-black leading-none text-black opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        01
      </div>

      <SectionLabel number="05" label="SELECTED WORK" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Things<br />I&apos;ve Built.
          </h2>
        </ScrollReveal>

        {/* Flagship — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {flagship.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Builder Proof — smaller cards */}
        <ScrollReveal>
          <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-4">
            Builder Proof
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {builder.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.04}>
              <ProjectCard project={project} compact />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
