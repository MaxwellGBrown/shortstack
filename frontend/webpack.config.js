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
        use: {
          loader: 'babel-loader',
          query: {
            presets: ["es2016", "react", "stage-0"]
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },  // create style nodes from JS strings
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
