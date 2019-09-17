//js/background.js
//1：添加函数drawBackground
function drawBackground(){
    //1.1：绘制游戏背景图片
    ctx2.drawImage(bgPic,0,0);
}
//2：将文件添加index.html文件中
//3：并且在main.js gameloop调用此函数