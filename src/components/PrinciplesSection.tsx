import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

const principles = [
  {
    title: "I don't see things flat.",
    body: "My mind maps concepts spatially, like nodes in a network. When I look at a business, I don't see a list of departments and processes. I see a 3D structure of how things connect, where the load-bearing relationships are, and where the weak joints hide. It's why I can walk into an industry I've never worked in and find the structural problem in weeks.",
  },
  {
    title: "I treat every system like a game with rules and positions.",
    body: "Chess, economics, strategy. When a stakeholder brings me a request, I'm not evaluating the request. I'm evaluating the board. Does this move actually improve the position? Does it open something up or close something down? Root cause analysis isn't a methodology I learned. It's the instinct to look at the board and ask: is this actually the right move, or does it just feel like one?",
  },
  {
    title: "The gap is never the technology.",
    body: "Every system failure I've diagnosed has the same root cause. It's the distance between what leadership thinks is happening and what's actually happening on the floor. I close that distance. That's the job.",
  },
  {
    title: "If the system breaks when you leave the room, you didn't build a system.",
    body: "My master's research studied why organizations collapse around charismatic leaders. The answer became the 4 Gaps Framework. I don't build systems that need me. I build systems that work after I'm gone.",
  },
  {
    title: "Software should be clarity and confirmation.",
    body: "I think we overestimate what software should be. Software isn't a product. It's a tool for making decisions visible and reducing ambiguity. Half the time, the most strategic thing I can do is push back and ask: do we actually need this? That instinct, being the person who asks the hard question instead of just executing the request, is why I call myself a strategic partner instead of a thought bubble.",
  },
];

export function PrinciplesSection() {
  return (
    <section id="principles">
      <SectionLabel number="02" label="PRINCIPLES" />
      <div className="max-w-[1200px] mx-auto px-10 pb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12">
            How I Operate.
          </h2>
        </ScrollReveal>
        <div className="space-y-10 max-w-3xl">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div>
                <h3 className="text-xl font-extrabold mb-3">{p.title}</h3>
                <p className="text-[15px] text-brand-gray-600 leading-relaxed">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
