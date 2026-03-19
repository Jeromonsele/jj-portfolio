import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jordan Eromonsele",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-32 pb-20 min-h-[70vh]">
        <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-5">
          // Let&apos;s Talk
        </p>
        <h1 className="text-[clamp(36px,6vw,64px)] font-black uppercase leading-[0.95] tracking-tight mb-8">
          Say hi.
        </h1>
        <p className="text-lg text-brand-gray-600 max-w-lg leading-relaxed mb-12">
          Got a role, a project, or an idea? I want to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:connect@theverygoodguys.com"
            className="bg-black text-warm-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black/85 transition-colors text-center"
          >
            Email Me →
          </a>
          <a
            href="https://linkedin.com/in/jordaneromonsele"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black hover:text-warm-white transition-colors text-center"
          >
            LinkedIn →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
