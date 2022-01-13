<<<<<<< HEAD
import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
=======
import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
>>>>>>> 6b562412f815fd20e39a07ae51d730066a686223
}).$mount("#app");