---
layout: post
title: Setup Subversion and Trac on CentOS 5
date: 2008-05-04 15:55:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- dev enviornment
- IT
- SVN
- Tech Note
tags: []
meta:
  blogger_blog: mingstert.blogspot.com
  blogger_permalink: "/2008/05/setup-subversion-and-trac-on-centos-5.html"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1455318164;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:563;}i:1;a:1:{s:2:"id";i:223;}i:2;a:1:{s:2:"id";i:166;}}}}
  original_post_id: '160'
  _wp_old_slug: '160'
author: mingster
---
<p>Recently I set up a virtual server to use as a development machine. It runs on CentOS 5 and hosts several <a target="_blank" href="http://subversion.tigris.org/" title="Subversion" rel="external">Subversion</a> repositories with associated <a target="_blank" href="http://trac.edgewall.org/" title="Trac" rel="external">Trac</a> projects.</p>
<p>There are many guides and plenty of help on the net to help you setup such a system. However, when I tried to do it I came across a few problems and I hope this post may help at least a few people trying to do the same as me. I am not going to rewrite the great tutorials out there, I will just point you to them and note what things I did differently.</p>
<p>This 'guide' should get you from a fresh install of CentOS 5 linux to one or more working Subversion (<abbr title="Subversion">SVN</abbr>) repositories and associated Trac wiki's. Apache/WebDAV is used as the network layer. I have only tested this on a fresh install of CentOS 5.</p>
<p><span></span></p>
<h2>The Environment</h2>
<p>I am aiming for the following:</p>
<ul>
<li>CentOS 5, <abbr title="Subversion">SVN</abbr> installed. Apache2 as the network layer using mod_dav_svn.</li>
<li>Trac running on Apache with mod_python</li>
<li><abbr title="Subversion">SVN</abbr> repositories located at: /srv/svn (e.g. /srv/svn/my-project), accessible via http://server/svn/my-project</li>
<li>Trac projects located at: /srv/trac (e.g /srv/trac/my-project) accessible via http://server/trac/my-project</li>
</ul>
<h2>How I did it</h2>
<p>Not all the steps are vital (probably) but this is how I got it working. Feel free to skip any non-relevant steps (i.e. there is probably no need for a fresh install). Replace any occurence of <span class="inline-code"></span> with the name of your first project.</p>
<p><strong>1.</strong> Fresh install of CentOS. I followed most of the <a target="_blank" href="http://www.howtoforge.com/perfect_setup_centos5.0" title="The Perfect Setup: CentOS 5.0" rel="external">Perfect Setup Guide</a>, except the mail and ISPConfig stuff. The important part is setting up the Apache2 web server.</p>
<p><strong>2.</strong> Make sure <abbr title="Subversion">SVN</abbr> and mod_dav_svn are installed. As root:</p>
<pre>yum install subversion mod_dav_svn</pre>
<pre>vim /etc/httpd/conf/httpd.conf</pre>
<p>If the following two lines are not present, add them:</p>
<pre>LoadModule dav_svn_module modules/mod_dav_svn.so<br />LoadModule authz_svn_module modules/mod_authz_svn.so</pre>
<p><strong>3.</strong> Install Trac: Follow <a target="_blank" href="http://www.techyouruniverse.com/software/installing-trac-with-subversion-on-cent-os-5-with-neon-and-quicksilver" title="Installing Trac with SubVersion on CentOS 5" rel="external">Nick's guide</a> with the alternative Clearsilver installation below. Skip the Apache Configuration part.</p>
<p>Follow all of parts 1 and 2. Instead of part 3 do:</p>
<pre>wget http://dag.wieers.com/rpm/packages/clearsilver/clearsilver-0.10.4-1.el5.rf.i386.rpm<br />rpm -i clearsilver-0.10.4-1.el5.rf.i386.rpm<br />wget http://dag.wieers.com/rpm/packages/clearsilver/python-clearsilver-0.10.4-1.el5.rf.i386.rpm<br />rpm -i python-clearsilver-0.10.4-1.el5.rf.i386.rpm</pre>
<p>Continue with parts 4.1 and 4.2 of Nick's guide. Remember, leave out Apache configuration section.</p>
<p><strong>4. </strong>Create your first <abbr title="Subversion">SVN</abbr> Repository:</p>
<pre>svnadmin create --fs-type fsfs /srv/svn/project_name</pre>
<p><strong>5.</strong> Initialise a Trac project for your new repository:</p>
<pre>trac-admin /srv/trac/project_name initenv</pre>
<p>For the trac-admin command use the defaults if not sure, giving a descriptive name for the project. The `Path to repository` is: <span class="inline-code">/srv/svn/project_name</span>.</p>
<p><strong>6.</strong> Set the correct file permissions for apache</p>
<pre><br />chown -R apache.apache /srv/svn/project_name<br />chown -R apache.apache /srv/trac/project_name<br /></pre>
<p><strong>7.</strong> Tell apache where to find the new repository. Here we create an additional Apache configuration file specifically for the <abbr title="Subversion">SVN</abbr> repositories.</p>
<pre>vim /etc/httpd/conf.d/subversion.conf</pre>
<p>
<p>Add the following directive:</p>
<pre><br />&lt;location&gt;<br />DAV svn<br />SVNPath /srv/svn/project_name<br />AuthType Basic<br />AuthName "My SVN Repository"<br />AuthzSVNAccessFile /srv/svn/svn-acl-conf<br />AuthUserFile /srv/svn/.htpasswd<br />Require valid-user<br />&lt;/location&gt;</pre>
<p><strong>8.</strong> Add a repository user:</p>
<p>
<pre><br />touch /srv/svn/.htpasswd<br />htpasswd -m /srv/svn/.htpasswd username<br /></pre>
<p><strong>9. </strong>Create the Access Control List for the SVN Repository</p>
<p>
<pre><br />vim /srv/svn/svn-acl-conf</pre>
<p>Add the following directives:</p>
<pre><br />[project_name:/]<br />username =  rw<br /></pre>
<p>Where <span class="inline-code">username</span> represents the username of the repository user you created earlier.</p>
<p><strong>10.</strong> Tell apache where to find the new Trac project. Here we create an additional Apache configuration file specifically for the Trac projects.</p>
<p>
<pre>vim /etc/httpd/conf.d/trac.conf</pre>
<p>Add the following directives:</p>
<p>
<pre><br /><br />&lt;location&gt;<br />SetHandler mod_python<br />PythonHandler trac.web.modpython_frontend<br />PythonOption TracEnv /srv/trac/project_name<br />PythonOption TracUriRoot /trac/<br /><br />&lt;location/login&gt;<br />AuthType Basic<br />AuthName "trac"<br />AuthUserFile /srv/trac/.htpasswd<br />Require valid-user<br />&lt;/location&gt;<br />&lt;/location&gt;<br /></pre>
<p><strong>11.</strong> Add a Trac user:</p>
<pre>touch /srv/trac/.htpasswd<br />htpasswd -m /srv/trac/.htpasswd </pre>
<p><strong>12.</strong> Give admin permissions to the Trac user you just created:</p>
<pre>trac-admin /srv/trac/ permission add  TRAC_ADMIN</pre>
<p>Where <span class="inline-code"></span> represents the username of the Trac user you just created.</p>
<p><strong>13.</strong> Restart Apache:</p>
<pre>service httpd restart</pre>
<p>You should now have <abbr title="Subversion">SVN</abbr> and Trac installed. You will have an <abbr title="Subversion">SVN</abbr> repository setup (http://server/svn/) and the Trac wiki (http://server/trac/) associated with the repository.</p>
<p>Please let me know if this helped you. If you come across any problems I will be happy to try and help.</p>
<h2>Resources</h2>
<p>The last part of <a href="http:///" title="CentOS HowTos: Subversion">CentOS HowTos: Subversion</a> will give you a quick introduction on how to use <abbr title="Subversion">SVN</abbr>.</p>
<p>Subversion setup guides: <a target="_blank" href="http://www.jimohalloran.com/2006/01/15/subversion-server-on-centos-42/" title="Subversion setup guide" rel="external">here</a> and <a target="_blank" href="http://www.techyouruniverse.com/software/installing-trac-with-subversion-on-cent-os-5-with-neon-and-quicksilver" title="Subversion setup guide" rel="external">here</a></p>
<p>Trac setup guides: <a target="_blank" href="http://trac.edgewall.org/wiki/TracOnRhel4" title="Trac setup guide" rel="external">here</a> and <a target="_blank" href="http://trac.edgewall.org/wiki/TracOnFedoraCore" title="Trac setup guide" rel="external">here</a>.</p>
<p><a target="_blank" href="http://www.clearsilver.net/" title="ClearSilver" rel="external">ClearSilver template system</a> (used by Trac).</p>
<p><a target="_blank" href="http://www.howtoforge.com/perfect_setup_centos5.0_p7" title="The Perfect Setup: CentOS 5.0" rel="external">Setting up CentOS 5.0</a></p>
