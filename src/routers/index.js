import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import { _import } from '@/utils'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: _import('Layout/Home'),
        meta: {
          title: '首页',
          icon: 'home'
        }
      }
    ]
  },
  {
    path: '/Login',
    component: _import('Layout/Login'),
    hidden: true
  },
  {
    path: '/404',
    component: _import('Layout/404'),
    hidden: true
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
