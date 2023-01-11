<template>
  <el-dialog v-model="dialogVisible" :title="(dialogType === 1 ? '新增' : '修改') + '单位'" width="30%" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="g-box">
        <el-form
          :model="formInline"
          class="demo-form-inline"
          label-width="70"
        >
          <el-form-item label="单位名称">
            <el-input v-model="formInline.dwmc" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="省份">
            <el-select v-model="formInline.sf" placeholder="请选择" @change="sfChange" filterable>
              <el-option v-for="(item, index) in sfOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select v-model="formInline.cs" placeholder="请选择" @change="csChange" filterable>
              <el-option v-for="(item, index) in csOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="formInline.lxr" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formInline.dh" placeholder="请选择"></el-input>
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
// 省份城市数据
// import sfOptions from "@/utils/china_regions/province";
// import csOptionsAll from "@/utils/china_regions/city";

import { getSfList, getCsList } from "@/api/zone";
// import { addScjhgl, updateScjhgl, queryJssjglNumByCity, getScjhglDtoById } from "@/api/jsqdgcgl";
import { addDwgl, updateDwgl } from "@/api/dwgl";
import { forEach } from "lodash";

const props = defineProps<{
  dialogType: any;
  curRow: any;
}>();

onMounted(() => {
  getSfData();
  getCsData();
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
// 获取省市数据
const getSfData = () => {
  getSfList({}).then((res: any) => {
    sfOptions.value = res.result || [];
  });
};
const getCsData = () => {
  getCsList({}).then((res: any) => {
    csOptions.value = res.result || [];
  });
};
let formInline = reactive({
  dwmc: "",
  sf: "",
  cs: "",
  lxr: "",
  dh: "",
});
let sfOptions = ref([]);
let csOptions: any = ref([]);
const sfChange = (e: string) => {
  // if (e) {
  //   csOptions.value = (csOptionsAll as any)[e];
  // }
};
const csChange = (e: string) => {
  // getScdwData();
};

// =================== 保存 ===================
const saveHandle = () => {
  if (props.dialogType === 1) {
    // 新增
    addDwgl({
      ...formInline
    }).then((res) => {
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
    updateDwgl({
      id: props.curRow.id,
      ...formInline
    }).then((res) => {
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
