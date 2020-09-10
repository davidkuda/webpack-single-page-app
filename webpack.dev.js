const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
const Dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [{
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new Dotenv({
            path: '.env',
            safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
        })
    ]
}
