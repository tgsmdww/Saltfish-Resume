import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import gcLine from "./components/gc-line.vue";
import gcCopyright from "./components/gc-copyright.vue";

Vue.component("gc-line", gcLine);
Vue.component("gc-copyright", gcCopyright);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
