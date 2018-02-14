---
layout: post
title: 安裝 HomeBridge On Raspberry Pi 3b
date: 2018-01-13 23:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- HomeAutomation
tags: HomeBridge, Raspberry Pi

meta:
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---

我們需要 HomeBridge 來搭入Apple HomeKit。這樣才能用Apple設備來與其他Home Automation溝通。

HomeBridge是基於nodejs的應用，在Pi上，nodejs的版本很關鍵。不work 大部份就是這裡出錯。

[少數派已經有文](https://sspai.com/post/38849)解釋了。以下是操作的筆記。

***** 很重要 -- 本文只適用於 Pi 3B 的硬體。*****
要知道你的Pi是哪個版本，可以：
```
cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'
```
a02082, a22082, 或 a32082 才是 Pi 3.

[出處](https://elinux.org/RPi_HardwareHistory)

硬體確認了，就可以進行以下HomeBridge的安裝，身份用pi就可以了。

## 第一步 清理nodejs
裝了幾次HomeBridge都出錯，結論就是nodejs版本不正確，所以先清空nodejs可以保證接下來的安裝。

若有其他node.js的東西在run，就不能這樣做了。
```
sudo apt-get remove nodejs
rm -rf /usr/lib/node_modules/home*
```

## 第二步 安裝 HomeBridge

1. 安裝相關軟體：
```
sudo apt-get install git make
sudo apt-get install g++
```

2. 安裝node repository (版本很重要，不能亂換)：
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. 安裝Avahi包：
```
sudo apt-get install libavahi-compat-libdnssd-dev
```

4. 安裝 homebridge及相關 (--unsafe-perm 很重要，不能拿掉)：
```
sudo npm install -g --unsafe-perm homebridge hap-nodejs node-gyp
```

5. 安裝 bignum

```
cd /usr/lib/node_modules/homebridge/
sudo npm install --unsafe-perm bignum
```
安裝會有錯誤warning，可以不理他。

6. 重整 mdns
```
cd /usr/lib/node_modules/hap-nodejs/node_modules/mdns
sudo node-gyp BUILDTYPE=Release rebuild
```

## 第三步 測試
測試前，若有舊的config，先關掉：
```
cd ~/.homebridge
mv config.json config.json.bak
```

然後就可以試試了：
```
homebridge -D
```

看看結果，Ctrl + C 來退出。

## 第四步 安裝homebridge-homeassistant

安裝『homebridge-homeassistant』插件，就可以把HB跟HA串起來，來實現平台聯動：
```
sudo npm install -g homebridge-homeassistant
```

要更新，可以：
```
sudo npm upgrade -g homebridge-homeassistant
```

## 第五步 將 HomeBridge 安裝成服務

[Setup Homebridge to Start on Bootup](https://timleland.com/setup-homebridge-to-start-on-bootup/)


## 第六步 測試
```
cd ~/
sudo systemctl daemon-reload
```

打開：

```
sudo systemctl enable homebridge
```

啟動：

```
sudo systemctl start homebridge
```

狀態：

```
sudo systemctl status homebridge
```

都裝好了，就可以開始[將設備接入](https://sspai.com/post/40075)。

## References
- [HomeBridge on Raspberry-Pi](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi)
- [homebridge-mi-aqara](https://github.com/YinHangCode/homebridge-mi-aqara)
- [https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi)
- [Setup Homebridge to Start on Bootup](https://timleland.com/setup-homebridge-to-start-on-bootup/)
- [入门智能家居，从米家到HomeKit （一）](https://sspai.com/post/39851)
- [入门智能家居，从米家到HomeKit （一）](https://sspai.com/post/39851)
- [入门智能家居，从 IFTTT 到 HomeKit 自动化（二）](https://sspai.com/post/39881)
