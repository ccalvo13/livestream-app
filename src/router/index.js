// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path: '/video-chat',
    name: 'Video Chat',
    component: () => import('@/components/VideoChat.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
