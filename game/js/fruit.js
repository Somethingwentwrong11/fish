//fruit.js 此文件包含所有食物内容
//1：创建食物构造函数 fruitObj
var fruitObj=function(){
    //1.1：添加两个属性分别保存蓝色和橙色图片
    this.prange;
    this.blue;
    //1.2：添加两个属性保存x,y
    this.x=[];
    this.y=[];
    //1.3：添加一个属性速度
    this.spd=[];
    //1.4：添加一个属性表示食物状态 活动 不活动
    this.alive=[];//true  false
    //1.5：添加一个属性表示食物宽度
    this.l=[];
    //1.6：添加一个属性表示当前食物的类型 橙色 蓝色
    this.fruitType=[];//"blue" "fruit"
    //1.7：添加一个属性表示海葵下标
    this.aneNo=[];// 0 1 2
}
//2：为食物构造函数添加初始化方法 init
fruitObj.prototype.init=function(){
    //2.1：创建食物蓝色图片对象并且下载照片
    this.blue=new Image();
    this.blue.src="src/blue.png";
    //2.2：创建食物橙色图片对象并且下载照片
    this.orange=new Image();
    this.orange.src="src/fruit.png";281711128
    //2.3：创建循环遍历所有食物
    for(var i=0;i<this.num;i++){
        //2.4：状态 位置 海葵下标 食物类型 宽度 速度
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.aneNo[i]=0;
        this.fruitType[i]="blue";
        this.l[i]=0;
        this.spd[i]=0;
    }
    
}
//3：为食物构造函数添加绘制方法 draw
fruitObj.prototype.draw=function(){
    //3.1：创建循环遍历每个食物
    for(var i=0;i<this.num;i++){
        //3.2：判断当前食物状态是否是活动 alive=true
        if(this.alive[i]){
            //3.3：判断当前食物颜色是哪个图片
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            //ctx2.drawImage(pic,this.x[i],this.y[i]);
            //3.4：判断食物宽度<=14  宽度增长
            if(this.l[i]<14){
                this.l[i]+=this.spd[i]*5;
            }else{
                this.y[i]-=this.spd[i]*60;
            }
            ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
            //3.5：如果==14向上漂浮 y-spd
            //3.6：如果漂浮出画布将状态修改 false
            if(this.y[i]<0){
                this.alive[i]=false;
            }
        }
    }
}
//4：将fruit.js添加到index.html
//5：并且在main.js创建食物对象
//调用相应方法
//6：为食物构造函数添加数量 num=30
fruitObj.prototype.num=30;

//以下三个内容是一个整体
//7：创建函数监听画布中活动食物数量是否不足15个
function fruitMonitor(){
    //7.1：累加操作计算活动食物数量
    var sum=0;     //创建临时变量完成累加
    for(var i=0;i<fruit.num;i++){//??遍历食物
        if(fruit.alive[i])sum++;//如果状态true累加
    }
    if(sum<15){//不足15个活动食物
        sendFuit();//挑一个不活动食物变为活动
        return;//一次只挑一个
    }
}
//8：从不活动食物中挑一个食物
function sendFuit(){
    //按下标顺序来挑第一个不活动食物
    //8.1：创建循环遍历食物
    for(var i=0;i<fruit.num;i++){
        //8.2：如果当前状态false
        if(fruit.alive[i]==false){
            //8.3：出生 参数
            fruit.born(i);
            //8.4：返回
            return;
        }
    }
}
//9：出生
fruitObj.prototype.born=function(i){
    //9.1：当前事务状态 true
    this.alive[i]=true;
    //9.2：当前食物宽度 0
    this.l[i]=0;
    //9.3：当前食物类型 
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";
    //9.4：当前食物从第几个海葵头顶出生
    this.aneNo[i]=Math.floor(Math.random()*ane.num);
    //9.5：当前食物x
    this.x[i]=ane.headX[this.aneNo[i]];
    //9.6：当前食物y
    this.y[i]=ane.headY[this.aneNo[i]];
    //9.7：当前食物速度
    this.spd[i]=Math.random()*0.017+0.003;
}
//10：在main.js调用fruitMonitor函数