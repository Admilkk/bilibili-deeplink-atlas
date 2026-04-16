# 配置：bilibili://comment2/list/filter/{name}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / 列表 / 筛选 / name 参数”，类型为 原生。

<RouteConfig
  route="bilibili://comment2/list/filter/{name}"
  :path-params='["name"]'
  :query-params='[]'
/>
