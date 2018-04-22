---
layout: post
title: Mosquitto on pi cheatsheet / Mosquitto的安裝
date: 2018-04-17 18:19:41.000000000 +08:00
type: post
published: true
status: publish
categories:
- HomeAutomation
tags: Smart Home
meta:
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
---
# 第一步 更新Pi
	```
	sudo apt-get update
	sudo apt-get upgrade -y
	```

# 第二步 安裝 mosquitto

1. 安裝：
  
  ```
  sudo apt-get install mosquitto mosquitto-clients
  ```
  
2. 移除舊init

  ```
  sudo systemctl stop mosquitto
  sudo update-rc.d mosquitto remove
  sudo rm /etc/init.d/mosquitto
  ```

3. 安裝systemd
  
  ``` 
  sudo vi /etc/systemd/system/mosquitto.service 
  ```

  貼進以下服務敘述：
  
  ```
  [Unit]
  Description=MQTT message broker
  After=network.target
  Requires=network.target

  [Service]
  Type=simple
  ExecStart=/usr/sbin/mosquitto -c /etc/mosquitto/mosquitto.conf
  Restart=always

  [Install]
  WantedBy=multi-user.target
  ```

4. 服務設定
	
	```
	sudo systemctl daemon-reload
	sudo systemctl enable mosquitto
	```

5. 啟動服務
	
	```
	sudo systemctl start mosquitto.service
	```

6. mosquitto帳密
	
	```
	sudo mosquitto_passwd -c /etc/mosquitto/accesslist.txt pi 
	```
	這會設置pi 這個使用者
	
7. mosquitto設定檔

	新增這個新設定檔：
	
	```
	sudo vi /etc/mosquitto/conf.d/mosquitto.conf
	```
	
	然後將[這些內容](https://hobbytronics.com.pk/Files/Config/mosquitto_configuration.txt)貼進去。

8. 重啟服務
	
	```
	sudo systemctl stop mosquitto
	sudo systemctl start mosquitto
	```

# 第三步 測試
打開2個terminal，一個將是publisher; 另一個是subscriber。

subscriber方，來接收這個topic:

```
mosquitto_sub -h localhost -t "sensor/temperature"
```

publisher方，發佈topic:

```
mosquitto_pub -h localhost -t "sensor/temperature" -m 22.5
```


# 第四步 Home Assistant
與HA聯接，只要新增以下幾行到 configuration.yaml

```
mqtt:
  broker: core-mosquitto
  username: mqtt_username
  password: mqtt_password
```

# References
- [Getting start with MQTT Mosquitto Broker on Raspberry Pi, Windows, MacOS and Linux](https://diyprojects.io/mqtt-mosquitto-communicating-connected-objects-iot/#.WtxWQC-B2ls)
- [Installing secure Mosquitto broker on Raspberry Pi with Raspbian Jessie or Stretch along with systemd start up](https://hobbytronics.pk/installing-mosquitto-broker-on-raspberry-pi/)
- [HA - Mosquitto MQTT broker](https://www.home-assistant.io/addons/mosquitto/)
