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
