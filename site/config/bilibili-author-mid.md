# 配置：bilibili://author/{mid}/**

- 类型：`native`
- 说明：bilibili 协议 路由，归入“作者 / mid 参数 / 后续子路径”，类型为 原生。

<RouteConfig
  route="bilibili://author/{mid}/**"
  :path-params='["mid"]'
  :query-params='[]'
/>
