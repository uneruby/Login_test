import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:3000/'
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
