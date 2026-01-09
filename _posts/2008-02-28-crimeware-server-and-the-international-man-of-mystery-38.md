---
layout: post
title: "Crimeware server and the international man of mystery"
date: 2008-02-28
permalink: /blog/crimeware-server-and-the-international-man-of-mystery/
---

While conducting research for the latest <a href="http://www.finjan.com/GetObject.aspx?ObjId=559&amp;Openform=63">Malicious Page of the Month</a> we have just released, we tried to track down the origins of the crimeware.

Obviously, this is a daunting task by itself, and although sometimes security researchers are able to point at specific people as the ones running the criminal activity, it does not always help that much (remember the RBN case where multiple law enforcement agencies were notified, but the people behind the scenes were never arrested or indicted).

Well then, back to our little server â€“ the domain name hosting the crimeware (Neosploit 2.0.13) was hosted in Hong-Kong (see below)

<img class="alignnone size-full wp-image-303" title="mistery001" src="http://www.iamit.org/assets/uploads/2008/02/mistery001.png" alt="mistery001" width="564" height="312" />
<p align="center"></p>

So that does not bring us any closer to who is this â€“ as the address is located at a hosting company. Fortunately, our research brought in some additional IP addresses. We managed to grab these from the web server just like we have uncovered the 8,700 FTP account credentials that the research paper talks about (no exploits or attacks were used to do so â€“ simply thinking outside the box sufficed).

Tracking these down proved to be a nice tour around the globe (long whois info deprecated for clarity):
<table style="height: 690px;" border="0" cellspacing="0" cellpadding="0" width="733">
<tbody>
<tr>
<td valign="top">inetnum:Â Â Â Â Â Â Â  78.109.19.160 - 78.109.19.167

<strong>netname:Â Â Â Â Â Â Â  activebill</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  activebill - Andrey Smirnov</strong>

<strong>person:Â Â Â Â Â Â Â Â  Andrey Smirnov</strong>

<strong>address:Â Â Â Â Â Â Â  125167, Leningradsky prospekt, 47, Moscow, Russia</strong>

<strong>remarks:Â Â Â Â Â Â Â  phone:Â Â Â Â Â Â Â  +7 095 795 0295</strong>

<strong>phone:Â Â Â Â Â Â Â Â Â  +7 495 795 0295</strong>

<strong>remarks:Â Â Â Â Â Â Â  fax-no:Â Â Â Â Â Â  +7 095 795 0295</strong>

<strong>fax-no:Â Â Â Â Â Â Â Â  +7 495 795 0295</strong>

nic-hdl:Â Â Â Â Â Â Â  AS32250-RIPE

e-mail:Â Â Â Â Â Â Â Â  <a href="mailto:admie@svetcorp.net"><span style="text-decoration: underline;">admie@svetcorp.net</span></a>

source:Â Â Â Â Â Â Â Â  RIPE # Filtered</td>
<td valign="top">inetnum:Â Â Â Â Â Â Â  82.146.40.0 - 82.146.47.255

<strong>netname:Â Â Â Â Â Â Â  ISPSYSTEM</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  ISPsystem at MSM</strong>

<strong>country:Â Â Â Â Â Â Â  RU</strong>

admin-c:Â Â Â Â Â Â Â  DS2036-RIPE

tech-c:Â Â Â Â Â Â Â Â  AB11726-RIPE

status:Â Â Â Â Â Â Â Â  ASSIGNED PA

mnt-by:Â Â Â Â Â Â Â Â  ISPSYSTEM-MNT

source:Â Â Â Â Â Â Â Â  RIPE # Filtered

&lt;&gt;<strong>person:Â Â Â Â Â Â Â Â  Dmitry Sidorov</strong><strong>address:Â Â Â Â Â Â Â  PoBox 30, 664017, Irkutsk, Russia</strong>

<strong>phone:Â Â Â Â Â Â Â Â Â  +7 495 727 38 79</strong>

<strong>e-mail:Â Â Â Â Â Â Â Â  <a href="mailto:inet@ispserver.com"><span style="text-decoration: underline;">inet@ispserver.com</span></a></strong>

nic-hdl:Â Â Â Â Â Â Â  DS2036-RIPE

source:Â Â Â Â Â Â Â Â  RIPE # Filtered

<strong>person:Â Â Â Â Â Â Â Â  Alexandr Brukhanov</strong>

<strong>address:Â Â Â Â Â Â Â  PoBox30, 664017, Irkutsk, Russia</strong>

<strong>phone:Â Â Â Â Â Â Â Â Â  +7 495 727 38 79</strong>

nic-hdl:Â  Â Â Â Â Â Â AB11726-RIPE

source:Â Â Â Â Â Â Â Â  RIPE # Filtered</td>
<td valign="top">inetnum:Â Â Â Â Â Â Â  85.17.111.0 - 85.17.111.255

<strong>netname:Â Â Â Â Â Â Â  LEASEWEB</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  LeaseWeb</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  P.O. Box 93054</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  1090BB AMSTERDAM</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  Netherlands</strong>

<strong>descr:Â Â Â Â Â Â Â Â Â  <a href="http://www.leaseweb.com/"><span style="text-decoration: underline;">www.leaseweb.com</span></a></strong>

remarks:Â Â Â Â Â Â Â  Please send email to "<a href="mailto:abuse@leaseweb.com"><span style="text-decoration: underline;">abuse@leaseweb.com</span></a>" for complaints

remarks:Â Â Â Â Â Â Â  regarding portscans, DoS attacks and spam.

remarks:Â Â Â Â Â Â Â  INFRA-AW

country:Â Â Â Â Â Â Â  NL

admin-c:Â Â Â Â Â Â Â  LSW1-RIPE

tech-c:Â Â Â Â Â Â Â Â  LSW1-RIPE

status:Â Â Â Â Â Â Â Â  ASSIGNED PA

mnt-by:Â Â Â Â Â Â Â Â  OCOM-MNT

source:Â Â Â Â Â Â Â Â  RIPE # Filtered</td>
</tr>
<tr>
<td colspan="3" valign="top"><strong>OrgName:Â Â Â  Galaxyvisions Inc </strong>

<strong>OrgID:Â Â Â Â Â  GALAX-6</strong>

<strong>Address:Â Â Â  882 3rd avenue 8th floor</strong>

<strong>City:Â Â Â Â Â Â  Brooklyn</strong>

<strong>StateProv:Â  NY</strong>

<strong>PostalCode: 11232</strong>

<strong>Country:Â Â Â  US</strong></td>
</tr>
</tbody></table>
Putting all these guys on the map results in a very interesting â€œinternational man of mysteryâ€ cross-continent network of connections:

<img class="alignnone size-full wp-image-305" title="mistery002" src="http://www.iamit.org/assets/uploads/2008/02/mistery002.png" alt="mistery002" width="564" height="305" />
<p align="center"></p>

Obviously we are looking at some eastern-bloc oriented operation, with some access to resources in the Netherlands and the US (either other people, or just computers from which access could have been made).

Now that law enforcement agencies are involved with this, maybe we would see some developments on the matter, although from the looks of these pins on the map, I expect some really interesting multi-lingual cop-speak to spur out soon...