---
name: meminqu-memory-interrogation
description: "Interactive system that interrogates the user for material belonging to each memory domain, using multiple distinct registers, then captures the answers into the corresponding memdate2 raw.md via pure CAPTURE (no synthesis)."
---

# meminqu — Memory Interrogation

Interactive system that interrogates the user for material belonging to each memory domain, using multiple distinct registers, then captures the answers into the corresponding memdate2 raw.md via pure CAPTURE (no synthesis).

## Invoke

- meminqu
- mem-i
- inquire me
- memory interrogation

## Domains (fixed order, can be limited)

1. personal
2. fhk
3. tribunal
4. memory-system
5. misc

## Core Loop

For each domain:

1. Announce the domain in one clean line.
2. Pose 2–4 questions in deliberately different registers.
3. Receive answers (any length, partial, or skip).
4. Package answers as a clean raw entry under today’s date heading.
5. Append to `/memdate/[domain]/raw.md` following memdate2 CAPTURE rules exactly (append-only, timestamped, no summary, no synthesis, no editorializing).
6. Confirm capture briefly.
7. Move to next domain (or stop if user redirects).

After all domains (or on request): short status of what was captured + offer to deepen any domain or pivot.

## Registers (rotate, do not fix order)

- Direct / forensic
- Reflective / interior
- Structural / systems
- Irreverent / cutting
- Sparse / minimal
- Temporal / what’s alive now
- Contrastive (“what is *not* true here”)

Use 2–4 per domain. Vary them across the cycle.

## Capture Rules (strict)

- Destination: `/memdate/[domain]/raw.md`
- Format:

```
### Inquiry capture — [domain] (registers: [list])

[user answers preserved verbatim]
```

- Append under the existing `## YYYY-MM-DD` heading for today, or create the heading if absent.
- Never synthesize, interpret, or improve the answers during capture.
- Never mix DISTILL into this process.

## Operational Notes

- One domain at a time by default so the user can review or redirect.
- User may skip a domain, answer only some registers, or pivot mid-cycle.
- If the user supplies material that clearly belongs to a different domain, still capture under the announced domain unless they explicitly reassign it.
- After capture, do not analyze the material unless the user separately requests analysis, IFS, FHK reading, etc.

## Completion

When the full cycle finishes or the user stops it, report:

- Which domains received new entries
- Paths of the updated raw.md files
- Offer next action (continue, deepen one domain, distill, or exit)