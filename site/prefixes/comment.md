# 前缀：comment

前缀 `comment` 下的全部路由，主要归入“评论”相关页面或入口。

- 路由数：`3`

## `bilibili://comment/detail/{type}/{oid}/{commentId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / 详情 / type 参数 / oid 参数 / commentId 参数”，类型为 原生。
- 关联入口：`activity://comment2/detail`
:::

### 参数说明

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。

### 快速操作

<RouteActions route="bilibili://comment/detail/{type}/{oid}/{commentId}" config-link="/config/bilibili-comment-detail-type-oid-commentid" />

## `bilibili://comment/half_web`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / half web”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment/half_web" />

## `bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“评论 / msg fold / type 参数 / oid 参数 / commentId 参数 / cardId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。
- `cardId`：卡片 ID。

### 快速操作

<RouteActions route="bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}" config-link="/config/bilibili-comment-msg_fold-type-oid-commentid-cardid" />
