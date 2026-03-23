export function Footer() {
  return (
    <footer className="border-t border-obsidian/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <h3 className="font-heading text-lg font-black uppercase tracking-tighter mb-4 text-obsidian">JJ Eromonsele</h3>
          <p className="text-[13px] text-brand-gray-600 leading-relaxed">
            Product & operations leader. Dallas, TX. Open to product leadership, advisory, and operating engagements.
          </p>
          <p className="font-mono text-[10px] text-obsidian/40 uppercase tracking-widest mt-8">
            © 2026 JJ Eromonsele. System Online.
          </p>
        </div>
        <nav aria-label="Social links" className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-[1.5px]">
          <a href="https://linkedin.com/in/jordaneromonsele" target="_blank" rel="noopener noreferrer" className="text-brand-gray-600 hover:text-tvgg-rust transition-none">LinkedIn_</a>
          <a href="https://github.com/Jeromonsele" target="_blank" rel="noopener noreferrer" className="text-brand-gray-600 hover:text-tvgg-rust transition-none">GitHub_</a>
          <a href="mailto:connect@theverygoodguys.com" className="text-brand-gray-600 hover:text-tvgg-rust transition-none">Email_</a>
          <a href="/archive" className="text-brand-gray-600 hover:text-tvgg-rust transition-none">Archive_</a>
        </nav>
      </div>
    </footer>
  );
}
