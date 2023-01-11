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
import { addSjjhpzgl, querySjjhpzglList, updateSjjhpzgl } from "@/api/pzgl";



// ================== 表格查询 ==================
onMounted(() => {
  getList();
});
const formInline = reactive({
  id: "",
  gzdjjg: "",
  sbysjg: "",
  tskzjg: "",
  sbswjg: "",
});

// 保存
const onSave = () => {
  ElMessageBox.confirm("确认保存 ？", "警告", {
    confirmButtonText: "是",
    cancelButtonText: "否",
    type: "warning",
  })
    .then(() => {
      if(formInline.id){
        updateSjjhpzgl(formInline).then((res) => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            getList();
          } else {
            ElMessage.error(res.msg);
          }
        });
      }else{
        addSjjhpzgl(formInline).then((res) => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            getList();
          } else {
            ElMessage.error(res.msg);
          }
        });
      }
      
    })
    .catch(() => {
      ElMessage.info("已取消");
    });

};

const getList = () => {
  querySjjhpzglList({}).then((res: any) => {
    let data = res.result[0];
    formInline.id = data.id;
    formInline.gzdjjg = data.gzdjjg;
    formInline.sbysjg = data.sbysjg;
    formInline.tskzjg = data.tskzjg;
    formInline.sbswjg = data.sbswjg;
  });
};
</script>

<style lang="scss" scoped>
.form-wrap{
  width: 30%;
}
</style>
