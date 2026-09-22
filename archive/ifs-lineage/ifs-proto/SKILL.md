---
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

See `references/evidence-taxonomy.md`.

## Prior state

If `ifs-state-[field].md` exists (or a prior artifact is supplied):

1. Load its Keys.
2. State: Prior interrogation found. Loading Keys from [Date].
3. Test every prior Key against new evidence.
4. Mark: HELD | CRACKED | MODIFIED | SUPERSEDED | UNRESOLVED.
5. Add only genuinely new Keys.

See `references/prior-state.md`.

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

Capture: emit a complete Markdown state artifact. Filename `ifs-state-[field-name].md`. Slug: lowercase, spaces to hyphens, no date in the name.

See `references/state-artifact.md`.

## Compression

Before emitting, cut restated evidence, redundant framing, and connective prose. If a sentence can be removed without losing a Key, a discriminator, or a classification, remove it.

Hold contradictions live in parallel non-subordinating sentences. Do not use "but" / "however" / "which means" to quietly privilege one side.

## Overlay (opt-in)

When the field is interpersonal evasion, therapy-speak armor, or responsibility dodging — and only when requested — load `references/overlay-forge.md` and run Anvil + Hammer before Diverge. Default is overlay off.

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

Start at `references/INDEX.md`.

### Cross-skill connections

- [[ifs2-compressed:]] — parent compressed engine (token targets, auto-capture)
- [[memdate2:]] — capture-only persistence
- [[responsibility-obfuscation-probe:]] — Hammer lineage; overlay only
