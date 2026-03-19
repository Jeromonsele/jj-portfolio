import { Project } from "@/data/projects";

const previewStyles: Record<Project["previewType"], string> = {
  dark: "bg-black text-white",
  gradient: "bg-gradient-to-br from-[#2D1B14] to-[#4A2E20] text-white",
  light: "bg-warm-white border-b-[3px] border-orange text-black",
  terminal: "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white font-mono text-[13px]",
};

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className={`h-[200px] flex items-end justify-start p-6 relative ${previewStyles[project.previewType]}`}>
        {project.previewStat && (
          <span className="absolute top-4 right-4 font-mono text-[10px] text-orange uppercase tracking-wider">{project.previewStat}</span>
        )}
        <span className="text-2xl font-black uppercase leading-tight tracking-tight whitespace-pre-line">{project.previewText}</span>
      </div>
      <div className="p-6">
        <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">{project.tag}</p>
        <h3 className="text-lg font-extrabold uppercase tracking-tight mb-2">{project.title}</h3>
        <p className="text-[13px] text-brand-gray-600 leading-relaxed">{project.description}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mt-3 group-hover:text-orange transition-colors">
          View Project →
        </span>
      </div>
    </>
  );

  const className = "block border border-brand-gray-300 bg-warm-white overflow-hidden cursor-pointer hover:border-black transition-colors group";

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
