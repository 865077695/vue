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

const router = new Router({
  routes: [
    // 设置任意路径时跳转至home
    {path: '*', redirect: '/Home'},
    {
      path: '/Home',
      name: '首页',
      component: Home
    },
    {
      path: '/my',
      name: '个人中心',
      component: my
    },
    {
      path: '/video-class',
      name: '视频列表',
      component: videoClass
    },
    {
      path: '/questions',
      name: '题库',
      component: Questions
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
