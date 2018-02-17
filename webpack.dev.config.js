var webpack = require("webpack");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "./src/index.js",
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/only-dev-server",
  ],

  output: {
    path: "/",
    filename: "bundle.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    hot: true,
    filename: "bundle.js",
    publicPath: "/",
    contentBase: "./public/",
    historyApiFallback: true,
    proxy: {
      "**": "http://localhost:3000",
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-inline-loader",
        options: {
          classPrefix: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              minimize: true,
              localIdentName: "[name]__[local]__[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [require("precss"), require("autoprefixer"), require("postcss-flexbugs-fixes")];
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"],
        },
      },
    ],
  },
};
