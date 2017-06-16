// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入首页、课程、题库组件
import Home from '../components/Home'// shouye

// 引入store
import store from '@/store'

Vue.use(Router)

const routerList = [
  {path: '*', redirect: '/Home', number: 0}, // 设置任意路径时跳转至home
  {path: '/Home', name: '首页', component: Home, number: 1},
  {path: '/my', name: '个人中心', component: view('my-center'), number: 4},
  {path: '/video-class', name: '视频列表', component: view('video-class'), number: 2},
  {path: '/questions', name: '题库', component: view('questions'), number: 3},
  {path: '/test', name: '测试', component: view('test'), number: 5}
]

const router = new Router({
  routes: routerList
})

router.beforeEach(function (to, from, next) {
  // 当路由开始之前，触发state的updateLoadingStatus，并传入参数isLoading
  store.commit('updateLoadingStatus', {
    isLoading: true,
    title: to.name
  })
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false, title: to.name})
})

// 异步加载路由的方法，可以首屏不用这个方法，其他屏用这个
function view (name) {
  return resolve => {
    require(['../components/' + name], resolve)
  }
};

export default router
