---
layout: post
title: "Clouds, and the winds that blows them away..."
date: 2009-10-30
permalink: /blog/clouds-and-the-winds-that-blows-them-away/
---

You must have seen this coming - I was holding off from discussing cloud security for quite some time for a few good reasons, but now it's time to take a look at where are we (or more correctly - are we there yet?).

First things first - the main reason for abstaining from the cloud security discussion was simply the lack of definition (andÂ existence) of clouds... True - Amazon has provided the infrastructure to the first layers of building cloud solutions, but full-on "process-as-a-service" has yet to emerge from the different offerings that call themselves cloud. There has been enough ink (bits?) spilled over what reallyÂ isÂ Â cloud computing and what it isn't (you can check out <a href="http://www.slideshare.net/craigbalding/what-everyone-ought-to-know-about-cloud-security">Craig's presentation</a>, and <a href="http://www.rationalsurvivability.com/blog/?p=1507">Hoff's view on things</a>).

And now to my 2c on the subject at hand, I have been involved with a few cloud security companies in the past months and being able to lend a hand at the strategic level, I was exposed to several aspects of where are we now with cloud computing, where are the gaps that security firms will need to pitch in and provide basic protections, and a whole lot of marketing fuzz that needed to be thrown off in order to realize what's out there.

To begin with, we had to sift through the marketing mambo-jumbo to get to the point - seems like the more expensive your marketing budget is, the farther away you get from reality in your message - too bad (and that's coming from someone who turned a lot of technical material into marketing...). Hence the first point - blowing enough smoke to make everyone tear does not constitute for creating a cloud.

Point two - now that we to the bottom of the offering (and I'm not going to name names...), one usually realizes that it has either been out there for quite a while and has been wrapped in clouds to sell it better, or that someone has made some basic adaptations to an existing offering (see roaming users, VPN, scanning services) to cloudify it. Whatever is left that did not fit into the previous schemes is worth a second (or is it third by now) look.

Point three - what's the market for your cloud offering? The last hurdle that all these new cloud companies face is choosing (or defining) a direction. Do you see yourself providing a solution for the end users? for businesses? for the cloud infrastructure providers? for providers of services/software/processes on the cloud? If you get an answer in the lines of "we basically provide a solution for all of them" - run! As each of the mentioned markets have different needs, and different views on their place in the cloud, you better get a solid answer for this. I strongly suggest reading the "Cloud Architecture" section written by Chris Hoff which is part of the <a href="http://www.cloudsecurityalliance.org/guidance/csaguide.pdf">Cloud Security Allianceâ€™s â€œGuidance for Critical Areas of Focus"</a> starting at page 15 in order to get an idea on the latter.

Now with most of the fluff away, and the offering at hand we can actually focus on whether it makes sense (business-wise), and where does security fit in. By no means this is going to be a guide for securing the cloud, but always remember the architectural model - from hypervisor, all the way through multi-tenanting, data abstraction and sharing, inter and outer process communication, and off to simple abuses of the cloud in the form of DDoS, Botnet tools, etc...

Hope this made some sense - if not I can only suggest reading some more material on it, and to play around with the current offerings from Amazon, Azure (MS), and Ubuntu (Canonical).