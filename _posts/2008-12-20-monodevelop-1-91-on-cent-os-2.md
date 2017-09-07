---
layout: post
title: MonoDevelop 1.91 on Cent OS
date: 2008-12-20 16:58:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Tech Note
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '3698579673995229665'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>Last <a href="http://mingstert.blogspot.com/2008/12/mono-2x-on-centos-5.html">post</a> we installed Mono 2.x run time. Here we will get MonoDevelop install on GNOME, for development environment.</p>
<p>First, here are the related software. You should have most of them when installing the run-time:<br /><code><br />yum install glib2-devel pango-devel gtk2-devel glade2-devel libgnome-devel \<br />gnome-desktop-devel gnome-panel-devel libgnomeprintui22-devel  \<br />gtksourceview-devel ruby ruby-rdoc gtkhtml38-devel wget<br /></code><br />Now, we need make the required environment variables while we're building the IDE, as well in its run-time.  So let's make it into shellscript called env.sh (or whatever you like it).<br /><code><br />echo 'PATH="/opt/mono/bin:$PATH"' /opt/mono/env.sh<br />echo 'export PKG_CONFIG_PATH=/opt/mono/lib/pkgconfig' &gt;&gt; /opt/mono/env.sh<br />echo 'export LD_LIBRARY_PATH=/opt/mono/lib' &gt;&gt; /opt/mono/env.sh<br />echo 'source /opt/mono/env.sh' &gt;&gt; /opt/mono/env.sh</p>
<p>chmod +x /opt/mono/env.sh<br /></code><br />Now we are ready to build MonoDevelop from tarball source.  The following packages are the minimum software needed - we will build them one-by-one:</p>
<p><b>gtk-sharp</b><br /><code><br />cd ~/<br />wget http://ftp.novell.com/pub/mono/sources/gtk-sharp212/gtk-sharp-2.12.5.tar.bz2<br />tar xjf gtk-sharp-2.12.5.tar.bz2<br />cd ./gtk-sharp-2.12.5<br />./configure --prefix=/opt/mono<br />make;make install<br /></code><br /><b>Mono.Addins</b><br /><code><br />wget http://ftp.novell.com/pub/mono/sources/mono-addins/mono-addins-0.3.1.tar.bz2<br />cd ./mono-addins-0.3.1<br />./configure --prefix=/opt/mono<br />make;make install<br /></code><br /><b>Monodoc</b><br /><code><br />wget http://ftp.novell.com/pub/mono/sources/monodoc/monodoc-2.0.zip<br />unzip monodoc-2.0.zip<br />cd ./monodoc-2.0<br />./configure --prefix=/opt/mono<br />make;make install<br /></code><br /><b>Mono Tools</b><br /><code><br />wget http://ftp.novell.com/pub/mono/sources/mono-tools/mono-tools-2.0.tar.bz2<br />tar jfxv mono-tools-2.0.tar.bz2<br />cd ./mono-tools-2.0<br />./configure --prefix=/opt/mono<br />make;make install<br /></code><br /><b>MonoDevelop</b><br /><code><br />wget http://ftp.novell.com/pub/mono/sources/monodevelop/monodevelop-1.9.1.tar.bz2<br />tar jfxv monodevelop-1.9.1.tar.bz2<br />cd ./monodevelop-1.9.1<br />./configure --prefix=/opt/mono<br />make;make install<br /></code><br />You should now able to start up MonoDevelop in GNOME, enjoy.</p>
