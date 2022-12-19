<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="70">
        <el-form-item label="军种">
          <el-select v-model="formInline.jz" placeholder="请选择">
            <el-option label="军种1" value="shanghai" />
            <el-option label="军种2" value="beijing" />
          </el-select>
        </el-form-item>
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
        <el-form-item label="单位">
          <el-select v-model="formInline.dw" placeholder="请选择">
            <el-option label="单位1" value="shanghai" />
            <el-option label="单位2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="归集单位">
          <el-select v-model="formInline.gjdw" placeholder="请选择">
            <el-option label="单位1" value="shanghai" />
            <el-option label="单位2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="告警等级">
          <el-select v-model="formInline.gjdj" placeholder="请选择">
            <el-option label="等级1" value="shanghai" />
            <el-option label="等级2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.zt" placeholder="请选择">
            <el-option label="状态1" value="shanghai" />
            <el-option label="状态2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="g-btns">
      <el-button type="primary" :icon="CirclePlus" @click="addHandle">添加计划</el-button>
      <el-button type="primary" :icon="Download" @click="exportHandle">导出</el-button>
    </div> -->
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
          <el-table-column prop="gjdj" label="告警等级" show-overflow-tooltip />
          <el-table-column prop="gjyy" label="告警原因" show-overflow-tooltip />
          <el-table-column prop="jjfa" label="解决方案" show-overflow-tooltip />
          <el-table-column prop="gjsj" label="告警时间" show-overflow-tooltip />
          <el-table-column prop="glxx" label="关联信息" show-overflow-tooltip />
          <el-table-column prop="zt" label="状态" show-overflow-tooltip />
          <el-table-column fixed="right" label="操作" width="130" align="center">
            <template #default>
              <el-button type="success" size="small" :icon="Check" circle title="确认"/>
              <el-button type="warning" size="small" :icon="Hide" circle title="隐藏"/>
              <el-button type="primary" size="small" :icon="Picture" circle title="查看详情图片" />
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
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh, Picture, Check, Hide } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
import { reactive, ref } from "vue";

// ================== 表格查询 ==================
const formInline = reactive({
  jz: "",
  sf: "",
  cs: "",
  dw: "",
  gjdw: "",
  gjdj: "",
  zt: "",
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
// const addHandle = () => {
//   console.log("click");
// };
// 导出
// const exportHandle = () => {
//   console.log("click");
//   console.log(multipleSelection.value, 'multipleSelection');
// };

// ================== 表格 ==================
const tableDataRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref([]);

const handleSelectionChange = (val: any) => {
  multipleSelection.value = val;
};
// 表格数据
const tableData = [
  { gjdj: "重要", gjyy: "122", jjfa: "222", gjsj: "33", glxx: "44", zt: "33" },
  { gjdj: "普通", gjyy: "122", jjfa: "222", gjsj: "33", glxx: "44", zt: "33" },
  { gjdj: "警告", gjyy: "122", jjfa: "222", gjsj: "33", glxx: "44", zt: "33" },
  { gjdj: "紧急", gjyy: "122", jjfa: "222", gjsj: "33", glxx: "44", zt: "33" },
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
