const path = require('path')

module.exports = {
  // 配置方式一 cli提供的属性
  outputDir: './build',
  publicPath: './',
  // 配置方式二 和webpack属性完全一致，最后进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
  // 配置方式三 链式编程
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('components', '@/components')
  }
}
