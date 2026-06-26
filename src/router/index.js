import { createRouter, createWebHistory } from "vue-router";

import AreaList from "../views/AreaList.vue";
import AreaPage from "../views/AreaPage.vue";
import SpotDetail from "../views/SpotDetail.vue";

const routes = [
  {
    path: "/",
    redirect: "/areas",
  },
  {
    path: "/areas",
    component: AreaList,
  },
  {
    path: "/areas/:area",
    component: AreaPage,
  },
  {
    path: "/areas/:area/spots/:id",
    component: SpotDetail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;