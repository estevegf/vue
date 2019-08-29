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
      component: Home,
      meta: {
        title: "Home - Vue"
      }
    },
    {
      path: "/education",
      name: "education",
      // route level code-splitting
      // this generates a separate chunk (education.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "education" */ "./views/Education.vue"),
      meta: {
        title: "Education - Vue"
      }
    }
  ]
});
