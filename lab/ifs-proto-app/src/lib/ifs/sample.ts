import type { Artifact } from "./types";

export const SAMPLE_FIELD = `A product team has two contradictory accounts of a six-week launch delay.

Engineering says the delay is caused by an unresolved dependency on a vendor payments API that was promised for March and slipped to June. A vendor email dated 12 March reads: "Earliest window is Q2. We will not freeze a March contract date."

Product says the delay is caused by engineering over-scoping a rewrite of the matching layer that was never approved. An internal RFC dated 18 March, authored by the payments lead, proposes "replace the matching layer before vendor cutover."

Slack from the VP on 2 April: "I need a single root cause by Friday. Not two stories."

Nobody has published a decision log. The vendor contract has no penalty clause. The rewrite has not shipped. The original matching layer is still in production.`;

export const SAMPLE_ARTIFACT: Artifact = {
  id: "sample-launch-delay",
  createdAt: "2026-09-15T16:00:00.000Z",
  sourceField: SAMPLE_FIELD,
  overlay: false,
  meta: {
    field: "Launch delay root cause",
    date: "2026-09-15",
    protocol: "IFS-Proto-v1.0",
    session: 1,
    status: "INITIAL",
  },
  field: {
    objective:
      "Determine what actually delayed the launch, without collapsing two live accounts into a single moral story.",
    scope:
      "March–April written record (vendor email, RFC, VP request). No interviews. No inferred motives.",
  },
  priorState: {
    reference: null,
    evaluations: [],
  },
  evidence: {
    facts: [
      {
        text: "Vendor email 12 March: earliest window is Q2; March contract date will not be frozen.",
        tag: "FACT",
      },
      {
        text: "RFC 18 March by payments lead proposes replacing the matching layer before vendor cutover.",
        tag: "FACT",
      },
      {
        text: "Original matching layer is still in production. The rewrite has not shipped.",
        tag: "FACT",
      },
      {
        text: "Vendor contract has no penalty clause.",
        tag: "CONSTRAINT",
      },
    ],
    claims: [
      {
        text: "Engineering: delay is the vendor API slip from March to June.",
        tag: "CLAIM",
      },
      {
        text: "Product: delay is an unapproved engineering rewrite of the matching layer.",
        tag: "CLAIM",
      },
      {
        text: "VP Slack 2 April: demands a single root cause, not two stories.",
        tag: "OBSERVATION",
      },
    ],
    unknowns: [
      {
        text: "Whether the rewrite was a response to the vendor slip or an independent scope expansion.",
        tag: "UNKNOWN",
      },
      {
        text: "Whether a March launch was still possible on the old matching layer after the vendor email.",
        tag: "DEPENDENCY",
      },
      {
        text: "No decision log exists for either the vendor date or the rewrite.",
        tag: "UNKNOWN",
      },
    ],
  },
  takes: [
    {
      id: "A",
      title: "External gate",
      argument:
        "The vendor date is a hard constraint. March was already dead on 12 March. The RFC is downstream adaptation: rewrite the matching layer so a Q2 cutover is survivable. Product's 'unapproved rewrite' story treats a response as a cause.",
    },
    {
      id: "B",
      title: "Internal expansion",
      argument:
        "The vendor slip removed a deadline without a penalty. Engineering used the vacuum to open a rewrite that was never approved. The launch is delayed by work that was not required to keep the old matching layer alive. Product is naming the controllable cause.",
    },
  ],
  collisions: [
    {
      pair: "A/B",
      contradiction:
        "Take A treats the RFC as adaptation to a dead March. Take B treats the RFC as the delay itself, opened because March was no longer enforced.",
      premiseFailure:
        "Both cannot be the single root cause. If the old matching layer could still have shipped against a Q2 vendor, A's 'adaptation' claim collapses. If it could not, B's 'unrequired rewrite' claim collapses.",
      discriminator:
        "A dated assessment, before 18 March, of whether production matching could survive a Q2 vendor. Absent that, the VP's 'single root cause' is a category error.",
    },
  ],
  keys: [
    {
      statement:
        "March was already unavailable as a vendor-backed date on 12 March, independent of the RFC.",
      classification: "ESTABLISHED",
      evidence: "FACT: vendor email of 12 March. RFC is dated six days later.",
      confidence: "HIGH",
      vulnerability:
        "A later vendor retraction or a misdated email would reopen March as live.",
      falsifier:
        "A vendor communication after 12 March restoring a March freeze, or proof the 12 March email is inauthentic.",
    },
    {
      statement:
        "The rewrite is a second, internally generated delay vector, not a restatement of the vendor slip.",
      classification: "STRONGLY INFERRED",
      evidence:
        "FACT: RFC exists and has not shipped. UNKNOWN: whether production matching could have waited on Q2.",
      confidence: "MODERATE",
      vulnerability:
        "If the old layer could not accept a Q2 vendor, the rewrite is not independent.",
      falsifier:
        "A pre-RFC technical note showing production matching would fail a Q2 cutover.",
    },
    {
      statement:
        "The demand for a single root cause is structurally false given two live, time-ordered constraints.",
      classification: "STRONGLY INFERRED",
      evidence:
        "CLAIM/OBSERVATION: VP 2 April. Two dated artifacts that do not reduce to one actor.",
      confidence: "HIGH",
      vulnerability:
        "A decision log could still show one actor chose to accept both.",
      falsifier:
        "A signed decision that explicitly chose rewrite-over-wait as the launch path.",
    },
    {
      statement:
        "Absence of a decision log is the operational failure the delay stories are currently substituting for.",
      classification: "PLAUSIBLE",
      evidence: "UNKNOWN: no published decision log. CONSTRAINT: no vendor penalty.",
      confidence: "MODERATE",
      vulnerability:
        "An unpublished log may exist off-Slack.",
      falsifier: "Production of a dated decision record covering vendor date and rewrite scope.",
    },
  ],
  surprise:
    "The VP request is not a request for history. It is a request to erase a fork. The collision does not yield one culprit. It yields a missing decision, which both stories are being used to fill.",
  synthesis: {
    establishedGround:
      "Vendor March was dead on 12 March. A rewrite RFC opened on 18 March and has not shipped. Production still runs the old matching layer. No penalty clause. No decision log.",
    survivingModel:
      "Two sequential delay vectors, not one root cause: an external date failure, then an internal scope opening in the vacuum. Leadership is asking the field to lie about its shape.",
    remainingUncertainties:
      "Whether production matching could have waited on Q2. Whether anyone privately approved the rewrite. Why no decision log was kept.",
    primaryNextTarget:
      "Recover any pre-18-March assessment of production matching versus a Q2 vendor. That single discriminator decides whether the RFC is adaptation or expansion.",
  },
};

export const SAMPLES = [
  {
    id: "launch",
    title: "Launch delay",
    blurb: "Two stories, one missing decision log.",
    field: SAMPLE_FIELD,
    baked: SAMPLE_ARTIFACT,
  },
  {
    id: "brief",
    title: "Contradictory brief",
    blurb: "Legal freeze versus a published roadmap.",
    field: `Legal emailed the team on 3 September: "Do not ship any ranking-model change until the audit packet is closed. This is a freeze, not a preference."

Growth published a Q3 roadmap on 5 September listing "ranking v3 — week of 14 September" as a committed date. The roadmap deck is already in the board packet.

The ranking lead says the freeze only covers training-data changes, not inference-side ranking v3. Legal's email does not mention that distinction. Audit packet status is unknown. Ranking v3 is on a staging flag, not in production.`,
  },
];
