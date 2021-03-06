const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
dotenv.config();


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'production',
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        htmlPlugin
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};