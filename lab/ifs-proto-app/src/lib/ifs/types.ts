export const EVIDENCE_TAGS = [
  "FACT",
  "OBSERVATION",
  "CLAIM",
  "INFERENCE",
  "ASSUMPTION",
  "HYPOTHESIS",
  "REQUIREMENT",
  "CONSTRAINT",
  "DEPENDENCY",
  "UNKNOWN",
  "OBFUSCATION",
] as const;

export type EvidenceTag = (typeof EVIDENCE_TAGS)[number];

export const KEY_CLASSES = [
  "ESTABLISHED",
  "STRONGLY INFERRED",
  "PLAUSIBLE",
  "SPECULATIVE",
  "UNRESOLVED",
] as const;

export type KeyClass = (typeof KEY_CLASSES)[number];

export const CONFIDENCES = ["HIGH", "MODERATE", "LOW"] as const;
export type Confidence = (typeof CONFIDENCES)[number];

export const PRIOR_STATUSES = [
  "HELD",
  "CRACKED",
  "MODIFIED",
  "SUPERSEDED",
  "UNRESOLVED",
] as const;
export type PriorStatus = (typeof PRIOR_STATUSES)[number];

export const SESSION_STATUSES = ["INITIAL", "ITERATIVE", "FINAL"] as const;
export type SessionStatus = (typeof SESSION_STATUSES)[number];

export type TakeId = "A" | "B" | "C";
export type CollisionPair = "A/B" | "A/C" | "B/C";

export type EvidenceItem = {
  text: string;
  tag: EvidenceTag;
};

export type Take = {
  id: TakeId;
  title: string;
  argument: string;
};

export type Collision = {
  pair: CollisionPair;
  contradiction: string;
  premiseFailure: string;
  discriminator: string;
};

export type RefinedKey = {
  statement: string;
  classification: KeyClass;
  evidence: string;
  confidence: Confidence;
  vulnerability: string;
  falsifier: string;
};

export type PriorKeyEval = {
  statement: string;
  status: PriorStatus;
  note: string;
};

export type ProbeOverlay = {
  obfuscatedObject: string;
  apparentFunction: string;
  activeTactics: string[];
  jargonFlags: string[];
};

export type Artifact = {
  id: string;
  createdAt: string;
  sourceField: string;
  overlay: boolean;
  meta: {
    field: string;
    date: string;
    protocol: "IFS-Proto-v1.0";
    session: number;
    status: SessionStatus;
  };
  field: {
    objective: string;
    scope: string;
  };
  priorState: {
    reference: string | null;
    evaluations: PriorKeyEval[];
  };
  evidence: {
    facts: EvidenceItem[];
    claims: EvidenceItem[];
    unknowns: EvidenceItem[];
  };
  probe?: ProbeOverlay;
  takes: Take[];
  collisions: Collision[];
  keys: RefinedKey[];
  surprise: string | null;
  synthesis: {
    establishedGround: string;
    survivingModel: string;
    remainingUncertainties: string;
    primaryNextTarget: string;
  };
};

export type InterrogateInput = {
  field: string;
  overlay: boolean;
  prior?: Artifact | null;
};
