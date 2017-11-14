---
layout: post
title: 蕃茄(Tomato) firmware + Entware/SSR
date: 2017-11-12 23:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- IT
tags: Tomato, Entware, SSR

meta:
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---

這篇是將Tomato firmware 加裝SSR的筆記。

- 選用 router: Netgear R7000
- firmware: 目前最新版是[3.4-140](https://advancedtomato.com/downloads/router/r7000)。下載chk檔。
- 準備一支將永遠插在AP的USB碟。

## 第一步 將router flash 到 Tomato

## 第二步 USB碟/Tomato設定

- 到Tomato的Web UI，USB與NAS -> USB 設定(USB Support)，打開相關的設定。

  自動掛載後執行 (copy & paste以下)
  ``` bash
  #!/bin/sh
  /opt/etc/init.d/rc.unslung start
  ```

  卸載移除前執行	 (copy & paste以下)
  ``` bash
  #!/bin/sh
  /opt/etc/init.d/rc.unslung stop
  sleep 15
  umount /opt
  ```

- auto-mount：到『路由器管理』-> 『開機初始化』，	 (copy & paste以下)
``` bash
#!/bin/sh
echo "LABEL=ENTWARE /opt ext3 rw,noatime 1 1" >> /etc/fstab
```

## 第三步 準備USB碟

基本上，就是要將usb碟格式化為ext3，然後 mount/ auto mount到 /opt。

1. 格式化
  ``` bash
  $ fdisk -l '檢查USB碟的代號，以下都將用 /dev/sda 代表
  ```

  ``` bash
  $ fdisk /dev/sda
  d '刪除所有partition
  n '新增
  w '寫入
  ```
  格式化成ext3，Label設為 ENTWARE
  ``` bash
  $ mkfs.ext3 -L ENTWARE /dev/sda1
  ```
2. 掛上USB碟
  ``` bash
  echo "LABEL=ENTWARE /opt ext3 rw,noatime 1 1" >> /etc/fstab
  mount /opt
  ```
  ** 注意usb的disk label，跟剛剛格式化的要一樣。
  沒出現錯誤就是搞定了，可以<code>df -h</code>來確認。

  最好也<code>vi /etc/fstab</code>來看看。

  未來若重新開啟router，因為有設好『開機初始化』，usb會自動掛在/opt下。

## 第三步 安裝Entware-ng
看好你的CPU是哪一種，是ARM就：
``` bash
wget -O - http://pkg.entware.net/binaries/armv7/installer/entware_install.sh | sh
```
是MIPS就：
``` bash
wget -O - http://pkg.entware.net/binaries/mipsel/installer/installer.sh | sh
```
Asus Asus RT-N6xx 跟 R7000都是MIPS。

這樣就裝好了。
可以確認一下：
``` bash
#!/bin/sh
opkg list
```
可以看到一大堆base packages列出來。

okpg相關指令可以看[這裡](http://wiki.openwrt.org/doc/techref/opkg)。

## 第四步 安裝SSR
目前最新版的 shadowsocks-libev 是3.1.0-1。
可以去下載xc2[編譯好的版本](https://github.com/xc2/shadowsocks-libev-tomato/releases)。
解壓，拷到/opt/bin, /opt/include等相應目錄即可。

### 設置
``` bash
vi /opt/etc/shadowsocks.json
```
``` bash
{
    "server":"my_server_ip",
    "server_port":8388,
    "local_port":1080,
    "password":"barfoo!",
    "timeout":600,
    "method":"chacha20-ietf-poly1305"
}
```
Run it:

1. 首先要打開所設置的port -> 通訊埠轉送設定(Port Forwarding)
2.
``` bash
ss-server -c /opt/etc/shadowsocks.json
```

## Clients
- iOS: [OpenWingy](https://itunes.apple.com/us/app/openwingy/id1294672758?mt=8)
- macOS: [Mac OS使用SSR教程](https://www.elink.hk/knowledgebase/90/Mac-OSSSR.html)
- Windows, etc: [ShadowsocksR Clients and Server](https://dcamero.azurewebsites.net/shadowsocksr.html)



## (OPTIONAL) 自己編譯SSR
首先先裝一些基本工具
``` bash
opkg install python git git-http
opkg install libsodium mbedTLS udns
opkg install shadowsocks-libev
```

## References
 - [Advanced Tomato download](https://advancedtomato.com/downloads/router/r7000)
 - [Entware-ng](https://github.com/Entware-ng/Entware-ng/wiki/Install-on-the-TomatoUSB)
 - [shadowsocks libev 3.0 cross compiling for tomato shibby](https://ilmvfx.wordpress.com/2017/02/04/shadowsocks-libev-3-0-cross-compiling-for-tomato-shibby/)
 - [xc2/shadowsocks-libev-tomato](https://github.com/xc2/shadowsocks-libev-tomato/releases)
 - [oglopss/tomato-shadowsocks](https://github.com/oglopss/tomato-shadowsocks)
 - [shadowsocks Quick Guide](https://shadowsocks.org/en/config/quick-guide.html)
