import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2,
    },
  ]
})

export default router
