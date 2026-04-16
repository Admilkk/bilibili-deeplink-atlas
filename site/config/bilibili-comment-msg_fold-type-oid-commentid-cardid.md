# 配置：bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}

- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / msg fold / type 参数 / oid 参数 / commentId 参数 / cardId 参数”，类型为 原生。

<RouteConfig
  route="bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}"
  :path-params='["type","oid","commentId","cardId"]'
  :query-params='[]'
/>
