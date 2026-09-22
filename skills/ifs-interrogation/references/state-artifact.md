---
description: "Canonical Markdown schema for the emitted IFS state artifact, field naming, and versioning."
connections: [prior-state]
---

# State artifact

The state artifact is the complete deliverable. It must be self-contained enough that another model can continue the investigation without access to the original conversation. Never rely on "see above," "as discussed," "refer to previous conversation," unstated context, or model memory.

## Field naming

`ifs-state-[field-name].md` — lowercase, spaces become hyphens, unnecessary punctuation removed, meaningful words preserved, no dates and no interrogation numbers in the filename. The interrogation number lives inside the state.

Examples: `interrogation: 3` inside `ifs-state-coping-collapse.md`.

Each field has ONE canonical current state file. Historical session records may be kept separately; the state file is the current best model.

## Schema

```markdown
---
artifact: ifs-state
field: [slugified-field-name]
interrogation: [number]
date: [YYYY-MM-DD]
field_type: [Analytical | Narrative | Systemic | Conceptual | Mixed]
depth: [one-pass | deep]
trigger_context: [what invoked this run]
status: complete
lifecycle: [INITIAL | ITERATIVE | FINAL]
protocol: [skill-name/version + engine-name/version that produced this artifact, e.g. ifs-interrogation/2.0.2 (engine IFS-Proto-v1.0)]
persistence: external
canonical: true
---

# IFS State: [Field Name]

## Interrogation Metadata
- Date:
- Field:
- Field Type:
- Depth:
- Interrogation:
- Trigger Context:
- Protocol: [skill + engine versions that produced this artifact — e.g. ifs-interrogation/2.0.2 (engine IFS-Proto-v1.0)]
- Lifecycle: [INITIAL | ITERATIVE | FINAL — FINAL only if the field is resolved enough that the next target is idle]

## Prior State
- Prior interrogation: [number / Not supplied]
- Prior date:
- Prior Keys:
- Prior Surprise:
- Prior Synthesis:
- Key Dispositions: [HELD / CRACKED / MODIFIED / SUPERSEDED / UNRESOLVED per Key]

## 1. Identify
- Field: [what is being examined]
- Objective: [investigative objective]
- Scope: [inside and outside the field]

## 2. Decompose
- Facts / Observations / Claims / Assumptions / Requirements / Constraints / Dependencies / Unknowns
- Actors, temporal structure, existing contradictions
- (Deep run adds: high-impact Questions with impact analysis; Test results per interpretation — supporting evidence, contradictions, unsupported assumptions, predictions, falsifiers)

## 3. Diverge
- Take A / Take B [/ Take C]: strongest internally-coherent case for each worldview

## 4. Collide
- Per required pair: contradiction, premise that must break, discriminator evidence, result

## 5. Refine
- Refined Keys: Statement / Classification / Evidence / Confidence / Vulnerability / Falsifier
- Prior Key Dispositions table (when prior state exists)

## 6. Surprise
- Surprise Claim + Significance, or: No material Surprise identified.

## 7. Synthesize
- Established / Inferred / Rejected / Unresolved
- Current Model: strongest coherent explanation
- Remaining Uncertainties / Next Investigative Target

## State Status
- Interrogation: Complete
- Lifecycle: [INITIAL | ITERATIVE | FINAL]
- State: Canonical
- Persistence: External
- External Save: Not performed by this interrogation model
```

## Output rule

When the interrogation is complete: output the ENTIRE artifact. Do not output only a summary. Do not abbreviate completed stages. Do not replace content with references to the conversation. Do not claim external persistence. Do not invent missing information.
