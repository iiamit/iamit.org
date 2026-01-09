---
layout: post
title: "And the winner for \"top virus\" of 2007 is..."
date: 2008-01-06
permalink: /blog/and-the-winner-for-top-virus-of-2007-is/
---

Not a virus. Not even a malware. Neither is the runner upâ€¦ It's the method of how malware is populated.

According to <a href="http://www.sophos.com/pressoffice/news/articles/2008/01/toptendec07.html" target="_blank">a report</a>, the most common malware attack in 2007 is the notorious IFRAME.

<img class="aligncenter size-full wp-image-308" title="top_virus_2007" src="http://www.iamit.org/blog/assets/uploads/2008/01/top_virus_2007.png" alt="top_virus_2007" width="454" height="298" />
<p align="center"></p>

On our <a href="http://www.finjan.com/content.aspx?id=1367">monthly</a> and <a href="http://www.finjan.com/content.aspx?id=827">quarterly</a> reports we provided more in-depth analysis of such top-ranking IFRAME and obfuscated code.
In Finjanâ€™s terminology, the top-ranked virus IFRAME is not a malware or a virus, it's more like how criminals are directing usersâ€™ browsers to a malware. Interestingly enough â€“ the runner-up is â€œMal/ObfJSâ€ â€“ Obfuscated javascript, again no a virus or malware but a simple technique to hide exploits from signature matching inspection.

How come? Well, remember that signature-based solutions are in a dire need to be able to stop the more common techniques employed by attackers (we have actually started to report on them during 2006),Â since the detection technology is limited in detecting the obfuscation and evasive techniques â€“ typically signaturing the de-obfuscating portions of the script.

This has led to the recent <a href="http://isc.sans.org/diary.html?storyid=3803" target="_blank">reports</a> of <a href="http://isc.sans.org/diary.html?storyid=3797" target="_blank">false-positives</a> by <a href="http://www.kaspersky.com/technews?id=203038717" target="_blank">multiple</a> AV <a href="http://erratasec.blogspot.com/2008/01/wow.html" target="_blank">vendors</a> lately, as active-content is becoming more and more complicated, and the ways to express an action in interpreted code are very complex â€“ meaning that signatures in this realm are almost obsolete (you can see the honorary mention of the â€œDFâ€ function (Mal/FunDF) in the 10th place, which is a signature on a specific de-obfuscating function â€“ again, no mention of any malicious action taken by it, itâ€™s just that it had itâ€™s 15 minutes of fame when it was used by toolkits to deliver actual malicious codeâ€¦)

Looking forward to 2008 I really hope that the industry as a whole will not be lagging behind the attack vectors as itÂ did in 2007, and new and improved engines would enable end-users (especially consumers who do not benefit from the more sophisticated solutions offered to enterprises) to have better protection when using the internet.

I know what my new-year resolutions are â€“ do you?