import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border border-dashed border-cyan-300/35 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(14,116,144,0.25),transparent_40%),rgba(5,15,19,0.8)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.05)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.05)_32px)] bg-[size:32px_32px]" />
      <div className="relative flex h-full items-center justify-center p-6 text-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200/80">
            Replace With Your Image
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-200">{label}</p>
        </div>
      </div>
    </div>
  );
}
