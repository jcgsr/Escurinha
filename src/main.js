import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Meta from "vue-meta";

import router from "./router";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "materialize-css";

import * as VueAos from "vue-aos";
Vue.use(VueAos);

import AOS from "aos";
import "aos/dist/aos.css";

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init();
	},
	router,
	render: (h) => h(App),
}).$mount("#app");
