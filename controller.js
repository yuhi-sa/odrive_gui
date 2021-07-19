//ROSとの通信
// ------------------------

// rosbridgeと接続
var ros = new ROSLIB.Ros({
    //デフォルトは9090
    url : 'ws://localhost:1234'
});
// 接続時のコールバック
ros.on('connection', function() {
    console.log('Connected to websocket server.');
});
// エラー時のコールバック
ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});
// 切断時のコールバック
ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});
// ------------------------

// Publishing a Topic
const command = new ROSLIB.Topic({
    ros : ros,
    name : '/command',
    messageType : 'std_msgs/String'
});

// ------------------------

//位置制御に切り替え
function poschange() {
    var input_message = "pos"
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    window.location.href = "position.html"; 

}
//速度制御に切り替え
function velchange() {
    var input_message = "vel"
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    window.location.href = "velocity.html";
}
//メインメニューに戻る
function main() {
    window.location.href = "index.html"; 
}

//テキスト入力
function func1() {
    //入力されたデータを読み込む
    var input_message = document.getElementById("input_message").value;
    //パブリッシュする
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
}

// ------------------------

//速度制御の関数

//グローバル関数として速度値を定義
var sd=Number(0);

function SpeedUp() {
    //計算
    sd = sd+500;
    //画面に表示
    target = document.getElementById("speed_output");
    target.innerHTML = sd;
    //データをパブリッシュ
    const str = new ROSLIB.Message({data: String(sd)});
    command.publish(str);
}
function SpeedDown() {
    sd = sd-500;
    target = document.getElementById("speed_output");
    target.innerHTML = sd;
    const str = new ROSLIB.Message({data: String(sd)});
    command.publish(str);
}

// ------------------------

//位置制御の関数

//グローバル関数としてポジション値を定義
var pd=Number(0);
//テキスト入力
function Position0() {
    //入力されたデータを読み込む
    var input_message = document.getElementById("input_message").value;
    //パブリッシュする
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    //計算
    pd = Number(input_message)
    //画面に表示
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}

function Position1() {
    var input_message = 0
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position2() {
    var input_message = 1000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position3() {
    var input_message = 2000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position4() {
    var input_message = 3000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position5() {
    var input_message = 4000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position6() {
    var input_message = 5000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position7() {
    var input_message = 6000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position8() {
    var input_message = 0
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position9() {
    var input_message = -1000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position10() {
    var input_message = -2000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position11() {
    var input_message = -3000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position12() {
    var input_message = -4000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position13() {
    var input_message = -5000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
function Position14() {
    var input_message = -6000
    const str = new ROSLIB.Message({data: String(input_message)});
    command.publish(str);
    pd = Number(input_message)
    target = document.getElementById("position_output");
    target.innerHTML = pd;
}
