# 配置：bilibili://pgc/timeline/{timeline_type}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“PGC / timeline / timeline_type 参数”，类型为 原生。

<RouteConfig
  route="bilibili://pgc/timeline/{timeline_type}"
  :path-params='["timeline_type"]'
  :query-params='[]'
/>
