---
layout: post
title: not load file or assembly 'System.Windows, Version=2.0.5.0...'
date: 2010-08-08 14:38:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- C# 編碼原則
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '8657280401557286956'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>if you get this error, it's because Sliverlight assembly is not in GAC. Do this to fix:</p>
<p><code><br />cd C:\Program Files\Microsoft Silverlight\4.0.50524.0<br />gacutil -i System.Core.dll<br />gacutil -i system.dll<br />gacutil -i system.net.dll<br />gacutil -i system.xml.dll<br />gacutil -i System.Runtime.Serialization.dll<br /></code></p>
<p><a href="http://forums.silverlight.net/forums/p/135896/303959.aspx">check out what other people said.</a></p>
