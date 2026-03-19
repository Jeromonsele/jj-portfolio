import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { NowSection } from "@/components/NowSection";
import { StorySection } from "@/components/StorySection";
import { WorkSection } from "@/components/WorkSection";
import { LabSection } from "@/components/LabSection";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <NowSection />
        <StorySection />
        <WorkSection />
        <LabSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
