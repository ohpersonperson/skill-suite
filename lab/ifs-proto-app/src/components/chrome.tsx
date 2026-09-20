import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Bench" },
  { to: "/spec", label: "Spec" },
  { to: "/archive", label: "Archive" },
] as const;

export function Chrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
        <Link to="/" className="group block min-w-0">
          <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-faint uppercase">
            Protocol v1.0
          </p>
          <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            IFS Proto
          </h1>
          <p className="mt-1 max-w-xl text-sm text-muted">
            One-pass interrogation. Confidence is not correctness.
          </p>
        </Link>
        <nav className="flex items-center gap-1 rounded-lg bg-raised p-1 shadow-[var(--shadow-border)]">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "bg-inset text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1 pt-8">{children}</main>
    </div>
  );
}
