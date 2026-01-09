---
layout: post
title: "IFRAME is a security risk???"
date: 2007-10-25
permalink: /blog/iframe-is-a-security-risk/
---

Ok, I have just read the latest in â€œIFRAME Securityâ€ articles and had to write something about it. While going through my usual RSS feeds, I stumbled onto <a href="http://www.thespanner.co.uk/2007/10/24/iframes-security-summary/" target="_blank">this article</a>, which tries to summarize why â€œiframes are a security riskâ€. Not to pick on the specific article, but this is not the first time that I have seen this approach. More notably, we have lately been faced with a barrage of sites that are detected by some AV engines as having a virus on them, when the detection is usually named â€œxxx-IFRAME-xxxâ€.

Scrutinizing the mere existence of an IFRAME element (as we all remember â€“ a <a href="http://www.w3.org/TR/html401/present/frames.html#h-16.5" target="_blank">standard HTML element</a>), sounds pretty bad. Now, we were asking ourselves, how come this has become a security threat? The answer is simpler and more alarming that you might have thought â€“ we are shooting the messenger (excuse the pun...). Simply because an IFRAME element exists (or is dynamically created) in a page, does not mean that it contains malicious content. But since old-tech security products are having a hard time detecting web-bourne crimeware and malware these days (<a href="http://www.finjan.com/Content.aspx?id=1456">dynamic code obfuscation</a>, <a href="http://www.finjan.com/GetObject.aspx?ObjId=443">evasive techniques</a>, etc...), they set their radars to shoot down the iframe elements. Whatâ€™s next? Script tags...

Just to set things straight â€“ the security model we should be looking at should detect actual malicious code in real-time. The source (URL, Domain, etc...) should not matter, and neither shouldÂ  the looks (iframe, packed code, etcâ€¦). By analyzing the true intent of the code, one can be certain that the security policy sought after is really implemented.

Thatâ€™s it for this weekâ€™s rants-and-raves, see you next week in the Greek ICT conference in Athens...