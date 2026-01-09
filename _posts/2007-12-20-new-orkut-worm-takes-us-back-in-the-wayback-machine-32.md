---
layout: post
title: "New Orkut worm takes us back in the wayback machine"
date: 2007-12-20
permalink: /blog/new-orkut-worm-takes-us-back-in-the-wayback-machine/
---

I just love it how old news are recycled with a bit of a flare when they become relevant again. The latest <a href="http://blog.trendmicro.com/orkutgoogle-worms-compromise-over-400000-accounts/" target="_blank">Orkut worm</a> reports talk about the technique that the worm writer has used to distribute its code. Quoting from the original article above: â€œIt then downloads and executes a heavily obfuscated JavaScriptâ€â€¦ looking at the code, I was expecting some whiz-bang brand-spankin-new cool-as-ice JS that you canâ€™t even watch without eye protection. Alas, I was greeted with the good-oleâ€™ â€œpackedâ€ obfuscation (see <a href="http://www.gnucitizen.org/blog/the-orkut-xss-worm" target="_blank">pdpâ€™s post</a> in it):

<img class="aligncenter size-full wp-image-310" title="orkut001" src="http://www.iamit.org/assets/uploads/2007/12/orkut001.png" alt="orkut001" width="564" height="92" />
<p align="center"></p>

This brings us back to our <a href="http://www.finjan.com/MCRCblog.aspx?EntryId=1696">August post on obfuscators</a> (that are obviously easily detected and processed by us) which talked about the â€œpackedâ€ strand of JS obfuscation...

Hope that the industry will bring in something more exciting in the next wave of malicious code ;-)