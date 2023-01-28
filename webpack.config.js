const path = require('path')
const fse = require('fs-extra');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCSSPlugins = 
    // list of plugins we need
    require('postcss-import');
    require('postcss-simple-vars');
    require('postcss-mixins');
    require('postcss-nested');
    require('autoprefixer');

let currentTask = 'dev'
class RunAfterCompile{
  apply(compiler){
    compiler.hooks.done.tap('copy imgs', function(){
      fse.copySync('./app/assets/images', './docs/assets/images')
    })
  }
}
let pages = fse.readdirSync('./app').filter((file)=>{
  return file.endsWith('.html');
}).map((page)=>{
  return new HtmlWebpackPlugin({
    filename: page,
    template: `./app/${page}`,
    minify: false,
  })
})
let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: [postCSSPlugins, require.resolve('postcss-simple-vars'),
  require.resolve('postcss-nested'), require.resolve('autoprefixer'), postCSSPlugins({ myOption: true })]}}}]
}
let config = {
  entry: './app/assets/scripts/App.js' ,
  plugins: pages,
  module: {
    rules:[
        //?how to tell webpack to do something different 
        cssConfig,
        {
          test:/\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react','@babel/preset-env']
            }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          },
        ]
      }
}
if(currentTask === 'build'){
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js', 
    path: path.resolve(__dirname, 'docs')
}
  config.mode = "production"
  config.optimization = {
    splitChunks: {chunks:'all'}
  }
  config.plugins.push(
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
    )
}
if(currentTask === 'dev'){
  cssConfig.use.unshift("style-loader")
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  }
  config.devServer = {
    static: path.join(__dirname, 'app'),
    hot: true, 
    port: 3000,
    host: '0.0.0.0',
  }
  config.mode = "development"
}
module.exports = config