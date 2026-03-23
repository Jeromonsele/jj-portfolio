import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export function CaseStudyCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 py-16">
      <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-3">
        Selected Case Studies
      </p>
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-8">
        How I Think.
      </h2>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>
    </section>
  );
}
