import { GlassCard } from "@/components/ui/GlassCard";
import { techStack } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-16 md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-4xl font-black">Tech Stack</h2>
          <p className="leading-relaxed text-slate-400">
            I use modern tools to build fast, secure, and delightful digital
            products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
              Modern UI
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
              API First
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
              Scalable
            </span>
          </div>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 md:w-2/3">
          {techStack.map((item) => (
            <GlassCard
              key={item}
              className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-white/5 text-sm font-black uppercase text-cyan-200">
                {item.slice(0, 2)}
              </div>
              <span className="text-sm font-bold">{item}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
