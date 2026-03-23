interface SectionLabelProps {
  number: string;
  label: string;
  dark?: boolean;
}

export function SectionLabel({ number, label, dark }: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-[11px] uppercase tracking-[3px] ${
        dark ? "text-white/30" : "text-tvgg-rust"
      } max-w-[1200px] mx-auto px-10 pt-10 pb-5`}
    >
      <span className={dark ? "text-white/15 mr-3" : "text-brand-gray-300 mr-3"}>
        // {number}
      </span>
      {label}
    </div>
  );
}
