export function StatBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-black text-warm-white font-mono text-[11px] px-3.5 py-1.5 mt-3 uppercase tracking-wider">
      {children}
    </span>
  );
}
