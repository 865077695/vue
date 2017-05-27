// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入Hello组件
import Hello from '@/components/Hello'//

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

export default router
