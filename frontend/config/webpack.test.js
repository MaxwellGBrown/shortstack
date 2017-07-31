const merge = require("webpack-merge");
const common = require('./webpack.common');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "null-loader" },
        ]
      }
    ] 
  }
});
