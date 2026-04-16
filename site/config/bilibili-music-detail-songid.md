# 配置：bilibili://music/detail/{songId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 详情 / songId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://music/detail/{songId}"
  :path-params='["songId"]'
  :query-params='[]'
/>
