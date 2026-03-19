"use client";

import { motion } from "framer-motion";

const features = [
  { label: "TEDx", sublabel: "Speaker" },
  { label: "NYT", sublabel: "Coverage" },
  { label: "ARTnews", sublabel: "Featured" },
  { label: "Surface", sublabel: "Magazine" },
  { label: "KERA", sublabel: "News" },
  { label: "PR Newswire", sublabel: "Featured" },
];

export function CredibilityBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="border-y border-brand-gray-300/50 py-6"
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex items-center gap-10 overflow-x-auto">
          <span className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] shrink-0">
            As featured in
          </span>
          <div className="flex items-center gap-8">
            {features.map((f) => (
              <div key={f.label} className="shrink-0 text-center">
                <span className="text-[15px] font-extrabold uppercase tracking-tight text-black">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
