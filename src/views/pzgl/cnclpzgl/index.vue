<template>
  <div class="g-flex-col">
    <!-- <div class="g-btns">
      <el-button type="primary" @click="saveHandle"><span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>保存</el-button>
    </div> -->
    <div class="g-table">
      <div class="g-table-self">
        <vxe-grid v-bind="mainGridOptions" size="small" height="100%">
          <template #dq_edit="{ row }">
            <el-input v-model="row.dq" placeholder="请输入" />
          </template>
          <template #cq_edit="{ row }">
            <el-input v-model="row.cq" placeholder="请输入" />
          </template>
          <template #gz_edit="{ row }">
            <el-input v-model="row.gz" placeholder="请输入" />
          </template>
          <template #lbp_edit="{ row }">
            <el-input v-model="row.lb" placeholder="请输入" />
          </template>
          <template #operate="{ row }">
            <el-button type="primary" size="small" circle @click="saveHandle(row)" title="保存" ><span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span></el-button>
          </template>
        </vxe-grid>
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
// import { CircleCheck, CircleClose } from "@element-plus/icons-vue";
import { reactive, ref, defineProps, defineExpose, onMounted, defineEmits } from "vue";
import { ElMessage } from "element-plus";
import { VxeGridInstance } from 'vxe-table'
import { addCnclpzgl, deleteCnclpzgl, queryCnclpzglList, queryCnclpzglListPage, updateCnclpzgl } from "@/api/pzgl";




const xGrid = ref<VxeGridInstance>()
const mainGridOptions = reactive({
  border: true,
  showOverflow: true,
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  },
  columns: [
    { type: "seq", title: "序号", width: 120, fixed: "left", align: "center" },
    { field: "sbmc", title: "设备名称", fixed: "left" },
    { field: "dq", title: "短枪（天）", editRender: {}, slots: { edit: "dq_edit" } },
    { field: "cq", title: "长枪（天）", editRender: {}, slots: { edit: "cq_edit" } },
    { field: "gz", title: "高重（天）", editRender: {}, slots: { edit: "gz_edit" } },
    { field: "lb", title: "冷兵配（天）", editRender: {}, slots: { edit: "lbp_edit" } },
    { field: "czjssj", title: "操作", width: 150, slots: { default: 'operate' }, align: "center" },
  ],
  editRules: {
    // dq: [{ required: true, message: '必填项' }],
    // cq: [{ required: true, message: '必填项' }],
    // gz: [{ required: true, message: '必填项' }],
    // lb: [{ required: true, message: '必填项' }],
  },
  data: [],
});


// ================== 表格查询 ==================
onMounted(() => {
  getList();
});
const formInline = reactive({
  sf: "",
  cs: "",
});

const getList = () => {
  queryCnclpzglList({}).then((res: any) => {
    mainGridOptions.data = res.result;
  });
};

// 保存
const saveHandle = (row: any) => {
  updateCnclpzgl(row).then((res: any) => {
    if (res.code === 200) {
      ElMessage.success(res.msg);
      getList();
    } else {
      ElMessage.error(res.msg);
    }
  })
};

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