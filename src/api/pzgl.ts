import request from "@/utils/request";

// ================== 时间计划配置 ==================

// 添加时间计划配置管理
export function addSjjhpzgl(data: any) {
  return request({
    url: "/api/sjjhpzgl/addSjjhpzgl",
    method: "post",
    data,
  });
}

// 查询时间计划配置管理
export function querySjjhpzglList(data: any) {
  return request({
    url: "/api/sjjhpzgl/querySjjhpzglList",
    method: "post",
    data,
  });
}

// 更新时间计划配置管理
export function updateSjjhpzgl(data: any) {
  return request({
    url: "/api/sjjhpzgl/updateSjjhpzgl",
    method: "post",
    data,
  });
}

// ================== 产能策略配置管理 ==================

// 添加产能策略配置管理
export function addCnclpzgl(data: any) {
  return request({
    url: "/api/cnclpzgl/addCnclpzgl",
    method: "post",
    data,
  });
}

// 删除产能策略配置管理
export function deleteCnclpzgl(data: any) {
  return request({
    url: "/api/cnclpzgl/deleteCnclpzgl",
    method: "post",
    data,
  });
}

// 查询产能策略配置管理
export function queryCnclpzglList(data: any) {
  return request({
    url: "/api/cnclpzgl/queryCnclpzglList",
    method: "post",
    data,
  });
}

// 查询产能策略配置管理分页
export function queryCnclpzglListPage(data: any) {
  return request({
    url: "/api/cnclpzgl/queryCnclpzglListPage",
    method: "post",
    data,
  });
}

// 更新产能策略配置管理
export function updateCnclpzgl(data: any) {
  return request({
    url: "/api/cnclpzgl/updateCnclpzgl",
    method: "post",
    data,
  });
}
