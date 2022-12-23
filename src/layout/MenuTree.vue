<template>
  <template v-for="item in props.routerList">
    <el-sub-menu v-if="item.children" :index="item.menuId" :key="item.menuId">
      <!-- 菜单 -->
      <template #title>
        <el-icon v-if="item.icon">
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <MenuTree :routerList="item.children"></MenuTree>
    </el-sub-menu>
    <el-menu-item v-else :index="item.menuId" :key="'c' + item.menuId" @click="goToPage(item.rName, item.rPath)">
      <el-icon v-if="item.icon">
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import {useRouter} from 'vue-router'
const props = defineProps<{
  routerList: any;
}>();
const router = useRouter();
const goToPage = (name: string, path: string) => {
  router.push(path);
};
</script>
