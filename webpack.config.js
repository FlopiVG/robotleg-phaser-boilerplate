const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new SWPrecacheWebpackPlugin(),
    new webpack.ProvidePlugin({
      Phaser: "phaser"
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
};
