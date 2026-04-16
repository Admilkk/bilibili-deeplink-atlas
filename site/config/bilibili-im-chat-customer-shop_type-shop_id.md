# 配置：bilibili://im/chat/customer/{shop_type}/{shop_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / customer / shop_type 参数 / shop_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://im/chat/customer/{shop_type}/{shop_id}"
  :path-params='["shop_type","shop_id"]'
  :query-params='[]'
/>
