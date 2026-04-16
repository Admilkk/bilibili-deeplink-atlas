# 配置：bilibili://search/{kw}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“搜索 / kw 参数”，类型为 原生。

<RouteConfig
  route="bilibili://search/{kw}"
  :path-params='["kw"]'
  :query-params='[]'
/>
