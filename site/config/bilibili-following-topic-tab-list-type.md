# 配置：bilibili://following/topic/tab/list/{type}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“关注 / 话题 / tab / 列表 / type 参数”，类型为 原生。

<RouteConfig
  route="bilibili://following/topic/tab/list/{type}"
  :path-params='["type"]'
  :query-params='[]'
/>
