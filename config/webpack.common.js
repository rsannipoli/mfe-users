const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    module: {
        // questo è un loader che dice a webpack di processare file diversi nel progetto corrente
        rules: [
            // settiamo il loader di babel - è una configurazione molto comune
            {
                test: /\.m?js|css$/,  // importa file con estensione mjs o solo js
                exclude: /node_modules/, // escludi i file del mode_module
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', "styled-jsx/babel"],
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets',
                },
            },{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
