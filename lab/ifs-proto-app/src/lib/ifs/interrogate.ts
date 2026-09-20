import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { PROTOCOL_VERSION, SYSTEM_PROMPT } from "./protocol";
import type { Artifact, CollisionPair, TakeId } from "./types";

const InputSchema = z.object({
  field: z.string().trim().min(40).max(8000),
  overlay: z.boolean(),
  prior: z.unknown().nullable().optional(),
});

export type EngineStatus = {
  ready: boolean;
  reason: "ok" | "no-key" | "credits" | "blocked" | "unknown";
};

type ModelArtifact = Omit<
  Artifact,
  "id" | "createdAt" | "sourceField" | "overlay" | "meta"
> & {
  meta: { field: string; status: Artifact["meta"]["status"] };
  probe?: Artifact["probe"] | null;
};

const XAI_CHAT = "https://api.x.ai/v1/chat/completions";
const XAI_KEY = "https://api.x.ai/v1/api-key";
const MODEL = "grok-4.5";

function parseXaiError(raw: string): { code: string; error: string } {
  try {
    const parsed = JSON.parse(raw) as {
      code?: string;
      error?: string | { message?: string };
    };
    const error =
      typeof parsed.error === "string"
        ? parsed.error
        : parsed.error?.message ?? raw;
    return { code: String(parsed.code ?? ""), error };
  } catch {
    return { code: "", error: raw };
  }
}

function messageForXai(status: number, raw: string): string {
  const { code, error } = parseXaiError(raw);
  const blob = `${code} ${error}`.toLowerCase();
  if (blob.includes("spending-limit") || blob.includes("run out of credits")) {
    return "xAI credits are exhausted. Add credits or a Grok subscription, then run Interrogate again.";
  }
  if (status === 429) {
    return "The engine is rate-limited. Wait a moment and run it again.";
  }
  if (status === 401) {
    return "The interrogation engine could not authenticate.";
  }
  if (status === 403) {
    return "The interrogation engine is blocked for this account.";
  }
  return `Engine error ${status}`;
}

function parseModelJson(raw: string): ModelArtifact {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced ? fenced[1].trim() : trimmed;
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start < 0 || end <= start) {
    throw new Error("The engine did not return a state artifact.");
  }
  return JSON.parse(body.slice(start, end + 1)) as ModelArtifact;
}

function normalize(data: {
  field: string;
  overlay: boolean;
  prior?: Artifact | null;
  model: ModelArtifact;
}): Artifact {
  const session = data.prior ? data.prior.meta.session + 1 : 1;
  const takes = (data.model.takes ?? []).filter((t) =>
    ["A", "B", "C"].includes(t.id),
  ) as ModelArtifact["takes"];
  const pairs: CollisionPair[] =
    takes.some((t) => t.id === "C") ? ["A/B", "A/C", "B/C"] : ["A/B"];
  const collisions = (data.model.collisions ?? []).filter((c) =>
    pairs.includes(c.pair as CollisionPair),
  );
  const keys = (data.model.keys ?? []).slice(0, 5);
  const probe =
    data.overlay && data.model.probe ? data.model.probe : undefined;

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    sourceField: data.field,
    overlay: data.overlay,
    meta: {
      field: data.model.meta.field || "Untitled field",
      date: new Date().toISOString().slice(0, 10),
      protocol: PROTOCOL_VERSION,
      session,
      status: data.model.meta.status ?? (data.prior ? "ITERATIVE" : "INITIAL"),
    },
    field: data.model.field,
    priorState: data.model.priorState ?? {
      reference: data.prior?.meta.date ?? null,
      evaluations: [],
    },
    evidence: {
      facts: data.model.evidence?.facts ?? [],
      claims: data.model.evidence?.claims ?? [],
      unknowns: data.model.evidence?.unknowns ?? [],
    },
    probe,
    takes: takes.map((t) => ({
      id: t.id as TakeId,
      title: t.title,
      argument: t.argument,
    })),
    collisions,
    keys,
    surprise: data.model.surprise || null,
    synthesis: data.model.synthesis,
  };
}

export const interrogateField = createServerFn({ method: "POST" })
  .validator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<
    { ok: true; artifact: Artifact } | { ok: false; error: string }
  > => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "The interrogation engine is unavailable in this environment." };
    }

    const prior = (data.prior as Artifact | null | undefined) ?? null;
    const userParts = [
      `OVERLAY: ${data.overlay ? "ON" : "OFF"}`,
      prior
        ? `PRIOR ARTIFACT (test these Keys, do not inherit Takes as authority):\n${JSON.stringify(
            {
              meta: prior.meta,
              keys: prior.keys,
              synthesis: prior.synthesis,
            },
            null,
            2,
          )}`
        : "PRIOR ARTIFACT: none",
      `FIELD:\n${data.field}`,
    ];

    const res = await fetch(XAI_CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.2,
        max_tokens: 3500,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userParts.join("\n\n") },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return { ok: false, error: messageForXai(res.status, errText) };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content ?? "";
    try {
      const model = parseModelJson(text);
      return { ok: true, artifact: normalize({ field: data.field, overlay: data.overlay, prior, model }) };
    } catch {
      return { ok: false, error: "The engine returned an unreadable artifact. Try a tighter field." };
    }
  });

export const getEngineStatus = createServerFn({ method: "POST" }).handler(
  async (): Promise<EngineStatus> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ready: false, reason: "no-key" };

    try {
      const res = await fetch(XAI_KEY, {
        headers: { Authorization: `Bearer ${apiKey}` },
        signal: AbortSignal.timeout(8000),
      });
      if (res.status === 401) return { ready: false, reason: "blocked" };
      if (!res.ok) {
        const raw = await res.text().catch(() => "");
        const { code, error } = parseXaiError(raw);
        const blob = `${code} ${error}`.toLowerCase();
        if (blob.includes("spending-limit") || blob.includes("run out of credits")) {
          return { ready: false, reason: "credits" };
        }
        return { ready: false, reason: "unknown" };
      }
      const info = (await res.json()) as {
        team_blocked?: boolean;
        api_key_blocked?: boolean;
        api_key_disabled?: boolean;
      };
      if (info.team_blocked || info.api_key_blocked || info.api_key_disabled) {
        return { ready: false, reason: "credits" };
      }
      return { ready: true, reason: "ok" };
    } catch {
      return { ready: false, reason: "unknown" };
    }
  },
);
