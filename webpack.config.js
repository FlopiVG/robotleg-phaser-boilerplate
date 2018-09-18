const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/typescript"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new SWPrecacheWebpackPlugin()
  ]
};
