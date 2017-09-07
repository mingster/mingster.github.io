---
layout: post
title: Network Time (NTP) service in CentOS
date: 2009-01-06 12:11:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- IT
tags: []
meta:
  blogger_blog: mingstert.blogspot.com
  blogger_permalink: "/2009/01/network-time-ntp-service-in-centos.html"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1455438897;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:167;}i:1;a:1:{s:2:"id";i:225;}i:2;a:1:{s:2:"id";i:237;}}}}
  original_post_id: '175'
  _wp_old_slug: '175'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>Synchronize the clocks is standard now-da-day.  If you don't have NTP for some reason, here's how you set it up in CentOS.</p>
<p>First Install the NTP Package on your server as root.<br /><code><br />  # yum install ntp<br />  Loading “fastestmirror” plugin<br />  Loading mirror speeds from cached hostfile<br />  * base: mirror.steadfast.net<br />  * updates: mirrors.liquidweb.com<br />  * addons: pubmirrors.reflected.net<br />  * extras: pubmirrors.reflected.net<br />  Setting up Install Process<br />  Parsing package install arguments<br />  Resolving Dependencies<br />  –&gt; Running transaction check<br />  —&gt; Package ntp.i386 0:4.2.2p1-8.el5.centos.1 set to be updated<br />  –&gt; Finished Dependency Resolution</p>
<p>  Dependencies Resolved</p>
<p>  =================================================================<br />  Package                 Arch       Version          Repository        Size<br />  =================================================================<br />  Installing:<br />  ntp                     i386       4.2.2p1-8.el5.centos.1  base              1.3 M</p>
<p>  Transaction Summary<br />  =================================================================<br />  Install      1 Package(s)<br />  Update       0 Package(s)<br />  Remove       0 Package(s)</p>
<p>  Total download size: 1.3 M<br />  Is this ok [y/N]: y<br />  Downloading Packages:<br />  (1/1): ntp-4.2.2p1-8.el5. 100% |=========================| 1.3 MB    00:19<br />  Running rpm_check_debug<br />  Running Transaction Test<br />  Finished Transaction Test<br />  Transaction Test Succeeded<br />  Running Transaction<br />  Installing: ntp                          ######################### [1/1]</p>
<p>  Installed: ntp.i386 0:4.2.2p1-8.el5.centos.1<br />  Complete!<br /></code><br />Next set it to start automatically on a reboot<br /><code><br />  # chkconfig ntpd on<br /></code><br />Tell it which NTP server it should update it’s time from<br /><code><br />  # ntpdate pool.ntp.org<br />  4 Aug 12:32:43 ntpdate[9540]: step time server 64.202.112.75 offset 1256.453048 sec<br /></code><br />Verify that the Time &amp; Date are correct<br /><code><br />  # date<br />  Mon Aug  4 12:33:04 EDT 2008<br /></code><br />Finally start the service<br /><code><br />  # service ntpd start<br />  Starting ntpd:                                             [  OK  ]<br /></code></p>
