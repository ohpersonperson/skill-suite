# Changelog — responsibility-obfuscation-probe

## 2026-09-23 — v2.0 (de-biasing rewrite + overlay conversion; Phase 2.3)

- **De-biasing:** replaced the v1 "mandatory flag" (therapy-speak pre-judged as obfuscation, "do not let it pass as neutral or virtuous") with the hypothesis protocol. Every therapy-language claim is now tested as H-obfuscation vs H-genuine vs H-both against discriminating evidence. The probe can now conclude "no evasion hypotheses supported" — a valid output v1 could not produce.
- **Verdict-first synthesis retired:** v1 presumed an obfuscated object existed and stated it "without apology." v2.0 synthesizes the best-supported hypothesis, including insufficient-evidence findings.
- **"Obviously evasive" retired:** replaced with checkable markers plus discriminating evidence.
- **Overlay conversion:** the probe is now an opt-in overlay on the `ifs-interrogation` kernel. Its hypothesis-tagged findings (supported / contested / unsupported) feed the kernel's Diverge phase as Take seeds and OBFUSCATION-tagged material. The kernel owns collision through surprise.
- Preserved from v1: no therapeutic/coaching framing, sharp direct tone (now serving the hypothesis test, not a pre-written verdict), the dialog procedure's precision-forcing questions, meta-obfuscation surfacing (as candidate, not verdict).
