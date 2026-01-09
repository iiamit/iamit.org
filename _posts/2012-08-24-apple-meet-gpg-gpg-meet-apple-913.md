---
layout: post
title: "Apple, meet GPG, GPG, meet Apple."
date: 2012-08-24
permalink: /blog/apple-meet-gpg-gpg-meet-apple/
---

Why is it so f&amp;^#ing difficult to get this right? I'm looking at you "recently identified as the most valuable public company" - Apple!

The guys at GPGTools are doing some fantastic work in bringing a comprehensive GPG implementation into Mac OS X, and Apple seem to not only ignore the need for such an important tool, but consistently screw things up with Mail such that every new OS X update the Â GPGMail plugin is rendered useless.

As a longtime supporter for gpgtools, and a longtime user of Apple products (sans the funky iPhone of course), I urge you - get this thing fixed.

And now - as I usually tell people who just rant and not offer any advice - how to somehow get things working:

The current solution for having a decent PGP experience on Mac OS X (and please - correct me if you have anything better/easier than this) is to do he following:
<ol>
	<li>Install <a href="http://www.mozilla.org/en-US/thunderbird/">Thunderbird</a>. This is required as Apple's Mail won't work with any encryption plugins (that I know of) to handle PGP/GPG encrypted/signed emails.</li>
	<li>InstallÂ <a href="http://www.enigmail.net/home/index.php">Enigmail</a>. This is a "just works" plugin for Thunderbird to handle GPG. It simply just works. No hassle, great default config, recipient rules, the works...</li>
	<li>Install <a href="http://davmail.sourceforge.net/">DavMail</a>. This is a tricky one - it basically provides a local proxy for Microsoft's OWA and "translates" it into IMAP/POP3/SMTP. The tricky part is that the application is not yet "signed" by the developer, and on Mac OS X 10.8.1 it simply won't run in the default configuration (you'll get a prompt to literally throw the application to the trash because it failed to start). Initially I just though botched download, but then realized that it's got to do with Apple's new gatekeeper... You'll have to change the security settings to allow applications that were downloaded from _ANYWHERE_ to run (as opposed to application from the AppStore and "identified developers"): System Preferences -&gt; Security and Privacy -&gt; General.</li>
</ol>
It sounds like a kludge, and it is. But for now it works. At least until gpgtools manage to get enough support to have a version that works on Mountain Lion, or until Apple wakes up and start working with these guys and finally integrate it natively into the OS X Mail client.