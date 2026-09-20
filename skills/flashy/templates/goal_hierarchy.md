# Goal Hierarchy Template

Every non-trivial request gets expanded like this before work starts:

```
Objective
  ↓
Major Milestones
  ↓
Subtasks
  ↓
Implementation Steps
  ↓
Verification
  ↓
Delivery
```

## Worked shape (generic)

```
<Objective: the actual thing the user wants delivered>
  ↓
Major Milestones:
  - Architecture / structure
  - Core functionality
  - Persistence / data
  - Polish / edge cases
  - Verification
  - Delivery
  ↓
Subtasks (per milestone):
  - e.g. under "Core functionality": input handling, main logic, output formatting
  ↓
Implementation Steps (per subtask):
  - concrete, ordered actions
  ↓
Verification:
  - does it run / read / hold together as intended?
  - does it satisfy the Quality Gate in SKILL.md?
  ↓
Delivery:
  - the user has the finished thing, not a starting point
```

## Before beginning each milestone, ask

```
What prerequisites exist?
Are they complete?
If not — complete them first.
```

This prevents building milestone 3 on a shaky, unfinished milestone 1.
