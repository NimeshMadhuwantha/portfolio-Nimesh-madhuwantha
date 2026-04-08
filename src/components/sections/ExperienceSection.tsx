export function ExperienceSection() {
  return (
    <section id="experience" className="bg-black/20 px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-black">
          Experience & Education
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Work Experience</h3>
            <div className="space-y-8">
              <article className="timeline-item">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase text-cyan-300">
                  Feb 2025 - Aug 2025
                </span>
                <h4 className="mt-3 text-xl font-bold">
                  Front-End Software Engineer Intern
                </h4>
                <p className="mb-3 text-sm text-cyan-300">Zynovatex (Pvt) Ltd.</p>
                <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                  <li>UI development and API integration.</li>
                  <li>UI/UX prototyping through Figma.</li>
                  <li>Version control and feature implementation using Git.</li>
                </ul>
              </article>

              <article className="timeline-item">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase text-cyan-300">
                  Nov 2020 - Aug 2024
                </span>
                <h4 className="mt-3 text-xl font-bold">Artist | Graphic Designer</h4>
                <p className="mb-3 text-sm text-cyan-300">Fiverr (Freelance)</p>
                <p className="text-sm text-slate-400">
                  Delivered concept art, sketches, and UI/UX solutions for
                  global clients with a strong focus on quality and on-time
                  delivery.
                </p>
              </article>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Education</h3>
            <div className="space-y-8">
              <article className="timeline-item">
                <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-bold uppercase text-sky-300">
                  2022 - Present
                </span>
                <h4 className="mt-3 text-xl font-bold">
                  BSc. (Hons) in Computing and Information Systems
                </h4>
                <p className="mb-2 text-sm text-sky-300">
                  Sabaragamuwa University of Sri Lanka
                </p>
                <p className="text-sm font-bold text-slate-200">Current GPA: 3.153</p>
              </article>

              <article className="timeline-item">
                <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-bold uppercase text-sky-300">
                  2020
                </span>
                <h4 className="mt-3 text-xl font-bold">G.C.E Advanced Level</h4>
                <p className="mb-2 text-sm text-sky-300">Physical Science Stream</p>
                <p className="text-sm text-slate-400">Ruhunu Vijayaba National College</p>
              </article>

              <article className="timeline-item">
                <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-bold uppercase text-sky-300">
                  2016
                </span>
                <h4 className="mt-3 text-xl font-bold">G.C.E Ordinary Level</h4>
                <p className="mb-2 text-sm text-sky-300">English Medium</p>
                <p className="text-sm text-slate-400">Ruhunu Vijayaba National College</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
