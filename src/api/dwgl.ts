import request from "@/utils/request";

// 添加单位管理
export function addDwgl(data: any) {
  return request({
    url: "/api/dwgl/addDwgl",
    method: "post",
    data,
  });
}

// 删除单位管理
export function deleteDwgl(data: any) {
  return request({
    url: "/api/dwgl/deleteDwgl",
    method: "post",
    data,
  });
}

// 查询单位管理
export function queryDwglList(data: any) {
  return request({
    url: "/api/dwgl/queryDwglList",
    method: "post",
    data,
  });
}

// 查询单位管理分页
export function queryDwglListPage(data: any) {
  return request({
    url: "/api/dwgl/queryDwglListPage",
    method: "post",
    data,
  });
}

// 更新单位管理
export function updateDwgl(data: any) {
  return request({
    url: "/api/dwgl/updateDwgl",
    method: "post",
    data,
  });
}