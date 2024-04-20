// Vue
import { createRouter, createWebHistory } from "vue-router";

// Layout
import { AppMainLayout } from "../components/layout";

// Common
import { AppCommonNotFound } from "../components/common";

// Pages
import HomeIndex from "@/modules/home/pages/HomeIndex.vue";

const routes = [
  {
    path: "/",
    component: AppMainLayout,
    children: [
      {
        name: "HomeIndex",
        path: "",
        component: HomeIndex,
      },
    ],
  },
  // 404
  {
    path: "/:catchAll(.*)",
    component: AppCommonNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
