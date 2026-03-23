export function FooterCTA() {
  return (
    <section className="bg-black text-warm-white">
      <div className="max-w-[1200px] mx-auto px-10 py-24 text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-3">
          Let&apos;s work together.
        </h2>
        <p className="text-white/50 mb-8">
          Open to product leadership, advisory, and operating engagements.
        </p>
        <a
          href="/contact"
          className="inline-block bg-warm-white text-black px-8 py-3 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-white transition-colors"
        >
          Get In Touch &rarr;
        </a>
      </div>
    </section>
  );
}
