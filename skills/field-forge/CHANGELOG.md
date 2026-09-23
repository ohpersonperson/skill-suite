# Changelog — field-forge

## 2026-09-23 — v2.0 (overlay conversion; Phase 2.2)

- Converted from standalone three-stage pipeline to opt-in overlay on the `ifs-interrogation` kernel. The v1 Furnace stage duplicated the kernel's Diverge→Collide→Adjudicate→Refine→Surprise; that duplication is retired. The kernel now owns everything from Diverge onward.
- The Anvil (ground mapping) and Hammer (armor stripping) survive as the overlay's unique machinery, feeding the kernel's Decompose/Diverge phases as pre-audited ground with OBFUSCATION-tagged material.
- The Furnace is now the handoff point: it produces Take seeds (not full Takes) and injects Anvil/Hammer outputs directly into the kernel's Diverge phase, then stands down.
- Added the overlay contract: invocation conditions (opt-in, never default), ownership split (kernel owns collision through surprise + canonical artifact; overlay owns pre-Diverge preparation), and the forge brief as the overlay's compact output.
- Preserved from v1: all six execution disciplines, the evidence taxonomy (including the OBFUSCATION tag), the Anvil/Hammer stage definitions.

## 2026-09-23 — v1.1 (Phase 1.1)

- State artifacts and the forge brief carry `protocol:`/`lifecycle:` frontmatter provenance.
