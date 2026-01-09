---
layout: post
title: "The curious case of Dropbox security"
date: 2011-04-13
permalink: /blog/the-curious-case-of-dropbox-security/
---

<img class="alignright" title="Dropbox logo" src="https://www.dropbox.com/static/images/dropbox_logo_home.png" alt="The Dropbox logo" width="290" height="75" />After the <a href="http://dereknewton.com/2011/04/dropbox-authentication-static-host-ids/">disclosure of the host_id</a> authentication issues that plagued the popular Dropbox service last week, a<a href="http://paranoia.dubfire.net/2011/04/how-dropbox-sacrifices-user-privacy-for.html"> new issue came up</a> with the fact that Dropbox can detect whether the files you are trying to upload to their cloud already exist there, and "save you the bandwidth" of uploading it if they already have a copy in hand.

So - the Dropbox client <em>probably</em> checks for the hash of the file being uploaded against a list of hashes of existing files that are already stored on the cloud. It <em>may</em> also be that the files stored online are encrypted. So... what's the big deal?

One has to remember that when using a service such as Dropbox (and I'm an avid user myself), you clearly do not have full control over the material you upload, and the online encryption is only a fraction of the protection you may be seeking. There is no key management visible to the user. There is no way that each client you use has its own key, nor they share keys, and if they do, Dropbox is managing your keys. This also gives them the ability to decrypt your data at any given time. Subsequently, it also gives them the ability to provide you with the file of another user if you tried to upload it yourself (hence saving you the bandwidth) - for example, when you may want to access it from a client which does not have the synched copy of your account (or through the web interface). They just decrypt the other user's file, and serve it back to you. After all - you have the same one back on your home/work/whatever PC (remember that you showed "proof" by providing the hash before).

Which brings us back to reality - what are we really exposed to here in terms of risk?
<ol>
	<li>Dropbox has the ability to access the contents of my files.</li>
	<li>If I can come up with a hash of a file that I know someone else has, and that file may be confidential in some way, I can potentially claim to upload the same file, and then download the real one (as I don't really have the original) from another client or through the web interface.</li>
</ol>
Clearly, the media attention to point 1 is important - but still not really interesting as people should have had a clue when they send their files to the "cloud".

However, point 2 makes a more interesting argument... It would be interesting to see when the first "hack" will come along which will start "uploading" files (by hacking the client protocol - hint: start <a href="http://dl.dropbox.com/u/4577542/dropbox/dropboxd-protocol.txt">here</a>, <a href="https://www.dropbox.com/download?dl=packages/dropbox.py">here</a>, and <a href="http://wiki.dropbox.com/TipsAndTricks/TextBasedLinuxInstall">here</a>) just based on hashes, and then downloading them as if from another client to see what you get (if they were "cached" already on the Dropbox cloud). Now <strong>that</strong> would be an interesting little experiment...

Happy hacking!