"use client";

import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

const links = [
  { label: "Story", href: "#story" },
  { label: "Principles", href: "#principles" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Thinking", href: "#thinking" },
  { label: "Lab", href: "#lab" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-sm border-b border-brand-gray-300/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-10 flex items-center justify-between h-16">
          <a href="/" className="font-extrabold text-sm uppercase tracking-wider">
            Jordan Eromonsele
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-brand-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-black text-warm-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black/85 transition-colors"
            >
              Let&apos;s Talk →
            </a>
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-4 h-0.5 bg-black" />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
