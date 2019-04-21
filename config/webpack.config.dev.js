const path = require('path');
const baseConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(baseConfig, {
    entry: {
        index: path.resolve(__dirname, '../site/index.tsx'),
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        ...baseConfig.plugins,
        new HtmlWebpackPlugin({
            title: 'Build React Component Library',
            template: path.resolve(__dirname, '../site/index.html'),
        }),
    ],
});
