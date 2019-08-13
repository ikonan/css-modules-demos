var webpack = require("webpack");
module.exports = {
  entry: __dirname + "/index.js",
  output: {
    publicPath: "/",
    filename: "./bundle.js"
  },

  module: {
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]---[local]---[hash:base64:5]",
              }
            }
          }
        ]
      }
    ]
  }
};
