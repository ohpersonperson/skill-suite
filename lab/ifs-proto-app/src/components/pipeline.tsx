import { STEPS } from "@/lib/ifs/protocol";
import { cn } from "@/lib/utils";

export function Pipeline({ running }: { running: boolean }) {
  return (
    <ol className="grid grid-cols-5 gap-1.5 sm:gap-2">
      {STEPS.map((step, i) => (
        <li
          key={step.id}
          className={cn(
            "rounded-md bg-raised px-1.5 py-2 sm:px-3 sm:py-3 shadow-[var(--shadow-border)]",
            running && "animate-[pulse-line_1.6s_ease-in-out_infinite]",
          )}
          style={running ? { animationDelay: `${i * 120}ms` } : undefined}
        >
          <p className="font-sans text-[9px] font-medium tracking-[0.14em] text-faint uppercase sm:text-[10px] sm:tracking-[0.18em]">
            0{step.n}
          </p>
          <p className="mt-1 font-display text-[13px] leading-snug text-ink sm:text-base">
            <span className="sm:hidden">{step.short}</span>
            <span className="hidden sm:inline">{step.name}</span>
          </p>
          <p className="mt-1 hidden text-xs leading-relaxed text-muted lg:block">{step.brief}</p>
        </li>
      ))}
    </ol>
  );
}
