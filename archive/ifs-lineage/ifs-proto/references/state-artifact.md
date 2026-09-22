---
description: "Portable Markdown state artifact contract. Read when emitting, naming, or iterating on ifs-state files."
connections: [prior-state, evidence-taxonomy]
---

# State artifact

Filename: `ifs-state-[field-name].md`
Slug: lowercase; spaces → hyphens; strip punctuation; no date in the filename.

The artifact is self-contained. A later session must be able to test Keys without the original chat.

Required sections: META, FIELD, PRIOR STATE, EVIDENCE, TAKES & COLLISIONS, REFINED KEYS, SURPRISE, SYNTHESIS.

Surprise is not a summary of the Keys. It is the view that only exists after collision. If collision produces nothing non-obvious, write "No material Surprise identified."

Synthesis.Primary Next Target is the seed of the next session, not a backlog.
