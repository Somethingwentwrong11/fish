//data.js 负责分数
//1：创建分数构造函数 dataObj
var dataObj=function(){
    //1.1：游戏分数
    this.scope=0;
}
//2：为分数构造函数添加draw函数
dataObj.prototype.draw=function(){
    //2.1：计算画布中间靠下位置
    var w=canWidth*0.3+50;
    var h=canHeight*0.9;
    //2.2：设置文字样式
    ctx1.save();//保存状态
    ctx1.fillStyle="#fff";//填充文本颜色
    ctx1.font="35px SimHei";//字体大小
    //2.3：绘制文字
    ctx1.fillText("SCORE:"+this.scope,w,h);
    ctx1.restore();
}
//3：将data.js添加index.html文件中
//4：并且在main.js创建对象并且调用方法