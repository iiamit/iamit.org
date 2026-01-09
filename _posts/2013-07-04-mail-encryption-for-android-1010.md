---
layout: post
title: "Mail Encryption for Android?"
date: 2013-07-04
permalink: /blog/mail-encryption-for-android/
---

So, now that the <a href="http://www.iamit.org/blog/2012/08/apple-meet-gpg-gpg-meet-apple/">saga with having a decent GPG mail client</a> for Mac has been finally <a href="https://gpgtools.org/">resolved</a> (huge kudos to the guys at gpgtools!), it's time to get some encryption love on an Android device.

I don't know if you ever ended up searching for any decent GPG/PGP/SMIME (not that anyone uses SMIME) mail client for your Android, but the selection in the past couple of years has been pretty slim. Aside from the old <a href="https://play.google.com/store/apps/details?id=com.fsck.k9">K-9</a> (and paid for <a href="https://play.google.com/store/apps/details?id=com.kaitenmail">Kaiten</a>), there isn't really much out there. And these clients aren't up to speed. Lacking PGP-Mime support means you can't read most emails sent from a desktop machine (gpgtools uses OpenPGP mime format), add the fact that there isn't much of an Exchange server support (no ActiveSync) and you are left wanting more (it was actually easier to download the encrypted message .asc, save it locally, fire up <a href="https://play.google.com/store/apps/details?id=org.thialfihar.android.apg">APG</a>, decrypt it, save the plaintext locally, open it in a text editor, and delete all the clutter you just left on your sdcard. ugh.).

So, when I found _another_ mail app that claims to be able to do GPG, and Exchange, and isn't aÂ UI disaster, I had to give it a go.

<img class="alignright" alt="" src="https://lh5.ggpht.com/b04uMsVzmp2WMhtzLAtzNe9IZnzPsBGEQ7YNww4EUTRv-hqHHBp7-AZLvZsXcaWCWrHg" width="184" height="307" />

Enter <a href="https://play.google.com/store/apps/details?id=at.rundquadrat.android.r2mail2">R2Mail2</a> (yeah, I know... marketing isn't their strong suite). So far I have to say that installation has been a breeze (don't forget to go through the weird process of managing the certificate store in the app, then adding your GPG keypair). And it works as advertised (!). OpenPGP mime support, encryption, decryption, signing, and yes - even Exchange (!!).

For what it's worth - I'm giving it a try (meaning - the pay for version). Just giving my extra 2c to help you get on the PRISM "gotta-see-what-he's-emailing-about" list :-)

&nbsp;