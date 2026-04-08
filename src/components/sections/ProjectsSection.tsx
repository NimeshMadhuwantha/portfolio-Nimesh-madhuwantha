"use client";

import { useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 1 | -1) => {
    containerRef.current?.scrollBy({
      left: direction * 420,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="bg-black/30 px-6 py-24">
      <div className="mx-auto mb-16 flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-black">My Projects</h2>
          <p className="mt-3 text-slate-400">
            Discover work that blends engineering precision with design intent.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            className="glass-card h-12 w-12 rounded-full text-xl"
            aria-label="Scroll left"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            className="glass-card h-12 w-12 rounded-full text-xl"
            aria-label="Scroll right"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div ref={containerRef} className="project-scroll mx-auto w-full max-w-7xl px-2">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            <GlassCard className="rounded-[2.25rem] p-4">
              <ImagePlaceholder label={`${project.title} Preview`} className="mb-6 h-56" />
              <div className="px-2 pb-2">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-cyan-200">
                    {project.type}
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/8 px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
                  {project.contribution}
                </p>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
