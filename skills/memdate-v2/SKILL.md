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
