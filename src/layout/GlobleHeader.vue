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
    </el-col>
    <el-col :span="3" align="right">
      <a class="router-btn" href="javascript:;">作业结算</a>
    </el-col>
    <el-col :span="6" align="right">
      <span class="warning-card"><i class="fas fa-exclamation-triangle animate__animated animate__flash animate__infinite"></i>作业警戒中</span>
      <div class="date-time">
        <span class="time">{{headerTime.time}}</span><br />
        <span class="date">[ {{headerTime.date}} ]</span>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { ref, reactive, onMounted } from "vue";

const headerTime = ref({
  date: "0000-00-00",
  time: "00:00:00",
});

onMounted(() => {
  getCurTime();
});

const getCurTime = () => {
  setInterval(() => {
    headerTime.value.date = moment().format('YYYY-MM-DD');;
    headerTime.value.time = moment().format('hh:mm:ss');;
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
.warning-card {
  margin-right: 20px;
  padding: 5px 20px;
  color: $gError;
  border: 2px $gError dashed;
  border-radius: 4px;
  background: url(~@/assets/images/warning_bg.png) repeat;
  background-size: contain;
  background-position: 0% 0%;
  animation: gradient 50s linear 0s infinite;
  // animation: gradient 5s linear 0s infinite;
  animation-direction: normal;
  font-weight: bold;
  .fas {
    margin-right: 6px;
    color: $gError;
    font-size: 18px;
    vertical-align: text-top;
    animation-duration: 2s;
  }
}
.date-time {
  font-family: timeFont;
  float: right;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  padding-top: 14px;
  box-sizing: border-box;
  .time {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }
  .date {
    color: $gTitleColor;
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
