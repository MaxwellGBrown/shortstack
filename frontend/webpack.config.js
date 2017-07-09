const path = require("path");

module.exports = {
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "dist") ,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          // create style nodes from JS strings
          { loader: "style-loader" },
          {
            loader: "css-loader",  // translates CSS into CommonJS
            options: {
              localIdentName: "[local]",
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",  // Compile Sass to CSS
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