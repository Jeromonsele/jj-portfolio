import { timeline } from "@/data/timeline";
import { SectionLabel } from "./SectionLabel";
import { TimelineItem } from "./TimelineItem";
import { ScrollReveal } from "./ScrollReveal";

export function StorySection() {
  return (
    <section id="story">
      <SectionLabel number="02" label="THE STORY" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(32px,5vw,56px)] font-black uppercase tracking-tight leading-none mb-10">
            From Campus<br />Builder to<br />Company Founder.
          </h2>
        </ScrollReveal>
        <div>
          {timeline.map((entry, i) => (
            <ScrollReveal key={entry.role} delay={i * 0.05}>
              <TimelineItem entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
