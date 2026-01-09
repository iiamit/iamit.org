---
layout: post
title: "Crimeware server catering to \"grab and run\" criminals"
date: 2008-05-06
permalink: /blog/crimeware-server-catering-to-%e2%80%9cgrab-and-run%e2%80%9d-criminals/
---

During our research for the latest <a href="http://www.finjan.com/GetObject.aspx?ObjId=606">Malicious Page of the Month</a> that has just been released, we came across a domain that was being used as a command and control for the Crimeware that was executed on attacked machines. This domain was also used as the â€œdrop siteâ€ for private information being harvested by that Crimeware.
When we further examined this server, we found that the stolen data on it was <strong>unprotected</strong> and freely accessible to anyone - we found no access restrictions, no encryption whatsoever!
In total, we found more than <strong>1.4Gb</strong> of personal and business data (including emails and web related data) for grabs, collected from infected PCs.

Obviously, no business or personal data was safe; we found logs with business information on shipments, intellectual property, pension funds, legal cases, patients, marketing strategies etc. but also personal information that criminal elements could use to their own benefit.

Following are some of the records that were on that server for grabs.
We changed/blurred information to protect peopleâ€™s and companies' privacy.

Medical record:
<div><span style="border: 1px solid #000000; display: block; width: 560px;"><em>http://...../de...nts/.../MedicalRecordReview/ "Diagnosis=Admitted for IV abx 2nd spinal rod infection. Hx of SMA, wheelchair bound, on bipap c back up rate. ESR increased. Ctx neg. Not getting meds at home. Will need 42 days abxâ€¦. low grade fever 2 days ago." </em></span></div>
Email communications:
<div><span style="border: 1px solid #000000; display: block; width: 560px;"><em>"â€¦Attached you will find our personnel file. Please fill it out in its entirety and return via emailâ€¦.These forms are kept confidential and locked up" </em></span></div>
<img class="alignnone size-full wp-image-293" title="crimeserver1" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver1.jpg" alt="crimeserver1" width="560" height="151" />

Outlook with email communications:

<img class="alignnone size-full wp-image-294" title="crimeserver2" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver2.jpg" alt="crimeserver2" width="422" height="310" />
<p align="center"></p>

Bank customerâ€™s credit card details:

<img class="alignnone size-full wp-image-295" title="crimeserver3" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver3.jpg" alt="crimeserver3" width="437" height="223" />
<p align="center"></p>

We were especially curious how these user data for grabs were managed by the cybercriminals, and we found a C&amp;C application that they used for that purpose.
The administration of this Command &amp; Control (C&amp;C) function consists of a PHP based web application. It managed the infected machines, and enabled the criminal to address specific groups of â€œusersâ€ â€“by country, by IP, by type of logs, you name it!

<img class="alignnone size-full wp-image-297" title="crimeserver4" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver4.jpg" alt="crimeserver4" width="504" height="413" />
<p align="center"></p>

The administrator could also issue commands, instructing the Crimeware on the infected machines to perform certain actions:

<img class="alignnone size-full wp-image-298" title="crimeserver5" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver5.gif" alt="crimeserver5" width="207" height="233" />
<p align="center"></p>

The server we investigated hosted multiple â€œattack campaignsâ€.
Each campaign had its own logged data from the infected users, as well as an administrative interface to the attack Crimeware toolkit that was used to infect the users (in this case the â€œAdPackâ€ toolkit).

<img class="alignnone size-full wp-image-299" title="crimeserver6" src="http://www.iamit.org/assets/uploads/2008/05/crimeserver6.jpg" alt="crimeserver6" width="514" height="421" />
<p align="center"></p>

The administrative (statistics) interface to these AdPack toolkits showed how effective each campaign was, and provided statistical information on the geographical location of the infections, and of course, referral statistics to accurately measure where did the infections come from.

With user data services as described above, we now see that Crimeware has reached a new level of sophistication â€“ again!
We see that Command &amp; Control applications enable administrators to manage the actions and performance of their Crimeware. It gives them also control over the users of the Crimeware as well as its victims. Most scarily of all - it also allows easy access to user data.
The full research is captured in our MPOM April 2008.
We would like to emphasize, that due to restrictions set by law, the research discloses only a fraction of the amount and type of data that we found on the crime server.