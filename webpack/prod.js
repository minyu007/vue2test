const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist')
}

module.exports = merge(require('./base'), {
    output: {
        path: PATHS.dist,
        publicPath: '',
        filename: `js/[name].[chunkhash:8].min.js`,
        chunkFilename: `js/[name].[chunkhash:8].min.js`,
    },
    devtool: false,
    plugins: [
        new ExtractTextPlugin({
            filename: `css/[contenthash:8].[name].min.css`,
            allChunks: true,
            disable: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            comments: false,
            except: ['exports', 'require']
        })
    ]
})