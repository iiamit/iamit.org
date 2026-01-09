---
layout: post
title: "Blocking legitimate sites in real-time"
date: 2008-09-22
permalink: /blog/blocking-legitimate-sites-in-real-time/
---

<div>

I Ran into this on Slashdot: <a href="http://tech.slashdot.org/tech/08/09/21/1827209.shtml">http://tech.slashdot.org/tech/08/09/21/1827209.shtml</a>. It seems like the Google filter for malicious sites was blocking a whole domain name - including all sub-domains, which happened to be a dynamic DNS provider. A Big false positive, and a big problem to all the legitimate sites that were hosted using this domain. Disclosure - I used to run my personal domain using the services provided by DynDNS as well.

The root of the problem here lies in the concept that someone (even if it's Google) presumes that providingÂ a list of "bad" sites can be used to provide security to users. It's just not going to work no matter how fast the list is updated, and no matter how "real-time" the scanning and categorizing of the sites are. Unless the real-time is applied to where it is supposed to be applied - when a user requests content from a site, scanning in real-time the content that this user receives. No more, no less. Remember that content differs from user to user, and malicious code may be delivered to one but not to another user!.</div>