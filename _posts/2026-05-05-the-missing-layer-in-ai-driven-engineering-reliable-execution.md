---
layout: post
title: "The Missing Layer In AI-Driven Engineering: Reliable Execution"
date: 2026-05-05
categories: [forbes, security, devops, ai]
---

Engineering teams have adopted AI at a remarkable pace. Code is being generated faster, infrastructure is being designed through prompts, and security issues are being surfaced in real time.

On paper, this looks like meaningful progress toward autonomous engineering.

In practice, most teams are not getting closer to autonomy. They are getting better at producing work that still needs to be reviewed.

This distinction is subtle but important. We tend to evaluate AI progress based on how good the outputs look. If the code compiles, the configuration resembles best practice or the suggested fix appears reasonable, we assume the system is working.

For instance, a team I worked with introduced AI-generated code along with AI-assisted pull request reviews, expecting a reduction in backlog and faster delivery cycles. What happened was the opposite. The volume of pull requests increased significantly, more issues were flagged by automated reviews, and engineers found themselves spending more time validating and reconciling outputs rather than less.

But those are not the metrics that determine whether something can be trusted in production. The real question is far simpler: Can you apply the output without needing to second-guess it?​

For most teams today, the answer is still no. But it's often a limitation of execution, not intelligence.

## The Rise Of Paid Uncertainty

That gap is becoming increasingly visible in the latest wave of AI-driven code review tools. Multi-agent systems can now scan pull requests (PRs), identify potential issues and generate feedback at scale. The promise is compelling: faster reviews, broader coverage and fewer bugs reaching production.

But when you look more closely, a different reality emerges.

These systems often charge on a per-review basis, sometimes in the range of $15 to $25 per pull request , with costs scaling alongside complexity. Reviews can take meaningful time to complete as multiple agents analyze code paths and dependencies. And even after that process, what teams receive is still a set of findings. Not a guaranteed fix. Not an outcome that can be safely applied without additional work .

At that point, the model starts to break down.

You generate code using AI. You pay again to have AI review that code. Then you either pay again or spend engineering time to fix what was found. In between, you are waiting for cycles to complete and results to be validated.

Honestly, this is a fundamentally misaligned model.

It effectively prices uncertainty into the workflow. Every AI-generated output carries a cost not just in compute, but in the effort required to verify and operationalize it.

As usage scales, those costs compound. More generated code leads to more reviews, more findings and more downstream work.​​

## Why This Model Will Struggle To Scale

​This is where the diminishing returns of generative AI become visible. Creating code is relatively easy to accelerate. Maintaining it, debugging it and securing it within real systems is far more complex. That is where most engineering effort is spent, and where probabilistic outputs create the most friction.

In fact, Faros ​AI analyzed over 10,000 developers to find that while developers using AI completed 21% more tasks and merged 98% more PRs, the review time for PRs increased 91%.

What emerges is not true automation, but high-speed work generation.

Teams are able to produce more changes, but they are also required to review more changes. The bottleneck shifts from writing code to determining whether what has been generated is safe to use.

This dynamic does not scale. As AI systems improve, the volume of generated output increases, but the capacity to validate that output does not increase at the same rate. In many cases, it becomes the limiting factor in delivery.

The more AI you introduce, the more review work you create.

## The Missing Layer: Reliable Execution

This points to a deeper structural issue. We do not have a reliable way to move from generated output to production-safe execution without inserting a human into every decision.

As long as that remains true, AI will remain assistive rather than autonomous.

The path forward is not simply improving model accuracy. It requires rethinking how execution is handled.

In traditional engineering systems, trust is built through determinism. A test either passes or fails. A policy either enforces or blocks. A deployment either succeeds or does not. These systems operate within defined constraints and produce consistent outcomes.

AI-generated outputs sit outside of that structure. They are usually created before those constraints are enforced, which is why they require review.

If AI is to move beyond assistance, execution must become part of the system itself. Outputs need to be evaluated and transformed in ways that guarantee alignment with the rules governing the environment in which they are applied. When that layer is in place, the economics and workflow change. Teams are no longer paying per review or waiting on validation cycles. Engineers shift from reviewing outputs to defining the constraints that govern them.

## Where This Leaves Us

For the foreseeable future, AI in engineering will likely continue to feel powerful but incomplete. It will accelerate the generation of work, but it will not eliminate the need to validate that work. The industry is not being held back by a lack of intelligence but by a lack of reliable execution. ​

Until that gap is addressed, AI will remain a tool that speeds up engineering, rather than one that can be trusted to complete it.​​ In the meantime, I’ve found a few approaches to be effective.

First, treat AI systems as contributors rather than decision-makers. That means being explicit about where human validation is required instead of assuming that better models will eliminate that need.

Second, focus on reducing variability in outputs rather than just increasing volume. Standardizing policies, constraints and expected patterns reduces the burden on engineers to interpret every result.

Third, be very deliberate about the workflow design. Many teams layer multiple AI tools without realizing they are introducing additional latency, cost and complexity at each step.

Even highly capable models still produce outputs that require interpretation, and without a reliable execution layer, that interpretation has to happen manually. That’s where the scaling challenge shows up.​

---

*Originally published on [Forbes Technology Council](https://www.forbes.com/councils/forbestechcouncil/2026/05/05/the-missing-layer-in-ai-driven-engineering-reliable-execution/) on 2026-05-05.*
