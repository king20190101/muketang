import Vue from 'vue'
import Router from 'vue-router'
import lol from './views/lol.vue'

import change from './views/change.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/lol',
      name: 'lol',
      component: lol
    },
    {
      path: '/',
      name: 'change',
      component: change
    },
  ]
})
