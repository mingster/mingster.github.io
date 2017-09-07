---
layout: post
title: 'REHL: Install latest PHP (5.2.x) from Remi repository'
date: 2009-07-15 00:40:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Linux
- Tech Note
tags: []
meta:
  blogger_blog: mingstert.blogspot.com
  blogger_author: mingster
  blogger_ca678228220bc856f5131874f02e04d9_permalink: '6196089237716337574'
  _blogger_self: https://www.blogger.com/feeds/7772966/posts/default/6196089237716337574
  blogger_permalink: "/2009/07/centos-install-latest-php-52x-from-remi.html"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1455283106;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:256;}i:1;a:1:{s:2:"id";i:237;}i:2;a:1:{s:2:"id";i:167;}}}}
  original_post_id: '256'
  _wp_old_slug: '256'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>A few app requires PHP 5.2.x but major repositories is yet support anything higher than 5.1.6 at this time. Recompile PHP is a pain also.</p>
<p><a href="http://blog.famillecollet.com/post/2005/10/02/8-telechargement-installation-et-yum">Remi</a> maintains a repository that can save your 1 day or 2 if you have such need.</p>
<p><code>cd /etc/yum.repos.d/<br />wget http://download.fedora.redhat.com/pub/epel/5/i386/epel-release-5-3.noarch.rpm<br />wget http://rpms.famillecollet.com/enterprise/remi-release-5.rpm<br />rpm -Uvh remi-release-5*.rpm epel-release-5*.rpm</code></p>
<p>You now have Remi repository on your system. It's disabled by default, and I recommend you leave it as is. To install from remi, run the following:</p>
<p><code>yum --enablerepo=remi update php</code></p>
<p>I use remi to install php and its related stuff like GD, mcrypt, etc. As well as MySQL. The repository rocks!</p>
