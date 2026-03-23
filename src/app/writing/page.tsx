import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | JJ Eromonsele",
  description: "Talks and published writing",
};

export default function Writing() {
  return (
    <PageTransition>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-28 pb-20">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4">
          Writing &amp; Speaking.
        </h1>
        <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
          Published work. No placeholders, no coming-soon.
        </p>

        <div className="space-y-4">
          {/* TEDx Talk */}
          <a
            href="https://www.ted.com/talks/jj_eromonsele_revolution_for_dummies"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-brand-gray-300 p-6 hover:border-obsidian transition-colors group"
          >
            <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-2">
              Talk &middot; TEDxUTA &middot; 2018
            </p>
            <h2 className="text-lg font-extrabold mb-2 group-hover:text-tvgg-rust transition-colors">
              Revolution for Dummies
            </h2>
            <p className="text-[13px] text-brand-gray-600 leading-relaxed">
              Creating change without waiting for permission. I was 22. I&apos;d
              say it differently now, but I still believe every word.
            </p>
            <p className="text-[11px] text-tvgg-rust uppercase tracking-[1.5px] font-semibold mt-3">
              Watch &rarr;
            </p>
          </a>

          {/* Newsletter */}
          <a
            href="https://www.linkedin.com/newsletters/the-very-good-guys-7328408592338837507/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-brand-gray-300 p-6 hover:border-obsidian transition-colors group"
          >
            <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-2">
              Newsletter &middot; LinkedIn
            </p>
            <h2 className="text-lg font-extrabold mb-2 group-hover:text-tvgg-rust transition-colors">
              The Very Good Guys - Newsletter
            </h2>
            <p className="text-[13px] text-brand-gray-600 leading-relaxed">
              Operations, AI, and building companies. What I&apos;m learning,
              what I&apos;m getting wrong, and what I think is coming next.
            </p>
            <p className="text-[11px] text-tvgg-rust uppercase tracking-[1.5px] font-semibold mt-3">
              Read &rarr;
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
