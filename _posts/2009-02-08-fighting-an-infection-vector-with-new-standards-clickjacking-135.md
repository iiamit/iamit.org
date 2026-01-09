---
layout: post
title: "Fighting an infection vector with new standards - ClickJacking"
date: 2009-02-08
permalink: /blog/fighting-an-infection-vector-with-new-standards-clickjacking/
---

If you havenâ€™t heard yet, the newest version of Microsoftâ€™s Internet Explorer 8 (RC1) have been endowed with support for â€œAnti-Clickjackingâ€ (for more background on clickjacking, check out: <a href="http://ha.ckers.org/blog/20080915/clickjacking/">http://ha.ckers.org/blog/20080915/clickjacking/</a>).

This new feature is basically an implementation for a new header (X-FRAME-OPTIONS) that is returned from a server which defines the scope of â€œnetsingâ€ that is allowed for a specific site. This means that sites can potentially have control over whether their content is allowed to be rendered inside an IFrame element â€“ and where (on pages from 3rd party sites, only on pages within the site itself, or not at all).

The solution that is being proposed here is nice, but time will tell if or when sites would start adopting it. Nevertheless, while playing around with the new feature behavior, I noticed that without much PR, Firefox is also supporting the same functionality.

<img class="alignnone size-full wp-image-279" title="cj" src="http://www.iamit.org/blog/assets/uploads/2009/02/cj.jpeg" alt="cj" width="450" height="357" />
Image 1: blocking the inclusion of a site in an IFRAME where the site returned a header X-FRAME-OPTIONS: DENY

<img class="alignnone size-full wp-image-280" title="cj2" src="http://www.iamit.org/blog/assets/uploads/2009/02/cj2.jpeg" alt="cj2" width="398" height="558" />
Image 2: Firefox blocking the included IFrame, and showing the actual header returned from the site.

Now with only Chrome and Opera to jump on the bandwagon, we might actually have a chance to see some changes in the web security landscape (as you may remember â€“ most of the web borne attacks are delivered through the inclusion of an invisible IFrame hosting malicious code). That isif only this protocol could have been reversed to define that no IFrames should be rendered ON a said site, thus preventing injected IFrame elements from being delivered to the users of a compromised site.