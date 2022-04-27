import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generator',
    name: 'Generator',
    component: () => import('@/views/Generator.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
