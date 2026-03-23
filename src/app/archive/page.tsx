import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | JJ Eromonsele",
  description: "Client work, experiments, and side projects",
};

export default function Archive() {
  const archived = projects.filter((p) => p.page === "archive");
  const clientBuilder = archived.filter((p) => p.category === "client-builder");
  const lab = archived.filter((p) => p.category === "lab");

  return (
    <PageTransition>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-28 pb-20">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4">
          Archive.
        </h1>
        <p className="text-brand-gray-600 max-w-xl mb-12 text-lg leading-relaxed">
          Client work, experiments, and side projects. These show range and the
          willingness to build — some polished, some learning exercises.
        </p>

        {/* Client & Builder */}
        <section className="mb-12">
          <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-4">
            Client &amp; Builder
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientBuilder.map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
        </section>

        {/* Lab & Experiments */}
        <section>
          <p className="font-mono text-[10px] text-tvgg-rust uppercase tracking-[2px] mb-4">
            Lab &amp; Experiments
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lab.map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
