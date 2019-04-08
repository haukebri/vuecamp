import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tickets",
      name: "tickets",
      component: () =>
        import(/* webpackChunkName: "tickets" */ "./views/Tickets.vue")
    },
    {
      path: "/location",
      name: "location",
      component: () =>
        import(/* webpackChunkName: "location" */ "./views/Location.vue")
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        import(/* webpackChunkName: "privacy" */ "./views/Privacy.vue")
    },
    {
      path: "/terms",
      name: "terms",
      component: () =>
        import(/* webpackChunkName: "terms" */ "./views/Terms.vue")
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: () =>
        import(/* webpackChunkName: "sponsors" */ "./views/Sponsors.vue")
    }
  ]
});
