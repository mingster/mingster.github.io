---
layout: post
title: What is a .BIN? What is a .CUE? What is an .ISO
date: 2005-02-16 15:43:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- Fun in life
- IT
- Tech Note
tags: []
meta:
  blogger_blog: mingstert.blogspot.com
  blogger_permalink: "/2005/02/what-is-bin-what-is-cue-what-is-iso.html"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1456178795;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:563;}i:1;a:1:{s:2:"id";i:249;}i:2;a:1:{s:2:"id";i:225;}}}}
  original_post_id: '353'
  _wp_old_slug: '353'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>The .BIN &amp; .CUE CD image format was made popular by the CDRWin software. Afterwards many programs have started supporting or partially supporting it, including: Nero, BlindWrite, CloneCD, FireBurner. The .CUE file contains the track layout information, while the .BIN file holds the actual data.</p>
<p>ISO is also a CD image format, but is sometimes used for 'ISO9660 format' (standard, recognized by all applications) and sometimes for unique Easy CD ISO format.</p>
<p>There are varity ofsoftware that can handle .BIN, .CUE,and .ISO files. Each extension can be burnedinto aCD-R or a CD-RW. Below listed some of the popular software available in the market today:</p>
<ul>
<li><strong><a href="http://cd-rw.org/software/cdr_software/cdr_tools/alcohol120.cfm"><strong>Alcohol 120%</strong></a></strong> - My favourite, excellent software, easy and yet very advanced (burns ISO, BIN/CUE, CCD, CDI, BWT files!)</li>
<li><strong><a href="http://www.cd-rw.org/software/cdr_software/cdr_applications/blindwrite_suite.cfm"><strong>BlindWrite</strong></a></strong> - easy to use</li>
<li><strong><a href="http://www.cd-rw.org/software/cdr_software/cdr_applications/fireburner.cfm"><strong>FireBurner</strong></a></strong> - also very good, a single .EXE file!</li>
<li><strong><a href="http://www.afterdawn.com/software/cdr_software/cdr_applications/burnatonce.cfm"><strong>BurnAtOnce</strong></a></strong> - A handy and FREE tool for burning .bin/.cue/.iso. Easy to use.</li>
<li><strong><a href="http://www.cd-rw.org/software/cdr_software/cdr_applications/nero.cfm"><strong>Nero</strong></a></strong> - many of you have this, but it can't handle all image files.</li>
<li><strong><a href="http://www.cd-rw.org/software/cdr_software/cdr_applications/cdrwin.cfm"><strong>CDRWin</strong></a></strong> - This is the original BIN/CUE software.</li>
</ul>
<p>In case you don't have CD/DVD burner, or in case you just want to read the content without any CD/DVD media. You can "mount" the image files as virtual CD-ROM drives using:</p>
<ul>
<li><a href="http://cd-rw.org/software/cdr_software/cdr_tools/alcohol120.cfm"><strong>Alcohol</strong></a></li>
<li><a href="http://www.cd-rw.org/software/cdr_software/cdr_tools/daemon_tools.cfm"><strong>Daemon Tools</strong></a></li>
</ul>
<p>There are also several softwares you can use to exploit &amp; manipulate BIN/CUE files in various ways:</p>
<ul>
<li><a href="http://www.geocities.com/cdmage"><strong>CDMage</strong></a></li>
<li><a href="http://www.smart-projects.net/isobuster"><strong>IsoBuster</strong></a></li>
</ul>
<p><b>FAQs</b></p>
<p><strong>1. I have a .BIN file but no .CUE?</strong><br />You will need to hand made the .CUE file. .CUE can be made with just Notepad. A typical PC CD-ROM .CUE looks like this:</p></p>
<blockquote><p>FILE "image-name.BIN" BINARY<br />TRACK 01 MODE1/2352<br />INDEX 01 00:00:00 </p></blockquote>
<p>A typical Playstation(One or Two) .CUE file looks like this:</p></p>
<blockquote><p>FILE "image-name.BIN" BINARY<br />TRACK 1 MODE2/2352<br />INDEX 1 00:00:00</p></blockquote>
<p><em>"image-name.BIN" being the name of the image file (IWDII.BIN, CIV3.BIN and so on...)</em><br /><em>Notice the difference of the track mode - PC-ROMs being Mode 1, Playstations CDs Mode 2 and (Super)Video CDs are also MODE2/2352.</em><br /><strong></strong></p>
<p><strong>2. How do I make .BIN &amp; .CUE files?</strong><br />CDRWin or the BIN/CUE format is not ideal for distributing. BlindWrite suite and CloneCD perform a lot better in this purpose and can also handle various copy protections. Both of these softwares can also create .CUE files for increased compatibility.</p>
<p><strong>3. I have a .BIN &amp; .CUE, but my CD writing software can't locate the .BIN file?</strong><br />Edit the .CUE file with Notepad (or similar) and verify that the FILE "C:\path\image.bin" matches the location of your image file.</p>
<p><strong>4. My image file is IMAGE.BIN.EXE and I can't rename it!</strong><br />Read here - <a href="http://forums.afterdawn.com/thread_view.cfm/23982" target="_blank">http://forums.afterdawn.com/thread_view.cfm/23982</a></p>
<p><strong>5. Sector sizes of CD image files (by Aldaco12)?</strong><br />When you talk about images must think on SECTORS not on DATA SIZE. The rules are:</p>
<p><b>Facts:</b>
<ol>
<li>A standard 74 min CD is made by 333,000 sectors.</li>
<li>Each sector is 2352 bytes big, and contains 2048 bytes of PC (MODE1)Data, 2336 bytes of PSX/VCD (MODE2) Data or 2352 bytes of AUDIO.</li>
<li>The difference between secor size and data content are the Headers info and the Error Correction Codes, that are big for Data (high precision required), small for VCD (standard for video) and none for audio.</li>
<li>If you extract data in RAW format (standard for creating images) you always extract 2352 bytes per sector, not 2048/2336/2352 bytes depending on data type (basically, you extract the whole sector).</li>
<li>This fact has two main consequences:</li>
<li>You can record data at very high speed (40x) without losing information, but if you try to do the same with PSX or Audio you get unredable CD (for PSX) od audio CD with lots of clicks because there are not error correction codes (and error are more likely to occur if you record at high speed.</li>
<li>On a 74 min CD you can fit very large RAW images,up to 333,000 x 2352 = 783,216,000 bytes (747 Mb). This should be the upper limit for a RAW image created from a 74 min CD. Remember that if you store standard data (backup files), you can burn only 333,000 x 2048 = 681,984,000 bytes (the well known 650 MB limit).
<p>Note that an image size is ALWAYS a multple of 2352 bytes (you extract SECTORS), if extracted in RAW mode.</li>
</ol>
