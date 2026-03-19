import { LabEntry } from "@/data/lab";

export function LabCard({ entry }: { entry: LabEntry }) {
  return (
    <div className="border border-white/10 p-6 cursor-pointer hover:border-orange transition-colors">
      <p className="font-mono text-[10px] text-white/30 mb-4">// {entry.number}</p>
      <h4 className="text-[15px] font-bold mb-2">{entry.title}</h4>
      <p className="text-xs text-white/50 leading-relaxed">{entry.description}</p>
      <p className="font-mono text-[10px] text-orange uppercase tracking-wider mt-4">{entry.tag}</p>
    </div>
  );
}
