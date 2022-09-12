import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from '~pages'

// 如果不用Unocss，可以使用scss。common/scss目录下包含一些初始样式
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const pinia = createPinia()

app.use(head)
app.use(router)
app.use(pinia)
app.mount('#app')
