# 配置：bilibili://im/setting/{setting_type}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / 设置 / setting_type 参数”，类型为 原生。

<RouteConfig
  route="bilibili://im/setting/{setting_type}"
  :path-params='["setting_type"]'
  :query-params='[]'
/>
