const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserJSPlugin = require('terser-webpack-plugin'); // 压缩JS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩CSS

module.exports = {
    devServer: {
        port: 8080,
        progress: true,
        contentBase: './dist',
        open: true,
        compress: true
    },
    mode: 'development', // development production
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // [hash]生成带hash的bundle.js,:8表示只显示8位
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'http://www.baidu.com' // 在每个路径(css/image)都会添加此路径
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        outputPath: '/img/',
                        // publicPath: 'http://www.baidu.com'
                    }
                },
                
            },
            // css-loader 处理css @import
            // style-loader 插入到html的header里面
            // loader是从右到左执行
            {
                test: /\.css$/, 
                use: [
                    // 插入到页面的style里
                    // 'style-loader',

                    // 插入到css文件，页面用link引用
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // 处理less
            {
                test: /\.less$/, 
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        enforce: 'pre' // 在babel-loader之前被执行
                    }
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/ // 排除文件夹
            }
        ]
    },
    externals: { // 不打包到bundle.js
        jquery: "$"
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html', // 输出的文件的名字
            minify: {
                removeAttributeQuotes: true, // 删除引号
                collapseWhitespace: true, // 压缩html成一行
            },
            hash: true, // bundle.js?hash
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ]
}