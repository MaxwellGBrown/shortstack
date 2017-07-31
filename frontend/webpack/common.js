const path = require("path");

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
          { loader: "style-loader" }, // create style nodes from JS strings
          {
            loader: "css-loader",  // translates CSS into CommonJS
            options: {
              localIdentName: "[local]",
              modules: true,
              sourceMap: true
            }
          },
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
