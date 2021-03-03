const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js"],
  },
  externals: {
    // react: {
    //   commonjs: "react",
    //   commonjs2: "react",
    //   amd: "React",
    //   root: "React",
    // },
    // "react-dom": {
    //   commonjs: "react-dom",
    //   commonjs2: "react-dom",
    //   amd: "ReactDOM",
    //   root: "ReactDOM",
    // },
  },
  entry: "./js/surface_lib.js",
  output: {
    filename: "surface_lib.js",
    path: path.resolve(__dirname, "../priv"),
    library: "surface_lib",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [],
};