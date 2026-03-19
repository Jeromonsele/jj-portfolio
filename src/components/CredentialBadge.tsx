export function CredentialBadge({ children }: { children: string }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-brand-gray-600 border border-brand-gray-300 px-4 py-2">
      {children}
    </span>
  );
}
