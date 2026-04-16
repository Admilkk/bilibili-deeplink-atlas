# 配置：bilibili://mall/order/detail/{orderId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“会员购 / order / 详情 / orderId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://mall/order/detail/{orderId}"
  :path-params='["orderId"]'
  :query-params='[]'
/>
