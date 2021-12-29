const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode:'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(commonConfig, prodConfig);