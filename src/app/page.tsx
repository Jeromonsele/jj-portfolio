import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { NowSection } from "@/components/NowSection";
import { StorySection } from "@/components/StorySection";
import { JourneySection } from "@/components/JourneySection";
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
        <CredibilityBar />
        <NowSection />
        <StorySection />
        <JourneySection />
        <WorkSection />
        <LabSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
