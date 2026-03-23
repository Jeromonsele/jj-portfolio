import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

const principles = [
  {
    num: "01",
    title: "I don't see things flat.",
    body: "My mind maps concepts spatially, like nodes in a network. When I look at a business, I don't see a list of departments and processes. I see a 3D structure of how things connect, where the load-bearing relationships are, and where the weak joints hide. It's why I can walk into an industry I've never worked in and find the structural problem in weeks.",
  },
  {
    num: "02",
    title: "I treat every system like a game with rules and positions.",
    body: "Chess, economics, strategy. When a stakeholder brings me a request, I'm not evaluating the request. I'm evaluating the board. Does this move actually improve the position? Does it open something up or close something down? Root cause analysis isn't a methodology I learned. It's the instinct to look at the board and ask: is this actually the right move, or does it just feel like one?",
  },
  {
    num: "03",
    title: "The gap is never the technology.",
    body: "Every system failure I've diagnosed has the same root cause. It's the distance between what leadership thinks is happening and what's actually happening on the floor. I close that distance. That's the job.",
  },
  {
    num: "04",
    title: "If the system breaks when you leave the room, you didn't build a system.",
    body: "My master's research studied why organizations collapse around charismatic leaders. The answer became the 4 Gaps Framework. I don't build systems that need me. I build systems that work after I'm gone.",
  },
  {
    num: "05",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.06}
              className={i === principles.length - 1 ? "md:col-span-2" : ""}
            >
              <div className="border border-brand-gray-300 p-8 relative overflow-hidden group hover:border-obsidian/30 transition-colors duration-300">
                {/* Ghost number */}
                <span
                  className="absolute -right-2 -top-4 text-[6rem] font-black leading-none text-obsidian/[0.04] pointer-events-none select-none group-hover:text-tvgg-rust/[0.08] transition-colors duration-300"
                  aria-hidden="true"
                >
                  {p.num}
                </span>

                {/* Orange top bar */}
                <div className="absolute top-0 left-0 w-12 h-[3px] bg-tvgg-rust" />

                <div className="relative z-10">
                  <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-4">
                    Principle {p.num}
                  </p>
                  <h3 className="text-lg font-extrabold mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-brand-gray-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 border border-tvgg-rust/30 p-8 max-w-2xl">
            <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-3">Interactive</p>
            <h3 className="text-xl font-extrabold mb-3">Find Your Biggest Gap.</h3>
            <p className="text-[14px] text-brand-gray-600 leading-relaxed mb-4">
              8 questions. 2 minutes. The 4 Gaps diagnostic tells you which organizational gap is holding you back.
            </p>
            <a href="/diagnostic" className="inline-block bg-obsidian text-cream px-6 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-tvgg-rust transition-colors">
              Take the Diagnostic →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
