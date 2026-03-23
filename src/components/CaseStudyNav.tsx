export function CaseStudyNav({
  prevSlug,
  prevTitle,
  nextSlug,
  nextTitle,
}: {
  prevSlug?: string;
  prevTitle?: string;
  nextSlug?: string;
  nextTitle?: string;
}) {
  return (
    <div className="flex justify-between items-center border-t border-brand-gray-300 pt-8 mt-16">
      <div>
        {prevSlug && prevTitle && (
          <a href={`/case-studies/${prevSlug}`} className="block group">
            <span className="text-[10px] text-brand-gray-600 uppercase tracking-[1px]">
              &larr; Previous
            </span>
            <div className="text-sm font-bold mt-1 group-hover:text-orange transition-colors">
              {prevTitle}
            </div>
          </a>
        )}
      </div>
      <div className="text-right">
        {nextSlug && nextTitle && (
          <a href={`/case-studies/${nextSlug}`} className="block group">
            <span className="text-[10px] text-brand-gray-600 uppercase tracking-[1px]">
              Next &rarr;
            </span>
            <div className="text-sm font-bold mt-1 group-hover:text-orange transition-colors">
              {nextTitle}
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
