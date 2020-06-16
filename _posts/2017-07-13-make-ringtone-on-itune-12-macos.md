author: mingsterlayout: post
title: Make ringtone on iTune 12/ macOS
date: 2017-07-13 23:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- Mac
tags:
- ringtone
author: mingster
author: mingster<p><img src="/img/medium-cover.jpg" alt="medium-cover" width="200" height="300" style="margin:10px" align="right"/>mac is so easy to use if you paid.</p>
<p>Just now I want to make a ring tone for my own theme song originally from "<a href="https://yts.ag/movie/flash-gordon-1980" target="_blank" rel="noopener">Flash Gordon</a>" movie.  And learned that it's not easy at all.</p>
<p>Like Apple folk, not gonna stop there, after a couple digging, here's how to do it.</p>

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
