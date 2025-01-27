import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import reviews from "@/router/route-groups/reviews";

const routes: Array<RouteRecordRaw> = [reviews];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
