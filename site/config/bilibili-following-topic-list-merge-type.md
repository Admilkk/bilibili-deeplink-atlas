# 配置：bilibili://following/topic/list/merge/{type}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“关注 / 话题 / 列表 / merge / type 参数”，类型为 原生。

<RouteConfig
  route="bilibili://following/topic/list/merge/{type}"
  :path-params='["type"]'
  :query-params='[]'
/>
