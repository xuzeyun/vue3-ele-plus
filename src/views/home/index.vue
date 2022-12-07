<template>
  <div class="home-wrap">
    <div class="left">
      <div class="area area-a">
        <h3>操作台</h3>
      </div>
      <div class="area area-b">
        <h3>残渣入口</h3>
      </div>
      <div class="area area-c">
        <h3>残渣出口</h3>
      </div>
    </div>
    <div class="center">
      <div class="area area-d"></div>
      <div class="area area-e" style="flex: 2"></div>
    </div>
    <div class="right">
      <div class="area area-f" style="flex: 2">
        <h3>系统告警</h3>
      </div>
      <div class="area area-g">
        <h3>点位总进度</h3>
        <div ref="sbt" style="height: 200px"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, Ref } from "vue";
import * as echarts from "echarts";
import "echarts-liquidfill";

const sbt: Ref<HTMLElement | any> = ref(null);

var option = {
  series: [
    {
      type: "liquidFill",
      name: "liquid Fill",
      data: [
        {
          name: "完成率",
          value: 0.6,
        },
        0.5,
      ],
      label: {
        formatter: function (param: any) {
          return param.value + "\n" + param.name;
        },
        fontSize: 16,
      },
    },
  ],
};

onMounted(() => {
  var myChart = echarts.init(sbt.value);
  option && myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.home-wrap {
  display: flex;
  gap: 16px;
  height: 100%;
  .left,
  .center,
  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .area {
      flex: 1;
      background-color: $gBodyBg;
      border: $gBorderColor 1px solid;
      h3 {
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        padding-left: 34px;
        border-bottom: $gBorderColor 1px solid;
        // background: url(~@/assets/images/home_title_orn.png) no-repeat 9px center;
        background: url(~@/assets/images/home_tit_icon.png) no-repeat 9px center, linear-gradient(-90deg, #0f1823, #0d3152);
        background-size: 4%, auto;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          right: 8px;
          top: 0;
          width: 50%;
          height: 100%;
          background: url(~@/assets/images/home_tit_bg.png) no-repeat right center;
        }
      }
    }
  }

  .left,
  .right {
    flex: 1;
  }
  .center {
    flex: 2;
  }
}
</style>
