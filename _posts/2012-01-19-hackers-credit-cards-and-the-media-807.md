---
layout: post
title: "Hackers, Credit Cards, and the Media"
date: 2012-01-19
permalink: /blog/hackers-credit-cards-and-the-media/
---

In the past couple of weeks there has been an interesting "hacking" trend going on in Israel. It started from the publication of a few thousand credit card records (out of an alleged 400,000). Continued with the publication of "SCADA" systems with default credentials, and a handful of gov.il email addresses and passwords, and more recently with the DDoS on the public site of the Tel-Aviv Stock Exchange, and ElAl Arilines.

We call these events "hacking" (quotes) on purpose. Following is a basic analysis of what has been done, some impact analysis on it, and an outlook for the continuation of such events and their escalation.
<h2>Analysis of past events</h2>
<a href="http://www.iamit.org/assets/uploads/2012/01/recycledcard.png"><img class="alignleft size-full wp-image-809" title="recycledcard" src="http://www.iamit.org/assets/uploads/2012/01/recycledcard.png" alt="" width="121" height="113" /></a>First things first - theÂ <a href="http://www.nytimes.com/2012/01/07/world/middleeast/cyberattack-exposes-20000-israeli-credit-card-numbers.html">credit card leak</a>Â that started it all wasn't real news. All the records pertain to older attacks on some poorly secured internet merchants (mostly coupon deals) which stored credit card records (illegal) in an insecure way (malpractice). The "news" about the leak was the aggregation of these records, and the publication in a media context of "Cyberwar against Israel". What made this fairly insignificant event into newsworthy was... the news. The media attention thrown on it was unprecedented, and the number of "cyber consultants" (I'm not making this up) who provided content-less interviews gave the impression that the infosec industry in Israel is 10 times bigger than it really is.

For the person/s (0xOmar) who published the regurgitated information this was pure win - exactly what they were looking for. This would have ended with that unless two things happened:
<ul>
	<li>Danny Ayalon - the vice-minister of foreign affairs has been quoted saying that this attack should be regarded as an act of terror</li>
	<li>Several groups of script kiddies from Israel started working on aÂ <a href="http://www.bbc.co.uk/news/world-middle-east-16526067">vengeanceÂ against Saudi credit card holders</a>.</li>
</ul>
Both actions are regarded as knee-jerk responses, and there is no way to look at them in any productive means (strategic nor tactical). Nevertheless, the combination of said actions, and the continued excessive media coverage basically led the way to an escalation in the activities.

The next action, although not a real escalation yet, showed how 0xOmar turned essentially into a brand much like Anonymous, where information on alleged Israeli "SCADA" systems logins and gov.il email addresses was made public. This leak, now not directly associated with 0xOmar turned the attention of some AnonymousÂ <a href="https://twitter.com/#!/FuryOfAnon">twitter accounts</a>Â into supporting the newly tagged "<a href="https://twitter.com/#!/search/%23fuckIsrael">#fuckIsrael</a>" activities.

<a href="http://www.iamit.org/assets/uploads/2012/01/pastebin-israeli-scada.png"><img class="alignnone size-medium wp-image-810" title="pastebin-israeli-scada" src="http://www.iamit.org/assets/uploads/2012/01/pastebin-israeli-scada-300x250.png" alt="" width="300" height="250" /></a>

When looking at the "SCADA" leak, it is easy to see that none of the systems quoted are actually SCADA related, but mostly content management systems, some wireless routers installed at residential locations, and a car booking system. The email addresses and passwords (and hashes) are all from the STRATFOR leak which happened a couple of weeks beforehand (and even there it didn't contain the hundreds of really interesting Israeli related information).

Nevertheless - media attention was at full force, and the attempts to "out" who 0xOmar only fueled the ego behind the alias more. Combined with the newfound attention from the Anonymous brand as well, additional groups started to join the party, and the last escalation in activities showed for the first time an actual activity against Israeli associated facilities - theÂ <a href="http://www.haaretz.com/news/diplomacy-defense/hackers-shut-down-tel-aviv-stock-exchange-el-al-websites-1.407587">DDoS on the stock exchange and ElAl's websites</a>. Again - the choice of targets is not coincidental: both sites are well known and are strongly associated with Israeli media around the world (financial, and the national airline). These are not strategic targets of a classic "cyberwar" but more of a "media-war".

This latest attack, while inflicting minimal (if at all) damage to the targets, should raise a lot of hard questions for the relevant CISOs who failed to recognize the threat communities they are facing (especially in light of the media attention), and the defenses put in place to greet such communities. Additionally, mitigation tactics of such attacks has been out there for quite a while, and even a simple CDN solution would have easily coped with them.
<h2>Escalation and Triggers</h2>
The escalation has already started from the attacking side. We see more groups that were previously unassociated with 0xOmar join into the game - especially now when its has been expanded to include more media support from some anon factions. These groups widen the threat communities that are now part of the threat model which Israeli organizations have to deal with, along with their associated threat capabilities.

We expect that the attacks would continue - especially is media coverage of this will continue to be provided in prime-time. Additionally, groups that are currently in holding pattern on whether to join the action will be more keen to do so if a direct retaliation will be launched from the Israeli side. Such a retaliation could be additional attempts to "out" 0xOmar using diplomatic ties, attacks on hacker forums associated with the recent activities or anything that would beÂ portrayed as a violation of rights in international eyes.

An escalation in the attacks would mean that additional groups, who also bring additional capabilities to the table, would be able to launch much more targeted attacks against more strategic targets. If the attacks so far focused on the media value, further attacks would escalate to (in order): financials, defense contractors, government, and finally high-value individuals.

We hope that this analysis sheds some light on the motivations and the actual impact of the recent events, and would prevent any escalation - both in the response from the local hacking groups, from the media as well as from the assorted groups that were ad-hoc strung together to form this chain of events.