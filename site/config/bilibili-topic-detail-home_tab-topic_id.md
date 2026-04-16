# 配置：bilibili://topic/detail/home_tab/{topic_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / 详情 / home tab / topic_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://topic/detail/home_tab/{topic_id}"
  :path-params='["topic_id"]'
  :query-params='[]'
/>
