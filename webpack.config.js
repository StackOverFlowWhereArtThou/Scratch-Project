const path = require('path');

module.exports = {
  // target: 'node', // added this line to resolve fs issues --> https://webpack.js.org/concepts/targets/
  entry: './client/index.js',
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
