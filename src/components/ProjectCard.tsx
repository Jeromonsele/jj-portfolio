import Image from "next/image";
import { Project } from "@/data/projects";

const previewStyles: Record<string, string> = {
  dark: "bg-obsidian text-cream",
  gradient: "bg-gradient-to-br from-[#2D1B14] to-[#4A2E20] text-cream",
  light: "bg-cream border-b-[3px] border-tvgg-rust text-obsidian",
  terminal: "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-cream font-mono text-[13px]",
};

export function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  const previewHeight = compact ? "h-[140px]" : "h-[200px]";

  const preview = project.image ? (
    <div className={`${previewHeight} relative overflow-hidden`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-top"
      />
      {project.previewStat && (
        <span className="absolute bottom-3 right-3 bg-obsidian/80 text-cream font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
          {project.previewStat}
        </span>
      )}
    </div>
  ) : (
    <div className={`${previewHeight} flex items-end justify-start p-6 relative ${previewStyles[project.previewType || "dark"]}`}>
      {project.previewStat && (
        <span className="absolute top-4 right-4 font-mono text-[10px] text-tvgg-rust uppercase tracking-wider">{project.previewStat}</span>
      )}
      <span className="font-heading text-2xl font-black uppercase leading-tight tracking-tighter whitespace-pre-line">{project.previewText}</span>
    </div>
  );

  const content = (
    <>
      {preview}
      <div className="p-6">
        <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-widest mb-2 font-semibold">{project.tag}</p>
        <h3 className={`${compact ? "text-base" : "text-lg"} font-heading font-extrabold uppercase tracking-tighter mb-2`}>{project.title}</h3>
        <p className={`text-[13px] text-brand-gray-600 leading-relaxed ${compact ? "line-clamp-2" : ""}`}>{project.description}</p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[1.5px] mt-3 group-hover:text-tvgg-rust transition-colors">
          {project.link ? "Visit Site →" : "View Project →"}
        </span>
      </div>
    </>
  );

  const className = "block border border-obsidian/10 bg-cream overflow-hidden cursor-pointer hover:border-obsidian transition-all duration-300 active:scale-[0.98] group relative z-10";

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
