# 配置：bilibili://live/{extra_room_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“直播 / extra_room_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://live/{extra_room_id}"
  :path-params='["extra_room_id"]'
  :query-params='[]'
/>
