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
          // PMP · Six Sigma · TEDx Speaker · AI Policy Author · MS Org Change
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-10"
        >
          The gap is never<br />the technology.<br />It&apos;s the operating<br />system around it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.4 }}
          className="text-lg text-brand-gray-600 max-w-xl leading-relaxed mb-6"
        >
          I&apos;ve shipped 25+ systems across aerospace, banking, fine art, automotive, and home services. The failure pattern is identical every time. I fix it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.5 }}
          className="font-mono text-[12px] text-brand-gray-600 uppercase tracking-[2px]"
        >
          Currently: building a 1.8M-property platform · writing about AI-augmented operations · advising on system design
        </motion.p>
      </div>
    </section>
  );
}
