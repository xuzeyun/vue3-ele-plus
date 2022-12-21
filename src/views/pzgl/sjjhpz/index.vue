<template>
  <div class="g-flex-col">
    <div class="g-flex-center">
      <div class="form-wrap">
        <el-form :model="formInline" class="demo-form-inline">
          <el-form-item label="工作对接间隔（天）">
            <el-input v-model="formInline.gzdjjg" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="设备运输间隔（天）">
            <el-input v-model="formInline.sbysjg" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="调试开展间隔（天）">
            <el-input v-model="formInline.tskzjg" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="设备收尾间隔（天）">
            <el-input v-model="formInline.sbswjg" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col align="center">
            <el-button type="primary" @click="onSave"><span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>保存</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { reactive, ref, onMounted } from "vue";
// api
// import { queryScjhglListPage, deleteScjhgl } from "@/api/jsqdgcgl";



// ================== 表格查询 ==================
onMounted(() => {
  getList();
});
const formInline = reactive({
  gzdjjg: "",
  sbysjg: "",
  tskzjg: "",
  sbswjg: "",
});

// 重置
const onSave = () => {
  console.log("click");
};

const getList = () => {
  // queryScjhglListPage({}).then((res) => {
  //   tableData.value = res.result.records;
  // });
};
</script>

<style lang="scss" scoped>
.form-wrap{
  width: 30%;
}
</style>
