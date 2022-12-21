<template>
  <div class="home-wrap">
    <div class="left">
      <div class="area area-a">
        <h3>操作台</h3>
        <div class="img-box">
          <div class="time">2022-12-12 13:45:40</div>
          <div class="channel">
            <el-dropdown>
              <span class="el-dropdown-link">
                频道1
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>频道1</el-dropdown-item>
                  <el-dropdown-item>频道2</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button type="primary" link :icon="FullScreen">放大</el-button>
          </div>
          <img src="images/tank.jpg" />
        </div>
      </div>
      <div class="area area-b">
        <h3>残渣入口</h3>
        <div class="img-box">
          <div class="time">2022-12-12 13:45:40</div>
          <div class="channel">
            <el-dropdown>
              <span class="el-dropdown-link">
                频道1
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>频道1</el-dropdown-item>
                  <el-dropdown-item>频道2</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button type="primary" link :icon="FullScreen">放大</el-button>
          </div>
          <img src="images/tank.jpg" />
        </div>
      </div>
      <div class="area area-c">
        <h3>残渣出口</h3>
        <div class="img-box">
          <div class="time">2022-12-12 13:45:40</div>
          <div class="channel">
            <el-dropdown>
              <span class="el-dropdown-link">
                频道1
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>频道1</el-dropdown-item>
                  <el-dropdown-item>频道2</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button type="primary" link :icon="FullScreen">放大</el-button>
          </div>
          <img src="images/tank.jpg" />
        </div>
      </div>
    </div>
    <div class="center">
      <div class="area area-d">
        <div class="chart-left">
          <div class="bar">
            <span class="title">今日目标：</span>
            <span class="big-test">2000<i>把</i></span>
          </div>
          <div class="bar">
            <span class="title">已完成：</span>
            <span class="big-test">1600<i>把</i></span>
          </div>
          <div class="bar">
            <span class="title">当前速率：</span>
            <span>4把/分</span>
          </div>
          <div class="bar">
            <span class="title">距今日完成还需：</span>
            <span>3小时25分钟</span>
          </div>
        </div>
        <div class="chart-center">
          <div class="yuan">
            <div class="orn orn1"></div>
            <div class="orn orn2"></div>
            <div class="orn orn3"></div>
            <el-progress type="circle" :percentage="chartValue" stroke-linecap="butt" stroke-width="6" width="80" indeterminate>
              <template #default="{ percentage }">
                <span class="percentage-value">{{ percentage }}%</span>
                <span class="percentage-label">完成百分比</span>
              </template>
            </el-progress>
          </div>
        </div>
        <div class="chart-right">
          <div class="bar">
            <span class="title">残渣袋：</span
            ><span class="big-test light"
              >1000KG<el-icon><Edit /></el-icon
            ></span>
          </div>
          <div class="bar">
            <span class="title">已使用：</span>
            <span class="big-test">600KG</span>
          </div>
          <div class="bar">
            <span class="title">剩余容量：</span>
            <span class="big-test">400KG</span>
          </div>
          <div class="bar" style="text-align: center">
            <a class="rlfw-btn" href="javaScript:;">容量复位</a>
          </div>
        </div>
      </div>
      <div class="area area-e" style="flex: 2"></div>
    </div>
    <div class="right">
      <div class="area area-f" style="flex: 2">
        <h3>系统告警</h3>
        <ul>
          <li class="wran">
            <em></em>
            <div class="clearfix">
              <b>2022-11-04 16:25:05</b>
              <span class="span-primary">查看详情</span>
              <span class="span-error">解除报警</span>
            </div>
            <div>
              <p>当前袋容量已经超过最大容量，请及时更换残渣袋。</p>
            </div>
          </li>
          <li>
            <em></em>
            <div class="clearfix">
              <b>2022-11-04 16:25:05</b>
              <span class="span-primary">查看详情</span>
              <span class="span-success">已解除</span>
            </div>
            <div>
              <p>当前袋容量已经超过最大容量，请及时更换残渣袋。</p>
            </div>
          </li>
          <li>
            <em></em>
            <div class="clearfix">
              <b>2022-11-04 16:25:05</b>
              <span class="span-primary">查看详情</span>
              <span class="span-success">已解除</span>
            </div>
            <div>
              <p>当前袋容量已经超过最大容量，请及时更换残渣袋。</p>
            </div>
          </li>
          <li>
            <em></em>
            <div class="clearfix">
              <b>2022-11-04 16:25:05</b>
              <span class="span-primary">查看详情</span>
              <span class="span-success">已解除</span>
            </div>
            <div>
              <p>当前袋容量已经超过最大容量，请及时更换残渣袋。</p>
            </div>
          </li>
          <li>
            <em></em>
            <div class="clearfix">
              <b>2022-11-04 16:25:05</b>
              <span class="span-primary">查看详情</span>
              <span class="span-success">已解除</span>
            </div>
            <div>
              <p>当前袋容量已经超过最大容量，请及时更换残渣袋。</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="area area-g">
        <h3>点位总进度</h3>
        <div class="box">
          <div class="box-top">
            <div class="box-left">
              <div class="box-left-a g-box-orn">
                <i class="g-orn1"></i>
                <i class="g-orn2"></i>
                <i class="g-orn3"></i>
                <i class="g-orn4"></i>
                <dl>
                  <dt>总目标</dt>
                  <dd><b>3000</b>把</dd>
                </dl>
              </div>
              <div class="box-left-b g-box-orn g-box-orn-err">
                <i class="g-orn1"></i>
                <i class="g-orn2"></i>
                <i class="g-orn3"></i>
                <i class="g-orn4"></i>
                <dl>
                  <dt class="err">已完成</dt>
                  <dd><b>1200</b>把</dd>
                </dl>
              </div>
            </div>
            <div class="box-right g-box-orn">
              <i class="g-orn1"></i>
              <i class="g-orn2"></i>
              <i class="g-orn3"></i>
              <i class="g-orn4"></i>
              <div ref="sbt" style="height: 100%"></div>
            </div>
          </div>
          <div class="box-bottom">
            <div class="box-bottom-a">
              <dl>
                <dt>计划天数</dt>
                <dd><b>10</b>天</dd>
              </dl>
            </div>
            <div class="box-bottom-b">
              <dl>
                <dt>已进行</dt>
                <dd><b>3</b>天</dd>
              </dl>
            </div>
            <div class="box-bottom-c">
              <dl>
                <dt>剩余</dt>
                <dd><b>7</b>天</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref } from "vue";
import * as echarts from "echarts";
import { FullScreen } from "@element-plus/icons-vue";
import "echarts-liquidfill";

const sbt: Ref<HTMLElement | any> = ref(null);

let chartValue = ref(0);

onMounted(() => {
  chartValue.value = 75;
});

var option = {
  series: [
    {
      type: "liquidFill",
      name: "liquid Fill",
      radius: "80%",
      data: [
        {
          name: "完成率",
          value: 0.6,
        },
        0.5,
      ],
      outline: {
        // show: false,
        borderDistance: 0,
        itemStyle: {
          borderWidth: 2,
          borderColor: "#156ACF",
          shadowBlur: 20,
          shadowColor: "rgba(255, 0, 0, 1)",
        },
      },
      label: {
        formatter: function (param: any) {
          return param.value * 100 + "%\n" + param.name;
        },
        fontSize: 18,
      },
    },
  ],
};

onMounted(() => {
  var myChart = echarts.init(sbt.value);
  option && myChart.setOption(option);
});

const addNumber = (val: number, time = 1000) => {
  let status = false,
    step = Math.ceil(val / (time / 30)),
    count = 0,
    interval: any = null;
  interval = setInterval(() => {
    if (count >= val) {
      status = true;
      count = val;
    } else {
      count = count + step;
    }
    if (status) {
      clearInterval(interval);
    }
    return count;
  }, 30);
};
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
      overflow: hidden;
      h3 {
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        padding-left: 34px;
        border-bottom: $gBorderColor 1px solid;
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
      .img-box {
        height: calc(100% - 38px);
        position: relative;
        img {
          width: 100%;
        }
        .time {
          position: absolute;
          padding: 2px 4px;
          top: 5px;
          left: 5px;
          background-color: rgba($color: #000000, $alpha: 0.5);
        }
        .channel {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 4px 8px;
          background-color: rgba($color: #000000, $alpha: 0.5);
          .el-button {
            color: #fff;
            float: right;
          }
        }
      }
    }
    // area-f 系统告警
    .area-f {
      ul {
        height: calc(100% - 38px);
        padding: 10px;
        overflow: auto;
        box-sizing: border-box;
        li {
          line-height: 20px;
          border-radius: 6px;
          border: $gBorderColor 1px solid;
          padding: 6px;
          padding-left: 15px;
          margin-bottom: 8px;
          position: relative;
          em {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-left: -10px;
            margin-top: 8px;
            background-color: $gSuccess;
          }
          b {
            font-size: 14px;
            color: $gTitleColor;
          }
          span {
            float: right;
            display: block;
            padding: 1px 4px;
            border-radius: 4px;
            line-height: 16px;
            font-size: 12px;
          }
          .span-error {
            border: $gError 1px solid;
            color: $gError;
          }
          .span-primary {
            border: $gPrimary 1px solid;
            color: $gPrimary;
            margin-left: 6px;
          }
          .span-success {
            border: $gSuccess 1px solid;
            color: $gSuccess;
          }
          p {
            margin-top: 3px;
            line-height: 16px;
            font-size: 12px;
          }
        }
        .wran {
          border: $gError 1px solid;
          box-shadow: 0 0 5px rgba($color: $gError, $alpha: 0.8);
          em {
            background-color: $gError;
          }
        }
      }
    }
    .area-d {
      display: flex;
      .chart-left,
      .chart-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
        .bar {
          flex: 1;
          // background-color: $gBorderColor;
          display: flex;
          align-items: center;
          justify-content: center;
          .title {
            color: $gTitleColor;
            font-size: 14px;
          }
          span {
            flex: 1;
            &:first-child {
              text-align: right;
            }
            &:last-child {
              text-align: left;
            }
          }
          .big-test {
            font-size: 22px;
            font-weight: bold;
            i{
              font-style: normal;
              font-size: 14px;
              margin-left: 5px;
              color: $gGrayColor;
            }
          }
          .light {
            color: $gPrimary;
          }
          .rlfw-btn {
            display: inline-block;
            padding: 6px 20px;
            border-radius: 20px;
            border: $gPrimary 1px solid;
            color: $gPrimary;
          }
        }
      }
      .chart-left {
        .bar {
          background: linear-gradient(270deg, $gBorderColor, #0f1823);
        }
      }
      .chart-right {
        .bar {
          background: linear-gradient(90deg, $gBorderColor, #0f1823);
        }
      }
      .chart-center {
        width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $gBorderColor;
        .yuan {
          border-radius: 50%;
          border: #2e5995 4px solid;
          background-color: $gBodyBg;
          width: 150px;
          height: 150px;
          transform: scale(2, 2);
          // box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          .percentage-value {
            display: block;
            margin-top: 10px;
            font-size: 18px;
            font-weight: bold;
          }
          .percentage-label {
            display: block;
            margin-top: 4px;
            font-size: 12px;
            transform: scale(0.6, 0.6);
          }
          .orn {
            position: absolute;
          }
          .orn1 {
            width: 110px;
            height: 110px;
            background: url(~@/assets/images/clock.png) no-repeat center;
            background-size: 100% 100%;
          }
          .orn2 {
            width: 130px;
            height: 130px;
            background: url(~@/assets/images/orn.png) no-repeat center;
            background-size: 100% 100%;
            animation: rotateA 3s infinite linear;
            transform-origin: center center;
          }
          .orn3 {
            width: 116px;
            height: 116px;
            background: url(~@/assets/images/orn2.png) no-repeat center;
            background-size: 100% 100%;
            animation: rotateB 5s infinite linear;
            transform-origin: center center;
          }
        }
      }
    }
    .area-g {
      .box {
        height: calc(100% - 38px);
        display: flex;
        flex-direction: column;
        padding: 8px;
        box-sizing: border-box;
        gap: 8px;
        dl {
          dt {
            color: $gTitleColor;
            font-size: 12px;
          }
          dt.err{
            color: #ea8b37;
          }
          dd {
            font-size: 12px;
            b {
              font-size: 20px;
              margin-right: 2px;
              font-family: "DIN Alternate";
            }
          }
        }
        .box-top {
          flex: 2;
          display: flex;
          gap: 8px;
          .box-left {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
            .box-left-a,
            .box-left-b {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            .box-left-a {
              background-color: #121f2f;
            }
            .box-left-b {
              background-color: #252425;
            }
          }
          .box-right {
            flex: 2;
          }
        }
        .box-bottom {
          flex: 1;
          display: flex;
          .box-bottom-a,
          .box-bottom-b,
          .box-bottom-c {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            dl{
              width: 70%;
              height: 100%;
              background: url(~@/assets/images/home_num_bg.png) no-repeat center bottom;
              background-size: 100% auto;
              display: flex;
              flex-direction: column;
              dt{
                flex: 1;
              }
              dd{
                flex: 2;
              }
            }
          }
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
@-webkit-keyframes rotateA {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
@-webkit-keyframes rotateB {
  0% {
    transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}
</style>
