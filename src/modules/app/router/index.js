// Vue
import { createRouter, createWebHistory } from "vue-router";

// Layout
import { AppMainLayout } from "../components/layout";

// Common
import { AppCommonNotFound } from "../components/common";

// Pages
import HomeIndex from "@/modules/home/pages/HomeIndex.vue";
import HomeDetail from "@/modules/home/pages/HomeDetail.vue";
import HomeEdit from "@/modules/home/pages/HomeEdit.vue";

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
      {
        name: "HomeDetail",
        path: "detail/:id",
        component: HomeDetail,
      },
      {
        name: "HomeEdit",
        path: "edit/:id",
        component: HomeEdit,
      },
    ],
  },
  {
    // 404
    path: "/:catchAll(.*)",
    component: AppCommonNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
