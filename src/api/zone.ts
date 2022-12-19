// 地区查询
import request from "@/utils/request";

// 城市查询
export function getCsList(data: any) {
  return request({
    url: "/api/zone/getCsList",
    method: "post",
    data,
  });
}

// 省份查询
export function getSfList(data: any) {
  return request({
    url: "/api/zone/getSfList",
    method: "post",
    data,
  });
}
