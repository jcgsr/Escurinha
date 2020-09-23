import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Sobre from './components/Sobre'

Vue.use(Router)

export default new Router({
   mode: "history",
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
   }]
})