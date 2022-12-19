<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="军种">
          <el-select v-model="formInline.jz" placeholder="请选择">
            <el-option label="军种1" value="shanghai" />
            <el-option label="军种2" value="beijing" />
            <el-option label="军种3" value="sanxi" />
          </el-select>
        </el-form-item>
        <el-form-item label="省份">
          <el-select v-model="formInline.sf" placeholder="请选择">
            <el-option label="河北" value="hebei" />
            <el-option label="河南" value="henan" />
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <el-select v-model="formInline.cs" placeholder="请选择">
            <el-option label="北京" value="shanghai" />
            <el-option label="上海" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="移交单位">
          <el-select v-model="formInline.yjdw" placeholder="请选择">
            <el-option label="单位1" value="shanghai" />
            <el-option label="单位2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-btns">
      <!-- <el-button type="primary" :icon="Download" @click="importHandle">导入</el-button> -->
      <el-upload
        class="upload-demo"
        :show-file-list="false"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :on-success="onSuccess"
        :on-error="onError"
      >
        <el-button type="primary" :icon="Download">导入</el-button>
      </el-upload>
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
          <el-table-column prop="jhm" label="军种" show-overflow-tooltip />
          <el-table-column prop="gjcs" label="片区" show-overflow-tooltip />
          <el-table-column prop="gjdw" label="省份" show-overflow-tooltip />
          <el-table-column prop="jz" label="城市" show-overflow-tooltip />
          <el-table-column prop="zydw" label="移交单位" show-overflow-tooltip />
          <el-table-column prop="gjsj" label="名称" show-overflow-tooltip />
          <el-table-column prop="scsj" label="枪号" show-overflow-tooltip />
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
import { ElTable } from 'element-plus'
import { reactive, ref, onMounted } from "vue";
import { queryJssjglListPage } from "@/api/jsqdgcgl";
import type { UploadProps, UploadUserFile } from 'element-plus'

onMounted(() => {
  getList();
});

const getList = () => {
  queryJssjglListPage({}).then((res) => {
    tableData.value = res.result.records;
  });
};

// ================== 表格查询 ==================
const formInline = reactive({
  jz: "",
  sf: "",
  cs: "",
  yjdw: "",
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
// 上传成功
const onSuccess = (res: any) => {
  console.log(res);
};
// 上传失败
const onError = (err: any) => {
  console.log(err);
};

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
