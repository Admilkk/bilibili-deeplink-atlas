# 配置：bilibili://campus/topic/{campus_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“校园 / 话题 / campus_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://campus/topic/{campus_id}"
  :path-params='["campus_id"]'
  :query-params='[]'
/>
