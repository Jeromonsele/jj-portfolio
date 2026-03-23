import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const isInternal = product.url.startsWith("/");
  const linkProps = isInternal
    ? {}
    : { target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <a
      href={product.url}
      className="block border border-obsidian/10 bg-cream p-5 hover:border-obsidian transition-all duration-300 active:scale-[0.98] group"
      {...linkProps}
    >
      <p className="font-mono text-[10px] text-tvgg-rust font-semibold uppercase tracking-widest mb-2">
        {product.tags}
      </p>
      <h3 className="text-lg font-heading font-extrabold uppercase tracking-tighter mb-2">{product.title}</h3>
      <p className="text-[12px] text-brand-gray-600 leading-relaxed mb-4">
        {product.description}
      </p>
      <div className="border-t border-obsidian/10 pt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
        {product.metrics.map((m, i) => (
          <span key={m}>
            <span className="font-bold text-obsidian">{m}</span>
            {i < product.metrics.length - 1 && (
              <span className="text-obsidian/30 ml-3">&middot;</span>
            )}
          </span>
        ))}
      </div>
      <p className="text-[11px] text-tvgg-rust uppercase tracking-[1.5px] font-bold mt-3 group-hover:text-obsidian transition-colors">
        {product.ctaLabel}
      </p>
    </a>
  );
}
