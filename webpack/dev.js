const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')

module.exports = merge(require('./base'), {
    plugins: [
        new ExtractTextPlugin('css/[name].css?[contenthash]')
    ],
    module: {
        rules: [{
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader'
                ]
            })
        }]
    },
    devServer: {
        noInfo: false,
        inline: true,
        publicPath: '/',
        stats: {
            cached: false,
            colors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
})