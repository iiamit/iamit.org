---
layout: post
title: "Tying up loose ends before Vegas (scammer closure)"
date: 2010-07-26
permalink: /blog/tying-up-loose-ends-before-vegas-scammer-closure/
---

Instead of updating the <a href="http://www.iamit.org/blog/2010/07/how-not-to-scam-security-people/">post in question</a> (again), I figured I'll post all the new info here and call this a wrap.

So, we all know about the security scammer now, and the different ways he is working to defraud innocent users and steal their data and money. It has been quite an experience tracking this scam down and getting all the facts right (from the technical aspect of inspecting the keylogger and binaries used to sniff your data, to actually communicating with the scammer and getting his take on things).

Nevertheless, I must say that I appreciate the consistency in which our scammer (I'll call him Fadzil Mahfodh as that's his real name) has been trying to mask his wrongdoings. From trying to go around the facts and divert us to other software:

<a href="http://www.iamit.org/assets/uploads/2010/07/fadzil1.png"><img class="size-medium wp-image-502 alignnone" title="fadzil1" src="http://www.iamit.org/assets/uploads/2010/07/fadzil1-300x57.png" alt="" width="300" height="57" /></a>

To "bragging" about his skills and the fact that his scripts are "leet" enough to get past some people:

<a href="http://www.iamit.org/assets/uploads/2010/07/fadzil2.png"><img class="size-medium wp-image-503 alignnone" title="fadzil2" src="http://www.iamit.org/assets/uploads/2010/07/fadzil2-300x79.png" alt="" width="300" height="79" /></a>

And finally to the obvious - throwing a fit and trolling - initially by threatning to post my picture and CV on adult websites (what would my CV be good for on an adult site anyway??? must be a Malaysian thing :-) ):

<a href="http://www.iamit.org/assets/uploads/2010/07/fadzil3.png"><img class="size-medium wp-image-504 alignnone" title="fadzil3" src="http://www.iamit.org/assets/uploads/2010/07/fadzil3-300x39.png" alt="" width="300" height="39" /></a>

All of which has been accompanied by adding my picture to his website (wow! I'm famous now!):

<a href="http://www.iamit.org/assets/uploads/2010/07/Screen-shot-2010-07-26-at-11.54.25-AM.png"><img class="size-medium wp-image-505 alignnone" title="Screen shot 2010-07-26 at 11.54.25 AM" src="http://www.iamit.org/assets/uploads/2010/07/Screen-shot-2010-07-26-at-11.54.25-AM-300x213.png" alt="" width="300" height="213" /></a>

Getting it removed by the Google Blogger DMCA team, opening up a <a href="http://chikiabu.blogspot.com/">new blog site</a> to accompany the specific <a href="http://www.iamit.org/assets/uploads/2010/07/Screen-shot-2010-07-26-at-11.58.16-AM.png"><img class="alignright size-medium wp-image-507" title="Screen shot 2010-07-26 at 11.58.16 AM" src="http://www.iamit.org/assets/uploads/2010/07/Screen-shot-2010-07-26-at-11.58.16-AM-181x300.png" alt="" width="181" height="300" /></a>"hack wpa without a dic" post along with my picture, and making some cosmetic changes to the site, removing the FBI log (which has been replaced with a larger DHS logo), and adding a disclaimer at his website stating that this is all a mistake, that I have been trying to pressure him into criminal actions, and that he has all our communications logged and will be happy to use it to prosecute. Too bad this has been removed from his site before I had a chance to document it - but trust me it was there! Pure epicness!

Now, I know - it's not really fair to pick on these guys that hard. That's why I'm leaving this to the Malaysia CERT (as you may have noticed, 1337 Fadzil forgot to proxy his connections to this blog and his IP has been logged on all comments and relevant hits on the site), to figure out how to handle. I truly hope that his suggestion to use the details provided on his paypal account and bank account will actually yield some results, and wish our friend the best of luck in his endeavors in the security business (although I highly doubt he'll be at DefCon later this week).

Below are attached some of the additional supporting materials for the sake of fully disclosing all the communications with Fadzil.

<a href="http://www.iamit.org/assets/uploads/2010/07/fadzil.txt">Apache-access-log_FILTERED</a>, <a href="http://www.iamit.org/assets/uploads/2010/07/Fadzil-chat.rtf">Fadzil-chat</a>, <a href="http://www.iamit.org/assets/uploads/2010/07/karma-decoded.sh.txt">karma-decoded.sh</a>, <a href="http://www.iamit.org/assets/uploads/2010/07/bg2-decoded.sh.txt">bg2-decoded.sh</a>

<strong>8/18/2010 - Last update </strong>(I really hope)

All right, so it seems that the good guys actually win sometimes, so I had to post this quick update just to fill everyone in on what has been going on:
<ol>
	<li>The original site (yeah - the bad design, background music, scam outright) has been brought down. Not sure if it was the Google DMCA team that kept bugging Fadzil on removing my pics, or the Malaysia CERT that came down on him for the malicious and scamming techniques.</li>
	<li>The replacement site (<a href="http://chikiabu.blogspot.com/">chikiabu.blogspot.com</a>) which has been originally set up just to host the infringing materials after Google rained down on Fadzil, is now actually the main site, and SURPRISE - it does not have the scamming software anymore!!! 2 points for the good guys.</li>
	<li>The new site still has some "security" software. I have been getting some questions from readers who saw it and didn't know whether to use it or not. So I had a few minutes to spare today, and have analyzed the "software" provided on it (namely - the famous fi.sh script which is the pinnacle of our subject's programming skills). Long story short - still scripting with no real software in it. The fi.sh code is (again) a compiles shell script, and... here it is: <a href="http://www.iamit.org/assets/uploads/2010/07/fi.sh.txt">fi.sh</a> (the decompiled version of course). Funny thing is - obviously there's no real coding here, just a bunch of "infconfig", "iwconfig", "airodump-ng" and "aircrack-ng". One thing to note though, is that Fadzil makes it look as if each version of the script is designed for a specific wireless adapter - this of course can be achiever by correctly configuring your wireless adapter when running BT. Additionally, the posts on his website still entice users to send him their capture files (although at some point he makes the spelling error of saving a capture file as ".cab" - freudian?), and I'm guessing that he's going to be asking for some "donation" to keep his site running. Don't be tempted again kids...</li>
</ol>
That's all there is to it I guess. Again - good guys win, site cleaned (and hopefully bad guy learned his lesson). Keep your eyes open out there, and until next time (September in Barcelona and Brussles) bye!