import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";
import Tab from "../views/Tab.vue";
import Modal from "../views/Modal.vue";
import Carousel from "../views/Carousel.vue";
import Nav from "../views/Nav.vue";
import Search from "../views/Search.vue";

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
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
