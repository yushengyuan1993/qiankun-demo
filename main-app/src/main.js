import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { startupMicroApps } from './qiankun-base'
import './index.css'

const app = createApp(App)

app.use(router)

startupMicroApps()

app.mount('#app')
