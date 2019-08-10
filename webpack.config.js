var webpack = require('webpack');
var path = require('path');
var HtmlWebPackPlugin = require("html-webpack-plugin");


// where to copy transpiled code
var DIST_DIR = path.resolve(__dirname, "dist");
// Where to find code to be transpiled
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry : SRC_DIR + "/app/index.js",
  output : {
    path : DIST_DIR + "/app",
    filename : "bundle.js",
    publicPath : "/app/"
  },
  module : {
    rules : [{
      test: /\.js?/,
      include: SRC_DIR,
      loader: "babel-loader",
      query: { presets: ["@babel/preset-env", "@babel/preset-react"] }
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}

module.exports = config;
