/*
 * @功能描述:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'app': './src/main.ts'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // {
          //   loader: 'style-loader', // TODO 会报错
          // },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
  optimization: { // 拆包
    splitChunks: {
      chunks: 'all'
    },
  },
  devServer: {
    // contentBase: resolve(__dirname, "build"),
    port: 8001,
    compress: true,
    // open: true,
    //开启HMR功能 devServer上支持了HMR
    //当更改了webpack配置后，新配置要想生效，必须重启webpack服务
    hot: true
  },
  devtool: 'hidden-source-map',
}
