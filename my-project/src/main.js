// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
// 引入router文件夹下的index.js，可以简写为router（省略后面的/index.js）
import router from './router/index.js'
// 引入vux
// import { AlertPlugin, ToastPlugin } from 'vux'
// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
