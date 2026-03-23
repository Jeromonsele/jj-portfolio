import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JJ Eromonsele",
  description: "Bio, credentials, career path, and operating principles",
};

const credentials = [
  { title: "MS", degree: "Organizational Change & PM", subtitle: "Dallas Baptist University, 2024" },
  { title: "BBA", degree: "Marketing", subtitle: "UT Arlington, 2019" },
  { title: "PMP", degree: "Project Management Professional", subtitle: "" },
  { title: "Six Sigma", degree: "Green Belt", subtitle: "Lean Six Sigma" },
  { title: "TEDx", degree: "Speaker", subtitle: "TEDxUTA, 2018" },
];

const principles = [
  {
    title: "The gap is never the technology.",
    body: "It\u2019s the distance between what leadership thinks is happening and what\u2019s actually happening. I close that distance.",
  },
  {
    title: "If it breaks when you leave, it\u2019s not a system.",
    body: "My master\u2019s research studied why orgs collapse around leaders. That became the 4 Gaps Framework. I build things that outlast me.",
  },
  {
    title: "Software should be clarity, not complexity.",
    body: "Half the time, the most strategic thing is to push back and ask: do we actually need this?",
  },
];

const career = [
  { company: "The Very Good Home Company", role: "Founder", years: "2025\u2013Present" },
  { company: "The Very Good Guys", role: "Co-Founder, Consulting", years: "2025\u2013Present" },
  { company: "Advanced Systems Group", role: "Program Manager", years: "2024\u20132025" },
  { company: "Artisan Genius", role: "Product Program Manager", years: "2023\u20132024" },
  { company: "Bank of America", role: "Technical Project Manager", years: "2023\u20132024" },
  { company: "Nasher Sculpture Center", role: "Program Manager", years: "2022\u20132023, 2025" },
  { company: "Randstad Digital", role: "Project Manager", years: "2022" },
  { company: "Classic Chevrolet", role: "Project Manager", years: "2020\u20132022" },
  { company: "Airbus Helicopters", role: "Project Coordinator", years: "2019\u20132020" },
];

export default function About() {
  return (
    <PageTransition>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-28 pb-20">
        <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-8">About</p>
        {/* Section 1 — Bio */}
        <div className="flex gap-6 items-start mb-16">
          <Image
            src="/avatar.png"
            alt="JJ Eromonsele"
            width={120}
            height={120}
            className="rounded-none shrink-0 ring-2 ring-brand-gray-300 ring-offset-4 ring-offset-warm-white"
          />
          <div>
            <h1 className="text-2xl font-extrabold mb-3">JJ Eromonsele</h1>
            <div className="text-[15px] text-brand-gray-600 leading-[1.8] max-w-xl space-y-4">
              <p>
                Product and operations leader based in Dallas, TX. I&apos;ve
                spent six years across aerospace, banking, fine art, automotive,
                field service software, and home services — and the system breaks
                in the same places every time.
              </p>
              <p>
                I build frameworks that close the gap between what leadership
                thinks is happening and what&apos;s actually happening on the
                floor. Whether that&apos;s an AI governance framework at a $100M+
                company, a cultural experience for 5,000 people, or a data
                platform covering 1.87 million properties.
              </p>
              <p>
                Currently building The Very Good Home Company and open to product
                leadership roles.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 — Credentials */}
        <section className="border-t border-brand-gray-300 pt-8 mb-16">
          <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px]">
            Credentials
          </p>
          <div className="flex flex-wrap gap-8 mt-4">
            {credentials.map((c) => (
              <div key={c.title + c.degree}>
                <p className="text-sm">
                  <strong>{c.title}</strong> {c.degree}
                </p>
                {c.subtitle && (
                  <p className="text-[11px] text-brand-gray-600">{c.subtitle}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — How I Operate */}
        <section className="border-t border-brand-gray-300 pt-8 mb-16">
          <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px]">
            How I Operate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="border border-brand-gray-300 p-6"
              >
                <h3 className="text-sm font-extrabold mb-2">{p.title}</h3>
                <p className="text-[13px] text-brand-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Career Path */}
        <section className="border-t border-brand-gray-300 pt-8">
          <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px]">
            Career Path
          </p>
          <div className="mt-4 space-y-2">
            {career.map((c) => (
              <p
                key={c.company + c.years}
                className="text-[13px] text-brand-gray-600 leading-relaxed"
              >
                <strong className="text-obsidian">{c.company}</strong> — {c.role}{" "}
                &middot; {c.years}
              </p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
