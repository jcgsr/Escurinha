import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Home from "./components/Home";
import Fotos from "./components/Fotos";
import Fisio from "./components/Fisio";
import Pilates from "./components/Pilates";
import Acupuntura from "./components/Acupuntura";

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
      {
         path: "/fisio",
         name: "fisio",
         component: Fisio,
         meta: {
            auth: false,
            title: "Fisioterapia",
         },
      },
      {
         path: "/pilates",
         name: "pilates",
         component: Pilates,
         meta: {
            auth: false,
            title: "Pilates",
         },
      },
      {
         path: "/acupuntura",
         name: "acupuntura",
         component: Acupuntura,
         meta: {
            auth: false,
            title: "Acupuntura",
         },
      },
   ],
});
