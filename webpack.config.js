const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //context: path.join(__dirname, 'src'),
    optimization: {minimize: false},
    devServer: { overlay: true },
    entry: {
        script: [
            './src/index.js',
            './src/assets/styles/_fonts.scss',
            './src/assets/styles/_media-mixin.scss',
            './src/assets/styles/index.scss'
        ]
    },
    output: {
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: true,
                            importLoader: 2,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', options: {}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html",
            scriptLoading: "blocking"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        })
    ]
};