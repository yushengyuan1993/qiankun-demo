import { registerMicroApps, start } from 'qiankun'

export const startupMicroApps = () => {
  const apps = [
    {
      name: 'sub-app-vue', // app name registered
      entry: '//localhost:9001', // 默认会加载这个HTML，解析里面的js，动态的执行，所以子应用必须支持跨域
      container: '#app-vue',
      activeRule: '/sub-app-vue',
      props: {
        author: 'yushare',
        sub: 'vue'
      }
    },
    {
      name: 'sub-app-react', // app name registered
      entry: '//localhost:9002', // 默认会加载这个HTML，解析里面的js，动态的执行，所以子应用必须支持跨域
      container: '#app-react',
      activeRule: '/sub-app-react',
      props: {
        author: 'yushare',
        sub: 'react'
      }
    }
  ]
  registerMicroApps(apps, {
    beforeMount(apps) {
      console.log(apps)
    }
  })
  
  start()
}
