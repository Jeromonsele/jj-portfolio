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
          // Builder · Operator · Founder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6"
        >
          I&apos;ve built systems<br />across six industries.<br />The failure pattern<br />is the same every time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.3 }}
          className="font-mono text-[11px] text-brand-gray-600 uppercase tracking-[2px] mb-6"
        >
          PMP · Six Sigma Green Belt · TEDx Speaker · MS Organizational Change &amp; PM
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.4 }}
          className="text-lg text-brand-gray-600 max-w-xl leading-relaxed mb-6"
        >
          Aerospace, banking, fine art, automotive, field service software, home services. Most people look at that list and see a scattered career. I look at it and see the same system breaking in the same places.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.5 }}
          className="font-mono text-[12px] text-brand-gray-600 uppercase tracking-[2px]"
        >
          Currently building a 1.8M-property platform and writing about what happens when operators get access to AI.
        </motion.p>
      </div>
    </section>
  );
}
