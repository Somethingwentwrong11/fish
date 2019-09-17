//游戏主程序 main.js
//0：创建一组全局变量
//0.1：创建两个全局变量表示两个画布
var c1;
var c2;
//0.2：创建两个全局变量表示两只画笔
var ctx1;
var ctx2;
//0.3：创建两个全局变量表示画布宽度和高度
var canWidth;
var canHeight;
//0.4：创建一个全局变量表示背景图片
var bgPic;
//0.5：创建一个全局变量表示海葵对象
var ane;
//0.6：创建一个全局变量表示食物对象
var fruit;
//0.7：创建一个全局变量表示大鱼对象
var mom;
//0.8：创建两个全局变量表示鼠标在画布中位置
var mx;
var my;
//0.8：创建一个全局变量表示分数对象
var data;


//1：添加函数game 入口函数
function game(){
    init();
    gameloop();
}
//2：添加函数init 初始化资源函数
function init(){
    //2.1：为两个画笔赋值
    c1=document.getElementById("c1");
    c2=document.getElementById("c2");
    console.log(c1);
    console.log(c2);
    //2.2：为两只画笔赋值
    ctx1=c1.getContext("2d");
    ctx2=c2.getContext("2d");
    console.log(ctx1);
    console.log(ctx2);
    //2.3：为画布宽度和高度赋值
    canWidth=c1.width;
    canHeight=c1.height;
    //2.4：创建背景图片对象下载图片
    bgPic=new Image();
    bgPic.src="src/background.jpg"
    //2.5：创建海葵对象并且调用初始化方法
    ane=new aneObj();
    ane.init();
    //2.6：创建食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();
    //2.7：创建大鱼对象并且调用初始化方法
    mom=new momObj();
    mom.init();
    //2.8：初始化鼠标位置
    mx=canWidth*0.5;
    my=canHeight*0.5;
    //2.9：为画布绑定鼠标移动事件
    c1.addEventListener("mousemove",handleMove)
    //2.10：创建分数对象
    data=new dataObj();
}
//3：添加函数game loop 创建定时器调用gameloop
function gameloop(){
    //3.1：创建智能定时器 调用 gameloop
    requestAnimationFrame(gameloop);
    //3.2：调用绘制背景图函数
    drawBackground();
    //3.3：调用海葵对象的绘制函数
    ane.draw();
    //3.3.1：监听画布中食物的数量
    fruitMonitor();
    //3.4：调用食物对象的绘制函数
    fruit.draw();
    //3.4.1：清除画布一
    ctx1.clearRect(0,0,canWidth,canHeight);
    //3.5：调用大鱼对象的绘制函数
    mom.draw();
    //3.6：调用大鱼碰撞食物的函数
    momFruitsCollision();
    //3.7：调用分数对象的绘制函数
    data.draw();
}
//4：当网页加载成功后调用game
document.body.onload=game;
//5：将main.js 添加 index.html
//6：创建函数用于捕获鼠标移动位置
function handleMove(e){
    mx=e.offsetX-30;
    my=e.offsetY-30;
    //console.log(mx+":"+my);
}