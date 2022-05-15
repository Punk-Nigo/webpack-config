const MiniCssExtractPLugin = require('mini-css-extract-plugin');

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPLugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPLugin()
    ],
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    },
    devtool: "source-map",
    devServer: {
        static: "./",
        compress: true,
        port: 8080,
        hot: true
    },
};