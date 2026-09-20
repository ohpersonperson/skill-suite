import { artifactFilename } from "./protocol";
import type { Artifact } from "./types";

function bullets(
  items: { text: string; tag: string }[],
  empty = "None recorded.",
): string {
  if (!items.length) return empty;
  return items.map((i) => `- [${i.tag}] ${i.text}`).join("\n");
}

export function artifactToMarkdown(a: Artifact): string {
  const takes = a.takes
    .map((t) => `### Take ${t.id} — ${t.title}\n${t.argument}`)
    .join("\n\n");

  const collisions = a.collisions.length
    ? a.collisions
        .map(
          (c) =>
            `- ${c.pair}: ${c.contradiction}\n  Premise failure: ${c.premiseFailure}\n  Discriminator: ${c.discriminator}`,
        )
        .join("\n")
    : "- None";

  const keys = a.keys
    .map(
      (k, i) => `### Key ${i + 1}
- Statement: ${k.statement}
- Classification: ${k.classification}
- Evidence Base: ${k.evidence}
- Confidence: ${k.confidence}
- Structural Vulnerability: ${k.vulnerability}
- Falsifier: ${k.falsifier}`,
    )
    .join("\n\n");

  const evals = a.priorState.evaluations.length
    ? a.priorState.evaluations
        .map((e) => `- ${e.status}: ${e.statement}${e.note ? ` — ${e.note}` : ""}`)
        .join("\n")
    : "- None";

  const probe = a.probe
    ? `## 2b. PROBE (Field Forge overlay)
- Obfuscated Object: ${a.probe.obfuscatedObject}
- Apparent Function: ${a.probe.apparentFunction}
- Active Tactics: ${a.probe.activeTactics.join("; ") || "None"}
- Jargon / Armor Flags: ${a.probe.jargonFlags.join("; ") || "None"}

`
    : "";

  return `# IFS STATE ARTIFACT: ${a.meta.field}

## META
- Field: ${a.meta.field}
- Date: ${a.meta.date}
- Protocol: ${a.meta.protocol}
- Session: ${a.meta.session}
- Status: ${a.meta.status}
- Overlay: ${a.overlay ? "Field Forge ON" : "off"}
- File: ${artifactFilename(a)}

## 1. FIELD
- Objective: ${a.field.objective}
- Scope & Constraints: ${a.field.scope}

## 2. PRIOR STATE
- Reference: ${a.priorState.reference ?? "None"}
- Key Evaluations:
${evals}

${probe}## 3. EVIDENCE
### Facts
${bullets(a.evidence.facts)}

### Claims & Observations
${bullets(a.evidence.claims)}

### Dependencies & Unknowns
${bullets(a.evidence.unknowns)}

## 4. TAKES & COLLISIONS
${takes}

### Collisions
${collisions}

## 5. REFINED KEYS
${keys}

## 6. SURPRISE
${a.surprise ?? "No material Surprise identified."}

## 7. SYNTHESIS
- Established Ground: ${a.synthesis.establishedGround}
- Surviving Core Model: ${a.synthesis.survivingModel}
- Remaining Uncertainties: ${a.synthesis.remainingUncertainties}
- Primary Next Target: ${a.synthesis.primaryNextTarget}
`;
}

export function downloadText(filename: string, text: string, mime = "text/markdown") {
  const blob = new Blob([text], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
