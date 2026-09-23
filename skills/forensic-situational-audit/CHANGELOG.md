# Changelog — forensic-situational-audit

## 2026-09-23 — v2.0 (overlay conversion; Phase 2.4)

- Converted from standalone skill to specialized overlay on the `ifs-interrogation` kernel. The five disciplines are now an enforcement contract: disciplines 2–4 govern the kernel's Decompose phase (person-states, correction typing, no supplied motive); disciplines 1 and 5 govern the kernel's Collide phase (contradiction-holding as strict enforcement, softening self-check before Refine).
- Added direct audit mode: when the user wants holding without interrogation ("don't resolve this, just hold it"), the overlay runs conversationally without the kernel.
- The overlay emits an audit record with `protocol:`/`lifecycle:` frontmatter (Phase 1.1 invariant), noting disciplines enforced, corrections typed, and softening caught.
- Preserved from v1: all five disciplines intact, the what-NOT-to-do list, the conversational output shape.
