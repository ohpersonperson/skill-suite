---
name: memdate-v2
description: "Provider-agnostic, file-based memory system using plain Markdown. CAPTURE preserves raw records without interpretation. DISTILL consolidates into distilled.md and regenerates the cross-domain index. Triggers on memdate, capture this, log this, add to memory, distill memory, or any request to record or consolidate memory."
---

# MEMDATE v2

Provider-agnostic, file-based memory system using plain Markdown.

Core invariant:  
CAPTURE preserves. DISTILL interprets. Never mix them.

## MODES

### CAPTURE

Purpose: record incoming memory without interpretation.

Rules:

1. Append only.  
2. Timestamp each entry.  
3. Preserve source meaning.  
4. Do not summarize.  
5. Do not synthesize.  
6. Do not editorialize.  
7. Do not delete or rewrite prior records.  
8. Write directly to the appropriate "raw.md".

Output: raw permanent record.

### DISTILL

Purpose: consolidate accumulated raw memory into a usable derived representation, then regenerate the system-wide connective tissue.

Rules:

1. Read the relevant "raw.md" (and any supporting state artifacts).  
2. Identify durable information.  
3. Consolidate duplicates and related entries.  
4. Preserve meaningful distinctions.  
5. Do not invent unsupported information.  
6. Write/update "distilled.md".  
7. Never delete or alter "raw.md".  
8. **After any full or multi-domain distill, regenerate INDEX-cross-domain.md at the !Memory root.**

Output: distilled derived memory + current cross-domain index.

## STORAGE

Primary location is Google Drive folder **!Memory** (not a local /memdate path).

```  
!Memory/  
├── INDEX-cross-domain.md     ← system connective tissue (regenerated on every full distill)  
├── DROP/                     ← ingestion layer (NEW / PROCESSED / PENDING / QUARANTINE)  
├── personal/  
│   ├── raw.md  
│   └── distilled.md  
└── work/  
    ├── memory-system/  
    ├── tribunal/  
    ├── fhk/  
    └── misc/  
        ├── raw.md  
        └── distilled.md  
```

Primary domains:  
- personal  
- fhk  
- tribunal  
- memory-system  
- misc

## DATA AUTHORITY

"raw.md" = permanent source record

"distilled.md" = derived working representation

INDEX-cross-domain.md = derived system map (never authoritative over raw)

When they conflict:

- Raw evidence is authoritative.  
- Distilled memory must be corrected.  
- Never modify raw merely to make it agree with distilled.

## CAPTURE PROTOCOL

For each incoming memory:

1. Identify destination domain.  
2. Preserve the information as supplied.  
3. Add timestamp.  
4. Append to raw.md (or create the appropriate Google Doc in the domain folder).  
5. Stop.

Critical rule: Capture is not the place to decide what the information means.

### Isolation check (end of every CAPTURE run)

- Did any entry get summarized, synthesized, or editorialized? If yes, it is not a capture — move the interpretation out.
- Was any prior record modified, reordered, or deleted? If yes, restore it; CAPTURE is append-only.
- (Verified 2026-09-23, Phase 3.1: the CAPTURE protocol contains no interpretation step; the invariant holds by construction.)

## DISTILL PROTOCOL

1. Load raw.md (and any high-value state artifacts in the domain).  
2. Extract durable information.  
3. Group related entries.  
4. Resolve obvious duplication without inventing facts.  
5. Preserve uncertainty and contradictions.  
6. Produce/update distilled.md.  
7. Leave raw.md untouched.  
8. **If the distill touched one or more domains (especially a full run), regenerate the cross-domain index.**

Distillation is a consolidation pass, not a rewrite of history.

### Isolation check (end of every DISTILL run)

- Was raw.md modified in any way? If yes, revert — DISTILL never touches raw.
- Was any fact introduced without raw evidence behind it? If yes, remove it or mark it explicitly as inference.
- When raw and distilled conflict, was distilled corrected (not raw)? Raw is authoritative.

(Verified 2026-09-23, Phase 3.1: the DISTILL protocol contains no raw-mutation step; the invariant holds by construction.)

### distilled.md frontmatter (Phase 1.1 invariant)

Every distilled.md carries provenance frontmatter recording what produced it:

```
---
artifact: memdate-distilled
domain: [domain name]
date: [YYYY-MM-DD]
protocol: [memdate-v2/version that produced this distillation]
lifecycle: [INITIAL | ITERATIVE | FINAL — FINAL only if the domain's raw record is fully consolidated with no open threads]
---
```

`raw.md` is explicitly excluded from this invariant: CAPTURE is an append-only evidence log, and per-entry version metadata would pollute source fidelity. The protocol stamp lives on the derived representation, never on the raw record.

## CROSS-DOMAIN INDEX (mandatory after full distill)

After completing distilled.md updates, always produce or refresh:

**!Memory/INDEX-cross-domain.md**

Required sections:

1. **Entities → Domains**    
   People, places, concepts mapped to every domain that references them, with brief status notes.

2. **Dependencies**    
   Directional map of which domains inform which others. Call out the strongest current chains.

3. **Open Questions**    
   Prioritized list of contradictions, unknowns, and pending adjudication visible across the whole system.

4. **Hot Zones**    
   - Raw ↔ distilled divergence points    
   - Explicit uncertainty flags inside distilled files    
   - Cross-domain tension points    
   - Highest-leverage next work visible from the system view

The index is connective tissue for any downstream model. It must be current after every full distill. It is derived, never authoritative over raw.

### Index regeneration procedure (Phase 3.2)

**When required:** after any full distill, or any distill touching more than one domain. **When not required:** a single-domain distill touching one domain only — update that domain's distilled.md and leave the index; note the skip in the distill record.

**Steps (mechanical, in order):**

1. **Collect:** load every domain's distilled.md (personal, fhk, tribunal, memory-system, misc).
2. **Entities → Domains:** extract every person, place, and concept referenced in more than one domain. Map each to all referencing domains with a one-line status note. Single-domain entities stay out — the index is cross-domain tissue, not a census.
3. **Dependencies:** for each domain pair with a live reference, record the direction (which informs which). Call out the strongest chains — the 2–3 dependency paths that currently carry the most weight.
4. **Open Questions:** sweep all distilled files for contradictions, unknowns, and pending adjudication. Prioritize by blast radius: questions whose answers would change multiple domains go first.
5. **Hot Zones:** flag raw↔distilled divergences, explicit uncertainty flags inside distilled files, cross-domain tension points, and the highest-leverage next work visible from the system view.
6. **Write:** produce `!Memory/INDEX-cross-domain.md` with the four sections above, frontmatter-stamped per the Phase 1.1 invariant:
   ```
   ---
   artifact: memdate-cross-domain-index
   date: [YYYY-MM-DD]
   protocol: [memdate-v2/version that produced this index]
   lifecycle: [ITERATIVE | FINAL — FINAL only if no open questions remain across all domains]
   ---
   ```
7. **Verify:** re-read the new index against the distilled files — every cross-domain entity in the index must exist in at least two distilled files; every open question must trace to a distilled source. No orphans.

**Freshness rule:** the index carries its generation date in frontmatter. Any consumer older than the latest full distill treats it as stale and regenerates before relying on it.

## INVARIANTS

- Raw is append-only.  
- Raw is permanent.  
- Distilled is derived.  
- Capture never synthesizes.  
- Distill never alters raw.  
- Unsupported information is not invented.  
- Contradictions are preserved rather than silently resolved.  
- After any full distill, the cross-domain index is regenerated.  
- Provider or infrastructure dependence is unnecessary beyond the actual storage location (!Memory on Google Drive).  
- Markdown is sufficient.

## DECISION RULE

If uncertain which mode applies:

Recording new information → CAPTURE.    
Consolidating existing information → DISTILL.    
Full distill or multi-domain distill → DISTILL + regenerate INDEX-cross-domain.md.

Never perform both CAPTURE and DISTILL implicitly in one operation.

## MINIMUM SUCCESS CONDITION

A valid Memdate implementation must preserve this separation:

«CAPTURE = fidelity.    
DISTILL = synthesis.    
INDEX = connective tissue.»

Everything else is implementation detail.  
