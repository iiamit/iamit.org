---
layout: post
title: "Elastic Permissions"
date: 2020-06-23
permalink: /blog/elastic-permissions/
---

<!-- wp:paragraph -->
<p>Over the past two years my colleagues and friends have heard me talk about Elastic Permissions, and at some point I started hearing other people mention the term (yay for planting the seeds through consistently using a new term...). So I figured - for the sake of clarity, let's put this out there for posterity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The goal of applying the Elastic Permission model is to reduce the effective attack surface for an organization.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Elastic Permissions (can you tell I am an Amazon AWS veteran? ;-) ) is a concept where permissions are being constantly and dynamically evaluated against the actual use of the granted permissions, and reduced to where they match said usage. This requires a few phases: mapping, measuring, and elasticity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Mapping - in order to apply Elastic Permissions effectively, we first need a system to identify all the users, accounts, roles, assets, as well as all the relations between them. Think about a sort of a graph map where you can traverse between users, their accounts, the assets (whether data or functional/compute) using the effective set of permissions that tie them together. Now apply that to your organization, across all systems and platforms (including across platforms - for example IaaS, Saas, etc...).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Measuring - once you have a map graph, the actual use of every permission should be measured. This needs to be recorded in a way that reflects usage over time, in order to identify patterns of seasonality, volume, and misuse/under-use. In an essence, this phase applies weights to the graph map - where the higher the weight, the more use that set of permission gets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Elasticity - based on the mapping and the difference between granted and used permissions, the system should revoke access dynamically. This means that unused (or even less used) permissions are being revoked. Additionally, permissions that have been identified as being used seasonally, should be revoked while unused, and re-granted in preparation for the usage period (then to be revoked again). Lastly - since there is an expected potential friction where permissions are incorrectly revoked, the system should offer a way to natively escalate and regain privileges (for example - through an MFA challenge) and apply learning to the decision to revoke the permission set in the future. Systems should also consider several grades of escalation based on the confidence level of the revocation (from granting access immediately, through challenge-response to verify with the user their intent, to an out-of-band escalation to a manager/SOC).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1773,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://www.iamit.org/assets/uploads/2020/06/elastic-permissions-image.png" alt="" class="wp-image-1773"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The end result as stated in the Elastic Permission goal is to accomplish a reduction in the effective attack surface. In my personal experience working with several systems like this, organizations should expect somewhere around 70-80% reduction, but these numbers will depend on the level of complexity of the organization (how many platforms are used, and the relationships between platforms), and allow the security organization to focus on real incidents since the elasticity acts as sort of a canary/honeypot.</p>
<!-- /wp:paragraph -->