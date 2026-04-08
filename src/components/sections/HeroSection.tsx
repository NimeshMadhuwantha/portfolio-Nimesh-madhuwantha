import { ActionButton } from "@/components/ui/ActionButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Welcome to my world
          </p>
          <h2 className="mb-2 text-2xl font-medium text-slate-300 md:text-3xl">
            Hi, I&apos;m <span className="text-white">Nimesh Madhuwantha</span>
          </h2>
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            <span className="text-cyan-300">Software Engineer</span>
            <br />
            <span className="text-white">and an Artist</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400">
            Passionate front-end engineer focused on responsive, user-centric
            applications. I bridge technical logic with artistic design to
            deliver smooth digital experiences.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <ActionButton href="#projects">My Projects</ActionButton>
            <ActionButton href="#" variant="outline">
              Download CV
            </ActionButton>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/12 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <GlassCard className="mx-auto w-full max-w-md rounded-[2.5rem] p-4 rotate-2 transition-transform duration-300 hover:rotate-0">
            <ImagePlaceholder label="Hero Portrait" className="aspect-square" />
          </GlassCard>
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
