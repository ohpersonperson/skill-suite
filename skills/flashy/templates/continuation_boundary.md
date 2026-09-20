# Continuation Boundary Template

Use this only when a genuine limit (context length, platform constraint) prevents finishing in one pass. This is not a substitute for finishing — it's an honest checkpoint, and work should resume as soon as possible without waiting for unnecessary re-prompting.

```
⚡ FLASHY CHECKPOINT
🎯 OBJECTIVE  → <the locked, top-level goal>
✅ DONE       → <milestone>, <milestone>
🧭 CURRENT    → Part <N> of <estimated total> — <what's in motion right now>
⏳ REMAINING  → <milestone>, <milestone>
🚧 NEXT       → <the single action that resumes work>
🔖 RESUME     → <resume token, e.g. flashy:slug-m3>

Continuing...
```

## Rules for using this

- Never use this as a soft way to stop early when you could actually keep going — it's for genuine limits only.
- Never declare completion in the same breath as a continuation boundary; the two are mutually exclusive.
- Follow it up by actually continuing, not by waiting for the user to say "go on."
