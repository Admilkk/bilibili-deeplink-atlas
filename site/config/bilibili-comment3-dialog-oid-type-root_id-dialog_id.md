# 配置：bilibili://comment3/dialog/{oid}/{type}/{root_id}/{dialog_id}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / 弹窗 / oid 参数 / type 参数 / root_id 参数 / dialog_id 参数”，类型为 原生。

<RouteConfig
  route="bilibili://comment3/dialog/{oid}/{type}/{root_id}/{dialog_id}"
  :path-params='["oid","type","root_id","dialog_id"]'
  :query-params='[]'
/>
