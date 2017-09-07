---
layout: post
title: Drupal install on CentOS5
date: 2009-09-06 15:12:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Linux
- Tech Note
tags: []
meta:
  _blogger_self: https://www.blogger.com/feeds/7772966/posts/default/1475801722667569825
  blogger_permalink: "/2009/09/drupal-install-on-centos5.html"
  blogger_blog: mingstert.blogspot.com
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1440743320;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:260;}i:1;a:1:{s:2:"id";i:200;}i:2;a:1:{s:2:"id";i:237;}}}}
  original_post_id: '256'
  _wp_old_slug: '256'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>PHP 5.3 is not supported on current Drupal (6.14), and CentOS's PHP version is still on 5.1.9. So the drupal installation needs a little bit of work.</p>
<p>1. Install MySQL <span style="color:#990000;">5.1</span><br /><code>cd /etc/yum.repos.d<br />wget wget http://rpms.famillecollet.com/enterprise/remi-release-5.rpm<br />yum --enablerepo=remi install mysql mysql-server mysql-devel mysql-libs<br /></code></p>
<p>2. Install PHP 5.2.9 from CentOS testing repository:<code><br />cd /etc/yum.repos.d<br />wget http://dev.centos.org/centos/5/CentOS-Testing.repo<br />yum --enablerepo=c5-testing install php php-devel php-pear php-pecl php-mcrypt php-xml php-xml php-imap php-soap php-mbstring php-mysql php-cli php-mysql<br /></code></p>
<p>3. drupal clean URL config (sample)<br />there are many ways to turn on clean URL. Here's how I do it:<code><br />AllowOverride All<br />Options Indexes FollowSymLinks MultiViews<br />Order allow,deny<br />Allow from all</p>
<p>RewriteEngine on<br />RewriteBase /<br />RewriteCond %{REQUEST_FILENAME} !-f<br />RewriteCond %{REQUEST_FILENAME} !-d<br />RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]<br />Alias /drupal /var/www/drupal<br /></code></p>
<p>4. PHP.ini<br />modify the following keys, this is my settings:<br /><code><br />max_input_time = 100    ; Maximum amount of time each script may spend parsing request data<br />memory_limit = 100M      ; Maximum amount of memory a script may consume (16MB)<br />error_reporting  =  E_ALL<br />memory_limit = 100M      ; Maximum amount of memory a script may consume (16MB)<br />upload_max_filesize = 100M<br /></code></p>
<p>5. upload progress</p>
<p><span style="font-weight:bold;">add the extension to php.ini:</span><br />if you don't have gcc installed:<br /><code>yum -y groupinstall "Development Tools"</code></p>
<p>install pecl related if you don't have them yet:<br /><code><br />yum -y install php-devel php-pecl php-pear<br /></code></p>
<p>install the upload progress:<br /><code><br />pecl install uploadprogress<br /></code></p>
<p>edit your /etc/php.ini and add this line under extension section:<br /><code><br />extension=uploadprogress.so<br /></code></p>
<p>6. GD library<br /><code><br />yum --enablerepo=c5-testing install gd gd-devel php-gd<br /></code></p>
<p>6. Install drupal</p>
