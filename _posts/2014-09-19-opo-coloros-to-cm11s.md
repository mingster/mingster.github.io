---
layout: post
title: 一加手機 大陸版改國際版 (ColorOS to CyanogenMod 11s)
date: 2014-09-19 03:36:42.000000000 +08:00
type: post
published: true
status: publish
categories:
- DIY
tags:
- Android
- 一加手機
meta:
  _edit_last: '40718'
  fb_author_post_id: '100001164164230_718087644906701'
  _srslide_disable_on_post: '0'
  _srslide_title: ''
  _srslide_tags: ''
  _srslide_article_icon: ''
  _jetpack_related_posts_cache: a:0:{}
  interface_sidebarlayout: default
  original_post_id: '945'
  _wp_old_slug: '945'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>一加手機的國際版很難買到，因此買大陸版的(型號A001，預設是ColorOS 1.2)回來再改。其實露天的賣家有提供免費的改機服務，但我就想自己玩玩。</p>
<p>爬了中外各大網站，大家都說很簡單，<a href="https://forums.oneplus.net/threads/oneplus-cm11s-for.40687/" target="_blank">什麼免PC</a>，直接用手機去<a href="https://cyngn.com/products/oneplusone/" target="_blank">CM</a>下載，按住volume下鍵 + 電源鍵，直接用Recovery更新，我的就不work。最後還是用開發者的方法，使用Android SDK，直接flash到CM11s。</p>
<h1>準備</h1>
<ul>
<li>一台PC，mac或windows都可 (以下指令語法都是mac的)。</li>
<li>若沒裝過，下載並安裝<a href="http://developer.android.com/sdk/index.html" target="_blank">Android SDK</a> (SDK Tools only)</li>
<li>到<a href="https://cyngn.com/products/oneplusone/" target="_blank">Cyanogen</a>將最新的firmware下載回來。我下的版本是CyanogenMod 11S (4.4), cm-11.0-XNPH33R-bacon-signed-fastboot.zip, 491.7MB。</li>
<li>一加手機，用USB線與電腦連結。</li>
</ul>
<h1>步驟</h1>
<ol>
<li>手機上，打開開發者選項，allow USB debugging，並與電腦透過USB線連結。</li>
<li>電腦上，將下載回的CM11S zip檔解壓縮到Android SDK下的platform-tools目錄。</li>
<li>打開Terminal或Command Prompt, 切換目錄到Android SDK中的platform-tools</li>
<li>首先我們需將手機解鎖：
<ol>
<li>重開機到boot loader
<pre><code>./adb reboot bootloader</code></pre>
</li>
<li>下解鎖指令：
<pre><code>./fastboot oem unlock</code></pre>
<p>此時會看到以下，這樣就成功解鎖了。</p>
<pre>...
OKAY [  0.002s]
finished. total time: 0.002s
</pre>
</li>
<li>重啟手機：
<pre><code>./fastboot reboot</code></pre>
</li>
<li>手機重開後，再確認一下USB debugging都開着 (網路資料說解鎖後整個都會重設，但我的沒有)。</li>
</ol>
</li>
<li>Flash CM11s
<ol>
<li>一樣，再進到boot loader:
<pre><code>./adb reboot bootloader</code></pre>
</li>
<li>執行以下flash，一個個重灌
<pre><code>
./fastboot flash boot boot.img
./fastboot flash system system.img
./fastboot flash recovery recovery.img
./fastboot flash cache cache.img
./fastboot flash modem NON-HLOS.bin
./fastboot flash sbl1 sbl1.mbn
./fastboot flash dbi sdi.mbn
./fastboot flash about emmc_appsboot.mbn
./fastboot flash rpm rpm.mbn
./fastboot flash tz tz.mbn
./fastboot flash LOGO logo.bin
./fastboot flash radio flash-radio.sh
./fastboot flash userdata userdata_64G.img
</code></pre>
<p>userdate要注意，若妳的手機是16G,就灌userdata.img；64G就灌userdata_64G.img</p>
<p>其中system.img最久，約花了65秒。其他的檔一瞬間就灌好了。</li>
<li>搞定，重啟手機：
<pre><code>./fastboot reboot</code></pre>
</li>
</ol>
</li>
<li>接下來，一切順利的話，妳就到CM11S的初始開機畫面了。這個版本的Google app都是舊了，全部可透過Google Play更新。</li>
</ol>
<h1>參考資料</h1>
<ol>
<li><a href="http://wiki.cyanogenmod.org/w/Install_CM_for_bacon" target="_blank">How to Install CyanogenMod on the OnePlus One ("bacon")</a></li>
<li><a href="http://forum.xda-developers.com/oneplus-one/orig-development/discussion-cyanogenmod-11s-t2840305" target="_blank">xda developers</a></li>
<li><a href="http://www.droidviews.com/root-one-plus-one-and-install-twrp-recovery-on-it/" target="_blank">Root OnePlus One and Install TWRP Recovery</a></li>
<li><a href="http://www.gizmochina.com/2014/07/03/installing-cyanogenmod-on-your-oneplus-one-step-by-step/" target="_blank">Installing CyanogenMod on your OnePlus One: stop by step</a></li>
</ol>
