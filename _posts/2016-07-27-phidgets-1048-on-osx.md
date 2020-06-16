---
layout: post
title: Phidgets 1048 on OSX
date: 2016-07-27 17:16:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- 咖啡
- Mac
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: ming tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '7755760576105060215'
  _wpcom_is_markdown: '1'
author: mingster
---
<p>update: 2017/07/05<br />
After update macos to high sierra, phigets driver needs to be reinstalled.<br />
With <a href="https://rainfroginc.com/documentation/setting-up-phidgets" target="_blank" rel="noopener">latest version</a> of Roastmaster, you can use <a href="https://www.phidgets.com/docs21/OS_-_OS_X#Quick_Downloads" target="_blank" rel="noopener">latest Phigets driver</a>.</p>
<p>I got the <a href="http://www.phidgets.com/products.php?product_id=1048" target="_blank" rel="noopener">Phidgets 1048 temperature sensor</a> to hookup <a href="https://itunes.apple.com/tw/app/roastmaster/id375526217?mt=8" target="_blank" rel="noopener">Roastmaster</a> app and <a href="http://www.coffeeshrub.com/shrub/content/quest" target="_blank" rel="noopener">Quest m3s roaster</a>.</p>
<p><a href="https://rainfroginc.com/documentation/setting-up-phidgets" target="_blank" rel="noopener">The plan</a> is exactly like Raintroy suggested. You would install the <a href="https://www.phidgets.com/downloads/phidget21/libraries/macos/Phidget/" target="_blank" rel="noopener">old OSX driver</a> (2.1.7.20140227) on a mac. The board is powered by the computer via USB.  The iPad is connected to the same wifi as the mac.  From there, Roastmaster app can read from the sensor via web service.</p>
<p>Using a 2 years old driver doesn't sound to exciting to me.  And yes, it bring trouble to the setup.  As you complete the driver install, the testing program would show <b>Attached: Nothing</b>.</p>
<p>To fix the bug, you need to make sure:</p>
<ol>
<li>Install latest phidgets driver (and than override it by install the old driver required by Roastmaster)</li>
<li>Make sure Java using mac's original:</li>
</ol>
<pre><code>$ java -version
java version "1.6.0_65"
Java(TM) SE Runtime Environment (build 1.6.0_65-b14-468-11M4833)
Java HotSpot(TM) 64-Bit Server VM (build 20.65-b04-468, mixed mode)</code></pre>
<p>Both Apple and JDK have the instruction:</p>
<ul>
<li><a href="http://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html">http://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html</a></li>
<li><a href="https://support.apple.com/kb/DL1572?locale=en_US">https://support.apple.com/kb/DL1572?locale=en_US</a></li>
<li><a href="https://support.apple.com/en-us/HT202643">https://support.apple.com/en-us/HT202643</a></li>
<li><a href="http://www.howtogeek.com/230145/how-to-uninstall-java-on-mac-os-x/">http://www.howtogeek.com/230145/how-to-uninstall-java-on-mac-os-x/</a></li>
</ul>
<p>Hopefully the info helps if you have the same problem.</p>
<p>Other references:<br />
Phidgets OSX doc:<br />
<a href="http://www.phidgets.com/docs/OS_-_OS_X#Quick_Downloads">http://www.phidgets.com/docs/OS_-_OS_X#Quick_Downloads</a></p>
