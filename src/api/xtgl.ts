import request from "@/utils/request";

// 添加字典类型管理
export function addZdlxgl(data: any) { return request({ url: "/api/zdlxgl/addZdlxgl", method: "post", data })}
// 删除字典类型管理
export function deleteZdlxgl(data: any) { return request({ url: "/api/zdlxgl/deleteZdlxgl", method: "post", data })}
// 查询字典类型管理
export function queryZdlxglList(data: any) { return request({ url: "/api/zdlxgl/queryZdlxglList", method: "post", data })}
// 查询字典类型管理分页
export function queryZdlxglListPage(data: any) { return request({ url: "/api/zdlxgl/queryZdlxglListPage", method: "post", data })}
// 更新字典类型管理
export function updateZdlxgl(data: any) { return request({ url: "/api/zdlxgl/updateZdlxgl", method: "post", data })}


// 添加字典数据管理
export function addZdsjgl(data: any) { return request({ url: "/api/zdsjgl/addZdsjgl", method: "post", data })}
// 删除字典数据管理
export function deleteZdsjgl(data: any) { return request({ url: "/api/zdsjgl/deleteZdsjgl", method: "post", data })}
// 查询字典数据管理
export function queryZdsjglList(data: any) { return request({ url: "/api/zdsjgl/queryZdsjglList", method: "post", data })}
// 查询字典数据管理分页
export function queryZdsjglListPage(data: any) { return request({ url: "/api/zdsjgl/queryZdsjglListPage", method: "post", data })}
// 更新字典数据管理
export function updateZdsjgl(data: any) { return request({ url: "/api/zdsjgl/updateZdsjgl", method: "post", data })}
