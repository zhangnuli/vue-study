//箭头函数 不具备this arguments
//自己没有this就找上一级this

//如何更改this指向
//1.call apply bind
//2.var that=this
//3.=>

//如何确定this是谁?
//看谁调用的 .前面是谁this就是谁

// function a(b){
//     return b+1;
// }

// let a=b=>b+1;

function a(b){
    return function(c){
        return b+c
    }
}


let a=b=> c=>b+c
    
    