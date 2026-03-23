import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | JJ Eromonsele",
  description:
    "Live shipped products - SearchFundDB, TVGHC Estimator, 4 Gaps Diagnostic",
};

export default function Products() {
  return (
    <PageTransition>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-28 pb-20">
        <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px]">
          Shipped &amp; Live
        </p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4">
          Products I&apos;ve Built.
        </h1>
        <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
          These aren&apos;t mockups or concept projects. They&apos;re live, in
          production, serving real users. I built all of them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
