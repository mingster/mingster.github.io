---
layout: post
title: ".NET fix: System.Security.SecurityException: Requested registry access is
  not allowed."
date: 2010-06-21 12:11:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- C# 編碼原則
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '3580094788594316148'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>If you get something like this:</p>
<pre>Server Error in '/applicationname' Application.<br />---------------------------------------------------------------------------<br />Security Exception <br />Description: The application attempted to perform an operation not allowed by the security policy. To grant this application the required permission please contact your system administrator or change the application's trust level in the configuration file. <br /><br />Exception Details: System.Security.SecurityException: Requested registry access is not allowed.<br /><br />Source Error: <br />An unhandled exception was generated during the execution of the current web request. Information regarding the origin and location of the exception can be identified using the exception stack trace below. <br /><br />Stack Trace: <br />[SecurityException: Requested registry access is not allowed.]<br />Microsoft.Win32.RegistryKey.OpenSubKey(String name, Boolean writable) +473<br />....<br /></pre>
<p>I'm not sure there's a secured way, but adding permission for iis daemon user solve the problem for me.</p>
<p>1. Find out which deamon user your app is using, by looking up App_Pool and secruity section in event log.</p>
<p>2. Give the user permission to read/write access for the eventlog registry entry. To do so, open regedit and navigate to the key:
<pre>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog</pre>
<p>. <br />Right click and select Permissions, and add permission for the user.</p>
<p>3. restart iis and give it a try.</p>
