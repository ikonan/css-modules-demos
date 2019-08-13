var webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: __dirname + "/index.js",
  output: {
    publicPath: "/",
    filename: "./bundle.js"
  },

  module: {
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader?modules"] }
    ]
  },

  plugins: [
    new UglifyJSPlugin({ uglifyOptions:  { warnings: false } } )
  ]
};
