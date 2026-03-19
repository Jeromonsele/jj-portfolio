import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { NowSection } from "@/components/NowSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { StorySection } from "@/components/StorySection";
import { JourneySection } from "@/components/JourneySection";
import { WorkSection } from "@/components/WorkSection";
import { ThinkingSection } from "@/components/ThinkingSection";
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
        <PrinciplesSection />
        <StorySection />
        <JourneySection />
        <WorkSection />
        <ThinkingSection />
        <LabSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
