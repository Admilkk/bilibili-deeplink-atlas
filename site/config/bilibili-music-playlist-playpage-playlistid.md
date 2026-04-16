# 配置：bilibili://music/playlist/playpage/{playlistId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / playpage / playlistId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://music/playlist/playpage/{playlistId}"
  :path-params='["playlistId"]'
  :query-params='[]'
/>
