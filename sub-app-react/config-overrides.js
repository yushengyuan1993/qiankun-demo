const { name } = require('./package')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.globalObject = 'window'
    config.output.publicPath = '//localhost:9002/'

    return config
  },
  
  devServer: (_) => {
    const config = _

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    }
    config.historyApiFallback = true
    config.hot = false
    config.watchContentBase = false
    config.liveReload = false

    return config
  }

  // devServer: (configFunction) => {
  //   return function(proxy, allowedHost) {
  //     const config = configFunction(proxy, allowedHost)
      
  //     config.port = '9002'
  //     config.headers = {
  //       "Access-Control-Allow-Origin": '*'
  //     }

  //     return config
  //   }
  // }
}