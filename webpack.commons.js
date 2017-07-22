const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const helpers = require("./helpers");

const envPlugin = new webpack.DefinePlugin({
    "ENV": JSON.stringify("bar")
});

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        vendor: "./src/vendor.ts",
        app: "./src/main.ts",
    },

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        plugins: [
            envPlugin
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"],
            },
            {
                test: /\.html$/,
                loader: "html",
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file?name=assets/[name].[hash].[ext]",
            },
            {
                test: /\.css$/,
                exclude: helpers.root("src", "app"),
                loader: ExtractTextPlugin.extract("style", "css?sourceMap")
            },
            {
                test: /\.css$/,
                include: helpers.root("src", "app"),
                loader: "raw",
            },
			{
			  test: /\.scss$/,
			  exclude: /node_modules/,
			  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			}
        ],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),

        new HtmlPlugin({
            template: "src/index.html",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),        
    ],
};

