import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import links from "@/data/links";

// 递归方式引入路由
const getRulesRouterData: any = [];
const madeRouters = (links: any) => {
  for (const item of links) {
    getRulesRouterData.push({
      path: item.rPath,
      name: item.rName,
      component: () => import(/* webpackChunkName: "no setting" */ '@/views/' + item.rComponent),
    });
    if (item.children) {
      madeRouters(item.children);
    }
  }
};
madeRouters(links);

console.log(getRulesRouterData, 'getRulesRouterData');

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
