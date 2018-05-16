let path=require('path');
path.resolve('./dist');

let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/mian.js',//打包的入口文件 webpack会自动查找相关的依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字
        path:path.resolve('./dist')//必须是绝对路径
    },

    //模块的解析规则
    // -> js 匹配所有的js 用babel-loader转义 排除node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/1.html',
        })
    ]
}