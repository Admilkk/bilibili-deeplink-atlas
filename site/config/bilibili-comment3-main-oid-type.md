# 配置：bilibili://comment3/main/{oid}/{type}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / 主站 / oid 参数 / type 参数”，类型为 原生。

<RouteConfig
  route="bilibili://comment3/main/{oid}/{type}"
  :path-params='["oid","type"]'
  :query-params='[]'
/>
