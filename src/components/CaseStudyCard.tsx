import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <a
      href={`/case-studies/${caseStudy.slug}`}
      className="block border border-brand-gray-300 p-5 hover:border-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex flex-col md:flex-row gap-5">
        {/* Thumbnail */}
        <div
          className={`w-full md:w-[180px] h-[140px] md:h-[160px] shrink-0 flex items-center justify-center ${
            caseStudy.thumbnail.type === "gradient"
              ? "bg-gradient-to-br from-[#2a1a0a] to-[#4a2a1a]"
              : "bg-[#0A0A0A]"
          }`}
        >
          <span className="text-2xl font-black text-orange font-mono">
            {caseStudy.thumbnail.value}
          </span>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-2">
            {caseStudy.tags.join(" · ")}
          </p>
          <h3 className="text-xl font-extrabold mb-2">{caseStudy.title}</h3>
          <p className="text-[13px] text-brand-gray-600 leading-relaxed mb-3">
            <strong className="text-black">Problem:</strong>{" "}
            {caseStudy.cardProblem}
          </p>
          <p className="text-[13px] text-brand-gray-600 leading-relaxed mb-3">
            <strong className="text-black">Decision:</strong>{" "}
            {caseStudy.cardDecision}
          </p>
          <p className="text-[13px] text-brand-gray-600 leading-relaxed mb-3">
            <strong className="text-black">Outcome:</strong>{" "}
            {caseStudy.cardOutcome}
          </p>
          <p className="text-[11px] text-orange uppercase tracking-[1.5px] font-semibold mt-3">
            Read Case Study &rarr;
          </p>
        </div>
      </div>
    </a>
  );
}
