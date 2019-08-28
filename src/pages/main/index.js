import Vue from 'vue'
import App from './app'
import router from 'router/main-router'
import 'common/scss/reset'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
