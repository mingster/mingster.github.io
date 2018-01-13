---
layout: post
title: 在既有的Raspberry Pi上安裝Home Assistant
date: 2018-01-13 23:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- HomeAutomation
tags: HomeAssistant, Raspberry Pi

meta:
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---

當已經有Pi在運行時，HomeAssistant推薦的[整個SD卡安裝](https://home-assistant.io/getting-started/)就不太合理。
這篇是將 Raspberry Pi 加裝 HomeAssistant 的筆記。

環境：
- Raspberry Pi up and running

## 第一步 更新Pi
```
sudo apt-get update
sudo apt-get upgrade -y
```
更新後，目前Pi的版本是：

```
uname -a
Linux pi1 4.9.59-v7+ #1047 SMP Sun Oct 29 12:19:23 GMT 2017 armv7l GNU/Linux
```

## 第二步 開HomeAssistant專屬的帳號
```
sudo useradd -rm homeassistant
```
設個密碼
```
sudo passwd  homeassistant
```

## 第三步 安裝HomeAssistant所需軟體
```
sudo apt-get install python3 python3-venv python3-pip
```

HomeAssistant 是用python的virtual environment:
```
cd /srv
sudo mkdir homeassistant
sudo chown homeassistant:homeassistant homeassistant

sudo su -s /bin/bash homeassistant
cd /srv/homeassistant
python3 -m venv homeassistant_venv
source /srv/homeassistant/homeassistant_venv/bin/activate
exit
```

### 設置homeassistant的.bashrc，登入就進入vd
```
vi /home/homeassistant/.bashrc
```
加進這一行：
```
source /srv/homeassistant/homeassistant_venv/bin/activate
```
試試看：

```
sudo su -s /bin/bash homeassistant
```
應該會看到prompt變成：
```
(homeassistant_venv) homeassistant@raspberrypi:/srv
```

## 第四步 安裝HomeAssistant
用homeassistant的身份登入，
```
sudo su -s /bin/bash homeassistant
```

然後安裝：
```
cd /srv/homeassistant
pip3 install homeassistant
```
安裝需要等一下。

完成後可以手動測試：
```
hass
```
CTRL-C 可跳出。

## 第五步 將 HomeAssistant 安裝成服務
[原文](https://home-assistant.io/docs/autostart/systemd/)

將 HomeAssistant 安裝成服務步驟如下：
1. 從pi user su 為 root user
```
sudo su root
```

2. 新增服務 script
```
cd /etc/systemd/system/
vi home-assistant@pi.service
```

3. 內容如下：

  ```
  [Unit]
  Description=Home Assistant
  After=network.target

  [Service]
  Type=simple User=homeassistant

  # make sure the virtualenv python binary is used
  Environment=PATH="$VIRTUAL_ENV/bin:$PATH"

  ExecStart=/srv/homeassistant/homeassistant_venv/bin/hass -c "/home/homeassistant/.homeassistant"

  [Install]
  WantedBy=multi-user.target
  ```

4. reload 新服務

  ```
  systemctl --system daemon-reload
  systemctl enable home-assistant@pi
  ```

5. 退出root身份
```
exit
```

## 第六步 測試
- 啟動服務：
```
sudo systemctl start home-assistant@pi
```

- 停止服務：
```
sudo systemctl start home-assistant@pi
```

- 服務狀態：
```
sudo systemctl status home-assistant@pi -l
```

- 讀log檔
```
$ sudo journalctl -f -u home-assistant@pi
```


## 第七步
開始玩 HomeAssistant!

http://192.168.xx.xx:8123/


## References
 - [Setup Home Assistant on Raspberry Pi by misperry in raspberry-pi](http://www.instructables.com/id/Setup-Home-Assistant-on-Raspberry-Pi/)
 - [Manual installation on a Raspberry Pi](https://home-assistant.io/docs/installation/raspberry-pi/)
 - [Autostarting with systemd](https://home-assistant.io/getting-started/autostart-systemd/)
