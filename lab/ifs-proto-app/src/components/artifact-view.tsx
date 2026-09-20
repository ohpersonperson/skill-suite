import type { ReactNode } from "react";
import {
  Copy,
  Download,
  GitBranch,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { artifactFilename } from "@/lib/ifs/protocol";
import { artifactToMarkdown, downloadText } from "@/lib/ifs/markdown";
import type { Artifact, EvidenceTag, KeyClass, PriorStatus } from "@/lib/ifs/types";
import { cn } from "@/lib/utils";

const TAG_TONE: Record<string, string> = {
  FACT: "text-ink",
  OBSERVATION: "text-muted",
  CLAIM: "text-warn",
  INFERENCE: "text-held",
  ASSUMPTION: "text-ember",
  HYPOTHESIS: "text-warn",
  REQUIREMENT: "text-ink",
  CONSTRAINT: "text-ink",
  DEPENDENCY: "text-muted",
  UNKNOWN: "text-ember",
  OBFUSCATION: "text-ember",
};

const CLASS_TONE: Record<KeyClass, string> = {
  ESTABLISHED: "text-held",
  "STRONGLY INFERRED": "text-bone",
  PLAUSIBLE: "text-warn",
  SPECULATIVE: "text-ember",
  UNRESOLVED: "text-muted",
};

const PRIOR_TONE: Record<PriorStatus, string> = {
  HELD: "text-held",
  CRACKED: "text-ember",
  MODIFIED: "text-warn",
  SUPERSEDED: "text-muted",
  UNRESOLVED: "text-muted",
};

function Tag({ tag }: { tag: EvidenceTag | string }) {
  return (
    <span
      className={cn(
        "mr-2 inline-block font-sans text-[10px] font-medium tracking-[0.16em] uppercase",
        TAG_TONE[tag] ?? "text-muted",
      )}
    >
      {tag}
    </span>
  );
}

function Section({
  kicker,
  title,
  children,
  delay = 0,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <section
      className="rise border-t border-line pt-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-sans text-[10px] font-medium tracking-[0.2em] text-faint uppercase">
        {kicker}
      </p>
      <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function ArtifactView({
  artifact,
  onIterate,
}: {
  artifact: Artifact;
  onIterate?: (artifact: Artifact) => void;
}) {
  const md = artifactToMarkdown(artifact);

  async function copyMd() {
    await navigator.clipboard.writeText(md);
    toast("Artifact copied");
  }

  return (
    <article className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            {artifact.meta.protocol} · session {artifact.meta.session} · {artifact.meta.status}
            {artifact.overlay ? " · overlay" : ""}
          </p>
          <h2 className="mt-1 font-display text-3xl font-medium tracking-tight text-ink">
            {artifact.meta.field}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {artifact.field.objective}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" size="sm" onClick={copyMd}>
            <Copy className="size-3.5" />
            Copy
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => downloadText(artifactFilename(artifact), md)}
          >
            <Download className="size-3.5" />
            Markdown
          </Button>
          {onIterate && (
            <Button variant="primary" size="sm" onClick={() => onIterate(artifact)}>
              <RefreshCw className="size-3.5" />
              Iterate
            </Button>
          )}
        </div>
      </div>

      <Section kicker="01" title="Field" delay={40}>
        <p className="text-sm leading-relaxed text-muted">
          <span className="text-ink">Scope. </span>
          {artifact.field.scope}
        </p>
      </Section>

      {artifact.priorState.evaluations.length > 0 && (
        <Section kicker="02" title="Prior Keys" delay={80}>
          <ul className="space-y-2">
            {artifact.priorState.evaluations.map((e, i) => (
              <li key={i} className="rounded-md bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
                <span className={cn("text-[10px] font-medium tracking-[0.16em] uppercase", PRIOR_TONE[e.status])}>
                  {e.status}
                </span>
                <p className="mt-1 text-sm leading-relaxed">{e.statement}</p>
                {e.note && <p className="mt-1 text-xs text-muted">{e.note}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section kicker="03" title="Evidence" delay={100}>
        <div className="grid gap-4 md:grid-cols-3">
          {(
            [
              ["Facts", artifact.evidence.facts],
              ["Claims", artifact.evidence.claims],
              ["Unknowns", artifact.evidence.unknowns],
            ] as const
          ).map(([label, items]) => (
            <div key={label} className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
              <p className="text-[11px] font-medium tracking-[0.16em] text-faint uppercase">{label}</p>
              <ul className="mt-3 space-y-3">
                {items.length === 0 && <li className="text-sm text-muted">None.</li>}
                {items.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    <Tag tag={item.tag} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {artifact.probe && (
        <Section kicker="03b" title="Probe" delay={120}>
          <div className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
            <dl className="grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] tracking-[0.14em] text-faint uppercase">Obfuscated object</dt>
                <dd className="mt-1 text-sm">{artifact.probe.obfuscatedObject}</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.14em] text-faint uppercase">Function</dt>
                <dd className="mt-1 text-sm">{artifact.probe.apparentFunction}</dd>
              </div>
            </dl>
            {artifact.probe.jargonFlags.length > 0 && (
              <p className="mt-3 text-sm text-ember">
                Armor: {artifact.probe.jargonFlags.join(" · ")}
              </p>
            )}
          </div>
        </Section>
      )}

      <Section kicker="04" title="Takes" delay={140}>
        <div className={cn("grid gap-3", artifact.takes.length > 2 ? "lg:grid-cols-3" : "md:grid-cols-2")}>
          {artifact.takes.map((take) => (
            <div key={take.id} className="rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]">
              <p className="text-[11px] font-medium tracking-[0.18em] text-bone uppercase">
                Take {take.id}
              </p>
              <h4 className="mt-1 font-display text-xl">{take.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{take.argument}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="04b" title="Collisions" delay={180}>
        <ul className="space-y-3">
          {artifact.collisions.map((c) => (
            <li key={c.pair} className="rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]">
              <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-ember uppercase">
                <GitBranch className="size-3.5" />
                {c.pair}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{c.contradiction}</p>
              <p className="mt-3 text-sm text-muted">
                <span className="text-ink">Premise failure. </span>
                {c.premiseFailure}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-ink">Discriminator. </span>
                {c.discriminator}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="05" title="Keys" delay={220}>
        <ol className="space-y-3">
          {artifact.keys.map((k, i) => (
            <li key={i} className="rounded-lg bg-raised p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[11px] tracking-[0.16em] text-faint uppercase">Key {i + 1}</p>
                <p className="text-[11px] tracking-[0.12em] text-muted uppercase">
                  <span className={CLASS_TONE[k.classification]}>{k.classification}</span>
                  <span className="mx-2 text-line-strong">/</span>
                  {k.confidence}
                </p>
              </div>
              <p className="mt-2 font-display text-lg leading-snug">{k.statement}</p>
              <p className="mt-3 text-sm text-muted">
                <span className="text-ink">Evidence. </span>
                {k.evidence}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-ink">Vulnerability. </span>
                {k.vulnerability}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-ink">Falsifier. </span>
                {k.falsifier}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="06" title="Surprise" delay={260}>
        <p className="font-display text-xl italic leading-snug text-ink">
          {artifact.surprise ?? "No material Surprise identified."}
        </p>
      </Section>

      <Section kicker="07" title="Synthesis" delay={300}>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)] sm:col-span-2">
            <dt className="text-[11px] tracking-[0.14em] text-faint uppercase">Established ground</dt>
            <dd className="mt-2 text-sm leading-relaxed">{artifact.synthesis.establishedGround}</dd>
          </div>
          <div className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
            <dt className="text-[11px] tracking-[0.14em] text-faint uppercase">Surviving model</dt>
            <dd className="mt-2 text-sm leading-relaxed">{artifact.synthesis.survivingModel}</dd>
          </div>
          <div className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)]">
            <dt className="text-[11px] tracking-[0.14em] text-faint uppercase">Remaining uncertainties</dt>
            <dd className="mt-2 text-sm leading-relaxed">{artifact.synthesis.remainingUncertainties}</dd>
          </div>
          <div className="rounded-lg bg-raised p-4 shadow-[var(--shadow-border)] sm:col-span-2">
            <dt className="text-[11px] tracking-[0.14em] text-ember uppercase">Primary next target</dt>
            <dd className="mt-2 text-sm leading-relaxed">{artifact.synthesis.primaryNextTarget}</dd>
          </div>
        </dl>
      </Section>
    </article>
  );
}
