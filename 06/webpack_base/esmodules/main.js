//如果是第三方不需要加 ./
//如果是文件模块需要加 ./

//在另一个文件中将内容解构出来

//import拥有声明提前  放到页面的顶部

// import {str,str2,a} from './a.js'
// console.log(str,str2);
// a();

// 第二种写法
import * as b from './a.js';
b.a();
import xxx from './b.js'
console.log(xxx)

