"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const links = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "#case-studies") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-obsidian/10 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-lg font-black tracking-tighter text-obsidian uppercase">
            JJ Eromonsele
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  isActive(link.href)
                    ? "text-tvgg-rust"
                    : "text-obsidian/50 hover:text-obsidian"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-obsidian text-cream border border-transparent px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-tvgg-rust hover:border-tvgg-rust transition-colors duration-0 active:scale-[0.98]"
            >
              Let&apos;s Talk →
            </Link>
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-obsidian" />
            <span className="block w-6 h-0.5 bg-obsidian" />
            <span className="block w-4 h-0.5 bg-obsidian" />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
