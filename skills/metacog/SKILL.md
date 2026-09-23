---
name: metacog
description: "Operational metacognitive controller: interrogates reasoning before it hardens into false confidence. Five-step sequence — Trigger Thresholds → Strongest Countermodel → Load-Bearing Assumptions → Collision → Confidence Revision. Cross-cutting: invoke as an overlay on other skills or standalone when reasoning needs pressure-testing. Never a primary route."
type: controller
lifecycle: active
version: "2.0"
---

# METACOG — Operational Controller v2.0

Metacognition as **interrogation, not supervision**. This skill is a controller: it takes a reasoning-in-progress as input and returns a collision record with revised confidence. It does not teach metacognition; it executes it.

**Layer:** controller. **Cross-cutting:** invocable as an overlay on other components (IFS kernel, debate engines, single-agent reasoning). **Never a primary route** — metacog does not originate analysis, it pressure-tests analysis that exists.

**Core invariant:** confidence and correctness are different variables. This controller interrogates the gap between them.

## The Sequence

Execute all five steps in order. Do not skip. Do not reorder — evaluating before colliding is the most common failure mode (you polish claims that should have died).

### Step 1 — Trigger Thresholds

Evaluate whether metacog should fire at all. A controller that always fires is noise. Fire when **any** threshold trips:

- **Stakes:** the conclusion drives a hard-to-reverse decision or a high-consequence claim.
- **Confidence without evidence:** confidence is stated or implied at a level the evidence does not support.
- **Contradiction present:** opposing evidence or a credible counter-take exists and has not been collided.
- **Premature convergence:** reasoning converged fast, a single take survived unchallenged, or no alternative was generated and rejected.
- **Explicit invocation:** the user asks to stress-test, check reasoning, or run metacog.

If **no** threshold trips: stand down. Report "no thresholds tripped" and do nothing further. Standing down is a valid output.

### Step 2 — Strongest Countermodel

Build the strongest internally-coherent case **against** the current conclusion.

- Steelman only. No strawmen, no weak versions, no "someone might disagree."
- It must be specific: named premises, named evidence, named mechanism.
- If you cannot build a strong countermodel, say so — that is itself a finding (the conclusion may be unopposed because the field is thin, not because the conclusion is strong).

### Step 3 — Load-Bearing Assumptions

List the assumptions the current conclusion depends on. For each, mark:

- **Load-bearing:** if this assumption is false, the conclusion falls.
- **Structural:** supports the conclusion but the conclusion survives without it.

Only load-bearing assumptions go to collision. Everything else is context.

### Step 4 — Collision

Collide the countermodel against each load-bearing assumption, one at a time.

- State the assumption, the countermodel's attack, and the result: **survives / weakened / broken**.
- Hold contradictions live in parallel non-subordinating sentences. No narrative smoothing ("X is true. Y is also true." — never "X, however Y").
- **Surprise check:** if the collision produced nothing no single side contained alone, it was not a real collision — run it again, harder. Emergence is the proof of friction.

### Step 5 — Confidence Revision

Revise confidence based on what survived.

- Report **confidence before → after**, per load-bearing assumption and overall. The delta is the output, not just the new number.
- A broken load-bearing assumption does not merely lower confidence — it demotes the conclusion to a hypothesis pending new evidence.
- Distinguish: "I am less confident" (self-report) from "the assumption broke under the countermodel" (finding). Report findings.

## Output: Collision Record

Every run produces a compact record:

```
Trigger thresholds tripped: [list]
Countermodel: [strongest opposing case, specific]
Load-bearing assumptions:
  - [assumption] → [survives / weakened / broken]
Confidence: [before] → [after]
Demotions: [conclusions demoted to hypotheses, if any]
Surprise: [what the collision produced that neither side contained, or "none — collision was shallow"]
```

## Overlay Contract

When invoked as an overlay on another skill:

- **On the IFS kernel:** metacog attaches at the Collide → Refine boundary. IFS supplies Takes and collisions; metacog supplies the countermodel discipline and the confidence delta. It does not replace IFS adjudication.
- **On debate engines:** metacog runs after Diverge, before Adjudicate — it is the strongest-countermodel generator the adjudicator needs.
- **Standalone:** run the five steps directly on the reasoning in front of you.

In all modes: metacog pressure-tests. It never originates the analysis, never supplies the domain evidence, and never persists state — the host skill owns persistence.

## Failure Modes

- **Firing without a tripped threshold:** noise. Stand down instead.
- **Strawmanning the countermodel:** the collision is theater. If the countermodel is weak, the confidence revision is invalid.
- **Colliding non-load-bearing assumptions:** motion without effect. Only load-bearing assumptions change conclusions.
- **Evaluating before colliding:** polishing claims that should have died. Order is load-bearing.
- **Confidence revision as self-report:** "I feel less sure" without a broken assumption is not a finding.
