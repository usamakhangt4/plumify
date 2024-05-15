const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

require('dotenv').config();

module.exports = {
    target: "web",
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
            watch: true
        },
        hot: true,
    },
    devtool: false,
    resolve: {
        alias: {
            'vue': 'node_modules/vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
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
            template: 'index.html',
            inject: 'body',
        }),
        new VueLoaderPlugin()
    ],
};
