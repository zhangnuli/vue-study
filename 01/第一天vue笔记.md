## 框架和库
- 框架 vue 拥有完整的解决方案 我们写好代码人家调我
- 库 jQuery zepto... 我们调用它

## 渐进式框架
- 通过一个组合完成一个完整的框架
- vue全家桶 vuejs+vue-router+vuex+axios

##MVC
- model 数据
- view 视图
- controller 控制器

##MVVM
- model 数据
- view 视图
- viewModel 视图模型

## 安装vue
- cdn的方式
- npm安装 node package manager
- 在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。
```
# 最新稳定版
$ npm install vue
```
- Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm run dev
```
### vue指令 

 - dom元素的行间属性 提供了内置的指令 必须以v-开头 后面的值均为变量
    - v-model (表单元素) 忽略掉value checked selected 将数据绑定到视图上,视图修改后会影响数据的变化
    - v-text 取代{{}} v-clock解决闪烁问题 需要在样式上添加[v-clock]{display-block}  后期都可以不采用
    - v-once 绑定一次 数据在变化不会导致视图刷新 写在不想刷新的标签上
    - v-html 将html字符串转化成HTML
    - v-for 循环(数组 对象 字符串 数字)
    ```
        <div v-for="value in/of 数组></div>
        <div v-for="(value,index) in/of 数组></div>
    ```
### 事件 v-on(@)
- 绑定给dom元素,函数需要定义在methods中,不能喝data中的内容重名,this指向的实例,不能使用箭头函数  事件源对象如果不写括号.可以自动传入,否则只能手动写$event
```
    <div @click="函数"></div>
```

### Promise 解决回调函数的
- 回调函数:将后续的处理逻辑传入当前要做的事,事情做好后调用此函数
```
    let a='';
    function buy(callback){
        setTimeout(function(){
              a="蘑菇";
        callback(a);
        },2000)
      
    }
    buy(function(val){
        console.log(val);
    })
```

#### Promise的三个状态(成功态 失败态 等待态)
```
        //res->resolve代表的是转向成功态
        //rej->reject代表的是失败态
        //res和rej都是函数
        //Promise的实例有一个then方法,then方法中有两个参数
        let p = new Promise((res, rej) => {
            setTimeout(function () {
                let a = "蘑菇";
                res(a);
                callback(a);
            }, 2000)
        });
        p.then((data) => { console.log(data) }, () => { })
```