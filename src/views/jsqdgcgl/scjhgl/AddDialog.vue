<template>
  <el-dialog v-model="dialogVisible" :title="(dialogType === 1 ? '新增' : '修改') + '收处计划'" width="1200px" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="g-box">
        <h3><em></em><span>收处地区</span></h3>
        <el-form :inline="true" :model="formInline" ref="ruleFormRef" class="demo-form-inline" :disabled="dialogType === 2" :rules="formInlineRules">
          <el-form-item label="计划名称" prop="jhmc">
            <el-input v-model="formInline.jhmc" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="省份" prop="sf">
            <el-select v-model="formInline.sf" placeholder="请选择" @change="sfChange" filterable>
              <el-option v-for="item in sfOptions" :key="item.name" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="城市" prop="cs">
            <el-select v-model="formInline.cs" placeholder="请选择" @change="csChange" filterable multiple collapse-tags collapse-tags-tooltip>
              <el-option v-for="item in csOptions" :key="item.name" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
        </el-form>
        <div>
          <!-- 收处地区表格 -->
          <vxe-grid v-bind="scdqGridOptions" size="small"> </vxe-grid>
        </div>
      </div>
      <div class="g-box">
        <h3><em></em>时间计划区</h3>
        <!-- 时间计划区表格 -->
        <vxe-grid v-bind="sjjhqGridOptions" size="small">
          <template #ddsj_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.ddsj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #gzdj_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.gzdj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #sbys_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.sbys" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #tskz_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.tskz" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #czjssj_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.czjssj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #sbsw_edit="{ row }">
            <el-date-picker style="width: 100%" v-model="row.sbsw" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #jhtlsj_edit="{ row }">
            <el-date-picker
              style="width: 95%"
              v-model="row.jhtlsj"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
            />
          </template>
          <template #czsj_edit="{ row }">
            <el-input v-model="row.czsj" placeholder="请输入" />
          </template>
        </vxe-grid>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
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
import type { FormInstance, FormRules } from 'element-plus'
import Save from "@/assets/svg/save.svg";
// 省份城市数据
// import sfOptions from "@/utils/china_regions/province";
// import csOptionsAll from "@/utils/china_regions/city";

import { getSfList, getCsList } from "@/api/zone";
import { addScjhgl, updateScjhgl, queryJssjglNumByCity, getScjhglDtoById } from "@/api/jsqdgcgl";
import { forEach } from "lodash";
import { arrayExpression } from "@babel/types";
import { VXETable, VxeGridInstance, VxeGridListeners, VxeGridProps } from 'vxe-table'

const props = defineProps<{
  dialogType: any;
  curRow: any;
}>();


let csOptionsAll = ref([]);

onMounted(() => {
  getSfData();
  getCsData();
  // 获取信息
  if (props.dialogType === 2) {
    getUpdateInfo();
  }
});

// 修改 数据获取
const getUpdateInfo = () => {
  getScjhglDtoById({
    id: props.curRow.id,
  }).then((res: any) => {
    formInline.jhmc = res.result.jhmc;
    // formInline.sf = res.result.scsf;
    // formInline.cs = res.result.sccs.split(',');
    formInline.sf = res.result.scjhglmxList[0].scsf;


    
    let arr = [];
    arr = res.result.scjhglmxList;
    arr.forEach((item: any) => {
      item.cs = item.sccs;
      item.jhtlsj = item.jhtlsj.split('至');
      formInline.cs.push(item.sccs);
    });
    scdqGridOptions.data = arr;
    sjjhqGridOptions.data = arr;
  });
};

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

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
const getScdwData = () => {
  let data: any[] = [];
  formInline.cs.forEach((item) => {
    data.push({
      sf: formInline.sf,
      cs: item,
    });
  });
  queryJssjglNumByCity(data).then((res: any) => {
    scdqGridOptions.data = res.result || [];
  });
};

// =================== 表单 ===================
// form
const formInline = reactive({
  jhmc: "",
  sf: "",
  cs: [],
});
// rules
const formInlineRules = reactive<FormRules>({
  jhmc: [{ required: true, message: '必填项', trigger: 'change' }],
  sf: [{ required: true, message: '必填项', trigger: 'change' }],
  cs: [{ required: true, message: '必填项', trigger: 'change' }],
})
// 省份/城市
let sfOptions = ref([]);
let csOptions = ref([]);
const sfChange = (e: string) => {
  // if (e) {
  //   csOptions.value = (csOptionsAll as any)[e];
  // }
};
const csChange = (e: string) => {
  getScdwData();
  setSjjhqData();
};

const setSjjhqData = () => {
  let arr: any[] = [];
  formInline.cs.forEach((item) => {
    arr.push({
      cs: item,
      ddsj: "",
      gzdj: "",
      sbys: "",
      tskz: "",
      czjssj: "",
      sbsw: "",
      jhtlsj: ["", ""],
      czsj: "",
    });
  });
  (sjjhqGridOptions.data as any) = arr;
};

// =================== 收处地区 vxe表格 ===================
const scdqGridOptions = reactive({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: "click",
    mode: "cell",
  },
  // 序号 城市 短枪 长枪 高重 冷兵
  columns: [
    { type: "seq", title: "序号", width: 60, align: "center" },
    { field: "cs", title: "城市" },
    { field: "dq", title: "短枪" },
    { field: "cq", title: "长枪" },
    { field: "gz", title: "高重" },
    { field: "lb", title: "冷兵" },
  ],
  data: [
    // { id: 10001, cs: "Test1", dq: "T1", cq: "Develop", gz: "Man", lb: 28 },
    // { id: 10002, cs: "Test2", dq: "T2", cq: "Test", gz: "Women", lb: 22 },
  ],
});

// =================== 时间计划区 vxe表格 ===================
const xGrid = ref<VxeGridInstance>()
const sjjhqGridOptions = reactive({
  border: true,
  showOverflow: true,
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  },
  columns: [
    { type: "seq", title: "序号", width: 60, fixed: "left", align: "center" },
    { field: "cs", title: "城市", width: 100, fixed: "left" },
    { field: "ddsj", title: "到达时间", width: 150, editRender: {}, slots: { edit: "ddsj_edit" } },
    { field: "gzdj", title: "工作对接", width: 150, editRender: {}, slots: { edit: "gzdj_edit" } },
    { field: "sbys", title: "设备运输", width: 150, editRender: {}, slots: { edit: "sbys_edit" } },
    { field: "tskz", title: "调试开展", width: 150, editRender: {}, slots: { edit: "tskz_edit" } },
    { field: "czjssj", title: "处置结束时间", width: 150, editRender: {}, slots: { edit: "czjssj_edit" } },
    { field: "sbsw", title: "设备收尾", width: 150, editRender: {}, slots: { edit: "sbsw_edit" } },
    { field: "jhtlsj", title: "计划停留时间", width: 280, editRender: {}, slots: { edit: "jhtlsj_edit" } },
    { field: "czsj", title: "处置时间（天）", width: 150, editRender: {}, slots: { edit: "czsj_edit" } },
    // { field: "ddsj", title: "到达时间", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "gzdj", title: "工作对接", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "sbys", title: "设备运输", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "tskz", title: "调试开展", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "czjssj", title: "处置结束时间", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "sbsw", title: "设备收尾", width: 150, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "jhtlsj", title: "计划停留时间", width: 280, editRender: { name: '$input', props: { type: 'date', placeholder: '请输入' } } },
    // { field: "czsj", title: "处置时间（天）", width: 150, editRender: { name: '$input', props: { type: 'float', digits: 2, placeholder: '请输入' } } },
  ],
  editRules: {
    ddsj: [{ required: true, message: '必填项' }],
    gzdj: [{ required: true, message: '必填项' }],
    sbys: [{ required: true, message: '必填项' }],
    tskz: [{ required: true, message: '必填项' }],
    czjssj: [{ required: true, message: '必填项' }],
    sbsw: [{ required: true, message: '必填项' }],
    jhtlsj: [{ required: true, message: '必填项' }],
    czsj: [{ required: true, message: '必填项' }],
  },
  data: [],
});

// 提交/提交验证
const ruleFormRef = ref<FormInstance>()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      saveHandle();
    } else {
      ElMessage.warning('请填写必填项');
    }
  })
}

// =================== 保存 ===================
const saveHandle = () => {
  console.log("save", scdqGridOptions.data, sjjhqGridOptions.data);

  // 数据合并
  let arr: any[] = [];
  scdqGridOptions.data.forEach((item: any, index: number) => {
    arr.push({
      // public
      scsf: scdqGridOptions.data[index].sf,
      sccs: scdqGridOptions.data[index].cs,
      // table 1
      dq: scdqGridOptions.data[index].dq,
      cq: scdqGridOptions.data[index].cq,
      gz: scdqGridOptions.data[index].gz,
      lb: scdqGridOptions.data[index].lb,
      // table 2
      ddsj: sjjhqGridOptions.data[index].ddsj,
      gzdj: sjjhqGridOptions.data[index].gzdj,
      sbys: sjjhqGridOptions.data[index].sbys,
      tskz: sjjhqGridOptions.data[index].tskz,
      czjssj: sjjhqGridOptions.data[index].czjssj,
      sbsw: sjjhqGridOptions.data[index].sbsw,
      jhtlsj: sjjhqGridOptions.data[index].jhtlsj.join("至"),
      czsj: Number(sjjhqGridOptions.data[index].czsj),
      id: sjjhqGridOptions.data[index].id || '',
      scjhglid: props.curRow.id || '',
    });
  });
  

  if (props.dialogType === 1) {
    // 新增
    addScjhgl({
      jhmc: formInline.jhmc,
      sf: formInline.sf,
      cs: formInline.cs.join(','),
      scjhglmxVoList: arr,
    }).then((res: any) => {
      if (res.code === 200) {
        ElMessage.success(res.msg);
        close();
      } else {
        ElMessage.error(res.msg);
      }
    });
  } else {
    // 修改
    updateScjhgl({
      id: props.curRow.id,
      jhmc: formInline.jhmc,
      sf: formInline.sf,
      cs: formInline.cs.join(','),
      scjhglmxVoList: arr,
    }).then((res: any) => {
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
