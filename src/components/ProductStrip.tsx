import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductStrip() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 pt-20 pb-16">
      <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-3">
        Shipped &amp; Live
      </p>
      <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-6">
        Products.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
