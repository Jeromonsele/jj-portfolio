"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CredentialBadge } from "./CredentialBadge";

const credentials = ["PMP Certified", "Six Sigma Green Belt", "MS Org Change & PM", "Dallas, TX"];

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
      <div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-mono text-[13px] text-orange uppercase tracking-[2px] mb-5">
          // Builder · Strategist · Systems Thinker
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-[clamp(40px,7vw,80px)] font-black uppercase leading-[0.95] tracking-tight mb-8">
          Strategic<br />Partner, Not a<br />Thought Bubble.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-brand-gray-600 max-w-lg leading-relaxed mb-10">
          I build systems, companies, and experiences from scratch. PMP-certified project leader with a master&apos;s in organizational change — and 25+ shipped projects across tech, art, and home services.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
          {credentials.map((cred, i) => (
            <motion.div key={cred} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
              <CredentialBadge>{cred}</CredentialBadge>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md aspect-square rounded-sm overflow-hidden">
          <Image src="/avatar.png" alt="3D illustrated portrait of Jordan Eromonsele" fill priority className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
