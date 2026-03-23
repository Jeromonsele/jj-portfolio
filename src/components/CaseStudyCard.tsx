import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <a
      href={`/case-studies/${caseStudy.slug}`}
      className="block border border-obsidian/10 p-8 md:p-10 hover:border-obsidian transition-all duration-300 active:scale-[0.98] group bg-cream relative z-10"
    >
      <div className="flex flex-col">
        {/* Top Header: Tags + Metric Badge */}
        <div className="flex flex-wrap gap-4 justify-between items-start mb-6 w-full">
          <p className="font-mono text-[10px] text-tvgg-rust font-semibold uppercase tracking-widest mt-1">
            {caseStudy.tags.join(" · ")}
          </p>
          <div className="bg-obsidian/[0.02] border border-obsidian/10 px-3 py-1.5 font-mono text-[10px] text-obsidian uppercase tracking-widest font-bold">
            IMPACT: {caseStudy.thumbnail.value}
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 w-full max-w-4xl">
          <h3 className="text-2xl font-heading font-extrabold uppercase tracking-tighter mb-6 leading-tight">{caseStudy.title}</h3>
          
          <div className="space-y-4">
            <p className="text-[14px] text-obsidian/90 leading-relaxed">
              <strong className="font-mono text-[10px] uppercase tracking-widest text-obsidian mr-2">Problem:</strong>
              {caseStudy.cardProblem}
            </p>
            <p className="text-[14px] text-obsidian/90 leading-relaxed">
              <strong className="font-mono text-[10px] uppercase tracking-widest text-obsidian mr-2">Decision:</strong>
              {caseStudy.cardDecision}
            </p>
            <p className="text-[14px] text-obsidian/90 leading-relaxed">
              <strong className="font-mono text-[10px] uppercase tracking-widest text-obsidian mr-2">Outcome:</strong>
              {caseStudy.cardOutcome}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-tvgg-rust font-bold text-[10px] uppercase tracking-widest group-hover:text-obsidian transition-colors w-fit">
            Read Case Study <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </div>
      </div>
    </a>
  );
}
