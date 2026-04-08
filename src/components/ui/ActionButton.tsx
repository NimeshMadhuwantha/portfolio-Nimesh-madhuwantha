import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ActionButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

export function ActionButton({
  href,
  children,
  variant = "primary",
  className,
}: ActionButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300";

  const styles = {
    primary:
      "btn-glow text-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
    outline:
      "border border-white/15 bg-white/0 text-white hover:bg-white/8",
    ghost: "bg-transparent text-slate-300 hover:text-cyan-200",
  };

  const classes = cn(base, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
