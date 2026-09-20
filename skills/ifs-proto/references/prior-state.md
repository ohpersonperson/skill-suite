---
description: "How to load, test, and mark prior Keys. Read on any iterative session."
connections: [state-artifact, evidence-taxonomy]
---

# Prior state

If no prior artifact: Reference = None. Evaluations empty. Session = 1. Status = INITIAL.

If prior exists:

1. Load Keys only — do not inherit Takes as authority.
2. Against new evidence, mark each Key:
   - HELD — still load-bearing
   - CRACKED — damaged, not yet replaced
   - MODIFIED — same claim, tighter or restated
   - SUPERSEDED — replaced by a new Key
   - UNRESOLVED — still cannot be tested
3. Session = prior session + 1
4. Status = ITERATIVE, or FINAL if Primary Next Target is idle
5. New Keys must be genuinely new, not rephrased survivors

Never patch an old artifact in place. Emit a new one.
