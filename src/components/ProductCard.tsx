import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const isInternal = product.url.startsWith("/");
  const linkProps = isInternal
    ? {}
    : { target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <a
      href={product.url}
      className="block border border-brand-gray-300 p-5 hover:border-black hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      {...linkProps}
    >
      <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-2">
        {product.tags}
      </p>
      <h3 className="text-lg font-extrabold mb-2">{product.title}</h3>
      <p className="text-[12px] text-brand-gray-600 leading-relaxed mb-3">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
        {product.metrics.map((m, i) => (
          <span key={m}>
            <span className="font-bold">{m}</span>
            {i < product.metrics.length - 1 && (
              <span className="text-brand-gray-300 ml-3">&middot;</span>
            )}
          </span>
        ))}
      </div>
      <p className="text-[11px] text-orange uppercase tracking-[1.5px] font-semibold mt-3">
        {product.ctaLabel}
      </p>
    </a>
  );
}
