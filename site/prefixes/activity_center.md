# 前缀：activity_center

前缀 `activity_center` 下的全部路由，主要归入“活动中心”相关页面或入口。

- 路由数：`2`

## `bilibili://activity_center`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“活动中心”，类型为 原生。
- 关联入口：`bilibili://activity_center/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://activity_center" />

## `bilibili://activity_center/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“活动中心 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://activity_center`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://activity_center/**" />
