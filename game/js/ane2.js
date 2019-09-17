//ane2.js 海葵第二版本(摆动海葵)
//1：创建构造函数aneObj
var aneObj=function(){
    this.rootX=[];//起点坐标x 终点600不用写
    //控制点 x与起点相同;y起点y减100
    this.headX=[];//终点x
    this.headY=[];//终点y
    this.amp=[];//摆动幅度
    this.alpha=0;//连续变化很少数值 计算-1和1
}
//2：为构造函数添加属性num=50
aneObj.prototype.num=50;
//3：为构造函数添加函数init 初始化海葵
aneObj.prototype.init=function(){
    //3.1：创建循环遍历每一条海葵
    for(var i=0;i<this.num;i++){
        //3.2：初始化起点坐标x
        this.rootX[i]=i*16+Math.random()*20;
        //3.3：初始化终点坐标x
        this.headX[i]=this.rootX[i];
        //3.4：初始化终点坐标y
        this.headY[i]=canHeight-200+Math.random()*50;
        //3.5：初始化摆动幅度
        this.amp[i]=20+Math.random()*20;
    }
    //console.log(this.rootX);
    //console.log(this.headX);
    //console.log(this.headY);
    //console.log(this.amp);
}
//4：为构造函数添加函数draw 绘制
aneObj.prototype.draw=function(){
    //4.1：保存画笔2状态
    ctx2.save();
    //4.2：设置画笔2样式 宽度 圆角 透明度 颜色
    ctx2.strokeStyle="#3b154e"; //颜色
    ctx2.lineWidth=20;          //线宽
    ctx2.globalAlpha=0.6;       //透明度
    ctx2.lineCap="round";       //圆角
    //4.3：累加非常小数值并且通过sin返回-1~1数值
    this.alpha+=0.0008*36;
    var p=Math.sin(this.alpha);
    //4.4：创建循环遍历每一条海葵
    for(var i=0;i<this.num;i++){
        //4.5：开始一条路径
        ctx2.beginPath();
        //4.5.1：重新计算终点坐标x
        this.headX[i]=this.rootX[i]+this.amp[i]*p;
        //4.6：移动到起点坐标
        ctx2.moveTo(this.rootX[i],canHeight);
        //4.7：绘制一条贝塞尔曲线
        ctx2.quadraticCurveTo(this.rootX[i],canHeight-100,this.headX[i],this.headY[i]);
        //4.8：描边
        ctx2.stroke();
    }
    
    //4.9：恢复画笔2状态
    ctx2.restore();
}
//5：将ane2.js 添加到index.html
//6：注释原来ane.js 完成