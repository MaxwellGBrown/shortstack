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
          { loader: "null-loader" },
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
