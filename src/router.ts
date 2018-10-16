import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/index.vue";
import Profile from "./views/Profile/index.vue";
import Contact from "./views/Contact/index.vue";
import Portfolio from "./views/Portfolio/index.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: {
        default: Contact,
      }
    },
    {
      path: "/profile",
      name: "Profile",
      components: {
        default: Profile,
      }
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      components: {
        default: Portfolio,
      }
    },
  ]
});
