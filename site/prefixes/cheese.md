# 前缀：cheese

前缀 `cheese` 下的全部路由，主要归入“cheese”相关页面或入口。

- 路由数：`5`

## `bilibili://cheese/pay`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“cheese / 支付”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://cheese/pay" />

## `bilibili://cheese/pay-guide`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“cheese / pay guide”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://cheese/pay-guide" />

## `bilibili://cheese/season/{season_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“cheese / season / season_id 参数”，类型为 原生。
- 关联入口：`bilibili://united_video`、`bilibili://united_video/**`、`bilibili://cheese/season/ep/{epid}`
:::

### 参数说明

- `season_id`：合集、剧集或季对象 ID。

### 快速操作

<RouteActions route="bilibili://cheese/season/{season_id}" config-link="/config/bilibili-cheese-season-season_id" />

## `bilibili://cheese/season/ep/{epid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“cheese / season / ep / epid 参数”，类型为 原生。
- 关联入口：`bilibili://united_video`、`bilibili://united_video/**`、`bilibili://cheese/season/{season_id}`
:::

### 参数说明

- `epid`：剧集 EP ID。

### 快速操作

<RouteActions route="bilibili://cheese/season/ep/{epid}" config-link="/config/bilibili-cheese-season-ep-epid" />

## `bilibili://cheese/web`

::: info 路由说明
- 类型：`web`
- 说明：bilibili 协议 路由，归入“cheese / 网页”，类型为 网页。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://cheese/web" />
