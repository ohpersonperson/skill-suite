# Worked Examples — IFS Interrogation v2.0

Five illustrative runs, one per operational mode (see `modes.md`), plus the opt-in Forge overlay. These fields are constructed for teaching: every evidence tag, Take, collision, Key, and Surprise below is invented to show the engine's shape, not to report real findings. Read them as choreography, then run the engine on real fields.

Conventions used throughout: evidence tags from `evidence-taxonomy.md`; Keys carry all six components (Statement, Classification, Evidence, Confidence, Structural Vulnerability, Falsifier); collisions name the contradiction, the premise that must break, and the discriminator; Surprise is emergent or explicitly absent. State artifacts are sketched, not full — see `state-artifact.md` for the canonical schema.

---

## Example 1 — Standard mode, one-pass (default)

**Field:** Corner Books, a used bookstore. Q3 revenue $48k vs Q2 $34k (+41%). The owner calls it a turnaround. Is it?

**Phase 1 — Identify & Decompose.** Field: the revenue jump at Corner Books, Q2→Q3. Objective: determine whether the increase reflects durable growth or a one-time event. Scope: revenue composition only; staffing and inventory valuation excluded.

Evidence:

| # | Tag | Content |
|---|---|---|
| 1 | FACT | Q3 revenue $48k; Q2 revenue $34k (point-of-sale records) |
| 2 | FACT | A single July estate sale brought ~2,100 rare books, sold through August (purchase ledger) |
| 3 | OBSERVATION | Door-counter visits flat vs Q2 (owner's handwritten log, unverified) |
| 4 | CLAIM | Owner: "new regulars from the reading series are driving it" |
| 5 | FACT | Reading series: 6 sessions, avg attendance 14 (sign-in sheets) |
| 6 | FACT | Rent rises 12% in January (signed lease) |
| 7 | UNKNOWN | Q4 inventory pipeline — no estate sales scheduled |
| 8 | UNKNOWN | Item-level sales mix: estate inventory vs regular stock |

**Phase 2 — Diverge.** Two Takes; no genuine third model exists.

- **Take A — Turnaround.** The reading series built a real customer base. Regulars buy more per visit than browsers; revenue per visitor rose. The estate sale accelerated a trend the series started. Evidence used: #4, #5, #1.
- **Take B — Blip.** The entire delta is the estate sale. Foot traffic is flat, the base business is unchanged, and nothing structural moved. Evidence used: #1, #2, #3, #7.

**Phase 3 — Collide.** One required pair: A/B.

- **Contradiction:** Take A requires regular-stock revenue to have grown; Take B requires it to be flat.
- **Premise that must break:** A's premise — "the series converted attendees into buyers."
- **Discriminator:** item-level sales mix (#8). If regular-stock revenue is flat, A collapses. If it rose >15%, B collapses.

**Phase 4 — Refine.** Skeptic pass: A's strongest point is the timing correlation (series ran all quarter); its weakest is #3 (flat visits) plus no purchase data tying attendees to sales. B's weakest is that it cannot explain why the owner believes the story — but belief is not evidence. Extract 3 Keys; a fourth candidate ("the owner is lying") is discarded — motive attribution without evidence.

**Keys:**

1. **Statement:** The Q3 increase is attributable to the July estate sale, not to growth in the underlying business. **Classification:** STRONGLY INFERRED. **Evidence:** FACT #1, FACT #2, OBSERVATION #3. **Confidence:** HIGH — timing and volume align; flat visits contradict the turnaround story. **Structural Vulnerability:** depends on the UNKNOWN sales mix (#8); a skewed mix the other way breaks it. **Falsifier:** item-level data showing regular-stock revenue up >15% vs Q2.
2. **Statement:** The reading series has not converted attendees into buyers at a meaningful rate. **Classification:** PLAUSIBLE. **Evidence:** FACT #5, CLAIM #4 vs OBSERVATION #3. **Confidence:** MODERATE — attendance is real, conversion is unmeasured. **Structural Vulnerability:** no per-attendee purchase tracking exists. **Falsifier:** loyalty-card or payment data linking attendees to purchases totaling >10% of Q3 revenue.
3. **Statement:** The January 12% rent increase makes the current cost structure unviable at Q2-level revenue. **Classification:** STRONGLY INFERRED. **Evidence:** FACT #6, FACT #1 (Q2 baseline). **Confidence:** MODERATE — arithmetic is solid; assumes other costs flat. **Structural Vulnerability:** cost base may have shifted. **Falsifier:** a revised P&L showing the increase absorbed within existing margins.

**Phase 5 — Surprise + Synthesis + Capture.**

- **Surprise:** The "turnaround" story is not merely wrong — it is the mechanism of the coming harm. Believing it means no action before January. Worse: the estate sale that created the blip also liquidated the rare-book draw that brought browsers through the door. The event that looked like growth consumed the asset that could have produced it.
- **Synthesis:** One-time inventory event, flat underlying business, cost cliff in January. Act on the blip hypothesis before the lease renews.
- **Capture:** `ifs-state-corner-books.md` — session 1, 3 Keys, 2 UNKNOWNs (sales mix, Q4 pipeline), next target: obtain item-level Q3 data.

---

## Example 2 — Systemic mode, deep nine-stage run

**Field:** Riverside Community Garden. Third collapse in five years. Each cycle: strong initial turnout, dead by month 18. The question is structural, not personal — hence the deep run with the 8-step meta-cycle.

**Meta-cycle:**

1. **Gather the Field** — three cycles of sign-up sheets, two soil tests, city lease terms, exit interviews from 11 former volunteers, water bills.
2. **Map Relationships** — founding organizers → rotating volunteers → city parks dept (landowner) → soil quality → water access → neighboring plots.
3. **Locate Tensions & Harmonies** — everyone agrees the garden matters (harmony); nobody owns off-season maintenance, the lease is year-to-year, water access is disputed (tensions).
4. **Extract Recurring Structures** — the founder-burnout cycle (a core of 3 does everything, quits by month 14); the second-summer weed wall; the August water shutoff fight, three years running.
5. **Generate Explanatory Keys** — run the nine-stage engine below.
6. **Stress-Test Keys** — session 1; no prior state.
7. **Update the Field** — reorganize around surviving Keys.
8. **Iterate or Capture** — capture; one UNKNOWN (soil test #3 pending) becomes the next target.

**The nine stages:**

- **IDENTIFY** — Field: the 18-month collapse cycle at Riverside. Objective: find the structural cause, not the proximate one. Scope: all three cycles; individual personalities out of scope.
- **DECOMPOSE** — Evidence tagged: FACT (lease is year-to-year, renewed each March); FACT (water shutoffs each August, parks dept cites unpaid fees); FACT (soil test 2023: lead 340 ppm in the north beds); OBSERVATION (founder does ~70% of hours, from hour logs); CLAIM (departing volunteers: "it stopped being fun"); CLAIM (parks dept: "they never file the paperwork"); UNKNOWN (soil test #3 results); UNKNOWN (who paid the 2024 water fees).
- **QUESTION** — High-impact questions:
  - Q1: Would a 5-year lease change volunteer commitment? Unknown: lease effect on planning horizon. Affects: structural vs leadership interpretations. Resolved by: parks dept policy. If YES → the year-to-year lease is load-bearing. If NO → lease is incidental.
  - Q2: Did any cycle survive a founder's departure? Unknown: whether the structure or the person carried it. Affects: Take A vs B. Resolved by: cycle-2 records. If YES → leadership model weakens. If NO → unresolved; founders may be the structure.
  - Q3: Is the north-bed soil actually the reason those beds were abandoned, or the excuse? Affects: Take B's weight. Resolved by: soil test #3 + bed-assignment records.
- **TEST** — Attempt to break the strongest interpretation ("it's a leadership problem"): supporting — founder hour logs, exit interviews naming burnout; contradictory — cycle 2 had different founders and still died at month 17; unsupported assumption — that committed founders exist to be found; alternative — the structure burns whoever steps in; missing variable — the lease/water/soil pattern is identical across all three cycles while the people changed completely. The people changed; the pattern didn't. Leadership is not load-bearing.
- **COLLIDE** — Three Takes (genuinely independent third exists):
  - Take A (Leadership): founders burn out; no succession; the garden is a person, not an institution.
  - Take B (Structural): year-to-year lease + August water shutoffs + suspect soil make long-term investment irrational; rational actors leave.
  - Take C (Cultural): transient renter neighborhood; no cohort stays long enough to own a multi-year project; each relaunch mines a fresh cohort's enthusiasm.
  - Pairs: A/B — contradiction: is the binding constraint the people or the terms? Premise that must break: A requires the terms to be workable by better people. Discriminator: cycle 2's different founders, same outcome — breaks A. A/C — contradiction: does the neighborhood lack stayers, or do stayers get burned? Discriminator: tenure data of departing volunteers (FACT: median tenancy 4 years — long enough; breaks C's strong form). B/C — contradiction: would a 5-year lease plus clean soil hold a transient cohort? Discriminator: Q1 — unresolved; both survive partially.
- **REFINE** — Skeptic pass: B survives TEST intact. C survives in weakened form (transience shortens horizons but doesn't cause collapse). A is discarded as an explanation — not softened: the founder pattern is an effect, not a cause. 3 Keys extracted.
- **SURPRISE** — The garden does not fail despite community support. It fails *through* the support pattern: each relaunch consumes a fresh cohort's social capital, and each collapse teaches the neighborhood that gardens here die — which shortens the next cohort's commitment horizon before it begins. The relaunches are the mechanism of the decay. Nobody's model included the collapse itself as a causal input.
- **SYNTHESIZE** — Structural terms (lease, water, soil) make investment irrational; the founder-burnout pattern is downstream; each cycle's failure poisons the next cycle's starting conditions.
- **CAPTURE STATE** — `ifs-state-riverside-garden.md`: session 1, 3 Keys, next target: soil test #3 + parks dept lease policy.

**Keys (abridged — full six components in the artifact):**

1. The year-to-year lease plus recurring August water shutoffs make multi-season investment irrational; rational volunteers exit. STRONGLY INFERRED, HIGH. Falsifier: a cycle that survived identical terms.
2. Founder burnout is downstream of the structural terms, not an independent cause — the people changed across cycles; the pattern didn't. ESTABLISHED, HIGH. Falsifier: a cycle with identical terms but distributed labor that survived.
3. Each collapse shortens the next cohort's commitment horizon (credibility decay), making relaunches progressively weaker. PLAUSIBLE, MODERATE. Falsifier: cycle-4 sign-ups matching cycle-1 levels after publicized structural fixes.

---

## Example 3 — Stress-Test mode (session 2+)

**Field:** Corner Books, three months later. Prior state `ifs-state-corner-books.md` (session 1, Example 1) loaded. New evidence arrives; every prior Key is stress-tested, none preserved by inertia.

New evidence:

| # | Tag | Content |
|---|---|---|
| 9 | FACT | Item-level Q3 data obtained: 71% of Q3 revenue was estate-sale inventory |
| 10 | FACT | Q4 revenue $31k — below the Q2 baseline |
| 11 | FACT | Owner signed a sublease for half the floor space, starting February (lease document) |
| 12 | CLAIM | Owner now says the reading series "was never about sales" |
| 13 | FACT | Loyalty-card data: 9 of 14 regular attendees made purchases, avg $22 |

**Dispositions:**

- **Key 1** (estate sale drove Q3): **HELD** — strengthened. #9 converts the UNKNOWN (#8) into a confirming FACT. Confidence rises to HIGH across the board.
- **Key 2** (series didn't convert meaningfully): **HELD** — #13 shows small real conversion (~$1,200/quarter against $48k). The statement survives; "meaningful rate" now quantified.
- **Key 3** (January rent cliff): **MODIFIED** — #11 changes the cost structure. Updated statement: "The sublease covers the January increase, but viability now depends on sublease-counterparty reliability — a new single point of failure." Classification: PLAUSIBLE. New UNKNOWN: subtenant's financials.
- **Key 4** (session-1 speculative Key: "the owner will not act before January without an external trigger"): **SUPERSEDED** — the owner acted (#11). Replaced, not patched: the speculation is preserved visibly as superseded, with the note that the action came from the landlord's offer, not from recognizing the blip.

**New Key 5:** The sublease solves the rent problem by introducing a counterparty dependency the owner has not evaluated. PLAUSIBLE, MODERATE. Falsifier: subtenant's financials showing 2+ years of stable operation.

**Surprise:** The owner acted — but the mental model survived intact. The sublease was the landlord's idea, accepted, not a conclusion drawn from the numbers. The "turnaround" belief was never tested by its holder, which predicts the next misread will follow the same shape: external prompt, unexamined premise, new dependency.

**Synthesis:** Blip confirmed (71%), baseline deteriorating ($31k), cost cliff converted into counterparty risk, owner's model unrevised. Next target: subtenant financials; then re-examine the owner's decision pattern itself as a field.

**Historical integrity note:** Key 4's original speculative wording is preserved in the artifact under SUPERSEDED with its replacement linked — the failure stays visible.

---

## Example 4 — Tribunal mode (deep run, adjudication)

**Field:** A practitioner claims the "Rapid Bloom" 5-card spread conforms to FHK v5.0 canon. Tribunal adjudicates the claim against the framework's stated standards — full nine stages, no compression of reasoning.

**Framework excerpt (supplied in the adjudication request; illustrative):** FHK v5.0 requires of any conforming spread: (R1) every position maps to a named harmonic key; (R2) no position may be purely predictive — each position must name its falsifier; (R3) the spread closes with a synthesis position, not advice.

Evidence:

| # | Tag | Content |
|---|---|---|
| 1 | FACT | Spread positions: Seed, Soil, Storm, Sun, Harvest (published layout) |
| 2 | FACT | R1/R2/R3 as stated above (v5.0 canon excerpt) |
| 3 | OBSERVATION | Author's commentary: "Harvest is the synthesis — it gathers the reading" |
| 4 | CLAIM | Author: the spread conforms to v5.0 |
| 5 | FACT | Author's sample reading, Harvest position: "reap what you have sown; act now" (author's text) |
| 6 | FACT | No position in the published material names a falsifier or maps to a named harmonic key (layout + guide, exhaustive) |

- **IDENTIFY / DECOMPOSE** — as above. Scope: conformance only; the spread's usefulness as a reading tool is a separate field.
- **QUESTION** — Q1: Does Harvest synthesize the prior positions or advise the querent? If synthesis → R3 holds. If advice → R3 fails. Resolved by: #5. Q2: Is there any mapping to named harmonic keys outside the published guide? If YES → R1 possibly holds. If NO → R1 fails. (Author confirms the guide is exhaustive: NO.)
- **TEST** — Steelman conformance: "Harvest" as a word implies gathering — a synthesis metaphor; the author's intent (#3) deserves weight; R2's falsifier requirement might be satisfied implicitly since Storm "tests" the Seed. Then break it: intent is not text (#5 is advice, imperative mood, no synthesis of prior positions); "implicit" falsifiers are not named falsifiers — R2 says *name*; #6 is exhaustive and negative. The steelman fails on the evidence.
- **COLLIDE** — Take A (Conforms): the author's framing is coherent; Harvest gathers; the spread works in practice. Take B (Does not conform): the text fails R1 (no key mappings), R2 (no named falsifiers), R3 (Harvest advises). Contradiction: does conformance live in the author's intent or in the artifact's text? Premise that must break: A requires intent to satisfy textual requirements. Discriminator: #5 — the Harvest sample is imperative advice, not synthesis. A breaks.
- **REFINE** — 3 Keys. A candidate Key ("the author misunderstands v5.0") is discarded — motive/competence attribution without evidence; the artifact is what's judged.
- **SURPRISE** — The spread is a *better* FHK spread than its author claims: its five positions map cleanly onto the v3.2 pattern language (Seed/Soil/Storm/Sun/Harvest as elemental progression), which v5.0 superseded. The non-conformance is version drift, not design failure. Adjudication preserves what's good: this is a conforming v3.2 spread wearing a v5.0 claim.
- **SYNTHESIZE** — Verdict: **DOES NOT CONFORM to v5.0** (fails R1, R2, R3 on the text). Note: conforms to the v3.2 pattern; the author can either re-version the claim or revise Harvest into a true synthesis position with named falsifiers.
- **CAPTURE STATE** — `ifs-state-rapid-bloom-tribunal.md`: verdict, Keys, the v3.2 observation flagged for the author's revision decision.

**Keys:**

1. Statement: Rapid Bloom fails R1 — no position maps to a named harmonic key in the published material. ESTABLISHED. Evidence: FACT #1, FACT #6, FACT #2. Confidence: HIGH. Vulnerability: none structural; exhaustive review. Falsifier: a published key-mapping the adjudication missed.
2. Statement: Rapid Bloom fails R2 — no position names a falsifier. ESTABLISHED. Evidence: FACT #6, FACT #2. Confidence: HIGH. Vulnerability: depends on "named" reading of R2 (if the Tribunal ever weakens R2 to implicit, this Key cracks — noted). Falsifier: revised position texts naming falsifiers.
3. Statement: Harvest (position 5) advises rather than synthesizes, failing R3. STRONGLY INFERRED. Evidence: FACT #5 vs OBSERVATION #3, FACT #2. Confidence: HIGH. Vulnerability: single sample reading; author could show synthesis readings. Falsifier: three sample readings where Harvest synthesizes prior positions without imperative advice.

---

## Example 5 — Standard mode with the Forge overlay (opt-in)

**Field:** Dana says she is "doing the work," but the same fight with her sister repeats for the third year. Requested: run the overlay — the field is interpersonal and armored in therapy language.

**ANVIL — strip the jargon armor.** Translate every abstract term into observable plain language before Diverge:

- "doing the work" → attends therapy biweekly (FACT, Dana's report); no stated goals on record (UNKNOWN)
- "holding space for my sister" → stays in the room during the fight until leaving early (FACT, three Thanksgivings)
- "my truth" → Dana's account of the fight (CLAIM)
- "the pattern" → the same fight, same topics, same early exit, three years (FACT)

**HAMMER — isolate responsibility.** Who does what, exactly:

- Dana's observables: raises the childhood chore dispute (FACT, sister's account corroborates the topic); leaves 40–90 minutes in (FACT).
- Sister's observables: brings up the will (FACT, Dana corroborates); follows Dana to the car twice (OBSERVATION, Dana's report only).
- **OBFUSCATION** (overlay tag): "I'm doing the work" is uttered each time the repetition is raised (OBSERVATION, 3 instances) and functions to close inquiry rather than report progress — no verifiable change is ever attached to the phrase.

**DIVERGE** (overlay off from here; standard engine resumes):

- **Take A — Armor.** The therapy language is functioning as defense: the phrase deflects the only question that matters (what changed?), and nothing in Dana's observable behavior during the field has changed. Evidence: OBFUSCATION instance ×3, FACTs of repetition.
- **Take B — Unreached.** The work is real but hasn't reached the sibling dynamic: insight without a joint practice doesn't transfer; the field needs the sister, not more solo sessions. Evidence: FACT (biweekly attendance, 18 months), FACT (no joint sessions ever attempted — UNKNOWN whether offered).

**COLLIDE (A/B):** Contradiction — is the therapy irrelevant-by-design (A) or relevant-but-incomplete (B)? Premise that must break: B requires *some* observable change in Dana's conduct during the fight. Discriminator: the three-year behavior record — same topics, same exit, same duration window. No observable delta. B's transfer premise breaks; B survives only in weakened form (the work may be real elsewhere — out of scope; within this field, it has no observable effect).

**Keys:**

1. Statement: Within the sibling field, 18 months of therapy has produced no observable behavioral change. STRONGLY INFERRED. Evidence: FACT (attendance), FACT (three identical fights). Confidence: HIGH. Vulnerability: observables are coarse (duration, topics, exit); subtle change could exist unmeasured. Falsifier: a fourth Thanksgiving with a different conflict trajectory.
2. Statement: "Doing the work" functions in this field as inquiry-closure, not progress-reporting. PLAUSIBLE. Evidence: OBFUSCATION ×3. Confidence: MODERATE — function inferred from pattern, not from Dana's intent (intent unmeasured, and out of scope). Vulnerability: small sample; phrasing could be habitual rather than functional. Falsifier: an instance where the phrase is followed by a specific, verifiable change.
3. Statement: The field cannot be resolved by solo work alone — the fight is a two-person structure. PLAUSIBLE. Evidence: FACT (sister's corroborated observables), INFERENCE from collision. Confidence: MODERATE. Vulnerability: assumes the sister would participate (UNKNOWN). Falsifier: a solo-behavioral change by Dana that alters the fight's trajectory.

**Surprise:** Both Takes agree Dana believes she is changing — and the collision reveals the belief itself is the load-bearing structure. Sincerity is not evidence of change; in this field, sincerity is what's *standing in* for evidence of change. The overlay didn't discover deception — it discovered a substitution: feeling different standing in for acting different.

**Synthesis:** The armor isn't lying; it's mislabeled. Name the substitution, measure the observables, and the field becomes workable. Next target: one joint session, or one Thanksgiving with a pre-committed exit rule — then re-run.

**Safety note (per inviolable constraints):** no diagnosis was made or implied; all claims are behavioral and tagged. "No unsupported assumptions" held: Dana's intent was never claimed.

---

## Which mode when

| Mode | Depth | Use when |
|---|---|---|
| Standard | One-pass, five phases | Bounded fields: decisions, claims, single contradictions |
| Systemic | Deep nine-stage + 8-step meta-cycle | Structural/multi-actor fields, recurring patterns |
| Stress-Test | Session 2+, prior state loaded | New evidence meets old Keys |
| Tribunal | Deep nine-stage, adjudication | A claim must be judged against framework standards |
| Forge overlay | Anvil + Hammer, then any mode | Interpersonal evasion, jargon armor, responsibility fog |

*End of worked examples.*
