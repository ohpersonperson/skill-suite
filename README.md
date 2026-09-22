# skill-suite

Ryan's canonical skill collection. **Public.**

## Quick start (5 minutes)

1. **Pick a skill from the table below.** Each skill is a standalone prompt-package that upgrades a model's behavior in one specific way — interrogation, execution discipline, memory, forensic auditing, etc.
2. **Open `skills/<skill-name>/SKILL.md`.** The frontmatter `description` tells you when to use it; the body is the full protocol. Load it into your model (paste it, or install it as a Claude skill) and invoke it with the trigger phrases listed there.
3. **Run the 5-minute path:** load `skills/ifs-interrogation/SKILL.md`, then type `interrogate [any situation with genuine contradictions]` and watch it Diverge → Collide → Refine into load-bearing Keys. That one run shows you how the whole family works.
4. **Check the boundary before reaching for more:** each skill's `description` also says what it is *not* for. When unsure, start with `ifs-interrogation` (one-pass default) or `flashy` (for "I keep abandoning this build").
5. **Big picture:** the long-term direction is a Cognitive Skill Runtime — IFS interrogation as the kernel, execution/procedure/verification as controllers, memdate as persistence. That canonical architecture spec is still being written; the skills below are the current working material.

## Layout

- `skills/` — official Claude-format versions of each skill.
- `skills.json` — machine-readable manifest of every skill (name, version, type, layer, status, lineage, evals).
- `lab/` — drafts, experiments, superseded versions, and non-skill material.
- `ports/` — adapted exports for the other five AIs (next project; currently a placeholder).

## Skills (11)

| Skill | What it does | Provenance (where it came from — not a dependency) |
|---|---|---|
| proofit | Locks down a multi-model workflow using only free, no-API services; eliminates decision fatigue across routing paths. | Working archive, 2026-08-23 (predecessor of this repo) |
| metacog | Metacognition as interrogation — kills weak reasoning before it hardens; single-agent and multi-agent debate patterns. | Working archive, 2026-08-23 (predecessor of this repo) |
| flashy | Persistent execution discipline against premature task abandonment on substantial builds. | Working archive, 2026-08-23 (predecessor of this repo) |
| ifs2-compressed-v21 | Provider-agnostic, one-pass interrogation of contradictory or uncertain fields. | Working archive, 2026-08-23 (predecessor of this repo) |
| forensic-situational-audit | Forensic audit of messy, high-stakes situations; holds contradictions, no narrative smoothing. | Working archive, 2026-08-23 (predecessor of this repo) |
| meminqu-memory-interrogation | Interactive interrogation for material per memory domain, captured via pure memdate CAPTURE. | Working archive, 2026-08-23 (predecessor of this repo) |
| memdate-v2 | Provider-agnostic file-based memory system: CAPTURE preserves raw records, DISTILL consolidates and regenerates the cross-domain index. | Drive Doc "memdate" (2026-09-07) — supersedes the archive's shorter copy |
| responsibility-obfuscation-probe | Dialogic dissection of evasive communication; flags therapy-speak and self-regulation claims as obfuscation. | Working archive, 2026-08-23 (predecessor of this repo) |
| ifs-proto | One-pass interrogation of contradictory fields; Field Forge Anvil/Hammer overlay is opt-in. | Drive `!Memory` build, 2026-09-20 — finished v1.0 skill package; engine lineage doc in `lab/ifs-proto-bench-capture-2026-09-17.md` |
| field-forge | Unified Dialectical Interrogation System: three-stage Anvil/Hammer/Furnace pipeline. | Drive Doc `field_forge_claude.md` (2026-09-15) |
| ifs-interrogation | Unified adversarial interrogation, one-pass default with a deep nine-stage run; synthesized v2.0 from all IFS material (Aug 11 zip, Aug 13 cross-model protocol, IFS-PROTO engine). | New build, 2026-09-20 |

*Note: the "Provenance" column records where each skill came from. Nothing in this column is a dependency — these skills have no runtime dependencies beyond a model that can read SKILL.md. The 2026-08-23 working archive predates this repo; its files are not present here.*

## Decisions log

- **2026-09-20:** Ryan approved the migration plan. Paragon held in `lab/` (FHK Paragon Spirit supersedes fhk-expert but stays out of `skills/` for now). IFS-PROTO app source parked in `lab/ifs-proto-app/`. New unified `ifs-interrogation` v2.0 synthesized from every bit of the IFS material. `ports/` is the next project. Repo made public the same day.
- **2026-09-21:** Phase 0 consolidation — added this README quick-start, replaced the old "Source" column (it listed archive provenance strings as if they were dependencies), added `skills.json` manifest, and applied the mechanical IFS fixes from the IFS-PROTO verification pass (protocol/engine-version + lifecycle fields in the v2.0 artifact frontmatter; loop-rule scoping between the one-pass path and the deep meta-cycle path). License choice, IFS lineage archive location, CRACKED semantics, and ports timing held for Ryan's call.
