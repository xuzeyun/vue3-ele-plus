<template>
  <div class="g-flex-col">
    <div class="g-query g-query-has-title">
      <h3>转换模型区</h3>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="按名称匹配"></el-form-item>
        <el-form-item label="名称">
          <el-select v-model="formInline.mc" placeholder="请选择">
            <el-option label="北京市" value="shanghai" />
            <el-option label="河北" value="beijing" />
            <el-option label="山西" value="sanxi" />
          </el-select>
        </el-form-item>
        <el-form-item label="处置分类">
          <el-select v-model="formInline.czfl" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-query g-query-has-title">
      <h3>条件筛选区</h3>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="片区">
          <el-select v-model="formInline.pq" placeholder="请选择">
            <el-option label="北京市" value="shanghai" />
            <el-option label="河北" value="beijing" />
            <el-option label="山西" value="sanxi" />
          </el-select>
        </el-form-item>
        <el-form-item label="军种">
          <el-select v-model="formInline.jz" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="省份">
          <el-select v-model="formInline.sf" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <el-select v-model="formInline.cs" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="单位">
          <el-select v-model="formInline.dw" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="处置分类">
          <el-select v-model="formInline.czfl" placeholder="请选择">
            <el-option label="南京" value="shanghai" />
            <el-option label="长治" value="beijing" />
          </el-select>
        </el-form-item> -->
      </el-form>
    </div>
    <div class="g-btns">
      <div style="display: flex; align-items: center; gap: 10px;">
        <label for="">归集单位</label>
        <el-select v-model="formInline.gjdw" placeholder="请选择">
          <el-option label="南京" value="shanghai" />
          <el-option label="长治" value="beijing" />
        </el-select>
        <el-button type="primary" :icon="Switch" @click="addHandle">执行数据转换归集</el-button>
      </div>
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
          <el-table-column prop="jz" label="军种" show-overflow-tooltip />
          <el-table-column prop="yjdw" label="移交单位" show-overflow-tooltip />
          <el-table-column prop="pq" label="片区" show-overflow-tooltip />
          <el-table-column prop="sf" label="省份" show-overflow-tooltip />
          <el-table-column prop="cs" label="城市" show-overflow-tooltip />
          <el-table-column prop="mc" label="名称" show-overflow-tooltip />
          <el-table-column prop="czfl" label="处置分类" show-overflow-tooltip />
          <el-table-column prop="sl" label="数量" show-overflow-tooltip />
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
import { Edit, CirclePlus, Download, Search, Refresh, Switch } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
import { reactive, ref } from "vue";

// ================== 表格查询 ==================
const formInline = reactive({
  mc: "",
  czfl: "",
  pq: "",
  jz: "",
  sf: "",
  cs: "",
  dw: "",
  gjdw: "",
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
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
  { jz: "计划名称a", yjdw: "122", pq: "222", sf: "33", cs: "44", mc: "33", czfl: "444", sl: "444" },
];

// ================== 分页 ==================
const pager = reactive({
  pageNum: 1,
  pageSize: 20,
  total: 1000,
});
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>
