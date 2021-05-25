import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Home from "./components/Home";
import Fotos from "./components/Fotos";
// import Contatos from "./components/Contatos";
// import Local from "./components/Local";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
   mode: "history",
   linkExactActiveClass: "link-active",
   routes: [
      {
         path: "/",
         name: "home",
         component: Home,
         meta: {
            auth: false,
            title: "Clara Azevedo",
         },
      },
      {
         path: "/fotos",
         name: "fotos",
         component: Fotos,
         meta: {
            auth: false,
            title: "Fotos",
         },
      },
      // {
      //    path: "/contatos",
      //    name: "contatos",
      //    component: Contatos,
      //    meta: {
      //       auth: false,
      //       title: "Contatos",
      //    },
      // },
      // {
      //    path: "/local",
      //    name: "local",
      //    component: Local,
      //    meta: {
      //       auth: false,
      //       title: "Localização",
      //    },
      // },
   ],
});
