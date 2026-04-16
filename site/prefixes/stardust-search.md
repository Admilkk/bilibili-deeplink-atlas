# 前缀：stardust-search

前缀 `stardust-search` 下的全部路由，主要归入“搜索”相关页面或入口。

- 路由数：`2`

## `bilibili://stardust-search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“搜索”，类型为 原生。
- 关联入口：`bilibili://stardust-search/**`、`bilibili://search`、`bilibili://search/{kw}`、`activity://main/stardust-search`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://stardust-search" />

## `bilibili://stardust-search/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“搜索 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://search`、`bilibili://search/{kw}`、`activity://main/stardust-search`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://stardust-search/**" />
