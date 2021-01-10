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
      component: Home,
      meta: {
         auth: false,
         title: 'Clara Azevedo'
      }
   }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
      meta: {
         auth: false,
         title: 'Sobre'
      }
   }, {
      path: '/cursos',
      name: 'cursos',
      component: Cursos,
      meta: {
         auth: false,
         title: 'Cursos'
      }
   }, {
      path: '/contatos',
      name: 'contatos',
      component: Contatos,
      meta: {
         auth: false,
         title: 'Contatos'
      }
   }, {
      path: '/local',
      name: 'local',
      component: Local,
      meta: {
         auth: false,
         title: 'Localização'
      }
   }]
})