import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home' //导入home组件
import Login from '@/components/login/login1' //导入login组件

Vue.use(Router)

export default new Router({
  routes: [
    { //设置默认主页
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
