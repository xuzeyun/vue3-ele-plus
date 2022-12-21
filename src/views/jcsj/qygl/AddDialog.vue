<template>
  <el-dialog v-model="dialogVisible" :title="(dialogType === 1 ? '新增' : '修改') + '区域'" width="30%" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="g-box">
        <el-form
          :model="formInline"
          class="demo-form-inline"
          :disabled="dialogType === 2"
          label-width="70"
        >
          <el-form-item label="编号">
            <el-input v-model="formInline.bh" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="formInline.mc" placeholder="请输入"></el-input>
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
import { reactive, ref, defineProps, defineExpose, onMounted, defineEmits } from "vue";
import { ElMessage } from "element-plus";
import Save from "@/assets/svg/save.svg";
// 省份城市数据
// import sfOptions from "@/utils/china_regions/province";
// import csOptionsAll from "@/utils/china_regions/city";

import { getSfList, getCsList } from "@/api/zone";
import { addScjhgl, updateScjhgl, queryJssjglNumByCity, getScjhglDtoById } from "@/api/jsqdgcgl";
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
  // getScjhglDtoById({
  //   id: props.curRow.id,
  // }).then((res) => {
  //   formInline.jhmc = res.result.jhmc;
  //   // formInline.sf = res.result.scsf;
  //   // formInline.cs = res.result.sccs.split(',');
  //   let arr = [];
  //   arr = res.result.scjhglmxList;
  //   arr.forEach((item) => {
  //     item.cs = item.sccs;
  //     item.jhtlsj = item.jhtlsj.split('至');
  //   });
  //   scdqGridOptions.data = arr;
  //   sjjhqGridOptions.data = arr;
  // });
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
const formInline = reactive({
  bh: "",
  mc: "",
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
    // addScjhgl({
    //   jhmc: formInline.jhmc,
    //   scjhglmxVoList: arr,
    // }).then((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     ElMessage.success(res.msg);
    //     close();
    //   } else {
    //     ElMessage.error(res.msg);
    //   }
    // });
  } else {
    // 修改
    // updateScjhgl({
    //   id: props.curRow.id,
    //   jhmc: formInline.jhmc,
    //   scjhglmxVoList: arr,
    // }).then((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     ElMessage.success(res.msg);
    //     close();
    //   } else {
    //     ElMessage.error(res.msg);
    //   }
    // });
  }
};

const dialogVisible = ref(true);
// defineExpose({
//   dialogVisible,
// });
</script>
