import { proofChips } from "@/data/proof-chips";

export function ProofChips() {
  return (
    <section className="max-w-[1200px] mx-auto px-10">
      <div className="border-y border-brand-gray-300/50 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {proofChips.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              className="relative p-5 text-left hover:shadow-none transition-all duration-200 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-tvgg-rust before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:origin-top"
            >
              <p className="text-4xl font-black tracking-tight">
                {chip.value}
              </p>
              <p className="text-[10px] text-brand-gray-600 uppercase tracking-[1.5px] mt-1">
                {chip.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
