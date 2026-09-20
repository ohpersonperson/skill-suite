import { useEffect, useState } from "react";
import { Loader2, Play, Slash } from "lucide-react";
import { toast } from "sonner";
import { ArtifactView } from "@/components/artifact-view";
import { Pipeline } from "@/components/pipeline";
import { Button } from "@/components/ui/button";
import { getEngineStatus, interrogateField, type EngineStatus } from "@/lib/ifs/interrogate";
import { SAMPLE_ARTIFACT, SAMPLES } from "@/lib/ifs/sample";
import { useBench } from "@/lib/ifs/store";
import type { Artifact } from "@/lib/ifs/types";
import { cn } from "@/lib/utils";

export function Bench() {
  const {
    field,
    overlay,
    running,
    error,
    current,
    setField,
    setOverlay,
    setRunning,
    setError,
    clearError,
    adopt,
  } = useBench();
  const [engine, setEngine] = useState<EngineStatus | null>(null);
  const ready = engine?.ready ?? null;

  useEffect(() => {
    void getEngineStatus().then(setEngine);
  }, []);

  async function run(nextField = field, prior: Artifact | null = null) {
    const text = nextField.trim();
    if (text.length < 40) {
      setError("Give the engine a field of at least a few sentences.");
      return;
    }
    clearError();
    setRunning(true);
    try {
      const result = await interrogateField({
        data: { field: text, overlay, prior },
      });
      if (!result.ok) {
        setError(result.error);
        toast(result.error);
        return;
      }
      adopt(result.artifact);
      toast("State artifact captured");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "The engine could not complete this pass.";
      setError(message);
      toast(message);
    }
  }

  function loadSample(id: string) {
    const sample = SAMPLES.find((s) => s.id === id);
    if (!sample) return;
    setField(sample.field);
    setOverlay(false);
    if ("baked" in sample && sample.baked) {
      adopt(sample.baked);
    }
  }

  function iterateFrom(artifact: Artifact) {
    setField(artifact.sourceField);
    void run(artifact.sourceField, artifact);
  }

  const showArtifact = current ?? SAMPLE_ARTIFACT;
  const isExample = !current || current.id === SAMPLE_ARTIFACT.id;

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-faint uppercase">
            The field
          </p>
          <h2 className="mt-1 font-display text-3xl font-medium tracking-tight">
            Paste the contradiction.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            IFS-PROTO runs a five-step pass: decompose, diverge, collide, refine,
            capture. It will not invent a single story to make you comfortable.
          </p>
        </div>
        <div className="flex flex-wrap items-end justify-start gap-2 lg:justify-end">
          {SAMPLES.map((s) => (
            <Button key={s.id} variant="ghost" size="sm" onClick={() => loadSample(s.id)}>
              {s.title}
            </Button>
          ))}
        </div>
      </section>

      <div className="rounded-xl bg-raised p-3 shadow-[var(--shadow-border)] sm:p-4">
        <label htmlFor="field" className="sr-only">
          Field
        </label>
        <textarea
          id="field"
          value={field}
          onChange={(e) => setField(e.target.value)}
          rows={10}
          placeholder="Dates, quotes, competing accounts. Tag nothing yet — the engine will."
          className="min-h-44 w-full resize-y rounded-lg bg-inset px-4 py-3 text-sm leading-relaxed text-ink outline-none placeholder:text-faint focus-visible:ring-2 focus-visible:ring-bone/40"
        />
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-muted">
            <span
              className={cn(
                "relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-150",
                overlay ? "bg-bone" : "bg-inset shadow-[inset_0_0_0_1px_rgba(236,234,227,0.16)]",
              )}
            >
              <span
                className={cn(
                  "absolute size-4 rounded-full transition-transform duration-150",
                  overlay ? "translate-x-5 bg-bone-fg" : "translate-x-1 bg-muted",
                )}
              />
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={overlay}
              onChange={(e) => setOverlay(e.target.checked)}
            />
            <span>
              Field Forge overlay
              <span className="block text-xs text-faint">
                Anvil + Hammer. Interpersonal evasion only.
              </span>
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {current && (
              <Button
                variant="ghost"
                onClick={() => void run(field, current)}
                disabled={running}
              >
                Iterate prior Keys
              </Button>
            )}
            <Button onClick={() => void run()} disabled={running || ready !== true}>
              {running ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Play className="size-4" />
              )}
              {running ? "One pass running" : "Interrogate"}
            </Button>
          </div>
        </div>
      </div>

      {ready === false && (
        <p className="flex items-center gap-2 text-sm text-muted">
          <Slash className="size-4" />
          {engine?.reason === "credits"
            ? "xAI credits are exhausted. The worked example still loads. Add credits or a Grok subscription, then Interrogate will run live."
            : "Live engine is offline. The worked example still loads."}
        </p>
      )}
      {error && (
        <p className="rounded-md bg-ember/10 px-4 py-3 text-sm text-ember">{error}</p>
      )}

      <Pipeline running={running} />

      {running && (
        <p className="text-sm text-muted">
          One pass. Identify, diverge, collide, refine, capture. No second loop.
        </p>
      )}

      {showArtifact && !running && (
        <div>
          {isExample && (
            <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-faint uppercase">
              Worked example — launch delay
            </p>
          )}
          <ArtifactView artifact={showArtifact} onIterate={iterateFrom} />
        </div>
      )}
    </div>
  );
}
