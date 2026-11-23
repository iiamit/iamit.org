---
layout: post
title: "Playing with obfuscators - teaching an old dog new tricks..."
date: 2007-10-07
permalink: /blog/playing-with-obfuscators-teaching-an-old-dog-new-tricks/
categories: [research]
---

So our <a href="http://www.finjan.com/GetObject.aspx?ObjId=513&amp;Openform=50">Malicious Page of the Month for September</a> is out now. Going over the details of the document, I wanted to re-visit an old habit I had back in the days of putting code to the test – especially when the code in subject is simple, and has been signature to hell by every security vendor already… You guessed it right – code obfuscation (or more precisely – the de-obfuscating function).

So here are the basics – index.php is a highly malicious page being served by a crimeware toolkit somewhere (see the MPOM for the specifics). It contains a de-obfuscation function (df) and a call to it with a long parameter that looks like garbage, but then open up to some nice exploit code.

Running it through our friends at VirusTotal – here is what comes up (not a competitive analysis, no one is responsible for the results, etc, etc…):

<img class="aligncenter size-full wp-image-313" title="Playing002" src="http://www.iamit.org/assets/uploads/2007/10/Playing002.png" alt="Playing002" width="564" height="408" />
<p align="center"></p>

OK, that’s pretty decent – 15 out of 32 (database unreachable is not a malicious detection – on previous runs it came up with nothing)… Now, wondering what makes these things really tick, let’s neutralize the malicious part of the file. Let’s just completely make it useless – and pass an empty string to the de-obfuscating function. This should obviously not be blocked, since the end-result is non-malicious, and these obfuscators are being used for harmless code as well.

<img class="aligncenter size-full wp-image-315" title="Playing001" src="http://www.iamit.org/assets/uploads/2007/10/Playing001.png" alt="Playing001" width="564" height="381" />
<p align="center"></p>

Aha! Someone does not like this coding… So what really happened is that the de-obfuscation function is the one being scrutinized, and not the malicious code that end up running on the machine. So to our final step in the game – play a bit with the function, make it look nice and just change a couple of parameter names. No functionality change, just a bit of cosmetics (function name change to asda, 2 parameters changed names, code got through tidy…):

<img class="aligncenter size-full wp-image-316" title="Playing004" src="http://www.iamit.org/assets/uploads/2007/10/Playing004.png" alt="Playing004" width="564" height="244" />
<p align="center"></p>

Conclusion – don’t believe everything you see… it may actually not be that bad… just make sure you take a close look at what’s really going on under the hood