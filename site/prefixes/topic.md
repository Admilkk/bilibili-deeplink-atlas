# 前缀：topic

前缀 `topic` 下的全部路由，主要归入“话题”相关页面或入口。

- 路由数：`8`

## `bilibili://topic`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题”，类型为 原生。
- 关联入口：`bilibili://topic/**`、`bilibili://topic_center`、`bilibili://topic_center/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic" />

## `bilibili://topic/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://topic`、`bilibili://topic_center`、`bilibili://topic_center/**`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://topic/**" />

## `bilibili://topic/create`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / create”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic/create" />

## `bilibili://topic/create-old`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / create old”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic/create-old" />

## `bilibili://topic/detail/home_tab/{topic_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / 详情 / home tab / topic_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `topic_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://topic/detail/home_tab/{topic_id}" config-link="/config/bilibili-topic-detail-home_tab-topic_id" />

## `bilibili://topic/detail/live/{topic_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / 详情 / 直播 / topic_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `topic_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://topic/detail/live/{topic_id}" config-link="/config/bilibili-topic-detail-live-topic_id" />

## `bilibili://topic/dialog`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / 弹窗”，类型为 原生。
- 关联入口：`bilibili://list/bottom/dialog`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic/dialog" />

## `bilibili://topic/publish/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题 / publish / 搜索”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic/publish/search" />
