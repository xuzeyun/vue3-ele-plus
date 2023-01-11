<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="字典类型名称">
          <el-input v-model="formInline.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="字典类型代码">
          <el-input v-model="formInline.code" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-btns">
      <el-button type="primary" :icon="CirclePlus" @click="addHandle">新增</el-button>
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
          <el-table-column prop="name" label="字典类型名称" show-overflow-tooltip />
          <el-table-column prop="code" label="字典类型代码" show-overflow-tooltip />
          <el-table-column prop="status" label="是否开启" show-overflow-tooltip>
            <template #default="scope">
              {{scope.row.status == 1 ? '正常' : '停用'}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="140" align="center">
            <template #default="scope">
              <el-button type="warning" size="small" :icon="Edit" circle title="修改"/>
              <el-button type="primary" size="small" :icon="Coin" @click="addDataHandle(scope.row)" circle title="数据管理"/>
              <el-button type="danger" size="small" :icon="Delete" @click="deleteHandle(scope.row)" circle title="删除" />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="g-table-pafer">
        <el-pagination
          background
          small
          v-model:current-page="pager.pageCurrent"
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
  <AddDataDialog ref="addDataDialogRef" v-if="addDataDialogShow" :curRow="curDataRow" :dialogType="addDataDialogType" @close="addDataDialogClose"></AddDataDialog>
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh, List, Delete, Coin } from "@element-plus/icons-vue";
import { ElTable, ElMessageBox, ElMessage } from 'element-plus'
import { reactive, ref, onMounted } from "vue";
import { addZdlxgl, deleteZdlxgl, queryZdlxglList, queryZdlxglListPage, updateZdlxgl } from "@/api/xtgl";

// ================== 弹窗 ==================
import AddDialog from "./AddDialog.vue";
const addDialogShow = ref(false);
const addDialogClose = () => {
  addDialogShow.value = false;
  getList(1);
};
let dialogType = ref(1);
const addDialogRef = ref(null);

// ================== 数据弹窗 ==================
import AddDataDialog from "./AddDataDialog.vue";
const addDataDialogShow = ref(false);
const addDataDialogClose = () => {
  addDataDialogShow.value = false;
};
let addDataDialogType = ref(1);
const addDataDialogRef = ref(null);

const addDataHandle = (row: any) => {
  curDataRow.value = {...row};
  addDataDialogShow.value = true;
};

let curDataRow = ref(null);




// ================== 表格查询 ==================
const formInline = reactive({
  name: "",
  code: "",
});
// 查询
const onSubmit = () => {
  // console.log("submit!");
  getList(1);
};
// 重置
const onReset = () => {
  console.log("click");
};
onMounted(() => {
  getList(1);
});
const getList = (flag?: number) => {
  if(flag === 1){
    pager.pageCurrent = 1;
  }
  queryZdlxglListPage({}).then((res: any) => {
    tableData.value = res.result.records;
  });
};

// ================== 按钮组 ==================
// 导入
// const importHandle = () => {
//   console.log("click");
//   console.log(multipleSelection.value, 'multipleSelection');
// };
// 新增
const addHandle = () => {
  dialogType.value = 1;
  addDialogShow.value = true;
};
// 修改
// const editHandle = (row: any) => {
//   curRow.value = row;
//   dialogType.value = 2;
//   // (addDialogRef.value as any).centerDialogVisible = true;
//   addDialogShow.value = true;
// };

// ================== 表格 ==================
const tableDataRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref([]);

const handleSelectionChange = (val: any) => {
  multipleSelection.value = val;
};
// 表格数据
// const tableData = [
//   { name: "用户性别", code: "sys_user_sex", bz: "用户性别列表", cjsj: "2022-10-19 20:57:34" },
// ];
let tableData = ref([]);

// ================== 分页 ==================
const pager = reactive({
  pageCurrent: 1,
  pageSize: 20,
  total: 0,
});
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

// 删除
const deleteHandle = (row: any) => {
  ElMessageBox.confirm("确认是否删除 ？", "警告", {
    confirmButtonText: "是",
    cancelButtonText: "否",
    type: "warning",
  })
    .then(() => {
      deleteZdlxgl({ id: row.id }).then((res: any) => {
        if (res.code === 200) {
          ElMessage.success(res.msg);
          getList();
        } else {
          ElMessage.error(res.msg);
        }
      });
    })
    .catch(() => {
      ElMessage.info("已取消");
    });
};
</script>
