# 前缀：comment

本页收录前缀 `comment` 下的全部 bilibili 协议 路由，主要对应“评论”相关页面、容器或业务入口。

> 共 3 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://comment/detail/{type}/{oid}/{commentId}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 详情 / type 参数 / oid 参数 / commentId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://comment2/detail`
:::

### 参数说明

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。

### 快速操作

<RouteActions route="bilibili://comment/detail/{type}/{oid}/{commentId}" />

## `bilibili://comment/half_web`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / half web”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment/half_web" />

## `bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / msg fold / type 参数 / oid 参数 / commentId 参数 / cardId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。
- `cardId`：卡片 ID。

### 快速操作

<RouteActions route="bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}" />
