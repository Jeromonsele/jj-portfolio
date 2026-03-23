import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProofChips } from "@/components/ProofChips";
import { CaseStudyCards } from "@/components/CaseStudyCards";
import { ProductStrip } from "@/components/ProductStrip";
import { ShortBio } from "@/components/ShortBio";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AskJJ } from "@/components/AskJJ";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <Hero />
        <ProofChips />
        <section id="case-studies">
          <CaseStudyCards />
        </section>
        <ProductStrip />
        <ShortBio />
        <FooterCTA />
      </main>
      <Footer />
      <AskJJ />
    </SmoothScroll>
  );
}
