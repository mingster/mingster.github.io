---
layout: post
title: Quickest way to reset mysql root password
date: 2009-08-30 12:22:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Tech Note
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '864928731760150177'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p><a href="http://rcm.amazon.com/e/cm?t=mingster-20&#038;o=1&#038;p=8&#038;l=bpl&#038;asins=059652708X&#038;fc1=000000&#038;IS2=1&#038;lt1=_blank&#038;m=amazon&#038;lc1=0000FF&#038;bc1=000000&#038;bg1=FFFFFF&#038;f=ifr">http://rcm.amazon.com/e/cm?t=mingster-20&#038;o=1&#038;p=8&#038;l=bpl&#038;asins=059652708X&#038;fc1=000000&#038;IS2=1&#038;lt1=_blank&#038;m=amazon&#038;lc1=0000FF&#038;bc1=000000&#038;bg1=FFFFFF&#038;f=ifr</a>If you forgot root password for MySQL, this is the quickest way to reset it. You need to have root access to the box.<br /><code>service mysqld stop<br /></code><br />wait until MySQL shuts down. Then run<br /><code>mysqld_safe --skip-grant-tables &amp;<br /></code><br />**In Windows, cd to mysql path, e.g. C:\Program Files\MySQL\MySQL Server 5.1\bin, then<br /><code>mysqld.exe -u root --skip-grant-tables<br /></code></p>
<p>then you will be able to login as root with no password.<br /><code>mysql -u root<br /></code><br />In MySQL command line prompt issue the following command:<br /><code>mysql&gt; use mysql;<br />mysql&gt; UPDATE user SET password=PASSWORD('the_new_password') WHERE user='root';<br />mysql&gt; FLUSH PRIVILEGES;<br /></code><br />At this time your root password is reset and MySQL will now know the privileges and you'll be able to login with your new password:<br /><code>mysql -u root -p<br /></code></p>
<p>Back to production mode<br /><code>killall mysqld<br />service mysqld start<br /></code></p>
