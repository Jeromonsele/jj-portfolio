import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductStrip() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-16 relative">
      <div
        className="absolute -top-10 right-10 text-[clamp(15rem,30vw,35rem)] font-heading font-black leading-none text-obsidian opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        02
      </div>
      <p className="font-mono text-[10px] text-tvgg-rust font-semibold uppercase tracking-widest mb-3 relative z-10">
        Shipped &amp; Live
      </p>
      <h2 className="font-heading text-[clamp(3.2rem,6vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-obsidian relative z-10">
        Products.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
