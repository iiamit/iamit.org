---
layout: post
title: "Learning from stux, and connecting more dots in infosec"
date: 2010-10-11
permalink: /blog/learning-from-stux-and-connecting-more-dots-in-infosec/
---

So everyone has been <a href="http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/w32_stuxnet_dossier.pdf">fully</a> <a href="http://www.eset.com/resources/white-papers/Stuxnet_Under_the_Microscope.pdf">focused</a> <a href="http://langner.com/en/">on</a> Stuxnet - trying to figure out (again) what 0-days were involved, how were networks crossed, which command-and-control channels are utilized and how the systems were compromised.

Great.

Iâ€™m really hoping that the technical analysis would help us get a better grip on what kind of risk a persistent and well-funded attacker poses to a target. Nevertheless, itâ€™s almost as we have not really learned a lot from past events - and yes, Iâ€™m talking about connecting the dots again. This time not in the sense of <a href="http://www.iamit.org/blog/2010/08/updated-speaking-schedule/">linking between crime and nation-state</a>, but more in the sense of understanding that the technological attacks are usually coupled with kinetic ones - especially when talking about the more advanced activities.

For starters - stuxnet could not have gotten to where it did without the â€œhuman factorâ€. Someone needed to carry the infected USB thumbdribve and stick it into some system that was in the separate network. Call it a hostile agent, call it a paid off internal agent, or a 3rd party provider that was recruited to provide slightly modified equipment. It had to be done.

Now that we established that the â€œmatrixâ€ could not have just jumped across networks, letâ€™s see what else can we learn from such an incident. As in learn whether this could affect us, and how. Which brings me to the second point:

We got nothing. Nothing in the sense of actual protection. And no, your claims that â€œour production control and monitoring network is physically disconnected from other networksâ€ does not hold water anymore. It didnâ€™t before either, but now itâ€™s easier to point out how wrong you were.
Not only we got nothing, we keep listening to vendors that are too cheap/lazy to implement proper controls (from proper secure development, to taking into account that security measures would need to live on the systems), and completely lose focus when something proprietary comes along the way. When we should have been kicking vendors in the round ones and making sure that we make ourselves experts in the â€œproprietaryâ€ protocols thrown at us. Time to taste a bit of what weâ€™ve been cooking.

Because stuxnet is not going to be hitting us soon. Itâ€™s going to be something much more appropriate for our culture and more targeted towards our soft spots. If delaying a nuclear development plan was on the top of the objective list when the operation that included stuxnet was planned, the counter-plans we would have to defend from would be different.
Think more in the lines of altering the way we perceive reality. Seriously. What if someone would be able to change what the newspapers printed tomorrow morning? What if they could change/affect what we see on TV? And no, this is not science fiction (check out <a href="http://www.aviationweek.com/aw/generic/story.jsp?id=news/dti/2010/09/01/DT_09_01_2010_p42-248207.xml&amp;channel=defense">what happened</a> during Cast Led where Israel hacked the palestinian TV station, and how a retaliation effort was mounted and almost succeeded).
Such actions can be pulled out more easily than youâ€™d think. The fact the everyone is focused on the pure technical aspects of defense left us pretty much open on any front that combined both human/social, physical and technical efforts.
Thinks furthermore on how the economy would hurt if the stock exchanges would be provided with false information (remember what happened when computers were involved in making decisions back in <a href="http://www.cnbc.com/id/36999483">May 2010</a>?).

And thereâ€™s more. Out travel, insurance and a lot of our financial systems are running on technology that was created back in the time when â€œstrong authenticationâ€ means that you had to guess a really cryptic username. Thatâ€™s right - not even a password is needed. And we are running billions of dollars on these things. They are protected of course - by separation. But network separation is not enough as we have just seen.

So back to connecting the dots. Remember my <a href="http://www.iamit.org/blog/2010/09/pentesters-and-businessman-are-doing-it-wrong/">last rant</a>? (you better!) - thatâ€™s exactly where the dots connect. Think critically of the business as a whole. Not in a system by system, or network by network scheme, but in the â€œhow does this business workâ€ scheme. How does the paper get printed at the end of the day? It may be easier to hack into the printing press facility control system than to the editorâ€™s or the publisherâ€™s network. Same goes for financial institutions, hospitals, airports, manufacturers, etc... Identify the weak spots in your industry, not in your office or your network.
And donâ€™t blame me from giving the bad people ideas. They should be considered at least as smart as all of us are (smarter than me for sure :-) ). The anger that you are feeling right now reading this, is coming from the pain of sticking your neck out of the sand your head was buried in, and the uncomfortable feeling of getting a grip on reality...
Thanks for taking the red pill, and welcome to the matrix.

Now go and change things.