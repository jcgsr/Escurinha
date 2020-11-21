import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Cursos from './components/Cursos'
import Contatos from './components/Contatos'
import Local from './components/Local'

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
   }, {
      path: '/cursos',
      name: 'cursos',
      component: Cursos
   }, {
      path: '/contatos',
      name: 'contatos',
      component: Contatos
   }, {
      path: '/local',
      name: 'local',
      component: Local
   }]
})