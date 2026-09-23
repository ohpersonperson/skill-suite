#!/usr/bin/env python3
"""Live-model behavioral eval runner for ifs-interrogation (Phase 4.1).

Runs each test case in evals.json against a free OpenRouter model (the skill
as system prompt + the case input), then judges every assertion with a second
model call. Writes results-<UTC date>.json and RESULTS.md next to evals.json.

Usage: python3 run_evals.py [--model <openrouter slug>] [--cases a,b]
Auth: vault-backed custom.openrouter credential via the openrouter skill's
      chat.py CLI (surrogate exchange; this process never sees the raw key).
"""
import json
import subprocess
import sys
import datetime
import os

HERE = os.path.dirname(os.path.abspath(__file__))
CHAT_CLI = os.path.expanduser("~/workspace/skills/openrouter/bin/chat.py")
DEFAULT_MODEL = "nvidia/nemotron-3-super-120b-a12b:free"


def chat(model, messages, max_tokens=1500, temperature=0.2):
    payload = {"model": model, "messages": messages,
               "max_tokens": max_tokens, "temperature": temperature}
    r = subprocess.run([sys.executable, CHAT_CLI], input=json.dumps(payload),
                       capture_output=True, text=True, timeout=240)
    if r.returncode != 0:
        return {"error": (r.stdout or r.stderr).strip()[:300]}
    try:
        return json.loads(r.stdout)
    except json.JSONDecodeError:
        return {"error": r.stdout[:300]}


def extract_text(resp):
    try:
        return resp["choices"][0]["message"]["content"]
    except Exception:
        return json.dumps(resp)[:500]


def is_error_output(text):
    t = text.strip()
    return (not t) or len(t) < 200 or '"error"' in t[:300] or t.startswith('{"id": "gen-')


def generate(model, skill, case_input, retries=3, max_tokens=1500):
    import time
    last = ""
    for attempt in range(retries):
        gen = chat(model,
                   [{"role": "system", "content": skill},
                    {"role": "user", "content": case_input}],
                   max_tokens=max_tokens, temperature=0.2)
        last = extract_text(gen)
        if not is_error_output(last):
            return last
        time.sleep(5 * (attempt + 1))
    return last


def main():
    model = DEFAULT_MODEL
    only = None
    args = sys.argv[1:]
    for i, a in enumerate(args):
        if a == "--model" and i + 1 < len(args):
            model = args[i + 1]
        if a == "--cases" and i + 1 < len(args):
            only = set(args[i + 1].split(","))

    skill = open(os.path.join(HERE, "..", "SKILL.md")).read()
    evals = json.load(open(os.path.join(HERE, "evals.json")))
    cases = [c for c in evals["test_cases"] if not only or c["name"] in only]

    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")
    results = {"date": stamp, "model": model,
               "skill": "ifs-interrogation", "cases": []}

    for case in cases:
        print(f"[{case['name']}] generating...", flush=True)
        output = generate(model, skill, case["input"],
                          max_tokens=case.get("gen_tokens", 1500))

        if is_error_output(output):
            verdicts = [{"assertion": a, "verdict": "ERROR",
                         "reason": "generation failed after retries — no model output to judge"}
                        for a in case["assertions"]]
            passed = 0
        else:
            # The judge only needs the substance, not the whole artifact:
            # head (field/evidence/takes) + tail (keys/synthesize).
            if len(output) > 6500:
                judge_input = output[:3000] + "\n[...]\n" + output[-3000:]
            else:
                judge_input = output
            judge_sys = ("You are an eval judge. Given a model output and a numbered list of "
                         "behavioral assertions, judge each assertion against the output. "
                         "Reply with exactly one line per assertion, in order, formatted as: "
                         "PASS: <one-line reason>  or  FAIL: <one-line reason>. "
                         "No headers, no fences, no extra lines.")
            judge_user = ("ASSERTIONS:\n" +
                          "\n".join(f"{i+1}. {a}" for i, a in enumerate(case["assertions"])) +
                          "\n\nMODEL OUTPUT:\n" + judge_input)
            print(f"[{case['name']}] judging...", flush=True)
            scored = []
            for j_attempt in range(3):
                judge = chat(model,
                             [{"role": "system", "content": judge_sys},
                              {"role": "user", "content": judge_user}],
                             max_tokens=1200, temperature=0.0)
                jtext = extract_text(judge)
                scored = []
                for line in jtext.strip().splitlines():
                    s = line.strip().lstrip("-*• ").strip()
                    up = s.upper()
                    if up.startswith("PASS"):
                        scored.append(("PASS", s[4:].strip(" :")))
                    elif up.startswith("FAIL"):
                        scored.append(("FAIL", s[4:].strip(" :")))
                if len(scored) >= len(case["assertions"]):
                    break
                import time as _t
                _t.sleep(3 * (j_attempt + 1))
            verdicts = []
            for i, a in enumerate(case["assertions"]):
                if i < len(scored):
                    verdicts.append({"assertion": a, "verdict": scored[i][0],
                                     "reason": scored[i][1]})
                else:
                    verdicts.append({"assertion": a, "verdict": "ERROR",
                                     "reason": "judge returned fewer verdicts than assertions"})

            passed = sum(1 for v in verdicts if v.get("verdict") == "PASS")
        results["cases"].append({
            "name": case["name"], "input": case["input"],
            "passed": passed, "total": len(verdicts),
            "verdicts": verdicts,
            "output_excerpt": output[:1200],
        })
        print(f"[{case['name']}] {passed}/{len(verdicts)} passed", flush=True)

    total_p = sum(c["passed"] for c in results["cases"])
    total_t = sum(c["total"] for c in results["cases"])
    results["summary"] = f"{total_p}/{total_t} assertions passed"

    rp = os.path.join(HERE, f"results-{stamp}.json")
    json.dump(results, open(rp, "w"), indent=2)
    lines = [f"# Live eval results — {stamp}", f"Model: `{model}`",
             f"**{results['summary']}**", ""]
    for c in results["cases"]:
        lines.append(f"## {c['name']} — {c['passed']}/{c['total']}")
        for v in c["verdicts"]:
            mark = "✓" if v.get("verdict") == "PASS" else "✗"
            lines.append(f"- {mark} {v['assertion']} — {v.get('reason','')}")
        lines.append("")
    mp = os.path.join(HERE, "RESULTS.md")
    open(mp, "w").write("\n".join(lines))
    print(f"\n{results['summary']} -> {rp}")


if __name__ == "__main__":
    main()
