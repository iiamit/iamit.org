---
layout: post
title: "Getting things right goes a long way when you are bleeding"
date: 2014-04-14
permalink: /blog/getting-things-right-goes-a-long-way-when-you-are-bleeding/
---

I'm starting to see a trend here with the weekend posts. I can stomach most of the FUD during the work days, but things get to me through the weekend. Oh well. There goes a "mandatory" heartbleed post:

Yes, it's a bad one. No it's not the worst one. And no - the sky isn't falling, and the Internet isn't about to go away.

<a href="http://heartbleed.com/">Heartbleed</a> was one of the most media driven (and ready) bugs in a few years. Logo, website, clear message, and two XKCD strips. The <a href="http://xkcd.com/1354/">last of which</a> is probably the best explanation to laypersons of what it's all about.

And did the media catch up on it. Oh yeah... The usual naysayers, FUD-spreading evangelists had their 3.5 minutes of fame. And everyone started recommending that users immediately change their password.

Or maybe not. No! Wait until the site fixes their SSL implementation. Or yes? Ummm, what to do?... That's where things get interesting.

The real issue here is this: sites affected by heartbleed could potentially be leaking information. And by leaking I mean that anyone with intimate knowledge of the bug could have been, in the past two years, pulling data from those sites. That includes session information, usernames, passwords, and even the private keys used to secure said SSL connections.

Which means that if you think that you were targeted by someone in the past two years, or that your information could have meant something to someone in the past two years with the capability to snoop on those credentials, yes, you should probably do something about it. BUT, and it's a bug but (yeah, yeah, yeah), you need to remember that it's not as simple as checking that the website in question has applied the fix. Not even close. If (and again - IF) you believe you need to change your password, you also need to remember that whoever had the knowledge and capability to syphon all that information, was pretty certainly also stealing the server private keys. Initially pundits were <a href="http://blog.cloudflare.com/the-results-of-the-cloudflare-challenge">skeptical</a> that private encryption keys would be compromised through heartbleed. But as always - if it's hackable, it will be hacked, and the <a href="https://www.cloudflarechallenge.com/heartbleed">proof</a> came in pretty quickly.

So yes, there are online <a href="https://filippo.io/Heartbleed/">tools</a> that will allow you to check whether a certain site had the issue fixed. But these aren't enough, as you would need to verify somehow (and that's not easy) that the site also generated a new private encryption key, and got a new server certificate to go with it in to be used AFTER patching the SSL implementation.

Tricky, isn't it? Yeah, welcome to security...

Anyways - don't just blatantly go updating your passwords nilly-nelly. First figure whether you really need to, then consider the entire picture: were you exposed just during the time from when heartbleed was announced until the site was fixed? are you concerned about three-letter-agencies that had knowledge of heartbleed and were dumping gigabytes of server RAM so they can get everyone's data? Then figure whether that site's private keys and certificates were updated. Then act.

Good luck with that. I'll leave you with a bleeding heart punch so you won't need to see that logo AGAIN on a security blog :-P

<img class="alignnone" alt="" src="http://huppiemama.com/assets/uploads/2013/10/Bleeding-Heart-Punch1.jpg" width="1870" height="1413" />