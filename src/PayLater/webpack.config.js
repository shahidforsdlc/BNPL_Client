var path = require("path");


module.exports = {
  mode: "production",
  entry: "./src/yourComp.js",
  output: {
    path: path.resolve("build"),
    publicPath:'auto',
    filename: "index.js",
    library: 'PayLater',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {  test: /\.(js|jsx)$/, exclude: /node_modules/,   use: {
        loader: 'babel-loader',
      }, },
      
    ]
  },
  
  externals: {
    react: "react"
  },

};
