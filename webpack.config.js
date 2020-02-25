const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./js/[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimize: true
    },
    devtool: "source-map",
    devServer: {
        port: 5502
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Title",
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
            from: path.resolve(__dirname, "src/favicon.ico"),
            to: path.resolve(__dirname, "dist")
            }
        ]),
        new MiniCssExtractPlugin({
            filename: "./css/[contenthash].css"
        }),
        new TerserWebpackPlugin()

    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "img",
                },
                
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
        ]
    }
}