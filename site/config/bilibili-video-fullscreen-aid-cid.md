# 配置：bilibili://video/fullscreen/{aid}/{cid}/**

- 类型：`native`
- 说明：bilibili 协议 路由，归入“视频 / fullscreen / aid 参数 / cid 参数 / 后续子路径”，类型为 原生。

<RouteConfig
  route="bilibili://video/fullscreen/{aid}/{cid}/**"
  :path-params='["aid","cid"]'
  :query-params='[]'
/>
