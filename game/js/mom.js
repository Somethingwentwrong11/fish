//mom.js 大鱼实现类
//1：创建大鱼构造函数 momObj
var momObj=function(){
    //1.1：创建数组保存大鱼眼睛
    this.bigEye=[];
    //1.2：创建数组保存大鱼身体
    this.bigBody=[];
    //1.3：创建数组保存大鱼尾巴
    this.bigTail=[];
    //1.4：创建两个变量保存大鱼x,y
    this.x;
    this.y;
    //1.5：创建一个变量保存大鱼游动角度
    this.angle;
    //1.7：完成眼睛图片切换
    this.bigEyeIndex=0;//眼睛数组下标0,1
    this.bigEyeStart=0;//眼睛切换计时开始
    this.bigEyeEnd=3000;//眼睛切换计时结束
};
//2：为大鱼构造函数添加函数 init
momObj.prototype.init=function(){
    //2.1：为大鱼x y赋值操作，大鱼初始化在屏幕中心
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //2.2：为大鱼angle角度赋值
    this.angle=0;
    //2.3：创造循环赋值大鱼眼睛
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    //2.4：创建循环赋值大鱼身体
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png";
    }
    //2.5：创建循环赋值大鱼尾巴
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src="src/bigTail"+i+".png";
    }
};
//3：为大鱼构造函数添加函数 draw
momObj.prototype.draw=function(){
    //3.9：将鼠标的位置赋值给大鱼位置
    this.x=lerpDistance(mx,this.x,0.96);
    this.y=lerpDistance(my,this.y,0.96);
    //3.9.1：将鼠标游戏角度面向鼠标慢慢修改
    //(1)计算鼠标与大鱼坐标差(距离)
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    //(2)计算鼠标与大鱼角度差
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    //(3)让大鱼面向鼠标修改角度(公式)
    this.angle=lerpAngle(beta,this.angle,0.9);

    //3.10：切换眼睛图片下标
    //(1)累加开始时间
    this.bigEyeStart+=1000/50;
    //(2)如果大鱼眼睛结束时间
    if(this.bigEyeStart>this.bigEyeEnd){
        //(3)切换下标
        this.bigEyeIndex=(this.bigEyeIndex+1)%2;
        //(4)将开始时间恢复为0
        this.bigEyeStart=0;
        //(5)修改闭眼睛时间
        if(this.bigEyeIndex==1){
            this.bigEyeEnd=300;
            
        }
        //(6)修改睁眼睛时间
        if(this.bigEyeIndex==0){
            this.bigEyeEnd=3000;
            
        }
    }
    


    //3.1.1：保存画笔1状态
    ctx1.save();
    //3.1.2：移动画布原点
    ctx1.translate(this.x,this.y);
    //3.1.3：旋转大鱼指定角度
    ctx1.rotate(this.angle);
    //3.1.4：绘制大鱼身体
    ctx1.drawImage(this.bigBody[0],0,0);
    //3.1.5：绘制大鱼尾巴
    ctx1.drawImage(this.bigTail[0],0+39,0+6);
    //3.1.6：绘制大鱼眼睛
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],0+20,0+20);
    //3.1.7：恢复画笔1状态
    ctx1.restore();
};
//4：将mom.js 文件添加index.html
//5：在main.js中创建大鱼对象并且调用相应方法