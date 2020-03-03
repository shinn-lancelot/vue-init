import Vue from 'vue'
import App from './app'
import router from 'router/main-router'
import store from 'store/main-store'
import FastClick from 'fastclick'
import 'common/scss/reset'
import 'common/scss/common'

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
