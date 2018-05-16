# book

> book

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 用到 less

```
npm install less less-loader axios vuex bootstrap
```

### 文件目录结构
- mock 模拟后台数据
- api 代表的是所有的接口
- base 基础组件
- components 页面级组件

## 热门图书
- 先写服务端 确保数据正常返回
- 增加api方法 实现调取数据的功能
- 在哪个组件中应用这个api,如果是一个基础组件需要用这些数据 在使用这个自检的父级中调用这个方法,将数据传递给基础组件

- 写一个基础组件  
    - 创建一个.vue文件
    - 在需要使用这个自检的父级中引用这个组件
    - 在组件中注册
    - 以标签的形式引入

- 路由元信息

## 下拉加载 /page
- 默认每次五条,前端告诉后台需要要从第几条开始给我
- /page?offset=5
- 后台返回时还要告诉前端是否还有更多的数据  hasMore:fasle


