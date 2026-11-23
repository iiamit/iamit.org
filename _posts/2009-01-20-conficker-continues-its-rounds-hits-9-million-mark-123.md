---
layout: post
title: "Conficker continues its rounds. Hits 9 million mark"
date: 2009-01-20
permalink: /blog/conficker-continues-its-rounds-hits-9-million-mark/
categories: [research]
---

<div>

It is funny how security works, isn’t it? When you think you got rid of the old-school (aka “stupid”) threats, reality hits you right back. Confiker/Downadup is a simple worm;  it exploits a Microsoft Windows vulnerability, that can only be utilized over a local network as it uses the SMB protocol, and uses an initial infection vector of running an “autorun” on removable media (usually USB drives).

Why is it so annoying? Well, getting to 9 million infected machines (as per external reports) is pretty impressive for such a classic infection vector (considering that there is no communication attack vector at all – no internet needed, no email attachment…). I thought that these infections were mostly in large companies that fail to properly patch their systems. Reality check again; as I’m speaking in a security sales summit, and working with the local hotel Business Center, I hand over my USB stick for them to print a PDF, and get it back with… you guessed it. Confiker.

Funny at first, but sad when you realize the amount of non-technical debugger-less users that plug the thing back in and have autorun immediately infect their system.</div>