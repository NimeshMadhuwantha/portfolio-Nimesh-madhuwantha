export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 px-6 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-2xl font-black italic tracking-tight">
            <span className="text-cyan-300">N</span>
            <span className="text-white">M.</span>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Engineering excellence through creative design.
          </p>
        </div>

        <div className="flex gap-6 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
          <a href="#home" className="hover:text-cyan-300">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-300">
            About
          </a>
          <a href="#experience" className="hover:text-cyan-300">
            Resume
          </a>
          <a href="#projects" className="hover:text-cyan-300">
            Works
          </a>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          © 2026 Nimesh Madhuwantha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
