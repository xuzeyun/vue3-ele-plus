<template>
  <div class="g-flex-col">
    <!-- <div class="g-query">
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
    </div> -->
    <div class="g-btns">
      <el-button type="primary" :icon="CirclePlus" @click="addHandle">添加收处计划</el-button>
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
          <el-table-column prop="jhmc" label="计划名称" show-overflow-tooltip />
          <el-table-column prop="dq" label="短枪" show-overflow-tooltip />
          <el-table-column prop="cq" label="长枪" show-overflow-tooltip />
          <el-table-column prop="gz" label="高重" show-overflow-tooltip />
          <el-table-column prop="lb" label="冷兵" show-overflow-tooltip />
          <el-table-column prop="cjsj" label="创建时间" show-overflow-tooltip />
          <el-table-column fixed="right" label="操作" width="120" align="center">
            <template #default>
              <el-button type="warning" size="small" :icon="Edit" circle />
              <el-button type="danger" size="small" :icon="Delete" circle />
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
  <AddDialog></AddDialog>
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh, Delete } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
import { reactive, ref } from "vue";
// 弹窗
import AddDialog from './AddDialog.vue'

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
  console.log("click");
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
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
  { jhmc: "计划名称a", cq: "122", dq: "222", gz: "33", lb: "44", cjsj: "33"},
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
</script>
