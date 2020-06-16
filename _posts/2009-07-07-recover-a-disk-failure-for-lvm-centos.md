---
layout: post
title: Recover a disk failure for LVM (CentOS)
date: 2009-07-07 12:57:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- IT
- Tech Note
tags: []
meta:
  blogger_permalink: "/2009/06/recover-disk-failure-from-lvm-volumes.html"
  blogger_author: mingsterhttp://www.blogger.com/profile/10981076410240209932noreply@blogger.com
  blogger_blog: mingstert.blogspot.com
  _edit_last: '40718'
  _wpas_skip_yup: '1'
  _wpas_skip_twitter: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1447707064;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:179;}i:1;a:1:{s:2:"id";i:98;}i:2;a:1:{s:2:"id";i:563;}}}}
  original_post_id: '175'
  _wp_old_slug: '175'
author: mingster
---
<p>I've put together old hardware pieces at home for a download &amp; file sharing box. It got 4 old disks (30G, 250G, 500G, 80G) together.  Knowing that disks will out of its life sooner or later, I rsync important stuff to the mac next to it. Couple weeks ago, shit finally happen.</p>
<p>The broken disk is the 30G, so most of stuff are still in the other disks. To recover, I put into a new disk, re-install CentOS, so the box is bootable again. Now I need to re-activate and mount the old disks.</p>
<p>Re-install CentOS<br />1.Put in the new disk, go to Bios and make sure CD-ROM is having first boot priority, and the new disk is the boot disk in Hard Disk boot priority setting.<br />2.Put in the CentOS DVD, boot from it. In the install process, make sure you don’t re-partition the old disks.<br />3.If you are not sure what to do, you can un-plug the power cores of all old disks, install on the new disk first. Once the installation is finished, plug back the power of old disks, boot from DVD again, and reset the boot loader.<br />4.Now you’ve got a bootable box with all the disks in place.</p>
<p>RHEL systems like Red Hat, CentOS or Fedora, partition the disks automatically at install time. By default, it sets up the partitions using LVM for the root device.<br />By default, the OS set up a volume group called VolGroup00, with two logical volumes, LogVol00 and LogVol01, the first for the root directory and the second for swap.</p>
<p>Since the new disk is big enough, I set up the new disk (not using the volume). As you can see in the partition layout of physical disks below (/dev/sda is the new disk):<br /><code>[root@xxx]# sfdisk -l</p>
<p>Disk /dev/hda: 19457 cylinders, 255 heads, 63 sectors/track<br />Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0</p>
<p>Device Boot Start     End   #cyls    #blocks   Id  System<br />/dev/hda1   *      0+  19456   19457- 156288321   8e  Linux LVM<br />/dev/hda2          0       -       0          0    0  Empty<br />/dev/hda3          0       -       0          0    0  Empty<br />/dev/hda4          0       -       0          0    0  Empty</p>
<p>Disk /dev/hdc: 24792 cylinders, 255 heads, 63 sectors/track<br />Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0</p>
<p>Device Boot Start     End   #cyls    #blocks   Id  System<br />/dev/hdc1   *      0+  24791   24792- 199141708+  8e  Linux LVM<br />/dev/hdc2          0       -       0          0    0  Empty<br />/dev/hdc3          0       -       0          0    0  Empty<br />/dev/hdc4          0       -       0          0    0  Empty</p>
<p>Disk /dev/sda: 38913 cylinders, 255 heads, 63 sectors/track<br />Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0</p>
<p>Device Boot Start     End   #cyls    #blocks   Id  System<br />/dev/sda1   *      0+     12      13-    104391   83  Linux<br />/dev/sda2        267   38912   38646  310423995   83  Linux<br />/dev/sda3         13     266     254    2040255   82  Linux swap / Solaris<br />/dev/sda4          0       -       0          0    0  Empty</p>
<p>Disk /dev/sdb: 60801 cylinders, 255 heads, 63 sectors/track<br />Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0</p>
<p>Device Boot Start     End   #cyls    #blocks   Id  System<br />/dev/sdb1   *      0+  60800   60801- 488384001   8e  Linux LVM<br />/dev/sdb2          0       -       0          0    0  Empty<br />/dev/sdb3          0       -       0          0    0  Empty<br />/dev/sdb4          0       -       0          0    0  Empty</code></p>
<p><b>To re-activate and re-mount</b><br />vgchange is the utility to update/change your volume group attribute. Since one of the disk in previous volume is missing, I need to vgchange –ay –partial to activate the volume.</p>
<p><code>[root@xxx]# vgchange –ay –partial<br />Couldn't find device with uuid 'AiegxE-NfQy-AA5E-OUcn-bvpY-UG3o-5oT1gY'.<br />/dev/mapper/VolGroup00-LogVol00-missing_3_0: read failed after 0 of 4096 at 0: Input/output error<br />/dev/mapper/VolGroup00-LogVol01-missing_0_0: read failed after 0 of 4096 at 0: Input/output error<br />/dev/VolGroup00/LogVol01: read failed after 0 of 4096 at 0: Input/output error<br />Couldn't find device with uuid 'AiegxE-NfQy-AA5E-OUcn-bvpY-UG3o-5oT1gY'.<br />2 logical volume(s) in volume group "VolGroup00" now active</code></p>
<p>Well, a lot of error due to the missing disk, but the volume is active now. You can verify by:</p>
<p><code>[root@xxx]# lvscan<br />/dev/VolGroup00/LogVol00: read failed after 0 of 4096 at 892413607936: Input/output error<br />/dev/VolGroup00/LogVol00: read failed after 0 of 4096 at 892413665280: Input/output error<br />/dev/mapper/VolGroup00-LogVol01-missing_0_0: read failed after 0 of 4096 at 2080309248: Input/output error<br />/dev/mapper/VolGroup00-LogVol01-missing_0_0: read failed after 0 of 4096 at 4096: Input/output error<br />/dev/mapper/VolGroup00-LogVol01-missing_0_0: read failed after 0 of 4096 at 0: Input/output error<br />/dev/VolGroup00/LogVol01: read failed after 0 of 4096 at 2080309248: Input/output error<br />/dev/VolGroup00/LogVol01: read failed after 0 of 4096 at 2080366592: Input/output error<br />Couldn't find device with uuid 'AiegxE-NfQy-AA5E-OUcn-bvpY-UG3o-5oT1gY'.<br />/dev/mapper/VolGroup00-LogVol00-missing_3_0: read failed after 0 of 4096 at 0: Input/output error<br />/dev/VolGroup00/LogVol01: read failed after 0 of 4096 at 0: Input/output error<br />Couldn't find device with uuid 'AiegxE-NfQy-AA5E-OUcn-bvpY-UG3o-5oT1gY'.<br />/dev/mapper/VolGroup00-LogVol00-missing_3_0: read failed after 0 of 4096 at 0: Input/output error<br />/dev/VolGroup00/LogVol01: read failed after 0 of 4096 at 0: Input/output error<br />Couldn't find device with uuid 'AiegxE-NfQy-AA5E-OUcn-bvpY-UG3o-5oT1gY'.<br />ACTIVE            '/dev/VolGroup00/LogVol00' [831.12 GB] inherit<br />ACTIVE            '/dev/VolGroup00/LogVol01' [1.94 GB] inherit</code></p>
<p>Now you can mount the active volume by:<br /><code>[root@xxx]# mount /dev/VolGroup00/LogVol00 /mnt</code></p>
<p>The old volume is now accessible at /mnt<br /><code>[root@xxx]# ls –al /mnt</code></p>
<p><b>What Next</b><br />I copy the stuff I want to recover. What to do with the old drives? I need to think about...Having a old box on all time is actually costly (in term of electric bill). But having a box on is handy in many occurrences..</p>
<p>Ref:<br /><a href="http://www.linuxjournal.com/article/8874" target="_blank">http://www.linuxjournal.com/article/8874</a><br /><a href="http://fedoraforum.org/forum/archive/index.php/t-64964.html" target="_blank">http://fedoraforum.org/forum/archive/index.php/t-64964.html</a></p>
