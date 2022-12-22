import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ele
import ElementPlus from "element-plus";
// ele icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// vex table（因为设计中包含一些可编辑表格，el-table-v2虽也具有编辑功能，但达不到项目应用标准）
import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'
import "./styles/vxetable/index.scss";

// normalize
import "normalize.css/normalize.css";
// ele css
import "element-plus/dist/index.css";
// ele css 暗黑模式
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/element/dark.scss";
// font-awesome icons
import "@fortawesome/fontawesome-free/css/all.min.css";
// animate
import "animate.css";
// self styles
import "./styles/index.scss";

// my icons
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
import '@/icons' // icon

const app = createApp(App);
app.component('svg-icon', SvgIcon);

// 注册 ele icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store).use(router).use(ElementPlus).use(VXETable).mount("#app");

// ⚠ 注意 !!!
// 项目主要使用 element-plus 开发，使用 vxe-table 表格功能补充；
// 普通表格使用 el-table，可编辑表格统一使用 vxe-table 的 vxe-grid 组件。可编辑表格中的表单元素使用 element-plus，如 el-input；
// 原因：因为项目是暗黑模式的，现有代码对 element-plus 的主题色进行了整体覆盖，而vxe-table只对表格基本样式进行了覆盖，使用vxe-table的非表格元素将会出现浅色。
