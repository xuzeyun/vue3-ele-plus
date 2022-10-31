<template>
  <div id="app">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside>
            <GlobelAside></GlobelAside>
          </el-aside>
          <el-container>
            <el-main>
              <router-view />
            </el-main>
            <el-footer>
              <GlobelFooter></GlobelFooter>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import GlobelFooter from "@/layout/GlobleFooter";
import GlobelAside from "@/layout/GlobleAside";
export default {
  components: {
    GlobelFooter,
    GlobelAside,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.el-header{
  height: 60px;
  background-color: fff;
  box-shadow: 2px 0 5px rgba($color: #ddd, $alpha: 1.0);
}
.el-aside{
  width: auto !important;
  background-color: #000;
  height: calc(100vh - 60px);
  position: relative;
}
.el-main{
  height: calc(100vh - 90px);
}
.el-footer{
  height: 30px !important;
  background-color: antiquewhite;
}
</style>
