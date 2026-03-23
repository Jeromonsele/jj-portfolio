import type { CaseStudySection as CaseStudySectionType } from "@/data/case-studies";

export function CaseStudySection({
  section,
}: {
  section: CaseStudySectionType;
}) {
  const paragraphs = section.body.split("\n\n");

  const isHighlighted = section.number === "03" || section.number === "02";

  return (
    <section className={isHighlighted ? "border-l-[3px] border-tvgg-rust pl-6" : ""}>
      <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-3">
        {section.number} / {section.label}
      </p>
      <h2 className="text-xl font-extrabold mb-4">{section.headline}</h2>
      <div className="text-[14px] text-brand-gray-600 leading-[1.8] max-w-[640px]">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {section.visual?.type === "grid" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
          {section.visual.items.map((item) => (
            <div
              key={item.label}
              className="border border-brand-gray-300 p-4 text-center"
            >
              {item.value && (
                <div className="text-[10px] text-tvgg-rust font-mono">
                  {item.value}
                </div>
              )}
              <div className="text-[12px] font-bold mt-1">{item.label}</div>
              {item.sublabel && (
                <div className="text-[10px] text-brand-gray-600 mt-0.5">
                  {item.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
