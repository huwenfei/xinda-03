import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import business from '../components/business.vue'
import List from '../components/list.vue'
import first from '../components/first.vue'
import second from '../components/second.vue'
import info from '../components/info.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/business',
      name: 'business',
      component: business,
      children:[
        {
          path:'first',
          component:first
        },
        {
          path:'second',
          component:second
        }
      ]
    },
    {
      path: '/info',
      name: 'Info',
      component: info,
      children:[
        {
          path:'register',
          component:register
        },
        {
          path:'login',
          component:login
        }
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
