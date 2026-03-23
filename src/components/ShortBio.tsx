"use client";

import { motion, Variants } from "framer-motion";

const credentials = [
  "PMP",
  "Six Sigma Green Belt",
  "MS Org Change & PM",
  "TEDx Speaker",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } }
};

export function ShortBio() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 relative">
      <div className="border border-obsidian/10 bg-cream p-10 lg:p-16 relative overflow-hidden group hover:border-obsidian transition-colors duration-500">
        <div className="relative z-10 max-w-3xl">
          <p className="font-heading text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-6 text-obsidian">JJ Eromonsele</p>
          <p className="text-[14px] text-brand-gray-600 leading-relaxed mb-10">
            Product and operations leader based in Dallas, TX. MS in
            Organizational Change &amp; Project Management. PMP. Lean Six Sigma
            Green Belt. TEDx speaker. I&apos;ve managed enterprise programs at a
            $100M+ company, produced for the world&apos;s most prestigious
            sculpture prize, and built data platforms from scratch. Currently
            building The Very Good Home Company and open to product leadership
            roles.
          </p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-widest font-semibold text-tvgg-rust"
          >
            {credentials.map((cred, i) => (
              <motion.span key={cred} variants={itemVariants} className="flex items-center gap-6">
                {cred}
                {i < credentials.length - 1 && (
                  <span className="text-obsidian/20 font-light">/</span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
