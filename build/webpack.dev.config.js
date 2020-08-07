const baseConfig = require("./webpack.base.config");
const {getCssLoaders} = require("./webpack.base.config");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(baseConfig,{
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: getCssLoaders(true)
    },
    devServer: {
        hot: true,
        hotOnly: true,
        // open: true,
        port: 3001,
        contentBase: "../dist"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()  //启用 HMR (webpack 4)
    ]
});
