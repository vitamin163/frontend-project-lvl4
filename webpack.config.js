// @ts-check
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const conf = {
    mode: isProduction || 'development',

    entry: [
      `${__dirname}/src/index.js`,
    ],

    externals: {
      gon: 'gon',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/dist/public`,
      publicPath: '/assets/',
    },
    devServer: {
      overlay: true,
      contentBase: `${__dirname}/dist/public`,
    },
    devtool: isProduction ? 'source-map' : 'eval-sourcemap',
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
  };
  console.log(options.mode);
  console.log(conf.mode);
  console.log(conf.module.rules);
  return conf;
};
