# odrive_gui
[ODrive motor](https://odriverobotics.com/)を動かすROSパッケージ[odrive_ros](https://github.com/yuhi-sa/odrive_ros) のRosbridgeを利用したGUI操作用のプログラム．

# 使い方
odrive_rosを起動した後．
```
#新しいターミナルを開く
roslaunch rosbridge_server rosbridge_websocket.launch
command.htmlを開く
```
# 通信形式
![rqt_graph2](https://raw.githubusercontent.com/yuhi-sa/odrive_ros/f317e816d04f490abfa8489c9c050e349847e1b2/rosgraph2.svg)

# 画面
- メイン  
![](https://github.com/yuhi-sa/odrive_gui/blob/master/img/fig1.png?raw=true)  
- 位置制御  
![](https://github.com/yuhi-sa/odrive_gui/blob/master/img/fig2.png?raw=true)  
- 速度制御  
![](https://github.com/yuhi-sa/odrive_gui/blob/master/img/fig3.png?raw=true)
