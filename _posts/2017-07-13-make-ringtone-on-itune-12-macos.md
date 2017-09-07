---
layout: post
title: Make ringtone on iTune 12/ macOS
date: 2017-07-13 23:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- Mac
tags:
- ringtone
meta:
  _edit_last: '40718'
  _wpas_done_17592472: '1'
  _publicize_done_17833415: '1'
  publicize_twitter_user: mingster
  _publicize_done_external: a:1:{s:7:"twitter";a:1:{i:1772;s:54:"https://twitter.com/mingster/status/885519123022843904";}}
  publicize_path_id: 59678f9443fe423b8f09a207
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '7058707279'
  _publicize_done_1843: '1'
  _wpas_done_1772: '1'
  _wpas_skip_17446180: '1'
  _wpas_skip_1772: '1'
  _wpas_skip_17592472: '1'
  _publicize_done_17685094: '1'
  _wpas_done_17446180: '1'
  publicize_google_plus_url: https://plus.google.com/+MingTsaigplus/posts/SYPLGs9oHJG
  geo_public: '0'
  _wpcom_is_markdown: '1'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p><img src="{{ site.JB.IMAGE_PATH }}/medium-cover.jpg" alt="medium-cover" width="200" height="300" />mac is so easy to use, now-a-day only if you paid.</p>
<p>Just now I want to make a ring tone for my own theme song originally from "<a href="https://yts.ag/movie/flash-gordon-1980" target="_blank" rel="noopener">Flash Gordon</a>" movie.  And learned that it's not easy at all.</p>
<p>Like Apple folk, not gonna stop there, after a couple digging, here's how to do it.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Needed Software/ Environment</strong></p>
<ul>
<li>environment: macOS Sierra/ iTune 12.6</li>
<li>Get ffmpeg binary if you don't have it yet.
<pre><code>brew install ffmpeg</code></pre>
</li>
</ul>
<p><strong>Steps</strong></p>
<ol>
<li><a href="https://computers.tutsplus.com/tutorials/quick-tip-create-ringtones-in-itunes-for-free--mac-46032" target="_blank" rel="noopener">Cut the tune use iTune</a>. Make it 30 second or less.</li>
<li>Phone is in iOS 11 and supported ring tone is in m4r extension of aac codec. Here's ffmpeg command to convert mp3 to m4r:
<pre><code>ffmpeg -i the_song.mp3 -ac 1 -ab 128000 -f mp4 -c:a aac -y the_song.m4r</code></pre>
</li>
<li>To add the newly generated m4r tone, simply double-click it and it should in the Tones library in iTune.</li>
<li>Connect phone to the mac and sync it.</li>
<li>On the phone, the new tone is listed. Pick it and set it.</li>
</ol>
<p>Finally, don't forget to un-set the option in iTune.</p>
