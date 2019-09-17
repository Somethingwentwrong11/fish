//ane.js 海葵类
//1：创建构造函数aneObj
var aneObj=function(){
    //1.1：添加数组保存海葵x
    this.x=[];
    //1.2：添加数组保存海葵len
    this.len=[];
}
//2：为构造函数添加属性num=50
aneObj.prototype.num=50;
//3：为构造函数添加函数init 初始化
aneObj.prototype.init=function(){
    //3.1：创建循环遍历海葵x和len
    for(var i=0;i<this.num;i++){
        //3.2：初始化x
        this.x[i]=i*16+Math.random()*20;
        //3.3：初始化海葵高度
        this.len[i]=200+Math.random()*50;
    }
}

//4：为构造函数添加函数draw 绘制海葵
aneObj.prototype.draw=function(){
    //4.1：保存画笔2状态
    ctx2.save();
    //4.1.1：为海葵添加样式
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.globalAlpha=0.5;
    //4.2：创建循环遍历每一条海葵
    for(var i=0;i<this.num;i++){
        var a1=Math.random()*255;
        var a2=Math.random()*255;
        var a3=Math.random()*255;
        var b=`rgb(${a1},${a2},${a3})`;
        ctx2.strokeStyle=b;
        //4.3：开始一条新路径
        ctx2.beginPath();
        //4.4：将画笔2移动画布底端
        ctx2.moveTo(this.x[i],canHeight);
        //4.5：向上画一条直线
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        //4.6：描边  
        ctx2.stroke();
    }
    //4.7：恢复画笔2状态
    ctx2.restore();
}
//5：将ane.js添加index.html
//6：在main.js创建海葵对象
//并且调用init/draw函数