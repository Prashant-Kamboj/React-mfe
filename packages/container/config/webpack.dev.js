const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const packgeJson = require('../package.json');
const  { merge } = require('webpack-merge');

const devConfig = {
    mode:'development',
    devServer: {
        port: 3000,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true
    },
    output:{
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3002/remoteEntry.js',
                auth:'auth@http://localhost:3003/remoteEntry.js'
            },
            shared: packgeJson.dependencies
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(commonConfig, devConfig);

