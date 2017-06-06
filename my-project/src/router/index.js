// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入Hello组件
import Hello from '@/components/Hello'
// 引入page1组件
import page1 from '@/components/page1'
// 引入store
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
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
  console.log(1)
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
export default router
