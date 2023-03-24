const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'users', // nome del modulo - da richiamare da host
            filename: 'remoteEntry.js', // file esposto da webpack all'esterno
            exposes: {
                './UsersApp': './src/bootstrap', // associazione del namespace di include della libreria. es. products/ProductsIndex => modulo product, cartella src/index
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig)