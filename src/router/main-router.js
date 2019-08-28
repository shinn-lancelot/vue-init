import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/main/views/Home'
import Hello from 'pages/main/views/Hello'
 
Vue.use(Router)
 
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
  ]
})
