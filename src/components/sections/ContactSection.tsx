import { ActionButton } from "@/components/ui/ActionButton";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <GlassCard className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />

          <div className="relative grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black md:text-5xl">
                Let&apos;s Create
                <br />
                <span className="text-cyan-300">Something Amazing</span>
              </h2>
              <p className="mb-10 text-lg text-slate-400">
                Whether you have a project idea, want to collaborate, or just
                want to say hi, my inbox is always open.
              </p>

              <div className="space-y-6 text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Email me at
                  </p>
                  <p className="font-bold">janmadhuwantha@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Call me at
                  </p>
                  <p className="font-bold">+94 70 524 2912</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Location
                  </p>
                  <p className="font-bold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <GlassCard className="rounded-3xl p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <label className="block space-y-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Your Name
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition focus:border-cyan-400"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition focus:border-cyan-400"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Your Message
                  </span>
                  <textarea
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition focus:border-cyan-400"
                  />
                </label>

                <ActionButton className="w-full">Send Message</ActionButton>
              </form>
            </GlassCard>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
