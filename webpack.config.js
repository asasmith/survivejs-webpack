const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    // display onlun errors to reduce the amount of output
    stats: `errors-only`,

    // Parse host and port from env to allow customization.
    // If you use Docker, Vagrant or Cloud9, set host: options.host || "0.0.0.0";
    // 0.0.0.0 is available to all network devices unlike default `localhost`.
    host: process.env.HOST, // defaults to `localhost`
    port: process.env.PORT, // defaults to 8080
    open: false, // if true open page in browser on server start
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Webpack Demo`,
    }),
  ],
}