import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { Chrome } from "@/components/chrome";
import { Button } from "@/components/ui/button";
import { useBench } from "@/lib/ifs/store";

export const Route = createFileRoute("/archive")({ component: ArchivePage });

function ArchivePage() {
  const archive = useBench((s) => s.archive);
  const open = useBench((s) => s.open);
  const remove = useBench((s) => s.remove);

  return (
    <Chrome>
      <div className="max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
          Capture
        </p>
        <h2 className="mt-1 font-display text-4xl font-medium tracking-tight">
          State artifacts
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Local capture only. Same rule as memdate: persist what was reasoned,
          do not re-decide it here.
        </p>

        {archive.length === 0 ? (
          <div className="mt-10 rounded-lg bg-raised px-5 py-8 shadow-[var(--shadow-border)]">
            <p className="font-display text-xl">Nothing captured yet.</p>
            <p className="mt-2 text-sm text-muted">
              Run an interrogation, or load the launch-delay example.
            </p>
            <Button asChild className="mt-5" variant="primary" size="sm">
              <Link to="/">Open the bench</Link>
            </Button>
          </div>
        ) : (
          <ul className="mt-8 space-y-3">
            {archive.map((a) => (
              <li
                key={a.id}
                className="flex flex-wrap items-start justify-between gap-3 rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]"
              >
                <button
                  type="button"
                  className="min-w-0 flex-1 text-left"
                  onClick={() => open(a.id)}
                >
                  <p className="text-[11px] tracking-[0.14em] text-faint uppercase">
                    Session {a.meta.session} · {a.meta.status} · {a.meta.date}
                  </p>
                  <p className="mt-1 font-display text-xl leading-tight">{a.meta.field}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {a.synthesis.survivingModel}
                  </p>
                </button>
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/" onClick={() => open(a.id)}>
                      Open
                    </Link>
                  </Button>
                  <Button
                    variant="quiet"
                    size="icon"
                    className="size-11 text-muted hover:text-ember"
                    onClick={() => remove(a.id)}
                    aria-label="Remove artifact"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Chrome>
  );
}
