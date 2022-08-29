import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/:notFound(.*)',
    redirect : '/'
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
