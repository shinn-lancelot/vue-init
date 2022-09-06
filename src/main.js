import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './app.vue'
import routes from '~pages'

import 'uno.css'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(head)
app.use(router)
app.mount('#app')
