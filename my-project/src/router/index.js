// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入首页、课程、题库组件
import Home from '@/components/Home'// shouye
import my from '@/components/my-center'// wode
import videoClass from '@/components/video-class'// kecheng
import Questions from '@/components/questions'// tiku
// 引入store
import store from '@/store'

Vue.use(Router)

const routerList = [
  {path: '*', redirect: '/Home', number: 0}, // 设置任意路径时跳转至home
  {path: '/Home', name: '首页', component: Home, number: 1},
  {path: '/my', name: '个人中心', component: my, number: 4},
  {path: '/video-class', name: '视频列表', component: videoClass, number: 2},
  {path: '/questions', name: '题库', component: Questions, number: 3}
]

const router = new Router({
  routes: routerList
})

router.beforeEach(function (to, from, next) {
  // 当路由开始之前，触发state的updateLoadingStatus，并传入参数isLoading
  // var a = routerList.filter(function (item, idx) {
  //   if (to.name === item.name) {
  //     return true
  //   }
  // })
  // var b = routerList.filter(function (item, idx) {
  //   if (from.name === item.name) {
  //     return true
  //   }
  // })
  // if (b[0]) {
  //   var number = a[0].number - b[0].number
  // }
  // store.commit('directionChange', {direction: number})
  console.log(to.name)
  store.commit('updateLoadingStatus', {
    isLoading: true,
    title: to.name
  })
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false, title: to.name})
})
export default router
