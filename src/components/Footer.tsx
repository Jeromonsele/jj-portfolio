export function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-10 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
      <div>
        <h3 className="text-sm font-extrabold uppercase tracking-wider mb-2">Jordan Eromonsele</h3>
        <p className="text-[13px] text-brand-gray-600 max-w-xs leading-relaxed">
          Product & operations leader. Dallas, TX. Open to product leadership, advisory, and operating engagements.
        </p>
        <p className="text-[11px] text-brand-gray-300 mt-6">
          © 2026 Jordan Eromonsele. All rights reserved.
        </p>
      </div>
      <nav aria-label="Social links" className="flex gap-6 text-[13px]">
        <a href="https://linkedin.com/in/jordaneromonsele" target="_blank" rel="noopener noreferrer" className="text-brand-gray-600 hover:text-black transition-colors">LinkedIn</a>
        <a href="https://github.com/Jeromonsele" target="_blank" rel="noopener noreferrer" className="text-brand-gray-600 hover:text-black transition-colors">GitHub</a>
        <a href="mailto:connect@theverygoodguys.com" className="text-brand-gray-600 hover:text-black transition-colors">Email</a>
        <a href="/archive" className="text-brand-gray-600 hover:text-black transition-colors">Archive</a>
      </nav>
    </footer>
  );
}
