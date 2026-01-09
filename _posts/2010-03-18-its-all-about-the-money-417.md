---
layout: post
title: "It's all about the money"
date: 2010-03-18
permalink: /blog/its-all-about-the-money/
---

In my recent coverage of CyberCrime and CyberWar, I have neglected my old "friends" at the criminal world and gave them a little less attention (at least on their consumer business). It's time to take a look back and see what are they up to.

Well - it might seem as non-news for readers of this blog (or people who were in my presentations at <a href="http://www.blackhat.com/html/bh-europe-08/bh-eu-08-archives.html#Amit">BlackHat</a>, <a href="http://defcon.org/html/links/dc-archives/dc-17-archive.html#Amit">DefCon</a>, <a href="http://hackerhalted.com/Conference/Speakers/IftachIanAmit/tabid/114/Default.aspx">HackerHalted</a>, <a href="http://www.newcamelotcouncil.com/SpeakersEN.html">ExcaliburCon</a>, <a href="http://technet.microsoft.com/en-us/security/cc748656.aspx">BlueHat</a>, or in other venues), but a couple of interestingÂ sound-bytesÂ may catch your eye:

<img class="  alignright" title="That's how $205M look like..." src="http://www.justice.gov/dea/photos/operations/205million_fig1.jpg" alt="" width="300" height="225" />

1. ZeuS (good ol'e friend, how I missed debugging thou) has implemented licensing schema. The schema enforces that the licensed software be only used on licensed machines. News? yes, kind'a. Remember Neosploit (another personal pet-peeves)? Then you must remember the licensing scheme there as well. Pretty close to what ZeuS just introduced. And they say that the world has stopped sharing. pffff. And you can quote me on that. As anyone who ever took more than a brief look at how these things operate, the only takeaway possible is simple: It's all about the money (hence - license enforcement is key. Ask Microsoft :-) )

2. Staying with ZeuS, there has been quite a lot of effort in the past few months to take down one of the main autonomous systems providing upstream for some of the biggest C&amp;C's hosting ZeuS. You can read more about it <a href="http://blogs.zdnet.com/security/?p=5761">here</a>, and <a href="http://www.theregister.co.uk/2010/03/11/zeus_botnets_resurrected/">here</a>. Notable effort indeed, as TORYAK-AS has been on the hit list for ZeuS tracking researchers for a long time. Only thing is - there's money here again. Which means that even taking down the entire AS won't really take down the botnet as it relies on bulletproof hosting which means that there will ALWAYS be alternate routes leading to it. That's how things work. Just like trying to fight trafficking and drug trade. As long as there is demand, there will be supply. You dry out one supplier, the economy will just pop out another one. It's all about the money.

So, I'll finish up with a couple of reassuring words. We are not done yet. We like fighting the technical battle (I'll admit that I had my fun doing so, and still have fun when called to duty), but the real battle won't be won in that playing field. Remember Al (Capone) - it didn't take the DEA or FBI to take him down. It was the IRS...