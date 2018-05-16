let arr=[1,2,3,4,5,6];
for (let i = 0; i < arr.length; i++) {//编程式
   console.log(arr[i]);  
}

//1.forEach 不支持return
arr.forEach(function(item){//声明式(不关心如何使用) 
    console.log(item);
})

for(let key in arr){
    //key会变成字符串类型,包括数组的私有属性也可以打印出来
}

let obj={name:"lisi",age:99}

for (let val of Object.keys(obj)){
    //支持return 并且是值of数组(不能遍历对象)
    console.log(obj[val]);
}

//2.filter 是否操作原数组:不会   返回结果:过滤后的新数组   回调函数的返回结果:如果返回true,表示这一项放到新数组中

let arr1=arr.filter(function(item){
    return item<5&&item>2
});
console.log(arr1);

//3.map 映射 将原有的数组映射成一个新的数组
//不操作原数组  返回新数组 回调函数返回的是什么这一项就是什么

let arr2=arr.map(item=>`<li>${item}</li>`)
console.log(arr2);

//4.includes 是否包含 返回的是布尔值
console.log(arr.includes(4));

//5.find 返回找到的那一项  不会改变原数组  回调函数中返回true表示找到了 找不到返回的是undefined 找到后停止
arr.find((item,index)=>{
    return item.toString().indexOf(5)>-1;
})

//6.some 找true 找到true后停止 返回true  找不到返回false
//  every 找false.....

//7.reduce 收敛 4个参数 原数组不变  返回的是叠加后的结果  回调函数返回的结果 

//prev代表的是数组的第一项 next是数组的第二项
arr.reduce(function(prev,next,index,item){

})
