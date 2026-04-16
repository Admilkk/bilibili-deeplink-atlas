# 配置：bilibili://article/readlist/{listId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / readlist / listId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://article/readlist/{listId}"
  :path-params='["listId"]'
  :query-params='[]'
/>
