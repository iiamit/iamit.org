---
layout: post
title: "Do as I say, not as I do. RSA, Bit9, Adobe, and others..."
date: 2013-02-09
permalink: /blog/do-as-i-say-not-as-i-do-rsa-bit9-adobe-and-others/
---

So you thought you had everything nailed down. You might have even gone past the "best practice" (which would have driven you to compliance, and your security to the gutter), and focused on protecting your assets by applying the right controls in a risk-focused way.

You had your processes, technologies, and logs all figured out.

But you still got owned. Want to know why? Because you are still a littleÂ naÃ¯ve.

<img class="alignright" alt="" src="http://api.ning.com/files/18ErKoZMIAG5zLj2sYclrlvvgnu7RsHzYcKO8Edb-A3NKZYZSndBPPcUCs-0iDlK*bs0R0p*47PyXOUNyS7YAZoRzFTKEKPf/Hypocrite1.jpg" width="321" height="257" />You put your trust in big name vendors that preached for you to get your stuff together. You listened to them, were convinced by their pitch, and you might have even put their products through rigorous testing to make sure they deliver. But you forgot one thing. Big ticket vendors are no much different from aÂ zealotÂ church.

They will preach, and guide you through to the righteous passage. But when you look behind the curtain, well, you know what I mean...

The <a href="http://krebsonsecurity.com/2013/02/security-firm-bit9-hacked-used-to-spread-malware/">latest</a> Bit9 compromise isn't that surprising. Bit9's customers are obviously very security aware as they opted to use a whitelisting product to protect their computing assets. As such, these customers are most probably high value targets to adversaries. It also means that with such an awareness to security, these customers probably have more measures and practices to mitigate and protect themselves from attackers. That means, that if I were to scope such a target for an attack, I would have focused on supply chain elements that were weaker than the target itself (much like the way we teach at out Red-Team Testing classes...).

<a href="http://www.rsa.com/node.aspx?id=3872">RSA</a> was such a target. <a href="http://blogs.adobe.com/asset/2012/09/inappropriate-use-of-adobe-code-signing-certificate.html">Adobe</a> is a similar one. <a href="https://blog.bit9.com/2013/02/08/bit9-and-our-customers-security/">Bit9</a> just was for some of its customers.

Color me surprised.

And yes - if you are a vendor that gloats over the latest compromise - please don't. If you haven't gone through a similar threat model your products are either not good enough (hence your customers aren't high value targets. How does that make you feel now?), or your own security isn't up to speed and you haven't realized you have been breached yet. Now go clean your own mess.

If you are a security consumer (hence - care a bit more for your information than just getting compliant and tabling it), make sure not to make any assumptions about your providers. Especially about your providers. They aren't the target. You are. As such, they are the vehicle, and they have a more generalized security practice than yours. Account for it in your security strategy, and never fully trust anything outside of your control span. It is your responsibility to hold them to at least their own standard, and demand oversight and proof that they do so.