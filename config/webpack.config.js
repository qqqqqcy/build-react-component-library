const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../site/index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    // https://juejin.im/post/58293502a0bb9f005767ba2f
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Build React Component Library',
        template: path.resolve(__dirname, '../site/index.html')
    })],
}