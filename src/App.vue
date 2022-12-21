<template>
  <!-- 国际化 -->
  <el-config-provider :locale="locale">
    <div id="app">
      <div class="common-layout">
        <el-container>
          <!-- header -->
          <el-header>
            <GlobelHeader></GlobelHeader>
          </el-header>
          <!-- main-body -->
          <el-container>
            <!-- aside -->
            <el-aside>
              <GlobelAside></GlobelAside>
            </el-aside>
            <el-container>
              <!-- mian -->
              <el-main>
                <router-view />
              </el-main>
              <!-- footer -->
              <!-- <el-footer>
                <GlobelFooter></GlobelFooter>
              </el-footer> -->
            </el-container>
          </el-container>
        </el-container>
      </div>
    </div>
  </el-config-provider>
</template>

<script>
// ele plus 汉化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import GlobelHeader from "@/layout/GlobleHeader";
// import GlobelFooter from "@/layout/GlobleFooter";
import GlobelAside from "@/layout/GlobleAside";
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    GlobelHeader,
    // GlobelFooter,
    GlobelAside,
  },
  setup() {
    return {
      // 汉化
      locale: zhCn,
    }
  },
})


</script>

<style lang="scss">
@import "@/styles/variables.scss";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\5fae\8f6f\96c5\9ed1,Arial,sans-serif';
  // color: #2c3e50;
}
.el-header {
  height: 66px !important;
  line-height: 66px;
  background: url(~@/assets/images/header_bg.png) no-repeat center top;
}
.el-aside {
  width: auto !important;
  background-color: $gBodyBg;
  border-right: 1px solid $gBorderColor;
  height: calc(100vh - 66px);
  position: relative;
}
.el-main {
  height: calc(100vh - 66px);
}
.el-footer {
  height: 30px !important;
  background-color: antiquewhite;
}
</style>
