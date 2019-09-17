//创建新文件js/collison.js
//游戏中所有碰撞检测都在此文件中完成

//1：大鱼碰撞食物
function momFruitsCollision(){
    //2：创建循环遍历所有食物
    for(var i=0;i<fruit.num;i++){
        //3：当前食物活动状态
        if(fruit.alive[i]){
            //4：计算当前食物与大鱼之间距离  
            var len=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            //5：如果两者之间距离小于 900 实际距离为30
            if(len<900){
                //6：当前食物小时 alive=false
                fruit.alive[i]=false;
                //7：加分数
                //7.1：判断食物类型 blue  orange
                if(fruit.fruitType[i]=="blue"){
                    var p=100;
                }else{
                    var p=200;
                }
                //7.2：将新分数添加到分数对象中
                data.scope+=p;
            }
        }
    }
}
//7：将此文件添加index.html
//8：将此函数添加main.js gameloop中