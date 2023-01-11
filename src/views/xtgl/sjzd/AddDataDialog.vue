<template>
  <el-dialog v-model="dialogVisible" title="字典数据管理" width="50%" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="g-box">
        <el-button type="primary" :icon="CirclePlus" @click="addHandle">新增</el-button>
      </div>
      <div class="g-box">
        <vxe-grid ref="xGrid" v-bind="dataOptions" size="small">
          <template #sort_edit="{ row }">
            <el-input v-model="row.sort" placeholder="请输入" />
          </template>
          <template #name_edit="{ row }">
            <el-input v-model="row.name" placeholder="请输入" />
          </template>
          <template #value_edit="{ row }">
            <el-input v-model="row.value" placeholder="请输入" />
          </template>
          <template #status_edit="{ row }">
            <el-switch
              v-model="row.status"
              inline-prompt
              style="--el-switch-on-color: #1d6eb8; --el-switch-off-color: #ea5937"
              active-text="正常"
              inactive-text="停用"
              active-value="正常"
              inactive-value="停用"/>
          </template>

          <template #operate="{ row }">
            <template v-if="$refs.xGrid.isEditByRow(row)">
              <el-button type="primary" size="small" circle @click="saveRowEvent(row)" title="保存">
                <span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>
              </el-button>
            </template>
            <template v-else>
              <el-button type="warning" size="small" :icon="Edit" circle title="编辑" @click="editRowEvent(row)" />
            </template>
            <el-button type="danger" size="small" :icon="Delete" circle title="删除" @click="deleteHandle(row)" />
          </template>
        </vxe-grid>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button type="primary" @click="saveHandle">
          <span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>
          保存</el-button
        > -->
        <el-button type="info" :icon="CircleClose" @click="close">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh, List, Delete } from "@element-plus/icons-vue";
import { CircleCheck, CircleClose } from "@element-plus/icons-vue";
import { reactive, ref, defineProps, defineExpose, onMounted, defineEmits, nextTick } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import Save from "@/assets/svg/save.svg";

import { addZdsjgl, deleteZdsjgl, queryZdsjglList, queryZdsjglListPage, updateZdsjgl } from "@/api/xtgl";
import { forEach } from "lodash";
import { VXETable, VxeGridInstance, VxeGridListeners, VxeGridProps } from 'vxe-table'

const props = defineProps<{
  dialogType: any;
  curRow: any;
}>();

onMounted(() => {
  // 修改状态下 获取信息
  // if (props.dialogType === 2) {
  //   getUpdateInfo();
  // }
  getList(1);
});

let tableData = ref([]);
const getList = (flag?: number) => {
  if(flag === 1){
    pager.pageCurrent = 1;
  }
  queryZdsjglListPage({
    id: props.curRow.id,
  }).then((res: any) => {
    res.result.records.forEach((item: any) => {
      item.status = item.status === '1' ? '正常' : '停用';
    })
    dataOptions.data = res.result.records;
  });
};

const dataOptions = reactive({
  border: true,
  showOverflow: true,
  keepSource: true,
  loading: false,
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  },
  // 排序 sort 数据标签 name 数据键值 value 状态 status
  columns: [
    { type: "seq", title: "序号", width: 60, fixed: "left", align: "center" },
    { field: "sort", title: "排序", editRender: {}, slots: { edit: "sort_edit" } },
    { field: "name", title: "数据标签", editRender: {}, slots: { edit: "name_edit" } },
    { field: "value", title: "数据键值", editRender: {}, slots: { edit: "value_edit" } },
    { field: "status", title: "状态", editRender: {}, slots: { edit: "status_edit" } },
    { title: '操作', width: 120, slots: { default: 'operate' }, align: "center" }
  ],
  editRules: {
    sort: [{ required: true, message: '必填项' }],
    name: [{ required: true, message: '必填项' }],
    value: [{ required: true, message: '必填项' }],
    status: [{ required: true, message: '必填项' }],
  },
  data: [],
});

const xGrid = ref<VxeGridInstance>()

const addHandle = () => {
  const $grid = xGrid.value;
  $grid.insert({
    sort: '1',
    name: '',
    value: '',
    status: '正常',
  })
};

// 保存
const saveRowEvent = async (row: any) => {
  const $grid = xGrid.value
  if ($grid) {
    await $grid.clearEdit()
    dataOptions.loading = true
    // 模拟异步保存
    // setTimeout(() => {
    //   dataOptions.loading = false
    //   VXETable.modal.message({ content: '保存成功！', status: 'success' })
    // }, 300)
    console.log(props.curRow, 'ssssss');

    let data = {
      ...row,
    }
    data.status = data.status === '正常' ? '1' : '0'

    if (!row.id) {
      // 新增
      addZdsjgl({
        ...data
      }).then((res: any) => {
        console.log(res);
        if (res.code === 200) {
          ElMessage.success(res.msg);
        } else {
          ElMessage.error(res.msg);
        }
        dataOptions.loading = false;
      });
    } else {
      // 修改
      updateZdsjgl({
        id: props.curRow.id,
        ...data
      }).then((res: any) => {
        console.log(res);
        if (res.code === 200) {
          ElMessage.success(res.msg);
        } else {
          ElMessage.error(res.msg);
        }
        dataOptions.loading = false;
      });
    }
  }
}
// 编辑
const editRowEvent = (row: any) => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.setEditRow(row)
  }
}

// 删除
const deleteHandle = (row: any) => {
  ElMessageBox.confirm("确认是否删除 ？", "警告", {
    confirmButtonText: "是",
    cancelButtonText: "否",
    type: "warning",
  })
    .then(() => {
      deleteZdsjgl({ id: row.id }).then((res: any) => {
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







// 关闭窗口
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};


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

const dialogVisible = ref(true);
</script>

<style lang="scss" scoped>
.el-switch-left{
  margin-right: 10px;
}
.el-switch-right{
  margin-left: 10px;
}
</style>
