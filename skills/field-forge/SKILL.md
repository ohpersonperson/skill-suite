---
name: field-forge
description: "Opt-in overlay on the ifs-interrogation kernel for hostile or evasive fields. The Anvil (ground mapping) and Hammer (evasion-hypothesis testing) pre-process the field; the Furnace feeds Take seeds directly into the kernel's Diverge phase. Use when the field involves evasive communication, therapy-speak that may function as evasion, high-stakes conflict, or contradictory human situations that need auditing before interrogation. Never a standalone pipeline — the kernel owns Collide through Surprise."
type: overlay
lifecycle: active
version: "2.0"
---

# FIELD FORGE — Kernel Overlay v2.0

Field Forge is an **opt-in overlay** on the `ifs-interrogation` kernel. It does not run its own interrogation pipeline — the kernel owns Diverge through Surprise. The Forge's job is preparation: it audits hostile or evasive fields and feeds pre-processed material directly into the kernel's Diverge phase.

**What changed in v2.0 (Phase 2.2):** the old standalone pipeline's Furnace stage duplicated the kernel's Diverge→Collide→Adjudicate→Refine→Surprise. That duplication is retired. The Anvil and Hammer survive as the overlay's unique machinery; the Furnace is now the handoff point, not a second engine.

## Invocation (opt-in, never default)

The overlay fires only when invoked — by the user, the router, or the IFS kernel's own judgment — and only when the field warrants it:

- Evasive communication: fogging, DARVO, jargon armor, responsibility dodging.
- High-stakes interpersonal conflict where the raw narrative cannot be trusted as ground.
- Therapy-speak or self-regulation vocabulary that may function as evasion (tested, never presumed).
- Contradictory human situations where person-states shift across time.

If the field is already clean ground, the overlay stands down — the kernel runs without it.

## The Overlay Pipeline

### Stage 1 — The Anvil: Ground Mapping

Objective: establish exact situational state without forcing narrative resolution.

- Inputs: raw narrative, transcripts, messages, situation descriptions.
- Outputs: held tensions (parallel non-subordinating sentences), time-indexed person-state sequence, correction classification (detail-correction vs core-claim changes).
- Feeds: the kernel's **Decompose** phase as pre-audited ground. The kernel does not re-audit what the Anvil has mapped.

### Stage 2 — The Hammer: Evasion Hypothesis Testing

Objective: identify what responsibility may be avoided and test — not presume — structural obfuscation.

- Inputs: dialogue excerpts, evasive statements, conflict descriptions.
- Outputs:
  - Obfuscated-Object Hypothesis: the responsibility or consequence that *may* be dodged, with support status (supported / contested / unsupported).
  - Apparent Function: what the evasion would achieve if real (status, control, shame avoidance).
  - Active Tactics: mechanisms mapped as hypotheses (fogging, DARVO, jargon armor) — each with discriminating evidence, not verdicts.
  - Therapy-Language Hypothesis Test: every instance of self-regulation vocabulary goes through the `responsibility-obfuscation-probe` hypothesis protocol (H-obfuscation / H-genuine / H-both). No instance is called out as armor without discriminating evidence. "Insufficient evidence to distinguish" is an honest finding.
- Feeds: the kernel's **Decompose/Diverge** phases. Only material where H-obfuscation is supported by discriminating evidence is tagged **OBFUSCATION**; suspected-but-untested material stays **CLAIM** with a hypothesis marker, so the kernel's Takes are built on tested ground, not on pre-judgment.

### Stage 3 — The Furnace: Handoff (not a pipeline)

The Furnace no longer runs Diverge→Collide→Adjudicate→Refine→Surprise — that was the kernel wearing a costume. Its remaining job:

1. **Take seeds:** construct 2–3 divergent frame seeds from the Anvil's ground and the Hammer's stripped material — not full Takes, just the strongest coherent frames, clearly labeled as seeds.
2. **Direct feed:** inject the Anvil's held tensions, the Hammer's obfuscated objects (OBFUSCATION-tagged), and the Take seeds **directly into the kernel's Diverge phase**.
3. **Stand down:** Collide, Adjudicate, Refine, Surprise belong to the kernel. The overlay does not duplicate them.

## Overlay Contract

- **The kernel owns:** Diverge, Collide, Adjudicate/Refine, Surprise, the canonical state artifact, persistence.
- **The overlay owns:** pre-Diverge auditing (Anvil), evasion-hypothesis testing (Hammer), Take seeds (Furnace handoff).
- **The overlay emits:** a compact forge brief (frontmatter with `protocol:` and `lifecycle:` per the Phase 1.1 invariant) recording what was audited, which evasion hypotheses were tested and their support status, and what seeds were fed to the kernel. The kernel's state artifact remains the canonical record of the interrogation.
- **The overlay never:** runs collision, adjudication, refinement, or surprise extraction independently. If the kernel is not running, the overlay has nothing to attach to — it reports its brief and stops.

## Execution Disciplines (preserved from v1)

1. **HOLD CONTRADICTIONS LIVE:** state opposing facts in parallel non-subordinating sentences ("X is true. Y is also true."). BANNED: subordinating conjunctions ("but", "however", "which means") that quietly privilege one side.
2. **TIME-INDEXED PERSON-STATES:** people are not static; map state changes across time, never flatten a person to a single characterization.
3. **DETAIL VS CORE-CLAIM CORRECTIONS:** distinguish corrections of detail from changes to core claims. The latter is the signal.
4. **ISOLATE MOTIVE:** never supply unstated motives. Judge the artifact, not the actor.
5. **TEST JARGON CLAIMS:** vocabulary that may function as evasion — including therapy-speak — is run through the hypothesis protocol (H-obfuscation / H-genuine / H-both). Never pre-judge a category of language as armor.
6. **NO SOFTENING OR EVASION:** do not gentrify harmful actions, supply generous interpretations not offered by the source, or drop contradictions during restatements.

## Evidence Taxonomy (preserved from v1)

- FACT: directly established physical/historical data.
- OBSERVATION: reported or logged detail, unverified.
- CLAIM: asserted perspective or subjective positioning.
- OBFUSCATION: maneuver with discriminating evidence of responsibility-evasion (H-obfuscation supported). Suspected-but-untested material stays CLAIM with a hypothesis marker — never upgraded on category membership alone.
- INFERENCE: direct logical conclusion drawn from facts.
- ASSUMPTION: unsupported underlying premise.
- CONSTRAINT: hard boundary or limiting condition.
- UNKNOWN: critical missing variable.

## Forge Brief Template

```markdown
---
artifact: forge-brief
date: [YYYY-MM-DD]
protocol: [field-forge/version that produced this brief]
lifecycle: [INITIAL | ITERATIVE | FINAL]
---

# Forge Brief: [Field Name]

## Anvil — Audited Ground
- Held Tensions: [Fact A is true. Fact B is also true.]
- Person-State Sequence: [timestamp / person / state]
- Fact Modifications: [detail-corrections vs core-claim changes]

## Hammer — Tested Hypotheses
- Obfuscated-Object Hypothesis: [responsibility that may be dodged — support status: supported / contested / unsupported]
- Apparent Function: [what the evasion would achieve if real]
- Active Tactics: [fogging / DARVO / jargon armor — each with discriminating evidence]
- Therapy-Language Hypothesis Record: [per instance: H-obfuscation / H-genuine / H-both / insufficient evidence + discriminating evidence]

## Furnace — Seeds Fed to Kernel Diverge
- Take seed 1: [strongest coherent frame]
- Take seed 2: [strongest coherent frame]
- OBFUSCATION-tagged material: [what the kernel must not build on]
```
