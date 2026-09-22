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
- `skills.json` — machine-readable manifest of every skill (name, version, type, layer, status, lineage, evals; superseded-lineage entries carry a `location` pointer).
- `lab/` — drafts, experiments, superseded versions, and non-skill material.
- `archive/ifs-lineage/` — retired IFS generations, frozen for provenance. See `archive/ifs-lineage/IFS-LINEAGE.md` for the family comparison table. Kept out of `lab/` so lab stays for live drafts only.
- `ports/` — adapted exports for the other five AIs (next project; currently a placeholder).
- `LICENSE` — MIT; the repo's license (chosen 2026-09-21, see decisions log).

## Skills (9 live + 2 archived)

*The two archived rows are retired IFS lineage, frozen in `archive/ifs-lineage/` for provenance only — not routable, not maintained.*

| Skill | What it does | Provenance (where it came from — not a dependency) |
|---|---|---|
| proofit | Locks down a multi-model workflow using only free, no-API services; eliminates decision fatigue across routing paths. | Working archive, 2026-08-23 (predecessor of this repo) |
| metacog | Metacognition as interrogation — kills weak reasoning before it hardens; single-agent and multi-agent debate patterns. | Working archive, 2026-08-23 (predecessor of this repo) |
| flashy | Persistent execution discipline against premature task abandonment on substantial builds. | Working archive, 2026-08-23 (predecessor of this repo) |
| ifs2-compressed-v21 *(archived)* | Provider-agnostic, one-pass interrogation of contradictory or uncertain fields. | Superseded lineage — frozen at `archive/ifs-lineage/ifs2-compressed-v21/` (2026-08-22 build; retired by unified v2.0) |
| forensic-situational-audit | Forensic audit of messy, high-stakes situations; holds contradictions, no narrative smoothing. | Working archive, 2026-08-23 (predecessor of this repo) |
| meminqu-memory-interrogation | Interactive interrogation for material per memory domain, captured via pure memdate CAPTURE. | Working archive, 2026-08-23 (predecessor of this repo) |
| memdate-v2 | Provider-agnostic file-based memory system: CAPTURE preserves raw records, DISTILL consolidates and regenerates the cross-domain index. | Drive Doc "memdate" (2026-09-07) — supersedes the archive's shorter copy |
| responsibility-obfuscation-probe | Dialogic dissection of evasive communication; flags therapy-speak and self-regulation claims as obfuscation. | Working archive, 2026-08-23 (predecessor of this repo) |
| ifs-proto *(archived)* | One-pass interrogation of contradictory fields; Field Forge Anvil/Hammer overlay is opt-in. | Superseded lineage — frozen at `archive/ifs-lineage/ifs-proto/` (v1.0, 2026-09-17; retired by unified v2.0). App source in `lab/ifs-proto-app/` |
| field-forge | Unified Dialectical Interrogation System: three-stage Anvil/Hammer/Furnace pipeline. | Drive Doc `field_forge_claude.md` (2026-09-15) |
| ifs-interrogation | Unified adversarial interrogation, one-pass default with a deep nine-stage run; synthesized v2.0 from all IFS material (Aug 11 zip, Aug 13 cross-model protocol, IFS-PROTO engine). | New build, 2026-09-20 |

*Note: the "Provenance" column records where each skill came from. Nothing in this column is a dependency — these skills have no runtime dependencies beyond a model that can read SKILL.md. The 2026-08-23 working archive predates this repo; its files are not present here.*

## Decisions log

- **2026-09-20:** Ryan approved the migration plan. Paragon held in `lab/` (FHK Paragon Spirit supersedes fhk-expert but stays out of `skills/` for now). IFS-PROTO app source parked in `lab/ifs-proto-app/`. New unified `ifs-interrogation` v2.0 synthesized from every bit of the IFS material. `ports/` is the next project. Repo made public the same day.
- **2026-09-21 (evening):** Ryan delegated two calls to Sansweet and both landed. **License — MIT** (`LICENSE` at repo root, Copyright 2026 Ryan Hitchcock / ohpersonperson): permissive is the right default for a collection of portable prompt-packages — zero friction for use inside any AI workflow, proprietary ones included — and Ryan can change it later. **IFS lineage archive — new top-level `archive/ifs-lineage/`:** `ifs-proto` and `ifs2-compressed-v21` moved out of `skills/` (both stay `superseded-lineage` in `skills.json`, now with `location` pointers), with a new `archive/ifs-lineage/IFS-LINEAGE.md` family comparison table covering every generation from the 2026-08-11 zip through unified v2.0. Rationale: `lab/` is for live drafts and experiments; `archive/` is for retired lineage — keeping dead history out of `lab/` preserves the approved skills/–lab/–ports/ split. CRACKED semantics and ports timing still held for Ryan.
