import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = null

function render(props = {}) {
  const { container } = props

  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')

  console.log('app', app)
}

/**
 * 独立运行时，不使用 qiankun 加载应用
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * 导出生命周期钩子
 */
export async function bootstrap() {
  console.log('[sub-app-vue] bootstraped')
}

export async function mount(props) {
  console.log('[sub-app-vue] mounted')
  console.log('props: ', props)

  render(props)
}

export async function unmount(props) {
  console.log('[sub-app-vue] unmounted')
  console.log('props: ', props)

  // app.$destroy()
  app.unmount()
  // app.$el.innerHTML = ''
  // router = null
  app = null
}
