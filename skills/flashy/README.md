# GPTADHD Skill

A portable Claude skill that ports the "GPTADHD" execution-discipline protocol into the standard Claude skill format (`SKILL.md` + bundled resources).

It doesn't make Claude smarter — it makes Claude *finish things*. It locks onto the user's real objective, breaks it into milestones, tracks progress, catches drift and premature "here's a starting point" stops, and keeps working until the deliverable is actually done.

## What's in this package

```
flashy/
├── SKILL.md                              # Main skill definition (required)
├── README.md                             # This file
├── templates/
│   ├── execution_state.md                # Internal state-tracking template
│   ├── goal_hierarchy.md                 # Objective → milestone breakdown template
│   └── continuation_boundary.md          # Honest "not done yet" checkpoint format
└── examples/
    ├── debate_simulator_walkthrough.md   # Full worked example of the loop
    └── anti_patterns.md                  # Artificial-stop language vs. corrected behavior
```

## Installing

**Claude.ai / Claude apps (Cowork, desktop, mobile):**
Upload the whole `flashy/` folder (or the zip) wherever your client supports custom skills/capabilities. Claude will read `SKILL.md` for the trigger conditions and instructions, and pull in `templates/` or `examples/` as needed.

**Claude Code / filesystem-based setups:**
Drop the folder under wherever your project resolves skills (e.g. `/mnt/skills/user/gptadhd/` in this kind of environment, or your own `.claude/skills/` convention). No dependencies, no build step — it's just markdown.

## Using it

Nothing to invoke manually. Per `SKILL.md`, it activates automatically whenever a request is a substantial build/create/write/implement-type task, and stays active until the objective is genuinely complete, a real decision is needed, or a real limit is hit. If you want to force it off for a given task, just say so — e.g. "give me a quick starting point only," which is an explicit instruction that overrides the default.

## Design notes / what was preserved vs. adapted

- **Intent preserved exactly:** objective lock, milestone hierarchy, persistent execution state, drift detection, artificial-stop detection, execution bias (build > explain), recursive "what remains?" checks, dependency awareness, decision-vs-permission-to-continue distinction, quality gate, completion criteria, failure recovery — all carried over from the original spec, just reorganized into the SKILL.md/templates/examples structure Claude skills use.
- **Adapted for portability:** the original's ASCII flowcharts were converted into checklists and prose instructions (equivalent logic, more robust to different renderers); the "internal execution loop" diagram became the ordered Core Loop list in `SKILL.md`; worked examples and reusable templates were split out of the main file so `SKILL.md` stays short and gets pulled into context in full, while templates/examples load only when needed.
