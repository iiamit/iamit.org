---
layout: post
title: "the art of not thinking about elephants"
date: 2011-01-06
permalink: /blog/the-art-of-not-thinking-about-elephants/
---

We have been quite busy here at Security Art in the last few weeks  (as the blog posting frequency suggests), but I figured I would provide a  quick preview of some of the elements we have been working on in terms  of risk management.

Now, I suppose you have read Yoram's earlier post about <a href="http://blog.security-art.com/2010/11/risk-informed-decision-making/">risk informed decision making</a>,  so I won't elaborate on this for too long, nevertheless, we are often  posed with the question "so how does this apply to my organization".  this usually comes form someone who did spend a lot of time and  resources on the technical aspects of their network security. The answer  is usually "let's take a look at how you do your business", which is  what we usually do anyways...

Having that in mind, we set off to investigate in a few recent  engagements how would some of our clients actually fare against an  informed and skilled attacker that has been commissioned to break into  the organization. These engagements have been prompted by a few  incidents in which the organization in questions was basically left in  the dark as they were basing their forensics on the tools that  commercial security vendors provided them with, and nothing much more  than that (remember the ever expressive "generic" detection from your AV  vendor... Ever wonder what it really means?).

<a href="http://www.iamit.org/assets/uploads/2011/01/5phonehome.jpg"><img class="alignright size-medium wp-image-562" title="5phonehome" src="http://www.iamit.org/assets/uploads/2011/01/5phonehome-300x199.jpg" alt="" width="300" height="199" /></a>With  that in mind, and a network to steal data from as a target we accepted  the challenge. The only caveat is that the network was disconnected. For  real. No Internets...

But (and there's always a "but"), there was a voice network that went  out through PSTN to provide the office with telephony connectivity.  Bingo. Ever seen a complete separation of the VOIP network and the  internal network? yeah, neither have I. To make a long story short, we  managed to get the data in the most old fashioned way possible... we  beeped it away (actually transmitted over a VOIP connection using a  custom written simulated trojan that encoded the data into audible voice  signals and left them as a message on one of our voice mailboxes). Done  deal. (and the <a href="https://code.google.com/p/data-sound-poc/">PoC code can be found here</a> if you'd like to play with some of the conecpts).

Bottom line - always remember that when you think of solutions, you  should not be "blinded" by what's available out there and the  accompanying marketing materials. That's basically the "pink elephant"  that vendors tell you not to think about when pitching their solutions.  You usually end up thinking about it (and buying the product thinking  that you'll never see that elephant again as you just bought the best  "anti-elephant" solutions...).

Always challenge the way you think of networks and processes (we did  have to get the code INTO the network somehow... but that's for another  post :-) ), and ALWAYS test your assumptions and protections. You'd be  surprised how easy it mat be to out-compartmentalize you just because  you were boxed in to take care of just a single aspect of the security  9and yes - that even applies to CIO's, CISO's, etc...).