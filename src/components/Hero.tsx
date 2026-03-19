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
          // Builder · Strategist · Systems Thinker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="text-[clamp(3.5rem,8vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter mb-10"
        >
          Strategic<br />Partner, Not<br />a Thought<br />Bubble.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.4 }}
          className="text-[15px] text-brand-gray-600 max-w-md leading-relaxed mb-8"
        >
          PMP · TEDx Speaker · Six Sigma · MS Org Change &amp; PM
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.5 }}
          className="text-lg text-brand-gray-600 max-w-lg leading-relaxed"
        >
          I build systems, companies, and experiences from scratch — 25+ shipped projects across tech, art, infrastructure, and home services.
        </motion.p>
      </div>
    </section>
  );
}
