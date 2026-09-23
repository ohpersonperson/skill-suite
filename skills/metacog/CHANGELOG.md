# Changelog — metacog

## 2026-09-23 — v2.0 (operational rewrite; Phase 2.1)

- Rebuilt from teaching essay to operational controller. The v1 skill taught metacognition (Plan→Monitor→Evaluate, self-collision, five-stage engine mapping); v2.0 executes it as a five-step sequence: **Trigger Thresholds → Strongest Countermodel → Load-Bearing Assumptions → Collision → Confidence Revision**.
- Added explicit trigger thresholds (stakes, confidence-without-evidence, contradiction present, premature convergence, explicit invocation) with a stand-down rule: no tripped threshold = no run.
- Added the collision record as the defined output (thresholds tripped, countermodel, assumption dispositions, confidence before→after, demotions, surprise check).
- Added the overlay contract: attaches at the IFS Collide→Refine boundary, runs post-Diverge/pre-Adjudicate on debate engines, or runs standalone. Metacog never originates analysis and never persists state — the host skill owns persistence.
- Preserved from v1: confidence ≠ correctness, steelman-only countermodels, no-evaluate-before-collide ordering, the surprise check as proof of real friction.
