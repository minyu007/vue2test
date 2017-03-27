const webpack = require('webpack');
const path = require("path");
const fs = require("fs");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sourcemap = require('../src/sourcemap.json')

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist')
}

module.exports = {
    entry: {
        index: './src/vue/index.js',
        vendor: ['vue', 'vue-router']
    },
    output: {
        path: PATHS.dist,
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader?limit=10240&name=img/[name].[ext]'
        }, {
            test: /\.(woff|eot|ttf|woff2|svg)$/i,
            loader: 'url-loader?limit=900&name=font/[hash:8].[name].[ext]'
        }, {
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader'
                ]
            })
        }]
    },
    resolve: {
        alias: Object.assign({
            'vue$': 'vue/dist/vue.common.js',
            'components': path.join(__dirname, '../src/vue/component'),
            'lib': path.join(__dirname, '../src/vue/lib')
        }, sourcemap),
        extensions: ['.js', '.less', '.vue', '*', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `src/index.html`,
            inject: 'body',
            filename: `index.html`
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ]
}