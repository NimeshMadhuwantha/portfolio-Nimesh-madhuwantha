import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return <div className={cn("glass-card", className)}>{children}</div>;
}
