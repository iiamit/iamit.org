---
layout: post
title: "So you thought you were protected: How hackers can break into your business"
date: 2012-05-21
permalink: /blog/so-you-thought-you-were-protected-how-hackers-can-break-into-your-business/
---

This is a translation of the original article published in <a href="http://www.calcalist.co.il/internet/articles/0,7340,L-3571634,00.html">Calcalist</a> on May 20th 2012.

&nbsp;
<blockquote>A group of professional hackers, employed by the most sensitive organizations to detect security breaches, are showing how to gain access to critical information, or take down the power for a whole city - and what is needed in order to protect from such attacks.</blockquote>
If you believe hollywood, breaking into computers or networks is the easiest thing in the world. The hacker just sits in front of the keyboard, types in a few commands, and immediately finds itself in a top-secret database. In reality, it is naturally a more complicated affair: the hacker canâ€™t break into a secure network in a couple of minutes, and not always without leaving the keyboard. He needs to gather intelligence, plan, go out and talk to people. A real hacker is essentiality a detective, a spy, and a bit of an actor.

In this article, in cooperation with experts from Security Art, among whichÂ Yoram Golandsky the CEO, and Iftach Ian Amit the Vice President of Consulting, we present the true work of hackers, and detail how a real breach into a secure computer network is performed. Security Artâ€™s employees are hackers for hire - computer security professionals, who get hired by companies in order to break into their own networks and expose their security flaws.

The scenarios that we built here are based on actual attacks performed by Security Art (all client names have been dropped for confidentiality reasons). Others are probability scenarios - such that are based on the knowledge of Security Artâ€™s experts about computer networks, the protections used in them, and their proven ability to manipulate and circumvent them.

The information brought here is not considered secret or as a mean to provide hackers with tools. It has already been published publicly in conferences, and is considered domain knowledge among security experts and hackers, and in any case is not detailed enough to be used maliciously. One thing this guide does show: with enough knowledge, determination and sophistication, there is no computer network or database that is fully protected from computer attackers. Not even a biometric database in which millions of shekels have been invested.

<img class="alignnone" title="Ian Amit" src="http://www.calcalist.co.il/PicServer2/20122005/263865/IMG_3321314659_L.jpg" alt="" width="458" height="300" />
<h2>The Phish</h2>
<strong>The target</strong>: infiltrating into an internal communication network of a company.
<ol>
	<li><strong>Intelligence gathering</strong>: For weeks, the attacker gathers relevant information on the company and its employees. Identifying employees through social networks such as LinkedIn and Facebook, building detailed profiles on them (from email addresses to hobbies). From such information the attacker identifies that in the near future a trade conference will be attended by some of the companyâ€™s employees.</li>
	<li><strong>The bait</strong>: The attacker builds a site similar to the one used by the conference. The domain used for the fake site is very similar to the real one (for example - <a href="http://aclc.com">aclc.com</a> instead of <a href="http://adc.com">adc.com</a>). An email from the fake domain is sent to the employees that have been identified as relevant to the conference, inviting them to visit the conference website for updates (while using the phishing domain).</li>
	<li><strong>The catch</strong>: A few minutes after the email is sent, one of the employees clicks on the link provided in it, and browses to the phishing site. In the fake site, embedded attack code runs, and scans the employees computer for vulnerabilities.</li>
	<li><strong>The infiltration</strong>: The attack code identified a vulnerability in the employeeâ€™s browser, exploits it, and run a trojan application on it. This provides the attacker full control over the PC, without the employee ever taking note.</li>
	<li><strong>Data exfiltration</strong>: The attacker can track every activity performed on the PC - from keystrokes, through full access to any resource the user has privilege to on the network. The information includes contracts, development plans, strategic documents, confidential business communications with customers, and even encryption keys that provide access to encrypted data.</li>
	<li><strong>Expanding the breach</strong>: The attacker enjoys the same privileges of the employeeâ€™s compromised PC - financial systems, internal operational systems, file servers. Even when the employee has limited access, the attacker can leverage the initial privileges in order to get to restricted resources - by compromising the companyâ€™s main server.</li>
</ol>
<strong>How to prevent the breach</strong>: The company must equip itself with more advanced (adequate) technical means to filter content and separate the internal resources; educating and training the employees about safe browsing and use of the Internet; self tracking of the organizationâ€™s intelligence profile on the Internet.

&nbsp;
<h2>Smartphone spying</h2>
<strong>The target</strong>: Abusing the capabilities of smartphones, or when the companyâ€™s network is well protected.
<ol>
	<li><strong>Intelligence gathering</strong>: First, the brand and model of the smartphones used by the company is identified, as well as which employees use them with their business email. Then, a traveling employee is located and targeted using his business email - which will be opened on the smartphone.</li>
	<li><strong>The trap</strong>: A malicious email containing an infected PDF file is sent to the employee. The PDF will install a trojan on the smartphone once opened. The trojan runs persistently on the phone, while mapping all the networks the phone is connected to (WiFi, 3/4G, etc). Additionally, it provides full access to all the information stored on the smartphone, as well as to the interesting features of it such as location services, opening up the microphone and camera in order to stream audio and video back to the attacker.</li>
	<li><strong>The spying</strong>: The location services feature enables the attacker to pinpoint the user to a specific location, and turn on the microphone and camera when inside the company offices. The calendar is used to identify important meetings, in which the microphone and camera will be turned on again. The result: access to classified information, which includes personal and professional conversations, which may not even exist on the company network.</li>
	<li><strong>Everybodyâ€™s network</strong>: If the employee connects the smartphone to the companyâ€™s WiFi, such a connection can enable the attacker to infiltrate it, while easily bypassing most protections that exist towards the official Internet perimeter. Even if the internal network is separate from the WiFi network, such access is still valuable, as other company PCs are connected to it, and can be targeted and breached (for example - during meetings in which employees bring their laptops to and connect to the WiFi in the meeting room). Even more dangerous: when an employee visits other companies (clients) and connects to their wireless networks, while exposing them to further attacks.</li>
</ol>
<strong>How to prevent the breach</strong>: Employees can be supplied with company issues phones, which have been hardened and secured. Alternatively, advanced security modules can be installed on employee owned phones. Furthermore, a proactive approach is required in monitoring and mapping the internal network for anomalies.

&nbsp;
<h2>Installing spy software using a flash drive</h2>
<strong>The target</strong>: A defense contractorâ€™s internal network, which is physically separate from the external networks.
<ol>
	<li><strong>Intelligence gathering</strong>: Much like the first phase of the first scenario. In this case the target is to understand in which internal network the interesting information resides.
For establishing a baseline of how the organization works, full mapping of both personnel as well as physical locations of the organization is performed. Based on the professional background of specific employees published in sites such as LinkedIn, employees can be mapped to which products they work on, and in which divisions. Location services such as FourSquare enable associating physical locations to the employeeâ€™s profile - thus revealing the actual office in which the secure network operates in.
In a specific attack which Security Artâ€™s employees performed, a call was made to the office that was targeted. In order to verify the targeted employeeâ€™s details, the attacker impersonated another company employee (â€œitâ€™s easiest to claim you are from marketing, then you have a good enough excuse for your ignoranceâ€¦â€), talked to the development team lead, and corroborated the information gathered so far. Additionally, the attacker managed to identify that there was an internal voice over IP network in use - which could be leveraged later to exfiltrate the sensitive data.</li>
	<li><strong>The con</strong>: The attacker arrives at the targeted office, bearing a branded USB thumb drive. He hands it over to the receptionist, claiming: â€œI just found this outside, I think someone from this office dropped it, letâ€™s plug it in and see whoâ€™s is it!â€. The unsuspecting receptionist plugs the thumb drive into the PC and opens up the files on it. Another alternative for the drop is to leave the thumb drive at the cafeteria, or to hand it over to an employee thatâ€™s about to enter the building.</li>
	<li><strong>The infection</strong>: Once the drive is plugged in, a malicious code runs and installs a trojan. The trojan maps the internal network, locates the relevant data, and encodes it into audio signals.</li>
	<li><strong>The call</strong>: The trojan maps the voice over IP network and impersonates a handset to initiate a call to the attackerâ€™s voicemail outside the organization. It then â€œplaysâ€ the encoded audio signals from the previous phase. Now the attacker can download the voicemail, decode the audio signals back into binary data, and access the sensitive information.</li>
	<li><strong>Command and control</strong>: The attacker can further furnish the trojan to call into a conference call number and stay connected to it. In such a scenario, the attacker can join into the conference call anytime, and send simple instructions to the trojans connected to it using the DTMF tones generated by the phone handset.</li>
</ol>
<strong>Hot to prevent the breach</strong>: The company should block the option to connect external devices to the organization PCs. Additionally, monitoring of the VoIP network is critical in order to find suspicious activities.

&nbsp;
<h2>Powering off a city</h2>
<strong>The target</strong>: attacking the power supply infrastructure of vast regions by taking over smart meters that use cellular communications.
<ol>
	<li><strong>Intelligence gathering</strong>: Smart meters are in a pilot phase in Israel. Several suppliers participate in this pilot. The attacker gathers intelligence on the suppliers, and tries to identify vulnerabilities in the produce that are being tested.</li>
	<li><strong>Stealing the data</strong>: The attacker uses specialized equipment to set up a cell tower, which impersonates a legitimate cell providerâ€™s tower. It then causes the smart meter to â€œtrustâ€ it, and communicate through it. Now the attacker has full access to the data gathered from the smart meters, and change it before passing it along to the electric company monitoring and operations center.</li>
	<li><strong>The hit</strong>: Using the information gathered, the attacker can damage the production systems: by falsely reporting a higher or lower utilization than the actual one, the production rate will be modified, causing rolling blackouts through extensive regions.</li>
</ol>
<strong>How to prevent the breach</strong>: monitoring critical points in the smart meter system, and having dual checks and controls over any information that is related to production and usage.