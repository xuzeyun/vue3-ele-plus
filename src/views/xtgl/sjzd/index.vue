<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="字典名称">
          <el-input v-model="formInline.mc" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="字典类型">
          <el-input v-model="formInline.lx" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-btns">
      <el-button type="primary" :icon="CirclePlus" @click="importHandle">新增</el-button>
    </div>
    <div class="g-table">
      <div class="g-table-self">
        <!-- @selection-change="handleSelectionChange" -->
        <el-table
          :data="tableData"
          ref="tableDataRef"
          border
        >
          <!-- <el-table-column type="selection" width="55" align="center"/> -->
          <el-table-column type="index" label="序号" width="60" align="center" />
          <el-table-column prop="mc" label="字典名称" show-overflow-tooltip />
          <el-table-column prop="lx" label="字典类型" show-overflow-tooltip />
          <el-table-column prop="bz" label="备注" show-overflow-tooltip />
          <el-table-column prop="cjsj" label="创建时间" show-overflow-tooltip />
          <el-table-column fixed="right" label="操作" width="140" align="center">
            <template #default>
              <el-button type="warning" size="small" :icon="Edit" circle title="修改"/>
              <el-button type="primary" size="small" :icon="List" circle title="列表"/>
              <el-button type="danger" size="small" :icon="Delete" circle title="删除" />
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
import { Edit, CirclePlus, Download, Search, Refresh, List, Delete } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
import { reactive, ref } from "vue";

// ================== 表格查询 ==================
const formInline = reactive({
  mc: "",
  lx: "",
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
// 导入
const importHandle = () => {
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
  { mc: "用户性别", lx: "sys_user_sex", bz: "用户性别列表", cjsj: "2022-10-19 20:57:34" },
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
