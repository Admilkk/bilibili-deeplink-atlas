# 配置：bilibili://article/{cvId}

- 类型：`web`
- 说明：bilibili 协议 路由，归入“专栏 / cvId 参数”，类型为 网页。

<RouteConfig
  route="bilibili://article/{cvId}"
  :path-params='["cvId"]'
  :query-params='[]'
/>
