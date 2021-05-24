const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    devServer: {
        port: 80,
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(process.cwd(), 'src', 'index.html') }), new CleanWebpackPlugin()],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.less$/i,
            use: ["style-loader", "css-loader", "less-loader"]
        },
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{ loader: "file-loader" }]
        }]
    }
}