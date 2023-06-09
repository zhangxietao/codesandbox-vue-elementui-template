const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath指定静态资源前缀
    // publicPath:'https://cdn.xxxx.com/assets/',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.vue', '.js'],
    alias: {
      // 'vue$': 'vue/dist/vue.common.js',
      '@': path.resolve('src') // 通过这里的配置，@符号等同于src
    }
  },
};
