const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
};
