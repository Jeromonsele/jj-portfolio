import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export function CaseStudyCards() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 py-16">
      <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-8">
        Selected Case Studies
      </p>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>
    </section>
  );
}
