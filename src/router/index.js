import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Login from '@/components/login/login1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
