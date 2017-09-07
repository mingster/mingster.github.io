---
layout: post
title: Setup Subversion and Trac on CentOS 5
date: 2008-05-04 15:55:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- SVN
- Tech Note
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '2079046979367167742'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>Recently I set up a virtual server to use as a development machine. It runs on CentOS 5 and hosts several <a href="http://subversion.tigris.org/" rel="external" target="_blank" title="Subversion">Subversion</a> repositories with associated <a href="http://trac.edgewall.org/" rel="external" target="_blank" title="Trac">Trac</a> projects.<br />There are many guides and plenty of help on the net to help you setup such a system.  The easiest way is to YUM it.<br /><code>yum --enablerepo=rpmforge trac<br /></code><br />But that's not it, you need to do the following post-installs.</p>
<p><b>Initialize a Trac project for your new repository</b><br /><code><br />trac-admin /var/trac/project_name initenv<br /></code><br />From there you will enter the trac-admin commands. Use the defaults if not sure.<br /><b>File permissions</b><br /><code><br />chown -R apache.apache /srv/svn/project_name<br />chown -R apache.apache /var/trac/project_name<br /></code><br />If you don't like the location, edit the /etc/httpd/conf.d/trac.conf.<br /><b>Subversion</b><br /><code><br />vim /etc/httpd/conf.d/subversion.conf</code></p>
<p>Add the following directive:<br /><code></p>
<p>DAV svn<br />SVNParentPath /srv/svn<br />AuthType Basic<br />AuthName "My SVN Repository"<br />AuthzSVNAccessFile /srv/svn/svn-acl-conf<br />AuthUserFile /srv/svn/.htpasswd<br />Require valid-user<br /></code><br /><b>Add a repository user</b><code><br />touch /srv/svn/.htpasswd<br />htpasswd -m /srv/svn/.htpasswd username</code></p>
<p><b></b><span style="font-weight:bold;">Create the Access Control List for the SVN Repository</span></p>
<pre>vim /srv/svn/svn-acl-conf</pre>
<p>Add the following directives:</p>
<pre>[project_name:/]<br />username =  rw<br /></pre>
<p>Where <span class="inline-code">username</span> represents the username of the repository user you created earlier.<br /><b>Trac Config</b><br /><code>vi /etc/httpd/conf.d/trac.conf<br /></code><br />Edit this line:<br /><code>AuthUserFile /srv/svn/.htpasswd<br /></code><br />Give admin permissions to the Trac user you just created:<br /><code>trac-admin /srv/trac/project_name permission add username TRAC_ADMIN</code><br />Where username represents the trac user you just added in htpasswd.<br /><span style="font-weight:bold;">Restart Apache</span><br /><code>service httpd restart</code><br />You should now have <abbr title="Subversion"></abbr>http://server/svn/ and the Trac system at http://server/trac/ associated with the repository.
<div style="font-weight:bold;">What's Next?</div>
<p>check out <a href="http://trac-hacks.org/">http://trac-hacks.org</a></p>
<div style="font-weight:bold;">Resources</div>
<ul>
<li>The last part of <a href="http:///" title="CentOS HowTos: Subversion">CentOS HowTos: Subversion</a> will give you a quick introduction on how to use <abbr title="Subversion">SVN</abbr>.</li>
<li>Subversion setup guides: <a href="http://www.jimohalloran.com/2006/01/15/subversion-server-on-centos-42/" rel="external" target="_blank" title="Subversion setup guide">here</a> and <a href="http://www.techyouruniverse.com/software/installing-trac-with-subversion-on-cent-os-5-with-neon-and-quicksilver" rel="external" target="_blank" title="Subversion setup guide">here</a></li>
<li>Trac setup guides: <a href="http://trac.edgewall.org/wiki/TracOnRhel4" rel="external" target="_blank" title="Trac setup guide">here</a> and <a href="http://trac.edgewall.org/wiki/TracOnFedoraCore" rel="external" target="_blank" title="Trac setup guide">here</a>.</li>
<li><a href="http://www.howtoforge.com/perfect_setup_centos5.0_p7" rel="external" target="_blank" title="The Perfect Setup: CentOS 5.0">Setting up CentOS 5.0</a></li>
</ul>
