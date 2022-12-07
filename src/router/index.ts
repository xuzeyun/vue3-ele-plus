import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import links from "@/data/links";

// 循环方式引入路由
const getRulesRouterData: any = [];
const madeRouters = (links: any) => {
  links.forEach((item: any, index: number) => {
    getRulesRouterData.push({
      path: item.path,
      name: item.path,
      component: () => import(/* webpackChunkName: "czgl" */ "@/views/" + item.component),
    });
    if (item.children) {
      madeRouters(item.children);
    }
  });
};
madeRouters(links);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  ...getRulesRouterData,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
