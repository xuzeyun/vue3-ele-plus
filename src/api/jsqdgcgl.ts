import request from "@/utils/request";

// ================== 接收数据管理 ==================
// 按城市统计接收数据管理
export function queryJssjglNumByCity(data: any) {
  return request({
    url: "/api/jssjgl/queryJssjglNumByCity",
    method: "post",
    data,
  });
}
// 查询接收数据管理分页
export function queryJssjglListPage(data: any) {
  return request({
    url: "/api/jssjgl/queryJssjglListPage",
    method: "post",
    data,
  });
}

// ================== 处置类型处理 ==================

// 查询处置类型管理分页
export function queryCzlxglListPage(data: any) {
  return request({
    url: "/api/czlxgl/queryCzlxglListPage",
    method: "post",
    data,
  });
}

// ================== 收处计划管理 ==================

// 添加收处计划管理
export function addScjhgl(data: any) {
  return request({
    url: "/api/Scjhgl/addScjhgl",
    method: "post",
    data,
  });
}

// 删除收处计划管理
export function deleteScjhgl(data: any) {
  return request({
    url: "/api/Scjhgl/deleteScjhgl",
    method: "post",
    data,
  });
}

// 获得一个收处计划管理
export function getScjhglDtoById(data: any) {
  return request({
    url: "/api/Scjhgl/getScjhglDtoById",
    method: "post",
    data,
  });
}

// 查询收处计划管理
export function queryScjhglList(data: any) {
  return request({
    url: "/api/Scjhgl/queryScjhglList",
    method: "post",
    data,
  });
}

// 查询收处计划管理分页
export function queryScjhglListPage(data: any) {
  return request({
    url: "/api/Scjhgl/queryScjhglListPage",
    method: "post",
    data,
  });
}

// 更新收处计划管理
export function updateScjhgl(data: any) {
  return request({
    url: "/api/Scjhgl/updateScjhgl",
    method: "post",
    data,
  });
}

// ================== 清点管理 ==================

// 添加清点物资管理
export function addQdwzgl(data: any) {
  return request({
    url: "/api/qdwzgl/addQdwzgl",
    method: "post",
    data,
  });
}
// 删除清点物资管理
export function deleteQdwzgl(data: any) {
  return request({
    url: "/api/qdwzgl/deleteQdwzgl",
    method: "post",
    data,
  });
}
// 查询清点物资管理
export function queryQdwzglList(data: any) {
  return request({
    url: "/api/qdwzgl/queryQdwzglList",
    method: "post",
    data,
  });
}
// 查询清点物资管理分页
export function queryQdwzglListPage(data: any) {
  return request({
    url: "/api/qdwzgl/queryQdwzglListPage",
    method: "post",
    data,
  });
}
// 更新清点物资管理
export function updateQdwzgl(data: any) {
  return request({
    url: "/api/qdwzgl/updateQdwzgl",
    method: "post",
    data,
  });
}
