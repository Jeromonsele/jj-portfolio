import type { CaseStudyMetric } from "@/data/case-studies";

export function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-[500px]">
      {metrics.map((metric, i) => (
        <div
          key={metric.label}
          className="border border-brand-gray-300 p-5 text-center"
        >
          <div
            className={`text-[28px] font-black tracking-tight ${
              i === 0 ? "text-orange" : ""
            }`}
          >
            {metric.value}
          </div>
          <div className="text-[10px] text-brand-gray-600 uppercase tracking-[1.5px] mt-1">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
