# Changelog — ifs-interrogation

## 2026-09-23 — v2.0.3

- **CRACKED reconciliation (IFS-PROTO verification fix #1; independently confirmed by Gemini audit).** Restored the Aug 13 canonical wording — "new evidence materially contradicts the Key" — and pinned explicit operational semantics: a CRACKED Key no longer carries load in the next iteration (do not use it as a premise), but it stays in the artifact as a visible failure record; never delete a CRACKED Key. The v2.0 "The Key is invalid" qualifier had no canonical source; the v1.0 "damaged, not yet replaced" was Grok's softening of the protocol. Canonical wording now pinned in `references/prior-state.md`.
- **Dropped the `# IFS‑PROTO.txt` reference (IFS-PROTO verification fix #6).** The file was expected per the audit brief but confirmed absent everywhere — workspace, repo, both audit-package zips, the ifs-proto build zip. No live skill content ever depended on it, so this was provenance debt, not a runtime break. Reference recorded as dropped in VERIFICATION.md.

## 2026-09-21 — v2.0.2

- **Artifact provenance fields (IFS-PROTO verification gaps 8/9).** Added `protocol:` (skill + engine versions that produced the artifact) and `lifecycle:` (INITIAL | ITERATIVE | FINAL; FINAL only if the field is resolved enough that the next target is idle) to the state-artifact frontmatter, Interrogation Metadata, and State Status. Artifacts now record what produced them and their session lifecycle.
- **Loop-scope rule (IFS-PROTO verification C3).** Scoped the two loop rules explicitly: the one-pass path never loops (engine hard limit; unresolved questions go to remainingUncertainties / primaryNextTarget); the meta-cycle's "Iterate or Capture" loop applies only to the deep/Systemic path. No rule change — this disambiguates what already held.

## 2026-09-20 — v2.0.1

- Defined the acronym: **IFS = Iterative Field Synthesis** (top of SKILL.md).
- Added `references/worked-examples.md`: five illustrative runs covering every operational mode — Standard one-pass (Corner Books), Systemic deep run with the 8-step meta-cycle (Riverside Community Garden), Stress-Test session 2 on the Corner Books prior state, Tribunal adjudication (Rapid Bloom spread vs FHK v5.0), and Standard with the Forge overlay (interpersonal evasion). Fields are constructed for teaching, not real findings.

## 2026-09-20 — v2.0 (unified)

New skill synthesized from every IFS artifact on file. One engine, two depths.

- **One-pass (default):** the compressed five-phase run — Identify & Decompose → Diverge → Collide → Refine → Surprise + Synthesis + Capture. Descends from IFS2 Compressed v2.1 and IFS-PROTO v1.0: 2 Takes by default, fixed collisions, token targets, output economy, no second pass.
- **Deep run:** the full nine-stage protocol — IDENTIFY, DECOMPOSE, QUESTION, TEST, COLLIDE, REFINE, SURPRISE, SYNTHESIZE, CAPTURE STATE — from the Aug 13 cross-model protocol and IFS2 Canonical. QUESTION and TEST are explicit stages. 8-step meta-execution cycle and four operational modes (Standard / Systemic / Stress-Test / Tribunal) included.
- **Kept from the Aug 11 original:** the Bloom, inviolable constraints, failure modes, trigger phrases, cross-session state persistence.
- **Kept from the protocol:** persistence boundary (model ≠ persistence layer), 10-tier evidence taxonomy, prior-state protocol with HELD / CRACKED / MODIFIED / SUPERSEDED / UNRESOLVED, historical integrity, canonical state schema, safety of inference, non-failure rule.
- **Kept from IFS-PROTO v1.0:** compression discipline (cut restated evidence; hold contradictions live in parallel non-subordinating sentences), Field Forge Anvil/Hammer as opt-in overlay, OBFUSCATION evidence tag, memdate capture-only handoff, evals + triggers packaging.
- **Kept from Field Forge v1.0:** execution disciplines (time-indexed person-states, detail vs core-claim corrections, isolate motive, strip jargon armor, no softening).
- Canonical state filename remains `ifs-state-[field-name].md`, portable across models.

## Lineage (superseded sources, preserved in lab/)

- 2026-08-11 — ifs-interrogation.skill.zip: five-stage Claude skill (Diverge→Collide→Adjudicate→Refine→Surprise).
- 2026-08-13 — IFS-INTERROGATION-PROTOCOL.md: canonical cross-model nine-stage protocol.
- 2026-08-19 — ifs2-canonical.md: nine-stage engine + meta-cycle + modes.
- 2026-08-22 — Ifs2.1.zip / ifs2-compressed-v21: one-pass compressed engine, token targets.
- 2026-09-16 — IFS-PROTO v0.1 (Copilot): five-step merge of IFS2 Canonical + IFS2.1 Compressed.
- 2026-09-17 — IFS-PROTO v1.0 bench + packaged skill (Grok session): SKILL.md, CHANGELOG, evals, references, opt-in Field Forge overlay.
