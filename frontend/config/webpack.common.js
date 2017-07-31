const path = require("path");
const merge = require("webpack-merge");

module.exports = {

  entry: "./source/index.js",

  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {  // Load JavaScript via Babel
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        use: [
          {  // Compile Sass to CSS
            loader: "sass-loader",
            options: {
              includePaths: ["source/styles"],
              sourceMap: true
            }
          }
        ]
      }
    ] 
  }

};
