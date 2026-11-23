---
layout: post
title: "Crimeware server and the international man of mystery"
date: 2008-02-28
permalink: /blog/crimeware-server-and-the-international-man-of-mystery/
categories: [research]
---

While conducting research for the latest <a href="http://www.finjan.com/GetObject.aspx?ObjId=559&amp;Openform=63">Malicious Page of the Month</a> we have just released, we tried to track down the origins of the crimeware.

Obviously, this is a daunting task by itself, and although sometimes security researchers are able to point at specific people as the ones running the criminal activity, it does not always help that much (remember the RBN case where multiple law enforcement agencies were notified, but the people behind the scenes were never arrested or indicted).

Well then, back to our little server – the domain name hosting the crimeware (Neosploit 2.0.13) was hosted in Hong-Kong (see below)

<img class="alignnone size-full wp-image-303" title="mistery001" src="http://www.iamit.org/assets/uploads/2008/02/mistery001.png" alt="mistery001" width="564" height="312" />
<p align="center"></p>

So that does not bring us any closer to who is this – as the address is located at a hosting company. Fortunately, our research brought in some additional IP addresses. We managed to grab these from the web server just like we have uncovered the 8,700 FTP account credentials that the research paper talks about (no exploits or attacks were used to do so – simply thinking outside the box sufficed).

Tracking these down proved to be a nice tour around the globe (long whois info deprecated for clarity):
<div class="table-scroll" role="region" aria-label="WHOIS records" tabindex="0">
<table style="height: 690px;" border="0" cellspacing="0" cellpadding="0" width="733">
<tbody>
<tr>
<td valign="top">inetnum:        78.109.19.160 - 78.109.19.167

<strong>netname:        activebill</strong>

<strong>descr:          activebill - Andrey Smirnov</strong>

<strong>person:         Andrey Smirnov</strong>

<strong>address:        125167, Leningradsky prospekt, 47, Moscow, Russia</strong>

<strong>remarks:        phone:        +7 095 795 0295</strong>

<strong>phone:          +7 495 795 0295</strong>

<strong>remarks:        fax-no:       +7 095 795 0295</strong>

<strong>fax-no:         +7 495 795 0295</strong>

nic-hdl:        AS32250-RIPE

e-mail:         <a href="mailto:admie@svetcorp.net"><span style="text-decoration: underline;">admie@svetcorp.net</span></a>

source:         RIPE # Filtered</td>
<td valign="top">inetnum:        82.146.40.0 - 82.146.47.255

<strong>netname:        ISPSYSTEM</strong>

<strong>descr:          ISPsystem at MSM</strong>

<strong>country:        RU</strong>

admin-c:        DS2036-RIPE

tech-c:         AB11726-RIPE

status:         ASSIGNED PA

mnt-by:         ISPSYSTEM-MNT

source:         RIPE # Filtered

&lt;&gt;<strong>person:         Dmitry Sidorov</strong><strong>address:        PoBox 30, 664017, Irkutsk, Russia</strong>

<strong>phone:          +7 495 727 38 79</strong>

<strong>e-mail:         <a href="mailto:inet@ispserver.com"><span style="text-decoration: underline;">inet@ispserver.com</span></a></strong>

nic-hdl:        DS2036-RIPE

source:         RIPE # Filtered

<strong>person:         Alexandr Brukhanov</strong>

<strong>address:        PoBox30, 664017, Irkutsk, Russia</strong>

<strong>phone:          +7 495 727 38 79</strong>

nic-hdl:        AB11726-RIPE

source:         RIPE # Filtered</td>
<td valign="top">inetnum:        85.17.111.0 - 85.17.111.255

<strong>netname:        LEASEWEB</strong>

<strong>descr:          LeaseWeb</strong>

<strong>descr:          P.O. Box 93054</strong>

<strong>descr:          1090BB AMSTERDAM</strong>

<strong>descr:          Netherlands</strong>

<strong>descr:          <a href="http://www.leaseweb.com/"><span style="text-decoration: underline;">www.leaseweb.com</span></a></strong>

remarks:        Please send email to "<a href="mailto:abuse@leaseweb.com"><span style="text-decoration: underline;">abuse@leaseweb.com</span></a>" for complaints

remarks:        regarding portscans, DoS attacks and spam.

remarks:        INFRA-AW

country:        NL

admin-c:        LSW1-RIPE

tech-c:         LSW1-RIPE

status:         ASSIGNED PA

mnt-by:         OCOM-MNT

source:         RIPE # Filtered</td>
</tr>
<tr>
<td colspan="3" valign="top"><strong>OrgName:    Galaxyvisions Inc </strong>

<strong>OrgID:      GALAX-6</strong>

<strong>Address:    882 3rd avenue 8th floor</strong>

<strong>City:       Brooklyn</strong>

<strong>StateProv:  NY</strong>

<strong>PostalCode: 11232</strong>

<strong>Country:    US</strong></td>
</tr>
</tbody></table>
</div>
Putting all these guys on the map results in a very interesting “international man of mystery” cross-continent network of connections:

<img class="alignnone size-full wp-image-305" title="mistery002" src="http://www.iamit.org/assets/uploads/2008/02/mistery002.png" alt="mistery002" width="564" height="305" />
<p align="center"></p>

Obviously we are looking at some eastern-bloc oriented operation, with some access to resources in the Netherlands and the US (either other people, or just computers from which access could have been made).

Now that law enforcement agencies are involved with this, maybe we would see some developments on the matter, although from the looks of these pins on the map, I expect some really interesting multi-lingual cop-speak to spur out soon...