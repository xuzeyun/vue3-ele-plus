<template>
  <el-dialog v-model="centerDialogVisible" title="添加收处计划" width="90%" destroy-on-close draggable>
    <div class="g-dialog-md">
      <div class="g-box">
        <h3><em></em><span>收处地区</span></h3>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="计划名称">
            <el-input v-model="formInline.jhmc" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="省份">
            <el-select v-model="formInline.sf" placeholder="请选择" @change="sfChange" filterable>
              <el-option v-for="item in sfOptions" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select v-model="formInline.cs" placeholder="请选择" filterable multiple collapse-tags collapse-tags-tooltip>
              <el-option v-for="item in csOptions" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-form>
        <div>
          <!-- 收处地区表格 -->
          <vxe-grid v-bind="scdqGridOptions" size="small">
            <template #dq_edit="{ row }">
              <el-input v-model="row.dq"></el-input>
            </template>
            <template #cq_edit="{ row }">
              <el-input v-model="row.cq"></el-input>
            </template>
            <template #gz_edit="{ row }">
              <el-input v-model="row.gz"></el-input>
            </template>
            <template #lb_edit="{ row }">
              <el-input v-model="row.lb"></el-input>
            </template>
          </vxe-grid>
        </div>
      </div>
      <div class="g-box">
        <h3><em></em>时间计划区</h3>
        <!-- 时间计划区表格 -->
        <vxe-grid v-bind="sjjhqGridOptions" size="small">
          <template #ddsj_edit="{ row }">
            <el-date-picker style="width: 100%;" v-model="row.ddsj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #gzdj_edit="{ row }">
            <el-date-picker v-model="row.gzdj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #sbys_edit="{ row }">
            <el-date-picker v-model="row.sbys" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #tskz_edit="{ row }">
            <el-date-picker v-model="row.tskz" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #czjssj_edit="{ row }">
            <el-date-picker v-model="row.czjssj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
          <template #sbsw_edit="{ row }">
            <el-date-picker v-model="row.sbsw" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
          </template>
        </vxe-grid>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" :icon="CircleCheck" @click="saveHandle">保存</el-button>
        <el-button type="info" :icon="CircleClose" @click="centerDialogVisible = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { CircleCheck, CircleClose } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
// 省份城市数据
import sfOptions from "@/utils/china_regions/province";
import csOptionsAll from "@/utils/china_regions/city";

// =================== 表单 ===================
const formInline = reactive({
  jhmc: "",
  sf: "",
  cs: [],
});
let csOptions: any = ref([]);
const sfChange = (e: string) => {
  if (e) {
    csOptions.value = (csOptionsAll as any)[e];
  }
};

// =================== 收处地区 vxe表格 ===================
const scdqGridOptions = reactive({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: "click",
    mode: "cell",
    // 第一列禁止编辑
    // beforeEditMethod({ columnIndex }: any) {
    //   if (columnIndex === 1) {
    //     return false;
    //   }
    //   return true;
    // },
  },
  // 序号 城市 短枪 长枪 高重 冷兵
  columns: [
    { type: "seq", title: "序号", width: 60, align: "center" },
    { field: "cs", title: "城市" },
    { field: "dq", title: "短枪", editRender: {}, slots: { edit: "dq_edit" } },
    { field: "cq", title: "长枪", editRender: {}, slots: { edit: "cq_edit" } },
    { field: "gz", title: "高重", editRender: {}, slots: { edit: "gz_edit" } },
    { field: "lb", title: "冷兵", editRender: {}, slots: { edit: "lb_edit" } },
  ],
  data: [
    { id: 10001, cs: "Test1", dq: "T1", cq: "Develop", gz: "Man", lb: 28 },
    { id: 10002, cs: "Test2", dq: "T2", cq: "Test", gz: "Women", lb: 22 },
  ],
});
// const editDisabledEvent = () => {
//   ElMessage.error("该字段禁止编辑");
// };

// =================== 时间计划区 vxe表格 ===================
const sjjhqGridOptions = reactive({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: "click",
    mode: "cell",
    // 第一列禁止编辑
    // beforeEditMethod({ columnIndex }: any) {
    //   if (columnIndex === 1) {
    //     return false;
    //   }
    //   return true;
    // },
  },
  // 序号 城市 到达时间 工作对接 设备运输 调试开展 处置结束时间 设备收尾 计划停留时间 处置时间（天）
  columns: [
    { type: "seq", title: "序号", width: 60, align: "center" },
    { field: "cs", title: "城市" },
    { field: "ddsj", title: "到达时间", editRender: {}, slots: { edit: "ddsj_edit" } },
    { field: "gzdj", title: "工作对接", editRender: {}, slots: { edit: "gzdj_edit" } },
    { field: "sbys", title: "设备运输", editRender: {}, slots: { edit: "sbys_edit" } },
    { field: "tskz", title: "调试开展", editRender: {}, slots: { edit: "tskz_edit" } },
    { field: "czjssj", title: "处置结束时间", editRender: {}, slots: { edit: "czjssj_edit" } },
    { field: "sbsw", title: "设备收尾", editRender: {}, slots: { edit: "sbsw_edit" } },
    { field: "jhtlsj", title: "计划停留时间" },
    { field: "czsj", title: "处置时间（天）" },
  ],
  data: [
    { id: 10001, cs: "上海市", ddsj: "2022-12-01", gzdj: "2022-12-01", sbys: "2022-12-01", tskz: "2022-12-01", czjssj: "2022-12-01", sbsw: "2022-12-01", jhtlsj: "3", czsj: "22" },
    { id: 10001, cs: "北京市", ddsj: "2022-12-03", gzdj: "2022-12-01", sbys: "2022-12-01", tskz: "2022-12-01", czjssj: "2022-12-01", sbsw: "2022-12-01", jhtlsj: "3", czsj: "22" },
    { id: 10001, cs: "成都市", ddsj: "2022-12-06", gzdj: "2022-12-01", sbys: "2022-12-01", tskz: "2022-12-01", czjssj: "2022-12-01", sbsw: "2022-12-01", jhtlsj: "3", czsj: "22" },
  ],
});

// =================== 保存 ===================
const saveHandle = () => {
  console.log("save");
};
const centerDialogVisible = ref(true);
</script>
