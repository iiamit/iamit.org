---
layout: post
title: "Optimizing Cross Site Scripting - and general security practices"
date: 2008-03-16
permalink: /blog/optimizing-cross-site-scripting-and-general-security-practices/
---

We have been working recently on a XSS attack that impactedÂ  a huge number ofÂ  potential victims, as the attack itself has been â€œoptimizedâ€ by SEO (Seacrh Engine Optimization) practices that pushed it to Googleâ€™s indexes.

In itself, this is not a new technique, but the sheer size of it made us take a second look (incidentally, another <a href="http://ddanchev.blogspot.com/2008/03/zdnet-asia-and-torrentreactor-iframe-ed.html" target="_blank">security researcher</a> has gone public with the details at the same time while we were communicating with Googleâ€™s security team about it). So how does it work? Basically the recipe is quite simple:
<ol>
	<li>Find an XSS vulnerability on a major site that has a decent amount of traffic (<a href="http://www.xssed.com/" target="_blank">easy</a>).</li>
	<li>Decide what you want your victim to â€œexperienceâ€ â€“ this can vary from serving some malicious code, to pureÂ  Crimeware marketing (lessons learned from â€œwhat to avoidâ€Â  from SPAM email marketing).</li>
	<li>Start googling it with the XSS in the URL (most sites normally allow parameters to be passed in a GET rather than enforcing POST only).</li>
	<li>Enjoy the show â€“ make sure that the XSS (usually a search page) also contains some keywords that would attract hits from legitimate searches.</li>
</ol>
XSSed sites used:

From what we have seen so far â€“ including sites such as torrentreactor.net (first one) and zdnetasia.com (on 3/4/2008), tv.com (2/5/2008), torrentportal.com (3/8/2008), University of Pittsburghâ€™s jurist.law.pitt.edu, torrentfreak.com and fulldownloads.us (3/9/2008).

Unwanted sites used in the attack:

From is-t-h-e.com, through 72.232.39.252, media-toolbar.com, oasdc.info, do-t-h-e.com â€“ all provide some kind of unwanted malware to be eventually dropped onto the unsuspecting user.

And finally â€“ a glimpse into what people are looking for.Â  Looking at the keywords used as part of the search terms, we discovered a sort of a zeitgeist of popular terms. The obligatory mature content terms (which I wonâ€™t quote for obvious reasons!) to the other extreme such as â€œthe lost book of the new testament bibleâ€, and the more spiritual â€œworking with emotional intelligenceâ€ as well as the mundane â€œchevy tahoe specsâ€. Even techies are properly served with â€œbash if or conditionâ€. In short, it provides us with a truly â€œinspiringâ€ journey into what makes us tick (although we already know, still, seeing it is truly believing).

And now for the replies we got from some affected parties:

From torrentreactorÂ  - who we contacted on 3/4/2008, as their XSS was not public at the time (if you donâ€™t count the outing done by other <a href="http://ddanchev.blogspot.com/" target="_blank">blogs</a>) â€“ we got a pretty quick response thanking us for the notification, and asking if there were more issues with their site. However, there hasnâ€™t been a fix of the XSS issue yet at the time of this writing).

The more interesting view comes from Google (contacted early 3/4/2008). We contacted them since we saw that some of the search results were sanitized of the offending XSS effect, while other still contained a working XSS.

Google acknowledged that this was a known attack vector, and confirmed that they are indeed working on ways to manipulate and â€œsanitizeâ€ links provided by them in an effort to minimize the effect of incidents such as XSS on indexed sites. They also share our opinion on the reality of XSS and its affects on web browsing: "Google recommends that sites fix their cross-site scripting vulnerabilities as a priority. These can be abused in a number of ways, including bad interactions with search engines. Google is helping by reaching out to affected organizations. In addition, Google has internal processes to block abuses when the situation warrants."

It will be interesting to see how this will work outÂ  since sites still cache search results, thus allowing search engines to index those as results as well. That practice is exploited here where the site is affected by a XSS, which is then in turn â€œimmortalizedâ€ when a search engine sees it.

In the meantime we would recommend the following:
<ol>
	<li>Website owners and developers - XSS is rated no. 1 in the <a href="http://www.owasp.org/index.php/Top_10_2007" target="_blank">OWASP top 10</a> web application vulnerabilities (no pun intended). <a href="http://ha.ckers.org/xss.html" target="_blank">Most of them are known</a>. Test for it, fix it. It may not be a direct threat to YOUR site, but it's a security issue nonetheless and poses a risk to your users.</li>
	<li>Stop allowing the caching of search results. All the XSS were found in the search pages of the vulnerable sites. Just disable search engine caching for them. There is no added value in it.</li>
	<li>Search Engines - you have the money and the resources. Although it's OPP (other people's problem), you can help prevent and mitigate such incidents (kudos to Google for their ongoing efforts).</li>
</ol>
Ending on a high note â€“ we stand for security of online browsing, as well as responsible disclosure.