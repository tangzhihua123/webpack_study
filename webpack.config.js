var webpack = require('webpack');
var config = require('./config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    // devServer: {
    //     overlay: true,
    //     port: 3333
    // },
    module:{
        rules:[{
            test: /(\.jsx|\.js)$/,
            use:{
                loader: "babel-loader"
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
            __ENV__ : JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsWebpackPlugin(),
        // new webpack.LoderOptionsPlugin({
        //     test: /(\.jsx|\.js)$/,
        //     use:{
        //         loader: "babel-loader"
        //     }
        // })
    ]
};