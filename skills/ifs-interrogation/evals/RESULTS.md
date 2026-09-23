# Live-model behavioral evals — baseline 2026-09-23

Model: `nvidia/nemotron-3-super-120b-a12b:free` (free OpenRouter tier)
Skill under test: `ifs-interrogation` v2.0.5 (SKILL.md as system prompt)
Runner: `run_evals.py` — generation + LLM judge per assertion
**Baseline: 12/19 assertions passed**

## Per-case

| Case | Score | Notes |
|---|---|---|
| two_takes_one_collision | 3/4 | FAIL: model extracted only 2 Keys, skill requires 3–5. Genuine signal. |
| prior_keys_tested | 4/4 | Clean pass — prior-Key lifecycle holds on a live model. |
| deep_run_has_question_and_test | 2/3 | FAIL was harness-caused: generation capped at 1500 tokens cut stages 5–9. Per-case `gen_tokens` (3000) added after; re-verification blocked by daily cap (see below). |
| no_overlay_on_systems_field | 2/3 | FAIL: model attributed unstated "risk aversion" motive — ISOLATE MOTIVE discipline didn't hold. Genuine signal. |
| overlay_on_evasion | 0/3 (judge ERROR) | Model narrated its plan ("We need to run IFS interrogation…") instead of executing. Genuine narration-vs-execution failure, worth a skill hardening note. |
| evidence_discipline | 1/2 | FAIL: no UNKNOWN tags on missing variables. Genuine signal. |

## Genuine behavioral findings (not harness noise)

1. Small model under-extracts Keys (2 instead of 3–5).
2. ISOLATE MOTIVE leaks under a systems-field prompt ("risk aversion").
3. Overlay+evasion input triggers plan-narration instead of execution.
4. Missing variables not classified UNKNOWN without stronger prompting.

## Harness notes

- Free-tier budget: OpenRouter allows 50 free-model requests/day. One full 6-case run costs ~12–14 calls (generation + judge + retries) — roughly a quarter of the daily budget. Plan runs accordingly.
- 2026-09-23: after the 12/19 baseline, two further runs were provider-degraded (Nvidia 503s, then the 429 daily cap). The degraded run is preserved as `results-2026-09-23-degraded.json`; the baseline above is transcribed from the successful run's observed verdicts (see `results-2026-09-23-baseline.json` provenance note).
- Judge retries (3x) and generation retries (3x) are built in; error blobs are never judged as passes.
