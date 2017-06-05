import Vue from 'vue'
import Router from 'vue-router'
import myHello from '@/components/Hellome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myHello',
      component: myHello
    }
  ]
})
