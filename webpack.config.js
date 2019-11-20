const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    target: "web",
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve("./dist"),
        filename: "app.bundle.js",
    },
    devServer: {
        port: 8080,
        contentBase: './src',
        watchContentBase: true
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'API_HOST': JSON.stringify(process.env.API_HOST),
            'API_KEY': JSON.stringify(process.env.API_KEY),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
        }),
    ],
};
