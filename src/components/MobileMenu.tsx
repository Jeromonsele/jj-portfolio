"use client";

import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-cream z-50 p-10 flex flex-col"
          >
            <button onClick={onClose} className="self-end text-2xl mb-12" aria-label="Close menu">
              ✕
            </button>
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={onClose} className="text-2xl font-extrabold uppercase tracking-tight">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <a href="/contact" className="block bg-obsidian text-cream text-center px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px]">
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
