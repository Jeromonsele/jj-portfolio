export function FooterCTA() {
  return (
    <section className="bg-obsidian text-cream relative overflow-hidden">
      {/* Cinematic Vignette layered grain */}
      <div className="absolute inset-0 z-0 bg-paper opacity-10 mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-32 text-center relative z-10">
        <h2 className="font-heading text-[clamp(3rem,6vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] mb-6">
          Let&apos;s work together.
        </h2>
        <p className="text-cream/50 mb-12 max-w-xl mx-auto font-mono text-[11px] uppercase tracking-widest">
          Open to product leadership, advisory, and operating engagements.
        </p>
        <a
          href="mailto:connect@theverygoodguys.com"
          className="inline-block border border-cream/20 bg-cream text-obsidian px-10 py-5 text-[11px] font-bold uppercase tracking-[2px] hover:bg-transparent hover:text-cream hover:border-cream transition-all duration-300 active:scale-[0.98]"
        >
          Get In Touch &rarr;
        </a>
      </div>
    </section>
  );
}
