# CAPTURE — 2026-09-17T05:20:23-05:00  
# domain: work/memory-system  
# source: Grok Build session, IFS-PROTO bench + skill  
# mode: CAPTURE (append-only, no distill)

## User requests in this session (as supplied)

- "i have a proto here, i want you to develop it with the newer frameworks you have now, i think ifs2 compressed / memdate2, you have several others too, you can use those as example for style of skill, i want a skill + an app"  
- "/og make a new preview and X banner image" (repeated)  
- "Looks like you got cut off, is everything done? If so, run memdate capture. If not, stop and advise"  
- "Finish all in that order /flashy"

## What exists now (2026-09-17)

- Skill name: ifs-proto  
- Protocol version string: IFS-Proto-v1.0  
- Skill files: public/skill/ifs-proto/SKILL.md plus CHANGELOG.md, evals/evals.json, evals/triggers.json, references/evidence-taxonomy.md, references/INDEX.md, references/overlay-forge.md, references/prior-state.md, references/state-artifact.md  
- App routes: bench (home), /spec, /archive  
- App name in root head: IFS Proto  
- Engine steps named in the bench: Identify, Diverge, Collide, Refine, Capture  
- Overlay: Field Forge (Anvil + Hammer), opt-in, labeled "Interpersonal evasion only"  
- IFS2 pieces present in the skill/engine: prior-state evaluation of Keys, compression, optional overlay  
- Sample field baked into the bench: six-week launch delay (engineering vs product accounts; vendor email 12 March; RFC 18 March; VP Slack 2 April)

## Brand assets (this pass)

- public/og.jpg — 1200×630 JPEG, 77 KB. Baked title "IFS PROTO", tagline "ONE-PASS INTERROGATION". Near-black field-note ground, colliding chevrons, ember spark, copper META plate.  
- public/x-banner.jpg — 1200×264 JPEG, 40 KB. Same lockup in the left half, above the midline.  
- public/favicon.svg — already present (opposing chevrons).  
- src/lib/og/site.json — { "title": "IFS Proto", "type": "website", "card": "custom" }  
- node scripts/brand-check.mjs — ok: true, warnings: 0 (run without --game)

## Live interrogation pass (this pass)

- Preview was serving HTTP 200.  
- Playwright clicked Interrogate on a new outage field (feature-flag vs Redis memory, 16 September 2026).  
- Button was enabled. "Live engine is offline" banner was absent. "One pass running" appeared.  
- Server function POST to interrogateField returned HTTP 200 with application error payload.  
- Error shown in the bench: Engine error 403: {"code":"personal-team-blocked:spending-limit","error":"You have run out of credits or need a Grok subscription. Add credits at https://grok.com/?\_s=usage or upgrade at https://grok.com/supergrok."}  
- Direct xAI chat/completions probes on grok-4.5, grok-4-fast, grok-4-fast-reasoning, grok-3-mini, grok-3 returned the same 403 spending-limit.  
- No new state artifact was produced. Worked example remained on screen.

## Not done / not claimed

- A completed live Keys artifact was not captured.  
- Distill was not run. This file is capture only.  
