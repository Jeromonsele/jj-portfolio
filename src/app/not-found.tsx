import Image from "next/image";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 relative mb-8 opacity-50">
          <Image src="/avatar.png" alt="Jordan Eromonsele" fill className="object-cover rounded-full" />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tight mb-4">
          This page doesn&apos;t exist yet.
        </h1>
        <p className="text-brand-gray-600 mb-8">
          But I&apos;m probably building it right now.
        </p>
        <a href="/" className="bg-black text-warm-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black/85 transition-colors">
          Go Home →
        </a>
      </main>
    </>
  );
}
