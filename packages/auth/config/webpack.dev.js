const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('../config/webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackgeJson = require('../package.json');

const devConfig = {
    mode:'development',
    output:{
        publicPath: 'http://localhost:3003/'
    },
    devServer: {
        port: 3003,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp' : './src/bootstrap'
            },
            shared: PackgeJson.dependencies
        }),
        new CleanWebpackPlugin(),
    ]
}

module.exports = merge(commonConfig, devConfig);