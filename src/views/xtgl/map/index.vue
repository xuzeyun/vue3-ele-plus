<template>
  <div class="g-flex-col">
    <div ref="mapRef" style="height: 100%"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted, reactive } from "vue";
// import china from "@/data/map/china.json";
// import chinaCities from "@/data/map/china-cities.json";
// import aomen from "@/data/map/province/aomen.json";
// import sichuan from "@/data/map/province/sichuan.json";

// async function importModules() {
  
// }

// importModules();
import files from "@/data/map/province/index.js";
const queryDict = {
  '安徽': 'anhui',
  '澳门': 'aomen',
  '北京': 'beijing',
  '中国': 'china',
  '重庆': 'chongqing',
  '福建': 'fujian',
  '甘肃': 'gansu',
  '广东': 'guangdong',
  '广西': 'guangxi',
  '广州': 'guangzhou',
  '海南': 'hainan',
  '河北': 'hebei',
  '黑龙江': 'heilongjiang',
  '河南': 'henan',
  '湖北': 'hubei',
  '湖南': 'hunan',
  '江苏': 'jiangsu',
  '江西': 'jiangxi',
  '吉林': 'jilin',
  '辽宁': 'liaoning',
  '内蒙古': 'neimenggu',
  '宁夏': 'ningxia',
  '青海': 'qinghai',
  '山东': 'shandong',
  '上海': 'shanghai',
  '山西': 'shanxi',
  '陕西': 'shanxi1',
  '四川': 'sichuan',
  '台湾': 'taiwan',
  '天津': 'tianjin',
  '香港': 'xianggang',
  '新疆': 'xinjiang',
  '西藏': 'xizang',
  '云南': 'yunnan',
  '浙江': 'zhejiang',
}




onMounted(() => {
  console.log(files);
  init();
  
})



const mapRef = ref();
const curMap = ref('province');
let myChart = null;
let mapOption = reactive({
  color: ["#ddd", "#666"],
  title: {
    text: "中国战区地图",
    subtext: "China war zone map",
    left: "right",
  },
  geo: {
    // 设置为一张完整经纬度的世界地图
    map: "china",
    show: true,
    roam: true, // 缩放 及 平移
    // zoom: 1,    // 缩放比例
    // 区域色及区域边框色
    itemStyle: {
      areaColor: "#ddd",
      borderColor: "#fff",
    },
    // 区域名称
    label: {
      show: true,
      color: "#9a9898",
    },
    regions: [
      {
        name: "南海诸岛",
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false,
            },
          },
        },
      },
      // {
      //   name: "北部战区",
      //   itemStyle: {
      //     areaColor: "#3A627A",
      //     color: "red",
      //   },
      // },
      // {
      //   name: "中部战区",
      //   itemStyle: {
      //     areaColor: "#BF1E29",
      //     color: "red",
      //   },
      // },
      // {
      //   name: "西部战区",
      //   itemStyle: {
      //     areaColor: "#A0BECD",
      //     color: "red",
      //   },
      // },
      // {
      //   name: "南部战区",
      //   itemStyle: {
      //     areaColor: "#262C44",
      //     color: "red",
      //   },
      //   label: {
      //     color: "#262C44",
      //   },
      // },
      // {
      //   name: "东部战区",
      //   itemStyle: {
      //     areaColor: "#616667",
      //     color: "red",
      //   },
      // },
    ],
  },
  // series: [
  //   {
  //     name: "节点分布",
  //     type: "map",
  //     geoIndex: 0,
  //     markPoint: {
  //       //图表标注。
  //       label: {
  //         show: true,
  //       },
  //       itemStyle: {
  //         normal: {
  //           color: "rgba(0,0,0,1)",
  //         },
  //       },
  //       data: [
  //         {
  //           name: "四川移动",
  //           coord: [104.065735, 30.659462],
  //           // symbol: 'image://home.png', // 标注图片地址路径
  //           symbolSize: 15,
  //           // value: '四川维修基地',
  //           symbolOffset: [10, 10],
  //         },
  //       ],
  //     },
  //   },
  // ],
  // series: {
  //   type: "lines",
  //   lineStyle: {
  //     width: 1,
  //     color: "#333",
  //     type: 'dashed',
  //     cap: 'round',
  //     curveness: 0.1
  //   },
  //   effect: {
  //     show: true,
  //     period: 2,
  //     trailWidth: 3,
  //     trailLength: 0.5,
  //     trailOpacity: 1,
  //     trailColor: "#000",
  //   },
  //   data: [
  //     // 成都到上海
  //     {
  //       coords: [
  //         [104.065735, 30.659462],
  //         [121.472644, 31.231706],
  //       ],
  //       value: "100",
  //     },
  //     // 成都到北京
  //     {
  //       coords: [
  //         [104.065735, 30.659462],
  //         [116.405285, 39.904989],
  //       ],
  //       value: "100",
  //     },
  //     // 成都到乌鲁木齐
  //     {
  //       coords: [
  //         [104.065735, 30.659462],
  //         [87.617733, 43.792818],
  //       ],
  //       value: "100",
  //     },
  //     // 成都到拉萨
  //     {
  //       coords: [
  //         [104.065735, 30.659462],
  //         [91.132212, 29.660361],
  //       ],
  //       value: "100",
  //     },
  //   ],
  // },
})



const init = () => {
  myChart = echarts.init(mapRef.value);
  mapInit('china', files.china);
  myChart.on('georoam', onDatazoom); // 缩放监听事件

  myChart.on("click", params => { //点击事件
    mapInit(queryDict[params.name], files[queryDict[params.name]]);
  });
}

const mapInit = (mapName = 'china', mapData = china) => {
  mapOption.geo.map = mapName;
  echarts.registerMap(mapName, mapData);
  myChart.setOption(mapOption);
}

const getZoom = () => {
  if(myChart){
    let { zoom, center } = myChart.getOption().geo[0];
    return { zoom, center }
  }
  return;
}

const onDatazoom = () => {
  // const { zoom, center } = getZoom();
  // console.log(zoom, center);
  // if(zoom >= 2 && curMap.value === 'province'){
  //   curMap.value = 'city';
  //   mapOption.geo.zoom = 2;
  //   mapInit(chinaCities);
  // } else if(zoom < 2 && curMap.value === 'city'){
  //   curMap.value = 'province';
  //   mapOption.geo.zoom = 1.5;
  //   mapInit(china);
  // }
  // const { detail, option } = this.state;
  // const { zoom } = this.getZoom();
  // const threshold = 1.7;
  
  // this.saveZoom(); // 地图缩放后，将缩放值和center保存在状态中

  // if (zoom >= threshold && !detail) {
  //     // 切换详细地图
  //     option.geo.itemStyle.normal.borderColor = darkBlue;
  //     option.geo.itemStyle.normal.shadowColor = darkBlue;
  //     this.setState({
  //         detail:true,
  //         option,
  //         curMap:sqJson
  //     });
  //     this.drawMap(sqJson);
  // } else if (detail && zoom < threshold) {
  //     // 切换默认地图
  //     option.geo.itemStyle.normal.borderColor = defaultBlue;
  //     option.geo.itemStyle.normal.shadowColor = defaultBlue;
  //     this.setState({
  //         detail:false,
  //         option,
  //         curMap:geoJson
  //     });
  //     this.drawMap(geoJson);
  // }
}



</script>