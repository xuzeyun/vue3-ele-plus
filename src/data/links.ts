/*
  本文件 供 路由 / 菜单 同时使用
  
  menuId        保持唯一，菜单使用
  name          菜单名称，菜单使用
  icon          菜单图标，菜单使用（推荐一级路由使用，滥用页面看起来混乱）
  
  rName         路由名称，路由使用
  rPath         路由地址，路由使用
  rComponent    组件路径，路由使用（点击路由要跳转的页面对应的vue文件）
  
  children      子菜单/子路由
*/

export default [
  { menuId: "1", name: "首页", icon: "House", rName: "home", rPath: "/home", rComponent: "home/index.vue" },
  {
    menuId: "2",
    name: "计划任务管理",
    icon: "Calendar",
    rName: "jhrwgl",
    rPath: "/jhrwgl",
    rComponent: "",
    children: [
      { menuId: "2-1", name: "原始计划管理", rName: "jhrwgl-ysjhgl", rPath: "/jhrwgl/ysjhgl", rComponent: "jhrwgl/ysjhgl/index.vue" },
      { menuId: "2-2", name: "计划任务管理", rName: "jhrwgl-jhrwgl", rPath: "/jhrwgl/jhrwgl", rComponent: "jhrwgl/jhrwgl/index.vue" },
    ],
  },
  {
    menuId: "3",
    name: "接收清点过程管理",
    icon: "MessageBox",
    rName: "jsqdgcgl",
    rPath: "/jsqdgcgl",
    rComponent: "",
    children: [
      { menuId: "3-1", name: "接收数据管理", rName: "jsqdgcgl-jssjgl", rPath: "/jsqdgcgl/jssjgl", rComponent: "jsqdgcgl/jssjgl/index.vue" },
      { menuId: "3-2", name: "处置类型处理", rName: "jsqdgcgl-czlxcl", rPath: "/jsqdgcgl/czlxcl", rComponent: "jsqdgcgl/czlxcl/index.vue" },
      { menuId: "3-3", name: "收处计划管理", rName: "jsqdgcgl-scjhgl", rPath: "/jsqdgcgl/scjhgl", rComponent: "jsqdgcgl/scjhgl/index.vue" },
      { menuId: "3-4", name: "清点管理", rName: "jsqdgcgl-qdgl", rPath: "/jsqdgcgl/qdgl", rComponent: "jsqdgcgl/qdgl/index.vue" },
    ],
  },
  {
    menuId: "4",
    name: "处置作业过程管理",
    icon: "Coordinate",
    rName: "czzygcgl",
    rPath: "/czzygcgl",
    rComponent: "",
    children: [
      { menuId: "4-1", name: "异常告警管理", rName: "czzygcgl-ycgjgl", rPath: "/czzygcgl/ycgjgl", rComponent: "czzygcgl/ycgjgl/index.vue" },
      { menuId: "4-2", name: "残渣管理", rName: "czzygcgl-czgl", rPath: "/czzygcgl/czgl", rComponent: "czzygcgl/czgl/index.vue" },
    ],
  },
  {
    menuId: "5",
    name: "配置管理",
    icon: "Operation",
    rName: "pzgl",
    rPath: "/pzgl",
    rComponent: "",
    children: [
      { menuId: "5-1", name: "产能策略配置管理", rName: "pzgl-cnclpzgl", rPath: "/pzgl/cnclpzgl", rComponent: "pzgl/cnclpzgl/index.vue" },
      { menuId: "5-2", name: "时间计划配置", rName: "pzgl-sjjhpz", rPath: "/pzgl/sjjhpz", rComponent: "pzgl/sjjhpz/index.vue" },
    ],
  },
  {
    menuId: "6",
    name: "基础数据",
    icon: "Coin",
    rName: "jcsj",
    rPath: "/jcsj",
    rComponent: "",
    children: [
      { menuId: "6-1", name: "单位管理", rName: "jcsj-dwgl", rPath: "/jcsj/dwgl", rComponent: "jcsj/dwgl/index.vue" },
      { menuId: "6-2", name: "区域管理", rName: "jcsj-qygl", rPath: "/jcsj/qygl", rComponent: "jcsj/qygl/index.vue" },
    ],
  },
  {
    menuId: "7",
    name: "系统管理",
    icon: "Setting",
    rName: "xtgl",
    rPath: "/xtgl",
    rComponent: "",
    children: [
      { menuId: "7-1", name: "人员管理", rName: "xtgl-rygl", rPath: "/xtgl/rygl", rComponent: "xtgl/rygl/index.vue" },
      { menuId: "7-2", name: "用户管理", rName: "xtgl-yhgl", rPath: "/xtgl/yhgl", rComponent: "xtgl/yhgl/index.vue" },
      { menuId: "7-3", name: "角色管理", rName: "xtgl-jsgl", rPath: "/xtgl/jsgl", rComponent: "xtgl/jsgl/index.vue" },
      { menuId: "7-4", name: "权限管理", rName: "xtgl-qxgl", rPath: "/xtgl/qxgl", rComponent: "xtgl/qxgl/index.vue" },
      { menuId: "7-5", name: "数据字典", rName: "xtgl-sjzd", rPath: "/xtgl/sjzd", rComponent: "xtgl/sjzd/index.vue" },
    ],
  },
];
