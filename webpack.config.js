const PATH = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BeautifyHtmlWebpackPlugin = require("beautify-html-webpack-plugin");

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    // ソースマップ有効
    devtool: 'source-map',
    // エントリーポイント
    entry: {
        main: "./src/js/index.js",
    },
    stats: {
        children: true,
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks: "initial",
        },
    },
    devServer: {
        static: {
            directory: PATH.resolve(__dirname, "dist"),
        },
        compress: true,
    },
    externals: {
        jquery: "$",
    },
    output: {
        path: PATH.resolve(__dirname, "dist"),
        assetModuleFilename: "[name][ext][query]",
    },
    // ローダーの設定
    module: {
        rules: [
            {
                test: /.(jpg|png|gif|svg)$/,
                generator: {
                    filename: "assets/img/[name][ext][query]",
                },
                type: "asset/resource",
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                          url: false,
                          // ソースマップの利用有無
                          sourceMap: enabledSourceMap,
                          importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            // PostCSS側でもソースマップを有効にする
                            sourceMap: enabledSourceMap,
                            postcssOptions: {
                                plugins: [
                                    ["autoprefixer", { grid: true }],
                                    require('css-declaration-sorter')({order: 'alphabetical'}),
                                    require('postcss-sort-media-queries')({sort: 'desktop-first',}),
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap              
                        },
                    },
                    {
                        loader: "import-glob-loader",
                    },
                ],
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: "ejs-compiled-loader",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/common.css",
            ignoreOrder: true,
        }),
        new StylelintPlugin({
            fix: true,
        }),
        new HtmlWebpackPlugin({
            title: "My Portfolio app",
            originalHeader: "original header title",
            meta: [
                { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            ],
            template: "./src/template/template.ejs",
            filename: "page.php",
            inject: "body",
            hash: true,
        }),
        new BeautifyHtmlWebpackPlugin({
            indent_size: 4,
            end_with_newline: false,
            preserve_newlines: false,
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: "./src/img", to: "./assets/img" }],
        }),
    ],
};
