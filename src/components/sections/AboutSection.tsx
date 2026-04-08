import { GlassCard } from "@/components/ui/GlassCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <GlassCard className="rounded-[2.5rem] p-3 -rotate-3 transition-transform duration-300 hover:rotate-0">
            <ImagePlaceholder label="About Portrait / Art Image" className="aspect-square" />
          </GlassCard>
        </div>

        <div>
          <h2 className="mb-6 text-4xl font-black">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-400">
            <p>
              I am a front-end software engineer with a strong focus on building
              responsive, user-centric web applications. I have hands-on
              experience in UI implementation, API integration, debugging,
              testing, and version control.
            </p>
            <p>
              Alongside engineering, I am an artist and graphic designer with
              several years of practical experience using Figma, Blender, and
              Photoshop to bring creativity into digital products.
            </p>
          </div>

          <GlassCard className="mt-8 rounded-2xl border-l-4 border-l-cyan-300 p-5">
            <p className="text-sm italic text-slate-200">
              "I am deeply committed to my work, investing creativity and
              precision into every project to craft memorable experiences."
            </p>
          </GlassCard>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <GlassCard className="rounded-xl p-4 text-center">
              <h4 className="mb-1 text-3xl font-black text-cyan-300">4+</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Years Experience
              </p>
            </GlassCard>
            <GlassCard className="rounded-xl p-4 text-center">
              <h4 className="mb-1 text-3xl font-black text-cyan-300">20+</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Projects Done
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
