---
layout: post
title: How to sync an iPhone with two (or more) Computers
date: 2009-06-27 09:02:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Tech Note
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '8395187631144622131'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p><a href="http://theappleblog.com/2009/02/26/sync-iphone-ipod-with-multiple-computers/">http://theappleblog.com/2009/02/26/sync-iphone-ipod-with-multiple-computers</a></p>
<p class="excerpt">One thing I have always wanted to do is be able to sync my iPhone or iPod with any computer. Lifehacker had an <a title="Hack Attack: Add music and movies to your iPod from any computer without iTunes" href="http://lifehacker.com/software/ipod/hack-attack-add-music-and-movies-to-your-ipod-from-any-computer-without-itunes-237986.php">article</a> a while back on doing this, but the software they used does not support the iPhone or iPod touch. So, I have developed a method to connect any iPod or iPhone to any computer to download the music or movies from that computer to the iPod or iPhone.</p>
<p>Once configured, you only need your iPhone/iPod, the USB sync cable, and a computer with iTunes to implement the hack (the idea being you always have your iPhone or iPod and the person with the computer has the iPod USB cable). It takes about 20 minutes to set this hack up and then only a few seconds to implement each time you would like to use it. <span id="more-18022"></span></p>
<h3>Things to Note</h3>
<ul>
<li>If you want to be able to do this hack on both Mac and Windows machines, you’re going to have to configure two separate iTunes libraries: one from a Mac and one from a Windows machine.</li>
<li>I was using an iPhone when writing this tutorial, so the iPod directions may vary slightly.</li>
<li>If you are using an iPhone or iPod touch: When you sync your device, the account last used to access the iTunes Store from the computer is synced to the mobile device. So make sure you sign out of your friend’s iTunes account before you sync your device, otherwise when you try to download the application via the app store on your phone you will be logged in as them.</li>
<li>This method does not work with DRM’ed music.</li>
<li>Using this method will let you plug your iPhone/iPod into any computer and listen to the music directly off of it. Whereas before, this was not possible.</li>
</ul>
<h3>What You’ll Need</h3>
<ul>
<li>Computer with iTunes</li>
<li>iPhone: Wi-Fi, USB cable, iTunes, phone</li>
<li>iPod: cable, iTunes, iPod</li>
<li>Software (Mac): <a href="http://tuppis.com/smultron/">Smultron</a>, <a href="http://ridiculousfish.com/hexfiend/">Hex Feind</a>, <a href="http://code.google.com/p/ipoddisk/">IpodDisk</a> (Open Source Free Software for Macs)</li>
<li>Software (Windows): <a href="http://www.physics.ohio-state.edu/%7Eprewett/hexedit/">Hex Edit</a>, <a href="http://www.podtopc.com/downloads.html">Pod to PC</a></li>
</ul>
<h3>Configure Your iPhone/iPod for Use as External Storage</h3>
<p>You are only going to have to configure your iPhone or iPod to be used an external storage once.</p>
<ul>
<li>iPhone: <a title="Air Sharing - App Store" href="http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=289943355&amp;mt=8">Download</a> &amp; Configure Air Sharing ($4.99)</li>
<li>iPod: Setup as hard drive
<ol>
<li>Connect iPod to computer and open iTunes</li>
<li>iTunes &gt; Preferences &gt; iPod Tab</li>
<li>Click checkbox “Enable disk use”</li>
<li>Close iTunes</li>
</ol>
</li>
</ul>
<h3>Manually Manage Music and Videos On iPhoneiPod</h3>
<p>We need to make it so we can simply drag songs onto our iPhone/iPod.</p>
<ol>
<li>Launch iTunes</li>
<li>Connect iPhone/iPod</li>
<li>Select the “Manually manage my iPhone/iPod” option</li>
<li>Close iTunes</li>
</ol>
<h3>Create an iTunes Index On Your iPhone/iPod</h3>
<p>If you want to be able to sync with both Mac and Windows computers you will have to make two separate iTunes index folders: one for the Mac and one for Windows boxes. So, just do this step both a Mac and Windows machine.</p>
<ol>
<li>Mount your iPhone/iPod as external storage device.</li>
<li>Point the iTunes index to your iPhone/iPod. On a Mac: while holding “option,” double click on your iTunes icon. On a Windows machine: while holding “Shift,” double click on your iTunes icon in your start menu.</li>
<li>A “Choose your library” window will pop up. Select “Create Library.”</li>
<li>Under “Where” select the location on your iPod/iPhone from the pulldown. Save as: “iTunes1″. iTunes will Launch. Close it. If you decide to do this on a Mac <em>and</em> Windows machine, make a folder called “iTunes 1″ from the Mac and a folder called “iTunes 2″ from the Windows machine.</li>
</ol>
<h3>Editing Files On iPhone/iPod</h3>
<p>You are only going to have to edit the files on your iPhone once. We need to edit those files so that whatever computer you connect your device to will think it can sync to your iPhone/iPod. I found <a href="http://www.andrewgrant.org/2008/03/30/how-to-sync-an-iphone-with-two-or-more-computers.html">this tutorial</a> over at the Shiny Things blog. Thanks Andrew!</p>
<ol>
<li>On your computer navigate to your iTunes music folder. Macs: User&gt; Music &gt; iTunes. Windows: Music &gt; iTunes.</li>
<li>Right click on “iTunes Music Library.xml” and open it with a text editor (<a href="http://tuppis.com/smultron/">Smultron</a>, or something similar, in OS X and Notepad in Windows)</li>
<li>Look for the “Library Persistent ID”</li>
<li>There will be a string of numbers and letters between the “string” tags. (In the screenshot below it is 2817B0BEDC7A2E5F). Copy this entry to another document for safe keeping.<br /><img class="aligncenter size-large wp-image-18156" title="itunes_xml" src="{{ site.JB.IMAGE_PATH }}/itunes_xml.png?w=570&amp;h=216" alt="itunes_xml" height="216" width="570" /></li>
<li>It’s time to edit the files on your iPhone/iPod. Go ahead and mount your iPhone/iPod and then navigate to the iTunes folder we created earlier.</li>
<li>Find the “iTunes Music Library.xml,” and open it with a text editor.</li>
<li>Look for the “Library Persistent ID.” First, copy whatever is between “string” tags to a text document for safe keeping. Next, Replace whatever is between the “string” tags with our key that we copied earlier. In our example we are replacing the ID on the iPhone/iPod with 2817B0BEDC7A2E5F</li>
<li>Save the file and close it.</li>
<li>Now find the file called “iTunes Music Library” and open it with the Hexeditor mentioned above in “What You’ll Need.” (On a Windows machine it is called “iTunes Music Library.itl”)</li>
<li>Select “Find and Replace” from the Edit menu. Make sure “Hex” matching is selected (not ASCII). In “Find” enter the ID from the iPhone/iPod before we replaced it (The ID we put into a text document in step 7). In Replace, enter the ID we copied from the original computer (in our example it’s 2817B0BEDC7A2E5F). Choose Replace All, there should be one match.</li>
<li>Save the file. Close the Hexeditor.</li>
<li>We are now completely done configuring the iPhone/iPod. If you want to be able to sync to both Windows and Mac machines, make sure the do the all the steps listed above on both machines.</li>
</ol>
<h3>Getting Music From Other Computers (Finally!)</h3>
<p>Getting music from computers that are not your home computer is the step that you will have to perform over and over again.</p>
<ol>
<li>Mount your iPhone (using Air Sharing) or iPod (as an external storage device)</li>
<li>Point the computer’s iTunes index to the one on your iPhone/iPod. Mac: while holding “option,” double click on your iTunes icon. Windows: while holding “Shift,” double click on your iTunes icon in your start menu.</li>
<li>A “Choose your library” window will pop up. Select “Choose Library.”</li>
<li>Navigate to the “iTunes 1″ or “iTunes 2″ (depending on if you’re on Mac or a Window’s machine) folder on your iPhone/iPod and select “Open”</li>
<li>iTunes will launch</li>
<li>The actual iTunes library will be empty, this is OK. We aren’t adding things to the iTunes library, just to the iPhone/iPod library. Your iPhone/iPod should appear in the left hand column of iTunes. Click on your iPhone’s or iPod’s music library to select it. A playlist should appear in the main iTunes screen with all the music form the iPhone/iPod.</li>
<li>Drag any music you want into your iPhone’s library. Make sure you drag into your iPhone’s/iPod’s library, not the iTunes library.<br /><img class="aligncenter size-large wp-image-18161" title="00000211" src="{{ site.JB.IMAGE_PATH }}/00000211.png?w=570&amp;h=378" alt="00000211" height="378" width="570" /></li>
<li>Since we are loading the library our iPhone/iPod is connected to, not the computer’s local iTunes library, we have to manually locate music on the computer to be able to add it to our iPhone or iPod. In OS X navigate to: User &gt; Music &gt; iTunes &gt; iTunes Music. In Windows navigate to: My Documents &gt; Music &gt; iTunes &gt; iTunes Music.</li>
<li>When you’re done getting music, safely disconnect your iPhone/iPod and close iTunes.</li>
<li>As a final step, we need to point the computer back to its original iTunes library. On a Mac: while holding “option,” double click on your iTunes icon. On a Windows machine: while holding “Shift,” double click on your iTunes icon in your start menu.</li>
<li>A “Choose your library” window will pop up. Select “Choose library.” Point to the iTunes Music folder on their computer (Inside the Music folder on both Mac and PC).</li>
</ol>
<h3>Getting the New Music Back Onto Your Main Computer</h3>
<p>iTunes won’t let you take the music off your iPhone/iPod, so we’re going to have to use third party software.</p>
<ol>
<li><a href="http://code.google.com/p/ipoddisk/">Download iPodDisk</a> (OS X Free Open Source iPod Ripping Software) or <a href="http://www.podtopc.com/downloads.html">Pod to PC</a> (Windows)</li>
<li>I made a playlist on my iPhone called “New” so I know what to download.</li>
<li>Import all songs from the “New” playlist.</li>
<li>Empty the “New” playlist so that you do not accidentally download the same songs next time you sync.</li>
</ol>
<p>And there you have it! I know it’s a lot to digest, so please let me know if you have any questions in the comments.</p>
