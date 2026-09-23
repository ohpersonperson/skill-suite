---
description: "Prior-state loading protocol and the five Key dispositions. Read when a previous interrogation exists for the field."
connections: [evidence-taxonomy, state-artifact]
---

# Prior state

Prior state may be supplied by the persistence layer, the user, or another model — as `ifs-state-[field].md` or as a pasted artifact.

## Loading

1. Parse the artifact: field, date, interrogation number, prior Refined Keys, prior Surprise, prior Synthesis, unresolved questions.
2. State: "Prior interrogation found. Loading Keys from [Date]."
3. Carry every prior Key into the new interrogation.
4. Stress-test every prior Key against the new evidence.
5. Classify each prior Key with exactly one disposition.
6. Identify genuinely NEW Keys. Do not preserve a prior Key merely because it existed.

If no prior state is supplied: treat the interrogation as new. Do not invent prior Keys. Do not claim no prior state exists. "Prior State was not supplied" does not mean "no prior state exists."

## Dispositions

- **HELD** — new evidence continues to support the Key substantially as written.
- **CRACKED** — new evidence materially contradicts the Key. The Key no longer carries load: do not use it as a premise in the next iteration. It stays in the artifact as a visible failure record — never delete a CRACKED Key. (2026-09-23: restored the Aug 13 canonical wording; the v2.0 "The Key is invalid" qualifier had no canonical source, and the v1.0 "damaged, not yet replaced" was a softening of the protocol.)
- **MODIFIED** — the Key remains useful but its scope, wording, or conditions must change.
- **SUPERSEDED** — a stronger explanatory structure replaces the previous Key.
- **UNRESOLVED** — available evidence cannot determine whether the Key survives.

## Historical integrity

Prior state records what a previous interrogation concluded. It does NOT establish that the conclusion was correct. Prior Keys are historical hypotheses that stay open to revision.

- Never silently rewrite a prior Key.
- When a prior Key fails, preserve that failure in the new state. Mark it CRACKED, don't delete it.
- The evolution of the model must remain visible: the state file is the current best model, and the record of how it got there is part of the artifact.
- A smaller set of durable Keys beats many vague observations. Do not create Keys to inflate the count.
