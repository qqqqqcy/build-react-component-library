const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = Object.assign(baseConfig, {
    entry: {
        index: path.resolve(__dirname, '../components/index.tsx'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        library: 'demo-ui',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    devtool: 'cheap-module-source-map',
});
