---
layout: post
title: "What the * is wrong with mobile security"
date: 2011-07-09
permalink: /blog/what-the-is-wrong-with-mobile-security/
---

Long time no post. Sorry about that &lt;insert favorite excuse&gt;.<a href="http://www.iamit.org/blog/assets/uploads/2011/07/never_go_full_retard1.jpg"><img class="alignright size-medium wp-image-621" title="never_go_full_retard1" src="http://www.iamit.org/blog/assets/uploads/2011/07/never_go_full_retard1-300x199.jpg" alt="" width="300" height="199" /></a>

Anyway, as you can probably imagine, here's another rant brewing. We have been dealing with a barrage of mobile application security issues lately, and although I had the feeling that there was a lot wrong with the industry back there I haven't realized it was that bad.

I mean - it's supposedly almost the same developers, right? Some Java, Objective C, a little JS/Json/GUI/, the concepts are still the same. Oh, was I wrong. When testing some of these applications, and looking at how they are (much easier BTW that with "traditional" software), it almost seems like we are blinded by the fancy little gadget we got sitting on our desk waiting to be tested, and just push out really crappy code with no apparent attention to how it works, how secure it is, or how does it reflect on the security of the rest of the bank/commerce/corporate security.

Forget all the shortcuts that completely bypass any reasonable process and procedure that are implemented through the "regular" (i.e. web, web services, even client-server) interfaces, and the fact that web services are created to support that.

Forget that authentication is almost thrown out the window when you used to have multiple factor authentication on other channels.

<img class="alignleft" src="http://1.bp.blogspot.com/--Sq9kLRUzpo/TeULWlexHWI/AAAAAAAAIqA/nFR5LhqZUtU/s1600/BACK_TO_SCHOOL.jpg" alt="" width="259" height="185" />Go back to basics. Ummmm, like, SSL? It has been too many times that you see an "application" that is no more than that hybrid thing Apple allowed developers to do - a few HTML pages that get rendered really nicely on an iDevice, some jQuery and CSS tricks, and maybe even bother through churning the end result through PhoneGap to be like the cool kids with the native apps. Problem is - developers go full retard on shiny things like this. The completely forget the fact that the user's phone is just like a PC, and is going to be connected to so many non-trusted wireless networks that it's not even funny to think how much data will beÂ exposed through their insecure plaintext calls.

One thing that really helps developers stay in full retard mode is the lack of any security indication on the device that their communications are done completely in the clear. No bright yellow/red/green padlock that indicates an SSL connection, no API checks to verify that some crypto library is in use if any of the "sensitive" (read: contacts, network access, mail, locally saved data, etc...) is accessed by the application. Nothing.

That's how we got to a point that sensitive data is leisurely sent unencrypted over non-trusted WiFi connections, along with almost everything you can think of from the phone (GPS coordinates, user information, you name it). That's how we got to a point where useless web services are opened up (again - no requirement for an SSL connection) on financial/corporate/commercial servers to allow logical shortcuts just because the mobile applications needs to be "streamlined".

<img class="alignright" src="http://img.ehowcdn.com/article-page-main/ehow/images/a06/91/59/criminal-behavioral-profiling_-800x800.jpg" alt="" width="158" height="154" />We need to put our foot down and say "no more". We need both the big guys (Apple, Google, Microsoft, RIM) to have a realÂ certificationÂ and testing program for their *Stores that actually look at what the application is doing. We need more logic and more process in the way that applications get developed and commissioned. We need developers to get off the "I need to be at the *Store" mentality, and think like they used to in the sense of "we are going to get so pwned if I put this application out like this". We need product managers and marketing departments to think if they want to be the next Sonyâ„¢ getting nailed 21 times in a row and still not realizing they are so far behind they need to take everything offline and start getting their stuff together.

We just need to pull our heads out of the sand and smell the napalm. It's a war out there, and your shiny device doesn't give a small rodent's rear-endÂ about your security as long as it looks good.

Rant off, maybe one more post before Vegas. See you all there!