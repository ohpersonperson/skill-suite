# IFS lineage — what became what, and why it retired

Every superseded IFS generation lives here, frozen in place. None of them is
routable or maintained. The canonical IFS is
[`../../skills/ifs-interrogation/`](../../skills/ifs-interrogation/) — v2.0,
unified from all of this material.

## Family comparison table

| Generation | When | What it was | What it contributed | Why it's retired | Superseded by |
|---|---|---|---|---|---|
| `ifs-interrogation.skill.zip` | 2026-08-11 | The original IFS skill package (first-generation interrogation skill). | Core interrogation protocol: decompose → preserve distinctions → diverge → collide → extract load-bearing structure. | Pre-canonical; each later generation restated it more precisely. | IFS2 Compressed, then unified `ifs-interrogation` v2.0 |
| IFS-INTERROGATION-PROTOCOL.md | 2026-08-13 | Cross-model protocol document (provider-agnostic one-pass spec). | Provider-agnostic framing; one-pass discipline; evidence-tagging conventions. | Documented, not executable as a skill; content folded into the compressed builds. | IFS2 Canonical, then `ifs-interrogation` v2.0 |
| IFS2 Canonical | 2026-08-19 | The full-length canonical protocol. | The complete interrogation cycle; the nine-stage deep run that survives in v2.0's deep mode. | Too long to invoke reliably as a single skill body. | `ifs2-compressed-v21` (2026-08-22) |
| `ifs2-compressed-v21` | 2026-08-22 | Compressed one-pass interrogation with explicit token targets; fixed collisions; no looping or meta-cycle. | Token-budgeted compression discipline; the no-loop invariant; portable one-pass completion rules. | Compressed away lineage detail; one branch among several that v2.0 unified. | `ifs-interrogation` v2.0 |
| IFS-PROTO v0.1 | 2026-09-16 | Copilot prototype — five-step merge of IFS2 Canonical + IFS2.1 Compressed ("not quite IFS": the silent 8-step loop was removed; collision made explicit). | 5-step engine (Identify, Diverge, Collide, Refine, Capture); 10-tier evidence; 2–3 Takes; Keys with falsifiers. | Prototype; promoted into the packaged v1.0 skill. | IFS-PROTO v1.0 |
| IFS-PROTO v1.0 | 2026-09-17 | Packaged skill from the Grok bench session: engine `IFS-Proto-v1.0`, evals, triggers, changelog; opt-in Field Forge Anvil/Hammer overlay. | Prior-state key testing; light compression; discriminators first-class on every collision; Primary Next Target seeding; evals (`evals/evals.json`, `evals/triggers.json`); Field Forge as an *opt-in* overlay (off by default). App source lives in `../../lab/ifs-proto-app/`. | Folded wholesale into the unified build; the v2.0 artifact carries its protocol/engine-version stamping plus lifecycle and loop-rule scoping (from the 2026-09-21 IFS-PROTO verification pass). | `ifs-interrogation` v2.0 |
| `ifs-interrogation` v2.0 | 2026-09-20 | Unified adversarial interrogation skill: one-pass default, deep nine-stage run, optional eight-step meta-cycle, Field Forge opt-in overlay, memdate capture-only persistence. | *(not archived — this is the live one)* | n/a | — |

## Why `archive/` and not `lab/`

`lab/` is for live drafts and experiments — things that might become skills.
`archive/` is for retired lineage — things that *were* and now exist only for
provenance. Mixing dead history into `lab/` would overload it and blur the
skills/–lab/–ports/ split, so the lineage got its own top-level directory.
(Decision 2026-09-21; rationale in the root README decisions log.)

## Status of the contents

- Frozen: no maintenance, no routing, no invocation triggers honored.
- Kept for provenance: each generation is citable history, not a candidate for revival.
- `ifs-proto/CHANGELOG.md` and `ifs-proto/evals/` are the most complete record of how the engine evolved.
