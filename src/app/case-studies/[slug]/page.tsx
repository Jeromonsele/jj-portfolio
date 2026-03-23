import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseStudySection } from "@/components/CaseStudySection";
import { MetricsGrid } from "@/components/MetricsGrid";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { PageTransition } from "@/components/PageTransition";

export function generateStaticParams() {
  return [{ slug: "asg" }, { slug: "nasher" }, { slug: "tvghc" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return {};

  return {
    title: `${caseStudy.title} | JJ Eromonsele`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  if (index === -1) notFound();

  const caseStudy = caseStudies[index];
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next =
    index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  const metaItems = [
    { label: "Role", value: caseStudy.role },
    { label: "Company", value: caseStudy.company },
    { label: "Duration", value: caseStudy.duration },
    { label: "Key Metric", value: caseStudy.keyMetric },
  ];

  return (
    <PageTransition>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: caseStudy.title,
            description: caseStudy.summary,
            author: {
              "@type": "Person",
              name: "JJ Eromonsele",
              url: "https://jordaneromonsele.com",
            },
          }),
        }}
      />
      <main className="max-w-[1200px] mx-auto px-10 pt-28 pb-20">
        <a
          href="/#case-studies"
          className="font-mono text-[11px] text-brand-gray-600 uppercase tracking-[2px] hover:text-tvgg-rust transition-colors mb-10 block"
        >
          &larr; Back to Case Studies
        </a>

        <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-4">
          {caseStudy.tags.join(" · ")}
        </p>

        <h1 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase tracking-tighter leading-[0.95] mb-4">
          {caseStudy.title}
        </h1>

        <p className="text-brand-gray-600 max-w-[600px] leading-relaxed mb-8">
          {caseStudy.summary}
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 pb-8 border-b border-brand-gray-300">
          {metaItems.map((item) => (
            <div key={item.label}>
              <div className="text-[10px] text-brand-gray-600 uppercase tracking-[1px]">
                {item.label}
              </div>
              <div className="text-[13px] font-bold mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {caseStudy.sections.map((section, i) => (
            <div key={section.number}>
              <CaseStudySection section={section} />
              {i === 4 && (
                <div className="mt-6">
                  <MetricsGrid metrics={caseStudy.outcomeMetrics} />
                </div>
              )}
            </div>
          ))}
        </div>

        <CaseStudyNav
          prevSlug={prev?.slug}
          prevTitle={prev?.title}
          nextSlug={next?.slug}
          nextTitle={next?.title}
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
