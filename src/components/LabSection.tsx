import { labEntries } from "@/data/lab";
import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { LabCard } from "./LabCard";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

export function LabSection() {
  const labProjects = projects.filter((p) => p.tier === "lab");

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {labEntries.map((entry, i) => (
            <ScrollReveal key={entry.number} delay={i * 0.08}>
              <LabCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>

        {/* Side Projects */}
        <ScrollReveal>
          <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-4">
            Side Projects
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} compact />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
