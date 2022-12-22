<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="省份">
          <el-select v-model="formInline.sf" placeholder="请选择">
            <el-option label="北京市" value="shanghai" />
            <el-option label="河北" value="beijing" />
            <el-option label="山西" value="sanxi" />
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <el-select v-model="formInline.cs" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-btns">
      <el-button type="primary" :icon="CirclePlus" @click="addHandle">添加计划</el-button>
      <el-button type="primary" :icon="Download" @click="exportHandle">导出</el-button>
    </div>
    <div class="g-table">
      <div class="g-table-self">
        <el-table
          :data="tableData"
          ref="tableDataRef"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center"/>
          <el-table-column type="index" label="序号" width="60" align="center" />
          <el-table-column prop="jhm" label="计划名" show-overflow-tooltip />
          <el-table-column prop="gjcs" label="归集城市" show-overflow-tooltip />
          <el-table-column prop="gjdw" label="归集单位" show-overflow-tooltip />
          <el-table-column prop="jz" label="军种" show-overflow-tooltip />
          <el-table-column prop="zydw" label="转运单位" show-overflow-tooltip />
          <el-table-column prop="gjsj" label="归集时间" show-overflow-tooltip />
          <el-table-column prop="scsj" label="收储时间" show-overflow-tooltip />
          <el-table-column fixed="right" label="操作" width="120" align="center">
            <template #default>
              <el-button type="warning" size="small" :icon="Edit" circle />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="g-table-pafer">
        <el-pagination
          background
          small
          v-model:current-page="pager.pageNum"
          v-model:page-size="pager.pageSize"
          :page-sizes="[20, 50, 100, 200]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pager.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
  <AddDialog ref="addDialogRef" v-if="addDialogShow" :curRow="curRow" :dialogType="dialogType" @close="addDialogClose"></AddDialog>
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
import { reactive, ref } from "vue";
import AddDialog from "./AddDialog.vue";

// ================== 表格查询 ==================
const formInline = reactive({
  sf: "",
  cs: "",
});
// 查询
const onSubmit = () => {
  console.log("submit!");
};
// 重置
const onReset = () => {
  console.log("click");
};

// ================== 按钮组 ==================
// 新增
const addHandle = () => {
  dialogType.value = 1;
  addDialogShow.value = true;
};
// 导出
const exportHandle = () => {
  console.log("click");
  console.log(multipleSelection.value, 'multipleSelection');
};

// ================== 表格 ==================
const tableDataRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref([]);

const handleSelectionChange = (val: any) => {
  multipleSelection.value = val;
};
// 表格数据
const tableData = [
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
  { jhm: "计划名称a", gjcs: "122", gjdw: "222", jz: "33", zydw: "44", gjsj: "33", scsj: "444" },
];

// ================== 分页 ==================
const pager = reactive({
  pageNum: 1,
  pageSize: 20,
  total: 0,
});
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

// 弹窗
const addDialogRef = ref(null);
const addDialogShow = ref(false);
let dialogType = ref(1);
const addDialogClose = () => {
  addDialogShow.value = false;
  // getList();
};
const curRow = ref({});
</script>
