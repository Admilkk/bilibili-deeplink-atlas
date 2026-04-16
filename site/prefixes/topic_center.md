# 前缀：topic_center

前缀 `topic_center` 下的全部路由，主要归入“话题中心”相关页面或入口。

- 路由数：`2`

## `bilibili://topic_center`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题中心”，类型为 原生。
- 关联入口：`bilibili://topic`、`bilibili://topic/**`、`bilibili://topic_center/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://topic_center" />

## `bilibili://topic_center/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“话题中心 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://topic`、`bilibili://topic/**`、`bilibili://topic_center`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://topic_center/**" />
