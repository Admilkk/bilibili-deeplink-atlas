# 配置：bilibili://tag/{tagId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“标签 / tagId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://tag/{tagId}"
  :path-params='["tagId"]'
  :query-params='[]'
/>
