---
layout: post
title: "Relying on AV? Really?"
date: 2014-04-06
permalink: /blog/relying-on-av-really/
---

I tried to hold back on this one, but if you've read this blog (or met me in person) you know it's hard... Another <strong>amazing</strong> research coming out of your favorite AV vendor - uncovering ground breaking security implications. Take a minute to read this:
<a href="http://www.symantec.com/connect/blogs/simple-njrat-fuels-nascent-middle-east-cybercrime-scene">http://www.symantec.com/connect/blogs/simple-njrat-fuels-nascent-middle-east-cybercrime-scene</a>

Admittedly, I have stopped reading any AV vendor's blog ever since I didn't need to (for marketing or competitive reasons). The main reason is that they are riddled with old information, mostly FUD and scare tactics, self promotion, and subtle competitor bashing. So yes, I might be missing on more gems like this...
Nevertheless, this specific post came to my attention as it was quoted in a blog dedicated to security in the middle east written by Tal Pavel who I highly respect as a researcher that focuses on regional issues (warning - Hebrew only site): <a href="http://middleeasternet.com/?p=9999">http://middleeasternet.com/?p=9999</a>

So, a new RAT that caters for and was written by Arabic speakers. njRAT. That name rang a bell, and of course, after a couple of minutes of digging through my notes, there it was. OLD as nicely aged single malt whiskey (in "cyber" terms...).
The original Symantec article claimed it first saw the light of day sometime in 2013. That's pretty fresh. Too bad that this thing has been around probably since early 2012 (might be even earlier - I haven't really looked into it that much). How can I say that? Well, I've used it as an <strong>example</strong> (yes - and example! wasn't even the main topic of what I was talking about) in a presentation I first gave <em>publicly</em> in April 2012 at <a href="http://www.sourceconference.com/boston/speakers_2012.html#iamit">Source Boston</a>. Which means it was seen, analyzed, used (and, ahem, somewhat abused), much earlier in 2012. I also presented this as part of my <a href="http://www.iamit.org/blog/sexy-defense/">SexyDefense</a> talk at <a href="http://blackhat.com/html/bh-us-12/bh-us-12-briefings.html#Amit">BlackHat USA</a>, <a href="https://www.youtube.com/watch?v=djsdZOY1kLM&amp;hd=1">DerbyCon</a>, <a href="https://www.youtube.com/watch?v=7UwPu4apGgs">HashDays</a>, and SecurityZone later that year.
They did get one thing right - the focus on Arabic speaking threat communities. I've seen njRAT back then when working on a defensive posture project for a client who's threat communities were heavily into the Arabic speaking world (vagueness intentional).
<p style="text-align: center;">[slideshare id=12590597&amp;doc=sexydefense-120418105149-phpapp01]
(skip to slide 68 for the specific example concerning njRAT)</p>
The question remains though - are you still relying on AV vendors to have your back, when their "breaking grounds research" deals with malware that's over 2 years old? And I'm not picking on Symantec here either (they did a great job of analyzing the 3 year old Stuxnet back at the time!). All AV vendors can feel free to include themselves here (yes, even if you no longer call yourself an "AV Vendor", you still are. I'm looking at all of you...).

<img class="aligncenter" alt="" src="http://blog.lib.umn.edu/ladex007/myblog/placebo.gif" width="413" height="310" />

Think again...
Oh, and here's a late edition just to top it off:Â <a href="http://mincore.c9x.org/breaking_av_software.pdf">http://mincore.c9x.org/breaking_av_software.pdf</a>Â (Breaking AV Software - from Syscan 2014).

And guess what, perfect timing - next week I'm going to be in Boston again for Source - where this post basically all began :-) See you <a href="http://sourceconference.com/boston/speakers_2014.html">there</a>!