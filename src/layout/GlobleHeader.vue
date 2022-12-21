<template>
  <el-row>
    <el-col :span="6">
      <dl>
        <dt>
          <el-icon><location /></el-icon>当前点位：
        </dt>
        <dd>特种部队</dd>
      </dl>
      <dl>
        <dt>
          <el-icon><User /></el-icon>当前人员：
        </dt>
        <dd>许泽云</dd>
      </dl>
    </el-col>
    <el-col :span="3" align="left">
      <a class="router-btn" href="javascript:;">开始作业</a>
    </el-col>
    <el-col :span="6">
      <h1>QWQ销毁作业平台</h1>
      <!-- <div ref="logo" style="height: 66px"></div> -->
    </el-col>
    <el-col :span="3" align="right">
      <a class="router-btn" href="javascript:;">作业结算</a>
    </el-col>
    <el-col :span="6" align="right">
      <div class="right-wrap">
        <span class="warning-card"><i class="fas fa-exclamation-triangle animate__animated animate__flash animate__infinite"></i>作业警戒中</span>
        <div class="date-time">
          <span class="time">{{ headerTime.time }}</span>
          <span class="date">[{{ headerTime.date }}]</span>
        </div>
      </div>
      
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import moment from "moment";
import { ref, reactive, onMounted, Ref } from "vue";

// const logo: Ref<HTMLElement | any> = ref(null);

// var option = {
//   graphic: {
//     elements: [
//       {
//         type: "text",
//         left: "center",
//         top: "center",
//         style: {
//           text: "QWQ销毁作业平台",
//           fontSize: 34,
//           fontWeight: "",
//           lineDash: [0, 200],
//           lineDashOffset: 0,
//           fill: "transparent",
//           stroke: "#fff",
//           lineWidth: 1,
//         },
//         keyframeAnimation: {
//           duration: 3000,
//           loop: false,
//           keyframes: [
//             {
//               percent: 0.7,
//               style: {
//                 fill: "transparent",
//                 lineDashOffset: 200,
//                 lineDash: [200, 0],
//               },
//             },
//             {
//               // Stop for a while.
//               percent: 0.8,
//               style: {
//                 fill: "transparent",
//               },
//             },
//             {
//               percent: 1,
//               style: {
//                 fill: "#fff",
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
// };

onMounted(() => {
  // var myChart = echarts.init(logo.value);
  // option && myChart.setOption(option);
});

const headerTime = ref({
  date: "0000-00-00",
  time: "00:00:00",
});

onMounted(() => {
  getCurTime();
});

const getCurTime = () => {
  setInterval(() => {
    headerTime.value.date = moment().format("YYYY-MM-DD");
    headerTime.value.time = moment().format("HH:mm:ss");
  }, 500);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
dl {
  display: inline-block;
  margin-right: 20px;
  opacity: 0.9;
  dt,
  dd {
    display: inline-block;
    .el-icon {
      font-size: 14px;
      vertical-align: middle;
      margin-top: -3px;
      margin-right: 4px;
    }
  }
}
h1 {
  font-size: 34px;
  text-align: center;
}
.router-btn {
  display: inline-block;
  text-decoration: none;
  height: 40px;
  font-weight: bolder;
  padding: 0 25px;
  font-size: 18px;
  line-height: 40px;
  border: 1px solid $gBorderColor;
  border-radius: 40px;
  background: linear-gradient(0deg, $gBorderColor, #0f1823);
}

.right-wrap{
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}


.warning-card {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 140px;
  font-size: 16px;
  color: $gError;
  border: 2px $gError dashed;
  border-radius: 4px;
  background: url(~@/assets/images/warning_bg.png) repeat;
  background-size: contain;
  background-position: 0% 0%;
  animation: gradient 50s linear 0s infinite;
  animation-direction: normal;
  font-weight: bold;
  .fas {
    margin-right: 6px;
    color: $gError;
    font-size: 18px;
    animation-duration: 2s;
  }
}
.date-time {
  height: 50px;
  font-family: timeFont;
  display: flex;
  flex-direction: column;
  // opacity: 0.6;
  border: rgba($color: $gBorderColor, $alpha: 0.4) 1px solid;
  padding: 0 5px;
  .time {
    flex: 1.5;
    line-height: 30px;
    font-size: 30px;
    letter-spacing: 1px;
  }
  .date {
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    color: $gTitleColor;
    text-align: center;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 10000% 0%;
  }
}
</style>
