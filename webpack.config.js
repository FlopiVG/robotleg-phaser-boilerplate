const path = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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
        loader: "tslint-loader",
        options: {
          typeCheck: true
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "public" }]),
    new SWPrecacheWebpackPlugin(),
    new webpack.ProvidePlugin({
      Phaser: "phaser"
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
};
