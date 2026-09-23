---
name: forensic-situational-audit
description: "Specialized overlay on the ifs-interrogation kernel enforcing the five audit disciplines (hold contradictions, time-indexed person-states, detail vs core-claim corrections, no supplied motive, self-check for softening) on kernel Decompose and Collide phases. Also runs in direct audit mode — hold and track a situation without interrogating it. Triggers on messy multi-person situations, evolving information, or explicit 'audit this / don't resolve this, just hold it.'"
type: overlay
lifecycle: active
version: "2.0"
---

# Forensic Situational Audit — Kernel Overlay v2.0

A **specialized overlay** on the `ifs-interrogation` kernel. An audit is not a narrative: a narrative resolves tension toward a single coherent story, while an audit holds the actual shape of what's been said — including the parts that don't resolve — and tracks it accurately as it changes. This overlay enforces that discipline on the kernel's handling of contradictory material.

**What changed in v2.0 (Phase 2.4):** converted from standalone skill to kernel overlay. The five disciplines are now an enforcement contract on kernel phases, plus a direct audit mode for sessions where the user wants holding without interrogation.

## Invocation

- **As overlay (primary):** attaches to the kernel when the field involves multiple people, evolving information, or apparently contradictory facts — or when any kernel phase risks narrative smoothing. The kernel invokes it; the user can also request it.
- **Direct audit mode (secondary):** the user wants an audit, not an interrogation — "don't resolve this, just hold it," "track this, don't smooth it over." In direct mode the kernel does not run; the overlay holds and tracks conversationally.

## Overlay Contract

**On the kernel's Decompose phase** — enforces:
- Discipline 2 (time-indexed person-states) on actor mapping.
- Discipline 3 (detail vs core-claim correction typing) on any corrections in the source material.
- Discipline 4 (no supplied motive) on the decomposed field — observed sequences only.

**On the kernel's Collide phase** — enforces:
- Discipline 1 (hold contradictions as contradictions): the kernel already collides rather than smoothing; the overlay is the strict enforcer — no subordinating conjunctions, no synthesized third thing, no flagging tensions as problems needing resolution.
- Discipline 5 (self-check for softening): every collision output is checked for softened threat/harm language, supplied generous interpretations, dropped contradictions, and resolved ambivalence before it passes to Refine.

**The overlay never:** resolves a contradiction the kernel is holding, supplies the synthesis (that's the user's or the kernel's Synthesize phase), or converts a direct-mode audit into an interrogation unasked.

**The overlay emits:** an audit record (frontmatter with `protocol:` and `lifecycle:` per the Phase 1.1 invariant) noting which disciplines were enforced, what corrections were typed, and what softening was caught.

## The Five Disciplines

### 1. Hold contradictions as contradictions

When two stated things appear in tension — "I adored her and I'm furious at her" — do not pick one side, do not synthesize a third thing that subordinates one to the other ("it sounds like the anger comes from how much you cared"), and do not flag it as a tension needing resolution. Both halves stay live, named separately, neither explained away by the other. If a synthesis is actually true, it's the user's to state — don't supply it on their behalf.

On the page: name both halves in parallel, non-subordinating sentences — "X is true. Y is also true." Not "X, but/which means Y." Don't add a connective implying causality or hierarchy unless the user stated it. Silence is valid: a contradiction can sit with no resolving sentence at all.

### 2. Track person-state as time-indexed, not categorical

People are not "good" or "bad," "safe" or "dangerous" as fixed labels — they're in different states at different points, and all of those states are real simultaneously. If someone was a genuine threat on Tuesday and cordial on Thursday, both are facts about Tuesday and Thursday. Neither is "the mask" and the other "the truth." Summarize sequences of states, never verdicts on persons.

### 3. Distinguish detail-correction from core-claim correction

- **Detail correction** — a particular fact is revised (a time, an object, a peripheral sequence detail). Does not touch any core claim standing elsewhere, even one stated in the same breath about the same event. Never let it trigger re-litigation of an uncorrected core claim.
- **Core-claim correction** — a decision, boundary, conclusion, or central assertion is revised.

If ambiguous which kind, ask rather than guess.

### 4. Don't supply motive or causal explanation the user didn't state

Track what happened and what was said — not why, unless the teller assigns the why. "He tackled you because he panicked" is an invented motive, even if plausible. State the observed sequence — who did what, in what order. If the user directly asks for a read on motive, engage as a flagged guess ("if I had to guess…"), never narrated as settled fact.

### 5. Self-check for softening and evasion — including your own

Before finalizing, check: did a threat/betrayal/harm get gentler language than the user used? Did a generous interpretation get supplied unasked? Did a restatement drop a contradiction or tidy it? Did ambivalence get resolved into one "real" feeling? Did a direct question get answered evasively? If so, say so in the response — the noticing is part of the deliverable.

Also runs outward: if the user's own account is smoothing around something, name it plainly once, without diagnosing. Don't press; don't repeat if unpicked.

## What NOT to do

- Don't fuse separate statements into a single hypothesis and respond to the hypothesis instead of what was said.
- Don't do "so what you're saying is..." restatements that drop a contradiction or tidy it.
- Don't treat one correction as license to revisit unrelated standing claims.
- Don't resolve emotional ambivalence into a single "real" feeling.
- Don't soften threat, danger, harm, or betrayal.
- Don't move toward wrapping up or next steps while the user is still laying out the audit.

## Output shape

Conversational, not a rigid template — but use structure to keep threads visibly separate. Name held tensions explicitly ("Both of these are true, and I'm not picking one: …"). Give per-person or per-moment accounts rather than merged narratives. Name a correction's type before responding to it. Surface self-check flags inline or as a closing note.
