export function FooterCTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-10 py-20 text-center">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-3">
        Let&apos;s work together.
      </h2>
      <p className="text-brand-gray-600 mb-6">
        Open to product leadership, advisory, and operating engagements.
      </p>
      <a
        href="/contact"
        className="inline-block bg-black text-warm-white px-8 py-3 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black/85 transition-colors"
      >
        Get In Touch &rarr;
      </a>
    </section>
  );
}
