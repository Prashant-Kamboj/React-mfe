const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('../config/webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackgeJson = require('../package.json');

const devConfig = {
    mode:'development',
    devServer: {
        port: 3002,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp' : './src/bootstrap'
            },
            shared: PackgeJson.dependencies
        }),
        new CleanWebpackPlugin(),
    ]
}

module.exports = merge(commonConfig, devConfig);