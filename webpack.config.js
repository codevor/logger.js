const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const libraryName = 'logger';

module.exports = {
  mode,
  entry: {
    [libraryName]: path.resolve(__dirname, 'src/index.js'),
    [`${libraryName}.min`]: path.resolve(__dirname, 'src/index.js')
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    library: libraryName,
    libraryTarget: 'umd',
    filename: '[name].js',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.json', '.js']
  }
};
