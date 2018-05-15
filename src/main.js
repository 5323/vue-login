// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' //引入vue-resource 推荐使用axios
import { rootWord } from './util/util' //工具文件引入 按需加载方法
import './assets/css/reset.css' //reset引入 webpack版本不同会导致引入失败

Vue.config.productionTip = false
Vue.use(VueResource) //使用vue-resource
rootWord() //使用工具方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
