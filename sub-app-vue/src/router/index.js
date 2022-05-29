import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Index',
    path: '/',
    redirect: {
      name: 'AppHome'
    }
  },
  {
    name: 'AppHome',
    path: '/home',
    component: () => import('@/pages/home.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/pages/about.vue')
  }
]

const base = window.__POWERED_BY_QIANKUN__ ? '/sub-app-vue' : '/'

const router = createRouter({
  history: createWebHistory(base), // 路由模式
  routes
})

export default router
