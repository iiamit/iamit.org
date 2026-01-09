---
layout: post
title: "The Turkish hack and another case for IL-CERT"
date: 2010-07-19
permalink: /blog/the-turkish-hack-and-another-case-for-il-cert/
---

You have been living under a rock if you haven't heard of the Turkish hack a couple of days ago. Basically - a <a href="http://www.cyber-warrior.org/">Turkish hacker forum</a> that bolsters a strong anti-Israeli attitude has been practicing hacking and mostly defacing Israeli sites for the past few months (years).

Now, this is nothing new, and as I stated before, has been going on for years. I'm not even going to go to the political discussion on whether this is sponsored by the government (or have been turned a blind eye by it), as opposed to Israeli hackers that would like to retaliate but know that they would be charged in their country for computer crimes.

No.

The focus here is that there was such a huge media outrage over the fact that so many (more than 100,000) user accounts have been affected, and everyone is scrambling to figure out who should have notified who on what. A couple of funny things to consider in this incident:
<ol>
	<li>There are more than a couple of companies in Israel that specialize in gathering intelligence on such forums as their core business. <a href="http://www.maglangroup.com/maglan/research.jsp">One company</a> has even been quoted that they knew of this issue months ago.</li>
	<li>Some of the accounts that have been breached belong to government personnel (or at least have a .gov.il email account with it's corresponding password).</li>
	<li>The sites that have been breached were not notified until a couple of days ago. They have no-one to consult with in terms of how to handle this incident, or how to fix their issues (ever heard of one-way password hashing??? apparently not...).</li>
</ol>
Why am I bringing up these specific point? Let's see, and now from a perspective of a normal CERT that if would have been here would have addressed these as follows:
<ol>
	<li>Companies that deal with security research can send their insights over local security incidents to a coordinating entity - IL-CERT that would manage the anonymous and responsible notification to the affected parties. No need to figure out a local policy for notifications, no need to dig out contact details for obscure police departments and guesstimate whether they even care about your data, and no need to get into the politics of the existing semi-CERTS and who they constituency is.</li>
	<li>Coordination and notification to government related bodies wouldÂ  be handled through the <a href="http://cert.gov.il/">ILGOV-CERT </a>(although their website is not too promising, there are ways to reach them...). Additionally, collateral damage notification would also be handled in the same way (i.e. - a .gov.il site has not been breached, but .gov.il account have been found through breaching a .co.il server. This is the kind of thing that ILGOV-CERT does not know how to handle right now...).</li>
	<li>Incident handling support and assistance would have been provided by subject-matter experts to any site that have experienced a breach. No cost associated (unless actual work on the servers or code would have been sought after, in which case the IL-CERT would have probably done a referral as initially it would not be a commercial body).</li>
</ol>
Simple huh? And you keep wondering how come a place where so much innovation in science, technology and security has come from is still in the dark ages of it's own internet security...