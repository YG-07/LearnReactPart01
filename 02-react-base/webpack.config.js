const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//插件打包html的插件对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), //源文件绝对路径
  filename: 'index.html'  //打包的内存文件名称
})

//向外暴露一个打包配置对象
module.exports = {
  // development开发时打包，production生产时打包(js丑化)
  mode: 'development',
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.jsx'],
    alias:{
      '@': path.join(__dirname, './src')
    }
  }
}