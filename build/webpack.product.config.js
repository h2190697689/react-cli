const baseConfig = require("./webpack.base.config");
const {getCssLoaders} = require("./webpack.base.config");
const merge = require("webpack-merge");

module.exports = merge(baseConfig,{
    mode: 'production',
    devtool: "cheap-module-source-map",
    module: {
        rules: getCssLoaders(false)
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "[name][contenthash:8].js"
    }
});
