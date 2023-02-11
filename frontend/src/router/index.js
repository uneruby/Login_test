import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import { authStore } from '../stores/userAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const Store = authStore()
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!Store.isLogin){
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath
        }
      }
      )
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router
