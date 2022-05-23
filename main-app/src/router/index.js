import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Index',
    path: '/',
    redirect: {
      name: 'MainHome'
    }
  },
  {
    name: 'MainHome',
    path: '/main-app',
    component: () => import('@/pages/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes
})

export default router
