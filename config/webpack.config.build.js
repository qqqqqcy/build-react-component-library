const path = require('path');
const baseConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(baseConfig, {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../site/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../build'),
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        ...baseConfig.plugins,
        new HtmlWebpackPlugin({
            title: 'Build React Component Library',
            template: path.resolve(__dirname, '../site/index.html'),
        }),
    ],
});
