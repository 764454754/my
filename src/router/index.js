import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home.vue'
import vip from '@/components/vip.vue'
import car from '@/components/car.vue'
import search from '@/components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/vip',component:vip},
    {path:'/car',component:car},
    {path:'/search',component:search}
  ]
})
