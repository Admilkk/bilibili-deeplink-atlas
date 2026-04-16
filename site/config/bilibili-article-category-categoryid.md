# 配置：bilibili://article/category/{categoryId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / 分区 / categoryId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://article/category/{categoryId}"
  :path-params='["categoryId"]'
  :query-params='[]'
/>
