// 菜单数据采用树形数据机构，推荐子菜单不设置icon属性
export default [
  // 一级菜单
  {
    menuId: "001",
    name: "UI框架",
    path: "/uifream",
    component: "layout",
    icon: "book",
    children: [
      // 二级菜单
      {
        menuId: "001001",
        name: "elementUI",
        path: "/uifream/elementui",
        component: "layout",
        icon: "book",
      },
      {
        menuId: "001002",
        name: "esayUI",
        path: "/uifream/esayui",
        component: "/uifream/esayui",
        icon: "book",
        children: [
          // 三级菜单
          {
            menuId: "001002001",
            name: "esayUI1",
            path: "/uifream/esayui/esayui1",
            component: "/uifream/esayui/esayui1",
            icon: "book",
          },
          {
            menuId: "001002002",
            name: "esayUI2",
            path: "/uifream/esayui/esayui2",
            component: "/uifream/esayui/esayui2",
            icon: "money",
          },
        ],
      },
    ],
  },
  // 一级菜单
  {
    menuId: "002",
    name: "css3",
    path: "/css3",
    component: "layout",
    icon: "css",
  },
];
