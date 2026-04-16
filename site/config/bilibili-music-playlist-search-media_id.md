# 配置：bilibili://music/playlist/search/{media_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / 搜索 / media_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://music/playlist/search/{media_id}"
  :path-params='["media_id"]'
  :query-params='[]'
/>
