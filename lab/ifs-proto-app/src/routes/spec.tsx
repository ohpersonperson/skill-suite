import { createFileRoute } from "@tanstack/react-router";
import { Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { Chrome } from "@/components/chrome";
import { Button } from "@/components/ui/button";
import { LINEAGE, STEPS } from "@/lib/ifs/protocol";
import { SKILL_FILES, SKILL_MD } from "@/lib/ifs/skill-text";
import { downloadText } from "@/lib/ifs/markdown";
import { EVIDENCE_TAGS } from "@/lib/ifs/types";

export const Route = createFileRoute("/spec")({ component: SpecPage });

function SpecPage() {
  const pack = SKILL_FILES.map((f) => `## ${f.path}\n\n${f.content}`).join(
    "\n\n---\n\n",
  );

  return (
    <Chrome>
      <div className="space-y-12">
        <section className="max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            From proto to engine
          </p>
          <h2 className="mt-1 font-display text-4xl font-medium tracking-tight">
            Not quite IFS. Now it is a skill.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The Copilot proto kept the collision and threw away the silent
            eight-step loop. v1.0 keeps that five-step shape, then absorbs the
            parts of IFS2 Compressed and Field Forge that the proto was reaching
            for: prior-state, compression, one-pass completion, optional overlay.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(SKILL_MD);
                toast("SKILL.md copied");
              }}
            >
              <Copy className="size-3.5" />
              Copy SKILL.md
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => downloadText("ifs-proto-skill-pack.md", pack)}
            >
              <Download className="size-3.5" />
              Download pack
            </Button>
          </div>
        </section>

        <section>
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            Lineage
          </p>
          <ol className="mt-4 space-y-0">
            {LINEAGE.map((item, i) => (
              <li key={item.name} className="flex gap-4">
                <div className="flex w-4 flex-col items-center">
                  <span
                    className={
                      i === LINEAGE.length - 1
                        ? "mt-1 size-2.5 rounded-full bg-bone"
                        : "mt-1 size-2.5 rounded-full bg-line-strong"
                    }
                  />
                  {i < LINEAGE.length - 1 && (
                    <span className="w-px flex-1 bg-line" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="font-display text-lg leading-tight">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            What changed in v1.0
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg bg-raised shadow-[var(--shadow-border)]">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="text-[11px] tracking-[0.14em] text-faint uppercase">
                <tr className="border-b border-line">
                  <th className="px-4 py-3 font-medium">Kept from proto</th>
                  <th className="px-4 py-3 font-medium">Absorbed</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  [
                    "Five-step engine, not the silent eight",
                    "Prior-state Key testing (HELD / CRACKED / MODIFIED / SUPERSEDED / UNRESOLVED)",
                  ],
                  [
                    "10-tier evidence, never silently upgraded",
                    "Light compression: cut anything that is not a Key, discriminator, or classification",
                  ],
                  [
                    "Two Takes default; third only if independent",
                    "One-pass completion rules. No second loop.",
                  ],
                  [
                    "Keys with vulnerability and falsifier",
                    "Optional Field Forge overlay — Anvil + Hammer, off by default",
                  ],
                  [
                    "Portable Markdown artifact",
                    "Skill-creator packaging: graph, evals, triggers, changelog",
                  ],
                ].map(([kept, absorbed]) => (
                  <tr key={kept} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 align-top text-ink">{kept}</td>
                    <td className="px-4 py-3 align-top">{absorbed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            Engine
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {STEPS.map((s) => (
              <li key={s.id} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
                <p className="text-[11px] tracking-[0.16em] text-faint uppercase">
                  0{s.n}
                </p>
                <p className="mt-1 font-display text-xl">{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.brief}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            Evidence tags
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {EVIDENCE_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-raised px-2.5 py-1 text-[11px] font-medium tracking-[0.12em] text-muted uppercase shadow-[var(--shadow-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-faint">
            OBFUSCATION is overlay-only. Do not hunt for it in a systems field.
          </p>
        </section>

        <section>
          <p className="text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            SKILL.md
          </p>
          <pre className="mt-4 max-h-[32rem] overflow-auto rounded-lg bg-inset p-4 text-xs leading-relaxed text-muted shadow-[var(--shadow-border)]">
            {SKILL_MD}
          </pre>
        </section>
      </div>
    </Chrome>
  );
}
