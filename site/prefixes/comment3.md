# 前缀：comment3

本页收录前缀 `comment3` 下的全部 bilibili 协议 路由，主要对应“评论”相关页面、容器或业务入口。

> 共 7 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://comment3/detail`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 详情”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/detail/{oid}/{type}/{root_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment3/detail" />

## `bilibili://comment3/detail/{oid}/{type}/{root_id}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 详情 / oid 参数 / type 参数 / root_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/detail`
:::

### 参数说明

- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `type`：类型标识。
- `root_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://comment3/detail/{oid}/{type}/{root_id}" />

## `bilibili://comment3/dialog`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 弹窗”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/dialog/{oid}/{type}/{root_id}/{dialog_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment3/dialog" />

## `bilibili://comment3/dialog/{oid}/{type}/{root_id}/{dialog_id}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 弹窗 / oid 参数 / type 参数 / root_id 参数 / dialog_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/dialog`
:::

### 参数说明

- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `type`：类型标识。
- `root_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。
- `dialog_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://comment3/dialog/{oid}/{type}/{root_id}/{dialog_id}" />

## `bilibili://comment3/half-web`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / half web”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment3/half-web" />

## `bilibili://comment3/main`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 主站”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/main/{oid}/{type}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://comment3/main" />

## `bilibili://comment3/main/{oid}/{type}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 主站 / oid 参数 / type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://comment3/main`
:::

### 参数说明

- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `type`：类型标识。

### 快速操作

<RouteActions route="bilibili://comment3/main/{oid}/{type}" />
