let path=require('path');
let HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/mian.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|gif|png)$/,use:'url-loader?limit=8192'},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ]
}