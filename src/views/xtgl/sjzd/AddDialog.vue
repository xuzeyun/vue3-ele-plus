<template>
  <el-dialog v-model="dialogVisible" :title="(dialogType === 1 ? '新增' : '修改') + '字典数据'" width="26%" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="g-box">
        <el-form
          :model="formInline"
          class="demo-form-inline"
          label-width="100"
        >
          <el-form-item label="字典类型名称">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="字典类型代码">
            <el-input v-model="formInline.code" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="是否开启">
            <span class="el-switch-left">关闭</span>
            <el-switch v-model="formInline.status" />
            <span class="el-switch-right">开启</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="saveHandle">
          <span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>
          保存</el-button
        >
        <el-button type="info" :icon="CircleClose" @click="close">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { CircleCheck, CircleClose } from "@element-plus/icons-vue";
import { reactive, ref, defineProps, defineExpose, onMounted, defineEmits, nextTick } from "vue";
import { ElMessage } from "element-plus";
import Save from "@/assets/svg/save.svg";

import { addZdlxgl, updateZdlxgl } from "@/api/xtgl";
import { forEach } from "lodash";

const props = defineProps<{
  dialogType: any;
  curRow: any;
}>();

onMounted(() => {
  // 修改状态下 获取信息
  if (props.dialogType === 2) {
    getUpdateInfo();
  }
});

// 修改 数据获取
const getUpdateInfo = () => {
  for (const key in formInline) {
    if (Object.prototype.hasOwnProperty.call(formInline, key)) {
      formInline[key] = props.curRow[key];
    }
  }
};

// 关闭窗口
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};

// =================== 表单 ===================
let formInline = reactive({
  name: "",
  code: "",
  status: true,
});

// =================== 保存 ===================
const saveHandle = () => {
  let data = {
    name: formInline.name,
    code: formInline.code,
    status: formInline.status ? '1' : '0',
  }
  if (props.dialogType === 1) {
    // 新增
    addZdlxgl({
      ...data
    }).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        ElMessage.success(res.msg);
        close();
      } else {
        ElMessage.error(res.msg);
      }
    });
  } else {
    // 修改
    updateZdlxgl({
      id: props.curRow.id,
      ...data
    }).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        ElMessage.success(res.msg);
        close();
      } else {
        ElMessage.error(res.msg);
      }
    });
  }
};

const dialogVisible = ref(true);
// defineExpose({
//   dialogVisible,
// });
</script>

<style lang="scss" scoped>
.el-switch-left{
  margin-right: 10px;
}
.el-switch-right{
  margin-left: 10px;
}
</style>
