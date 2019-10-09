import Vue from 'vue'
import App from './App'
import router from 'router/main-router'
import store from 'store/main-store'
import 'common/scss/reset'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
