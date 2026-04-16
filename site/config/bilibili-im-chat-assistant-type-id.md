# 配置：bilibili://im/chat/assistant/{type}/{id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / assistant / type 参数 / id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://im/chat/assistant/{type}/{id}"
  :path-params='["type","id"]'
  :query-params='[]'
/>
