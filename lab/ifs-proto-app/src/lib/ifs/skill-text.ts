export const SKILL_MD = `---
name: ifs-proto
description: "One-pass interrogation of contradictory or uncertain fields. Use when the user invokes ifs-proto, ifsproto, /ifs, /ifs-proto, interrogate [field], run IFS on [thing], proto interrogation, collide takes, or asks to stress-test competing interpretations into load-bearing Keys. Not for simple factual lookup, casual chat, or creative writing. Distinct from IFS v1's silent 8-step loop. Field Forge Anvil/Hammer overlay is opt-in, not default."
type: workflow
lifecycle: active
---

# IFS-PROTO v1.0 — One-Pass Interrogation

Provider-agnostic interrogation of contradictory or uncertain fields. Derived from IFS2 Canonical + IFS2 Compressed, via a Copilot proto that was not quite IFS. Ends in a portable state artifact.

Core: Confidence ≠ correctness. Interrogate the gap.

Operating limits: 2 Takes by default; 3 only when a genuinely independent model exists. Fixed collisions. No looping. Prefer the smallest output that preserves reasoning.

## Invoke

- ifs-proto / ifsproto / /ifs-proto
- /ifs
- interrogate [field]
- run IFS on [thing]
- proto interrogation

## Evidence

Never silently upgrade evidence. Tag every input.

| Tag | Meaning |
|---|---|
| FACT | Directly established |
| OBSERVATION | Reported/logged, unverified |
| CLAIM | Actor/source assertion |
| INFERENCE | Logical conclusion |
| ASSUMPTION | Unsupported presumption |
| HYPOTHESIS | Proposed explanation |
| REQUIREMENT | Condition a model needs |
| CONSTRAINT | Limiting boundary |
| DEPENDENCY | State-dependent element |
| UNKNOWN | Presently undetermined critical variable |
| OBFUSCATION | Overlay only — evasive maneuver masking responsibility |

Never fabricate facts, actors, events, motives, or certainty.

See \`references/evidence-taxonomy.md\`.

## Prior state

If \`ifs-state-[field].md\` exists (or a prior artifact is supplied):

1. Load its Keys.
2. State: Prior interrogation found. Loading Keys from [Date].
3. Test every prior Key against new evidence.
4. Mark: HELD | CRACKED | MODIFIED | SUPERSEDED | UNRESOLVED.
5. Add only genuinely new Keys.

See \`references/prior-state.md\`.

## Engine

Run internally. One pass. Do not surface intermediate reasoning.

### 1. Identify & Decompose

Name the field, objective, scope, constraints. Decompose into tagged evidence, actors, contradictions. Do not resolve yet.

### 2. Diverge

Two Takes by default. Take C only if genuinely independent.

Each Take: uses tagged evidence; internally coherent; strongest case; no strawmen; no premature consensus.

### 3. Collide

Required pairs only. 2 Takes → A/B. 3 Takes → A/B, A/C, B/C. Never add collisions.

Each collision names: contradiction; premise that must break; discriminator evidence. Collision must hurt brittle claims.

### 4. Refine

Extract 3–5 load-bearing Keys. Prefer fewer, stronger.

Each Key: Statement; Classification (ESTABLISHED | STRONGLY INFERRED | PLAUSIBLE | SPECULATIVE | UNRESOLVED); Evidence (tagged); Confidence (HIGH | MODERATE | LOW); Structural Vulnerability; Falsifier.

A Key that cannot survive stress-testing is discarded, not softened.

### 5. Surprise + Synthesis + Capture

Surprise: strongest non-obvious result produced by collision. If none: "No material Surprise identified."

Synthesis: Established Ground; Surviving Core Model; Remaining Uncertainties; Primary Next Target.

Capture: emit a complete Markdown state artifact. Filename \`ifs-state-[field-name].md\`. Slug: lowercase, spaces to hyphens, no date in the name.

See \`references/state-artifact.md\`.

## Compression

Before emitting, cut restated evidence, redundant framing, and connective prose. If a sentence can be removed without losing a Key, a discriminator, or a classification, remove it.

Hold contradictions live in parallel non-subordinating sentences. Do not use "but" / "however" / "which means" to quietly privilege one side.

## Overlay (opt-in)

When the field is interpersonal evasion, therapy-speak armor, or responsibility dodging — and only when requested — load \`references/overlay-forge.md\` and run Anvil + Hammer before Diverge. Default is overlay off.

## Capture handoff

After emitting the artifact: persist it. In agent context, append to memdate (capture-only, no distill). In this bench, archive locally. Do not re-interpret what was just produced.

## Completion

- 2–3 Takes completed.
- Every required collision completed exactly once.
- Prior Keys tested when applicable.
- 3–5 Keys extracted.
- Surprise identified or explicitly absent.
- No TODOs, placeholders, fabricated facts, or unsupported certainty.
- No second pass. Unresolved questions become Remaining Uncertainties and Primary Next Target.

## Knowledge graph

Start at \`references/INDEX.md\`.

### Cross-skill connections

- [[ifs2-compressed:]] — parent compressed engine (token targets, auto-capture)
- [[memdate2:]] — capture-only persistence
- [[responsibility-obfuscation-probe:]] — Hammer lineage; overlay only
`;

export const CHANGELOG_MD = `# Changelog

## 2026-09-16 — v1.0

- Promoted Copilot IFS-PROTO v0.1 into a packaged skill.
- Kept the 5-step engine (Identify, Diverge, Collide, Refine, Capture).
- Absorbed IFS2 Compressed: prior-state key testing, light compression, one-pass completion rules, portable artifact.
- Optional Field Forge overlay (Anvil/Hammer) — off by default.
- Discriminators first-class on every collision.
- Primary Next Target seeds the following session.
- Skill graph, evals, and triggers added.

## 2026-09-16 — v0.1 (proto)

- Copilot proto. Five-step merge of IFS2 Canonical + IFS2.1 Compressed.
- 10-tier evidence. 2–3 Takes. Keys with falsifiers.
- Not quite IFS: silent 8-step loop removed; collision made explicit.
`;

export const EVIDENCE_REF = `---
description: "Ten-tier evidence taxonomy plus overlay-only OBFUSCATION. Read before tagging inputs or upgrading a claim."
connections: [state-artifact, overlay-forge]
---

# Evidence taxonomy

Never silently upgrade. A CLAIM does not become a FACT because it is repeated. An INFERENCE does not become ESTABLISHED because it is elegant.

| Tag | Use when | Do not use when |
|---|---|---|
| FACT | Directly established, checkable | The source is the only witness |
| OBSERVATION | Reported or logged, unverified | You watched it yourself |
| CLAIM | An actor asserted it | You are asserting it |
| INFERENCE | It follows from tagged inputs | It merely sounds like them |
| ASSUMPTION | Required, unsupported | You have a fact |
| HYPOTHESIS | Proposed, needs stress | Already surviving as a Key |
| REQUIREMENT | A model dies without it | It is merely preferred |
| CONSTRAINT | A hard boundary | A preference or hope |
| DEPENDENCY | State of A hinges on B | A and B are independent |
| UNKNOWN | Critical and presently undetermined | You could look it up in the field |
| OBFUSCATION | Overlay on; evasion is the object | Overlay off; systems fields |

Fabrication ban: do not invent actors, dates, quotes, motives, or certainty to complete a template.
`;

export const ARTIFACT_REF = `---
description: "Portable Markdown state artifact contract. Read when emitting, naming, or iterating on ifs-state files."
connections: [prior-state, evidence-taxonomy]
---

# State artifact

Filename: \`ifs-state-[field-name].md\`
Slug: lowercase; spaces → hyphens; strip punctuation; no date in the filename.

The artifact is self-contained. A later session must be able to test Keys without the original chat.

Required sections: META, FIELD, PRIOR STATE, EVIDENCE, TAKES & COLLISIONS, REFINED KEYS, SURPRISE, SYNTHESIS.

Surprise is not a summary of the Keys. It is the view that only exists after collision. If collision produces nothing non-obvious, write "No material Surprise identified."

Synthesis.Primary Next Target is the seed of the next session, not a backlog.
`;

export const PRIOR_REF = `---
description: "How to load, test, and mark prior Keys. Read on any iterative session."
connections: [state-artifact, evidence-taxonomy]
---

# Prior state

If no prior artifact: Reference = None. Evaluations empty. Session = 1. Status = INITIAL.

If prior exists:

1. Load Keys only — do not inherit Takes as authority.
2. Against new evidence, mark each Key:
   - HELD — still load-bearing
   - CRACKED — damaged, not yet replaced
   - MODIFIED — same claim, tighter or restated
   - SUPERSEDED — replaced by a new Key
   - UNRESOLVED — still cannot be tested
3. Session = prior session + 1
4. Status = ITERATIVE, or FINAL if Primary Next Target is idle
5. New Keys must be genuinely new, not rephrased survivors

Never patch an old artifact in place. Emit a new one.
`;

export const OVERLAY_REF = `---
description: "Optional Field Forge Anvil/Hammer overlay for interpersonal evasion. Read only when overlay is requested."
connections: [evidence-taxonomy]
---

# Field Forge overlay (opt-in)

Default: OFF. Do not activate because a field contains people. Activate only when asked, or when the field is clearly an evasion/responsibility problem.

Anvil — Ground mapping
- Hold contradictions live: "X is true. Y is also true."
- Ban subordinating "but" / "however" / "which means"
- Time-index person-states. No fixed moral categories.
- Detail-Correction vs Core-Claim Correction
- Log observed action and exact quotes. Do not supply unstated motive.

Hammer — Armor stripping
- Obfuscated object: the exact responsibility dodged
- Apparent function: what the evasion achieves
- Active tactics
- Therapy-speak / self-regulation language flagged as possible armor

Then proceed to Diverge with the stripped ground. Overlay does not replace collision. It feeds it.
`;

export const INDEX_REF = `---
description: "Knowledge graph index for IFS-PROTO. Start here."
---

# IFS-PROTO knowledge graph

## Core

- [[evidence-taxonomy]] — tagging rules; fabrication ban
- [[state-artifact]] — portable output contract
- [[prior-state]] — iterative Key testing

## Optional

- [[overlay-forge]] — Anvil/Hammer; interpersonal fields only
`;

export const EVALS_JSON = `{
  "skill": "ifs-proto",
  "test_cases": [
    {
      "name": "two_takes_one_collision",
      "input": "Interrogate a field with two contradictory accounts and no decision log.",
      "assertions": [
        "Produces exactly two Takes unless a third independent model exists",
        "Emits A/B collision with contradiction, premise failure, and discriminator",
        "Extracts 3–5 Keys with classification, confidence, vulnerability, falsifier",
        "Does not invent a single root cause when two vectors remain live"
      ]
    },
    {
      "name": "prior_keys_tested",
      "input": "Re-run IFS-PROTO on the same field with one new dated document.",
      "assertions": [
        "Loads prior Keys and marks each HELD, CRACKED, MODIFIED, SUPERSEDED, or UNRESOLVED",
        "Increments session number",
        "Does not patch the old artifact in place"
      ]
    },
    {
      "name": "no_overlay_on_systems_field",
      "input": "Interrogate a vendor-slip versus rewrite delay. Overlay off.",
      "assertions": [
        "Omits probe / obfuscated-object section",
        "Does not attribute unstated motives to Engineering or Product"
      ]
    },
    {
      "name": "overlay_on_evasion",
      "input": "ifs-proto overlay on: a message that uses 'I'm dysregulated' to exit an accountability question.",
      "assertions": [
        "Names the obfuscated object as the responsibility being exited",
        "Flags the therapy-speak as possible armor",
        "Still runs Diverge/Collide rather than stopping at the probe"
      ]
    }
  ]
}`;

export const TRIGGERS_JSON = `{
  "skill": "ifs-proto",
  "test_cases": [
    { "input": "ifs-proto this thread", "should_trigger": true },
    { "input": "/ifs the launch delay", "should_trigger": true },
    { "input": "interrogate this field", "should_trigger": true },
    { "input": "run IFS on the vendor email", "should_trigger": true },
    { "input": "what is the capital of France", "should_trigger": false },
    { "input": "write a poem about collision", "should_trigger": false }
  ]
}`;

export const SKILL_FILES: { path: string; content: string }[] = [
  { path: "SKILL.md", content: SKILL_MD },
  { path: "CHANGELOG.md", content: CHANGELOG_MD },
  { path: "evals/evals.json", content: EVALS_JSON },
  { path: "evals/triggers.json", content: TRIGGERS_JSON },
  { path: "references/INDEX.md", content: INDEX_REF },
  { path: "references/evidence-taxonomy.md", content: EVIDENCE_REF },
  { path: "references/state-artifact.md", content: ARTIFACT_REF },
  { path: "references/prior-state.md", content: PRIOR_REF },
  { path: "references/overlay-forge.md", content: OVERLAY_REF },
];
