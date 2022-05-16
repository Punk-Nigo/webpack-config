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
    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", // asset = inline+resource, asset/inline = base64, resource = file
                // parser: { // 篩選尺寸
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPLugin.loader,
                        options: {
                            publicPath: ""
                        }
                    },
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
}