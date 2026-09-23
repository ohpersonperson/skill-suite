---
name: ifs-interrogation
description: "Unified adversarial interrogation of contradictory or uncertain fields. One-pass by default, deep nine-stage run when the field warrants it. Use when the user invokes interrogate [field], /ifs, /ifs [field], run IFS on [thing], ifs deep dive, stress-test [field], collide takes, or brings a situation, claim, or contradiction that needs pressure-testing into load-bearing Keys. Legacy aliases (restored 2026-09-23 to prevent routing breakage): ifs-proto, ifsproto, /ifs-proto, proto interrogation. Not for simple factual lookup, casual chat, or creative writing. Field Forge Anvil/Hammer overlay is opt-in, not default."
type: workflow
lifecycle: active
version: 2.0.4
---

# IFS Interrogation v2.0 — Unified Adversarial Engine

**IFS: Iterative Field Synthesis.**

Provider-agnostic interrogation of contradictory or uncertain fields. One engine, two depths: a **one-pass run** for most fields, a **deep nine-stage run** for systemic fields, Tribunal adjudication, or when the full protocol is asked for. Ends in a portable state artifact that any model can continue.

Core: Confidence ≠ correctness. Interrogate the gap.

**Lineage.** This skill synthesizes every IFS artifact to date: the original five-stage ifs-interrogation skill (Aug 11), the canonical cross-model nine-stage protocol (Aug 13), IFS2 Canonical (Aug 19), IFS2 Compressed v2.1 (Aug 22), and IFS-PROTO v1.0 (Sep 17). Nothing was discarded; the one-pass run is the compressed form of the deep run.

## Invoke

- `interrogate [field]` — examine a situation, claim, or contradiction
- `/ifs` — start an open interrogation session
- `/ifs [field]` — direct invocation with the field pre-named
- `run IFS on [thing]` — explicit request for the full framework
- `ifs deep dive` / `stress-test [field]` — deep nine-stage run
- Implicit: a messy situation with genuine, unresolved contradictions; a forensic audit surfacing conflicting facts; a Tribunal claim needing stress-testing against new data; a prior field re-examined with fresh evidence (loads prior state)

## Two depths

**One-pass (default).** Five phases, run internally, one pass, no looping:

1. Identify & Decompose — name the field, objective, scope; decompose into tagged evidence, actors, contradictions. Do not resolve yet.
2. Diverge — 2 Takes by default; Take C only when a genuinely independent third model exists. Each Take uses tagged evidence, is internally coherent, makes its strongest case, no strawmen, no premature consensus. Target 150–200 tokens each.
3. Collide — required pairs only (2 Takes → A/B; 3 Takes → A/B, A/C, B/C). Each collision names the contradiction, the premise that must break, and the discriminator evidence. Collision must hurt brittle claims. Target ~150 tokens per collision.
4. Refine — skeptic pass, then extract 3–5 load-bearing Keys. Prefer fewer, stronger. A Key that cannot survive stress-testing is discarded, not softened. Target ~100 tokens per Key.
5. Surprise + Synthesis + Capture — the non-obvious result of the collision (or "No material Surprise identified."); the surviving model; the complete Markdown state artifact.

**Deep run.** All nine stages, spelled out: IDENTIFY, DECOMPOSE, QUESTION, TEST, COLLIDE, REFINE, SURPRISE, SYNTHESIZE, CAPTURE STATE. QUESTION and TEST get their own stages: high-impact questions capable of changing the model, and active attempts to falsify the strongest interpretations. Use for large systemic fields, Tribunal adjudication, or when asked. For large ongoing multi-session fields, wrap the engine in the 8-step meta-execution cycle (see `references/modes.md`).

Loop rule is scoped by path: the one-pass never loops (unresolved questions go to remainingUncertainties / primaryNextTarget, never a second pass); only the deep/Systemic path wrapped in the meta-cycle may iterate (see `references/modes.md`, "Loop-scope rule").

Do not skip stages merely because an earlier stage appears sufficient.

## Evidence

Never silently upgrade evidence. Tag every input. Never fabricate facts, actors, events, motives, or certainty.

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

See `references/evidence-taxonomy.md`.

## Prior state

If `ifs-state-[field].md` exists or a prior artifact is supplied:

1. Load its Keys.
2. State: Prior interrogation found. Loading Keys from [Date].
3. Stress-test every prior Key against the new evidence.
4. Mark each: HELD | CRACKED | MODIFIED | SUPERSEDED | UNRESOLVED.
5. Add only genuinely new Keys. Never preserve a prior Key merely because it existed.

Prior state records what a previous interrogation concluded; it does not establish that the conclusion was correct. Never silently rewrite a prior Key — preserve the failure visibly.

"Prior State was not supplied" does not mean "no prior state exists." Do not invent prior Keys.

See `references/prior-state.md`.

## Persistence boundary

The interrogation model is NOT the persistence layer. Do not access external storage, create external files, or claim external persistence occurred. The model's responsibility ends when the complete canonical state artifact has been emitted into the conversation. The persistence layer captures it, stores it as `ifs-state-[field-name].md`, and supplies it to future interrogations.

In agent context, after emitting the artifact: append to memdate (capture-only, no distill). Do not re-interpret what was just produced.

## Refined Keys

Each Key records:

- **Statement** — crisp, load-bearing assertion
- **Classification** — ESTABLISHED | STRONGLY INFERRED | PLAUSIBLE | SPECULATIVE | UNRESOLVED
- **Evidence** — tagged facts/observations supporting it
- **Confidence** — HIGH | MODERATE | LOW, with justification
- **Structural Vulnerability** — dependencies or fragile assumptions
- **Falsifier** — the specific evidence that would overturn the Key

Do not create Keys merely to increase the number of Keys.

## State artifact

Filename: `ifs-state-[field-name].md`. Slug: lowercase, spaces to hyphens, no date in the name, no interrogation number in the name (the number lives inside the state). The artifact must be self-contained: another model continues the investigation from the artifact alone — never "see above," never "as discussed," never unstated context, never model memory.

One field, one canonical current state file. Session history may be kept separately; the state file is the current best model.

See `references/state-artifact.md` for the exact schema.

## Compression

Before emitting, cut restated evidence, redundant framing, and connective prose. If a sentence can be removed without losing a Key, a discriminator, or a classification, remove it. Prefer the smallest output that preserves reasoning.

Hold contradictions live in parallel non-subordinating sentences. Do not use "but" / "however" / "which means" to quietly privilege one side.

Typical one-pass budget: Takes 300–600 tokens, collisions 150–450, Keys 300–500, Surprise ~150, capture/synthesis ~200. If the field is simple, output substantially less. Unresolved questions become Remaining Uncertainties and Primary Next Target; they do not trigger another pass.

## Overlay (opt-in)

When the field is interpersonal evasion, therapy-speak armor, or responsibility dodging — and only when requested — load `references/overlay-forge.md` and run Anvil + Hammer before Diverge. Default is overlay off. The overlay adds the OBFUSCATION evidence tag, time-indexed person-states, and the jargon-armor strip. It never replaces Diverge/Collide.

## Inviolable constraints

- No speculation. Everything grounded in observed data.
- No invented entities. Don't add actors, events, or facts that aren't real.
- No emotional projection. Name what you feel, set it aside, keep working.
- No unsupported assumptions. If you can't show it, don't claim it.
- No motive attribution without evidence. Log observed action and exact quotes only.
- Collision must be adversarial. If it feels like agreement, push harder.
- Surprise must be emergent. If it could come from one Take, it's not Surprise.
- Safety of inference: do not mistake analytical confidence for factual certainty. Do not diagnose people from limited evidence. When multiple explanations remain viable, preserve the competing models.

## Failure modes

1. **Soft collision** — Takes don't actually contradict. Find the assumption each Take requires that breaks if the other is true.
2. **Adjudicate before collide** — judging Takes before they've crashed kills emergence. Let collision happen first.
3. **False consensus** — "all three have a point" is not adjudication. Mark what's weak. Kill it.
4. **Skipping Surprise** — stopping at synthesis. Surprise is the point. Force it: what is now visible that wasn't before?
5. **State amnesia** — not saving outputs or not loading prior Keys next time. The compounding is the bloom.
6. **Silent upgrades** — claims becoming facts, inferences becoming conclusions. Tag everything.

## Completion

- Every required collision completed exactly once, with genuine tension.
- Prior Keys tested when applicable; session number incremented; old artifact never patched in place.
- 3–5 Keys extracted, each with classification, confidence, vulnerability, falsifier.
- Surprise identified or explicitly absent.
- Full state artifact emitted — no summaries, no placeholders, no TODOs, no unsupported certainty.
- If evidence is insufficient: name what's missing, classify it UNKNOWN, preserve the uncertainty, continue with what can be established. Uncertainty is not failure.

## The Bloom

Single interrogation: deep analysis.
Second interrogation: Keys pressure-tested against new contradiction.
Third interrogation: pattern recognition across contexts.
By fifth: the field reorganizes. Incompatibilities lock together. Survival emerges.

That's transformation. That's bloom.

## Knowledge graph

Start at `references/INDEX.md`.

### Cross-skill connections

- [[ifs2-compressed-v21:]] — the compressed one-pass engine this skill's default run descends from
- [[ifs-proto:]] — the v1.0 packaged prototype; overlay, compression, and eval lineage
- [[field-forge:]] — standalone dialectical system; Anvil/Hammer available as opt-in overlay
- [[memdate-v2:]] — capture-only persistence for emitted artifacts
- [[responsibility-obfuscation-probe:]] — Hammer lineage; overlay only
- [[forensic-situational-audit:]] — implicit trigger when audits surface conflicting facts
