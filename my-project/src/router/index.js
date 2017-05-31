// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入Hello组件
import Hello from '@/components/Hello'
// 引入page1组件
import page1 from '@/components/page1'

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

export default router
