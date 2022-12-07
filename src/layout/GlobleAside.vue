<template>
  <div class="on-off">
    <i class="fas fa-outdent" @click="onOff(1)" v-show="!isCollapse"></i>
    <i class="fas fa-indent" @click="onOff(0)" v-show="isCollapse"></i>
  </div>
  <el-menu
    active-text-color="#3b82f6"
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <MenuTree :routerList="routers"></MenuTree>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MenuTree from "./MenuTree.vue";
import routers from "@/data/links";

const isCollapse = ref(true);
// 展开菜单
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
// 收起菜单
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const onOff = (flag: number) => {
  isCollapse.value = flag === 1 ? true : false;
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
  height: calc(100% - 31px);
  overflow: auto;
}
.on-off {
  height: 30px;
  line-height: 30px;
  border-top: $gBorderColor 1px solid;
  color: #4c5157;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  /* left: 0; */
  .fas {
    cursor: pointer;
  }
}
</style>
