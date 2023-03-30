import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ThankYou from '../views/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ]
})

export default router
