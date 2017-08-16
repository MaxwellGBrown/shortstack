const path = require('path');


module.exports = {
  resolve: {
    alias: {
      source: path.resolve(__dirname, '../source')
    }
  },

  module: {
    rules: [
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
