var webpack = require('webpack');
var config = require('./config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
console.log('============env====', process.env.NODE_ENV);
// var env = process.env.NODE_ENV === 'mock' ? config.mock.env : (
//     process.env.NODE_ENV === 'development' ? config.dev.env : config.product.env
// );
var env = config[process.env.NODE_ENV] && config[process.env.NODE_ENV].env || 'development'
console.log('============env===@@@@@@@@@@@@@@@@@=', env);
module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'js/[name].[chunkhash].js'
    },
    // devServer: {
    //     overlay: true,
    //     port: 3333
    // },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
            '_STUYEVY_': env,
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