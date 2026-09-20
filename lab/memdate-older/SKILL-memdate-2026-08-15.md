---

## name: memdate description: File-based memory system for Ryan. Two modes — CAPTURE (append-only, no synthesis) and DISTILL (consolidation pass). Never editorialize during capture.

# Memdate: Memory System

Provider-agnostic, file-based memory system. Zero paid infrastructure. Plain markdown. Append-only capture kept strictly separate from periodic distillation.

See `/mnt/skills/user/memdate/SKILL.md` for complete specification   v v v:ghhhhhhhh-  f     /fhk

      raw.md

      distilled.md

    /misc

      raw.md

      distilled.md

## Two Modes

**CAPTURE:** Fast, append-only, no synthesis. Just get it down, timestamped, gone.

**DISTILL:** Periodic consolidation pass. Read raw.md, produce distilled.md. Never delete raw — it's the permanent record. Distillation is read-mostly on the raw side.

Both modes are fully specified. Never editorialize during capture — that's the whole point of the split.  
