# 前缀：bangumi

前缀 `bangumi` 下的全部路由，主要归入“番剧”相关页面或入口。

- 路由数：`7`

## `bilibili://bangumi`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧”，类型为 原生。
- 关联入口：`bilibili://pgc/season`、`bilibili://pgc/season/ep/{epid}`、`bilibili://bangumi/season/{season_id}`、`bilibili://pgc/season/{season_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi" />

## `bilibili://bangumi/feedback`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / 反馈”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi/feedback" />

## `bilibili://bangumi/review-feedback`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / review feedback”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi/review-feedback" />

## `bilibili://bangumi/review/review-list`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / review / review list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi/review/review-list" />

## `bilibili://bangumi/review/short-review-publish`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / review / short review publish”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi/review/short-review-publish" />

## `bilibili://bangumi/season/{season_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / season / season_id 参数”，类型为 原生。
- 关联入口：`bilibili://pgc/season`、`bilibili://pgc/season/ep/{epid}`、`bilibili://bangumi`、`bilibili://pgc/season/{season_id}`
:::

### 参数说明

- `season_id`：合集、剧集或季对象 ID。

### 快速操作

<RouteActions route="bilibili://bangumi/season/{season_id}" config-link="/config/bilibili-bangumi-season-season_id" />

## `bilibili://bangumi/sponsor-rank`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“番剧 / sponsor rank”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://bangumi/sponsor-rank" />
