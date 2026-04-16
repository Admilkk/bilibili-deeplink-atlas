# 配置：bilibili://comment/detail/{type}/{oid}/{commentId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / 详情 / type 参数 / oid 参数 / commentId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://comment/detail/{type}/{oid}/{commentId}"
  :path-params='["type","oid","commentId"]'
  :query-params='[]'
/>
