// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入Home、Hello、page1组件
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import page1 from '@/components/page1'
// 引入store
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    // 设置任意路径时跳转至home
    {path: '*', redirect: '/Home'},
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    }
  ]
})

router.beforeEach(function (to, from, next) {
  // 当路由开始之前，触发state的updateLoadingStatus，并传入参数isLoading
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})
router.afterEach(function (to) {
  console.log(to.name)
  store.commit('updateLoadingStatus', {isLoading: false, title: to.name})
})
export default router
