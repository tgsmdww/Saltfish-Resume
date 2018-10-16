import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import gcLine from "./components/gc-line.vue";

Vue.component('gc-line',gcLine);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
