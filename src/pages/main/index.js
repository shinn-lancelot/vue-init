import Vue from 'vue'
import App from './App'
import router from 'router/main-router'
import 'common/scss/reset'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
