---
layout: post
title: 在既有的Raspberry Pi上安裝Home Assistant
date: 2018-01-13 23:19:41.000000000 +08:00
featured: true
hidden: true
rating: 4.5
published: true
status: publish
categories:
- HomeAutomation
tags: HomeAssistant, Raspberry Pi
image: img/HomeAssist.jpg
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

# 第一步 更新Pi
```
sudo apt-get update
sudo apt-get upgrade -y
```
更新後，目前Pi的版本是：

```
uname -a
Linux pi1 4.9.59-v7+ #1047 SMP Sun Oct 29 12:19:23 GMT 2017 armv7l GNU/Linux
```

# 第二步 開HomeAssistant專屬的帳號
```
sudo useradd -rm homeassistant
```
設個密碼
```
sudo passwd  homeassistant
```

# 第三步 安裝HomeAssistant所需軟體

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

## 設置homeassistant的.bashrc，登入就進入vd
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

# 第四步 安裝HomeAssistant
用homeassistant的身份登入，
```
sudo su -s /bin/bash homeassistant
```

然後安裝：

```
cd /srv/homeassistant;
pip3 install homeassistant
```
安裝需要等一下。

完成後可以手動測試：
```
hass
```
CTRL-C 可跳出。

# 第五步 將 HomeAssistant 安裝成服務
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

# 第六步 測試
- 啟動服務：
```
sudo systemctl start home-assistant@pi
```

- 停止服務：
```
sudo systemctl stop home-assistant@pi
```

- 重啟：
```
sudo systemctl restart home-assistant@pi
```

- 服務狀態：
```
sudo systemctl status home-assistant@pi -l
```

- 讀log檔
```
sudo journalctl -f -u home-assistant@pi
```

# 第七步 更新

```
'先進入到 homeassistant 身份
sudo su -s /bin/bash homeassistant
pip3 install --upgrade homeassistant
```

## update python
1. download source from [official site](https://www.python.org/downloads/)
2. Install the required build-tools (some might already be installed on your system).

	```
	sudo apt-get update -y
	sudo apt-get install build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev -y
	```
3. Install and compile the Python source

	```
	tar xf Python-3.x.x.tar.xz
	cd Python-3.x.x
	./configure; make -j 4; sudo make altinstall
	```

4. Reinstall HA

	```
	cd /srv/homeassistant
sudo rm homeassistant_venv/
	```

	update python3 alias to correct version

	```
	sudo su -s /bin/bash homeassistant

	sudo vi ~/.bash_aliases
	```

	test:
	```
	python3
	```
	check the version shown.

5. Reinstall HA (follow 第三步)

6. Redo the modules

	```
	sudo su -s /bin/bash homeassistant

	pip install hass-nabucasa==0.3
	pip install PyNaCl==1.3.0
	pip install plexwebsocket==0.0.6
	pip install pyatv==0.3.13
	```

# References
 - [Setup Home Assistant on Raspberry Pi by misperry in raspberry-pi](http://www.instructables.com/id/Setup-Home-Assistant-on-Raspberry-Pi/)
 - [Manual installation on a Raspberry Pi](https://home-assistant.io/docs/installation/raspberry-pi/)
 - [https://home-assistant.io/docs/installation/virtualenv/](https://home-assistant.io/docs/installation/virtualenv/)
 - [Autostarting with systemd](https://home-assistant.io/getting-started/autostart-systemd/)
 - 發現已有中文玩家: [Home Assistant 中文文档](https://home-assistant.cc)
 - 小米: [Home Assistant + 树莓派：强大的智能家居系统 · 小米篇](https://sspai.com/post/40113)
 - [利用 HomeAssistant +树莓派+ Amazon Echo 的智能家居实践](http://kittenyang.com/homeassistant_practice_03/)
