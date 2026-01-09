---
layout: post
title: "The perils of running a security blog"
date: 2007-08-21
permalink: /blog/the-perils-of-running-a-security-blog/
---

This is a bit off-the-beaten-path of this blog's usual in-depth hardcore security posts. I was going through some of the support related emails that have some relevance to the areas I'm responsible for, and found a pretty interesting correspondence between an avid blog reader (for privacy I'm not going to mention his/her name), and one of our support personnel. The thing that caught my attention was a very alarming subject line - "What are you trying to do - infect me with a Trojan?".

Obviously, with an opening such as that, I immediately went on to read the entire thread, and it seems that our blog posts are being flagged by some anti-viruses as malicious!!!

Knowing first-hand that we don't have any malicious code on our blog (I personally approve every post, and when needed "censor" the code in order to make sure that script kiddies won't have a too-easy job), I tested some of the posts against virustotal.com for reference (not as a benchmark of course, out of curiosity) â€“ as provided by VirusTotal - you can see below the 3 offending engines that marked us as malicious.

<img class="alignnone size-full wp-image-318" title="perils001" src="http://www.iamit.org/assets/uploads/2007/08/perils001.jpg" alt="perils001" width="580" height="745" />
<p align="center"></p>

Now for the nitty-gritty details:
<ol>
	<li>The code we post on the blog is in a presentational context, without any accompanying scripts that may turn it into active scripting code. It just canâ€™t run...</li>
	<li>The code is always sanitized. The malicious parts are being cut in a way that makes them unusable for any malicious purposes. Sometimes though, the surrounding code is left intact. This surrounding code may happen to be a de-obfuscation function, an AJAX request code, etcâ€¦ This code is not malicious in any shape or form, and is used extensively on the web for perfectly benign purposes. In the screenshot below note all the areas that were â€œsanitizedâ€ by us...</li>
</ol>
<img class="alignnone size-full wp-image-320" title="perils002" src="http://www.iamit.org/assets/uploads/2007/08/perils002.jpg" alt="perils002" width="580" height="399" />
<p align="center"></p>

Conclusions: Using signature based security measures may have been OK a few years ago (like 6 or 7), but when modern malicious code is a little bit more sophisticated these days, a much better solution is required that can actually â€œunderstandâ€ what the code really tries to do and make a decision based on that rather than on how the code looks (sounds a little like good-olâ€™e prejudiceâ€¦ move on with the times â€“ this is the modern era where you canâ€™t judge a person on his looks/gender/race/etc...)

Now I want someone to tell me that this is not a false positive...

Really â€“ be safe out there!