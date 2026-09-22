---
name: ifs2-compressed-v21
description: "Provider-agnostic, one-pass interrogation of contradictory or uncertain fields."
---

IFS2 COMPRESSED v2.1

Provider-agnostic, one-pass interrogation of contradictory or uncertain fields.

Core: Confidence ≠ correctness. Interrogate the gap.

Operating limits: 2 Takes by default; 3 only when genuinely independent models exist. Fixed collisions. No looping, meta-cycle, or automatic expansion. Prefer the smallest output that preserves reasoning.

---

INVOKE

"interrogate [field]"
"/ifs"
"/ifs [field]"
"run IFS on [thing]"

---

EVIDENCE

Never silently upgrade evidence.

- FACT — directly established
- OBSERVATION — reported/logged, unverified
- CLAIM — actor/source assertion
- INFERENCE — logical conclusion
- ASSUMPTION — unsupported presumption
- HYPOTHESIS — proposed explanation
- REQUIREMENT — condition necessary for a model
- CONSTRAINT — limiting boundary
- DEPENDENCY — state-dependent element
- UNKNOWN — presently undetermined critical variable

Never fabricate facts, actors, events, motives, or certainty.

---

PRIOR STATE

If "ifs-state-[field].md" exists:

1. Load its Keys.
2. State: "Prior interrogation found. Loading Keys from [Date]."
3. Test every prior Key against new evidence.
4. Mark: "HELD | CRACKED | MODIFIED | SUPERSEDED | UNRESOLVED".
5. Add only genuinely new Keys.

---

ENGINE

1. DIVERGE

Generate 2 independent Takes. Add Take C only when a genuinely independent third model exists.

Each Take:

- uses available evidence;
- is internally coherent;
- makes its strongest case;
- avoids strawmen and premature consensus.

Target: 150–200 tokens each.

---

2. COLLIDE

Force the Takes into direct conflict.

- 2 Takes → A/B
- 3 Takes → A/B, A/C, B/C

For each collision identify:

1. contradiction;
2. required premise;
3. what breaks if the premises cannot coexist;
4. evidence that would discriminate between them.

Target: ~150 tokens/collision.

Never add collisions.

---

3. ADJUDICATE / REFINE

Discard unsupported reasoning. Extract 3–5 load-bearing Keys.

Each Key:

- Statement
- Classification: "ESTABLISHED | STRONGLY INFERRED | PLAUSIBLE | SPECULATIVE | UNRESOLVED"
- Evidence
- Confidence: "HIGH | MODERATE | LOW"
- Vulnerability
- Falsifier

Prefer fewer strong Keys.

Target: ~100 tokens/Key.

---

4. SURPRISE

Identify the strongest non-obvious result produced by the collision.

It must emerge from interaction between Takes and materially reframe the field.

If none exists:

No material Surprise identified.

Target: ~150 tokens.

---

5. CAPTURE

Emit a complete, self-contained Markdown state artifact.

Filename:

"ifs-state-[field-name].md"

Slug: lowercase; spaces → hyphens; remove punctuation; preserve meaningful terms; no date.

---

STATE ARTIFACT

# IFS STATE ARTIFACT: [Field]

## META
- Field: [Target]
- Date: [Timestamp]
- Protocol: IFS2-Compressed-v2.1
- Session: [Number]
- Status: [INITIAL / ITERATIVE / FINAL]

## 1. FIELD
- Objective: [Question]
- Scope: [Boundaries]

## 2. PRIOR STATE
- Reference: [None / Date]
- Key Evaluations: [HELD / CRACKED / MODIFIED / SUPERSEDED / UNRESOLVED]

## 3. EVIDENCE
- Facts: [...]
- Claims/Observations: [...]
- Unknowns/Dependencies: [...]

## 4. DIVERGE

### Take A — [Title]
[Strongest concise case]

### Take B — [Title]
[Strongest concise case]

### Take C — [Title]
[Only when required]

## 5. COLLIDE

### A vs B
[Contradiction + premise failure + discriminator]

### A vs C
[Only if C exists]

### B vs C
[Only if C exists]

## 6. REFINED KEYS

### Key 1
- Statement:
- Classification:
- Evidence:
- Confidence:
- Vulnerability:
- Falsifier:

### Key 2
[...]

## 7. SURPRISE
[Emergent insight or "No material Surprise identified."]

## 8. SYNTHESIS
- Established Ground:
- Surviving Model:
- Remaining Uncertainties:
- Primary Next Target:

---

COMPLETION RULES

Before emitting the artifact:

- 2–3 Takes completed.
- Every required collision completed exactly once.
- Every collision contains genuine tension.
- Prior Keys tested when applicable.
- 3–5 Keys extracted.
- Surprise identified or explicitly absent.
- Synthesis reflects surviving evidence.
- Artifact is complete and self-contained.
- No TODOs, placeholders, fabricated facts, or unsupported certainty.
- No motive attribution without evidence.
- No second pass.

If unresolved, record it under Remaining Uncertainties and stop.

Output economy: Compress aggressively. Do not repeat rules, evidence, or conclusions merely for completeness. The state artifact must preserve load-bearing information, not explanatory prose.

---

TOKEN TARGET

Component| Target
Takes| 300–600
Collisions| 150–450
Keys| 300–500
Surprise| ~150
Capture/Synthesis| ~200
Typical total| ~1,100–1,900

The target is an optimization constraint, not a tokenizer-level guarantee. If the field is simple, output substantially less.

Hard behavioral constraint: complete the interrogation in one pass. Unresolved questions become "Remaining Uncertainties" and "Primary Next Target"; they do not trigger another pass.

---

PRINCIPLE

Reason deeply. Preserve only what carries the reasoning forward.
