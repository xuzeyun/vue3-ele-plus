import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "normalize.css/normalize.css";
import "element-plus/dist/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
