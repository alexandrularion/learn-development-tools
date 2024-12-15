const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    static: "./dist",
    port: 3000,
    hot: false,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
