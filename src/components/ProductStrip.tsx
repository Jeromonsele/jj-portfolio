import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductStrip() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 py-16">
      <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-6">
        Shipped &amp; Live
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
