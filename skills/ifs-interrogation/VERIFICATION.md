# Verification report — ifs-interrogation v2.0 vs IFS-PROTO v1.0 engine

**Date:** 2026-09-21
**Auditor:** Sansweet (automated line-by-line audit + executed evals)
**Status:** Findings only. Neither the skill nor the engine files were modified.

## What was compared

**Skill under test:** `skills/ifs-interrogation/` v2.0.1 in skill-suite (`github.com/ohpersonperson/skill-suite`, commit at audit time on `main`)

- `SKILL.md` (v2.0.1)
- `CHANGELOG.md`
- `references/INDEX.md`, `references/evidence-taxonomy.md`, `references/state-artifact.md`, `references/prior-state.md`, `references/overlay-forge.md`, `references/modes.md`, `references/worked-examples.md`
- `evals/evals.json`, `evals/triggers.json`

**Engine baseline:** IFS-PROTO v1.0 from `ifs-proto-build.zip` (Google Drive, uploaded 2026-09-20 03:50 EDT; re-downloaded for this audit)

- `src/lib/ifs/protocol.ts` (`PROTOCOL_VERSION = "IFS-Proto-v1.0"`, STEPS, LINEAGE, SYSTEM_PROMPT)
- `src/lib/ifs/interrogate.ts` (read only — not loadable here; imports `@tanstack/react-start` + `zod`, requires an xAI API key for live runs)
- `src/lib/ifs/skill-text.ts` (v1.0 packaged skill text: SKILL_MD, EVALS_JSON, TRIGGERS_JSON, reference docs)
- `src/lib/ifs/markdown.ts` (`artifactToMarkdown`, filename/slug rules)
- `src/lib/ifs/store.ts` (bench state; overlay default `false`)
- `src/lib/ifs/types.ts` (EVIDENCE_TAGS, KEY_CLASSES, CONFIDENCES, PRIOR_STATUSES, Artifact schema)
- `src/lib/ifs/sample.ts` (SAMPLE_FIELD + baked SAMPLE_ARTIFACT reference output)
- v1.0 skill package: `public/skill/ifs-proto/SKILL.md`, `CHANGELOG.md`, `evals/evals.json`, `evals/triggers.json`

**Not available:** the file listed in the task brief as `# IFS‑PROTO.txt` was not found in the zip, the repo (`lab/ifs-proto-app/`), or anywhere else checked. Everything else listed was present.

## Section-by-section audit

Ratings: **MATCH** = same rule in both; **PARTIAL** = same concept, material difference; **MISMATCH** = absent from the engine (extensions are flagged as such, not as failures).

| # | v2.0 skill element | Rating | Engine evidence |
|---|---|---|---|
| 1 | Five-phase default one-pass | **MATCH** | `protocol.ts` STEPS: identify → diverge → collide → refine → capture; SYSTEM_PROMPT "run internally, one pass, no looping". v2.0 phases map 1:1 with the same names and order. |
| 2 | Nine-stage deep run | **MISMATCH** (intentional extension) | Not present in any engine file. The engine is one-pass only ("Unresolved questions ... do not trigger another pass"). The nine-stage run (IDENTIFY…CAPTURE STATE with explicit QUESTION and TEST) comes from the Aug 13 cross-model protocol / IFS2 Canonical lineage, as the v2.0 CHANGELOG itself states. |
| 3 | Modes: Standard, Systemic, Stress-Test, Tribunal | **MISMATCH** (intentional extension) | No mode dispatch exists in `interrogate.ts` (inputs are field + overlay + prior only); the v1.0 package has no modes. Modes come from the IFS2 Canonical / Field Forge lineage. |
| 4 | Field Forge opt-in overlay, off by default | **MATCH** | `protocol.ts`: overlay gates the probe ("If overlay is false, omit probe entirely"); SYSTEM_PROMPT restricts OBFUSCATION to overlay-on; `interrogate.ts`: `overlay: z.boolean()`, probe suppressed when false; `store.ts` default `false`; `markdown.ts` renders probe only when present; v1.0 SKILL_MD "Default is overlay off". |
| 5 | Two Takes default, third only if genuinely independent | **MATCH** | Verbatim across `protocol.ts` Diverge brief, SYSTEM_PROMPT ("2 Takes by default; Take C only if a genuinely independent third model exists"), `interrogate.ts` normalize, and v2.0 SKILL.md. |
| 6 | Required pairwise collisions | **MATCH** | SYSTEM_PROMPT: "required pairs only (A/B; A/C and B/C iff C exists). Never add extra collisions." `interrogate.ts` filters collisions to the valid pairs. v2.0 repeats the rule word-for-word. |
| 7 | 3–5 load-bearing Keys | **MATCH** (nuance) | Both say 3–5. Caveat: the engine enforces the ceiling in code (`keys.slice(0, 5)` in `normalize`) but the floor of 3 is prompt-enforced only. "Discarded, not softened" is prompt discipline in both, not code. |
| 8 | Prior-Key states HELD / CRACKED / MODIFIED / SUPERSEDED / UNRESOLVED | **PARTIAL** | Same five names and mechanics everywhere (`types.ts` PRIOR_STATUSES, SYSTEM_PROMPT, v1.0 PRIOR_REF, v2.0 `prior-state.md`): test every Key, session + 1, never patch in place, add only new Keys. But **CRACKED's definition drifted**: v1.0 says "damaged, not yet replaced" (Key damaged but still standing until replaced); v2.0 says "new evidence materially contradicts the Key. The Key is invalid" (Key dead). Same label, sharper semantics. |
| 9 | "No material Surprise identified." fallback | **MATCH** | v1.0 SKILL_MD + ARTIFACT_REF use the exact sentence; `markdown.ts` renders it when `surprise` is null (verified live); v2.0 `state-artifact.md` repeats it. The model-facing SYSTEM_PROMPT uses `surprise = null`, which is the same rule at a different layer. |
| 10 | Portable Markdown state artifact | **PARTIAL** | Core contract matches: self-contained, portable across models, `ifs-state-[field-name].md` filename, slug rules (lowercase, spaces→hyphens, strip punctuation, no date in filename — verified live via `artifactFilename`), required sections incl. prior-state evals, Takes & Collisions, Refined Keys, Surprise, Synthesis. But v2.0's schema is a **superset with no exact engine counterpart**: YAML frontmatter (`artifact`, `field`, `interrogation`, `date`, `field_type`, `depth`, `trigger_context`, `status`, `persistence`, `canonical`), `field_type` (Analytical/Narrative/Systemic/Conceptual/Mixed) and `depth` (one-pass/deep) fields, restructured numbered sections, and "no interrogation number in the name" (v1.0 only said no date). Notably, the v2.0 frontmatter has **no protocol-version field** — the engine's `Artifact.meta.protocol = "IFS-Proto-v1.0"` has no counterpart, so a v2.0 artifact no longer records which engine version produced it. |

### Supporting matches (all verified in both)

- Evidence tags: 11/11 identical, same order, OBFUSCATION overlay-only — **MATCH**.
- Key classifications: ESTABLISHED / STRONGLY INFERRED / PLAUSIBLE / SPECULATIVE / UNRESOLVED — **MATCH**.
- Key fields: statement / classification / evidence / confidence / vulnerability / falsifier — **MATCH** (`types.ts` RefinedKey).
- Collision fields: contradiction / premiseFailure / discriminator — **MATCH**.
- Compression discipline (cut restated evidence; hold contradictions in parallel non-subordinating sentences; no "but/however/which means") — near-identical wording — **MATCH**.
- Persistence boundary: model ≠ persistence layer; memdate capture-only, no distill — **MATCH**.
- Token budgets per phase (150–200/Take, ~150/collision, ~100/Key) — **extension from IFS2 Compressed lineage**, not in the engine (engine uses a single 3500 max_tokens cap).

## Eval outcomes (executed 2026-09-21)

The v1.0 `evals.json`/`triggers.json` evals are prompt-behavior assertions, not runnable unit tests. They were executed as follows:

**Executable harness** (`run_evals.mjs`, kept in scratch, not in this repo): loaded the real engine modules (`types.ts`, `sample.ts`, `protocol.ts`, `markdown.ts`) via Node 24's native TS support and validated the engine's baked reference artifact (`SAMPLE_ARTIFACT` — the two-contradictory-accounts field with no decision log) against the eval assertions plus structural invariants. **Result: 20/20 checks passed.** `interrogate.ts` could not be loaded (imports `@tanstack/react-start` + `zod`, not installed); its session-increment and collision-filter logic was verified by reading the source.

| Eval (v1.0 set) | Result | How executed |
|---|---|---|
| `two_takes_one_collision` | **PASS (4/4 assertions)** | Against the baked `SAMPLE_ARTIFACT`: exactly 2 Takes (A, B); only the A/B collision; all collisions carry contradiction/premise-failure/discriminator; 4 Keys with all six fields; surviving model preserves two delay vectors instead of inventing one root cause. |
| `prior_keys_tested` | **PASS (static conformance)** | Five statuses exist in `types.ts`; SYSTEM_PROMPT marks each prior Key with them; prior state is re-emitted, never patched (v1.0 PRIOR_REF + v2.0 prior-state.md both say so); `normalize()` does `session = prior.session + 1` (source-read, module not loadable). A live re-run needs a model + xAI key — not available in this environment. |
| `no_overlay_on_systems_field` | **PASS (static conformance)** | "If overlay is false, omit probe entirely" in SYSTEM_PROMPT; `markdown.ts` omits the PROBE section when no probe (verified live); fabrication/motive ban present in SYSTEM_PROMPT. |
| `overlay_on_evasion` | **PASS (static conformance)** | `ProbeOverlay` type names `obfuscatedObject`; SYSTEM_PROMPT requires the probe fields; overlay "feeds" Diverge/Collide rather than replacing them. |

**Trigger coverage** (v1.0 `triggers.json` vs the v2.0 skill): 5 of 6 v1.0 trigger cases map to v2.0 triggers (`interrogate this field`, `/ifs the launch delay`, `run IFS on the vendor email`, both negatives). `ifs-proto this thread` has **no v2.0 equivalent** — the v2.0 `triggers.json` deliberately drops the `ifs-proto`/`ifsproto`/`/ifs-proto` invocations along with the skill rename, and adds `/ifs`, `ifs deep dive`, `stress-test`, `collide takes`. Drift by design, not a regression — but anything still invoking the old names won't fire.

**The skill's two new eval cases** (v2.0 `evals.json` only, not in the v1.0 set):
- `deep_run_has_question_and_test` — v2.0-only (engine has no deep run; N/A against engine). `references/modes.md` contains explicit QUESTION and TEST stages as specified — static PASS against skill content.
- `evidence_discipline` — `references/evidence-taxonomy.md` covers the upgrade bans and UNKNOWN-for-gaps rules — static PASS against skill content.

**NOT-RUN:** no eval was executed against a live model. The engine's `interrogateField` needs an xAI API key (Grok), which is not present in this environment, and `interrogate.ts` can't even be imported here (missing `@tanstack/react-start`/`zod`). Behavioral assertions (what a model actually generates for a fresh field) remain unverified until a keyed run.

## Concrete fix list

1. **Reconcile the CRACKED definition.** v1.0: "damaged, not yet replaced." v2.0 `prior-state.md`: "new evidence materially contradicts the Key. The Key is invalid." Pick the canonical semantics and align both (or record the change as intentional in the CHANGELOG).
2. **Restore a protocol-version field in the v2.0 state artifact.** The engine's `Artifact.meta.protocol` (`"IFS-Proto-v1.0"`) has no counterpart in the v2.0 frontmatter. Add e.g. `protocol: ifs-interrogation/2.0 (+ engine IFS-Proto-v1.0)` so artifacts stay traceable to what produced them.
3. **Label the deep run and modes as non-engine extensions.** The CHANGELOG does this for the deep run ("from the Aug 13 cross-model protocol and IFS2 Canonical"); the four operational modes carry no equivalent lineage note — add one so a future reader doesn't hunt the engine for them.
4. **Clarify key-floor enforcement.** The engine caps Keys at 5 in code but the minimum of 3 is prompt-only. State this in the skill (it's inherited behavior, not a bug).
5. **Fix the v1.0 lineage date.** The v1.0 package's own CHANGELOG dates v1.0 to **2026-09-16**; the v2.0 CHANGELOG lineage says "2026-09-17 — IFS-PROTO v1.0 bench + packaged skill". Clarify: v1.0 shipped Sep 16; the bench capture ran Sep 17.
6. **Resolve the `# IFS‑PROTO.txt` reference.** It was expected as an engine file but exists in neither the zip nor the repo. Confirm whether it lives elsewhere or drop the reference.
7. **Consider a legacy alias trigger.** The old `ifs-proto`/`ifsproto`/`/ifs-proto` invocations were dropped with the rename. If any automation or habit still uses them, add them back as aliases (or confirm the drop is final).
8. **Record eval results.** This skill now has an `evals/` directory but no results file. Filing future runs (e.g. this report's harness output) next to the evals would close the "evals never run" gap permanently.

## Bottom line

The v2.0 skill is a **faithful carrier of the IFS-PROTO v1.0 one-pass engine**: the five phases, two-Takes default, required collisions, 3–5 Keys, five prior-Key states, the opt-in Forge overlay, evidence tags, key/collision field shapes, compression discipline, and the persistence boundary all match the engine files, and the engine's own baked reference artifact passes every applicable eval assertion (20/20 harness checks). The deep nine-stage run and the four operational modes are **deliberate extensions from the older lineage** (Aug 13 protocol / IFS2 Canonical), not engine features — they don't contradict the engine, but they don't come from it either. The two real fidelity gaps are small: the sharpened CRACKED definition and the missing protocol-version field in the v2.0 artifact schema. No live-model eval was possible in this environment (no xAI key).
