---
layout: post
title: "Have something to hide? make a lot of noise about it!"
date: 2007-06-19
permalink: /blog/have-something-to-hide-make-a-lot-of-noise-about-it/
---

There has been a lot of noise on the web over the past few days in regard to the MPack toolkit being used in the Italy region. Everyone has been talking about it vigorously: From the <a href="http://blog.washingtonpost.com/securityfix/2007/06/the_mother_of_all_exploits_1.html" target="_blank">washington post</a>, <a href="http://www.websense.com/securitylabs/alerts/alert.php?AlertID=782" target="_blank">WebSense</a>, <a href="http://blog.trendmicro.com/another-malware-pulls-an-italian-job/" target="_blank">TrendMicro</a>, so eventually even <a href="http://it.slashdot.org/article.pl?sid=07/06/19/0215244" target="_blank">Slashdot</a> picked up on it.

The interesting thing is, no one is actually talking about what MPack can do. They are all saying "oh my god, they are attacking Italian websites by the masses", "iframes are inserted to benign sites and users are getting infected", and so on, and so forth. Great. Have anyone bothered to mention the more acute risks of MPack? besides the obfuscated code (a long time de-facto standard in web-bourne threats), and specific exploit delivery (black hat "customer service"), MPack is tracking users IPs and will actually refuse to provide malicious code to an IP who already got it (evasive in order to minimize code exposure).

And on a final note - It's great to see all the media circling the issue, but please - don't leave the reader with a block of obfuscated code to look at - show what's behind it (obfuscated code is so 2006...).

For our FULL analysis of the real threats in MPack (not just the toolkit, but the methodology being used on all toolkits like it) see our <a href="http://www.finjan.com/Content.aspx?id=827">Q2 Trend report</a>, and take a look at the Malicious Page of the Month of <a href="http://www.finjan.com/Content.aspx?id=1367">May 2007</a> (as I said - MPack is just ONE toolkit, there are more like it, and they all use the same evasive attacks techniques).