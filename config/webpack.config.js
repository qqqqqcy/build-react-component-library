const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../site/index.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
    },
    // https://juejin.im/post/58293502a0bb9f005767ba2f
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                //   postcssFlexbugsFixes,
                                autoprefixer({
                                    browsers: [
                                        'last 2 versions',
                                        'Firefox ESR',
                                        '> 1%',
                                        'ie >= 9',
                                        'iOS >= 8',
                                        'Android >= 4',
                                    ],
                                }),
                                cssnano({
                                    preset: 'default',
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Build React Component Library',
            template: path.resolve(__dirname, '../site/index.html'),
        }),
        new StyleLintPlugin({
            configFile: path.resolve(__dirname,"../stylelint.config.js"),
            context: path.resolve(__dirname,'../components'),
            files: [
                '**/*.scss',
            ],
            failOnError: false,
            emitErrors: true,
            syntax: 'scss',
            quiet: false,
        }),
    ],
};
