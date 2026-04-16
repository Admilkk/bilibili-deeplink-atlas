# 配置：bilibili://im/chat/ai/{sub_type}/{id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / ai / sub_type 参数 / id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://im/chat/ai/{sub_type}/{id}"
  :path-params='["sub_type","id"]'
  :query-params='[]'
/>
