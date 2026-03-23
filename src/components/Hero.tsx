"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 pt-28 pb-8 min-h-[85vh] flex items-center">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
          className="font-mono text-[10px] text-tvgg-rust uppercase tracking-widest mb-8 font-semibold"
        >
          {"// Product & Operations Leader"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="font-heading text-[clamp(4rem,7vw,10rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6 max-w-[1000px] text-obsidian"
        >
          I use data, economics, and systems design to turn messy real-world problems into shipped products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.3 }}
          className="text-lg text-brand-gray-600 max-w-xl leading-relaxed mb-8"
        >
          Six industries. Enterprise programs to startup builds. I&apos;ve managed 12+ concurrent programs at a $100M+ media technology company, produced $100K prize-winning cultural experiences, and built a 1.8M-property data platform from scratch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#case-studies"
            className="bg-obsidian text-cream px-8 py-4 text-[11px] font-bold uppercase tracking-[2px] hover:bg-tvgg-dark transition-all duration-300 active:scale-[0.98]"
          >
            View Case Studies ↓
          </a>
          <a
            href="/jordan-eromonsele-resume.pdf"
            download
            className="border border-obsidian/20 text-obsidian px-8 py-4 text-[11px] font-bold uppercase tracking-[2px] hover:border-obsidian hover:bg-obsidian hover:text-cream transition-all duration-300 active:scale-[0.98]"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
