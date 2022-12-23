<template>
  <el-dialog v-model="dialogVisible" :title="(dialogType === 1 ? '新增' : '修改') + '单位'" width="1200" destroy-on-close draggable @close="close">
    <div class="g-dialog-md">
      <el-form
          :model="formInline"
          class="demo-form-inline"
          :disabled="dialogType === 2"
          :inline="true"
          label-width="70"
        >
        <div class="g-box">
          <h3><em></em><span>归集区</span></h3>
          <el-form-item label="计划名称">
            <el-input v-model="formInline.jhmc" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="归集省份">
            <el-select v-model="formInline.gjsf" placeholder="请选择" @change="sfChange" filterable>
              <el-option v-for="(item, index) in sfOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="归集城市">
            <el-select v-model="formInline.gjcs" placeholder="请选择" @change="csChange" filterable>
              <el-option v-for="(item, index) in csOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="归集单位">
            <el-select v-model="formInline.gjdw" placeholder="请选择" @change="csChange" filterable>
              <el-option v-for="(item, index) in csOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="归集时间">
            <el-input v-model="formInline.gjsj" placeholder="请选择"></el-input>
          </el-form-item>
        </div>
        <div class="g-box">
          <h3><em></em><span>移交单位区</span></h3>
          <el-form-item label="归集城市">
            <el-select v-model="formInline.gjcs" placeholder="请选择" @change="csChange" filterable>
              <el-option v-for="(item, index) in csOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <el-form-item label="归集单位">
            <el-select v-model="formInline.gjdw" placeholder="请选择" @change="csChange" filterable>
              <el-option v-for="(item, index) in csOptions" :key="index" :label="item.name" :value="item.name" />
            </el-select>
          </el-form-item>
          <div class="table-selecter">
            <div class="select-table">
              <h4>选择单位</h4>
              <el-table
                :data="tableData"
                ref="tableDataRef"
                border
                @selection-change="handleSelectionChange"
                height="250"
                style="margin-bottom: 10px"
              >
                <el-table-column type="selection" width="55" align="center"/>
                <el-table-column type="index" label="序号" width="60" align="center" />
                <el-table-column prop="yjdw" label="移交单位" show-overflow-tooltip />
                <el-table-column prop="sl" label="数量" show-overflow-tooltip />
              </el-table>
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
            <div class="selected">
              <h4>已选择单位</h4>
              <div class="dw-list">
                <ul>
                  <li><el-icon class="dw-icon-wrap"><OfficeBuilding class="dw-icon" /></el-icon>单位1</li>
                  <li><el-icon class="dw-icon-wrap"><OfficeBuilding class="dw-icon" /></el-icon>单位2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="saveHandle">
          <span class="g-button-svg"><img src="@/assets/svg/save.svg" /></span>
          保存</el-button
        >
        <el-button type="info" :icon="CircleClose" @click="close">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { CircleCheck, CircleClose, OfficeBuilding } from "@element-plus/icons-vue";
import { reactive, ref, defineProps, defineExpose, onMounted, defineEmits } from "vue";
import { ElMessage } from "element-plus";
import Save from "@/assets/svg/save.svg";
// 省份城市数据
// import sfOptions from "@/utils/china_regions/province";
// import csOptionsAll from "@/utils/china_regions/city";

import { getSfList, getCsList } from "@/api/zone";
import { addScjhgl, updateScjhgl, queryJssjglNumByCity, getScjhglDtoById } from "@/api/jsqdgcgl";
import { forEach } from "lodash";

const props = defineProps<{
  dialogType: any;
  curRow: any;
}>();

onMounted(() => {
  getSfData();
  getCsData();
  // 修改状态下 获取信息
  if (props.dialogType === 2) {
    getUpdateInfo();
  }
});

// 修改 数据获取
const getUpdateInfo = () => {
  // getScjhglDtoById({
  //   id: props.curRow.id,
  // }).then((res) => {
  //   formInline.jhmc = res.result.jhmc;
  //   // formInline.sf = res.result.scsf;
  //   // formInline.cs = res.result.sccs.split(',');
  //   let arr = [];
  //   arr = res.result.scjhglmxList;
  //   arr.forEach((item) => {
  //     item.cs = item.sccs;
  //     item.jhtlsj = item.jhtlsj.split('至');
  //   });
  //   scdqGridOptions.data = arr;
  //   sjjhqGridOptions.data = arr;
  // });
};

// 关闭窗口
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};

// =================== 表单 ===================
// 获取省市数据
const getSfData = () => {
  getSfList({}).then((res: any) => {
    sfOptions.value = res.result || [];
  });
};
const getCsData = () => {
  getCsList({}).then((res: any) => {
    csOptions.value = res.result || [];
  });
};
const formInline = reactive({
  dwmc: "",
  sf: "",
  cs: "",
  lxr: "",
  dh: "",
});
let sfOptions = ref([]);
let csOptions: any = ref([]);
const sfChange = (e: string) => {
  // if (e) {
  //   csOptions.value = (csOptionsAll as any)[e];
  // }
};
const csChange = (e: string) => {
  // getScdwData();
};

// =================== 保存 ===================
const saveHandle = () => {
  if (props.dialogType === 1) {
    // 新增
    // addScjhgl({
    //   jhmc: formInline.jhmc,
    //   scjhglmxVoList: arr,
    // }).then((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     ElMessage.success(res.msg);
    //     close();
    //   } else {
    //     ElMessage.error(res.msg);
    //   }
    // });
  } else {
    // 修改
    // updateScjhgl({
    //   id: props.curRow.id,
    //   jhmc: formInline.jhmc,
    //   scjhglmxVoList: arr,
    // }).then((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     ElMessage.success(res.msg);
    //     close();
    //   } else {
    //     ElMessage.error(res.msg);
    //   }
    // });
  }
};

const dialogVisible = ref(true);
// defineExpose({
//   dialogVisible,
// });


// 表格
const handleSelectionChange = () => {
  console.log(66);
  
}
const tableData = reactive([]);
tableData.push({ yjdw: '移交单位', sl: '12' });
tableData.push({ yjdw: '移交单位', sl: '12' });

// 分页
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

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.table-selecter{
  display: flex;
  gap: 20px;
  .select-table{
    flex: 1;
  }
  .selected{
    width: 250px;
    .dw-list{
      height: 248px;
      border: $gBorderColor 1px solid;
      ul{
        padding: 10px;
        box-sizing: border-box;
        li{
          line-height: 26px;
          .dw-icon-wrap{
            vertical-align: middle;
            margin-right: 5px;
            font-size: 20px;
            .dw-icon{
              color: #1d6eb8;
            }
          }
        }
      }
    }
  }
}
</style>
