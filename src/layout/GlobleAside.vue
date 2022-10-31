<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <div class="on-off">
    <i class="fas fa-outdent" @click="onOff(1)" v-show="!isCollapse"></i>
    <i class="fas fa-indent" @click="onOff(0)" v-show="isCollapse"></i>
  </div>
  <el-menu active-text-color="#3b82f6" text-color="#abb4bc" background-color="#343a40" default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>快速构建页面工具</span>
      </template>
      <el-menu-item index="1-1">规范表格快速生成</el-menu-item>
      <el-menu-item index="1-2">规范表单快速生成</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>示例页面</span>
      </template>
      <el-menu-item index="2-1">Three.js展示3D模型</el-menu-item>
      <el-menu-item index="2-2">Echarts地球</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const onOff = (flag: number) => {
  isCollapse.value = flag === 1 ? true : false;
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.on-off {
  height: 30px;
  line-height: 30px;
  border-top: #3d4348 1px solid;
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
