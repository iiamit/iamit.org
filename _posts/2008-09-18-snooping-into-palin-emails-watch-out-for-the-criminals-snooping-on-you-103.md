---
layout: post
title: "Snooping into Palin emails? Watch out for the criminals snooping on you!"
date: 2008-09-18
permalink: /blog/snooping-into-palin-emails-watch-out-for-the-criminals-snooping-on-you/
---

Following the recent news on how an anonymous group has managed to take over Sarah Palin's Yahoo! email account; we have noticed some interesting happenings. As wikileaks which was the original posting location of the images taken from Palin's yahoo inbox was unavailable for some time, copies of the wikileaks post started to appear on other sites.

Our assumptions are that as usersÂ  foundÂ  the original site unavailable, they started resorting to deepening their searches to try and find other copies of the original images. It seems that e-Criminals are just in-tune with the latest news and browsing habits, and have managed to publish (or alter an already published) zip archive of the original wikileaks post with a small alteration that included a malicious script appended to the html content. Users that are eager to take a look at the leaked images finally found themselves looking at an archive copy of the original wikileaks page, but without having any clue about the malicious script running on their PC at the same time.

<a href="http://www.iamit.org/blog/assets/uploads/2008/09/palin.jpg"><img class="alignnone size-medium wp-image-291" title="palin" src="http://www.iamit.org/blog/assets/uploads/2008/09/palin-300x278.jpg" alt="palin" width="300" height="278" /></a>

The script used is the usual obfuscated JavaScript that is designed to evade detection, which exploits a couple of vulnerabilities in QuickTime and Microsoft's WMV components. The exploits are designed such that once successful, a Trojan is installed on the local machine with the pretence of an Anti-Virus application. The specific Trojan that is being used in this incident is similar to other related attacks covered in our latest security research findings that traced sites connected to recent news as well.

Attackers are at a position where they can choose the kinds of malicious software running on victims machines, as Malweb is allowing them to run any kind of code on them.

In conclusion - although it may be hard to stop on your tracks when the original site hosting breaking news is down, it seems like a wise decision to try and really look into alternate copies of the evidence that are being posted on other locations. Some may be legit and just have carbon copies of the content, some may have a slight addition to the news in order to serve less legitimate purposes.

Update: Further information on the technique itself used to obtain access to Palin's account is <a href="http://www.scmagazineus.com/Hacker-answered-personal-questions-to-steal-Palin-password/article/118196/">covered here</a>.