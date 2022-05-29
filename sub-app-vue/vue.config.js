const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    port: 9001,
    headers: {
      // 子应用需要支持跨域，这样主应用才可以访问到其静态资源（js/css...）
      'Access-Control-Allow-Origin': '*'
    }
  }
})
