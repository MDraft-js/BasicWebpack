const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(process.cwd(), 'dist')
    },

    plugins: [new HtmlWebpackPlugin({ template: path.resolve(process.cwd(), 'src', 'index.html') }), new CleanWebpackPlugin()],
}