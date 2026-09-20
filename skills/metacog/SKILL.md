---
name: metacog
description: |
  Expert guide to metacognition as interrogation (not supervision) — thinking about your own thinking in ways that kill weak reasoning before it hardens into false confidence. Use this skill whenever the user asks about metacognition, reflection, self-questioning, stress-testing ideas, running internal debates, or improving how they learn and think. Also trigger for multi-stage reasoning (planning a project, designing a system, working through a problem), especially when the user wants to avoid overconfidence or premature convergence. The skill covers both single-agent metacognition (Plan→Monitor→Evaluate with adversarial self-collision) and multi-agent debate engines (Diverge→Collide→Adjudicate→Refine→Surprise), and shows how they're the same pattern at different scales.
---

# Metacognition: Interrogation, Not Supervision

Metacognition is the ability to think about your own thinking. But its value isn't in supervision—checking compliance. What you actually need is interrogation: hunting down and killing weak reasoning before it hardens into false confidence.

This skill teaches two things:
1. How to run metacognition as a single agent (inside your own head)
2. How to scale that pattern to multi-agent debate (your five-stage engine)
3. Why they're not two different tools—they're the same architecture at different scales

---

## The Three-Stage Foundation (Single Agent)

Every metacognitive process has three checkpoints:

### 1. Pre-Assessment (Plan)
Before starting a task or committing to an approach, ask:
- **What is the goal?** Be specific—vague goals stay vague.
- **What do I already know?** Establish your starting position.
- **What's the best approach?** Don't just pick the first method—generate at least one alternative and note why you rejected it. The rejection itself is information.

**Why this matters:** You can't interrogate what you haven't made explicit.

### 2. Self-Monitoring (Monitor)
During the task, check in:
- **Am I on the right track?** (Self-report layer—useful but not trustworthy on its own.)
- **Am I understanding this?** If not, why?
- **Do I need to change strategy?** This is where most people stop.

**The gap most people miss:** Asking "am I on track?" is not the same as asking "is this track right?" One is a self-report. The other is interrogation.

### 3. Post-Assessment (Evaluate)
After completing the task, reflect:
- **How well did I do?** 
- **What worked well, and what didn't?**
- **What could I do differently next time?**

---

## The Critical Insert: Self-Collision

The original three-stage model has a fatal blind spot: **it assumes your current strategy is worth stress-testing.** It doesn't force you to argue against yourself mid-stream.

Insert this between Monitor and Evaluate (or run it live during Monitor):

### Self-Collision (Manufactured Disagreement)
Deliberately argue against your own current approach. Not "am I on track"—that's self-report. This is adversarial friction:

- **What would someone who thinks I'm wrong say, specifically?** Not "someone might disagree" but the strongest, most concrete objection.
- **What's the strongest case for the opposite approach?** Not a weak strawman—the *actually* good version of the other side.
- **Am I continuing because it's working, or because I've already sunk cost into it?** Confidence and correctness are different variables. Conflating them is the most common failure in self-assessment.

**This is the stage that most reflection frameworks omit—because it's not "checkable" the way Plan/Monitor/Evaluate are. Do it anyway.**

---

## The Upgraded Evaluate: Skeptic Pass

Before "what worked," ask the harder question *first*:

- **Was I actually right, or did it just *feel* right?** These are independent dimensions.
- **What survives if I try to argue against my own conclusion?** Not everything does.
- **What could I do differently next time?** (This stays the same—it's good.)

---

## The Final Stage: Self-Surprise

The move most reflection frameworks omit because it's not verifiable:

- **What did I learn about *how I think* that I wasn't trying to learn?** This is different from "did the task work"—it's about discovering your own patterns.
- **Did the friction between my initial approach and its counter-argument produce anything neither one contained alone?** This is the stage where emergence happens.

**Why this matters:** If you ran collision and it produced nothing new, you didn't actually collide—you just ran the same thing twice. Surprise is the check.

---

## The Mapping: Single Agent to Multi-Agent

Your Plan→Monitor→Evaluate triad is one instance of a three-stage loop. Your Diverge→Collide→Adjudicate→Refine→Surprise engine is its five-stage analog at scale. They're the same pattern:

| Single Agent | Multi-Agent |
|---|---|
| Plan | Diverge |
| Monitor | (absent—multi-agent skips self-report) |
| Evaluate | Adjudicate + Refine + Surprise |
| (implicit) | Collide |

But there's a key difference: **multi-agent systems make collision explicit and unavoidable.** Single-agent systems have to *choose* to self-collide. That's why multi-agent engines are valuable—they force the friction you'd naturally skip.

---

## The Five-Stage Engine (Multi-Agent)

When you have multiple models or personas, the pattern scales:

### 1. Diverge
Each model/persona generates its take independently, with no cross-visibility. Friction-first: no premature convergence, no single model anchoring the others.

### 2. Collide
Positions are shown to each other. Not merged—collided. The goal is surfacing contradiction and disagreement as data, not smoothing it over.

**Key:** This is where the value lives. If you skip Collide and jump to Adjudicate, you're just aggregating opinions. You lose the disagreement signal.

### 3. Adjudicate
Skeptic-role pass. Stress-tests each surviving claim:
- Kill the weak ones
- Flag what's structurally sound vs. what just sounded confident
- Note dependencies and brittleness

### 4. Refine
Survivors get tightened—pruned and precision-edited against the adjudication notes. **Not rewritten from scratch.** Refinement assumes the core claim survived scrutiny.

### 5. Surprise
The deliberate final stage most pipelines skip: explicitly prompt for the claim or connection that no single model produced alone—something only visible from having watched the collision. This is where emergent value lives. It's the stage that justifies multi-model over "single-model-asked-five-times."

---

## Ordering Matters: Don't Evaluate Before Colliding

This is the most common failure mode:

**Wrong:** Diverge → Adjudicate → Refine (skipping Collide)
- You're polishing claims before you've stress-tested them against disagreement
- You're aggregating opinions, not refining arguments

**Wrong:** Diverge → Collide → Refine → Adjudicate → Surprise
- You refine before you've adjudicated
- You polish claims that should've died
- You waste effort on refinement that adjudication will invalidate

**Right:** Diverge → Collide → Adjudicate → Refine → Surprise
- Collision surfaces what's actually contested
- Adjudication kills what's weak
- Refinement tightens what survived
- Surprise asks if the collision produced emergence

---

## Teaching This to Different Audiences

**For advanced practitioners or esoteric domains:**
Teach the full cycle—Plan→Self-Collision→Evaluate with skeptic pass and Self-Surprise. Assume the learner can handle adversarial self-questioning as a default mode. This is the interrogation model.

**For novices or early learners:**
Start with the base three-stage version (Plan/Monitor/Evaluate). Once basic competence is built, introduce Self-Collision and Self-Surprise as advanced modules. Otherwise you risk teaching people to doubt themselves into paralysis before they've built confidence.

Know your audience. The difference matters.

---

## How to Apply This

**Single-agent (internal debate):**
When you're working through a problem alone, use the three-stage model but *insert Self-Collision*. Catch yourself mid-stream. Argue against your own approach. Then evaluate.

**Multi-agent (formal debate engines):**
Build the five-stage engine into your workflow. Make Collide happen. Make Adjudicate sharp. Make Surprise the final question.

**Hybrid:**
Use your internal Self-Collision to train your instinct. Use multi-agent engines when the stakes are high or you need external friction.

---

## Key Insight Recap

Confidence and correctness are different variables. Your metacognitive process should interrogate the gap between them, not just check that you feel good about your work.

The five-stage engine is metacognition scaled up. Single-agent interrogation is metacognition running in isolation. Same pattern. Different scale. Use both.
