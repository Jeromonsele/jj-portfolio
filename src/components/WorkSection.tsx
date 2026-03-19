import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

export function WorkSection() {
  return (
    <section id="work">
      <SectionLabel number="03" label="SELECTED WORK" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(32px,5vw,56px)] font-black uppercase tracking-tight leading-none mb-10">
            Things<br />I&apos;ve Built.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
