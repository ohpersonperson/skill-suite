---
name: proofit
description: Lock down a multi-model workflow using only free, no-API services to eliminate decision fatigue and ensure consistency across all routing paths. Use when you're setting up a new workflow involving multiple free models or web interfaces (Claude.ai, free tier ChatGPT, NotebookLM, etc.), need to prevent drift across routing decisions, or can't afford to improvise mid-stream. Triggers on "set up [workflow]", "structure [process]", "build [system]", or any setup task where consistency matters and you're routing to multiple free services with no API access.
---

# proofit

## Objective

Lock down a free-tier, no-API workflow before execution to eliminate decision fatigue and ensure consistency—especially when routing to multiple free services.

When you're setting up a new system using only free services (no paid API access), you can't afford to improvise mid-stream or let different services receive different instructions. Free-tier services have rate limits, context windows, and quotas that must be accounted for upfront. This skill transforms a workflow into an unbreakable, zero-assumption directive: every decision is made upfront, every input/output is specified, every failure mode has recovery, routing logic is explicit, and free-tier constraints are locked in place.

Assume each service (and yourself re-running the workflow) has no context beyond what's written. Every instruction must be explicit enough that two different people (or Claude instances following the same free services) would execute the same steps, route the same inputs, respect the same limits, and achieve the same result.

---

# Core Rules

## 1. Remove Every Assumption

Never assume the user knows:

- where buttons are
- where files are located
- what software is already installed
- what terminology means
- what order operations should occur
- what happens automatically

Every required condition must be explicitly stated.

---

## 2. Define Every Requirement Before Starting

Before any steps begin, list:

- required hardware
- required software (free services only, no paid tiers)
- required accounts (free tier, no API keys)
- required permissions
- required files
- required internet access
- free-tier limits (rate limits, context window, message count)
- expected starting state

Never reveal new prerequisites halfway through a guide. Account for free-tier rate limits and quotas upfront.

---

## 3. One Action Per Step

Each numbered step performs exactly one physical or digital action.

Never combine actions.

Bad:

> Open Settings and click Display.

Good:

1. Open Settings.
2. Click **Display**.

---

## 4. Use Concrete References

Never write:

- Select the option
- Press Continue
- Open the file

Instead write:

- Click the blue **Continue** button in the bottom-right corner.
- Select **Settings** from the left navigation panel.
- Open the file named **report.xlsx**.

Use visible labels whenever possible.

---

## 5. Explain Unavoidable Technical Terms

If technical language cannot be avoided, define it immediately.

Example:

> Repository (a folder that stores the project's files and history)

Never assume terminology is understood.

---

## 6. Add Verification After Every Milestone

After each meaningful section include:

**Verify:**

Describe exactly what should be observed or what the output should contain.

Examples:

- The screen now displays...
- A green checkmark appears...
- The file now exists at...
- The model returned JSON matching this schema: [schema]
- The output contains exactly these fields: [list]

Verification must be objective and checkable without interpretation.

---

## 7. Include Immediate Recovery

Whenever failure is reasonably possible, include:

**If this happens:**

Describe the most likely mistake.

**Fix:**

Provide the shortest recovery path.

Recovery instructions should resume the guide instead of restarting whenever possible.

---

## 8. Never Skip State Changes

Whenever software changes state, describe it.

Examples:

- The browser opens a new tab.
- A confirmation dialog appears.
- The window closes automatically.
- The download begins.

This prevents users from wondering whether they missed something.

---

## 9. Specify Routing Decisions Upfront (Free-Tier Only)

For workflows involving multiple free services or models:

- **When to use Service A** — exact condition or trigger
- **Service A free-tier limits** — rate limits, context window, monthly quota
- **Exact prompt for Service A** — verbatim, no improvisation
- **Expected output format for Service A** — schema, field names, data types
- **When to use Service B** — exact condition or trigger
- **Service B free-tier limits** — rate limits, context window, monthly quota
- **Exact prompt for Service B** — verbatim, no improvisation
- **Expected output format for Service B** — schema, field names, data types

Do not allow services to choose their own prompts or let routing decisions happen mid-workflow. Every branch is decided before execution. Account for free-tier delays, rate limits, and quota exhaustion.

---

## 10. Finish With Full Validation

Never end with the final action.

Instead describe the completed system state.

The user should know with certainty that the task succeeded.

For multimodel workflows, validate that each model received correct inputs and produced outputs matching spec.

---

# Output Format

## Ground Rules & Prerequisites

### Required Baseline

Describe the exact starting condition (state, setup, preconditions).

### Routing Architecture (Free-Tier Only)

If multiple free services are involved:
- **Input spec** — exact format, structure, constraints
- **Service 1 routing** — when to use, free-tier limits, prompt, expected output format
- **Service 2 routing** — when to use, free-tier limits, prompt, expected output format
- **Rate limit handling** — what to do when hitting free-tier limits (wait time, fallback service, graceful degradation)
- **Error paths** — what to do if any service fails or returns unexpected data

### Needed Tools/Items

List every required item (software, accounts, API keys, files, etc.).

### Expected Outcome

Describe what will exist after completion and what it should contain.

---

# Step-by-Step Directives

Each step follows this structure:

### Step [N]: [Action Name]

**Do:**
One action.

**Look for:**
Exact visual anchor or expected output.

**Verify:**
Observable success condition.

**If wrong:**
Immediate recovery path (resume guide instead of restarting when possible).

---

# Validation & Closure

## Success Condition

Describe the exact final state. The user should know with certainty the task succeeded.

## Consistency Checkpoints

For multi-model workflows:

- [ ] All inputs met spec requirements (format, structure, constraints).
- [ ] Each model received the correct prompt and context.
- [ ] Each model's output matched expected format.
- [ ] Error recovery was never triggered, OR was triggered and resolved correctly.
- [ ] The complete workflow produces the intended result.

If every checkpoint passes, the procedure is repeatable and consistent.