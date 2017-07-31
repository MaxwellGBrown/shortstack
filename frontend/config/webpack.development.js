const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
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
        ]
      }
    ] 
  }
});
