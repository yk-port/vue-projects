import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";
import Tab from "../views/Tab.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/tab",
    name: "Tab",
    component: Tab,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
