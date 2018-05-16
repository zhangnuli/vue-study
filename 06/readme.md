## `vue-cli`

`下载一个全局生成 vue 项目的脚手架`

```
npm install vue-cli -g
vue init webpack 项目名字
cd 项目名字
nom install
npm run dev
```

---

## `模块`

* node 模块的规范 commonjs
* cmd seajs amd require
* esmodule
* umd 为了做兼容处理的
* esmodule
  * 如何定义模块 (一个 js 就是一个模块)
  * 如何导出模块(export)
  - 如何使用模块 (import)

## `webpack`

### `安装`

```
npm init -y
npm install webpack --save-dev
```

> <font color="red">安装 webpack 或者 less 最好不要安装全局的 否则可能导致 webpack 的版本差异</font>

* 在 package.json 中配置一个脚本 这个脚本用的命令是 webpack,会去当前的 node_modules 下的 bin 找对应的 webpack 名字让其执行,执行的就是 bin/webpack.js,webpack.js 需要当前目录下有个 webpack.config.js 的文件 我们通过 npm run build 执行的目录是当前文件的目录,所以回去当前目录下查找

## `babel` `es6转移成es5语法`

* 安装 babel

```
  npm install babel-core --save-dev
  npm install babel-loader --save-dev
```

## `babel-preset-es2015`

* 让`babel-loader`拥有解析 es6 语法的功能

```
  npm install  babel-preset-es2015 --save-dev
```

## `babel-preset-stage-0`

* 解析 es7 语法的功能

```
  npm install  babel-preset-stage-0 --save-dev
```

## `css-loader` `style-loader`

* 解析 css

```
npm install css-loader style-loader --save-dev
```

## `less-loader` `less`

* 编译 less

```
npm install less less-loader --save-dev
```

## `file-loader` `url-loader`

* 解析图片

```
npm install file-loader url-loader --save-dev
```

## 需要解析 html 插件

> <font color="red">插件的作用是以我们自己的 HTML 为模板将打包后的结果,自动引入 html 中产出到 dist 目录下</font>

```
npm install html-webpack-plugin --save-dev
```

## `webpack-dev-server`
> <font color="#8B1A1A">这里内置了服务,可以帮我们启动一个端口号,当代吗更新的时,可以自动打包(内存中打包),代码有变化就重新执行</font>
```
npm install webpack-dev-server
```

## `vue-loader` `vue-template-compiler`
- vue-loader解析.vue文件的
- vue-template-compiler 解析vue模板
