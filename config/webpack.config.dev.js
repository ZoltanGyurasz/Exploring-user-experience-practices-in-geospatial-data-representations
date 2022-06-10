const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const json = require('json-loader!./file.json');

module.exports = {
    mode: "development",
    // The application entry point
    entry: "./src/main.js",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            //use babel-loader to transpile js files
            {
                test: /\.js$/,
                loader: "babel-loader"
            },

            // css-loader to bundle all the css files into one file and vue-style-loader
            // to add all the styles inside the <style> block in `.vue` file.
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|geosjon)$/i,
                type: 'asset/resource',
          },
        ]
    },
    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devServer: {

    },
    resolve: {
        fallback: {
            "fs": false,
            "util": false,
            "path": false,
            "http": false,
            "os": false
        },
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};