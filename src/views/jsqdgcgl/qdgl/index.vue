<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="清点时间">
          <el-date-picker v-model="formInline.qdsj" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="选择时间" />
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-table">
      <div class="g-table-self">
        <!-- @selection-change="handleSelectionChange" -->
        <el-table :data="tableData" ref="tableDataRef" border>
          <!-- <el-table-column type="selection" width="55" align="center"/> -->
          <el-table-column type="index" label="序号" width="60" align="center" />
          <el-table-column prop="jz" label="军种" show-overflow-tooltip />
          <el-table-column prop="cs" label="城市" show-overflow-tooltip />
          <el-table-column prop="mc" label="名称" show-overflow-tooltip />
          <el-table-column prop="qh" label="枪号" show-overflow-tooltip />
          <el-table-column prop="yjdw" label="移交单位" show-overflow-tooltip />
          <el-table-column prop="zl" label="重量" show-overflow-tooltip />
          <el-table-column prop="lx" label="类型" show-overflow-tooltip />
          <el-table-column prop="czlx" label="处置类型" show-overflow-tooltip />
          <el-table-column prop="qdsj" label="清点时间" show-overflow-tooltip />
          <el-table-column prop="tp" label="图片" show-overflow-tooltip />
          <el-table-column prop="zt" label="状态" show-overflow-tooltip />
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
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh } from "@element-plus/icons-vue";
import { ElTable } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { queryQdwzglListPage } from "@/api/jsqdgcgl";
import type { UploadProps, UploadUserFile } from "element-plus";

onMounted(() => {
  getList();
});

const getList = () => {
  queryQdwzglListPage({}).then((res) => {
    tableData.value = res.result.records;
  });
};

// ================== 表格查询 ==================
const formInline = reactive({
  qdsj: "",
});
// 查询
const onSubmit = () => {
  console.log("submit!");
  getList();
};
// 重置
const onReset = () => {
  console.log("click");
};

// ================== 按钮组 ==================

// ================== 表格 ==================
const tableDataRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref([]);

const handleSelectionChange = (val: any) => {
  multipleSelection.value = val;
};
// 表格数据
let tableData = ref([]);

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
