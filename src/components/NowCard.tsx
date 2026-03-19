import { NowRole } from "@/data/now";

export function NowCard({ role }: { role: NowRole }) {
  return (
    <div className="border border-brand-gray-300 p-8 bg-warm-white">
      <span className="font-mono text-[11px] text-brand-gray-600 border border-brand-gray-300 px-2.5 py-1 inline-block mb-4">
        {role.date}
      </span>
      <h3 className="text-xl font-extrabold uppercase tracking-tight mb-1">{role.title}</h3>
      <p className="text-sm text-brand-gray-600 mb-3">{role.company}</p>
      <p className="text-sm text-brand-gray-600 leading-relaxed">{role.description}</p>
      {role.link && (
        <a href={role.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mt-4 hover:text-orange transition-colors">
          Visit Site →
        </a>
      )}
    </div>
  );
}
