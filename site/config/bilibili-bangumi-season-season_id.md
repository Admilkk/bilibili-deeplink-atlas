# 配置：bilibili://bangumi/season/{season_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / season / season_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://bangumi/season/{season_id}"
  :path-params='["season_id"]'
  :query-params='[]'
/>
