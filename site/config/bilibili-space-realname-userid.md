# 配置：bilibili://space/realname/{userId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / realname / userId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://space/realname/{userId}"
  :path-params='["userId"]'
  :query-params='[]'
/>
