import { TimelineEntry } from "@/data/timeline";
import { StatBadge } from "./StatBadge";

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="mb-12 relative pl-10 border-l-2 border-brand-gray-300">
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-orange rounded-full" />
      {entry.link ? (
        <a href={entry.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-2 hover:underline block">
          {entry.organization} ↗
        </a>
      ) : (
        <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-2">{entry.organization}</p>
      )}
      <h4 className="text-lg font-extrabold uppercase tracking-tight mb-0.5">{entry.role}</h4>
      <p className="text-sm text-brand-gray-600 mb-2">{entry.subtitle}</p>
      <p className="text-sm text-brand-gray-600 leading-relaxed max-w-xl">{entry.description}</p>
      {entry.stat && <StatBadge>{entry.stat}</StatBadge>}
    </div>
  );
}
