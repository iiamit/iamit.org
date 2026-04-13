---
layout: post
title: "CyberQRM: Making Cyber Risk Quantification Actually Accessible"
date: 2026-04-13
---

I've been consulting with organizations on cyber risk for years, and one pattern keeps repeating: security leaders recognize the need for quantitative risk assessment, but the gap between knowing you should do it and actually doing it is vast. The tools are expensive, the frameworks are complex, and the open-source options are... well, they're not great.

So I built something.

## The Problem

Risk quantification using FAIR (Factor Analysis of Information Risk) is the right approach. It's rigorous, repeatable, and it gives you the numbers that executives actually understand. But here's the friction:

- Enterprise tools cost six figures. Not everyone has that budget.
- R-based implementations require statistical knowledge most security teams don't have.
- The existing free options? Excel spreadsheets that make your eyes bleed. No persistence, no interactivity, no scenario management.

I kept running into the same conversations: "Yeah, we want to do FAIR. We just can't justify the cost, and we don't have the data science team."

## The Solution

**CyberQRM** is a local, open-source FAIR implementation that does quantitative risk assessment right, without the enterprise price tag or the grad-school mathematics.

What it actually does:

- **FAIR-compliant modeling**: Define Threat Event Frequency, Vulnerability, Asset Value, and Loss Impact using triangular, lognormal, or point distributions. No guessing required.
- **Monte Carlo simulation**: 10,000-iteration runs with reproducible results. Your ALE isn't a magic number, it's grounded in probability.
- **Control effectiveness analysis**: Model current controls and proposed ones. Calculate actual ROI and payback periods instead of hand-waving about "risk reduction."
- **Portfolio aggregation**: Combine scenarios to see organization-wide risk posture.
- **Zero data leakage**: Everything runs locally on your machine. SQLite database. No cloud. No "terms of service."

The app is built in React with a TypeScript backend. Installation takes minutes on Windows, Mac, or Linux. You don't need to be a developer to use it.

## Why This Matters

FAIR isn't sexy. Monte Carlo simulations aren't exciting conference talks. But they work.

The organizations I've worked with that actually implemented quantitative risk assessment did two things differently: they stopped arguing about risk ratings being subjective, and they started making investment decisions based on data. Control A costs $50K and reduces ALE by $200K? Easy decision. Control B costs $300K and reduces ALE by $40K? Also easy.

If you've been wanting to dip your toes into CRQ without committing to expensive tooling or a massive implementation project, CyberQRM is built for that. It's built for practitioners, not vendors.

## Where to Go

The code is up on GitHub: [github.com/iiamit/CyberQRM](https://github.com/iiamit/CyberQRM)

Full documentation, installation scripts for Windows and Unix, and everything else you need. It's MIT licensed.

I built this because I kept having the same conversation. Hopefully, it saves you from having to have it with your vendors.
