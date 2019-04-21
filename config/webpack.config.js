const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development';
module.exports = {
    mode: 'none',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
    },
    // https://juejin.im/post/58293502a0bb9f005767ba2f
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
                test: /\.s?([ac])ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, '../stylelint.config.js'),
            context: path.resolve(__dirname, '../components'),
            files: ['**/*.scss'],
            failOnError: false,
            emitErrors: true,
            syntax: 'scss',
            quiet: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
