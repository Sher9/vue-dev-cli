var webpack = require('webpack');
//将所有的css样式都打包成一个css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        'build/index': './src/index.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            enforce: "pre",   //使eslint最开始执行
            test: /\.(js|vue)$/,
            exclude: /node_modules|static|build/,
            loader: "eslint-loader"
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader', // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        use: 'css-loader'
                    })
                }
            }
        },{
            test: /\.js$/,
            exclude: /node_modules|static/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new ExtractTextPlugin("build/dist.css"),
    ]
}