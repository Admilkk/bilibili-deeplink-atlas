# 配置：bilibili://pegasus/vertical/{channel_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / vertical / channel_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://pegasus/vertical/{channel_id}"
  :path-params='["channel_id"]'
  :query-params='[]'
/>
