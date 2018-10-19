import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/index.vue";
import Profile from "./views/Profile/index.vue";
import Contact from "./views/Contact/index.vue";
import Portfolio from "./views/Portfolio/index.vue";
import assets18 from "./views/Project/1.vue";
import chi19 from "./views/Project/2.vue";
import menupedia from "./views/Project/3.vue";
import aiprojects from "./views/Project/4.vue";
import courseprojects from "./views/Project/5.vue";
import graphicsdesign from "./views/Project/6.vue";
import aaai19 from "./views/Project/7.vue";
import wallcontroller from "./views/Project/8.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: {
        default: Contact
      }
    },
    {
      path: "/profile",
      name: "Profile",
      components: {
        default: Profile
      }
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      components: {
        default: Portfolio
      }
    },
    {
      path: "/portfolio/assets18",
      name: "assets18",
      components: {
        portfolio: assets18
      }
    },
    {
      path: "/portfolio/chi19",
      name: "chi19",
      components: {
        portfolio: chi19
      }
    },
    {
      path: "/portfolio/menupedia",
      name: "menupedia",
      components: {
        portfolio: menupedia
      }
    },
    {
      path: "/portfolio/aiprojects",
      name: "aiprojects",
      components: {
        portfolio: aiprojects
      }
    },
    {
      path: "/portfolio/courseprojects",
      name: "courseprojects",
      components: {
        portfolio: courseprojects
      }
    },
    {
      path: "/portfolio/graphicsdesign",
      name: "graphicsdesign",
      components: {
        portfolio: graphicsdesign
      }
    },
    {
      path: "/portfolio/aaai19",
      name: "aaai19",
      components: {
        portfolio: aaai19
      }
    },
    {
      path: "/portfolio/wallcontroller",
      name: "wallcontroller",
      components: {
        portfolio: wallcontroller
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { x: 0, y: 0 };
  }
});
