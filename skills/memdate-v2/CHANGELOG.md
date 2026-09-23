# Changelog — memdate-v2

## 2026-09-23 — v2.1 (Phase 3)

- **CAPTURE/DISTILL isolation verified.** Audited both protocols against the isolation invariant (CAPTURE never synthesizes; DISTILL never touches raw.md; raw authoritative on conflict). Both hold by construction. Added an explicit isolation checklist that runs at the end of every CAPTURE and every DISTILL pass, so future edits can't silently reintroduce mixing.
- **Mechanical INDEX-cross-domain.md regeneration procedure.** The four required index sections (Entities → Domains, Dependencies, Open Questions, Hot Zones) now have a deterministic 7-step regeneration procedure: when it runs (after any full or multi-domain distill; single-domain distills skip with a note), collection order, cross-domain entity extraction rule, dependency-chain callouts, open-question prioritization by blast radius, the Hot Zone sweep, the write step with `protocol:`/`lifecycle:` frontmatter, and a verification pass (no orphan entities or questions). Added a freshness rule: consumers treat an index older than the latest full distill as stale.
- **Provenance frontmatter (Phase 1.1).** `distilled.md` files now carry mandatory `artifact:`, `domain:`, `date:`, `protocol:`, `lifecycle:` frontmatter. `raw.md` deliberately excluded — CAPTURE is an append-only evidence log and per-entry protocol metadata would pollute source fidelity.

## 2026-09-07 — v2.0 (canonical)

- Canonical memdate version (per 2026-09-20 audit resolution): newest Google Doc version, five domains (personal, fhk, tribunal, memory-system, misc), CAPTURE/DISTILL split, cross-domain index requirement.
