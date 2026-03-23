"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 pt-28 pb-20 min-h-[85vh] flex items-center">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
          className="font-mono text-[13px] text-orange uppercase tracking-[3px] mb-6"
        >
          // Product & Operations Leader
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="text-[clamp(2.5rem,5.5vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-6"
        >
          I use data, economics,<br />and systems design to turn<br />messy real-world problems<br />into shipped products.
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
            className="bg-black text-warm-white px-8 py-3 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black/85 transition-colors"
          >
            View Case Studies ↓
          </a>
          <a
            href="/jordan-eromonsele-resume.pdf"
            download
            className="border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black hover:text-warm-white transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
