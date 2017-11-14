//用npm启动打包
//npm start
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//自动打包方式，执行webpack就可以了。
module.exports = {
    //已多次提及的唯一入口文件
    entry:  __dirname + "/app/main.js",
    output: {
        //打包后的文件存放的地方
        path: __dirname + "/build",
        //添加特殊的字符串混合体（[name], [id] and [hash]）到输出文件名前//现在可以合理使用缓存了。
        filename: "bundle-[hash].js"
    },
    devtool:'source-map',
    devServer:{
        //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        contentBase:"./public",
        //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        historyApiFallback:true,
        //port 设置默认监听端口，如果省略，默认为”8080“
        port:8080,
        //inline 设置为true，当源文件改变时会自动刷新页面
        inline:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
//                        options: {
//                            modules: true
//                        }
                    },{
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'},
            {
                // 图片加载器
                test:/\.(png|jpg|gif|jpeg)$/,
                loader:'url-loader?limit=167936' //164K以内的图片均转换成base64格式
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'), //一旦打开就报错
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            minify: { removeAttributeQuotes: true }, //minify:true 会报错：ERROR in TypeError: Cannot use 'in' operator to search for 'html5' in true
            title: '陈超阳-homework',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }), //压缩js文件的插件，不引入的话，生成的js文件有2万多行

    ]

}



//devtool://source-map   cheap-module-source-map  eval-source-map  cheap-module-eval-source-map
//手动打包方式：
//C:\Users\chenchaoyang\Desktop\homework>webpack app/main.js public/bundle.js

