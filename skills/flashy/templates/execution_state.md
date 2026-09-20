# Execution State Template

Keep this updated internally throughout a long-running task. Nothing here should be silently forgotten — re-derive it from the conversation if a session breaks.

```
Primary Objective:
  <the locked, immutable, top-level goal — stated as the deliverable, not the artifact type>

Current Milestone:
  <what's being worked on right now>

Remaining Milestones:
  - <milestone>
  - <milestone>
  - ...

Completed Milestones:
  - <milestone> ✔
  - <milestone> ✔

Known Constraints:
  - <e.g. platform limits, required tech choices, user-stated requirements>

Pending User Decisions:
  - <only decisions that materially change the implementation — see SKILL.md>

Detected Risks:
  - <anything that could cause rework, drift, or an incomplete deliverable>
```

## Usage notes

- Update this after every milestone, not just at the start.
- "Remaining Milestones" should never silently shrink because something was skipped — only because it was actually completed or explicitly descoped by the user.
- If you find yourself unsure what's actually left, that's a signal to re-derive this block from scratch by reviewing what's been delivered so far, rather than guessing.
