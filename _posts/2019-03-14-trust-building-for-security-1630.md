---
layout: post
title: "Trust-Building For Security"
date: 2019-03-14
permalink: /blog/trust-building-for-security/
---

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">This post was originally published on <a href="https://www.forbes.com/sites/forbestechcouncil/2019/03/14/trust-building-for-security/#6e3156271c4d">Forbes</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Trust is a fickle thing. And, weirdly  enough, the basic assumption of a lot of security practices seems to  include a certain level of trust in users that is pretty hard to justify  these days. This is why we see so many successful breaches that can be  traced back to compromised accounts,  default passwords and social engineering. One then asks, â€œHow should I  reduce or eliminate inherent trust from the equation?â€ Good question!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By rethinking trust in a modern environment, we can get to a stage 
where the starting point of any security-related decision (e.g., 
granting access, allowing/disallowing a certain action) is a state of no
 trust or zero trust. Before jumping into a marketplace where zero-trust
 solution providers will happily part you from a considerable chunk of 
your budget, let's take a look at the core concepts of trust in our 
environments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our starting point, as I mentioned, should be that we do not trust 
anything: not users, networks, devices or even third parties. Building 
trust from this point on can be done by using elements that allow the 
organization to get to a place where a level of confidence is achieved. 
At this point, we can ensure that the decision around the action 
requested by the actor (user) can be backed with actual facts and in a 
way that's relevant to the scenario in question.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Taking into account factors such as the user's environment, 
credentials, secondary identification elements and behavioral history 
(to name a few) can build much better context for the decision of 
whether to grant the user a certain level of access, including which 
action they are trying to perform (i.e., are they trying to simply 
access their own files on a shared storage service, or are they trying 
to delete a table from a production database?). Being able to 
differentiate between different actions also allows us to set different 
thresholds to the level of trust we require. In the traditional model of
 keeping trust, the rule follows that if you have the right username and
 password, you're in. No matter what you intend to do, if you have 
access to a system, you can fully utilize whatever roles and permissions
 you're granted. In a trustless scenario, every action can be associated
 with a different level of trust.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Take a financial user for example. On a typical day, the user may be 
accessing transactional data, such as ledgers, payment processing and 
accounting. However, monthly or quarterly reporting (especially in 
public companies) requires a completely different set of activities and 
permissions. Why should these activities be constantly accessible to our
 user if they are only used once in a long period of time?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In a trustless world, our user will have the defined relationship 
with said reporting functionality, but exercising this functionality 
would be scrutinized both on a temporal perspective (â€œIs it the right 
time of the quarter?â€) as well as on a trustworthiness level (â€œCan we 
accumulate enough evidence to ensure this is indeed the user in 
question?â€). From the user's perspective, the process is still pretty 
much the same. They may be required to present additional validation for
 their identity (responding to a multifactor authentication process), 
but the rest of the elements can be gathered and analyzed automatically 
(â€œCan we identify the device? Is it adequately patched/protected? Can we
 identify the environment?â€).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Through this simple process, we can significantly lower our attack 
surface, and even when users get compromised (and our working assumption
 is that every environment will get compromised), access to sensitive 
assets in our environment will be highly limited, and we will have 
better visibility into adversarial actions that cannot achieve our trust
 requirements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I realize that the concept of throwing away any shred of initial 
trust may sound too harsh or counterproductive to some, but when you 
start to think about the kinds of environments we work in these days, 
the idea makes sense. I can tell you from personal experience that at my
 own company, we've gone through (and still make) significant changes in
 the way we perceive trust.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our latest milestone in that journey has been to rid ourselves of the
 concept of the "enterprise network" as we all move to a guest network. 
The concept of providing an inherent trust value to simply be on a 
certain network doesn't apply anymore to the majority of assets we 
access (this is, of course, in a scenario where most assets are 
cloud-based). This doesn't mean that we are done with our trust journey:
 I keep finding myself questioning and challenging paradigms where 
inherent trust exists, and by going through a process of thinking on 
behalf of our customers, our businesses and, yes, shareholders, we keep 
simplifying the security approach to managing risk and keep ourselves 
nimble.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So here's a quick takeaway for you: Look at the common ways in which 
users in your organization access assets. Now, figure out what trust 
assumptions are being made (implicitly and explicitly) through the 
process. Scrutinize each trust assumption, and ask yourself, â€œShould 
this be an explicit trust assertion that's based on evidence relevant to
 this context?â€ Repeat periodically to make sure you are comfortable 
with the kinds of risks you are taking when leaving these implied trust 
assertions in place.</p>
<!-- /wp:paragraph -->