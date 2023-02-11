import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:3000/'
  })

app.use(pinia)
app.use(router)

app.mount('#app')
