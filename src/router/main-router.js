import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/main/views/home'
import Hello from 'pages/main/views/hello'
import process from 'process'

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/hello',
			name: 'hello',
			component: Hello
		}
	]
})

export default router