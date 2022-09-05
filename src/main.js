import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './app.vue'

import 'uno.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')