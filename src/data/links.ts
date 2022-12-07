export default [
  { menuId: "1", name: "首页", path: "/home", component: "home/index.vue", icon: "House" },
  {
    menuId: "2",
    name: "计划任务管理",
    path: "/jhrwgl",
    component: "",
    icon: "Calendar",
    children: [
      { menuId: "2-1", name: "原始计划管理", path: "/jhrwgl/ysjhgl", component: "jhrwgl/ysjhgl/index.vue" },
      { menuId: "2-2", name: "计划任务管理", path: "/jhrwgl/jhrwgl", component: "jhrwgl/jhrwgl/index.vue" },
    ],
  },
  {
    menuId: "3",
    name: "接收清点过程管理",
    path: "/jsqdgcgl",
    component: "",
    icon: "MessageBox",
    children: [
      { menuId: "3-1", name: "接收数据管理", path: "/jsqdgcgl/jssjgl", component: "jsqdgcgl/jssjgl/index.vue" },
      { menuId: "3-2", name: "处置类型处理", path: "/jsqdgcgl/czlxcl", component: "jsqdgcgl/czlxcl/index.vue" },
      { menuId: "3-3", name: "收处计划管理", path: "/jsqdgcgl/scjhgl", component: "jsqdgcgl/scjhgl/index.vue" },
      { menuId: "3-4", name: "清点管理", path: "/jsqdgcgl/qdgl", component: "jsqdgcgl/qdgl/index.vue" },
    ],
  },
  {
    menuId: "4",
    name: "处置作业过程管理",
    path: "/czzygcgl",
    component: "",
    icon: "Coordinate",
    children: [
      { menuId: "4-1", name: "异常告警管理", path: "/czzygcgl/ycgjgl", component: "czzygcgl/ycgjgl/index.vue" },
      { menuId: "4-2", name: "残渣管理", path: "/czzygcgl/czgl", component: "czzygcgl/czgl/index.vue" },
    ],
  },
  {
    menuId: "5",
    name: "配置管理",
    path: "/pzgl",
    component: "",
    icon: "Operation",
    children: [
      { menuId: "5-1", name: "产能策略配置管理", path: "/pzgl/cnclpzgl", component: "pzgl/cnclpzgl/index.vue" },
      { menuId: "5-2", name: "时间计划配置", path: "/pzgl/sjjhpz", component: "pzgl/sjjhpz/index.vue" },
    ],
  },
  {
    menuId: "6",
    name: "基础数据",
    path: "/jcsj",
    component: "",
    icon: "Coin",
    children: [
      { menuId: "6-1", name: "单位管理", path: "/jcsj/dwgl", component: "jcsj/dwgl/index.vue" },
      { menuId: "6-2", name: "区域管理", path: "/jcsj/qygl", component: "jcsj/qygl/index.vue" },
    ],
  },
  {
    menuId: "7",
    name: "系统管理",
    path: "/xtgl",
    component: "",
    icon: "Setting",
    children: [
      { menuId: "7-1", name: "人员管理", path: "/xtgl/rygl", component: "xtgl/rygl/index.vue" },
      { menuId: "7-2", name: "用户管理", path: "/xtgl/yhgl", component: "xtgl/yhgl/index.vue" },
      { menuId: "7-3", name: "角色管理", path: "/xtgl/jsgl", component: "xtgl/jsgl/index.vue" },
      { menuId: "7-4", name: "权限管理", path: "/xtgl/qxgl", component: "xtgl/qxgl/index.vue" },
      { menuId: "7-5", name: "数据字典", path: "/xtgl/sjzd", component: "xtgl/sjzd/index.vue" },
    ],
  },
];
