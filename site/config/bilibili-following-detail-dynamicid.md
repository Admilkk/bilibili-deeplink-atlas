# 配置：bilibili://following/detail/{dynamicId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“关注 / 详情 / dynamicId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://following/detail/{dynamicId}"
  :path-params='["dynamicId"]'
  :query-params='[]'
/>
