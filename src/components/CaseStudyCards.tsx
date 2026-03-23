import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export function CaseStudyCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 relative">
      <div
        className="absolute -top-10 right-10 text-[clamp(15rem,30vw,35rem)] font-heading font-black leading-none text-obsidian opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        01
      </div>
      <p className="font-mono text-[10px] text-tvgg-rust font-semibold uppercase tracking-widest mb-3 relative z-10">
        Selected Case Studies
      </p>
      <h2 className="font-heading text-[clamp(3.2rem,7vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-obsidian relative z-10">
        How I Think.
      </h2>
      <div className="space-y-6 relative z-10">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>
    </section>
  );
}
