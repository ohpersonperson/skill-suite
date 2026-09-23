---
name: responsibility-obfuscation-probe
description: "Opt-in overlay on the ifs-interrogation kernel for testing evasion hypotheses in interpersonal communication. Therapy-speak and self-regulation claims are evaluated as testable hypotheses (obfuscation vs genuine vs both), never pre-judged. Outputs hypothesis-tagged findings that feed the kernel's Diverge phase. Use when a text exchange, conversation, or described interaction may contain responsibility evasion. No therapeutic framing."
type: overlay
lifecycle: active
version: "2.0"
---

# Responsibility Obfuscation Probe — Kernel Overlay v2.0

An **opt-in overlay** on the `ifs-interrogation` kernel. It tests whether evasive-looking communication is actually evading anything — and if so, what. It does not presume evasion.

**What changed in v2.0 (Phase 2.3):** the v1 probe pre-judged therapy-speak as obfuscation ("mandatory flag… do not let it pass as neutral or virtuous") and structurally could not conclude "no evasion found." v2.0 replaces pre-judgment with hypothesis testing. Every therapy-language claim is evaluated as a testable hypothesis. The probe converts to an IFS overlay: its findings feed the kernel's Diverge phase as hypothesis-tagged material.

## Invocation (opt-in, never default)

Fire when a communication sample — quote, transcript, email, described exchange — may contain responsibility evasion:

- Evasive maneuvers: euphemism, fogging, DARVO, projection, victim-offender reversal, grievance layering.
- Therapy-speak or self-regulation vocabulary in a responsibility context.
- The user's own description softening or reframing behavior (possible meta-obfuscation — surfaced, not presumed).

If the sample is clean, the probe reports "no evasion hypotheses supported" and stands down. That is a valid output the v1 probe could not produce.

## The Hypothesis Protocol (de-biasing core)

When therapy-speak or a candidate evasion marker appears, **do not flag it as a verdict**. Formulate competing hypotheses:

- **H-obfuscation:** the language functions as armor — deflecting responsibility, buying status, or changing the topic.
- **H-genuine:** the language is a sincere self-regulation or communication attempt, correlated with accountability.
- **H-both:** genuine effort that is also conveniently shielding — the common case. Both can be true.

Then test against **discriminating evidence** — observations that would differ between the hypotheses:

- Does the language appear only under pressure, or also unprompted?
- Is it followed by accountability (changed behavior, named responsibility) or by topic change?
- Does the speaker's subsequent behavior contradict or confirm the claimed state?
- Would H-genuine predict something H-obfuscation would not? Name it, then check.

The hypothesis with the most discriminating evidence wins. If evidence is thin, say so — "insufficient evidence to distinguish H-obfuscation from H-genuine" is an honest finding, not a failure.

## Dialog Procedure

1. Ask for the raw input (quote, paraphrase, or full description) if not already provided. Treat every statement as data; do not accept surface framing at face value.
2. Probe with targeted questions that force precision: What exactly was said or done? What was the responsibility context? What changed when pressure increased?
3. Map candidate tactics (euphemism, fogging, DARVO, projection, grievance layering, therapy-language-as-shield) — each as a **hypothesis with discriminating evidence**, not a verdict.
4. Run the hypothesis protocol on every therapy-speak instance.
5. Synthesize: state the best-supported hypothesis plainly, with the evidence that discriminates it. If still murky, state what remains unclear and what evidence would resolve it.
6. Offer to test alternative framings the user proposes — including the framing that no evasion occurred.

## Overlay Contract

- **Feeds the kernel's Diverge phase:** obfuscated-object hypotheses (each tagged with its support status: supported / contested / unsupported), OBFUSCATION-tagged material with hypothesis markers, and Take seeds where the evidence warrants them.
- **The kernel owns:** collision, adjudication, refinement, the canonical state artifact.
- **The probe never:** declares evasion without discriminating evidence, treats therapy-speak as guilty until proven innocent, or slips into therapeutic/coaching framing for the user.
- **Tone:** sharp and direct, no hedging, no softening — but the sharpness serves the hypothesis test, not a pre-written verdict. "The evidence supports H-obfuscation" hits harder than a mandatory flag because it survived testing.

## Synthesis Standard

End every cycle with the hypothesis record:

- Candidate evasion: [specific responsibility possibly dodged, or "none supported"]
- Best-supported hypothesis: [H-obfuscation / H-genuine / H-both / insufficient evidence]
- Discriminating evidence: [observations that separate the hypotheses]
- Key mechanisms: [2–4 specific tactics, each with hypothesis status]
- Remaining questions: [what evidence would resolve the open hypotheses]

## Failure Modes (v1 biases, retired)

- **Mandatory flagging:** treating therapy-speak as obfuscation by policy. Retired — every instance goes through the hypothesis protocol.
- **"Obviously evasive":** letting "obviously" do unexamined work. Replaced with checkable markers + discriminating evidence.
- **Verdict-first synthesis:** presuming an obfuscated object exists. Replaced with best-supported-hypothesis synthesis, including the clean finding.
- **Meta-obfuscation presumption:** the user's softening is surfaced as a *candidate* for examination, not declared as meta-obfuscation.
