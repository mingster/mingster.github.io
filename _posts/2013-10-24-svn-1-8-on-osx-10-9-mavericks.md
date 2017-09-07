---
layout: post
title: SVN 1.8 on OSX 10.9 (Mavericks)
date: 2013-10-24 03:19:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Mac
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '8164577336914191581'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>This post is about how to compile the latest SVN source (1.8.3) on OSX Mavericks (OSX 10.9).<br />
<h2>References</h2>
<p><a href="http://samoldak.com/updating-to-svn-1-8-for-mac-os-x-10-8/">Sam's Updating to SVN 1.8 for Mac OSX 10.8</a>. This is about building in OSX 10.8.<br />
<h2>Requirement</h2>
<ol>
<li>Xcode command line tool: can be download at <a href="https://developer.apple.com/downloads/index.action" target="_blank">Apple's dev center</a> or <a href="http://www.computersnyou.com/2025/2013/06/install-command-line-tools-in-osx-10-9-mavericks-how-to/" target="_blank">install command line tool without Xcode</a>.</li>
<li>Setup the Tool chain: <code>sudo ln -s /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/ /Applications/Xcode.app/Contents/Developer/Toolchains/OSX10.9.xctoolchain</code>The key is to link the toolchain to reflect new version # of Maverick, which is 10.9. </li>
<li>The SVN source: can be download form <a href="http://subversion.apache.org/download/" target="_blank">Apache SVN project</a>.<br />Here's straight way in command: <code>cd ~/Downloads/ curl -o subversion-1.8.3.tar.gz http://archive.apache.org/dist/subversion/subversion-1.8.3.tar.gz tar -xvf subversion-1.8.3.tar.gz</code></li>
</ol>
<h2>Build and Install SVN</h2>
<h3>Build serf</h3>
<p>First we will need to build serf, included in the subversion package. <code>cd ~/Downloads/subversion-1.8.3 sh get-deps.sh serf cd serf/ ./configure make sudo make install </code><br />
<h3>Build SVN</h3>
<p>Go back up to the SVN source root, and build it using serf.  Depend on your hardware, it might takes awhile.  If you need a coffee, this is good time to do so once you start the make. <code>cd .. ./configure --prefix=/usr/local --with-serf=/usr/local/serf make sudo make install</code><br />
<h2>Wrap it up</h2>
<p>Now you've the new SVN 1.8.3 installed at /usr/local/bin.  Make sure your path includes it. From there you should able to: <code>svn --version</code> And here you go:
<pre><br />svn, version 1.8.3 (r1516576)<br />   compiled Oct 24 2013, 02:38:35 on x86_64-apple-darwin13.0.0<br /><br />Copyright (C) 2013 The Apache Software Foundation.<br />This software consists of contributions made by many people;<br />see the NOTICE file for more information.<br />Subversion is open source software, see http://subversion.apache.org/<br /><br />The following repository access (RA) modules are available:<br /><br />* ra_svn : Module for accessing a repository using the svn network protocol.<br />  - with Cyrus SASL authentication<br />  - handles 'svn' scheme<br />* ra_local : Module for accessing a repository on local disk.<br />  - handles 'file' scheme<br />* ra_serf : Module for accessing a repository via WebDAV protocol using serf.<br />  - using serf 1.2.1<br />  - handles 'http' scheme<br />  - handles 'https' scheme<br /></pre>
