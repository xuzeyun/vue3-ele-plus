<template>
  <div class="g-flex-col">
    <div class="g-query">
      <el-form :inline="true" ref="formInlineRef" :model="formInline" class="demo-form-inline">
        <el-form-item label="军种" prop="jz">
          <el-select v-model="formInline.jz" placeholder="请选择">
            <el-option label="海军" value="sanxi" />
            <el-option label="陆军" value="shanghai" />
            <el-option label="空军" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="省份" prop="sf">
          <el-select v-model="formInline.sf" placeholder="请选择">
            <el-option label="河北" value="hebei" />
            <el-option label="浙江" value="hebei" />
            <el-option label="河南" value="henan" />
          </el-select>
        </el-form-item>
        <el-form-item label="城市" prop="cs">
          <el-select v-model="formInline.cs" placeholder="请选择">
            <el-option label="北京" value="shanghai" />
            <el-option label="上海" value="beijing" />
            <el-option label="杭州" value="beijing" />
            <el-option label="秦皇岛" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="移交单位" prop="yjdw">
          <el-select v-model="formInline.yjdw" placeholder="请选择">
            <el-option label="单位1" value="shanghai" />
            <el-option label="单位2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="g-query-btns">
          <el-button type="primary" :icon="Search" @click="onQuery">查询</el-button>
          <el-button type="info" :icon="Refresh" @click="onReset(formInlineRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-btns">
      <el-button type="primary" :icon="Upload" @click="importHandle">导入</el-button>
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
          <el-table-column prop="jz" label="军种" show-overflow-tooltip />
          <el-table-column prop="pq" label="片区" show-overflow-tooltip />
          <el-table-column prop="sf" label="省份" show-overflow-tooltip />
          <el-table-column prop="cs" label="城市" show-overflow-tooltip />
          <el-table-column prop="yjdw" label="移交单位" show-overflow-tooltip />
          <el-table-column prop="mc" label="名称" show-overflow-tooltip />
          <el-table-column prop="qh" label="枪号" show-overflow-tooltip />
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
  <!-- 弹窗 -->
  <el-dialog v-model="dialogVisible" title="导入" width="500" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <div class="upload-wrap">
        <label><span>*</span>移交单位</label>
        <el-select v-model="formUpload.yjdw" placeholder="请选择">
          <el-option label="单位甲" value="单位甲" />
          <el-option label="单位乙" value="单位乙" />
          <el-option label="单位丙" value="单位丙" />
        </el-select>
      </div>
      <div>
        <el-upload
          ref="uploadRef"
          v-model:file-list="fileList"
          :show-file-list="true"
          :auto-upload="false"
          :limit="1"
          :data="{yjdw: formUpload.yjdw}"
          action="/api/jssjgl/importJssjgl"
          :on-success="onSuccess"
          :on-error="onError"
          :on-exceed="onExceed"
          accept=".xlsx, .xls"
          drag
        >
          <template #trigger>
            <!-- <el-button type="primary" :icon="DocumentAdd">选择文件</el-button> -->
            <UploadFilled class="g-upload-icon" />
            <div class="g-upload-text">xlsx/xls，文件最大50MB，点击或拖拽文件导入。</div>
          </template>
        </el-upload>
      </div>
    </div>
    <template #footer>
      <el-button type="primary" :icon="CircleCheck" @click="submitUpload">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Edit, CirclePlus, Download, Search, Refresh, Upload, DocumentAdd, CircleCheck, UploadFilled } from "@element-plus/icons-vue";
import { ElTable, genFileId, ElMessage } from 'element-plus'
import { reactive, ref, onMounted } from "vue";
import { queryJssjglListPage } from "@/api/jsqdgcgl";
import type { UploadProps, UploadUserFile, UploadInstance, UploadRawFile, FormInstance } from 'element-plus'

onMounted(() => {
  getList(1);  
});

const getList = (flag?: number) => {
  // flag = 1 重置分页到第一页
  if(flag === 1){
    pager.pageCurrent = 1;
  }
  queryJssjglListPage({
    ...pager,
    ...formInline,
  }).then((res) => {
    tableData.value = res.result.records;
    pager.total = res.result.total;
  });
};

// ================== 表格查询 ==================
const formInlineRef = ref()
const formInline = reactive({
  jz: "",
  sf: "",
  cs: "",
  yjdw: "",
});
// 查询
const onQuery = () => {
  getList(1);
};
// 重置
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields();
  getList(1);
}

// ================== 按钮组 ==================

// ================== 导入 ==================
const uploadRef = ref<FormInstance>();
const formUpload = reactive({
  yjdw: "",
});
const fileList = ref<UploadUserFile[]>([]);


// 导入
const importHandle = () => {
  dialogVisible.value = true;
};
// 上传成功
const onSuccess = (res: any) => {
  console.log(res);
  if(res.code == 200){
    ElMessage.success(res.msg);
    close();
    getList(1);
  } else {
    ElMessage.error(res.msg);
  }
};
// 上传失败
const onError = (err: any) => {
  console.log(err);
};
// 选择新文件覆盖上一个文件
const onExceed: UploadProps['onExceed'] = (files) => {
  uploadRef.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadRef.value!.handleStart(file)
}
// 请求上传接口
const submitUpload = () => {
  if(!formUpload.yjdw){
    ElMessage.error('请选择移交单位');
    return;
  }
  if(fileList.value.length < 1 ){
    ElMessage.error('请选择需要导入的文件');
    return;
  }
  uploadRef.value!.submit()
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
  pageCurrent: 1,
  pageSize: 20,
  total: 0,
});
const handleSizeChange = (val: number) => {
  pager.pageSize = val;
  getList(1);
};
const handleCurrentChange = (val: number) => {
  pager.pageCurrent = val;
  getList();
};

// ================== 弹窗 ==================
const dialogVisible = ref(false);
const close = () => {
  // 重置表单
  formUpload.yjdw = '';
  fileList.value = [];
  dialogVisible.value = false;
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.upload-wrap{
  display: flex;
  align-items: center;
  gap: 10px;
  span{
    color: $gError;
    margin-right: 5px;
    vertical-align: middle;
    font-weight: bold;
  }
}
</style>