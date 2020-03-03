import Vue from 'vue'
import App from './app'
import router from 'router/main-router'
import Store from 'store/main-store'
import FastClick from 'fastclick'
import 'common/scss/reset'
import 'common/scss/common'

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
	router,
	Store,
	render: h => h(App)
}).$mount('#app')
