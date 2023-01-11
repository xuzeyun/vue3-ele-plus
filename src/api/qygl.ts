import request from "@/utils/request";

// 添加区域管理
export function addQygl(data: any) {
  return request({
    url: "/api/qygl/addQygl",
    method: "post",
    data,
  });
}

// 删除区域管理
export function deleteQygl(data: any) {
  return request({
    url: "/api/qygl/deleteQygl",
    method: "post",
    data,
  });
}

// 查询区域管理
export function queryQyglList(data: any) {
  return request({
    url: "/api/qygl/queryQyglList",
    method: "post",
    data,
  });
}

// 查询区域管理分页
export function queryQyglListPage(data: any) {
  return request({
    url: "/api/qygl/queryQyglListPage",
    method: "post",
    data,
  });
}

// 更新区域管理
export function updateQygl(data: any) {
  return request({
    url: "/api/qygl/updateQygl",
    method: "post",
    data,
  });
}