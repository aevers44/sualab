module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "/public/",
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: __dirname + "/public/",
    historyApiFallback: true,
  },

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
      },
    ],
  },
};
