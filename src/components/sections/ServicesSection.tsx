import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto mb-16 w-full max-w-7xl text-center">
        <h2 className="mb-4 text-4xl font-black">My Services</h2>
        <p className="text-slate-400">
          Transforming ideas into intuitive digital experiences
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <GlassCard
            key={service.title}
            className={`rounded-3xl p-8 ${
              service.featured ? "border-cyan-400/30 bg-cyan-400/5" : ""
            }`}
          >
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              {service.title.slice(0, 3)}
            </div>
            <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {service.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
