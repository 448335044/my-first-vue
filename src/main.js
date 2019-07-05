// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'

/*1.1导入路由的包*/
import VueRouter from 'vue-router'
/*1.2 安装路由*/
Vue.use(VueRouter)

Vue.use(VueResource)
/*1.3 导入自己的router。js路由模块*/
import router from './router.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  /*1.4挂载到vm实例上*/
  router
})
