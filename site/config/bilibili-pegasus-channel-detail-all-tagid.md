# 配置：bilibili://pegasus/channel/detail/all/{tagId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / all / tagId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://pegasus/channel/detail/all/{tagId}"
  :path-params='["tagId"]'
  :query-params='[]'
/>
